import Link from "next/link";
import { Clock } from "lucide-react";
import Image from "@/components/Image";
import { formatDate, getCategory, type Post } from "@/lib/blog";

export default function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const category = getCategory(post.category);
  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(18,18,18,0.35)] ${featured ? "lg:flex-row" : ""}`}>
      <Image
        GeminiPrompt={post.cover.prompt}
        alt={post.cover.alt}
        file={`blog/${post.slug}-cover`}
        rounded="rounded-none"
        className={featured ? "lg:w-3/5" : "w-full"}
        sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
      />
      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:justify-center lg:p-10" : ""}`}>
        <div className="flex items-center gap-3 text-xs font-semibold text-muted">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 font-bold text-brand-800">{category?.name}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden /> {post.readingMinutes} min read
          </span>
        </div>
        <h3 className={`mt-4 font-display font-extrabold leading-snug tracking-tight text-ink ${featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className={`mt-3 text-sm leading-6 text-muted ${featured ? "sm:text-base" : "line-clamp-3"}`}>{post.description}</p>
        <p className="mt-auto pt-5 text-xs font-semibold text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </div>
    </article>
  );
}
