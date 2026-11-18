export interface ArtworkItem {
  id: string;
  src: string;
  alt: string;
}

export const SITE_NAME = "Estuary Arts";
export const SITE_URL = "https://www.estuaryarts.co.nz";
export const CONTACT_EMAIL = "estuaryarts@gmail.com";
export const CONTACT_PHONE = "006435248466";
export const CONTACT_PHONE_HREF = "tel:+6435248466";
export const CONTACT_ADDRESS = "Estuary Arts, Parapara, TASMAN 7182";

export const HERO_CONTENT = {
  heading: "Welcome to Estuary Arts",
  hours: "Open Wed-Sun, Oct to end of April",
  paragraphs: [
    "All works are created in our studios at Estuary Arts, by Rosie and Bruce.",
    "Collectable pieces displayed in our spacious gallery:\nPAINTINGS - dramatic acrylic and oils by Rosie Little\nGLASS - Kilnformed art pieces",
    "A diverse selection of art works inspired by our natural environment.... a special place.",
    "Look for our metal sign at roadside entrance.",
  ],
  coverImage: {
    src: "/images/cover-sign.jpg",
    alt: "Estuary Arts corten steel roadside entrance sign",
  },
};

export const GLASS_ARTWORKS: ArtworkItem[] = [
  {
    id: "glass-01",
    src: "/images/glass/glass-01.jpg",
    alt: "Kilnformed blue and gold three-panel coastal horizon glass artwork",
  },
  {
    id: "glass-02",
    src: "/images/glass/glass-02.jpg",
    alt: "Triptych framed dark-silhouette coastal inlet kilnformed glass panels",
  },
  {
    id: "glass-03",
    src: "/images/glass/glass-03.jpg",
    alt: "Triptych deep blue and gold mountain reflection kilnformed glass",
  },
  {
    id: "glass-04",
    src: "/images/glass/glass-04.jpg",
    alt: "Cream and green rectangular botanical kilnformed glass tiles",
  },
  {
    id: "glass-05",
    src: "/images/glass/glass-05.jpg",
    alt: "Multi-tile landscape and botanical kilnformed glass wall installation",
  },
  {
    id: "glass-06",
    src: "/images/glass/glass-06.jpg",
    alt: "Circular dark kilnformed glass platter with white flowers",
  },
  {
    id: "glass-07",
    src: "/images/glass/glass-07.jpg",
    alt: "Triptych nikau palm red-bordered kilnformed glass panels",
  },
  {
    id: "glass-08",
    src: "/images/glass/glass-08.jpg",
    alt: "Horizontal wave-shaped blue and gold horizon glass panel",
  },
  {
    id: "glass-09",
    src: "/images/glass/glass-09.jpg",
    alt: "Circular estuary channel landscape kilnformed glass disc",
  },
];

export const PAINTING_ARTWORKS: ArtworkItem[] = [
  {
    id: "painting-01",
    src: "/images/paintings/painting-01.png",
    alt: "Dramatic sunlit golden mountain range landscape painting by Rosie Little",
  },
  {
    id: "painting-02",
    src: "/images/paintings/painting-02.png",
    alt: "Rugged ochre ridges beneath dramatic sky painting by Rosie Little",
  },
  {
    id: "painting-03",
    src: "/images/paintings/painting-03.png",
    alt: "Highland peaks and rust-toned valley landscape painting by Rosie Little",
  },
  {
    id: "painting-04",
    src: "/images/paintings/painting-04.png",
    alt: "Steep amber mountain face landscape painting by Rosie Little",
  },
  {
    id: "painting-05",
    src: "/images/paintings/painting-05.png",
    alt: "Warm terracotta mountain range and valley painting by Rosie Little",
  },
  {
    id: "painting-06",
    src: "/images/paintings/painting-06.png",
    alt: "Coastal hills and estuary water landscape painting by Rosie Little",
  },
  {
    id: "painting-07",
    src: "/images/paintings/painting-07.png",
    alt: "Golden mountain ridge landscape painting by Rosie Little",
  },
  {
    id: "painting-08",
    src: "/images/paintings/painting-08.png",
    alt: "Estuary reflections and distant hills landscape painting by Rosie Little",
  },
];

export const HOME_PAINTING_CAROUSEL = PAINTING_ARTWORKS.slice(0, 7);
