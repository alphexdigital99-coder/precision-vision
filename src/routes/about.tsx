import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Eye, Handshake, Microscope, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero } from "@/components/site-layout";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — Our Story | Rathnayaka Fittres" },
    { name: "description", content: "Founded in 2019 in Anuradhapura by B. M. Wasantha Rathnayaka, Rathnayaka Fittres is a family-owned optical fitting laboratory serving Sri Lanka." },
    { property: "og:title", content: "Our Story — Rathnayaka Fittres" },
    { property: "og:description", content: "A legacy founded on mastery: a father-and-daughter optical fitting laboratory in Anuradhapura." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

const timeline = [
  { when: "20+ years", title: "Experience before the lab", text: "Our founder gained more than two decades of hands-on optical experience in Sri Lanka and internationally." },
  { when: "14 June 2019", title: "Rathnayaka Fittres founded", text: "B. M. Wasantha Rathnayaka established the fitting laboratory in Dewanampiyathissapura, Anuradhapura." },
  { when: "June 2025", title: "The next generation joins", text: "His daughter, B. M. Madhuka Prasadini Rathnayake, joined as a Partner, bringing more than 7 years of eyecare industry experience." },
];

const values = [
  { icon: Ruler, title: "Technical precision", text: "Automatic edging technology and precise optical verification tools on every order.", tone: "blue" },
  { icon: Eye, title: "Genuine care", text: "Every order is treated as if it were for our own family.", tone: "mint" },
  { icon: Handshake, title: "Honest service", text: "Dependable, transparent service for practitioners and clients alike.", tone: "yellow" },
  { icon: Microscope, title: "Continuous innovation", text: "Traditional optical mastery combined with modern management and new technologies.", tone: "coral" },
];

function About() {
  return <>
    <PageHero eyebrow="Our story" title={<>A legacy founded<br />on mastery.</>} text="Rathnayaka Fittres was born out of more than two decades of industry expertise, passion and craftsmanship—built on the core values of technical precision and genuine care." image={images.craft} imagePosition="top" alt="Working at the Rathnayaka Fittres laboratory bench" />
    <section className="section"><div className="container about-grid"><div className="about-copy reveal"><p className="eyebrow blue">How it began</p><h2 className="section-heading">Dependable fitting,<br />from Anuradhapura.</h2><p className="section-description">After gaining more than 20 years of hands-on experience across Sri Lanka and international optical sectors, founder B. M. Wasantha Rathnayaka established the fitting laboratory on 14 June 2019, in Dewanampiyathissapura, Anuradhapura.</p><p className="section-description">The company was created to offer dependable, high-quality spectacle fitting and lens preparation services.</p></div><div className="about-image image-reveal reveal"><img src={images.technician} alt="Preparing a lens at Rathnayaka Fittres" loading="lazy" /></div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Father & daughter leadership</p><h2 className="section-heading">A next-generation<br />partnership.</h2></div><p className="section-description">Decades of traditional optical mastery, combined with modern optical management and innovation—a family-owned business dedicated to quality care.</p></div><ol className="stage-list">{timeline.map((t) => <li key={t.title} className="reveal"><span className="panel-number">{t.when}</span><h3>{t.title}</h3><p>{t.text}</p></li>)}</ol></div></section>
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Uncompromising quality & care</p><h2 className="section-heading">What guides our work.</h2></div><p className="section-description">Today we serve optical practitioners, eye care providers and individual clients with precision and dedication.</p></div><div className="info-panels">{values.map((v) => <div key={v.title} className={`info-panel tone-${v.tone} reveal`}><v.icon /><h3>{v.title}</h3><p>{v.text}</p></div>)}</div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Our vision</p><h2 className="section-heading">Clearer, more comfortable vision.</h2></div><p className="section-description">Our aim is to deliver precise and comfortable visual solutions to eye doctors, eye hospitals and every customer who comes to us—and to keep expanding our services alongside advances in eye care technology.</p></div><div className="duo-images"><img className="image-reveal reveal" src={images.lab} alt="Rathnayaka Fittres laboratory workbench" loading="lazy" /><img className="image-reveal reveal" src={images.digitalMeter} alt="Digital lensmeter in our laboratory" loading="lazy" /></div><div className="hero-actions mt-10 reveal"><Button asChild variant="soft"><Link to="/products-services">Our Products & Services <ArrowUpRight /></Link></Button><Button asChild variant="soft"><Link to="/laboratory">Our Laboratory <ArrowUpRight /></Link></Button></div></div></section>
    <CtaBand title="Partner with us today." text="Talk to our team about your optical processing needs." label="Contact Our Team" />
  </>;
}
