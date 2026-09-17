import { Suspense } from "react";
import Link from "next/link";
import { Gift, ShieldCheck, Zap } from "lucide-react";
import BrandCatalog, { type CatalogBrand } from "@/components/BrandCatalog";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero } from "@/components/ui";
import { brands, brandsInCategory, brandsUnder, budgetTiers, categories, formatInr, getCategory, priceSummary } from "@/lib/brands";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "All E-Gift Card Brands — 290+ Brands to Gift",
  description: "Browse 290+ e-gift cards from Amazon, Myntra, Swiggy, Taj, Tanishq, Croma and more. Filter by category and find the perfect brand gift card to send.",
  path: "/brands",
});

const faqs = [
  { q: "How many brands are available on SaverPe?", a: `There are currently ${brands.length} brand e-gift cards in the SaverPe catalog across ${categories.length} categories, and we add new brands regularly.` },
  { q: "How do I choose the right brand gift card?", a: "Think about what the person enjoys most — shopping, food, travel, beauty or entertainment — then pick a brand in that category. If you're unsure, marketplace cards like Amazon or Flipkart are the most flexible." },
  { q: "What do the price ranges on brand cards mean?", a: "They show the denominations the brand offers. Some brands offer fixed values (like ₹500, ₹1,000, ₹2,000) while others allow any value within a range." },
];

export default function BrandsPage() {
  const catalog: CatalogBrand[] = brands.map((b) => ({
    slug: b.slug,
    name: b.name,
    logo: b.logo,
    category: b.category,
    categoryName: getCategory(b.category)?.name ?? "",
    categories: b.categories,
    popular: b.popular,
    priceLabel: priceSummary(b.price),
  }));
  const cats = categories.map((c) => ({ ...c, count: brandsInCategory(c.id).length })).filter((c) => c.count > 0);

  return (
    <>
      <JsonLd data={itemListJsonLd("SaverPe e-gift card brands", brands.map((b) => ({ name: `${b.name} E-Gift Card`, path: `/brands/${b.slug}` })))} />
      <PageHero
        breadcrumbs={[{ name: "Brands", path: "/brands" }]}
        eyebrow={`${brands.length} brands · ${cats.length} categories`}
        title={<>Find the brand they&apos;ll <span className="bg-brand px-2">love</span></>}
        intro="From everyday favourites to luxury labels — explore every e-gift card on SaverPe. Filter by category, search by name, and open any brand to see denominations, validity and redemption steps."
        aside={
          <ul className="grid gap-3">
            {[
              { icon: Gift, t: "Gift for any occasion", d: "Birthdays, weddings, festivals and thank-yous." },
              { icon: Zap, t: "Digital delivery", d: "Codes delivered by email, usually in minutes." },
              { icon: ShieldCheck, t: "Brand terms upfront", d: "Validity and redemption rules on every page." },
            ].map((x) => (
              <li key={x.t} className="card flex items-center gap-4 p-4">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-800"><x.icon className="size-5" aria-hidden /></span>
                <span><span className="block font-display font-bold">{x.t}</span><span className="text-sm text-muted">{x.d}</span></span>
              </li>
            ))}
          </ul>
        }
      />
      <section className="container-page py-10">
        <Suspense fallback={<p className="py-10 text-center text-muted">Loading brands…</p>}>
          <BrandCatalog brands={catalog} categories={cats} />
        </Suspense>
      </section>

      <section className="container-page mt-16">
        <h2 className="h-section">Browse brands by category</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cats.map((c) => (
            <div key={c.id} className="card p-6">
              <h3 className="font-display text-lg font-bold">
                <Link href={`/categories/${c.id}`} className="hover:underline">{c.name} gift cards</Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {brandsInCategory(c.id).slice(0, 8).map((b, i, arr) => (
                  <span key={b.slug}>
                    <Link href={`/brands/${b.slug}`} className="hover:text-ink hover:underline">{b.name}</Link>
                    {i < arr.length - 1 ? ", " : ""}
                  </span>
                ))}
                {c.count > 8 ? ` and ${c.count - 8} more.` : "."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-16">
        <h2 className="h-section">Shop gift cards by budget</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {budgetTiers.map((a) => (
            <li key={a}>
              <Link href={`/gift-cards-under/${a}`} className="card block p-6 transition hover:-translate-y-0.5 hover:border-brand">
                <span className="block font-display text-2xl font-extrabold">Under {formatInr(a)}</span>
                <span className="mt-1 block text-sm text-muted">{brandsUnder(a).length} brands starting at or below {formatInr(a)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page mt-16 max-w-4xl">
        <h2 className="h-section mb-8">Brand catalog FAQs</h2>
        <FaqList faqs={faqs} />
      </section>

      <CtaBand title="Can't decide? We'll help you pick." text="Tell us who you're gifting and the occasion — our team will suggest brands that fit." primary={{ href: "/contact-us", label: "Ask our gifting team" }} secondary={{ href: "/occasions", label: "Browse by occasion" }} />
    </>
  );
}
