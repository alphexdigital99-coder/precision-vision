import { createFileRoute } from "@tanstack/react-router";
import { Building2, MessageSquareText, Send } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — Business Enquiries | Rathnayaka Fitters" },
    { name: "description", content: "Send a business enquiry to Rathnayaka Fitters about lens fitting, lens options or a partnership." },
    { property: "og:title", content: "Let's Talk About Your Optical Requirements" },
    { property: "og:description", content: "Business enquiries for optical shops and professional customers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contact,
});

function Contact() {
  return <section className="section enquiry-section contact-page"><div className="optical-rings" aria-hidden="true" /><div className="lens-watermark" aria-hidden="true" /><div className="container enquiry-grid">
    <div className="enquiry-copy reveal"><p className="eyebrow blue">Contact us</p><h1>Let's Talk About Your <span>Optical Requirements.</span></h1><p className="section-description">Optical shops and professional customers are welcome to get in touch about lens fitting, lens options or working together.</p>
      <ul className="contact-steps">
        <li><Building2 /><div><strong>Tell us about your business</strong><p>Your name, business name and how to reach you.</p></div></li>
        <li><MessageSquareText /><div><strong>Describe your requirement</strong><p>Lens type, fitting question or partnership idea.</p></div></li>
        <li><Send /><div><strong>Our team replies</strong><p>Every enquiry is reviewed by our team.</p></div></li>
      </ul>
    </div>
    <div className="reveal"><EnquiryForm /></div>
  </div></section>;
}
