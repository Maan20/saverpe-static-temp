"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

export interface CatalogBrand {
  slug: string;
  name: string;
  logo: string | null;
  category: string;
  categoryName: string;
  categories: string[];
  popular: boolean;
  priceLabel: string;
}

const PAGE = 48;
// Mirrors DEFAULT_BRAND_IMAGE in lib/brands.ts (not imported to keep brand JSON out of the client bundle).
const DEFAULT_BRAND_IMAGE = "/brands/default-e-gift-card.png";

export default function BrandCatalog({ brands, categories }: { brands: CatalogBrand[]; categories: { id: string; name: string; count: number }[] }) {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "all");
  const [sort, setSort] = useState<"popular" | "az">("popular");
  const [limit, setLimit] = useState(PAGE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = brands.filter((b) => (category === "all" || b.categories.includes(category)) && (!q || b.name.toLowerCase().includes(q) || b.categoryName.toLowerCase().includes(q)));
    return sort === "az" ? [...list].sort((a, b) => a.name.localeCompare(b.name)) : list;
  }, [brands, query, category, sort]);

  const visible = filtered.slice(0, limit);

  return (
    <div>
      <div className="sticky top-[4.5rem] z-30 -mx-4 border-b border-line bg-cream/90 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-3xl sm:border sm:px-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search brands</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setLimit(PAGE);
              }}
              type="search"
              placeholder="Search 290+ brands — Amazon, Myntra, Taj, Tanishq…"
              className="field !rounded-full !pl-11"
            />
          </label>
          <label className="flex items-center gap-2 text-sm font-semibold text-muted">
            Sort
            <select value={sort} onChange={(e) => setSort(e.target.value as "popular" | "az")} className="field !w-auto !rounded-full !py-2.5">
              <option value="popular">Most popular</option>
              <option value="az">A – Z</option>
            </select>
          </label>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="tablist" aria-label="Filter by category">
          {[{ id: "all", name: "All brands", count: brands.length }, ...categories].map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={category === c.id}
              onClick={() => {
                setCategory(c.id);
                setLimit(PAGE);
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${category === c.id ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-soft hover:border-ink"}`}
            >
              {c.name} <span className="opacity-60">{c.count}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing <strong className="text-ink">{visible.length}</strong> of {filtered.length} brands
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-line bg-white p-10 text-center">
          <p className="font-display text-xl font-bold">No brands match “{query}”.</p>
          <button type="button" onClick={() => { setQuery(""); setCategory("all"); }} className="btn-ghost mt-4">
            <X className="size-4" aria-hidden /> Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {visible.map((b) => (
            <li key={b.slug}>
              <Link href={`/brands/${b.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand hover:shadow-lg">
                <div className="relative aspect-[10/11] w-full overflow-hidden bg-sand">
                  <NextImage src={b.logo ?? DEFAULT_BRAND_IMAGE} alt={`${b.name} e-gift card`} fill sizes="(min-width:1280px) 16vw, (min-width:640px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  {!b.logo && (
                    // TODO: swap in licensed brand logo asset
                    <span className="absolute inset-x-2 bottom-2 truncate rounded-full bg-white/90 px-2 py-0.5 text-center font-display text-[11px] font-extrabold text-ink">{b.name}</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">{b.categoryName}</span>
                  <span className="font-display text-sm font-bold leading-snug">{b.name}</span>
                  <span className="mt-auto pt-1 text-[11px] font-semibold text-brand-800">{b.priceLabel}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {limit < filtered.length && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setLimit((l) => l + PAGE)} className="btn-dark">
            Load more brands ({filtered.length - limit} left)
          </button>
        </div>
      )}
    </div>
  );
}
