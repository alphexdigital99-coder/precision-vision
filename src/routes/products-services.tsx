import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CtaBand, PageHero } from "@/components/site-layout";
import { PhotoGallery } from "@/components/photo-gallery";
import { images, labPhotos, products, services } from "@/lib/site-data";

export const Route = createFileRoute("/products-services")({
  head: () => ({ meta: [
    { title: "Products & Services — Rathnayaka Fitters" },
    { name: "description", content: "Lens fitting, checking, edge finishing and drilling, plus single vision, bifocal, progressive, coated and tinted lens options for optical businesses." },
    { property: "og:title", content: "Optical Solutions Designed Around Your Needs" },
    { property: "og:description", content: "Lens services and lens options from Rathnayaka Fitters for optical shops and business customers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProductsServices,
});

const faqs = [
  { q: "Who do you work with?", a: "We work with optical shops and other optical business customers." },
  { q: "Which lens types can I enquire about?", a: "You can enquire about single vision, bifocal, progressive, coated and tinted lenses. Availability depends on the specific lens and prescription, so our team will confirm the options for your order." },
  { q: "How do I start an order or ask a question?", a: "Send a business enquiry through our contact page with details of your requirement, and our team will get back to you." },
  { q: "Is the coating comparison on this site exact?", a: "No. It is an illustration. Actual appearance depends on the lens, coating and lighting." },
];

function ProductsServices() {
  const [selected, setSelected] = useState<number | null>(null);
  const last = useRef<HTMLElement | null>(null);
  const product = selected !== null ? products[selected] : undefined;
  return <>
    <PageHero eyebrow="Products & services" title={<>Optical Solutions Designed<br />Around Your Needs.</>} text="Lens services carried out in our laboratory, and a range of lens types for optical shops and business customers." image={images.fitting} alt="Spectacle frame with lens-fitting components">
      <Button asChild variant="optical"><Link to="/contact">Enquire About Our Services <ArrowUpRight /></Link></Button>
    </PageHero>
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Laboratory services</p><h2 className="section-heading">What we do at the bench.</h2></div><p className="section-description">Services supported by the equipment in our own laboratory.</p></div><div className="info-panels">{services.map((s, i) => <div key={s.title} className={`info-panel tone-${s.tone} reveal`}><span className="panel-number">0{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Lens types & options</p><h2 className="section-heading">A clearer view.<br />A considered solution.</h2></div><p className="section-description">Tap any lens to see more, or read the full guide in our Knowledge Centre.</p></div><div className="product-grid product-grid-5">{products.map((item, index) => <article className="product-card reveal" key={item.title}><div className="product-visual light-sweep"><img src={item.image} alt={item.title} loading="lazy" /><span className="product-number">0{index + 1}</span></div><div className="product-info"><h3>{item.title}</h3><p>{item.description}</p><Button variant="ghost" className="product-link" onClick={(e) => { last.current = e.currentTarget; setSelected(index); }} aria-label={`Explore ${item.title}`}>Explore <ArrowUpRight /></Button></div></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">From our laboratory</p><h2 className="section-heading">The process, in pictures.</h2></div><p className="section-description"><Link className="text-link" to="/laboratory">Explore our laboratory ↗</Link></p></div><PhotoGallery photos={[labPhotos[5], labPhotos[3], labPhotos[7], labPhotos[6]]} /></div></section>
    <section className="section about-section"><div className="container faq-grid"><div className="reveal"><p className="eyebrow blue">Questions</p><h2 className="section-heading">Frequently asked.</h2></div><div className="faq-list reveal">{faqs.map((f) => <details key={f.q} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
    <CtaBand title="Have a lens requirement in mind?" text="Tell us what you need and our team will reply." label="Enquire About Our Services" />
    <Dialog open={product !== undefined} onOpenChange={(o) => { if (!o) setSelected(null); }}><DialogContent onCloseAutoFocus={(e) => { e.preventDefault(); last.current?.focus(); }}>{product && <><p className="eyebrow blue">{product.category}</p><DialogTitle>{product.title}</DialogTitle><DialogDescription>{product.description}</DialogDescription><div className="product-detail"><img src={product.image} alt={product.title} /><p>{product.detail}</p></div><div className="hero-actions"><Button asChild variant="optical"><Link to="/contact">Enquire <ArrowUpRight /></Link></Button><Button asChild variant="soft"><Link to="/knowledge-centre/$slug" params={{ slug: product.article }}>Read the guide <ArrowUpRight /></Link></Button></div></>}</DialogContent></Dialog>
  </>;
}
