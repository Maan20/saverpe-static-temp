import Link from "next/link";
import type { ReactNode } from "react";
import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import Image from "@/components/Image";

/*
 * Tiny, dependency-free Markdown subset used for blog articles.
 * Blocks: ## / ### headings, paragraphs, "- " and "1. " lists, "> " quotes, | tables |,
 *         ![alt](gemini: prompt | ratio | WIDTHxHEIGHT) images, :::tip|note|warning Title ... ::: callouts.
 * Inline: **bold**, *italic*, [label](href).
 */

type Block =
  | { kind: "h2" | "h3"; text: string; id: string }
  | { kind: "p" | "quote"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "image"; alt: string; prompt: string }
  | { kind: "callout"; variant: string; title: string; text: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/\*|\[|\]|\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function splitRow(line: string) {
  return line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());
}

export function parseMarkdown(source: string): Block[] {
  const lines = source.replace(/\r/g, "").split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }
    if (line.startsWith("### ") || line.startsWith("## ")) {
      const level = line.startsWith("### ") ? "h3" : "h2";
      const text = line.replace(/^#+\s+/, "");
      blocks.push({ kind: level, text, id: headingId(text) });
      i++;
      continue;
    }
    const img = line.match(/^!\[([^\]]*)\]\(gemini:\s*([\s\S]+)\)$/);
    if (img) {
      blocks.push({ kind: "image", alt: img[1], prompt: img[2].trim() });
      i++;
      continue;
    }
    if (line.startsWith(":::")) {
      const [, variant = "note", ...titleParts] = line.match(/^:::(\w+)\s*(.*)$/) ?? [];
      const title = titleParts.join(" ").trim();
      const text: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== ":::") {
        if (lines[i].trim()) text.push(lines[i].trim());
        i++;
      }
      i++;
      blocks.push({ kind: "callout", variant, title, text });
      continue;
    }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const row = lines[i].trim();
        if (!/^\|[\s:|-]+\|$/.test(row)) rows.push(splitRow(row));
        i++;
      }
      const [head = [], ...body] = rows;
      blocks.push({ kind: "table", head, rows: body });
      continue;
    }
    if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i].trim()) : /^[-*] /.test(lines[i].trim()))) {
        items.push(lines[i].trim().replace(/^([-*]|\d+\.)\s+/, ""));
        i++;
      }
      blocks.push({ kind: ordered ? "ol" : "ul", items });
      continue;
    }
    if (line.startsWith("> ")) {
      const parts: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        parts.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ kind: "quote", text: parts.join(" ") });
      continue;
    }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3} |!\[|:::|\||[-*] |\d+\. |> )/.test(lines[i].trim())) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push({ kind: "p", text: para.join(" ") });
  }
  return blocks;
}

export function extractToc(source: string): TocItem[] {
  return parseMarkdown(source)
    .filter((b): b is Extract<Block, { kind: "h2" | "h3" }> => b.kind === "h2" || b.kind === "h3")
    .map((b) => ({ id: b.id, text: stripInline(b.text), level: b.kind === "h2" ? 2 : 3 }));
}

export function extractImagePrompts(source: string) {
  return parseMarkdown(source).filter((b): b is Extract<Block, { kind: "image" }> => b.kind === "image");
}

export function stripInline(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*?([^*]+)\*\*?/g, "$1");
}

export function plainText(source: string) {
  return parseMarkdown(source)
    .map((b) => {
      switch (b.kind) {
        case "ul":
        case "ol":
          return b.items.map((t) => `- ${stripInline(t.replace(/^\[[ xX]\]\s/, ""))}`).join("\n");
        case "image":
          return "";
        case "callout":
          return `${b.title}: ${stripInline(b.text.join(" "))}`;
        case "table":
          return [b.head, ...b.rows].map((r) => r.join(" | ")).join("\n");
        case "h2":
          return `\n## ${stripInline(b.text)}`;
        case "h3":
          return `\n### ${stripInline(b.text)}`;
        default:
          return stripInline(b.text);
      }
    })
    .filter(Boolean)
    .join("\n\n");
}

export function wordCount(source: string) {
  return plainText(source).split(/\s+/).filter(Boolean).length;
}

export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      out.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href}>
            {m[1]}
          </Link>
        ) : (
          <a key={key++} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
            {m[1]}
          </a>
        ),
      );
    } else if (m[3]) {
      out.push(<strong key={key++}>{m[3]}</strong>);
    } else if (m[4]) {
      out.push(<em key={key++}>{m[4]}</em>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const calloutStyles: Record<string, { icon: typeof Info; cls: string }> = {
  tip: { icon: Lightbulb, cls: "border-mint/30 bg-mint-soft" },
  note: { icon: Info, cls: "border-sky/30 bg-sky-soft" },
  warning: { icon: TriangleAlert, cls: "border-accent/30 bg-accent-soft" },
};

export function Markdown({ source, imagePrefix }: { source: string; imagePrefix: string }) {
  const blocks = parseMarkdown(source);
  let imageIndex = 0;
  return (
    <div className="prose-article">
      {blocks.map((b, idx) => {
        switch (b.kind) {
          case "h2":
            return (
              <h2 key={idx} id={b.id}>
                {renderInline(b.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} id={b.id}>
                {renderInline(b.text)}
              </h3>
            );
          case "p":
            return <p key={idx}>{renderInline(b.text)}</p>;
          case "quote":
            return <blockquote key={idx}>{renderInline(b.text)}</blockquote>;
          case "ul": {
            const isChecklist = b.items.every((item) => /^\[[ xX]\]\s/.test(item));
            return isChecklist ? (
              <ul key={idx} className="!list-none !pl-0">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span aria-hidden className={`mt-1.5 grid size-4 shrink-0 place-items-center rounded border-2 border-current text-[10px] font-bold ${/^\[[xX]\]/.test(item) ? "text-mint" : "text-muted"}`}>
                      {/^\[[xX]\]/.test(item) ? "✓" : ""}
                    </span>
                    <span>{renderInline(item.replace(/^\[[ xX]\]\s/, ""))}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul key={idx}>
                {b.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          }
          case "ol":
            return (
              <ol key={idx}>
                {b.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case "image":
            imageIndex++;
            return (
              <div key={idx} className="my-10">
                <Image GeminiPrompt={b.prompt} alt={b.alt} file={`${imagePrefix}-${imageIndex}`} sizes="(min-width: 1024px) 720px, 100vw" />
                <p className="!mt-3 text-center text-sm text-muted">{b.alt}</p>
              </div>
            );
          case "callout": {
            const style = calloutStyles[b.variant] ?? calloutStyles.note;
            const Icon = style.icon;
            return (
              <aside key={idx} className={`mt-8 flex gap-4 rounded-2xl border p-5 ${style.cls}`}>
                <Icon className="mt-1 size-5 shrink-0 text-ink" aria-hidden />
                <div>
                  {b.title && <p className="!mt-0 font-display font-bold text-ink">{b.title}</p>}
                  {b.text.map((t, j) => (
                    <p key={j} className="!mt-1 text-base leading-7">
                      {renderInline(t)}
                    </p>
                  ))}
                </div>
              </aside>
            );
          }
          case "table":
            return (
              <div key={idx} className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j}>{renderInline(h)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{renderInline(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
