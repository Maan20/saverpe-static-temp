import { brands, budgetTiers, categories, formatInr, getCategory, occasions } from "@/lib/brands";
import { blogCategories, posts } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import { faqGroups } from "@/content/faqs";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a concise, link-rich map of the site for LLMs and answer engines.
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `SaverPe is an Indian digital gift card (e-gift card / e-voucher) platform. It lists ${brands.length} brand gift cards across ${categories.length} categories and ${occasions.length} occasions. Gift cards are delivered digitally by email and redeemed according to each brand's terms. Contact: ${site.email}. Business/bulk gifting is offered by the sister platform Orbit by SaverPe (${site.orbitUrl}).`,
    "",
    "## Key pages",
    `- [All brands](${absoluteUrl("/brands")}): searchable catalog of every e-gift card`,
    `- [How it works](${absoluteUrl("/how-it-works")}): choosing, sending and redeeming e-gift cards`,
    `- [FAQs](${absoluteUrl("/faq")}): delivery, validity, redemption, refunds and safety`,
    `- [About SaverPe](${absoluteUrl("/about-us")})`,
    `- [Gift card glossary](${absoluteUrl("/glossary")}): definitions of e-voucher, validity, partial redemption, PIN and more`,
    `- [Editorial policy](${absoluteUrl("/editorial-policy")}): how brand information and guides are researched and updated`,
    `- [Contact](${absoluteUrl("/contact-us")})`,
    `- [Refund policy](${absoluteUrl("/refund-policy")})`,
    `- [Full content for LLMs](${absoluteUrl("/llms-full.txt")})`,
    "",
    "## Categories",
    ...categories.map((c) => `- [${c.name} gift cards](${absoluteUrl(`/categories/${c.id}`)})`),
    "",
    "## Gift cards by budget",
    ...budgetTiers.map((a) => `- [Gift cards under ${formatInr(a)}](${absoluteUrl(`/gift-cards-under/${a}`)})`),
    "",
    "## Occasions",
    ...occasions.map((o) => `- [${o.name} gift cards](${absoluteUrl(`/occasions/${o.id}`)})`),
    "",
    "## Brands",
    ...brands.map((b) => `- [${b.name} e-gift card](${absoluteUrl(`/brands/${b.slug}`)}): ${getCategory(b.category)?.name}${b.expiry ? `; validity ${b.expiry}` : ""}`),
    "",
    ...blogCategories.flatMap((c) => {
      const list = posts.filter((p) => p.category === c.id);
      return list.length ? [`## Blog: ${c.name}`, ...list.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`), ""] : [];
    }),
    "## Frequently asked questions",
    ...faqGroups.flatMap((g) => g.faqs.map((f) => `- ${f.q} ${f.a.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")}`)),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
