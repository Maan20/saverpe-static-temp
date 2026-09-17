export interface GlossaryTerm {
  term: string;
  /** Anchor id on /glossary. */
  id: string;
  definition: string;
  /** Optional internal link for further reading. */
  link?: { href: string; label: string };
}

export const glossary: GlossaryTerm[] = [
  { term: "E-gift card", id: "e-gift-card", definition: "A digital gift card issued by a brand and delivered by email or SMS instead of as a plastic card. It carries a card number or voucher code (and sometimes a PIN) that the recipient redeems online or in store, as per the brand's terms.", link: { href: "/how-it-works", label: "How e-gift cards work" } },
  { term: "E-voucher", id: "e-voucher", definition: "Another name for an e-gift card, common in India. Brand e-vouchers carry a fixed value and validity and can only be used with the issuing brand." },
  { term: "Gift voucher code", id: "voucher-code", definition: "The unique alphanumeric code on an e-gift card that is entered at checkout or shown to a cashier to apply the card's value to a purchase." },
  { term: "PIN", id: "pin", definition: "A secret number issued with some gift cards. Many brands require both the card number and the PIN to redeem, which protects the balance if the code alone is seen by someone else." },
  { term: "Denomination", id: "denomination", definition: "The face value of a gift card, such as ₹500, ₹1,000 or ₹2,000. Some brands offer fixed denominations (slabs), while others allow any value within a range.", link: { href: "/brands", label: "Compare denominations by brand" } },
  { term: "Slab denominations", id: "slab-denominations", definition: "Fixed card values set by the brand. You pick one of the listed amounts rather than typing a custom value." },
  { term: "Flexible-value gift card", id: "flexible-value", definition: "A gift card that can be issued for any amount between a minimum and maximum set by the brand, such as ₹100 to ₹10,000." },
  { term: "Validity", id: "validity", definition: "How long a gift card can be used, usually counted from the date of issue or activation — for example 12 months. Unused value typically lapses after the validity ends, so check it on each brand page." },
  { term: "Activation", id: "activation", definition: "The moment a gift card becomes usable. Digital cards are usually active on delivery, though some brands note a short activation window before in-store use." },
  { term: "Redemption", id: "redemption", definition: "Using a gift card's value to pay for a purchase, either online by entering the code at checkout or in store by showing the code to the cashier." },
  { term: "Partial redemption", id: "partial-redemption", definition: "When a gift card can be used across more than one purchase, with the unused balance kept for later. Many Indian brand gift cards are single-use and do not allow partial redemption." },
  { term: "Single-use gift card", id: "single-use", definition: "A gift card that must be used in one transaction. Any value not spent in that purchase is forfeited, so pick a value close to what the recipient is likely to spend." },
  { term: "Balance check", id: "balance-check", definition: "Looking up how much value is left on a gift card, usually on the brand's website or app, or at a store counter." },
  { term: "Clubbing", id: "clubbing", definition: "Combining a gift card with other offers, coupons or promotions in the same purchase. Brand terms often state whether clubbing is allowed." },
  { term: "Multiple cards per bill", id: "multiple-cards", definition: "Whether several gift cards can be used to pay one bill. Some brands allow a set number (for example up to 5 cards); others allow only one." },
  { term: "Online redemption", id: "online-redemption", definition: "Using a gift card on a brand's website or app by entering the code (and PIN if needed) in the payment step." },
  { term: "In-store redemption", id: "in-store-redemption", definition: "Using a gift card at a physical outlet by showing the code on your phone. Brand terms may list participating stores and exclusions." },
  { term: "Non-refundable", id: "non-refundable", definition: "Most brand gift cards cannot be cancelled, refunded or exchanged for cash once issued. This is standard across the industry and is stated in each brand's terms.", link: { href: "/refund-policy", label: "SaverPe refund policy" } },
  { term: "Closed-loop gift card", id: "closed-loop", definition: "A gift card that works only with the issuing brand or its group of stores, such as a fashion or restaurant brand card. All brand e-gift cards on SaverPe are closed-loop." },
  { term: "Open-loop gift card", id: "open-loop", definition: "A prepaid card on a card network that can be used at many merchants. In India these are prepaid payment instruments regulated by the RBI and differ from brand gift cards." },
  { term: "Prepaid payment instrument (PPI)", id: "ppi", definition: "The RBI's category for stored-value products like wallets and prepaid cards. Gift cards fall under PPI rules, which set limits such as minimum validity and maximum value." },
  { term: "Multi-brand gift card", id: "multi-brand", definition: "A gift card that the recipient can convert into one of several brands. It is useful when you don't know which brand the person prefers." },
  { term: "Digital gift delivery", id: "digital-delivery", definition: "Sending a gift card by email or messaging with a personal note, so the recipient gets it instantly — useful for last-minute and long-distance gifting.", link: { href: "/occasions", label: "Gift ideas by occasion" } },
  { term: "Gift card fraud", id: "gift-card-fraud", definition: "Scams in which someone asks you to buy gift cards and share the codes — for example posing as a boss, bank or government official. No genuine organisation asks for payment in gift card codes.", link: { href: "/faq", label: "Gift card safety FAQs" } },
  { term: "Corporate gift card", id: "corporate-gift-card", definition: "Gift cards bought in bulk by a business for employee rewards, festive gifts, channel incentives or customer loyalty programs. SaverPe's sister platform Orbit handles business orders." },
];
