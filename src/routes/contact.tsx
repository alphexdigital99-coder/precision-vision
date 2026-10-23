import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { business } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — Rathnayaka Fittres, Anuradhapura" },
    { name: "description", content: "Contact Rathnayaka Fittres, No: 164, Dewanampiyathissapura, Anuradhapura. Call or WhatsApp 077 797 1259. Open 07:30 AM – 06:30 PM. Serving island-wide." },
    { property: "og:title", content: "Let's Talk About Your Optical Requirements" },
    { property: "og:description", content: "Partner with Rathnayaka Fittres. Call, WhatsApp or send a business enquiry." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contact,
});

function Contact() {
  return <>
    <section className="section enquiry-section contact-page"><div className="optical-rings" aria-hidden="true" /><div className="lens-watermark" aria-hidden="true" /><div className="container enquiry-grid">
      <div className="enquiry-copy reveal"><p className="eyebrow blue">Partner with us today</p><h1>Let's Talk About Your <span>Optical Requirements.</span></h1><p className="section-description">Deliver the perfect finish to your customers with zero hassle. When you contact us, you speak directly with experienced technicians.</p>
        <div className="contact-cards">
          <a className="contact-card" href={business.landlineHref}><Phone /><div><strong>{business.landline}</strong><span>Office No</span></div></a>
          <div className="contact-card contact-card-multi"><Phone /><div className="contact-card-lines"><a href={business.mobileHref}><strong>{business.mobile}</strong><span>Mobile · Call / WhatsApp</span></a><a href={business.mobile2Href}><strong>{business.mobile2}</strong><span>Mobile</span></a></div></div>
          <a className="contact-card" href={business.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /><div><strong>Message us on WhatsApp</strong><span>{business.mobile}</span></div></a>

          <a className="contact-card" href={`mailto:${business.email}`}><Mail /><div><strong>{business.email}</strong><span>Email us</span></div></a>
          <div className="contact-card"><Clock /><div><strong>{business.hours}</strong><span>Working hours</span></div></div>
          <a className="contact-card" href={business.mapUrl} target="_blank" rel="noopener noreferrer"><MapPin /><div><strong>{business.address}</strong><span>Serving island-wide · Open in Google Maps</span></div></a>
        </div>
      </div>
      <div className="reveal"><EnquiryForm /></div>
    </div></section>
    <section className="section map-section"><div className="container reveal"><p className="eyebrow blue">Find us</p><h2 className="section-heading mb-6">Dewanampiyathissapura, Anuradhapura.</h2><iframe title="Map showing Dewanampiyathissapura, Anuradhapura" src={business.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
  </>;
}
