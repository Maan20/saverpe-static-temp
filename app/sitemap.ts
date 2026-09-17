import type { MetadataRoute } from "next";
import { brands, brandsInCategory, budgetTiers, categories, occasions } from "@/lib/brands";
import { blogCategories, posts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "daily"],
    ["/brands", 0.95, "daily"],
    ["/categories", 0.8, "weekly"],
    ["/occasions", 0.8, "weekly"],
    ["/blog", 0.8, "daily"],
    ["/how-it-works", 0.7, "monthly"],
    ["/about-us", 0.6, "monthly"],
    ["/faq", 0.7, "monthly"],
    ["/glossary", 0.6, "monthly"],
    ["/editorial-policy", 0.3, "yearly"],
    ["/contact-us", 0.5, "yearly"],
    ["/privacy-policy", 0.2, "yearly"],
    ["/terms-of-service", 0.2, "yearly"],
    ["/refund-policy", 0.2, "yearly"],
  ];
  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({ url: absoluteUrl(path), lastModified: now, changeFrequency, priority })),
    ...categories.filter((c) => brandsInCategory(c.id).length).map((c) => ({ url: absoluteUrl(`/categories/${c.id}`), lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...budgetTiers.map((a) => ({ url: absoluteUrl(`/gift-cards-under/${a}`), lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...occasions.map((o) => ({ url: absoluteUrl(`/occasions/${o.id}`), lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...brands.map((b) => ({ url: absoluteUrl(`/brands/${b.slug}`), lastModified: now, changeFrequency: "weekly" as const, priority: b.popular ? 0.85 : 0.7, ...(b.logo ? { images: [absoluteUrl(b.logo)] } : {}) })),
    ...blogCategories.map((c) => ({ url: absoluteUrl(`/blog/category/${c.id}`), lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.updated ?? p.date), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
