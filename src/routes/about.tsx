import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Eye, Handshake, Microscope, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero } from "@/components/site-layout";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — Rathnayaka Fitters" },
    { name: "description", content: "Meet Rathnayaka Fitters, an optical lens-fitting laboratory that combines careful craftsmanship with a personal approach for optical businesses." },
    { property: "og:title", content: "About Rathnayaka Fitters" },
    { property: "og:description", content: "Precision is our work. People are our focus." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

const values = [
  { icon: Ruler, title: "Precision", text: "Measurements, alignment and finish are checked with care.", tone: "blue" },
  { icon: Eye, title: "Clarity", text: "Clear explanations of lens options and what each is suited to.", tone: "mint" },
  { icon: Handshake, title: "Partnership", text: "We work alongside optical businesses and listen to their needs.", tone: "yellow" },
  { icon: Microscope, title: "Hands-on care", text: "Real people at real benches, attending to every lens.", tone: "coral" },
];

function About() {
  return <>
    <PageHero eyebrow="About Rathnayaka Fitters" title={<>Precision is our work.<br />People are our focus.</>} text="Rathnayaka Fitters is an optical lens-fitting laboratory working with optical businesses. We prepare, check and finish lenses with attention to the details that make a difference." image={images.craft} alt="A Rathnayaka Fitters team member working at the laboratory bench" />
    <section className="section"><div className="container about-grid"><div className="about-copy reveal"><p className="eyebrow blue">Our approach</p><h2 className="section-heading">Better vision begins<br />with attention to detail.</h2><p className="section-description">Behind every clear view is a lens crafted with care. We combine optical equipment with hands-on experience and a genuine understanding of the people behind every prescription.</p><p className="section-description">For optical shops and business customers, we're here for practical conversations about lens types, fitting requirements and finishing.</p></div><div className="about-image image-reveal reveal"><img src={images.technician} alt="A technician preparing a lens at Rathnayaka Fitters" loading="lazy" /></div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">What guides our work</p><h2 className="section-heading">Our values.</h2></div></div><div className="info-panels">{values.map((v) => <div key={v.title} className={`info-panel tone-${v.tone} reveal`}><v.icon /><h3>{v.title}</h3><p>{v.text}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">People & laboratory</p><h2 className="section-heading">Real people. Real precision.</h2></div><p className="section-description">These photographs are from our own laboratory. <Link className="text-link" to="/laboratory">See the full laboratory ↗</Link></p></div><div className="duo-images"><img className="image-reveal reveal" src={images.lab} alt="Rathnayaka Fitters laboratory workbench" loading="lazy" /><img className="image-reveal reveal" src={images.fitting} alt="Spectacle frame with lens-blocking components" loading="lazy" /></div><div className="hero-actions mt-10 reveal"><Button asChild variant="soft"><Link to="/products-services">Our Products & Services <ArrowUpRight /></Link></Button></div></div></section>
    <CtaBand title="Better vision starts with a good partnership." text="Tell us about your optical business and requirements." label="Contact Our Team" />
  </>;
}
