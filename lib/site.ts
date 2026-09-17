export const site = {
  name: "SaverPe",
  legalName: "SaverPe",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://saverpe.com").replace(/\/$/, ""),
  orbitUrl: (process.env.NEXT_PUBLIC_ORBIT_URL ?? "https://orbit.saverpe.com").replace(/\/$/, ""),
  email: "support@saverpe.com",
  tagline: "E-gift cards for every moment that matters",
  description:
    "Discover digital gift cards from 290+ top Indian and international brands — fashion, food, travel, jewellery and more. Gift instantly for birthdays, weddings, Diwali and every celebration.",
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
