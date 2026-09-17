import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { glossary } from "@/content/glossary";
import { absoluteUrl } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gift Card Glossary: E-Gift Card Terms Explained",
  description: "Plain-English definitions of gift card terms used in India — e-voucher, denomination, validity, partial redemption, PIN, clubbing, PPI and more.",
  path: "/glossary",
  keywords: ["gift card glossary", "what is an e-gift card", "partial redemption meaning", "gift voucher validity meaning", "closed loop gift card"],
});

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  const letters = [...new Set(sorted.map((t) => t.term[0].toUpperCase()))];
  const url = absoluteUrl("/glossary");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "@id": `${url}#terms`,
          name: "SaverPe gift card glossary",
          url,
          inLanguage: "en-IN",
          hasDefinedTerm: sorted.map((t) => ({ "@type": "DefinedTerm", "@id": `${url}#${t.id}`, name: t.term, description: t.definition, url: `${url}#${t.id}`, inDefinedTermSet: `${url}#terms` })),
        }}
      />
      <PageHero
        breadcrumbs={[{ name: "Glossary", path: "/glossary" }]}
        eyebrow={`${glossary.length} terms`}
        title="Gift card glossary"
        intro="Every term you'll see on a gift card page, explained in one or two sentences — so you know exactly what you're buying, gifting and redeeming."
      />
      <div className="container-page mt-10 max-w-4xl">
        <nav aria-label="Jump to letter" className="flex flex-wrap gap-2">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`} className="grid size-9 place-items-center rounded-full border border-line bg-white text-sm font-bold hover:border-brand">{l}</a>
          ))}
        </nav>
        <dl className="mt-10 space-y-4">
          {sorted.map((t, i) => {
            const letter = t.term[0].toUpperCase();
            const first = i === 0 || sorted[i - 1].term[0].toUpperCase() !== letter;
            return (
              <div key={t.id} id={first ? `letter-${letter}` : undefined} className="scroll-mt-28">
                <div id={t.id} className="card scroll-mt-28 p-6">
                  <dt className="font-display text-xl font-extrabold">{t.term}</dt>
                  <dd className="mt-2 leading-7 text-ink-soft">
                    {t.definition}
                    {t.link && (
                      <Link href={t.link.href} className="mt-3 flex items-center gap-1 text-sm font-bold text-brand-800 hover:underline">
                        {t.link.label} <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    )}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
      <CtaBand title="Ready to pick a gift card?" text="Compare denominations, validity and redemption rules across 290+ brands." primary={{ href: "/brands", label: "Explore brands" }} secondary={{ href: "/blog", label: "Read gifting guides" }} />
    </>
  );
}
