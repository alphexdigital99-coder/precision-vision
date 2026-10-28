import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { enquirySchema } from "./enquiry-schema";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const address =
      getRequestHeader("cf-connecting-ip") ||
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(address));
    const request_hash = Array.from(new Uint8Array(digest), (v) =>
      v.toString(16).padStart(2, "0"),
    ).join("");
    const { data: allowed, error: limitError } = await supabaseAdmin.rpc("allow_business_enquiry", {
      p_hash: request_hash,
    });
    if (limitError)
      return { success: false, error: "We couldn’t send your enquiry. Please try again." };
    if (!allowed)
      return { success: false, error: "Too many enquiries. Please try again in an hour." };
    const { website: _website, ...fields } = data;
    const { error } = await supabaseAdmin
      .from("business_enquiries")
      .insert({ ...fields, request_hash });
    if (error) return { success: false, error: "We couldn’t save your enquiry. Please try again." };
    return { success: true, error: null };
  });
