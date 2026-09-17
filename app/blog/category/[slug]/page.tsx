import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { blogCategories, getCategory, posts } from "@/lib/blog";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/blog/category/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) return {};
  return pageMeta({ title: `${c.name} — SaverPe Gifting Blog`, description: `${c.blurb} Read ${posts.filter((p) => p.category === slug).length} articles from the SaverPe editorial team.`, path: `/blog/category/${slug}` });
}

export default async function BlogCategoryPage({ params }: PageProps<"/blog/category/[slug]">) {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) notFound();
  const list = posts.filter((p) => p.category === slug);
  return (
    <>
      <JsonLd data={itemListJsonLd(c.name, list.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })))} />
      <PageHero breadcrumbs={[{ name: "Blog", path: "/blog" }, { name: c.name, path: `/blog/category/${slug}` }]} eyebrow={`${list.length} articles`} title={c.name} intro={c.blurb} />
      <nav aria-label="Blog categories" className="container-page mt-10">
        <ul className="flex gap-2 overflow-x-auto pb-2">
          <li className="shrink-0"><Link href="/blog" className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-bold hover:border-ink">All</Link></li>
          {blogCategories.map((x) => (
            <li key={x.id} className="shrink-0">
              {x.id === slug ? (
                <span aria-current="page" className="inline-block rounded-full bg-ink px-4 py-2 text-sm font-bold text-white">{x.name}</span>
              ) : (
                <Link href={`/blog/category/${x.id}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-bold hover:border-ink">{x.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <section className="container-page mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <BlogCard key={p.slug} post={p} />)}
      </section>
      <CtaBand title="Ready to gift?" text="Turn inspiration into a gift card they'll love." primary={{ href: "/brands", label: "Explore brands" }} />
    </>
  );
}
