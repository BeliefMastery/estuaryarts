"use client";

import { useState } from "react";
import type { ArtworkItem } from "@/lib/gallery-data";
import LightboxModal from "./LightboxModal";
import OptimizedImage from "./OptimizedImage";

interface GalleryGridProps {
  items: ArtworkItem[];
  variant: "painting" | "glass";
  ariaLabel: string;
}

export default function GalleryGrid({ items, variant, ariaLabel }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (variant === "painting") {
    return (
      <section className="painting-grid-section" aria-label={ariaLabel}>
        <div className="painting-grid">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className="painting-tile"
              aria-label={`View ${item.alt}`}
              onClick={() => setLightboxIndex(idx)}
            >
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                sizes="(max-width: 900px) 50vw, 25vw"
                priority={idx < 4}
              />
            </button>
          ))}
        </div>

        <LightboxModal
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
        />
      </section>
    );
  }

  return (
    <section className="glass-grid-section" aria-label={ariaLabel}>
      <div className="container-940">
        <div className="glass-grid">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className="glass-tile"
              aria-label={`View ${item.alt}`}
              onClick={() => setLightboxIndex(idx)}
            >
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                sizes="(max-width: 600px) 100vw, 455px"
                priority={idx < 2}
              />
            </button>
          ))}
        </div>
      </div>

      <LightboxModal
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </section>
  );
}
