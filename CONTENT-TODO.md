# SaverPe — content to review before launch

## Illustrative or placeholder content

- [ ] **Testimonials** on the home page (`app/page.tsx`, `testimonials`) are illustrative. Replace with verified customer reviews, or remove them.
- [ ] **About page timeline and founder quote** (`app/about-us/page.tsx`) are generic. Add real milestones, dates and a named founder note.
- [ ] **Hero stats** ("290+ brands", "18 categories", "12 occasions") come from the generated catalog. Re-check them after regenerating brand data.
- [ ] **Buy now flow**: requests go to `/api/buy-request/`; make sure the support team has a process (and SLA) to call buyers back and take payment.
- [ ] **Support hours and response time** ("within one business day, Mon–Sat") in contact pages and FAQs: confirm with the support team.

## Legal (TODO: legal review)

- [ ] `app/privacy-policy/page.tsx`: template copy. Needs legal review (DPDP Act 2023, grievance officer details).
- [ ] `app/terms-of-service/page.tsx`: template copy.
- [ ] `app/refund-policy/page.tsx`: template copy. Confirm refund timelines (7–10 business days) and replacement process.

## Brand catalog (`data/brands.json`, generated)

- [ ] **Logos missing** for about 114 brands: those show `public/brands/default-e-gift-card.png` with the brand name. `// TODO: swap in licensed brand logo asset` markers are in `components/BrandCard.tsx` and `components/BrandCatalog.tsx`.
- [ ] **Descriptions flagged** (`descriptionNeedsReview: true`) where the source text appeared to describe a different brand (for example, the Flipkart entry contained Fastrack copy). These pages show generic copy until fixed in `brands.ts`.
- [ ] **Category and occasion mapping** is keyword-based (`scripts/build-brand-data.py`). Spot-check the brands in each category.
- [ ] **How-to-redeem steps** exist for only a few brands; the others use generic steps. Add brand-specific steps to `brands.ts` where possible.
- [ ] **Brand trademarks**: confirm the partner agreements that allow brand names and logos to be displayed.
- [ ] Discount percentages in `brands.ts` are intentionally **not shown** anywhere. Decide whether to publish savings claims.

## Blog (`content/blog/*.ts`)

- [ ] 105 articles written by the SaverPe editorial team. Have someone review brand-specific claims (voucher exclusions, validity) against current brand terms.
- [ ] Tax and regulatory mentions (RBI PPI rules, employee gift perquisites) should be checked by a professional before publishing.
- [ ] Festival dates are described generally. Add exact dates for the current year where useful.
- [ ] Publication dates are staggered for a natural archive. Adjust if needed.

## Images

- [ ] Run `npm run build && node scripts/list-gemini-prompts.mjs`, generate every image listed in `GEMINI-PROMPTS.md`, save them under `public/images/gemini/` and rebuild.

## Config

- [ ] Set `NEXT_PUBLIC_LEADS_API_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID` and the search console verification tokens in production.
- [ ] Submit `https://saverpe.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.

## SEO additions (review before launch)
- **/editorial-policy** describes a review and fact-check process. Make sure it matches how the content team actually works, and edit it if not.
- **Brand key facts** (where to use, partial redemption, multiple cards, offers) are pulled automatically from each brand's T&Cs by `lib/brand-facts.ts`. Anything the terms don't state shows as "See brand terms". Spot-check the popular brands.
- **/glossary** mentions RBI PPI rules at a high level. Get compliance to review it.
- **IndexNow:** set `INDEXNOW_KEY`, deploy, then run `INDEXNOW_KEY=… node ../scripts/indexnow.mjs https://saverpe.com` after each content release.
- Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
