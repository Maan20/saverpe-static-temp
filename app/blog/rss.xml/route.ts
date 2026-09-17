import { posts } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = posts
    .map(
      (p) => `<item><title>${esc(p.title)}</title><link>${absoluteUrl(`/blog/${p.slug}`)}</link><guid>${absoluteUrl(`/blog/${p.slug}`)}</guid><pubDate>${new Date(`${p.date}T09:00:00+05:30`).toUTCString()}</pubDate><description>${esc(p.description)}</description>${p.tags.map((t) => `<category>${esc(t)}</category>`).join("")}</item>`,
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${site.name} Gifting Journal</title><link>${absoluteUrl("/blog")}</link><atom:link href="${absoluteUrl("/blog/rss.xml")}" rel="self" type="application/rss+xml"/><description>Gift guides, festival ideas and e-gift card know-how from SaverPe.</description><language>en-in</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
