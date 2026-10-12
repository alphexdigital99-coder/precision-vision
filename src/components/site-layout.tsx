import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, images } from "@/lib/site-data";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products-services", label: "Products & Services" },
  { to: "/laboratory", label: "Our Laboratory" },
  { to: "/knowledge-centre", label: "Knowledge Centre" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Brand() {
  return <Link to="/" className="brand" aria-label="Rathnayaka Fitters home"><img src={images.logo} alt="" width={48} height={48} /><div className="brand-name">Rathnayaka Fitters<span>PRECISION IN EVERY LENS</span></div></Link>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.resolvedLocation?.pathname ?? s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { setScrolled(window.scrollY > 55); const total = document.documentElement.scrollHeight - window.innerHeight; if (progressRef.current) progressRef.current.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`; }); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    const escape = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", escape);
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); document.removeEventListener("keydown", escape); };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.remove("pending"); entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    const frame = requestAnimationFrame(() => document.querySelectorAll(".reveal:not(.visible)").forEach((el) => { if (el.getBoundingClientRect().top > window.innerHeight) el.classList.add("pending"); observer.observe(el); }));
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [pathname]);

  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
    <header className={`site-header ${scrolled ? "compact" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "active", "aria-current": "page" }} activeOptions={{ exact: item.to === "/" }}>{item.label}</Link>)}
          <Button asChild variant="optical" className="header-cta"><Link to="/contact">Business Enquiry <ArrowUpRight /></Link></Button>
        </nav>
        <Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "active", "aria-current": "page" }} activeOptions={{ exact: item.to === "/" }} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
        <Button asChild variant="optical"><Link to="/contact" onClick={() => setMenuOpen(false)}>Business Enquiry <ArrowUpRight /></Link></Button>
      </nav>}
    </header>
    <main id="main" key={pathname} className="page-enter">{children}</main>
    <footer className="footer site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about"><Brand /><p>A family-owned optical fitting laboratory in Anuradhapura, serving optical businesses across Sri Lanka since 2019.</p></div>
          <nav aria-label="Footer navigation"><h3>Explore</h3>{navItems.map((i) => <Link key={i.to} to={i.to}>{i.label}</Link>)}</nav>
          <nav aria-label="Lens information"><h3>Lenses & services</h3><Link to="/products-services">Products & Services</Link><Link to="/knowledge-centre/$slug" params={{ slug: "single-vision-lenses" }}>Single vision lenses</Link><Link to="/knowledge-centre/$slug" params={{ slug: "progressive-lenses" }}>Progressive lenses</Link><Link to="/knowledge-centre/$slug" params={{ slug: "lens-coatings" }}>Lens coatings</Link></nav>
          <div className="footer-contact"><h3>Get in touch</h3><p>{business.address}</p><p><a href={business.mobileHref}>{business.mobile}</a> (Call / WhatsApp)<br /><a href={business.landlineHref}>{business.landline}</a></p><p>{business.hours}</p><Link to="/contact" className="footer-cta">Contact Our Team ↗</Link></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Rathnayaka Fitters. All rights reserved.</p><p>Good Lenses. Great People. Better Vision.</p></div>
      </div>
    </footer>
    {scrolled && <Button variant="soft" className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ArrowUp /></Button>}
  </>;
}

export function PageHero({ eyebrow, title, text, image, alt, children }: { eyebrow: string; title: ReactNode; text: string; image?: string; alt?: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="optical-rings" aria-hidden="true" /><div className="container page-hero-inner"><div className="page-hero-copy"><p className="eyebrow blue">{eyebrow}</p><h1>{title}</h1><p className="section-description">{text}</p>{children && <div className="hero-actions">{children}</div>}</div>{image && <div className="page-hero-image"><img src={image} alt={alt ?? ""} fetchPriority="high" /></div>}</div></section>;
}

export function CtaBand({ title, text, label, to = "/contact" }: { title: string; text: string; label: string; to?: "/contact" | "/products-services" | "/laboratory" }) {
  return <div className="partnership-band cta-band"><div className="container partnership-inner reveal"><div><span className="partner-icon"><ArrowUpRight /></span><div><h3>{title}</h3><p>{text}</p></div></div><Button asChild variant="optical"><Link to={to}>{label} <ArrowUpRight /></Link></Button></div></div>;
}
