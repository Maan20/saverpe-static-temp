import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Clock, Gift, ListChecks, Sparkles } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/ui";
import { author, formatDate, getCategory, getPost, posts, relatedPosts } from "@/lib/blog";
import { Markdown, extractToc, renderInline } from "@/lib/markdown";
import { absoluteUrl, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    authors: [author.name],
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const category = getCategory(post.category);
  const toc = extractToc(post.body).filter((t) => t.level === 2);
  const related = relatedPosts(post, 3);
  const url = absoluteUrl(`/blog/${post.slug}`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    abstract: post.tldr,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    wordCount: post.words,
    timeRequired: `PT${post.readingMinutes}M`,
    articleSection: category?.name,
    keywords: post.tags.join(", "),
    inLanguage: "en-IN",
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    author: { "@type": "Organization", name: author.name, url: absoluteUrl("/about-us") },
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article>
        <header className="border-b border-line bg-[radial-gradient(circle_at_90%_0%,var(--color-brand-100),transparent_40%)]">
          <div className="container-page max-w-5xl py-10">
            <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: category?.name ?? "", path: `/blog/category/${post.category}` }, { name: post.title, path: `/blog/${post.slug}` }]} />
            <Link href={`/blog/category/${post.category}`} className="eyebrow mt-8">{category?.name}</Link>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{post.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-muted">
              <span className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-full bg-brand"><Gift className="size-4 text-ink" aria-hidden /></span>
                {author.name}
              </span>
              <span className="flex items-center gap-1.5"><CalendarDays className="size-4" aria-hidden /> <time dateTime={post.date}>{formatDate(post.date)}</time></span>
              {post.updated && <span>Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></span>}
              <span className="flex items-center gap-1.5"><Clock className="size-4" aria-hidden /> {post.readingMinutes} min read</span>
            </div>
          </div>
          <div className="container-page max-w-5xl pb-10">
            <Image GeminiPrompt={post.cover.prompt} alt={post.cover.alt} file={`blog/${post.slug}-cover`} priority sizes="(min-width: 1024px) 1024px, 100vw" />
          </div>
        </header>

        <div className="container-page mt-12 grid max-w-6xl gap-12 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0">
            <aside className="rounded-3xl border border-brand-200 bg-brand-50 p-6">
              <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-brand-800"><Sparkles className="size-4" aria-hidden /> Quick answer</p>
              <p className="mt-2 text-lg leading-8 text-ink">{renderInline(post.tldr)}</p>
            </aside>

            {toc.length > 3 && (
              <nav aria-label="Table of contents" className="mt-8 rounded-3xl border border-line bg-white p-6 lg:hidden">
                <p className="flex items-center gap-2 font-display font-bold"><ListChecks className="size-4" aria-hidden /> In this article</p>
                <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
                  {toc.map((t) => <li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.text}</a></li>)}
                </ol>
              </nav>
            )}

            <div className="mt-4">
              <Markdown source={post.body} imagePrefix={`blog/${post.slug}`} />
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-14">
                <h2 id="faqs" className="scroll-mt-28 font-display text-2xl font-extrabold sm:text-3xl">Frequently asked questions</h2>
                <div className="mt-6"><FaqList faqs={post.faqs} /></div>
              </section>
            )}

            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((t) => <span key={t} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-muted">#{t}</span>)}
            </div>

            <div className="mt-10 flex items-start gap-4 rounded-3xl border border-line bg-white p-6">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand"><Gift className="size-6" aria-hidden /></span>
              <div>
                <p className="font-display font-bold">{author.name}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{author.bio}</p>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              {toc.length > 0 && (
                <nav aria-label="Table of contents" className="rounded-3xl border border-line bg-white p-5">
                  <p className="flex items-center gap-2 font-display text-sm font-bold"><ListChecks className="size-4" aria-hidden /> In this article</p>
                  <ol className="mt-3 space-y-2 text-sm text-muted">
                    {toc.map((t) => <li key={t.id}><a href={`#${t.id}`} className="block leading-snug hover:text-ink">{t.text}</a></li>)}
                  </ol>
                </nav>
              )}
              <div className="rounded-3xl bg-ink p-5 text-white">
                <p className="font-display text-lg font-bold">Find the perfect gift card</p>
                <p className="mt-2 text-sm text-white/70">290+ brands across fashion, food, travel & more.</p>
                <Link href="/brands" className="btn-primary mt-4 w-full">Explore brands <ArrowRight className="size-4" aria-hidden /></Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="h-section">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((p) => <BlogCard key={p.slug} post={p} />)}</div>
        </section>
      )}

      <CtaBand title="Turn this idea into a gift" text="Pick a brand, add your message and make someone's day." primary={{ href: "/brands", label: "Explore brands" }} secondary={{ href: "/occasions", label: "Gift by occasion" }} />
    </>
  );
}
