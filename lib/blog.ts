import { posts as allPosts } from "@/content/blog";
import { extensions } from "@/content/blog/extensions";
import { wordCount } from "@/lib/markdown";

export interface PostInput {
  slug: string;
  title: string;
  /** Meta description, ≤155 chars. */
  description: string;
  category: BlogCategoryId;
  tags: string[];
  date: string;
  updated?: string;
  cover: { prompt: string; alt: string };
  /** Short answer-first summary; shown at the top and used by LLM-oriented feeds. */
  tldr: string;
  body: string;
  faqs?: { q: string; a: string }[];
}

export const blogCategories = [
  { id: "gift-guides", name: "Gift Guides", blurb: "Curated gift card picks for every person on your list." },
  { id: "festivals-occasions", name: "Festivals & Occasions", blurb: "Diwali to birthdays — timing, etiquette and ideas." },
  { id: "gift-card-basics", name: "Gift Card Basics", blurb: "How e-gift cards work, redemption, validity and safety." },
  { id: "brand-spotlights", name: "Brand Spotlights", blurb: "Deep dives into the brands inside the SaverPe catalog." },
  { id: "smart-gifting", name: "Smart Gifting", blurb: "Budgeting, personalisation and thoughtful-gifting habits." },
  { id: "corporate-gifting", name: "Corporate Gifting", blurb: "Gifting for teams, clients and partners." },
] as const;

export type BlogCategoryId = (typeof blogCategories)[number]["id"];

export const author = {
  name: "SaverPe Editorial Team",
  bio: "The SaverPe editorial team researches gifting trends, brand programs and redemption rules so every gift lands perfectly.",
};

export type Post = PostInput & { readingMinutes: number; words: number };

/** Insert extended sections before a post's closing call-to-action paragraph (if it has one). */
function withExtension(body: string, extra?: { body: string }) {
  if (!extra?.body) return body;
  const chunks = body.trim().split(/\n{2,}/);
  const last = chunks[chunks.length - 1];
  const isCta = last.length < 320 && !/^(#|-|\||:::|!\[|\d+\.)/.test(last);
  return isCta ? [...chunks.slice(0, -1), extra.body.trim(), last].join("\n\n") : `${body.trim()}\n\n${extra.body.trim()}`;
}

export const posts: Post[] = allPosts
  .map((p) => {
    const extra = extensions[p.slug];
    const body = withExtension(p.body, extra);
    const faqs = [...(p.faqs ?? []), ...(extra?.faqs ?? [])];
    const words = wordCount(body);
    return { ...p, body, faqs, words, readingMinutes: Math.max(3, Math.round(words / 220)) };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getCategory(id: string) {
  return blogCategories.find((c) => c.id === id);
}

export function relatedPosts(post: Post, limit = 3) {
  return posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: (p.category === post.category ? 3 : 0) + p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score || b.p.date.localeCompare(a.p.date))
    .slice(0, limit)
    .map((x) => x.p);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
