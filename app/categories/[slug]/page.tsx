import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CircleCheck, Gift, Lightbulb } from "lucide-react";
import BrandCard from "@/components/BrandCard";
import BlogCard from "@/components/BlogCard";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero } from "@/components/ui";
import { categoryIcons, categoryTints } from "@/components/icons";
import { brandsInCategory, categories, getCategory } from "@/lib/brands";
import { posts } from "@/lib/blog";
import { categoryCopy } from "@/content/categories";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return categories.filter((c) => brandsInCategory(c.id).length).map((c) => ({ slug: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/categories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  const list = brandsInCategory(slug);
  return pageMeta({
    title: `${cat.name} Gift Cards — ${list.length} Brands to Gift`,
    description: `Gift ${cat.name.toLowerCase()} e-gift cards from ${list.slice(0, 4).map((b) => b.name).join(", ")} and more. Compare denominations & validity, delivered digitally.`.slice(0, 158),
    path: `/categories/${slug}`,
    keywords: [`${cat.name} gift cards`, `${cat.name} e-gift vouchers`, `${cat.name.toLowerCase()} gift card India`],
  });
}

export default async function CategoryPage({ params }: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();
  const list = brandsInCategory(slug);
  const copy = categoryCopy[slug];
  const Icon = categoryIcons[slug] ?? Gift;
  const keywords = cat.name.toLowerCase().split(/[ &]+/).filter((w) => w.length > 3);
  const articles = posts.filter((p) => keywords.some((k) => `${p.title} ${p.tags.join(" ")}`.toLowerCase().includes(k))).slice(0, 3);
  const faqs = [
    { q: `What are the best ${cat.name.toLowerCase()} gift cards?`, a: `Popular ${cat.name.toLowerCase()} e-gift cards on SaverPe include ${list.slice(0, 5).map((b) => b.name).join(", ")}. Each brand page lists denominations, validity and redemption steps.` },
    { q: `Who should I gift a ${cat.name.toLowerCase()} gift card to?`, a: `${cat.name} gift cards are perfect for ${copy?.perfectFor.join(", ").toLowerCase() ?? "anyone who enjoys this category"}.` },
    { q: `How are ${cat.name.toLowerCase()} e-gift cards delivered?`, a: "All SaverPe e-gift cards are delivered digitally by email with the code, validity and redemption instructions." },
  ];

  return (
    <>
      <JsonLd data={itemListJsonLd(`${cat.name} gift cards`, list.map((b) => ({ name: `${b.name} E-Gift Card`, path: `/brands/${b.slug}` })))} />
      <PageHero
        breadcrumbs={[{ name: "Categories", path: "/categories" }, { name: cat.name, path: `/categories/${slug}` }]}
        eyebrow={`${list.length} brands`}
        title={<>{cat.name} gift cards</>}
        intro={copy?.intro}
        aside={
          <div className="card relative overflow-hidden p-6">
            <span className={`grid size-16 place-items-center rounded-3xl ${categoryTints[slug]}`}>
              <Icon className="size-8" aria-hidden />
            </span>
            <p className="mt-4 font-display text-2xl font-extrabold">{copy?.tagline}</p>
            <h2 className="mt-4 text-xs font-bold uppercase tracking-wider text-muted">Perfect for</h2>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
              {copy?.perfectFor.map((p) => (
                <li key={p} className="flex items-center gap-2"><CircleCheck className="size-4 text-mint" aria-hidden /> {p}</li>
              ))}
            </ul>
          </div>
        }
      />
      <section className="container-page mt-12">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {list.map((b) => (
            <li key={b.slug}><BrandCard brand={b} /></li>
          ))}
        </ul>
      </section>

      <section className="container-page mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
        <Image GeminiPrompt={`Creative lifestyle photograph representing ${cat.name.toLowerCase()} gifting in India: a happy person enjoying ${cat.name.toLowerCase()} with a subtle digital gift card on a smartphone, vibrant yellow accent colours, natural light, editorial style | 4:3 | 1600x1200`} alt={`${cat.name} gift card lifestyle`} file={`category-${slug}`} />
        <div>
          <h2 className="h-section">How to choose a {cat.name.toLowerCase()} gift card</h2>
          <div className="prose-article">
            <p>Start with the recipient: which {cat.name.toLowerCase()} brands do they already use or talk about? Gifting a brand they love shows you pay attention. If you&apos;re unsure, pick the brand with the widest selection or the most locations near them.</p>
            <p>Next, compare <strong>denominations and validity</strong> on each brand page. A higher value is better for brands where individual purchases are expensive, while smaller values work well for frequent treats.</p>
          </div>
          <aside className="mt-6 flex gap-3 rounded-2xl bg-brand-50 p-5">
            <Lightbulb className="size-5 shrink-0 text-brand-800" aria-hidden />
            <p className="text-sm leading-6 text-ink-soft"><strong>Pro tip:</strong> {copy?.tip}</p>
          </aside>
        </div>
      </section>

      {articles.length > 0 && (
        <section className="container-page mt-16">
          <h2 className="h-section">Related gifting guides</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {articles.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}

      <section className="container-page mt-16 max-w-4xl">
        <h2 className="h-section mb-8">{cat.name} gift card FAQs</h2>
        <FaqList faqs={faqs} />
      </section>

      <section className="container-page mt-16">
        <h2 className="font-display text-lg font-bold">Explore other categories</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {categories.filter((c) => c.id !== slug && brandsInCategory(c.id).length).map((c) => (
            <li key={c.id}><Link href={`/categories/${c.id}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-ink">{c.name}</Link></li>
          ))}
        </ul>
      </section>

      <CtaBand title={`Need ${cat.name.toLowerCase()} gift cards in bulk?`} text="Orbit by SaverPe helps companies send multi-brand gift cards to employees, clients and partners." primary={{ href: "/brands", label: "Explore all brands" }} secondary={{ href: "/contact-us", label: "Contact us" }} />
    </>
  );
}
