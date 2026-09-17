import { brands, formatInr, getCategory, priceSummary, type Brand } from "@/lib/brands";
import { brandFacts, channelPhrase } from "@/lib/brand-facts";
import { posts } from "@/lib/blog";
import { plainText } from "@/lib/markdown";
import { absoluteUrl, site } from "@/lib/site";
import { faqGroups } from "@/content/faqs";

export const dynamic = "force-static";

function factLines(b: Brand) {
  const f = brandFacts(b);
  const where = channelPhrase(f);
  return [
    where ? `Where to use: ${where}` : "",
    f.partialRedemption !== null ? `Partial redemption: ${f.partialRedemption ? "allowed" : "not allowed (single use)"}` : "",
    f.multipleCards !== null ? `Multiple cards per bill: ${f.multipleCards ? (f.multipleCardLimit ? `yes, up to ${f.multipleCardLimit}` : "yes") : "no"}` : "",
    f.clubWithOffers === false ? "Can be combined with other offers: no" : "",
  ];
}


export function GET() {
  const parts = [
    `# ${site.name} — full content`,
    `> ${site.description}`,
    "",
    "## FAQs",
    ...faqGroups.flatMap((g) => [`### ${g.title}`, ...g.faqs.map((f) => `Q: ${f.q}\nA: ${f.a.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")}`)]),
    "",
    "## Brand gift cards",
    ...brands.map((b) =>
      [
        `### ${b.name} e-gift card`,
        `URL: ${absoluteUrl(`/brands/${b.slug}`)}`,
        `Category: ${getCategory(b.category)?.name}`,
        `Value: ${priceSummary(b.price)}${b.price.denominations?.length ? ` (denominations: ${b.price.denominations.map(formatInr).join(", ")})` : ""}`,
        b.expiry ? `Validity: ${b.expiry}` : "",
        ...factLines(b),
        b.description ? `About: ${b.description.replace(/\n/g, " ")}` : "",
        b.terms.length ? `Key terms: ${b.terms.slice(0, 6).join(" | ")}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    ),
    "",
    "## Blog articles",
    ...posts.map((p) => `### ${p.title}\nURL: ${absoluteUrl(`/blog/${p.slug}`)}\nPublished: ${p.date}\nSummary: ${p.tldr}\n\n${plainText(p.body)}${p.faqs?.length ? `\n\nFAQs:\n${p.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}` : ""}`),
  ];
  return new Response(parts.join("\n\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
