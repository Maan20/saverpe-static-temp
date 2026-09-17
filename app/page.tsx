import Link from "next/link";
import NextImage from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Gift, Heart, Mail, Search, ShieldCheck, Sparkles, Star, Zap, Clock, Quote } from "lucide-react";
import Image from "@/components/Image";
import BrandCard from "@/components/BrandCard";
import BlogCard from "@/components/BlogCard";
import BusinessServices from "@/components/BusinessServices";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqList, SectionHeading } from "@/components/ui";
import { categoryIcons, categoryTints, occasionIcons } from "@/components/icons";
import { brands, brandsInCategory, categories, occasions, popularBrands } from "@/lib/brands";
import { posts } from "@/lib/blog";
import { homeFaqs } from "@/content/faqs";
import { occasionContent } from "@/content/occasions";
import { itemListJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Buy E-Gift Cards Online in India | 290+ Brands | SaverPe" },
  description: "Buy e-gift cards from Amazon, Myntra, Taj, Tanishq, Swiggy and 290+ top brands in India. Delivered by email for birthdays, weddings and Diwali.",
  alternates: { canonical: site.url },
};

const testimonials = [
  // TODO: replace with verified customer reviews before launch (see CONTENT-TODO.md)
  { name: "Priya M.", city: "Bengaluru", text: "I forgot my best friend's birthday until 11 pm. Sent a Myntra card with a silly note — she called me the next morning to show what she bought!", rating: 5 },
  { name: "Rahul K.", city: "Pune", text: "Our whole family now does Diwali gifting with e-gift cards. No more duplicate sweets boxes, and everyone picks what they actually need.", rating: 5 },
  { name: "Fatima S.", city: "Hyderabad", text: "Sent Eidi to my nieces in Dubai and Delhi within minutes. The brand pages made the redemption steps really clear.", rating: 5 },
  { name: "Ankit & Neha", city: "Jaipur", text: "We received Pepperfry and MakeMyTrip cards as wedding gifts — honestly the most useful gifts we got. Our new sofa says thanks!", rating: 5 },
];

export default function HomePage() {
  const featured = popularBrands(12);
  const heroCards = popularBrands(24).slice(0, 6);
  const marquee = brands.filter((b) => b.logo).slice(0, 24);
  const underBudget = brands.filter((b) => b.logo && ((b.price.type === "range" && (b.price.min ?? 9999) <= 500) || (b.price.type === "slab" && (b.price.denominations[0] ?? 9999) <= 500))).slice(0, 6);
  const luxe = brandsInCategory("international-brands").filter((b) => b.logo).slice(0, 6);
  const foodies = brandsInCategory("food-dining").filter((b) => b.logo).slice(0, 6);
  const latest = posts.slice(0, 3);

  return (
    <>
      <JsonLd data={itemListJsonLd("Popular e-gift cards on SaverPe", featured.map((b) => ({ name: `${b.name} E-Gift Card`, path: `/brands/${b.slug}` })))} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_10%,var(--color-brand-200),transparent_35%),radial-gradient(circle_at_10%_90%,var(--color-accent-soft),transparent_35%),radial-gradient(circle_at_50%_50%,var(--color-brand-50),transparent_60%)]" />
        <div className="container-page grid items-center gap-12 pb-20 pt-12 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-20">
          <div className="animate-fade-up">
            <p className="eyebrow">
              <Sparkles className="size-3.5" aria-hidden /> India&apos;s joyful e-gift card store
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Gift the <span className="relative whitespace-nowrap"><span className="relative z-10">joy of choice</span><span className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 rounded-full bg-brand/70 sm:h-5" /></span>, in seconds.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              E-gift cards from <strong className="text-ink">290+ brands</strong> people genuinely love — fashion, food, travel, jewellery, gadgets and more. Perfect for birthdays, weddings, Diwali, or just because.
            </p>

            <form action="/brands" method="get" role="search" className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-line bg-white p-2 shadow-[0_20px_50px_-25px_rgba(18,18,18,0.35)]">
              <Search className="ml-3 size-5 shrink-0 text-muted" aria-hidden />
              <label htmlFor="hero-search" className="sr-only">Search brands</label>
              <input id="hero-search" name="q" type="search" placeholder="Try “Amazon”, “Taj” or “Nykaa”" className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none" />
              <button type="submit" className="btn-primary !py-2.5">Search</button>
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/brands" className="btn-dark">
                Explore brands <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/contact-us" className="btn-ghost">Contact us</Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                { k: "290+", v: "brands" },
                { k: "18", v: "categories" },
                { k: "12", v: "occasions" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-line bg-white/70 p-4 backdrop-blur">
                  <dt className="sr-only">{s.v}</dt>
                  <dd className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{s.k}</dd>
                  <dd className="text-xs font-semibold uppercase tracking-wider text-muted">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto h-[440px] w-full max-w-[520px] sm:h-[520px]" aria-hidden>
            <div className="absolute inset-8 rounded-[3rem] bg-brand rotate-3" />
            <div className="absolute inset-8 rounded-[3rem] border-2 border-dashed border-ink/15 -rotate-2" />
            {heroCards.map((b, i) => {
              const pos = [
                "left-2 top-6 w-36 sm:w-44 [--r:-10deg]",
                "right-4 top-0 w-32 sm:w-40 [--r:8deg]",
                "left-[34%] top-[22%] w-40 sm:w-48 z-10 [--r:-2deg]",
                "left-0 bottom-10 w-32 sm:w-40 [--r:6deg]",
                "right-0 bottom-20 w-36 sm:w-44 [--r:-7deg]",
                "left-[38%] bottom-0 w-28 sm:w-36 [--r:12deg]",
              ][i];
              return (
                <div key={b.slug} className={`absolute animate-float overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_25px_50px_-20px_rgba(18,18,18,0.45)] ${pos}`} style={{ animationDelay: `${i * 0.6}s` }}>
                  <div className="relative aspect-[10/11]">
                    <NextImage src={b.logo!} alt="" fill sizes="200px" className="object-cover" priority={i < 3} />
                  </div>
                </div>
              );
            })}
            <div className="absolute right-6 top-[46%] z-20 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white shadow-xl">
              <Zap className="size-4 text-brand" /> Delivered by email
            </div>
            <div className="absolute left-4 top-[52%] z-20 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-xl">
              <Heart className="size-4 fill-accent text-accent" /> Curated For India
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-label="Brands on SaverPe" className="border-y border-line bg-white py-6">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...marquee, ...marquee].map((b, i) => (
              <li key={`${b.slug}-${i}`} aria-hidden={i >= marquee.length}>
                <Link href={`/brands/${b.slug}`} tabIndex={i >= marquee.length ? -1 : undefined} className="flex items-center gap-3 rounded-full border border-line bg-cream py-1.5 pl-1.5 pr-4 text-sm font-bold text-ink-soft hover:border-brand">
                  <span className="relative size-9 overflow-hidden rounded-full bg-white">
                    <NextImage src={b.logo!} alt="" fill sizes="36px" className="object-cover object-top" />
                  </span>
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-page mt-20">
        <SectionHeading eyebrow="Shop by category" title="Something for every kind of person" intro="Fashionistas, foodies, travellers, gamers, home-makers — find the brand that fits them best." action={{ href: "/categories", label: "All categories" }} />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((c) => {
            const Icon = categoryIcons[c.id] ?? Gift;
            const count = brandsInCategory(c.id).length;
            return (
              <li key={c.id}>
                <Link href={`/categories/${c.id}`} className="group flex h-full flex-col gap-3 rounded-3xl border border-line bg-white p-4 transition hover:-translate-y-1 hover:border-ink">
                  <span className={`grid size-12 place-items-center rounded-2xl ${categoryTints[c.id]}`}>
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="font-display text-sm font-bold leading-tight text-ink">{c.name}</span>
                  <span className="mt-auto text-xs font-semibold text-muted">{count} {count === 1 ? "brand" : "brands"}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* POPULAR */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="Trending now" title="Most-gifted brands this season" intro="The gift cards Indian shoppers send most — safe bets for friends, family and colleagues." action={{ href: "/brands", label: "Browse all 290+ brands" }} />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {featured.map((b) => (
            <li key={b.slug}>
              <BrandCard brand={b} />
            </li>
          ))}
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-24 bg-ink py-20 text-white">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow !border-white/10 !bg-white/5 !text-brand">How gifting works</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Three steps from “what do I get them?” to “you shouldn&apos;t have!”</h2>
              <p className="mt-5 text-lg text-white/70">No wrapping paper, no delivery windows, no wrong sizes. Just the perfect brand and a message from the heart.</p>
              <Link href="/how-it-works" className="btn-primary mt-8">
                See the full guide <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ol className="grid gap-4">
              {[
                { icon: Search, title: "Pick the perfect brand", text: "Browse 290+ brands by category, occasion or budget and check denominations, validity and terms upfront." },
                { icon: Mail, title: "Add a heartfelt message", text: "Personalise the gift for birthdays, weddings, festivals or a simple thank-you — words make it memorable." },
                { icon: Gift, title: "They choose what they love", text: "The recipient gets a digital code by email and redeems it online, in-app or in-store, exactly how the brand allows." },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand font-display text-xl font-extrabold text-ink">{i + 1}</span>
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                      <step.icon className="size-5 text-brand" aria-hidden /> {step.title}
                    </h3>
                    <p className="mt-2 text-white/70">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="Gift by occasion" title="Every celebration, covered" intro="Curated gift cards for India's favourite festivals and life's big moments." action={{ href: "/occasions", label: "All occasions" }} />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {["diwali", "birthday", "wedding"].map((id, i) => {
            const o = occasionContent[id];
            const name = occasions.find((x) => x.id === id)?.name;
            return (
              <Link key={id} href={`/occasions/${id}`} className={`group relative overflow-hidden rounded-[2rem] ${i === 0 ? "lg:row-span-2" : ""}`}>
                <Image GeminiPrompt={o.image.prompt.replace("| 16:9 | 1600x900", i === 0 ? "| 4:5 | 1200x1500" : "| 16:9 | 1600x900")} alt={o.image.alt} file={`occasion-${id}${i === 0 ? "-tall" : ""}`} rounded="rounded-[2rem]" bare className="h-full w-full transition duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand">{name}</p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold">{o.headline}</h3>
                  <p className="mt-1 text-sm text-white/80">{o.blurb}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {occasions.map((o) => {
            const Icon = occasionIcons[o.id] ?? Gift;
            return (
              <li key={o.id}>
                <Link href={`/occasions/${o.id}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink-soft hover:border-ink">
                  <Icon className="size-4 text-brand-700" aria-hidden /> {o.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* COLLECTIONS */}
      <section className="container-page mt-24 space-y-16">
        {[
          { title: "Thoughtful gifts from ₹500", intro: "Small budget, big smiles — brands with low starting denominations.", list: underBudget, href: "/brands" },
          { title: "Luxe & international labels", intro: "Premium global brands for gifts that feel extra special.", list: luxe, href: "/categories/international-brands" },
          { title: "For the foodies", intro: "Coffee runs, biryani nights and pizza parties.", list: foodies, href: "/categories/food-dining" },
        ].map((col) => (
          <div key={col.title}>
            <SectionHeading title={col.title} intro={col.intro} action={{ href: col.href, label: "View all" }} />
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {col.list.map((b) => (
                <li key={b.slug}>
                  <BrandCard brand={b} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* WHY SAVERPE */}
      <section className="container-page mt-24">
        <div className="grid gap-5 lg:grid-cols-4 lg:grid-rows-2">
          <div className="card flex flex-col justify-between bg-brand p-8 lg:col-span-2 lg:row-span-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">Why SaverPe</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight">Gifting that feels personal — without the hassle.</h2>
              <p className="mt-4 max-w-md text-ink/75">We built SaverPe for people who care about getting gifts right. Clear brand information, honest terms, and a catalog wide enough for every relationship in your life.</p>
            </div>
            <Image GeminiPrompt="Cheerful young Indian woman sitting on a yellow sofa smiling at her phone that shows a colourful e-gift card, surrounded by floating gift boxes and confetti, playful 3D illustration style, bright yellow and coral palette | 4:3 | 1600x1200" alt="Happy person receiving an e-gift card on her phone" className="mt-8 w-full" rounded="rounded-3xl" />
          </div>
          {[
            { icon: Zap, title: "Delivered digitally", text: "Codes arrive by email — ideal for last-minute and long-distance gifting." },
            { icon: BadgeCheck, title: "Genuine brand cards", text: "Every card is issued by the brand or its authorised program partner." },
            { icon: ShieldCheck, title: "Clear terms upfront", text: "Validity, redemption channels and T&Cs are listed on every brand page." },
            { icon: Clock, title: "No wrong sizes, ever", text: "They choose the colour, size and style — zero returns or exchanges." },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-800">
                <f.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOR BUSINESS */}
      <BusinessServices />

      {/* TESTIMONIALS */}
      <section className="mt-24 overflow-hidden bg-sand py-20">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="Gifting stories" title="Little codes, big reactions" intro="What gifters say about sending e-gift cards." />
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <li key={t.name} className={`card relative p-6 ${i % 2 ? "lg:translate-y-6" : ""}`}>
                <Quote className="size-8 text-brand" aria-hidden />
                <p className="mt-3 leading-7 text-ink-soft">{t.text}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold">{t.name}</p>
                    <p className="text-xs text-muted">{t.city}</p>
                  </div>
                  <span className="flex" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="size-4 fill-brand text-brand" aria-hidden />
                    ))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOG */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="The gifting journal" title="Ideas, guides & gift card know-how" intro="Expert gift guides, festival planners and everything you need to know about e-gift cards." action={{ href: "/blog", label: "Read the blog" }} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {latest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page mt-24 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="FAQs" title="Questions? We've got answers." intro="Everything you need to know about gifting with SaverPe." />
          <Link href="/faq" className="btn-ghost mt-6">
            All FAQs <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <FaqList faqs={homeFaqs} />
      </section>

      <CtaBand title="Ready to make someone's day?" text="Find the brand they love among 290+ e-gift cards — or reach out and we'll help you choose." primary={{ href: "/brands", label: "Explore brands" }} secondary={{ href: "/contact-us", label: "Contact us" }} />
    </>
  );
}
