import { brands, getBrand, getCategory, priceSummary } from "@/lib/brands";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Brand e-gift card on SaverPe";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  return ogCard({ eyebrow: getCategory(brand?.category ?? "")?.name ?? "Gift card", title: `${brand?.name ?? "Brand"} E-Gift Card`, footer: brand ? `${priceSummary(brand.price)} · Delivered digitally` : "Delivered digitally" });
}
