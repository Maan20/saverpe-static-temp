import Link from "next/link";
import { Mail } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero } from "@/components/ui";
import { faqGroups } from "@/content/faqs";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "E-Gift Card FAQs — Delivery, Redemption & Validity",
  description: "Answers to common questions about SaverPe e-gift cards: how they work, delivery, redemption, validity, partial use, refunds, safety and corporate gifting.",
  path: "/faq",
});

export default function FaqPage() {
  const all = faqGroups.flatMap((g) => g.faqs);
  return (
    <>
      <JsonLd data={faqJsonLd(all)} />
      <PageHero
        breadcrumbs={[{ name: "FAQs", path: "/faq" }]}
        eyebrow={`${all.length} answers`}
        title="Frequently asked questions"
        intro="Everything about choosing, sending, redeeming and safeguarding e-gift cards. Can't find your answer? We're one email away."
      />
      <div className="container-page mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
        <nav aria-label="FAQ sections" className="lg:sticky lg:top-28 lg:self-start">
          <ul className="flex gap-2 overflow-x-auto lg:flex-col">
            {faqGroups.map((g) => (
              <li key={g.id} className="shrink-0">
                <a href={`#${g.id}`} className="block rounded-2xl border border-line bg-white px-4 py-3 text-sm font-bold hover:border-ink">{g.title}</a>
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden rounded-3xl bg-ink p-6 text-white lg:block">
            <Mail className="size-6 text-brand" aria-hidden />
            <p className="mt-3 font-display font-bold">Still need help?</p>
            <a href={`mailto:${site.email}`} className="mt-1 block text-sm font-semibold text-brand">{site.email}</a>
          </div>
        </nav>
        <div className="space-y-14">
          {faqGroups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-28">
              <h2 className="h-section mb-6">{g.title}</h2>
              <FaqList faqs={g.faqs} withSchema={false} />
            </section>
          ))}
          <p className="text-muted">
            Looking for more detail? Read our guides on <Link href="/blog/how-digital-gift-cards-work" className="font-bold text-ink underline decoration-brand">how digital gift cards work</Link> and <Link href="/blog/how-to-redeem-a-saverpe-gift-card" className="font-bold text-ink underline decoration-brand">redeeming a SaverPe gift card</Link>.
          </p>
        </div>
      </div>
      <CtaBand title="Didn't find your answer?" text="Our support team usually replies within one business day." primary={{ href: "/contact-us", label: "Contact support" }} secondary={{ href: "/how-it-works", label: "How it works" }} />
    </>
  );
}
