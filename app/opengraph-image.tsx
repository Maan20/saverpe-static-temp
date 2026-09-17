import { ogCard, ogSize } from "@/lib/og";

export const alt = "SaverPe — E-gift cards from 290+ top brands";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogCard({ eyebrow: "290+ brands", title: "Gift the joy of choice with e-gift cards from India's favourite brands", footer: "Birthdays · Weddings · Diwali · Every occasion" });
}
