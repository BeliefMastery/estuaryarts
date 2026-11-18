import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { GLASS_ARTWORKS } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Glass",
  description:
    "Kilnformed glass art pieces created at Estuary Arts in Parapara, Tasman, New Zealand.",
  alternates: {
    canonical: "https://www.estuaryarts.co.nz/selected-work/",
  },
};

export default function GlassPage() {
  return (
    <GalleryGrid
      items={GLASS_ARTWORKS}
      variant="glass"
      ariaLabel="Glass Selected Work"
    />
  );
}
