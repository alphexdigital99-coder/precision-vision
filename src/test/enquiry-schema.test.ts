import { describe, it, expect } from "vitest";
import { enquirySchema } from "@/lib/enquiry-schema";

const valid = { name: "Test Partner", company: "Optical Test", email: "test@example.com", phone: "", interest: "Lens fitting", message: "Please discuss lens fitting options.", website: "" };
describe("Business enquiry validation", () => {
  it("accepts a complete business enquiry", () => { expect(enquirySchema.safeParse(valid).success).toBe(true); });
  it("rejects invalid email instead of submitting", () => { expect(enquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false); });
  it("rejects missing business details", () => { expect(enquirySchema.safeParse({ ...valid, company: "" }).success).toBe(false); });
  it("blocks filled bot fields", () => { expect(enquirySchema.safeParse({ ...valid, website: "https://spam.example" }).success).toBe(false); });
});