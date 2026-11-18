import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd from "@/components/JsonLd";
import { GLASS_ARTWORKS, SITE_URL } from "@/lib/gallery-data";
import { breadcrumbJsonLd, imageGalleryJsonLd } from "@/lib/metadata";

const PAGE_URL = `${SITE_URL}/selected-work/`;
const PAGE_DESCRIPTION =
  "Kilnformed glass art pieces created at Estuary Arts in Parapara, Golden Bay, Tasman, New Zealand.";

export const metadata: Metadata = {
  title: "Glass",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Glass | Estuary Arts",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/images/glass/glass-01.jpg", alt: GLASS_ARTWORKS[0].alt }],
  },
};

export default function GlassPage() {
  return (
    <>
      <JsonLd
        data={[
          imageGalleryJsonLd(
            "Glass — Selected Work",
            PAGE_DESCRIPTION,
            PAGE_URL,
            GLASS_ARTWORKS
          ),
          breadcrumbJsonLd([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Glass", url: PAGE_URL },
          ]),
        ]}
      />
      <GalleryGrid
        items={GLASS_ARTWORKS}
        variant="glass"
        ariaLabel="Glass Selected Work"
      />
    </>
  );
}
