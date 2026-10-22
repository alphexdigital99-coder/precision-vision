import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CtaBand, PageHero } from "@/components/site-layout";
import { PhotoGallery } from "@/components/photo-gallery";
import { capabilities, images, labPhotos, services } from "@/lib/site-data";
import { lensCatalogue, materialComparison, type CatalogueItem } from "@/lib/lens-catalogue";

export const Route = createFileRoute("/products-services")({
  head: () => ({ meta: [
    { title: "Lens Catalogue & Services — Rathnayaka Fittres" },
    { name: "description", content: "Lens designs, materials and coatings from Rathnayaka Fittres, plus edging, fitting and B2B laboratory services for optical businesses across Sri Lanka." },
    { property: "og:title", content: "Precision Lens Solutions for Better Vision" },
    { property: "og:description", content: "Explore lens designs, materials and specialized coatings for optical retailers across Sri Lanka." },
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
  const [selected, setSelected] = useState<CatalogueItem | null>(null);
  const last = useRef<HTMLElement | null>(null);
  return <>
    <PageHero eyebrow="Products & services" title={<>Precision Lens Solutions<br />for Better Vision</>} text="Explore our range of optical lens designs, materials, and specialized coatings for diverse vision correction needs." image={images.lens} alt="Optical lens held up to the light in our laboratory">
      <Button asChild variant="optical"><a href="#lens-designs">Explore Our Lens Range <ArrowDown /></a></Button>
      <Button asChild variant="soft"><Link to="/contact">Make a Business Enquiry <ArrowUpRight /></Link></Button>
    </PageHero>
    <nav className="catalogue-nav" aria-label="Lens catalogue categories"><div className="container catalogue-nav-inner">{lensCatalogue.map((c, i) => <a key={c.id} href={`#${c.id}`}><span>0{i + 1}</span>{c.label}</a>)}</div></nav>
    {lensCatalogue.map((cat, ci) => <section key={cat.id} id={cat.id} className={`section catalogue-section ${ci % 2 ? "about-section" : ""}`}><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">{cat.eyebrow}</p><h2 className="section-heading">{cat.heading}</h2></div><p className="section-description">{cat.intro}</p></div><div className="catalogue-grid">{cat.items.map((item) => <article key={item.title} className="catalogue-card reveal"><div className="catalogue-visual"><img src={item.image} alt={item.alt} loading="lazy" width={256} height={238} /></div><div className="catalogue-info"><p className="catalogue-cat">{cat.label}</p><h3>{item.title}</h3><p>{item.summary}</p><Button variant="ghost" className="product-link" onClick={(e) => { last.current = e.currentTarget; setSelected(item); }} aria-label={`Learn more about ${item.title}`}>Learn More <ArrowUpRight /></Button></div></article>)}</div></div></section>)}
    <p className="container catalogue-note"><Info /> Designs, materials and coatings are separate choices. Compatible features can sometimes be combined in one lens, depending on the product and prescription. Items are lens options to enquire about; availability is confirmed per order.</p>
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Compare</p><h2 className="section-heading">Lens materials at a glance.</h2></div><p className="section-description">General characteristics. The right choice depends on the prescription, frame and wearer.</p></div><div className="compare-table reveal" role="region" aria-label="Lens material comparison" tabIndex={0}><table><thead><tr><th scope="col">Material</th><th scope="col">Key Advantages</th><th scope="col">Considerations</th><th scope="col">Typical Applications</th></tr></thead><tbody>{materialComparison.map((m) => <tr key={m.material}><th scope="row">{m.material}</th><td data-label="Key Advantages">{m.advantages}</td><td data-label="Considerations">{m.considerations}</td><td data-label="Typical Applications">{m.uses}</td></tr>)}</tbody></table></div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Our services</p><h2 className="section-heading">What we do for<br />optical businesses.</h2></div><p className="section-description">Seven core services, from spectacle preparation to technical support.</p></div><div className="service-grid">{services.map((s, i) => <div key={s.title} className={`info-panel tone-${s.tone} reveal ${s.list ? "service-wide" : ""}`}><span className="panel-number">0{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p>{s.list && <ul className="service-list">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}</div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Capabilities</p><h2 className="section-heading">Under one roof.</h2></div></div><div className="capability-grid">{capabilities.map((c) => <div key={c.title} className="capability reveal"><h3>{c.title}</h3><p>{c.text}</p></div>)}</div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">From our laboratory</p><h2 className="section-heading">The process, in pictures.</h2></div><p className="section-description"><Link className="text-link" to="/laboratory">Explore our laboratory ↗</Link></p></div><PhotoGallery photos={[5, 3, 7, 6].map((i) => labPhotos[i]!)} /></div></section>
    <section className="section"><div className="container faq-grid"><div className="reveal"><p className="eyebrow blue">Questions</p><h2 className="section-heading">Frequently asked.</h2></div><div className="faq-list reveal">{faqs.map((f) => <details key={f.q} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
    <CtaBand title="Find the Right Lens Solution for Your Business" text="Contact Rathnayaka Fittres to discuss available lens options, specifications, laboratory processing, and technical support." label="Business Enquiry" />
    <Dialog open={selected !== null} onOpenChange={(o) => { if (!o) setSelected(null); }}><DialogContent onCloseAutoFocus={(e) => { e.preventDefault(); last.current?.focus(); }}>{selected && <><p className="eyebrow blue">Lens option</p><DialogTitle>{selected.title}</DialogTitle><DialogDescription>{selected.summary}</DialogDescription><div className="product-detail"><img src={selected.image} alt={selected.alt} className="catalogue-detail-img" />{selected.detail.map((d) => <p key={d}>{d}</p>)}</div><div className="hero-actions"><Button asChild variant="optical"><Link to="/contact">Enquire About This Lens <ArrowUpRight /></Link></Button></div></>}</DialogContent></Dialog>
  </>;
}
