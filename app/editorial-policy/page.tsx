import Link from "next/link";
import type { Metadata } from "next";
import { BadgeCheck, BookOpen, RefreshCw, Scale, SearchCheck, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { author, posts } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import { organizationId, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Editorial Policy: How We Research Gifting Guides",
  description: "How the SaverPe Editorial Team researches, fact-checks and updates gift card guides, brand pages and redemption information.",
  path: "/editorial-policy",
});

const principles = [
  { icon: SearchCheck, title: "Sourced from brand terms", text: "Validity, denominations, redemption steps and restrictions on brand pages come from the terms each brand publishes for its gift cards. Where a detail isn't stated, we say so instead of guessing." },
  { icon: BadgeCheck, title: "Fact-checked before publishing", text: "Every guide is reviewed by a second editor for accuracy, clarity and safety advice before it goes live. Numbers, rules and regulatory references are checked against primary sources." },
  { icon: RefreshCw, title: "Updated regularly", text: "We review brand information when catalogs change and revisit guides before major gifting seasons like Diwali, Raksha Bandhan and year-end. Updated articles show the date they were last revised." },
  { icon: Scale, title: "Independent recommendations", text: "Gift ideas are chosen for the recipient and occasion, not because a brand paid for placement. Brand names and logos belong to their owners and don't imply endorsement." },
  { icon: ShieldCheck, title: "Safety first", text: "We always include guidance on protecting gift card codes and recognising gift card scams, because no genuine company, bank or official ever asks to be paid in gift card codes." },
  { icon: BookOpen, title: "Written for Indian gifters", text: "Guides use Indian occasions, rupee values and local shopping habits, in plain language that anyone can follow." },
];

export default function EditorialPolicyPage() {
  const url = absoluteUrl("/editorial-policy");
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "SaverPe editorial policy", url, inLanguage: "en-IN", about: { "@id": organizationId }, publisher: { "@id": organizationId } }} />
      <PageHero
        breadcrumbs={[{ name: "Editorial policy", path: "/editorial-policy" }]}
        eyebrow="Trust & accuracy"
        title="Our editorial policy"
        intro={<>Gift cards come with rules — validity, where they work, whether balances carry over. Getting those details right is the whole point of our content. Here&apos;s how the {author.name} works.</>}
      />
      <section className="container-page mt-12">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }) => (
            <li key={title} className="card p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50"><Icon className="size-6 text-brand-800" aria-hidden /></span>
              <h2 className="mt-4 font-display text-xl font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container-page mt-16 max-w-3xl">
        <div className="prose-article">
          <h2>About the {author.name}</h2>
          <p>{author.bio} The team has published {posts.length} guides covering gift ideas, festivals, gift card basics, brand spotlights and corporate gifting.</p>
          <h2>Corrections</h2>
          <p>If you spot something out of date or incorrect — a changed validity period, a new redemption rule, a broken link — email <a href={`mailto:${site.email}`}>{site.email}</a>. We review every report and update the page, noting the revision date.</p>
          <h2>Brand terms always apply</h2>
          <p>Brands can change their gift card terms at any time. Our summaries are a convenient guide; the terms issued with your card are the final word. See our <Link href="/terms-of-service">terms of service</Link> and <Link href="/refund-policy">refund policy</Link> for how SaverPe works.</p>
        </div>
      </section>
      <CtaBand title="Start with a guide" text="Browse gifting guides written and checked by our editorial team." primary={{ href: "/blog", label: "Read the blog" }} secondary={{ href: "/glossary", label: "Gift card glossary" }} />
    </>
  );
}
