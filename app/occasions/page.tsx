import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { occasionIcons } from "@/components/icons";
import { brandsForOccasion, occasions } from "@/lib/brands";
import { occasionContent } from "@/content/occasions";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gift Cards by Occasion — Birthday, Wedding, Diwali",
  description: "Find the perfect e-gift card for birthdays, anniversaries, weddings, house warmings, Diwali, Eid, Rakhi, Valentine's Day, Mother's Day and Father's Day.",
  path: "/occasions",
});

export default function OccasionsPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd("Gift cards by occasion", occasions.map((o) => ({ name: `${o.name} gift cards`, path: `/occasions/${o.id}` })))} />
      <PageHero
        breadcrumbs={[{ name: "Occasions", path: "/occasions" }]}
        eyebrow="12 occasions"
        title="The right gift card for every celebration"
        intro="Festivals, milestones and everyday thank-yous — explore hand-picked brands, gifting tips and etiquette for each occasion."
      />
      <section className="container-page mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {occasions.map((o) => {
          const c = occasionContent[o.id];
          const Icon = occasionIcons[o.id] ?? Gift;
          return (
            <Link key={o.id} href={`/occasions/${o.id}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:border-ink">
              <Image GeminiPrompt={c.image.prompt} alt={c.image.alt} file={`occasion-${o.id}`} rounded="rounded-none" sizes="(min-width:1024px) 33vw, 100vw" />
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-800">
                  <Icon className="size-4" aria-hidden /> {o.name} · {brandsForOccasion(o.id).length} brands
                </p>
                <h2 className="mt-2 font-display text-xl font-extrabold">{c.headline}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2">
                  See gift ideas <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          );
        })}
      </section>
      <CtaBand title="Know exactly who you're gifting?" text="Browse all 290+ brands and filter by category to find their favourite." primary={{ href: "/brands", label: "Explore brands" }} secondary={{ href: "/blog/category/gift-guides", label: "Read gift guides" }} />
    </>
  );
}
