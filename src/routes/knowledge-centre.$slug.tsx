import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site-layout";
import { findArticle } from "@/lib/site-data";

export const Route = createFileRoute("/knowledge-centre/$slug")({
  loader: ({ params }) => { const article = findArticle(params.slug); if (!article) throw notFound(); return { article }; },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found — Rathnayaka Fitters" }, { name: "robots", content: "noindex" }] };
    const { title, summary } = loaderData.article;
    return { meta: [
      { title: `${title} — Knowledge Centre | Rathnayaka Fitters` }, { name: "description", content: summary },
      { property: "og:title", content: `${title} — Rathnayaka Fitters` }, { property: "og:description", content: summary },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return <section className="section"><div className="container"><h1 className="section-heading">Article not found</h1><p className="section-description">This guide doesn't exist.</p><Link className="text-link" to="/knowledge-centre">Back to the Knowledge Centre ↗</Link></div></section>;
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = article.related.map((slug) => findArticle(slug)).filter((a) => a !== undefined);
  return <>
    <article className="section article-page"><div className="container article-layout">
      <div className="article-head reveal"><Link to="/knowledge-centre" className="back-link"><ArrowLeft /> Knowledge Centre</Link><p className="eyebrow blue">{article.group}</p><h1 className="section-heading">{article.title}</h1><p className="section-description">{article.summary}</p></div>
      <img className="article-hero image-reveal reveal" src={article.image} alt="" />
      <div className="article-content">{article.sections.map((s) => <section key={s.heading} className="reveal"><h2>{s.heading}</h2><p>{s.body}</p></section>)}<p className="comparison-note">General information only. Lens suitability depends on the individual prescription and should be confirmed by a qualified professional.</p></div>
    </div></article>
    <section className="section about-section"><div className="container"><p className="eyebrow blue">Related articles</p><div className="article-grid">{related.map((a) => <Link key={a.slug} to="/knowledge-centre/$slug" params={{ slug: a.slug }} className="article-card reveal"><div className="article-body"><h3>{a.title}</h3><p>{a.summary}</p><span className="inline-link">Read guide <ArrowUpRight /></span></div></Link>)}</div></div></section>
    <CtaBand title="Questions about this lens type?" text="Talk to our team about availability for your orders." label="Contact Our Team" />
  </>;
}
