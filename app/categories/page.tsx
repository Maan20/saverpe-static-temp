import Link from "next/link";
import NextImage from "next/image";
import { ArrowRight, Gift } from "lucide-react";
import { CtaBand, PageHero } from "@/components/ui";
import { categoryIcons, categoryTints } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import { brandsInCategory, categories } from "@/lib/brands";
import { categoryCopy } from "@/content/categories";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gift Card Categories — Fashion, Food, Travel & More",
  description: "Explore e-gift cards by category: fashion, e-commerce, food & dining, travel, jewellery, electronics, beauty, entertainment, gaming, subscriptions and more.",
  path: "/categories",
});

export default function CategoriesPage() {
  const list = categories.map((c) => ({ ...c, brands: brandsInCategory(c.id) })).filter((c) => c.brands.length);
  return (
    <>
      <JsonLd data={itemListJsonLd("Gift card categories", list.map((c) => ({ name: `${c.name} gift cards`, path: `/categories/${c.id}` })))} />
      <PageHero
        breadcrumbs={[{ name: "Categories", path: "/categories" }]}
        eyebrow={`${list.length} categories`}
        title="Gift cards for every passion"
        intro="Start with what they love. Each category brings together the best brands for that interest — with denominations, validity and redemption details on every brand page."
      />
      <section className="container-page mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {list.map((c) => {
          const Icon = categoryIcons[c.id] ?? Gift;
          const copy = categoryCopy[c.id];
          const logos = c.brands.filter((b) => b.logo).slice(0, 4);
          return (
            <Link key={c.id} href={`/categories/${c.id}`} className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-ink">
              <div className="flex items-center justify-between">
                <span className={`grid size-14 place-items-center rounded-2xl ${categoryTints[c.id]}`}>
                  <Icon className="size-7" aria-hidden />
                </span>
                <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-muted">{c.brands.length} brands</span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-extrabold">{c.name}</h2>
              <p className="text-sm font-semibold text-brand-800">{copy?.tagline}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{copy?.intro}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {logos.map((b) => (
                    <span key={b.slug} className="relative size-10 overflow-hidden rounded-full border-2 border-white bg-white">
                      <NextImage src={b.logo!} alt={b.name} fill sizes="40px" className="object-cover object-top" />
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2">
                  Explore <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          );
        })}
      </section>
      <CtaBand title="Shopping for a special moment?" text="Browse gift cards curated for birthdays, weddings, Diwali, Rakhi and more." primary={{ href: "/occasions", label: "Gift by occasion" }} secondary={{ href: "/brands", label: "All brands" }} />
    </>
  );
}
