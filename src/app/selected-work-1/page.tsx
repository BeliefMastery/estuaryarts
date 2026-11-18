import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd from "@/components/JsonLd";
import { PAINTING_ARTWORKS, SITE_URL } from "@/lib/gallery-data";
import { breadcrumbJsonLd, imageGalleryJsonLd } from "@/lib/metadata";

const PAGE_URL = `${SITE_URL}/selected-work-1/`;
const PAGE_DESCRIPTION =
  "Dramatic acrylic and oil landscape paintings by Rosie Little at Estuary Arts, Parapara, Golden Bay, Tasman, New Zealand.";

export const metadata: Metadata = {
  title: "Painting",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Painting | Estuary Arts",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/images/paintings/painting-01.png", alt: PAINTING_ARTWORKS[0].alt }],
  },
};

export default function PaintingPage() {
  return (
    <>
      <JsonLd
        data={[
          imageGalleryJsonLd(
            "Painting — Selected Work by Rosie Little",
            PAGE_DESCRIPTION,
            PAGE_URL,
            PAINTING_ARTWORKS
          ),
          breadcrumbJsonLd([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Painting", url: PAGE_URL },
          ]),
        ]}
      />
      <GalleryGrid
        items={PAINTING_ARTWORKS}
        variant="painting"
        ariaLabel="Painting Selected Work"
      />
    </>
  );
}
