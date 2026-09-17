export interface FaqGroup {
  id: string;
  title: string;
  faqs: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "basics",
    title: "E-gift card basics",
    faqs: [
      {
        q: "What is a SaverPe e-gift card?",
        a: "A SaverPe e-gift card is a digital gift card or voucher issued by a brand — like Amazon, Myntra, Taj Hotels or Tanishq — that is delivered electronically instead of as a plastic card. The recipient gets a unique code (and sometimes a PIN) they can redeem online, in the brand's app or at participating stores, depending on the brand's terms.",
      },
      {
        q: "Which brands are available on SaverPe?",
        a: "The SaverPe catalog lists 290+ brands across 18 categories including fashion, e-commerce, food & dining, travel, jewellery, electronics, beauty, entertainment and subscriptions. [Browse all brands](/brands) or explore by [category](/categories).",
      },
      {
        q: "Are these genuine brand gift cards?",
        a: "Yes. Every gift card in the SaverPe catalog is issued by the brand or its authorised gift card program partner. The code works exactly like a gift card bought directly from the brand, and brand-specific terms and conditions are listed on every brand page.",
      },
      {
        q: "Is an e-gift card the same as a gift voucher?",
        a: "In everyday use, yes. Brands use the words e-gift card, e-voucher and gift voucher interchangeably. The practical differences — whether you can use the balance more than once, where it can be redeemed and how long it stays valid — are defined by each brand's terms, which we show on the brand page.",
      },
    ],
  },
  {
    id: "gifting",
    title: "Gifting & delivery",
    faqs: [
      {
        q: "How is an e-gift card delivered?",
        a: "E-gift cards are delivered digitally — usually by email, with the code, PIN (where applicable), value, validity and redemption steps. Most brand cards are delivered within minutes; occasionally a brand's system can take up to 24–48 hours.",
      },
      {
        q: "Can I add a personal message?",
        a: "Personal messages are one of the best parts of digital gifting. Write a short note about why you picked that brand — it turns a code into a thoughtful gift. Read our guide on [writing the perfect gift card message](/blog/gift-card-message-ideas).",
      },
      {
        q: "Which gift card should I choose if I don't know their taste?",
        a: "Pick a multi-brand or marketplace card such as Amazon, Flipkart, Myntra or Tata CLiQ — they let the recipient choose from thousands of products. For experiences, food delivery and movie cards are safe crowd-pleasers. Our [gift guides](/blog) break it down by person and budget.",
      },
      {
        q: "Can I send gift cards for a specific occasion?",
        a: "Absolutely. We curate brands for 12 occasions including birthdays, anniversaries, weddings, Diwali, Rakhi, Eid and Mother's Day. See [gift cards by occasion](/occasions).",
      },
    ],
  },
  {
    id: "redemption",
    title: "Redemption & validity",
    faqs: [
      {
        q: "How do I redeem an e-gift card?",
        a: "Open the email, copy the gift card code (and PIN if provided), then apply it at checkout on the brand's website or app, or show it at a participating store. Each brand page lists the exact redemption steps. Our [redemption guide](/blog/how-to-redeem-a-saverpe-gift-card) walks through common scenarios.",
      },
      {
        q: "How long is a gift card valid?",
        a: "Validity is set by the brand and usually ranges from 3 months to 12 months from the date of issue or activation. The validity for every brand is displayed on its brand page and in the delivery email.",
      },
      {
        q: "Can I use a gift card partially?",
        a: "It depends on the brand. Some cards (like many marketplace vouchers) keep the remaining balance for future purchases, while others must be used in a single transaction. Check the \"Terms & conditions\" section on the brand page before gifting.",
      },
      {
        q: "Can I combine multiple gift cards in one purchase?",
        a: "Many brands allow multiple gift cards against one bill — for example, several jewellery and fashion brands accept up to 5 cards per transaction. The exact limit is part of each brand's terms.",
      },
    ],
  },
  {
    id: "support",
    title: "Safety, refunds & support",
    faqs: [
      {
        q: "Are gift cards refundable?",
        a: "Gift cards and e-gift cards are generally non-refundable and cannot be exchanged for cash once issued. Please read our [refund policy](/refund-policy) for details on failed or delayed deliveries.",
      },
      {
        q: "What should I do if a gift card code doesn't work?",
        a: "First, check validity, the correct brand website or store, and whether the card has already been used. If it still doesn't work, email [support@saverpe.com](mailto:support@saverpe.com) with the card details and a screenshot, and we'll coordinate with the brand.",
      },
      {
        q: "How do I keep my gift card safe?",
        a: "Treat the code like cash: don't share it on social media, never give it to anyone who calls or messages asking for it, and redeem or add it to your brand wallet soon after receiving it. Read more in [how to spot gift card scams](/blog/gift-card-scams-how-to-stay-safe).",
      },
      {
        q: "Does SaverPe offer corporate or bulk gift cards?",
        a: "Yes — through [Orbit by SaverPe](https://orbit.saverpe.com), our business platform for employee rewards, client gifting, channel incentives and festive bulk orders.",
      },
    ],
  },
];

export const homeFaqs = [faqGroups[0].faqs[0], faqGroups[0].faqs[1], faqGroups[1].faqs[0], faqGroups[2].faqs[0], faqGroups[2].faqs[1], faqGroups[3].faqs[3]];
