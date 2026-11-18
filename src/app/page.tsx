import ProGalleryCarousel from "@/components/ProGalleryCarousel";
import ContactSection from "@/components/ContactSection";
import {
  GLASS_ARTWORKS,
  HERO_CONTENT,
  HOME_PAINTING_CAROUSEL,
} from "@/lib/gallery-data";

export default function HomePage() {
  return (
    <>
      <section className="hero-section" aria-label="Welcome">
        <div className="container-980">
          <div className="hero-grid">
            <div className="hero-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_CONTENT.coverImage.src}
                alt={HERO_CONTENT.coverImage.alt}
                className="hero-image"
              />
            </div>

            <div className="hero-content">
              <h1 className="hero-title">{HERO_CONTENT.heading}</h1>
              <p className="hero-hours">{HERO_CONTENT.hours}</p>
              {HERO_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index} className="hero-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProGalleryCarousel items={GLASS_ARTWORKS} ariaLabel="Glass Art Gallery" />

      <ProGalleryCarousel items={HOME_PAINTING_CAROUSEL} ariaLabel="Painting Gallery" />

      <ContactSection />
    </>
  );
}
