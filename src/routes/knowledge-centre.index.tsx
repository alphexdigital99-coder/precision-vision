import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/site-layout";
import { articles, images } from "@/lib/site-data";

export const Route = createFileRoute("/knowledge-centre/")({
  head: () => ({ meta: [
    { title: "Knowledge Centre — Lens Types & Coatings | Rathnayaka Fitters" },
    { name: "description", content: "Guides to single vision, bifocal and progressive lenses, plus anti-reflective, blue-light filtering, photochromic and polarised lens options." },
    { property: "og:title", content: "Rathnayaka Fitters Knowledge Centre" },
    { property: "og:description", content: "Clear, practical guides to lens types and lens coatings." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Knowledge,
});

const tones = ["blue", "mint", "yellow", "coral"];
function Knowledge() {
  return <>
    <PageHero eyebrow="Knowledge Centre" title={<>Understand the lens<br />behind the view.</>} text="Practical guides to lens types and lens coatings for optical professionals and their customers." image={images.progressive} alt="Progressive lens illustration" />
    {(["Lens types", "Lens coatings"] as const).map((group) => <section key={group} className={`section ${group === "Lens coatings" ? "about-section" : ""}`}><div className="container"><div className="section-header reveal"><div><p className="eyebrow blue">Category</p><h2 className="section-heading">{group}</h2></div></div><div className="article-grid">{articles.filter((a) => a.group === group).map((a, i) => <Link key={a.slug} to="/knowledge-centre/$slug" params={{ slug: a.slug }} className={`article-card tone-${tones[i % 4]} reveal`}><div className="article-image"><img src={a.image} alt="" loading="lazy" /></div><div className="article-body"><h3>{a.title}</h3><p>{a.summary}</p><span className="inline-link">Read guide <ArrowUpRight /></span></div></Link>)}</div></div></section>)}
    <CtaBand title="Need help choosing a lens?" text="Our team is happy to talk through the options." label="Contact Our Team" />
  </>;
}
