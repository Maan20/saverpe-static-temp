import Link from "next/link";
import { Building, Clock, Handshake, Mail, MessageCircleQuestion } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { FaqList, PageHero } from "@/components/ui";
import { faqGroups } from "@/content/faqs";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact SaverPe — Gift Card Support & Partnerships",
  description: "Get help with a SaverPe e-gift card, ask about brands, or discuss partnerships. Email support@saverpe.com or send us a message — we reply within one business day.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact SaverPe", url: absoluteUrl("/contact-us"), mainEntity: { "@id": `${site.url}/#organization` } }} />
      <PageHero
        breadcrumbs={[{ name: "Contact us", path: "/contact-us" }]}
        eyebrow="We're here to help"
        title="Let's talk gifting"
        intro="Questions about a gift card, a brand, or a partnership idea? Send us a message and our team will get back to you within one business day."
      />
      <section className="container-page mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          <a href={`mailto:${site.email}`} className="card flex items-center gap-4 p-6 transition hover:border-ink">
            <span className="grid size-14 place-items-center rounded-2xl bg-brand"><Mail className="size-6" aria-hidden /></span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-wider text-muted">Email support</span>
              <span className="font-display text-xl font-bold">{site.email}</span>
            </span>
          </a>
          <div className="card flex items-center gap-4 p-6">
            <span className="grid size-14 place-items-center rounded-2xl bg-mint-soft text-mint"><Clock className="size-6" aria-hidden /></span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-wider text-muted">Response time</span>
              <span className="font-display text-lg font-bold">Within 1 business day (Mon–Sat)</span>
            </span>
          </div>
          <div className="card p-6">
            <h2 className="font-display text-lg font-bold">What can we help with?</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3"><MessageCircleQuestion className="size-5 shrink-0 text-brand-700" aria-hidden /><span><strong>Order query</strong> — delivery delays, code issues or redemption help. Please include the recipient email and brand.</span></li>
              <li className="flex gap-3"><Handshake className="size-5 shrink-0 text-brand-700" aria-hidden /><span><strong>Partnership</strong> — brands who want to join the SaverPe catalog.</span></li>
              <li className="flex gap-3"><Building className="size-5 shrink-0 text-brand-700" aria-hidden /><span><strong>Corporate gifting</strong> — for bulk orders, please use <a href={`${site.orbitUrl}/contact-sales`} className="font-bold underline decoration-brand">Orbit Contact Sales</a>.</span></li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="sr-only">Contact form</h2>
          <ContactForm />
        </div>
      </section>
      <section className="container-page mt-20 max-w-4xl">
        <h2 className="h-section mb-6">Quick answers</h2>
        <FaqList faqs={faqGroups[3].faqs} />
        <p className="mt-6 text-sm text-muted">More questions? Visit our <Link href="/faq" className="font-bold text-ink underline decoration-brand">FAQ page</Link>.</p>
      </section>
    </>
  );
}
