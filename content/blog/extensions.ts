import { extensionsA } from "./extensions-a";
import { extensionsB } from "./extensions-b";
import { extensionsC } from "./extensions-c";
import { extensionsD } from "./extensions-d";

export interface Extension {
  body?: string;
  faqs?: { q: string; a: string }[];
}

/** Several extension files may extend the same post; bodies are appended in order and FAQs concatenated. */
function mergeExtensions(...maps: Record<string, Extension>[]) {
  const out: Record<string, { body: string; faqs: { q: string; a: string }[] }> = {};
  for (const map of maps) {
    for (const [slug, ext] of Object.entries(map)) {
      const prev = out[slug] ?? { body: "", faqs: [] };
      out[slug] = { body: [prev.body, ext.body ?? ""].filter(Boolean).join("\n\n"), faqs: [...prev.faqs, ...(ext.faqs ?? [])] };
    }
  }
  return out;
}

export const extensions = mergeExtensions(extensionsA, extensionsB, extensionsC, extensionsD);
