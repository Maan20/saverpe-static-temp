import { LegalPage } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

// TODO: legal review (see CONTENT-TODO.md)
export const metadata = pageMeta({
  title: "Refund & Cancellation Policy",
  description: "SaverPe's refund and cancellation policy for e-gift cards, including failed deliveries, delayed codes and how to raise a support request.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" path="/refund-policy" updated="17 September 2026">
      <p>Gift cards are a prepaid form of value, so refunds work differently from regular products. This policy explains what to expect.</p>
      <h2>1. No refunds on issued gift cards</h2>
      <p>Once an e-gift card code has been successfully issued and delivered, it cannot be cancelled, returned, refunded or exchanged for cash, in line with the issuing brand&apos;s terms and RBI guidelines for prepaid payment instruments.</p>
      <h2>2. Failed or undelivered gift cards</h2>
      <p>If a gift card could not be generated or delivered due to a technical failure, the amount will be refunded to the original payment method after verification, typically within 7–10 business days.</p>
      <h2>3. Delayed delivery</h2>
      <p>Most codes are delivered within minutes, but a brand&apos;s system can occasionally take up to 24–48 hours. Please check your spam or promotions folder and wait for this window before raising a request.</p>
      <h2>4. Invalid or non-working codes</h2>
      <p>If a delivered code does not work, email us with the brand name, code (last 4 digits), recipient email and a screenshot of the error. We will investigate with the brand and, where the code is confirmed invalid and unused, arrange a replacement or refund.</p>
      <h2>5. Expired gift cards</h2>
      <p>Expired gift cards and unused balances are not refundable. Validity is shown on the brand page and in the delivery email.</p>
      <h2>6. How to raise a request</h2>
      <p>Email <a href={`mailto:${site.email}`}>{site.email}</a> with the subject &ldquo;Refund request&rdquo;. We acknowledge requests within one business day.</p>
    </LegalPage>
  );
}
