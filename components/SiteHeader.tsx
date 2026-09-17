import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import MobileMenu from "@/components/MobileMenu";

export default function SiteHeader() {
  return (
    <>
      <div className="bg-ink text-white">
        <div className="container-page flex h-10 items-center justify-between gap-4 text-xs font-medium">
          <p className="flex items-center gap-2 truncate">
            <Sparkles className="size-3.5 shrink-0 text-brand" aria-hidden />
            <span className="truncate">290+ brand e-gift cards · Delivered digitally · Loved for birthdays, weddings &amp; festivals</span>
          </p>
          <a href={site.orbitUrl} className="hidden shrink-0 items-center gap-1 font-bold text-brand hover:text-brand-300 sm:inline-flex">
            For Business: Orbit <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/85 backdrop-blur-xl">
        <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
          <Link href="/" className="shrink-0" aria-label="SaverPe home">
            <NextImage src="/logo.png" alt="SaverPe" width={489} height={132} priority className="h-9 w-auto sm:h-10" />
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-ink-soft transition hover:bg-brand-50 hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact-us" className="btn-ghost hidden !px-5 !py-2.5 md:inline-flex">
              Contact us
            </Link>
            <Link href="/brands" className="btn-primary !px-5 !py-2.5">
              Explore brands
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
