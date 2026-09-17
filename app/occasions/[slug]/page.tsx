import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CircleCheck, Gift } from "lucide-react";
import BrandCard from "@/components/BrandCard";
import BlogCard from "@/components/BlogCard";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero } from "@/components/ui";
import { occasionIcons } from "@/components/icons";
import { brandsForOccasion, getOccasion, occasions } from "@/lib/brands";
import { posts } from "@/lib/blog";
import { occasionContent } from "@/content/occasions";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return occasions.map((o) => ({ slug: o.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/occasions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const o = getOccasion(slug);
  const c = occasionContent[slug];
  if (!o || !c) return {};
  return pageMeta({
    title: `${o.name} Gift Cards — Best ${o.name} E-Gift Ideas`,
    description: `${c.blurb} Explore ${brandsForOccasion(slug).length} hand-picked ${o.name} e-gift cards, delivered digitally.`.slice(0, 158),
    path: `/occasions/${slug}`,
    keywords: [`${o.name} gift cards`, `${o.name} gift ideas`, `${o.name} e-gift vouchers`, `online ${o.name.toLowerCase()} gifts India`],
  });
}

export default async function OccasionPage({ params }: PageProps<"/occasions/[slug]">) {
  const { slug } = await params;
  const o = getOccasion(slug);
  const c = occasionContent[slug];
  if (!o || !c) notFound();
  const list = brandsForOccasion(slug);
  const Icon = occasionIcons[slug] ?? Gift;
  const needle = o.name.toLowerCase().replace(/'s.*/, "").split(" ")[0];
  const guides = posts.filter((p) => `${p.title} ${p.tags.join(" ")}`.toLowerCase().includes(needle)).slice(0, 3);

  return (
    <>
      <JsonLd data={itemListJsonLd(`${o.name} gift cards`, list.map((b) => ({ name: `${b.name} E-Gift Card`, path: `/brands/${b.slug}` })))} />
      <PageHero
        breadcrumbs={[{ name: "Occasions", path: "/occasions" }, { name: o.name, path: `/occasions/${slug}` }]}
        eyebrow={`${o.name} · ${list.length} brands`}
        title={c.headline}
        intro={c.blurb}
        aside={<Image GeminiPrompt={c.image.prompt} alt={c.image.alt} file={`occasion-${slug}`} priority />}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#brands" className="btn-primary"><Icon className="size-4" aria-hidden /> See {o.name} brands</a>
          {c.guide && <Link href={c.guide} className="btn-ghost">Read the gift guide <ArrowRight className="size-4" aria-hidden /></Link>}
        </div>
      </PageHero>

      <section className="container-page mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="prose-article">
          <h2 className="!mt-0">Why gift cards work for {o.name}</h2>
          {c.intro.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <aside className="card bg-brand-50 p-6">
          <h2 className="font-display text-xl font-extrabold">{o.name} gifting tips</h2>
          <ul className="mt-4 space-y-3">
            {c.tips.map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-6 text-ink-soft"><CircleCheck className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden /> {t}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="brands" className="container-page mt-16 scroll-mt-28">
        <h2 className="h-section">Top {o.name} gift cards</h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {list.map((b) => <li key={b.slug}><BrandCard brand={b} /></li>)}
        </ul>
      </section>

      {guides.length > 0 && (
        <section className="container-page mt-16">
          <h2 className="h-section">{o.name} gifting guides</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{guides.map((p) => <BlogCard key={p.slug} post={p} />)}</div>
        </section>
      )}

      <section className="container-page mt-16 max-w-4xl">
        <h2 className="h-section mb-8">{o.name} gift card FAQs</h2>
        <FaqList faqs={c.faqs} />
      </section>

      <section className="container-page mt-16">
        <h2 className="font-display text-lg font-bold">More occasions</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {occasions.filter((x) => x.id !== slug).map((x) => (
            <li key={x.id}><Link href={`/occasions/${x.id}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-ink">{x.name}</Link></li>
          ))}
        </ul>
      </section>

      <CtaBand title={`Planning ${o.name} gifts for a team?`} text="Orbit by SaverPe makes bulk festive and occasion gifting simple — multiple brands, any quantity." primary={{ href: "https://orbit.saverpe.com/contact-sales", label: "Talk to Orbit sales" }} secondary={{ href: "/brands", label: "Explore brands" }} />
    </>
  );
}
