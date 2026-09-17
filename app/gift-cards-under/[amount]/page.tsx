import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CircleCheck, IndianRupee, Lightbulb } from "lucide-react";
import BrandCard from "@/components/BrandCard";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero } from "@/components/ui";
import { brandsUnder, budgetTiers, categories, formatInr, startingValue } from "@/lib/brands";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return budgetTiers.map((a) => ({ amount: String(a) }));
}

export const dynamicParams = false;

const ideas: Record<number, { intro: string; bestFor: string[]; tip: string }> = {
  500: {
    intro: "A ₹500 gift card is the sweet spot for thoughtful small gestures — a coffee, a meal delivery, a movie ticket or a book. It's ideal for Secret Santa, colleague thank-yous, students and team shout-outs, where the thought matters more than the price tag.",
    bestFor: ["Secret Santa", "Thank-you notes", "Students", "Team shout-outs"],
    tip: "Single-use cards at ₹500 work best for food, coffee and entertainment brands, where a typical purchase is close to the card value.",
  },
  1000: {
    intro: "₹1,000 is the most popular gift card value in India — enough for a dinner out, a fashion accessory, a beauty haul or a good chunk of a marketplace order. It suits birthdays, Raksha Bandhan, Diwali gifts for friends and festive gifts for household staff.",
    bestFor: ["Birthdays", "Raksha Bandhan", "Diwali gifts", "Teachers' Day"],
    tip: "For fashion and marketplace brands, ₹1,000 covers most everyday purchases, so the recipient rarely needs to top up.",
  },
  2000: {
    intro: "A ₹2,000 gift card feels generous without going overboard. It covers a new outfit, a family meal, skincare essentials, a streaming or gaming top-up, or part of a gadget — a great fit for anniversaries, weddings, housewarmings and close friends.",
    bestFor: ["Anniversaries", "Weddings", "Housewarmings", "Work milestones"],
    tip: "At higher values, prefer brands that allow partial redemption or wallet top-ups, so any leftover balance isn't lost.",
  },
};

export async function generateMetadata({ params }: PageProps<"/gift-cards-under/[amount]">): Promise<Metadata> {
  const { amount } = await params;
  const value = Number(amount);
  const list = brandsUnder(value);
  if (!ideas[value]) return {};
  return pageMeta({
    title: `Gift Cards Under ${formatInr(value)}: ${list.length} Brands to Gift Online`,
    description: `The best e-gift cards under ${formatInr(value)} in India — ${list.slice(0, 4).map((b) => b.name).join(", ")} and more. Compare validity & redemption, delivered by email.`,
    path: `/gift-cards-under/${value}`,
    keywords: [`gift cards under ${value}`, `gift vouchers under rs ${value}`, `${value} rupees gift card`, `best gift under ${value} India`, `e-gift card ${value}`],
  });
}

export default async function BudgetPage({ params }: PageProps<"/gift-cards-under/[amount]">) {
  const { amount } = await params;
  const value = Number(amount);
  const idea = ideas[value];
  if (!idea) notFound();
  const list = brandsUnder(value);
  const byCategory = categories
    .map((c) => ({ ...c, count: list.filter((b) => b.category === c.id).length }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);
  const faqs = [
    { q: `What are the best gift cards under ${formatInr(value)}?`, a: `Popular picks under ${formatInr(value)} on SaverPe include ${list.slice(0, 6).map((b) => b.name).join(", ")}. The best choice depends on what the recipient already enjoys — food, fashion, entertainment or shopping.` },
    { q: `Is ${formatInr(value)} a good amount for a gift card?`, a: `Yes. ${idea.intro.split(". ")[0]}.` },
    { q: `Which categories have gift cards starting at or below ${formatInr(value)}?`, a: `${byCategory.slice(0, 6).map((c) => `${c.name} (${c.count})`).join(", ")}.` },
    { q: "How is the gift card delivered?", a: "SaverPe e-gift cards are delivered digitally by email, with the code, validity and redemption steps for the brand." },
  ];

  return (
    <>
      <JsonLd data={itemListJsonLd(`Gift cards under ${formatInr(value)}`, list.map((b) => ({ name: `${b.name} E-Gift Card`, path: `/brands/${b.slug}` })))} />
      <PageHero
        breadcrumbs={[{ name: "Brands", path: "/brands" }, { name: `Under ${formatInr(value)}`, path: `/gift-cards-under/${value}` }]}
        eyebrow={`${list.length} brands`}
        title={<>Gift cards under {formatInr(value)}</>}
        intro={idea.intro}
        aside={
          <div className="card p-6">
            <span className="grid size-14 place-items-center rounded-2xl bg-brand"><IndianRupee className="size-7" aria-hidden /></span>
            <h2 className="mt-4 text-xs font-bold uppercase tracking-wider text-muted">Best for</h2>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
              {idea.bestFor.map((p) => <li key={p} className="flex items-center gap-2"><CircleCheck className="size-4 text-mint" aria-hidden /> {p}</li>)}
            </ul>
            <h2 className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">Other budgets</h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              {budgetTiers.filter((t) => t !== value).map((t) => (
                <li key={t}><Link href={`/gift-cards-under/${t}`} className="inline-block rounded-full border border-line px-3 py-1.5 text-sm font-bold hover:border-brand">Under {formatInr(t)}</Link></li>
              ))}
            </ul>
          </div>
        }
      />
      <section className="container-page mt-10">
        <aside className="flex gap-3 rounded-2xl bg-brand-50 p-5">
          <Lightbulb className="size-5 shrink-0 text-brand-800" aria-hidden />
          <p className="text-sm leading-6 text-ink-soft"><strong>Budget tip:</strong> {idea.tip} Brands are listed with the most popular first; each card starts at or below {formatInr(value)}.</p>
        </aside>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {list.map((b) => <li key={b.slug}><BrandCard brand={b} /></li>)}
        </ul>
      </section>
      <section className="container-page mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="h-section">Starting values by brand</h2>
          <div className="mt-6 max-h-[28rem] overflow-auto rounded-3xl border border-line bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Lowest card value for each brand under {formatInr(value)}</caption>
              <thead className="sticky top-0 bg-sand"><tr><th scope="col" className="px-5 py-3">Brand</th><th scope="col" className="px-5 py-3">Starts at</th></tr></thead>
              <tbody className="divide-y divide-line">
                {list.slice(0, 40).map((b) => (
                  <tr key={b.slug}>
                    <td className="px-5 py-3"><Link href={`/brands/${b.slug}`} className="font-semibold hover:underline">{b.name}</Link></td>
                    <td className="px-5 py-3 text-ink-soft">{formatInr(startingValue(b.price)!)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="h-section mb-6">FAQs</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>
      <CtaBand title="Know the occasion?" text="Browse gift card ideas for birthdays, weddings, Diwali and more." primary={{ href: "/occasions", label: "Gift by occasion" }} secondary={{ href: "/categories", label: "Browse categories" }} />
    </>
  );
}
