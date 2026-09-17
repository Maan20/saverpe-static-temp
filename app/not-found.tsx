import Link from "next/link";
import { ArrowRight, Gift, Search } from "lucide-react";
import { popularBrands } from "@/lib/brands";

export default function NotFound() {
  const picks = popularBrands(6);
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="grid size-24 animate-float place-items-center rounded-[2rem] bg-brand shadow-[0_20px_50px_-20px_rgba(255,184,0,0.9)] [--r:-6deg]">
        <Gift className="size-12" aria-hidden />
      </span>
      <p className="mt-8 font-display text-8xl font-extrabold text-brand-200">404</p>
      <h1 className="h-section mt-2">Oops — this gift got lost in the mail.</h1>
      <p className="mt-4 max-w-lg text-lg text-muted">The page you&apos;re looking for has moved or never existed. Let&apos;s find you something better to unwrap.</p>
      <form action="/brands" className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-line bg-white p-2">
        <Search className="ml-3 size-5 text-muted" aria-hidden />
        <label htmlFor="nf-q" className="sr-only">Search brands</label>
        <input id="nf-q" name="q" placeholder="Search brands" className="min-w-0 flex-1 bg-transparent outline-none" />
        <button className="btn-primary !py-2">Search</button>
      </form>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-dark">Back to home <ArrowRight className="size-4" aria-hidden /></Link>
        <Link href="/blog" className="btn-ghost">Read the blog</Link>
      </div>
      <ul className="mt-10 flex flex-wrap justify-center gap-2">
        {picks.map((b) => (
          <li key={b.slug}><Link href={`/brands/${b.slug}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-ink">{b.name}</Link></li>
        ))}
      </ul>
    </section>
  );
}
