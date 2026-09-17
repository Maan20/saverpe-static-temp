import type { Brand } from "@/lib/brands";

/*
 * Conservative fact extraction from a brand's listed T&Cs. A fact is only asserted when the wording is
 * explicit; otherwise it stays `null` and the UI says "See terms". Used for answer-first copy, key-facts
 * tables, FAQs and structured data on brand pages.
 */

export type YesNo = boolean | null;

export interface BrandFacts {
  online: YesNo;
  inStore: YesNo;
  partialRedemption: YesNo;
  multipleCards: YesNo;
  multipleCardLimit: number | null;
  clubWithOffers: YesNo;
  validOnDiscounted: YesNo;
  pinRequired: boolean;
  storeWaitHours: number | null;
  cashExchange: YesNo;
}

const sentencesAbout = (terms: string[], keyword: RegExp) => terms.filter((t) => keyword.test(t)).join(" ").toLowerCase();

export function brandFacts(brand: Pick<Brand, "terms">): BrandFacts {
  const terms = brand.terms;
  const all = terms.join(" ").toLowerCase();
  const usage = sentencesAbout(terms, /redeem|valid (at|on|in|only)|used (at|on|in)|usable|accepted/i);

  const onlineOnly = /only (through|on) (the )?online|cannot be redeemed at (the )?(physical|brick)|online only|valid only online/.test(all);
  const storeOnly = /(only|exclusively) (at|in) (the )?[\w\s&'-]{0,40}(stores?|outlets?|showrooms?)(?! and| &| or)/.test(usage) && !/online|website|\.com|\.in\b|\bapp\b/.test(usage);

  const online: YesNo = onlineOnly ? true : storeOnly ? false : /online|website|www\.|\.com|\.in\b|\bapp\b|m-site/.test(usage) ? true : null;
  const inStore: YesNo = onlineOnly ? false : /stores?\b|outlets?|showrooms?|restaurants?|counters?/.test(usage) ? true : null;

  let partialRedemption: YesNo = null;
  if (/partial[\w\s-]{0,20}redemption[^.]{0,40}not (allowed|permitted)|not allowed[^.]{0,20}partial|redeemable only once|redeemed only once|one[- ]time redemption|only one[- ]time|in (a )?single transaction|to be redeemed in full|redeemed in full|no partial/.test(all)) partialRedemption = false;
  else if (/partial redemption[^.]{0,20}(is )?(allowed|permitted)|one or more occasions|multiple transactions|remaining balance[^.]{0,60}(can|will|may) be (used|utili[sz]ed|carried)|balance[^.]{0,30}(can|will) be used/.test(all)) partialRedemption = true;

  let multipleCards: YesNo = null;
  let multipleCardLimit: number | null = null;
  const limit = all.match(/(?:up ?to|maximum(?: of)?|max\.?)\s*\(?(\d{1,2})\)?\s*(?:e-?\s?gift\s*)?(?:cards|vouchers)/) ?? all.match(/(?:cards|vouchers)\s*\((?:up ?to|max\.?|maximum)\s*(\d{1,2})\)/);
  if (/only one (e-?\s?gift ?card|gift card|voucher|card)[^.]{0,30}per (invoice|bill|transaction|order)|single (card|voucher) per (bill|transaction)/.test(all)) multipleCards = false;
  else if (limit || /multiple (e-?\s?gift ?cards?|gift ?cards?|vouchers|gift vouchers|cards)[^.]{0,40}(can|may) be (used|redeemed|clubbed)|more than one[^.]{0,30}(can|may) be used/.test(all)) {
    multipleCards = true;
    multipleCardLimit = limit ? Number(limit[1]) : null;
  }

  const clubWithOffers: YesNo = /cannot be clubbed|can ?not be combined|not (be )?clubbed/.test(all) ? false : /can be clubbed with any offer|can be combined with (any )?offer/.test(all) ? true : null;
  const validOnDiscounted: YesNo = /not (applicable|valid)[^.]{0,20}(on )?discounted|not (valid|applicable) on (sale|offer)/.test(all) ? false : null;
  const wait = all.match(/after (?:a |the )?(\d{1,2})[- ]?hours?/);
  const cashExchange: YesNo = /(cannot|can ?not|not) be (exchanged|redeemed|encashed)[^.]{0,20}(for )?cash|no cash (refund|back)|not (redeemable|exchangeable) for cash/.test(all) ? false : null;

  return {
    online,
    inStore,
    partialRedemption,
    multipleCards,
    multipleCardLimit,
    clubWithOffers,
    validOnDiscounted,
    pinRequired: /\bpin\b/.test(all),
    storeWaitHours: wait ? Number(wait[1]) : null,
    cashExchange,
  };
}

export const yesNo = (v: YesNo, yes = "Yes", no = "No", unknown = "See brand terms") => (v === true ? yes : v === false ? no : unknown);

/** Channels phrase, e.g. "online and in-store", or null when the terms don't say. */
export function channelPhrase(f: BrandFacts) {
  if (f.online && f.inStore) return "online and in participating stores";
  if (f.online && f.inStore === false) return "online only";
  if (f.inStore && f.online === false) return "in participating stores only";
  if (f.online) return "online";
  if (f.inStore) return "at participating stores";
  return null;
}
