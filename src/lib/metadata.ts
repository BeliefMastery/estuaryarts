import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GLASS_ARTWORKS,
  PAINTING_ARTWORKS,
  SITE_NAME,
  SITE_URL,
  type ArtworkItem,
} from "./gallery-data";

export const SITE_GEO = {
  placename: "Parapara, Golden Bay, Tasman",
  region: "NZ-TAS",
  latitude: -40.7289,
  longitude: 172.6819,
};

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-NZ",
    description:
      "Estuary Arts studio and gallery in Parapara, Golden Bay, Tasman, New Zealand — dramatic acrylic and oil landscape paintings by Rosie Little and kilnformed glass art pieces by Bruce.",
  };
}

export function artGalleryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ArtGallery", "LocalBusiness"],
    "@id": `${SITE_URL}/#gallery`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/cover-sign.jpg`,
    email: CONTACT_EMAIL,
    telephone: "+6435248466",
    description:
      "Art studio and gallery in Parapara, Golden Bay, New Zealand featuring dramatic acrylic and oil paintings by Rosie Little and kilnformed glass art pieces by Bruce.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Parapara",
      addressLocality: "Parapara",
      addressRegion: "Tasman",
      postalCode: "7182",
      addressCountry: "NZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      },
    ],
    founder: [
      { "@type": "Person", name: "Rosie Little", jobTitle: "Painter" },
      { "@type": "Person", name: "Bruce", jobTitle: "Glass Artist" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      areaServed: "NZ",
      availableLanguage: "English",
    },
  };
}

export function imageGalleryJsonLd(
  name: string,
  description: string,
  url: string,
  items: ArtworkItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ImageGallery",
      name,
      image: items.map((item) => ({
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${item.src}`,
        description: item.alt,
      })),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export { GLASS_ARTWORKS, PAINTING_ARTWORKS };
