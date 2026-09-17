import Link from "next/link";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { renderInline } from "@/lib/markdown";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" aria-hidden />
              {i === items.length - 1 ? (
                <span aria-current="page" className="font-semibold text-ink">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-ink">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumbs?: { name: string; path: string }[];
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-[radial-gradient(circle_at_90%_0%,var(--color-brand-100),transparent_40%),radial-gradient(circle_at_0%_100%,var(--color-accent-soft),transparent_35%)]">
      <div className="container-page grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
          <h1 className="h-display mt-4 max-w-3xl">{title}</h1>
          {intro && <div className="mt-5 max-w-2xl text-lg leading-8 text-muted">{intro}</div>}
          {children}
        </div>
        {aside && <div className="animate-fade-up [animation-delay:150ms]">{aside}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left", action }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; align?: "left" | "center"; action?: { href: string; label: string } }) {
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
      <div className={align === "center" ? "max-w-2xl" : "max-w-3xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="h-section mt-3">{title}</h2>
        {intro && <p className="mt-3 text-base leading-7 text-muted sm:text-lg">{intro}</p>}
      </div>
      {action && (
        <Link href={action.href} className="inline-flex shrink-0 items-center gap-1.5 font-bold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:gap-2.5">
          {action.label} <ArrowRight className="size-4" aria-hidden />
        </Link>
      )}
    </div>
  );
}

export function FaqList({ faqs, withSchema = true }: { faqs: { q: string; a: string }[]; withSchema?: boolean }) {
  return (
    <>
      {withSchema && <JsonLd data={faqJsonLd(faqs)} />}
      <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
        {faqs.map((f, i) => (
          <details key={f.q} className="group" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-bold text-ink hover:bg-sand/60 sm:text-lg [&::-webkit-details-marker]:hidden">
              <h3>{f.q}</h3>
              <ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" aria-hidden />
            </summary>
            <p className="px-6 pb-6 leading-7 text-muted">{renderInline(f.a)}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function CtaBand({ title, text, primary, secondary }: { title: string; text: string; primary: { href: string; label: string }; secondary?: { href: string; label: string } }) {
  return (
    <section className="container-page mt-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href={primary.href} className="btn-primary">
              {primary.label} <ArrowRight className="size-4" aria-hidden />
            </Link>
            {secondary && (
              <Link href={secondary.href} className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-brand hover:text-brand">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalPage({ title, path, updated, children }: { title: string; path: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero breadcrumbs={[{ name: title, path }]} title={title} intro={<>Last updated: {updated}</>} />
      <div className="container-page py-14">
        <div className="prose-article mx-auto max-w-3xl">{children}</div>
      </div>
    </>
  );
}
