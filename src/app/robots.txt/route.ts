import { site } from "@/lib/content";

export function GET() {
  return new Response(`User-agent: *
Allow: /
Disallow: /admin

Sitemap: ${site.url}/sitemap.xml
`, { headers: { "content-type": "text/plain" } });
}
