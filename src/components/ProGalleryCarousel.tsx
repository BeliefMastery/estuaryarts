"use client";

import { useState } from "react";
import type { ArtworkItem } from "@/lib/gallery-data";
import LightboxModal from "./LightboxModal";
import OptimizedImage from "./OptimizedImage";

interface ProGalleryCarouselProps {
  items: ArtworkItem[];
  ariaLabel: string;
}

export default function ProGalleryCarousel({ items, ariaLabel }: ProGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lovedIds, setLovedIds] = useState<Record<string, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const current = items[currentIndex];
  const isLoved = Boolean(lovedIds[current.id]);

  const prev = () => setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setCurrentIndex((i) => (i + 1) % items.length);

  const toggleLove = () => {
    setLovedIds((prevMap) => ({
      ...prevMap,
      [current.id]: !prevMap[current.id],
    }));
  };

  const handleShare = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Estuary Arts", url: shareUrl });
      } else if (navigator.clipboard && shareUrl) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // User cancelled share dialog
    }
  };

  return (
    <section className="carousel-section" aria-label={ariaLabel}>
      <div className="container-940">
        <div className="carousel-stage">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            aria-label="Previous Item"
            onClick={prev}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {items.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                className={`carousel-slide-btn${isActive ? " active" : ""}`}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                aria-label={`View ${item.alt}`}
                onClick={() => setLightboxIndex(idx)}
              >
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  className="carousel-image"
                  sizes="(max-width: 940px) 100vw, 940px"
                  priority={idx === 0}
                />
              </button>
            );
          })}

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            aria-label="Next Item"
            onClick={next}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel-actions">
          <button
            type="button"
            className={`icon-action-btn${isLoved ? " loved" : ""}`}
            aria-label="Love"
            aria-pressed={isLoved}
            onClick={toggleLove}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={isLoved ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button
            type="button"
            className="icon-action-btn"
            aria-label="Share"
            onClick={handleShare}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M15 5l5 5-5 5" />
              <path d="M20 10H9a5 5 0 0 0-5 5v4" />
            </svg>
          </button>

          {copied && <span className="share-toast">Link copied</span>}
        </div>
      </div>

      <LightboxModal
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(nextIdx) => {
          setLightboxIndex(nextIdx);
          setCurrentIndex(nextIdx);
        }}
      />
    </section>
  );
}
