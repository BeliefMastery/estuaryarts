"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/gallery-data";

export default function Header() {
  const pathname = usePathname() || "/";
  const isPainting = pathname.startsWith("/selected-work-1");
  const isGlass = pathname === "/selected-work" || pathname === "/selected-work/";

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container-980 header-top-inner">
          <Link href="/" className="site-brand">
            {SITE_NAME}
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="cta-button">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="header-nav-bar">
        <div className="container-980">
          <nav className="header-nav" aria-label="Site">
            <Link
              href="/selected-work-1/"
              className={`header-nav-link${isPainting ? " active" : ""}`}
            >
              Painting
            </Link>
            <Link
              href="/selected-work/"
              className={`header-nav-link${isGlass ? " active" : ""}`}
            >
              Glass
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
