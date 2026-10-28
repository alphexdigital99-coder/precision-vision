import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Glasses,
  Handshake,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoGallery } from "@/components/photo-gallery";
import { commitments, images, labPhotos, products } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rathnayaka Fittres — Good Lenses. Great People. Better Vision." },
      {
        name: "description",
        content:
          "Rathnayaka Fittres is an optical fitting laboratory in Anuradhapura, Sri Lanka, serving optical businesses island-wide. Explore our services, our laboratory and the lenses we work with.",
      },
      { property: "og:title", content: "Rathnayaka Fittres — Better Vision" },
      {
        property: "og:description",
        content:
          "Good Lenses. Great People. Better Vision. An optical lens-fitting laboratory for optical businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Comparison() {
  const [value, setValue] = useState(50);
  const clip = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (clip.current) clip.current.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    if (line.current) line.current.style.left = `${value}%`;
  }, [value]);
  return (
    <div>
      <div className="comparison">
        <div className="comparison-base">
          <Glasses />
          <strong>A clearer perspective.</strong>
          <p>Light, lenses and the way we see.</p>
        </div>
        <div className="comparison-clear" ref={clip}>
          <Glasses />
          <strong>A clearer perspective.</strong>
          <p>Light, lenses and the way we see.</p>
        </div>
        <span className="comparison-label left">Reduced reflections</span>
        <span className="comparison-label right">With reflections</span>
        <div className="comparison-line" ref={line}>
          <span>
            <ChevronLeft />
            <ChevronRight />
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Lens reflection comparison"
          aria-valuetext={`${value}% reduced reflection illustration`}
        />
      </div>
      <p className="comparison-note">
        Illustration only. Actual appearance depends on the lens, coating and lighting.
      </p>
    </div>
  );
}

function Index() {
  return (
    <>
      <section className="hero" id="home">
        <img
          className="hero-photo"
          src={images.technician}
          alt="A Rathnayaka Fittres technician carefully preparing a lens in our laboratory"
          fetchPriority="high"
        />
        <div className="optical-rings" aria-hidden="true" />
        <span className="precision-marker marker-one" aria-hidden="true" />
        <span className="precision-marker marker-two" aria-hidden="true" />
        <span className="hero-tag">Our people. Our laboratory.</span>
        <div className="container hero-inner">
          <div className="hero-label">
            <span /> Optical fitting laboratory · Anuradhapura, Sri Lanka
          </div>
          <h1>
            <span>
              <em>Good Lenses.</em>
            </span>
            <span>
              <em>Great People.</em>
            </span>
            <span>
              <em>Better Vision.</em>
            </span>
          </h1>
          <p className="hero-description">
            Precision lens processing, a wide range of lenses and expert technical support for
            optical retailers island-wide.
          </p>
          <div className="hero-actions">
            <Button asChild variant="optical">
              <Link to="/products-services">
                Explore Our Services <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="soft">
              <Link to="/contact">
                Contact Our Team <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="hero-bottom">
            <ShieldCheck />
            <span>Established 2019</span>
            <span>Serving optical businesses island-wide</span>
          </div>
        </div>
        <div className="hero-image-caption">
          <ScanLine size={25} />
          <div>
            <strong>Where clarity takes shape.</strong>
            <p>A closer look at Rathnayaka Fittres</p>
          </div>
        </div>
      </section>
      <div className="service-strip">
        <div className="container service-strip-inner">
          {[
            { icon: Crosshair, title: "Precision Lens Fitting" },
            { icon: Sparkles, title: "Thoughtful Lens Solutions" },
            { icon: Microscope, title: "Hands-on Expertise" },
            { icon: Handshake, title: "People-first Partnerships" },
          ].map((item) => (
            <div className="strip-item" key={item.title}>
              <item.icon />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-image image-reveal reveal">
            <img
              src={images.lab}
              alt="Rathnayaka Fittres laboratory with lens preparation and fitting equipment"
              loading="lazy"
            />
            <div className="image-note">
              <Microscope size={24} />
              <div>
                <strong>Real people. Real precision.</strong>
                <p>Inside the Rathnayaka Fittres laboratory</p>
              </div>
            </div>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow blue">A family-owned laboratory</p>
            <h2 className="section-heading">
              Precision is our work.
              <br />
              People are our focus.
            </h2>
            <p className="section-description">
              Founded in 2019 in Anuradhapura by B. M. Wasantha Rathnayaka, who brings more than 20
              years of optical fitting experience in Sri Lanka and abroad. Today a
              father-and-daughter family business, we prepare, fit and finish prescription eyewear
              for optical businesses across the island.
            </p>
            <Button asChild variant="soft">
              <Link to="/about">
                More About Us <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow blue">Products & services</p>
              <h2 className="section-heading">
                A clearer view.
                <br />A considered solution.
              </h2>
            </div>
            <p className="section-description">
              From everyday clarity to specialised visual needs, explore the lenses and services we
              offer optical businesses.
            </p>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((item, index) => (
              <article className="product-card reveal" key={item.title}>
                <div className="product-visual light-sweep">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="product-number">0{index + 1}</span>
                </div>
                <div className="product-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to="/products-services" className="product-link inline-link">
                    Explore <ArrowUpRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="section-footer reveal">
            See every lens type and service.
            <Link to="/products-services">
              View Products & Services <span aria-hidden="true">↗</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow blue">Our laboratory</p>
              <h2 className="section-heading">
                Behind every lens,
                <br />a human touch.
              </h2>
            </div>
            <p className="section-description">
              A glimpse into our real workspace and equipment.{" "}
              <Link className="text-link" to="/laboratory">
                Step inside our laboratory ↗
              </Link>
            </p>
          </div>
          <PhotoGallery photos={[0, 2, 4, 6].map((i) => labPhotos[i]!)} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="technology-grid">
            <div className="reveal">
              <Comparison />
            </div>
            <div className="reveal">
              <p className="eyebrow blue">Lens technology</p>
              <h2 className="section-heading">See the science of clarity.</h2>
              <p className="section-description">
                Lens designs and coatings shape how a wearer sees. Single vision, bifocal and
                progressive lenses, plus anti-reflective, blue-light, photochromic and polarised
                options — tell us what your customers need and our team will advise.
              </p>
              <Button asChild variant="soft" className="mt-6">
                <Link to="/products-services">
                  Explore Lens Options <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow blue">Why work with us</p>
              <h2 className="section-heading">
                Beyond manufacturing:
                <br />a true partnership.
              </h2>
            </div>
          </div>
          <div className="info-panels">
            {commitments.map((p) => (
              <div key={p.title} className={`info-panel tone-${p.tone} reveal`}>
                <Check />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section enquiry-section">
        <div className="optical-rings" aria-hidden="true" />
        <div className="lens-watermark" aria-hidden="true" />
        <div className="container enquiry-cta reveal">
          <p className="eyebrow blue">Let's work together</p>
          <h2>
            Let's Bring Better Vision to <span>Your Business.</span>
          </h2>
          <p className="section-description">
            Deliver the perfect finish to your customers with zero hassle. Connect with our lab to
            discuss your optical processing needs.
          </p>
          <Button asChild variant="optical">
            <Link to="/contact">
              Make a Business Enquiry <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
