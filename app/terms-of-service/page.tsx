import { LegalPage } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

// TODO: legal review (see CONTENT-TODO.md)
export const metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms that govern your use of the SaverPe website, brand information, content and e-gift card related services.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path="/terms-of-service" updated="17 September 2026">
      <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of saverpe.com (the &ldquo;Website&rdquo;). Please read them carefully. By using the Website you agree to these Terms.</p>
      <h2>1. About the Website</h2>
      <p>SaverPe provides information about digital gift cards and e-vouchers issued by third-party brands and their authorised gift card program managers. At present, the Website is informational; online purchase features may be introduced in future and will be subject to additional terms.</p>
      <h2>2. Gift card terms</h2>
      <ul>
        <li>Each gift card is issued by the respective brand or its program partner and is governed by that brand&apos;s terms and conditions, displayed on the brand page.</li>
        <li>Validity, redemption channels, partial redemption, and restrictions are determined by the issuing brand.</li>
        <li>Gift cards cannot be exchanged for cash, refunded or cancelled once issued, unless the brand&apos;s terms or applicable law state otherwise.</li>
        <li>Lost, stolen or shared codes are the responsibility of the holder. Treat gift card codes like cash.</li>
      </ul>
      <h2>3. Accuracy of information</h2>
      <p>We work to keep brand information, denominations and terms accurate, but brands may change their programs without notice. In case of conflict, the brand&apos;s current terms prevail.</p>
      <h2>4. Intellectual property</h2>
      <p>SaverPe content, design and logos are owned by SaverPe. Brand names, logos and trademarks displayed on the Website belong to their respective owners and are used only to identify the gift card programs.</p>
      <h2>5. Acceptable use</h2>
      <ul>
        <li>Do not misuse the Website, attempt unauthorised access, scrape content at scale or interfere with its operation.</li>
        <li>Do not submit false, abusive or unlawful content through our forms.</li>
      </ul>
      <h2>6. Limitation of liability</h2>
      <p>To the maximum extent permitted by law, SaverPe is not liable for indirect or consequential losses arising from use of the Website or from a brand&apos;s refusal, change or discontinuation of a gift card program.</p>
      <h2>7. Governing law</h2>
      <p>These Terms are governed by the laws of India, and courts in India shall have exclusive jurisdiction.</p>
      <h2>8. Contact</h2>
      <p>Questions about these Terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  );
}
