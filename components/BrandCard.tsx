import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";
import { brandImage, getCategory, priceSummary, type Brand } from "@/lib/brands";

export function BrandLogo({ brand, className = "" }: { brand: Pick<Brand, "name" | "logo" | "category">; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      <NextImage src={brandImage(brand)} alt={`${brand.name} gift card`} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
      {!brand.logo && (
        // TODO: swap in licensed brand logo asset
        <span className="absolute inset-x-3 bottom-3 truncate rounded-full bg-white/90 px-3 py-1 text-center font-display text-xs font-extrabold text-ink shadow-sm">{brand.name}</span>
      )}
    </div>
  );
}

export default function BrandCard({ brand, href }: { brand: Brand; href?: string }) {
  const category = getCategory(brand.category);
  return (
    <Link
      href={href ?? `/brands/${brand.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand hover:shadow-[0_20px_40px_-20px_rgba(18,18,18,0.25)]"
    >
      <BrandLogo brand={brand} className="aspect-[10/11] w-full" />
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted">{category?.name}</p>
        <h3 className="flex items-start justify-between gap-2 font-display text-base font-bold leading-snug text-ink">
          {brand.name}
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted transition group-hover:text-ink" aria-hidden />
        </h3>
        <p className="mt-auto pt-2 text-xs font-semibold text-brand-800">{priceSummary(brand.price)}</p>
      </div>
    </Link>
  );
}
