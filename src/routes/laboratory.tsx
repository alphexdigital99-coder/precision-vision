import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site-layout";
import { PhotoGallery } from "@/components/photo-gallery";
import { equipment, images, labPhotos } from "@/lib/site-data";

export const Route = createFileRoute("/laboratory")({
  head: () => ({ meta: [
    { title: "Our Laboratory — Rathnayaka Fitters" },
    { name: "description", content: "Step inside the Rathnayaka Fitters optical laboratory: lensmeters, finishing, polishing and drilling equipment and organised lens stock, in authentic photographs." },
    { property: "og:title", content: "Precision Behind Every Lens — Our Laboratory" },
    { property: "og:description", content: "Authentic photographs of the Rathnayaka Fitters laboratory, equipment and workspace." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Laboratory,
});

const stages = [
  { name: "Prepare", text: "Selecting the right lens from organised stock and preparing it for the frame." },
  { name: "Measure", text: "Checking lens power and alignment on our lensmeters." },
  { name: "Finish", text: "Finishing and polishing lens edges on dedicated equipment." },
];

function Laboratory() {
  return <>
    <PageHero eyebrow="Our laboratory" title={<>Precision Behind<br />Every Lens.</>} text="Every photograph on this page was taken in our own laboratory. This is where lenses are checked, prepared and finished." image={images.technician} alt="A Rathnayaka Fitters technician at a lens-fitting machine" />
    <section className="section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Where the work happens</p><h2 className="section-heading">Our equipment.</h2></div><p className="section-description">Names shown are taken from the labels on our own equipment.</p></div><div className="equipment-grid">{equipment.map((e) => <article key={e.name} className={`equipment-card tone-${e.tone} reveal`}><div className="equipment-image image-reveal"><img src={e.image} alt={e.name} loading="lazy" /></div><div className="equipment-info"><span className="stage-tag">{e.stage}</span><h3>{e.name}</h3><p>{e.text}</p></div></article>)}</div></div></section>
    <section className="section about-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">How the equipment fits together</p><h2 className="section-heading">Prepare. Measure. Finish.</h2></div></div><ol className="stage-list">{stages.map((s, i) => <li key={s.name} className="reveal"><span className="panel-number">0{i + 1}</span><h3>{s.name}</h3><p>{s.text}</p></li>)}</ol></div></section>
    <section className="section gallery-section"><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Full gallery</p><h2 className="section-heading">A closer look.</h2></div><p className="section-description">Select any photograph to view it full size. Use the arrow keys to browse.</p></div><PhotoGallery photos={labPhotos} layout="masonry" /></div></section>
    <CtaBand title="Discuss your requirements." text="Talk to our team about lenses and fitting for your business." label="Discuss Your Requirements" />
  </>;
}
