"use client";

import { useState } from "react";
import type { ArtworkItem } from "@/lib/gallery-data";
import LightboxModal from "./LightboxModal";

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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} />
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} />
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
