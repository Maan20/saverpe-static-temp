import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, CalendarClock, ChevronDown, CircleCheck, Gift, ListChecks, Mail, ShieldCheck, Sparkles, Tag, Wallet, Zap } from "lucide-react";
import BrandCard, { BrandLogo } from "@/components/BrandCard";
import BuyNow, { type BuyBrand } from "@/components/BuyNow";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/ui";
import { brandImage, brands, formatInr, getBrand, getCategory, getOccasion, priceSummary, relatedBrands, type Brand } from "@/lib/brands";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { brandFacts, channelPhrase, yesNo, type BrandFacts } from "@/lib/brand-facts";
import { posts } from "@/lib/blog";
import { categoryCopy } from "@/content/categories";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

function metaDescription(brand: Brand) {
  const f = brandFacts(brand);
  const where = channelPhrase(f);
  const parts = [
    `Buy a ${brand.name} e-gift card online (${priceSummary(brand.price)})`,
    brand.expiry ? `valid ${shortExpiry(brand.expiry)}` : null,
    where ? `use it ${where}` : null,
  ].filter(Boolean);
  return `${parts.join(", ")}. Denominations, redemption steps & T&Cs — delivered by email.`;
}

/** "365 Days from the date of activation" → "for 365 days from activation". */
function shortExpiry(expiry: string) {
  return `for ${expiry.replace(/\.$/, "").replace(/the date of /i, "").replace(/\s+/g, " ").trim().toLowerCase()}`;
}

/** Answer-first summary used at the top of the page, in FAQs and in llms-full.txt. */
function quickAnswer(brand: Brand, f: BrandFacts) {
  const bits = [`${brand.name} e-gift cards on SaverPe are available for ${priceSummary(brand.price)}`];
  if (brand.expiry) bits.push(`and are valid ${shortExpiry(brand.expiry)}`);
  let text = `${bits.join(" ")}.`;
  const where = channelPhrase(f);
  if (where) text += ` According to the brand's terms, the card can be used ${where}.`;
  if (f.partialRedemption === false) text += " It must be redeemed in a single transaction (no partial redemption).";
  if (f.partialRedemption === true) text += " Any unused balance can be used on later purchases.";
  if (f.multipleCards === true) text += ` You can combine ${f.multipleCardLimit ? `up to ${f.multipleCardLimit}` : "multiple"} cards in one bill.`;
  if (f.multipleCards === false) text += " Only one card can be used per bill.";
  return `${text} Cards are delivered digitally by email.`;
}

export async function generateMetadata({ params }: PageProps<"/brands/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return pageMeta({
    title: `${brand.name} Gift Card Online: Denominations, Validity & How to Redeem`,
    description: metaDescription(brand),
    path: `/brands/${brand.slug}`,
    keywords: [`${brand.name} gift card`, `${brand.name} e-gift card`, `${brand.name} gift voucher`, `buy ${brand.name} gift card online`, `${brand.name} gift card validity`, `how to redeem ${brand.name} gift card`, `${brand.name} voucher India`],
  });
}

const defaultRedeem = (brand: Brand) => [
  `Open the SaverPe delivery email and copy your ${brand.name} gift card code${brand.terms.some((t) => /pin/i.test(t)) ? " and PIN" : ""}.`,
  `Visit the official ${brand.name} website, app or a participating store, as allowed by the brand's terms.`,
  "Add your items and choose gift card / voucher as the payment option at checkout.",
  "Enter the code (and PIN where applicable) and apply it. Pay any balance amount using another payment method if the brand allows.",
];

export default async function BrandPage({ params }: PageProps<"/brands/[slug]">) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const category = getCategory(brand.category);
  const range = brand.price.type === "range" && brand.price.min && brand.price.max ? { min: brand.price.min, max: brand.price.max } : null;
  const buyBrand: BuyBrand = {
    slug: brand.slug,
    name: brand.name,
    denominations: brand.price.denominations?.length
      ? brand.price.denominations
      : range
        ? [250, 500, 1000, 2000, 5000, 10000].filter((v) => v >= range.min && v <= range.max)
        : [500, 1000, 2000],
    range,
  };
  const related = relatedBrands(brand, 6);
  const facts = brandFacts(brand);
  const answer = quickAnswer(brand, facts);
  const copy = categoryCopy[brand.category];
  // Articles that already link to this brand come first, then articles from the same category keywords.
  const mentioning = posts.filter((p) => p.body.includes(`/brands/${brand.slug}`));
  const categoryWords = (category?.name ?? "").toLowerCase().split(/[ &]+/).filter((w) => w.length > 3);
  const guides = [...mentioning, ...posts.filter((p) => !mentioning.includes(p) && categoryWords.some((w) => `${p.title} ${p.tags.join(" ")}`.toLowerCase().includes(w)))].slice(0, 3);
  const factRows: { label: string; value: string }[] = [
    { label: "Card value", value: priceSummary(brand.price) },
    { label: "Validity", value: brand.expiry ?? "As per brand terms" },
    { label: "Where to use", value: channelPhrase(facts) ? channelPhrase(facts)!.replace(/^./, (c) => c.toUpperCase()) : "See brand terms" },
    { label: "Partial redemption", value: yesNo(facts.partialRedemption, "Allowed", "Not allowed (single use)") },
    { label: "Multiple cards per bill", value: yesNo(facts.multipleCards, facts.multipleCardLimit ? `Yes, up to ${facts.multipleCardLimit}` : "Yes", "No, one card per bill") },
    { label: "Combine with offers", value: yesNo(facts.clubWithOffers, "Yes", "No") },
    { label: "PIN required", value: facts.pinRequired ? "Yes, code + PIN" : "Code (PIN if provided)" },
    { label: "Delivery", value: "Digital, by email" },
  ];
  const steps = brand.howToRedeem.length ? brand.howToRedeem : defaultRedeem(brand);
  const denoms = brand.price.denominations ?? [];
  const description = brand.description
    ? brand.description.split("\n")
    : [
        `${brand.name} e-gift cards are a simple way to let someone enjoy ${category?.name.toLowerCase()} on their own terms. Instead of guessing sizes, flavours or styles, you give them the freedom to choose exactly what they want from ${brand.name}.`,
        ...(copy ? [`${copy.tagline}. ${copy.intro}`, `A ${brand.name} gift card is especially popular for ${copy.perfectFor.join(", ").toLowerCase()}. ${copy.tip}`] : []),
        `Whether it's a birthday, anniversary, festival like Diwali, or a thank-you for someone special, a ${brand.name} gift card is delivered digitally and can be redeemed as per the brand's terms and conditions listed below.`,
      ];

  const faqs = [
    { q: `How do I use a ${brand.name} e-gift card?`, a: steps.join(" ") },
    { q: `What is the validity of a ${brand.name} gift card?`, a: brand.expiry ? `The ${brand.name} e-gift card is valid for ${brand.expiry.replace(/\.$/, "")}. Please redeem it before it expires as expired balances usually cannot be restored.` : `Validity is defined by ${brand.name}'s gift card program and is mentioned in the delivery email.` },
    { q: `Which denominations are available for ${brand.name} gift cards?`, a: brand.price.type === "slab" ? `${brand.name} gift cards come in fixed denominations: ${denoms.map(formatInr).join(", ") || "as listed by the brand"}.` : `${brand.name} gift cards can be issued for any value ${brand.price.min && brand.price.max ? `between ${formatInr(brand.price.min)} and ${formatInr(brand.price.max)}` : "within the brand's allowed range"}.` },
    { q: `Can a ${brand.name} gift card be refunded or exchanged for cash?`, a: "No. Like most brand gift cards, it cannot be refunded, cancelled or exchanged for cash once issued. See the full terms and conditions on this page." },
    ...(channelPhrase(facts) ? [{ q: `Where can I use a ${brand.name} gift card?`, a: `According to the brand's listed terms, the ${brand.name} gift card can be used ${channelPhrase(facts)}. Check the terms on this page for participating locations and exclusions.` }] : []),
    ...(facts.partialRedemption !== null ? [{ q: `Can I use a ${brand.name} gift card more than once?`, a: facts.partialRedemption ? `Yes. The terms allow partial redemption, so any unused balance can be used on later purchases before the card expires.` : `No. The terms state the card must be redeemed in a single transaction, so plan a purchase close to the card value — any leftover balance is not carried forward.` }] : []),
    ...(facts.multipleCards !== null ? [{ q: `Can I use more than one ${brand.name} gift card in a single bill?`, a: facts.multipleCards ? `Yes. ${facts.multipleCardLimit ? `Up to ${facts.multipleCardLimit} cards` : "Multiple cards"} can be used against one bill as per the brand's terms.` : "No. The terms allow only one gift card per bill or invoice." }] : []),
    ...(facts.clubWithOffers === false ? [{ q: `Can a ${brand.name} gift card be combined with other offers?`, a: "No. The brand's terms state that the gift card cannot be clubbed with other offers or promotions." }] : []),
    { q: `How do I buy a ${brand.name} gift card on SaverPe?`, a: `Tap "Buy now" on this page, choose a card value and quantity (up to 5), and share your name, email and mobile number. Our team will contact you soon to complete the purchase.` },
  ];

  // WebPage + Brand (no Product/Offer): there is no live purchase flow yet.
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${brand.name} E-Gift Card`,
    description: metaDescription(brand),
    url: absoluteUrl(`/brands/${brand.slug}`),
    inLanguage: "en-IN",
    primaryImageOfPage: absoluteUrl(brandImage(brand)),
    about: { "@type": "Brand", name: brand.name },
    abstract: answer,
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#quick-answer"] },
    isPartOf: { "@id": `${site.url}/#website` },
  };

  return (
    <>
      <JsonLd data={pageJsonLd} />
      <section className="border-b border-line bg-[radial-gradient(circle_at_85%_20%,var(--color-brand-100),transparent_40%)]">
        <div className="container-page py-10">
          <Breadcrumbs items={[{ name: "Brands", path: "/brands" }, ...(category ? [{ name: category.name, path: `/categories/${category.id}` }] : []), { name: brand.name, path: `/brands/${brand.slug}` }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[380px_1fr] lg:items-start">
            <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
              <div className="rotate-[-2deg] rounded-[2rem] bg-brand p-3 shadow-[0_40px_80px_-40px_rgba(18,18,18,0.5)]">
                <BrandLogo brand={brand} className="aspect-[10/11] w-full rounded-[1.5rem]" />
              </div>
            </div>
            <div>
              <Link href={`/categories/${brand.category}`} className="eyebrow">{category?.name}</Link>
              <h1 className="h-display mt-4">{brand.name} E-Gift Card</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                Give the gift of choice with a {brand.name} e-gift card — delivered digitally and ready to redeem as per {brand.name}&apos;s terms. Ideal for {brand.occasions.slice(0, 3).map((o) => getOccasion(o)?.name.toLowerCase()).filter(Boolean).join(", ") || "birthdays, festivals and thank-yous"}.
              </p>

              <p id="quick-answer" className="mt-5 flex max-w-2xl gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm leading-6 text-ink-soft">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-brand-800" aria-hidden />
                <span><strong className="text-ink">Quick answer:</strong> {answer}</span>
              </p>

              <dl className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="card p-4">
                  <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted"><Wallet className="size-4" aria-hidden /> Value</dt>
                  <dd className="mt-1 font-display text-lg font-bold">{priceSummary(brand.price)}</dd>
                </div>
                <div className="card p-4">
                  <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted"><CalendarClock className="size-4" aria-hidden /> Validity</dt>
                  <dd className="mt-1 font-display text-lg font-bold">{brand.expiry ?? "As per brand terms"}</dd>
                </div>
                <div className="card p-4">
                  <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted"><Zap className="size-4" aria-hidden /> Delivery</dt>
                  <dd className="mt-1 font-display text-lg font-bold">Digital, via email</dd>
                </div>
              </dl>

              {denoms.length > 0 && (
                <div className="mt-6">
                  <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted"><Tag className="size-4" aria-hidden /> Available denominations</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {denoms.map((d) => (
                      <li key={d} className="rounded-full border border-line bg-white px-4 py-2 font-display text-sm font-bold">{formatInr(d)}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <BuyNow brand={buyBrand} />
                <Link href={`/contact-us?brand=${encodeURIComponent(brand.name)}`} className="btn-ghost">
                  <Gift className="size-4" aria-hidden /> Ask a question
                </Link>
                <a href={`${site.orbitUrl}/brands?q=${encodeURIComponent(brand.name)}`} className="btn-ghost">
                  Buying in bulk? Orbit <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
              <p className="mt-3 text-xs text-muted">Buy up to 5 cards per request — share your details and our team will contact you soon to complete your purchase.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page mt-14 grid gap-10 lg:grid-cols-[1fr_340px]">
        <div className="space-y-12">
          <section>
            <h2 className="h-section flex items-center gap-3"><ListChecks className="size-8 text-brand-700" aria-hidden /> {brand.name} gift card: key facts</h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-white">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{brand.name} e-gift card key facts</caption>
                <tbody className="divide-y divide-line">
                  {factRows.map((r) => (
                    <tr key={r.label}>
                      <th scope="row" className="w-1/2 bg-sand/60 px-5 py-3.5 font-bold text-ink">{r.label}</th>
                      <td className="px-5 py-3.5 text-ink-soft">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-muted">Summarised from the terms listed below. The brand&apos;s current terms always apply.</p>
          </section>

          <section>
            <h2 className="h-section">About the {brand.name} gift card</h2>
            <div className="prose-article">
              {description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="h-section">How to redeem your {brand.name} e-gift card</h2>
            <ol className="mt-6 grid gap-3">
              {steps.map((s, i) => (
                <li key={i} className="card flex gap-4 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand font-display font-extrabold">{i + 1}</span>
                  <p className="leading-7 text-ink-soft">{s}</p>
                </li>
              ))}
            </ol>
          </section>

          {brand.terms.length > 0 && (
            <section>
              <details className="group card overflow-hidden" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <h2 className="font-display text-2xl font-extrabold">{brand.name} gift card terms &amp; conditions</h2>
                  <ChevronDown className="size-5 transition group-open:rotate-180" aria-hidden />
                </summary>
                <ul className="space-y-3 border-t border-line p-6 text-sm leading-6 text-ink-soft">
                  {brand.terms.map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <CircleCheck className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </section>
          )}

          <section>
            <h2 className="h-section mb-6">{brand.name} gift card FAQs</h2>
            <FaqList faqs={faqs} />
          </section>

          {guides.length > 0 && (
            <section>
              <h2 className="h-section flex items-center gap-3"><BookOpen className="size-8 text-brand-700" aria-hidden /> Gifting guides featuring {brand.name}</h2>
              <ul className="mt-6 grid gap-3">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/blog/${g.slug}`} className="card flex items-center justify-between gap-4 p-5 transition hover:border-brand">
                      <span>
                        <span className="block font-display font-bold">{g.title}</span>
                        <span className="mt-1 line-clamp-2 block text-sm text-muted">{g.description}</span>
                      </span>
                      <ArrowRight className="size-5 shrink-0 text-muted" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl bg-brand p-6">
            <h2 className="font-display text-lg font-bold">Ready to gift {brand.name}?</h2>
            <p className="mt-1 text-sm text-ink/75">Choose a value and quantity (up to 5). We&apos;ll contact you to complete your order.</p>
            <BuyNow brand={buyBrand} className="mt-4 w-full !bg-ink !text-white" />
          </div>
          <div className="card p-6">
            <h2 className="font-display text-lg font-bold">Why gift {brand.name}?</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2"><CircleCheck className="size-4 shrink-0 text-mint" aria-hidden /> They pick exactly what they want</li>
              <li className="flex gap-2"><CircleCheck className="size-4 shrink-0 text-mint" aria-hidden /> No sizes, returns or wrapping</li>
              <li className="flex gap-2"><CircleCheck className="size-4 shrink-0 text-mint" aria-hidden /> Perfect for long-distance gifting</li>
              <li className="flex gap-2"><ShieldCheck className="size-4 shrink-0 text-mint" aria-hidden /> Genuine brand-issued card</li>
            </ul>
          </div>
          {brand.occasions.length > 0 && (
            <div className="card p-6">
              <h2 className="font-display text-lg font-bold">Great for</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {brand.occasions.map((o) => (
                  <li key={o}>
                    <Link href={`/occasions/${o}`} className="inline-block rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-800 hover:bg-brand-100">{getOccasion(o)?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-3xl bg-ink p-6 text-white">
            <Mail className="size-6 text-brand" aria-hidden />
            <h2 className="mt-3 font-display text-lg font-bold">Need help?</h2>
            <p className="mt-2 text-sm text-white/70">Questions about {brand.name} gift cards? Our support team is one email away.</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block font-bold text-brand">{site.email}</a>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="h-section">More {category?.name.toLowerCase()} gift cards</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {related.map((b) => (
              <li key={b.slug}><BrandCard brand={b} /></li>
            ))}
          </ul>
        </section>
      )}

      <CtaBand title={`Gifting ${brand.name} to your whole team?`} text="Orbit by SaverPe handles bulk e-gift card orders across multiple brands and denominations for companies of every size." primary={{ href: `${site.orbitUrl}/contact-sales`, label: "Talk to Orbit sales" }} secondary={{ href: "/brands", label: "Explore more brands" }} />
    </>
  );
}
