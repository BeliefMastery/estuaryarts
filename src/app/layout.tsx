import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/gallery-data";
import { artGalleryJsonLd, SITE_GEO, websiteJsonLd } from "@/lib/metadata";
import "@/styles/globals.css";

const HOME_TITLE = "Glass Art and Paint Landscapes | Estuary Arts | Parapara, New Zealand";
const HOME_DESCRIPTION =
  "All works are created in our studios at Estuary Arts, by Rosie and Bruce. Collectable dramatic acrylic and oil paintings by Rosie Little and kilnformed glass art pieces in Parapara, Tasman, New Zealand.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Estuary Arts",
    "Rosie Little",
    "kilnformed glass art",
    "landscape paintings",
    "Parapara",
    "Golden Bay",
    "Tasman",
    "New Zealand art gallery",
    "acrylic and oil paintings",
  ],
  authors: [{ name: "Rosie Little" }, { name: "Bruce" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "art",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: "/images/cover-sign.jpg",
        alt: "Estuary Arts corten steel roadside entrance sign in Parapara, Tasman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/images/cover-sign.jpg"],
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  other: {
    "geo.region": SITE_GEO.region,
    "geo.placename": SITE_GEO.placename,
    "geo.position": `${SITE_GEO.latitude};${SITE_GEO.longitude}`,
    ICBM: `${SITE_GEO.latitude}, ${SITE_GEO.longitude}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={[websiteJsonLd(), artGalleryJsonLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
