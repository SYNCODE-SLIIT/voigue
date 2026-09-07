import { site, services, industries, fallbackPosts } from "@/lib/content";

export function GET() {
  const paths = [
    "",
    "/about",
    "/services",
    "/industries",
    "/careers",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    ...services.map((item) => `/services/${item.slug}`),
    ...industries.map((item) => `/industries/${item.slug}`),
    ...fallbackPosts.map((item) => `/insights/${item.slug}`)
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `<url><loc>${site.url}${path}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml" } });
}
