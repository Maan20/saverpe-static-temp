import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpRight, Mail, ShieldCheck, Zap, Gift } from "lucide-react";
import { categories, occasions, popularBrands } from "@/lib/brands";
import { site } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const topBrands = popularBrands(10);

  return (
    <footer className="mt-24 bg-ink text-white/75">
      <div className="container-page">
        <div className="-translate-y-12 overflow-hidden rounded-[2rem] bg-brand p-8 text-ink sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">Orbit by SaverPe</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">Looking for corporate gifting? Bulk e-gift cards for teams, clients &amp; partners.</h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={site.orbitUrl} className="btn-dark">
                Visit Orbit by SaverPe <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <a href={`${site.orbitUrl}/contact-sales`} className="btn-ghost !border-ink/10">
                Talk to sales
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="SaverPe home" className="inline-block rounded-2xl bg-white px-4 py-3">
              <NextImage src="/logo.png" alt="SaverPe" width={489} height={132} className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6">
              SaverPe is India&apos;s friendly home for brand e-gift cards — {site.tagline.toLowerCase()}. Pick a brand, add your wishes, and let them choose what they love.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Zap className="size-4 text-brand" aria-hidden /> Digital delivery by email</li>
              <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-brand" aria-hidden /> Brand-issued, genuine gift cards</li>
              <li className="flex items-center gap-2"><Gift className="size-4 text-brand" aria-hidden /> 290+ brands, 18 categories</li>
            </ul>
            <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-brand hover:text-brand">
              <Mail className="size-4" aria-hidden /> {site.email}
            </a>
          </div>

          <FooterCol title="Explore">
            <FooterLink href="/brands">All brands</FooterLink>
            <FooterLink href="/categories">Categories</FooterLink>
            <FooterLink href="/occasions">Occasions</FooterLink>
            <FooterLink href="/how-it-works">How it works</FooterLink>
            <FooterLink href="/blog">Gifting blog</FooterLink>
            <FooterLink href="/faq">FAQs</FooterLink>
          </FooterCol>

          <FooterCol title="Top categories">
            {categories.slice(0, 7).map((c) => (
              <FooterLink key={c.id} href={`/categories/${c.id}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Popular brands">
            {topBrands.map((b) => (
              <FooterLink key={b.slug} href={`/brands/${b.slug}`}>
                {b.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="/about-us">About SaverPe</FooterLink>
            <FooterLink href="/contact-us">Contact us</FooterLink>
            <FooterLink href="/privacy-policy">Privacy policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of service</FooterLink>
            <FooterLink href="/refund-policy">Refund policy</FooterLink>
            <li>
              <a href={site.orbitUrl} className="inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-300">
                Orbit for business <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Gift for every occasion</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {occasions.map((o) => (
              <li key={o.id}>
                <Link href={`/occasions/${o.id}`} className="inline-block rounded-full border border-white/10 px-3 py-1 text-xs hover:border-brand hover:text-brand">
                  {o.name} gift cards
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} SaverPe. All rights reserved. Brand names and logos belong to their respective owners.</p>
          <p>Made with ♥ in India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-brand">
        {children}
      </Link>
    </li>
  );
}
