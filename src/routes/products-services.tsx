import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CtaBand, PageHero } from "@/components/site-layout";
import { PhotoGallery } from "@/components/photo-gallery";
import { capabilities, images, labPhotos, products, services } from "@/lib/site-data";

export const Route = createFileRoute("/products-services")({
  head: () => ({ meta: [
    { title: "Products & Services — Rathnayaka Fitters" },
    { name: "description", content: "Spectacle preparation, lens edging and fitting, mounting, frame maintenance, quality finishing and B2B support for optical businesses across Sri Lanka." },
    { property: "og:title", content: "Optical Solutions Designed Around Your Needs" },
    { property: "og:description", content: "Lens services and lens options from Rathnayaka Fitters for optical shops and business customers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProductsServices,
});

const faqs = [
  { q: "Who do you work with?", a: "Optical stores, optometrists, eye care professionals and individual clients, across Sri Lanka." },
  { q: "Can you handle urgent orders?", a: "Yes. We prioritise urgent orders with rapid processing times, without compromising on precision." },
  { q: "Which frame types can you fit?", a: "All frame types, including rimless and half-rim (nylor) frames, using drilling and grooving machinery." },
  { q: "Which lenses do you process?", a: "Single vision, bifocal, freeform progressive and high-index lenses, plus blue-cut, photochromic, AR-coated and custom-tinted options." },
  { q: "What are your working hours?", a: "07:30 AM – 06:30 PM. Our team is available throughout working hours for technical support." },
];

function ProductsServices() {
  const [selected, setSelected] = useState<number | null>(null);
  const last = useRef<HTMLElement | null>(null);
  const product = selected !== null ? products[selected] : undefined;
  return <>
    <PageHero eyebrow="Products & services" title={<>Optical Solutions Designed<br />Around Your Needs.</>} text="Comprehensive optical solutions under one roof—a complete range of spectacle preparation and fitting services tailored for optical shops." image={images.fitting} alt="Spectacle frame with lens-fitting components">
      <Button asChild variant="optical"><Link to="/contact">Enquire About Our Services <ArrowUpRight /></Link></Button>
    </PageHero>
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Our services</p><h2 className="section-heading">What we do for<br />optical businesses.</h2></div><p className="section-description">Seven core services, from spectacle preparation to technical support.</p></div><div className="service-grid">{services.map((s, i) => <div key={s.title} className={`info-panel tone-${s.tone} reveal ${s.list ? "service-wide" : ""}`}><span className="panel-number">0{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p>{s.list && <ul className="service-list">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}</div>)}</div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Capabilities</p><h2 className="section-heading">Under one roof.</h2></div></div><div className="capability-grid">{capabilities.map((c) => <div key={c.title} className="capability reveal"><h3>{c.title}</h3><p>{c.text}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Lens types & options</p><h2 className="section-heading">A clearer view.<br />A considered solution.</h2></div><p className="section-description">Tap any lens to see more, or ask our team which option suits your customers.</p></div><div className="product-grid product-grid-5">{products.map((item, index) => <article className="product-card reveal" key={item.title}><div className="product-visual light-sweep"><img src={item.image} alt={item.title} loading="lazy" /><span className="product-number">0{index + 1}</span></div><div className="product-info"><h3>{item.title}</h3><p>{item.description}</p><Button variant="ghost" className="product-link" onClick={(e) => { last.current = e.currentTarget; setSelected(index); }} aria-label={`Explore ${item.title}`}>Explore <ArrowUpRight /></Button></div></article>)}</div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">From our laboratory</p><h2 className="section-heading">The process, in pictures.</h2></div><p className="section-description"><Link className="text-link" to="/laboratory">Explore our laboratory ↗</Link></p></div><PhotoGallery photos={[5, 3, 7, 6].map((i) => labPhotos[i]!)} /></div></section>
    <section className="section"><div className="container faq-grid"><div className="reveal"><p className="eyebrow blue">Questions</p><h2 className="section-heading">Frequently asked.</h2></div><div className="faq-list reveal">{faqs.map((f) => <details key={f.q} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
    <CtaBand title="Have a lens requirement in mind?" text="Tell us what you need and our team will reply." label="Enquire About Our Services" />
    <Dialog open={product !== undefined} onOpenChange={(o) => { if (!o) setSelected(null); }}><DialogContent onCloseAutoFocus={(e) => { e.preventDefault(); last.current?.focus(); }}>{product && <><p className="eyebrow blue">{product.category}</p><DialogTitle>{product.title}</DialogTitle><DialogDescription>{product.description}</DialogDescription><div className="product-detail"><img src={product.image} alt={product.title} /><p>{product.detail}</p></div><div className="hero-actions"><Button asChild variant="optical"><Link to="/contact">Enquire <ArrowUpRight /></Link></Button><Button asChild variant="soft"><Link to="/laboratory">See our laboratory <ArrowUpRight /></Link></Button></div></>}</DialogContent></Dialog>
  </>;
}
