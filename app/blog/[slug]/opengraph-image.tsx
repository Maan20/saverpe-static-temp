import { getCategory, getPost, posts } from "@/lib/blog";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "SaverPe Gifting Journal article";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogCard({ eyebrow: getCategory(post?.category ?? "")?.name ?? "Blog", title: post?.title ?? "SaverPe Gifting Journal", footer: `${post?.readingMinutes ?? 5} min read · Gifting Journal` });
}
