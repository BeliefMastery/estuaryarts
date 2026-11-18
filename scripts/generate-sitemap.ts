import fs from "fs";
import path from "path";

const SITE_URL = "https://www.estuaryarts.co.nz";
const OUT_DIR = path.join(process.cwd(), "out");
const PUBLIC_DIR = path.join(process.cwd(), "public");

const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/selected-work-1/", priority: "0.9", changefreq: "monthly" },
  { path: "/selected-work/", priority: "0.9", changefreq: "monthly" },
];

function generateSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map(
    (r) =>
      `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), xml, "utf-8");
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf-8");

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  fs.writeFileSync(path.join(OUT_DIR, "robots.txt"), robots, "utf-8");
  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robots, "utf-8");

  console.log(`Generated sitemap.xml (${ROUTES.length} URLs) and robots.txt.`);
}

generateSitemap();
