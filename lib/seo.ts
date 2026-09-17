import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
  /** Absolute OG image URL; defaults to the site-wide card. */
  image?: string;
}

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 158;
const TITLE_SUFFIXES = [" | SaverPe", ""];

/**
 * Search-result title within ~60 chars. Tries the full title, then the part before ":" / " — ",
 * with the longest brand suffix that fits. The full title is still used for H1, OG and Twitter.
 */
export function seoTitle(title: string) {
  const head = title.split(/:\s| — | – /)[0].trim();
  const candidates = [title, ...(head.length >= 20 && head !== title ? [head] : [])];
  for (const candidate of candidates) {
    for (const suffix of TITLE_SUFFIXES) {
      if ((candidate + suffix).length <= TITLE_MAX) return candidate + suffix;
    }
  }
  const cut = title.slice(0, TITLE_MAX - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Meta description within ~158 chars, cut at a sentence or word boundary. */
export function clampDescription(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= DESCRIPTION_MAX) return clean;
  const cut = clean.slice(0, DESCRIPTION_MAX);
  const sentence = cut.lastIndexOf(". ");
  if (sentence > 90) return cut.slice(0, sentence + 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—–-]$/, "")}…`;
}

/** Per-page metadata with canonical, Open Graph and Twitter tags kept in sync. */
export function pageMeta({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noindex,
  image,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const desc = clampDescription(description);
  // Route-level opengraph-image files override this; everything else falls back to the site card.
  const images = [{ url: image ?? absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: title }];
  return {
    title: { absolute: seoTitle(title) },
    description: desc,
    keywords: keywords ?? [...site.keywords],
    alternates: { canonical: url, languages: { "en-IN": url, "x-default": url } },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images,
      ...(type === "article" ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: { card: "summary_large_image", title, description: desc, images: images.map((i) => i.url) },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const organizationId = `${site.url}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/logo.png"),
    email: site.email,
    description: site.description,
    areaServed: "IN",
    publishingPrinciples: absoluteUrl("/editorial-policy"),
    knowsAbout: ["e-gift cards", "digital gift vouchers", "corporate gifting", "employee rewards", "gift card redemption"],
    contactPoint: [{ "@type": "ContactPoint", email: site.email, contactType: "customer support", areaServed: "IN", availableLanguage: ["English", "Hindi"] }],
    subOrganization: { "@type": "Organization", name: "Orbit by SaverPe", url: site.orbitUrl },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "en-IN",
    publisher: { "@id": organizationId },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${site.url}/brands?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "") },
    })),
  };
}

export function itemListJsonLd(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, url: absoluteUrl(item.path) })),
  };
}
