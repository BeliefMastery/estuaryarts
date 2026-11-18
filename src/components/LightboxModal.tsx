"use client";

import { useEffect } from "react";
import type { ArtworkItem } from "@/lib/gallery-data";

interface LightboxModalProps {
  items: ArtworkItem[];
  index: number | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export default function LightboxModal({
  items,
  index,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  useEffect(() => {
    if (index === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChangeIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChangeIndex((index - 1 + items.length) % items.length);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, items.length, onClose, onChangeIndex]);

  if (index === null || !items[index]) return null;

  const current = items[index];

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Artwork viewer"
      onClick={onClose}
    >
      <div className="lightbox-topbar" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-counter">
          {index + 1} / {items.length}
        </span>
        <div className="lightbox-controls">
          <button
            type="button"
            className="icon-action-btn"
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-nav lightbox-nav-prev"
          aria-label="Previous Item"
          onClick={() => onChangeIndex((index - 1 + items.length) % items.length)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={current.src} alt={current.alt} className="lightbox-img" />

        <button
          type="button"
          className="lightbox-nav lightbox-nav-next"
          aria-label="Next Item"
          onClick={() => onChangeIndex((index + 1) % items.length)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div />
    </div>
  );
}
