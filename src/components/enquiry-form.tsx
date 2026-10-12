import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enquirySchema } from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/enquiry.functions";

export function EnquiryForm() {
  const send = useServerFn(submitEnquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [failure, setFailure] = useState("");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(Object.fromEntries(new FormData(event.currentTarget)));
    setFailure("");
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      return;
    }
    setErrors({}); setStatus("sending");
    try {
      const result = await send({ data: parsed.data });
      if (result.success) setStatus("success");
      else { setFailure(result.error || "Please try again."); setStatus("idle"); }
    } catch { setFailure("Your enquiry wasn’t sent. Please try again."); setStatus("idle"); }
  }
  if (status === "success") return <div className="enquiry-success" role="status"><span className="success-icon"><Check /></span><h3>Thank you for reaching out.</h3><p>Your business enquiry has been received by Rathnayaka Fitters.</p><Button variant="soft" onClick={() => setStatus("idle")}>Send another enquiry <ArrowUpRight /></Button></div>;
  return <form className="enquiry-form" onSubmit={onSubmit} noValidate>
    <div className="form-grid">{[{ name: "name", label: "Your name", placeholder: "Full name", type: "text", max: 100 }, { name: "company", label: "Business name", placeholder: "Your company or optical practice", type: "text", max: 160 }, { name: "email", label: "Email address", placeholder: "you@company.com", type: "email", max: 254 }, { name: "phone", label: "Phone number (optional)", placeholder: "Your contact number", type: "tel", max: 40 }].map((field) => <label key={field.name}>{field.label}<input name={field.name} type={field.type} placeholder={field.placeholder} maxLength={field.max} autoComplete={field.name === "name" ? "name" : field.name === "company" ? "organization" : field.type === "tel" ? "tel" : "email"} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} />{errors[field.name] && <span className="field-error" id={`${field.name}-error`}>{errors[field.name]}</span>}</label>)}</div>
    <label>I'm interested in<select name="interest" defaultValue="Business partnership"><option>Lens fitting</option><option>Lens options</option><option>Business partnership</option><option>General enquiry</option></select></label>
    <label>How can we help?<textarea name="message" placeholder="Tell us a little about your requirements…" rows={4} maxLength={3000} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <span className="field-error" id="message-error">{errors.message}</span>}</label>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    {failure && <p className="field-error" role="alert">{failure}</p>}
    <Button variant="optical" className="submit-button" type="submit" disabled={status === "sending"}>{status === "sending" ? <>Sending enquiry <LoaderCircle className="animate-spin" /></> : <>Send business enquiry <ArrowUpRight /></>}</Button>
    <p className="form-note">Your details are used only to respond to your enquiry.</p>
  </form>;
}