import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarClock, CreditCard, Gift, Heart, Mail, MousePointerClick, PenLine, Search, ShieldCheck, ShoppingBag, Store } from "lucide-react";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero, SectionHeading } from "@/components/ui";
import { absoluteUrl } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { faqGroups } from "@/content/faqs";

export const metadata = pageMeta({
  title: "How E-Gift Cards Work — Gift in 3 Simple Steps",
  description: "Learn how SaverPe e-gift cards work: choose a brand, personalise your message and let them redeem online or in-store. Delivery, validity and redemption explained.",
  path: "/how-it-works",
});

const steps = [
  { icon: Search, title: "Choose the brand", text: "Browse 290+ brands by category, occasion or name. Every brand page shows denominations, validity, where it can be used and the full terms — so you know exactly what you're gifting.", prompt: "Close-up of hands scrolling a colourful grid of brand gift cards on a smartphone, cosy café table, yellow accents, shallow depth of field | 4:3 | 1600x1200", alt: "Browsing brand gift cards on a phone" },
  { icon: PenLine, title: "Personalise the moment", text: "Choose the value that fits your budget and add a heartfelt message. A few honest words about why you picked that brand turn a code into a memorable gift.", prompt: "Person writing a heartfelt message on a digital greeting card interface on a tablet, confetti and small gift boxes illustration around, warm yellow and coral palette, playful 3D style | 4:3 | 1600x1200", alt: "Writing a personal gift message" },
  { icon: Mail, title: "Delivered digitally", text: "The recipient gets an email with the gift card code, PIN (if applicable), value, validity and redemption steps — usually within minutes, wherever they are.", prompt: "Smartphone lock screen with a joyful email notification 'You've received a gift card!', glowing envelope icon, soft yellow gradient background, modern product render | 4:3 | 1600x1200", alt: "Gift card delivery email notification" },
  { icon: Gift, title: "They redeem & enjoy", text: "They use the code on the brand's website, app or at participating stores — picking exactly the outfit, meal, stay or gadget they want.", prompt: "Happy young Indian man at a fashion store checkout showing a gift card code on his phone to a smiling cashier, bright modern retail interior, candid lifestyle photography | 4:3 | 1600x1200", alt: "Redeeming a gift card in store" },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to gift an e-gift card with SaverPe",
  description: "Send a brand e-gift card in four simple steps.",
  step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text, url: absoluteUrl(`/how-it-works#step-${i + 1}`) })),
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <PageHero
        breadcrumbs={[{ name: "How it works", path: "/how-it-works" }]}
        eyebrow="Gifting, simplified"
        title="How SaverPe e-gift cards work"
        intro="From choosing a brand to the recipient's happy dance — here's everything that happens when you gift with SaverPe."
        aside={<Image GeminiPrompt="Playful isometric 3D illustration of the e-gift card journey: phone with brand grid, flying envelope, gift box opening with confetti, shopping bag, connected by a dotted yellow path, cream background | 1:1 | 1200x1200" alt="E-gift card journey illustration" priority />}
      />

      <section className="container-page mt-16 space-y-20">
        {steps.map((s, i) => (
          <div key={s.title} id={`step-${i + 1}`} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <span className="inline-flex items-center gap-3">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand font-display text-2xl font-extrabold">{i + 1}</span>
                <s.icon className="size-7 text-brand-700" aria-hidden />
              </span>
              <h2 className="h-section mt-5">{s.title}</h2>
              <p className="mt-4 text-lg leading-8 text-muted">{s.text}</p>
            </div>
            <Image GeminiPrompt={s.prompt} alt={s.alt} />
          </div>
        ))}
      </section>

      <section className="mt-24 bg-sand py-20">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="Redemption made clear" title="Where can gift cards be used?" intro="Each brand decides where its cards work. You'll always find the details on the brand page." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: MousePointerClick, t: "Online", d: "Apply the code at checkout on the brand's website — the most common option for marketplace, fashion and travel brands." },
              { icon: ShoppingBag, t: "In the app", d: "Add the card to the brand's app wallet (like food delivery or shopping apps) and use the balance across orders." },
              { icon: Store, t: "In-store", d: "Show the code at participating outlets for jewellery, fashion, dining and electronics brands that accept in-store redemption." },
            ].map((x) => (
              <div key={x.t} className="card p-6">
                <x.icon className="size-8 text-brand-700" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-bold">{x.t}</h3>
                <p className="mt-2 leading-7 text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="Good to know" title="Before you gift" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: CalendarClock, t: "Check validity", d: "Validity typically ranges from 3 to 12 months. Remind recipients to redeem in time." },
            { icon: CreditCard, t: "Single vs multi-use", d: "Some cards keep the balance; others must be used in one bill. See brand terms." },
            { icon: ShieldCheck, t: "Keep codes private", d: "A gift card code is like cash. Share it only with the intended recipient." },
            { icon: BadgeCheck, t: "Genuine cards", d: "All cards are issued by brands or their authorised gift card program partners." },
          ].map((x) => (
            <div key={x.t} className="card p-6">
              <x.icon className="size-6 text-brand-700" aria-hidden />
              <h3 className="mt-3 font-display text-lg font-bold">{x.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="FAQs" title="Redemption questions" intro="Still curious? Here are the questions we hear most." />
          <Link href="/blog/how-to-redeem-a-saverpe-gift-card" className="btn-ghost mt-6">Full redemption guide <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
        <FaqList faqs={faqGroups[2].faqs} />
      </section>

      <section className="container-page mt-20">
        <div className="card flex flex-col items-center gap-4 p-10 text-center">
          <Heart className="size-10 fill-accent text-accent" aria-hidden />
          <h2 className="h-section">Gifting for your company?</h2>
          <p className="max-w-2xl text-muted">Orbit by SaverPe is our business platform for employee rewards, client gifts and festive bulk orders — with multiple brands and quantities in a single request.</p>
          <a href="https://orbit.saverpe.com" className="btn-dark">Visit Orbit by SaverPe <ArrowRight className="size-4" aria-hidden /></a>
        </div>
      </section>

      <CtaBand title="Ready to send your first gift?" text="Explore 290+ brands and find the one that makes them smile." primary={{ href: "/brands", label: "Explore brands" }} secondary={{ href: "/contact-us", label: "Contact us" }} />
    </>
  );
}
