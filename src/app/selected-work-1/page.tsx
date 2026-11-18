import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { PAINTING_ARTWORKS } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Painting",
  description:
    "Dramatic acrylic and oil landscape paintings by Rosie Little at Estuary Arts, Parapara, Tasman, New Zealand.",
  alternates: {
    canonical: "https://www.estuaryarts.co.nz/selected-work-1/",
  },
};

export default function PaintingPage() {
  return (
    <GalleryGrid
      items={PAINTING_ARTWORKS}
      variant="painting"
      ariaLabel="Painting Selected Work"
    />
  );
}
