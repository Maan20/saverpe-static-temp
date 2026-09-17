import { ArrowUpRight, Compass, Eye, Gift, Heart, Lightbulb, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "@/components/Image";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { brands, categories } from "@/lib/brands";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About SaverPe — Our Story & Mission",
  description: "SaverPe makes gifting joyful, personal and effortless with e-gift cards from 290+ brands. Meet the team, our mission, values and the Orbit by SaverPe business platform.",
  path: "/about-us",
});

// TODO: confirm timeline milestones and founder note with leadership (see CONTENT-TODO.md)
const timeline = [
  { year: "The spark", title: "A gifting problem worth solving", text: "Wrong sizes, duplicate gifts and last-minute panic — we set out to make gifting feel personal again." },
  { year: "Launch", title: "SaverPe goes live", text: "A curated catalog of brand e-gift cards with clear terms, validity and redemption steps for every brand." },
  { year: "Growth", title: "290+ brands, 18 categories", text: "From marketplaces and fashion to fine dining, travel, jewellery and subscriptions." },
  { year: "Orbit", title: "Orbit by SaverPe for business", text: "A dedicated platform for employee rewards, client gifting and bulk festive orders." },
  { year: "Next", title: "Smarter, faster gifting", text: "Seamless online checkout, scheduled delivery and more brands — coming soon." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "About us", path: "/about-us" }]}
        eyebrow="Our story"
        title={<>We believe the best gift is <span className="bg-brand px-2">choice</span>.</>}
        intro="SaverPe is an Indian e-gift card platform on a mission to make every gift land perfectly — personal enough to feel thoughtful, flexible enough to be genuinely useful."
        aside={<Image GeminiPrompt="Diverse young Indian team laughing together in a bright modern office decorated with yellow accents and gift boxes, collaborative energy, candid editorial photography, natural light | 4:3 | 1600x1200" alt="The SaverPe team" priority />}
      />

      <section className="container-page mt-16 grid gap-6 md:grid-cols-3">
        {[
          { k: `${brands.length}+`, v: "brand e-gift cards" },
          { k: `${categories.length}`, v: "gifting categories" },
          { k: "12", v: "occasions curated" },
        ].map((s) => (
          <div key={s.v} className="card p-8 text-center">
            <p className="font-display text-5xl font-extrabold text-ink">{s.k}</p>
            <p className="mt-2 font-semibold text-muted">{s.v}</p>
          </div>
        ))}
      </section>

      <section className="container-page mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="prose-article">
          <p className="eyebrow">Why we exist</p>
          <h2 className="!mt-4">Gifting should be about the person, not the logistics</h2>
          <p>We have all been there — scrolling for hours, guessing a shirt size, or handing over yet another box of sweets. Gifts are meant to say &ldquo;I know you&rdquo;, but too often they end up in a cupboard.</p>
          <p>SaverPe started with a simple idea: <strong>let people choose what they love, from brands they already trust.</strong> Pick a brand that matches their personality, add a message from the heart, and let them do the rest.</p>
          <p>Today, SaverPe brings together hundreds of India&apos;s favourite brands — from Amazon and Myntra to Taj, Tanishq and Swiggy — with honest, clearly-presented information on denominations, validity and redemption for each one.</p>
        </div>
        <Image GeminiPrompt="Split-screen illustration: left side a person stressed among piles of unwanted gifts, right side the same person smiling holding a phone with a single glowing gift card, playful flat vector style, yellow and coral palette | 4:3 | 1600x1200" alt="From gifting stress to gifting joy" />
      </section>

      <section className="container-page mt-20 grid gap-5 md:grid-cols-2">
        <div className="card bg-ink p-8 text-white">
          <Compass className="size-8 text-brand" aria-hidden />
          <h2 className="mt-4 font-display text-2xl font-extrabold">Our mission</h2>
          <p className="mt-3 leading-7 text-white/75">To make gifting joyful, personal and effortless for every Indian — for every relationship and every occasion — by putting the power of choice in the recipient&apos;s hands.</p>
        </div>
        <div className="card bg-brand p-8">
          <Eye className="size-8" aria-hidden />
          <h2 className="mt-4 font-display text-2xl font-extrabold">Our vision</h2>
          <p className="mt-3 leading-7 text-ink/80">To become India&apos;s most loved destination for digital gifting — where individuals and businesses find the perfect brand for every moment that matters.</p>
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading align="center" eyebrow="What we value" title="The principles behind every gift" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, t: "Thoughtfulness first", d: "We design for the emotion of gifting, not just the transaction." },
            { icon: ShieldCheck, t: "Honest information", d: "Validity, redemption rules and T&Cs are always clear and upfront." },
            { icon: Lightbulb, t: "Simplicity", d: "Fewer clicks, clearer choices, no confusing fine print." },
            { icon: Users, t: "Brands people love", d: "We curate brands that genuinely add value to people's lives." },
          ].map((v) => (
            <div key={v.t} className="card p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-800"><v.icon className="size-6" aria-hidden /></span>
              <h3 className="mt-4 font-display text-lg font-bold">{v.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="Our journey" title="From a simple idea to 290+ brands" />
        <ol className="relative mt-10 grid gap-5 md:grid-cols-5">
          {timeline.map((t, i) => (
            <li key={t.title} className="card relative p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-800">{t.year}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{t.text}</p>
              <span className="absolute right-4 top-4 font-display text-3xl font-extrabold text-brand-100">{i + 1}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page mt-20">
        <div className="card grid gap-8 overflow-hidden p-8 lg:grid-cols-[auto_1fr] lg:items-center lg:p-12">
          <span className="grid size-20 place-items-center rounded-3xl bg-brand"><Sparkles className="size-10" aria-hidden /></span>
          <blockquote>
            <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">&ldquo;Every gift card we deliver carries someone&apos;s care for another person. Our job is to make sure nothing gets in the way of that feeling.&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-muted">— Founding team, SaverPe</footer>
          </blockquote>
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(120deg,#4e2a8e,#e0078d)] p-10 text-white sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Our business platform</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Meet Orbit by SaverPe</h2>
              <p className="mt-4 max-w-2xl text-white/80">Orbit brings the SaverPe catalog to businesses — employee rewards and recognition, channel partner incentives, client gifting and festive bulk orders, with multiple brands and quantities in one request.</p>
            </div>
            <div className="lg:text-right">
              <a href={site.orbitUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#4e2a8e]">
                <Gift className="size-4" aria-hidden /> Explore Orbit <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Say hello" text={`Questions, partnerships or feedback — write to us at ${site.email}.`} primary={{ href: "/contact-us", label: "Contact us" }} secondary={{ href: "/brands", label: "Explore brands" }} />
    </>
  );
}
