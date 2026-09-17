import fs from "node:fs";
import path from "node:path";
import NextImage from "next/image";
import { Gift } from "lucide-react";

/**
 * Image placeholder driven by a Gemini prompt.
 *
 * Usage: <Image GeminiPrompt="A joyful family unwrapping a gift card, warm light | 16:9 | 1600x900" alt="..." />
 *
 * Format is always "image prompt | ratio | WIDTHxHEIGHT" (the build fails otherwise). Generate the image in Gemini
 * with that prompt at that size, save it as `public/images/gemini/<file>.webp` (run
 * `node scripts/list-gemini-prompts.mjs` for the exact list) and it replaces the placeholder at build time.
 */
interface ImageProps {
  GeminiPrompt: string;
  alt: string;
  file?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
  /** Hide the placeholder caption when text is overlaid on the image. */
  bare?: boolean;
}

export function slugifyForFile(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export function parseGeminiPrompt(value: string) {
  const parts = value.split("|").map((p) => p.trim());
  const ratioMatch = parts.length >= 3 ? parts[parts.length - 2].match(/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)$/) : null;
  const sizeMatch = parts.length >= 3 ? parts[parts.length - 1].match(/^(\d+)\s*[x×]\s*(\d+)$/i) : null;
  if (!ratioMatch || !sizeMatch) {
    throw new Error(`GeminiPrompt must be "image prompt | ratio | WIDTHxHEIGHT", got: "${value.slice(-80)}"`);
  }
  return {
    prompt: parts.slice(0, -2).join(" | "),
    ratio: `${ratioMatch[1]}:${ratioMatch[2]}`,
    width: Number(sizeMatch[1]),
    height: Number(sizeMatch[2]),
  };
}

export default function Image({ GeminiPrompt, alt, file, className = "", priority, sizes = "(min-width: 1024px) 50vw, 100vw", rounded = "rounded-3xl", bare = false }: ImageProps) {
  const { ratio, width, height } = parseGeminiPrompt(GeminiPrompt);
  const fileName = file ?? slugifyForFile(alt);
  const src = `/images/gemini/${fileName}.webp`;
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <figure
      data-gemini-prompt={GeminiPrompt}
      data-gemini-file={src}
      data-gemini-ratio={ratio}
      data-gemini-size={`${width}x${height}`}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {exists ? (
        <NextImage src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_20%_20%,var(--color-brand-100),transparent_45%),radial-gradient(circle_at_80%_80%,var(--color-accent-soft),transparent_45%),linear-gradient(135deg,var(--color-sand),var(--color-brand-50))] p-6 text-center"
        >
          <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(var(--color-ink)_1px,transparent_1px)] [background-size:18px_18px]" />
          <span className={`relative grid size-14 ${bare ? "-translate-y-10" : ""} place-items-center rounded-2xl bg-white/80 text-brand-700 shadow-sm backdrop-blur`}>
            <Gift className="size-7" aria-hidden />
          </span>
          {!bare && <span className="relative max-w-sm text-sm font-semibold text-ink/70">{alt}</span>}
          {!bare && <span className="relative rounded-full bg-white/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink/50">{ratio} · {width}×{height}</span>}
        </div>
      )}
    </figure>
  );
}
