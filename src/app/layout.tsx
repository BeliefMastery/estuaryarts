import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/gallery-data";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Glass Art and Paint Landscapes | Estuary Arts | Parapara, New Zealand",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "All works are created in our studios at Estuary Arts, by Rosie and Bruce. Collectable dramatic acrylic and oil paintings by Rosie Little and kilnformed glass art pieces in Parapara, Tasman, New Zealand.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Glass Art and Paint Landscapes | Estuary Arts | Parapara, New Zealand",
    description:
      "Paintings by Rosie Little and kilnformed glass art pieces at Estuary Arts, Parapara, Golden Bay, Tasman, New Zealand.",
    images: [{ url: "/images/cover-sign.jpg", alt: "Estuary Arts roadside sign" }],
  },
  alternates: {
    canonical: SITE_URL,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
