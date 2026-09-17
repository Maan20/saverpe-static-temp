/**
 * Reads a URL from an env var, falling back when it is unset, empty or invalid
 * (e.g. an empty value in the hosting dashboard). Adds https:// if the scheme is missing.
 */
function envUrl(value: string | undefined, fallback: string) {
  const raw = value?.trim();
  if (!raw) return fallback;
  try {
    return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`).origin;
  } catch {
    return fallback;
  }
}

export const site = {
  name: "SaverPe",
  legalName: "SaverPe",
  url: envUrl(process.env.NEXT_PUBLIC_SITE_URL, "https://saverpe.com"),
  orbitUrl: envUrl(process.env.NEXT_PUBLIC_ORBIT_URL, "https://orbit.saverpe.com"),
  email: "support@saverpe.com",
  tagline: "E-gift cards for every moment that matters",
  description:
    "Buy e-gift cards online from 290+ top brands in India: fashion, food, travel, jewellery and more, delivered by email for birthdays, weddings and Diwali.",
  locale: "en_IN",
  foundingCountry: "India",
  keywords: [
    "e-gift cards India",
    "digital gift cards",
    "gift vouchers online",
    "birthday gift cards",
    "Diwali gift cards",
    "brand gift cards",
    "Amazon gift voucher",
    "Myntra gift card",
    "instant gift card delivery",
  ],
} as const;

export const mainNav = [
  { href: "/brands", label: "Brands" },
  { href: "/categories", label: "Categories" },
  { href: "/occasions", label: "Occasions" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
  { href: "/about-us", label: "About" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
