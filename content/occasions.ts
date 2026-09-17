export interface OccasionContent {
  id: string;
  headline: string;
  blurb: string;
  intro: string[];
  tips: string[];
  image: { prompt: string; alt: string };
  faqs: { q: string; a: string }[];
  guide?: string;
}

export const occasionContent: Record<string, OccasionContent> = {
  birthday: {
    id: "birthday",
    headline: "Birthday gift cards they'll actually use",
    blurb: "From cake-and-candles to shopping sprees — let them pick their favourite birthday treat.",
    intro: [
      "Birthdays are personal, and the best birthday gift is the one that fits the person — their style, their cravings, their wishlist. A brand e-gift card does exactly that: you choose the brand that matches their personality, they choose the exact thing they want.",
      "Whether it's a fashion card for the friend who lives in new drops, a food delivery card for the late-night snacker, or a movie card for a birthday night out, SaverPe lets you send a thoughtful birthday gift in minutes — even if you remembered at 11:58 pm.",
    ],
    tips: [
      "Match the brand to one thing you know they love — coffee, sneakers, books or gaming.",
      "Pair a gift card with a short personal memory in the message for maximum warmth.",
      "For kids and teens, entertainment and toy brands beat generic vouchers.",
      "Schedule the email for midnight or morning so it's the first wish they see.",
    ],
    image: { prompt: "Bright flat-lay of a birthday celebration: pastel cake with candles, confetti, a smartphone showing a colourful digital gift card, yellow and coral accents, soft daylight, Indian home setting, joyful editorial style | 16:9 | 1600x900", alt: "Birthday celebration with a digital gift card on a phone" },
    faqs: [
      { q: "What is the best birthday gift card for someone I don't know well?", a: "Marketplace cards such as Amazon or Flipkart, or a food delivery card, are the safest choices because they work for almost everyone." },
      { q: "Can I send a birthday gift card instantly?", a: "Yes. E-gift cards are delivered digitally, usually within minutes, which makes them ideal last-minute birthday gifts." },
      { q: "What value should a birthday gift card be?", a: "Most people gift between ₹500 and ₹2,000 for friends and colleagues, and more for close family. Choose a value that covers something meaningful at that brand." },
    ],
    guide: "/blog/best-birthday-gift-cards-india",
  },
  anniversary: {
    id: "anniversary",
    headline: "Anniversary gift cards for moments worth celebrating",
    blurb: "Romantic stays, fine dining and jewellery — gifts that become memories.",
    intro: [
      "Anniversaries are about shared time, so the most loved anniversary gifts are experiences: a weekend at a heritage hotel, a candle-lit dinner, a spa afternoon, or a piece of jewellery chosen together.",
      "With hotel, dining, spa and jewellery e-gift cards from brands like Taj, Marriott, ITC Hotels, Tanishq and BlueStone, you can gift the experience and let the couple pick the date and the details.",
    ],
    tips: [
      "Gift an experience card for a couple — hotel stays and dining cards are perfect for parents' anniversaries.",
      "Jewellery cards let your partner pick the exact design instead of guessing sizes.",
      "Add a note about a favourite shared memory or the place you'd love to go next.",
      "Check hotel card validity and blackout dates before planning a specific weekend.",
    ],
    image: { prompt: "Elegant candle-lit dinner table for two at a luxury Indian hotel terrace at dusk, roses, wine glasses, a small envelope with a gold gift card, warm romantic cinematic lighting | 16:9 | 1600x900", alt: "Romantic anniversary dinner table with a gift card envelope" },
    faqs: [
      { q: "What is a good anniversary gift card for parents?", a: "A hotel stay or fine-dining card from brands like Taj, ITC Hotels or Marriott gives them a relaxed experience to enjoy together." },
      { q: "Are jewellery gift cards good anniversary gifts?", a: "Yes — jewellery e-gift cards let your partner choose the design, metal and size they love, avoiding returns and exchanges." },
      { q: "Can hotel gift cards be used on weekends?", a: "It depends on the hotel program. Always check the brand's terms for blackout dates and booking rules." },
    ],
  },
  wedding: {
    id: "wedding",
    headline: "Wedding gift cards that start a new home right",
    blurb: "Skip the duplicate dinner sets — gift furniture, jewellery, honeymoon travel and more.",
    intro: [
      "Indian weddings come with a lot of gifts — and a lot of duplicates. A wedding e-gift card lets the couple pick what their new home actually needs: a sofa from Pepperfry, cookware from Wonderchef, a honeymoon from MakeMyTrip or jewellery from Tanishq.",
      "Wedding gift cards are also easy to carry: no bulky boxes at the venue, no wrapping, and no worry about breakage. Just a beautiful message and a gift that will genuinely be used.",
    ],
    tips: [
      "Home furnishing and kitchen cards are the most practical wedding gifts for newly-weds.",
      "Travel cards make a lovely honeymoon contribution from a group of friends.",
      "Pool together with friends for a higher-value card from a single brand.",
      "Print the gift card details in a card or envelope if you're attending in person.",
    ],
    image: { prompt: "Indian wedding reception gift table with marigold decorations, elegant envelopes and a gold-foil gift card, bride and groom softly blurred in background, festive warm lighting, premium editorial photography | 16:9 | 1600x900", alt: "Wedding gift envelope with marigold decor" },
    faqs: [
      { q: "What is the best wedding gift card?", a: "Home furnishing (Pepperfry, Urban Ladder, Home Centre), jewellery (Tanishq, Kalyan, Malabar) and travel cards (MakeMyTrip, Yatra) are the most popular choices." },
      { q: "Can a group of friends gift one wedding card together?", a: "Yes, pooling money for a single higher-value card is a great way to give a meaningful wedding gift." },
      { q: "How do I give an e-gift card at a wedding?", a: "Send it digitally to the couple and place a printed note with your wishes inside a wedding envelope at the venue." },
    ],
  },
  "house-warming": {
    id: "house-warming",
    headline: "House warming gift cards for a home they love",
    blurb: "Furniture, decor, kitchen and groceries — help them settle in, their way.",
    intro: [
      "Moving into a new home means a long list of things to buy — and very personal taste in decor. A house warming gift card from a furniture, decor, kitchen or grocery brand helps them fill the gaps without guessing their style.",
      "Popular griha pravesh gift cards on SaverPe include Pepperfry, Urban Ladder, Home Centre, Wakefit, IKEA, Wonderchef and BigBasket.",
    ],
    tips: [
      "Grocery and kitchen cards are instantly useful in the first busy weeks after moving.",
      "Decor cards let them choose pieces that match their colour palette.",
      "Pair a card with a small plant or sweets if you're visiting in person.",
    ],
    image: { prompt: "Cosy modern Indian apartment living room with fresh plants, a new sofa, cardboard moving boxes, a toran on the door and a gift card on the coffee table, warm afternoon light | 16:9 | 1600x900", alt: "New home living room with a house warming gift card" },
    faqs: [
      { q: "What should I gift for a griha pravesh?", a: "Home furnishing, kitchen appliance or grocery gift cards are thoughtful, practical griha pravesh gifts." },
      { q: "Is a gift card a polite house warming gift?", a: "Yes. A gift card from a home brand shows you thought about their new space while respecting their personal taste." },
    ],
  },
  "new-year": {
    id: "new-year",
    headline: "New Year gift cards for fresh starts",
    blurb: "Travel, fitness, entertainment and treats to kick off the year.",
    intro: [
      "The New Year is about new plans: a trip, a fitness goal, more nights out with friends. New Year gift cards for travel, fitness, entertainment and dining help people start the year doing what they promised themselves.",
      "Send a card for a getaway, a fitness subscription, or a movie and dinner night — perfect for friends, family and teams.",
    ],
    tips: [
      "Match a gift card to a resolution — fitness, travel, reading or learning.",
      "Entertainment and dining cards make great party-season gifts.",
      "Send on 31 December so it's waiting when the countdown ends.",
    ],
    image: { prompt: "Friends celebrating New Year's Eve on a Mumbai rooftop with fairy lights and sparklers, city skyline, a phone showing a gift card notification, vibrant festive colours, candid photography | 16:9 | 1600x900", alt: "New Year celebration with friends and a gift card notification" },
    faqs: [
      { q: "What are good New Year gift cards?", a: "Travel (MakeMyTrip, Cleartrip), fitness (Cult, HealthifyMe), entertainment (BookMyShow, PVR) and food delivery cards are all popular." },
      { q: "Can I send New Year gift cards to multiple people?", a: "Yes. For larger groups or teams, use Orbit by SaverPe to order in bulk." },
    ],
  },
  diwali: {
    id: "diwali",
    headline: "Diwali gift cards that light up every home",
    blurb: "Gold, electronics, fashion, sweets and home decor — the festival of lights, gifted beautifully.",
    intro: [
      "Diwali is India's biggest gifting season. Instead of another box of dry fruits, a Diwali e-gift card lets family, friends and colleagues shop the festive sales, buy new clothes, pick decor for the home, or invest in gold on Dhanteras.",
      "SaverPe's Diwali picks include marketplace cards (Amazon, Flipkart), fashion (Lifestyle, Westside, Pantaloons), gold and jewellery (Tanishq, Kalyan, Malabar), electronics (Croma, Reliance Digital, Samsung) and sweets (Bikanervala).",
    ],
    tips: [
      "Gold and jewellery cards are a meaningful Dhanteras gift.",
      "Send before the big festive sales so recipients can stretch their gift further.",
      "For extended family, marketplace and fashion cards suit every age.",
      "Ordering for your whole team? Use Orbit for bulk festive gifting.",
    ],
    image: { prompt: "Festive Diwali scene with glowing diyas, rangoli, marigold flowers and a golden gift box holding a digital gift card on a smartphone, rich warm yellow and orange tones, Indian home, cinematic bokeh | 16:9 | 1600x900", alt: "Diwali diyas and rangoli with a digital gift card" },
    faqs: [
      { q: "What are the best Diwali gift cards?", a: "Amazon, Flipkart, Tanishq, Croma, Lifestyle and BigBasket are among the most popular Diwali gift cards." },
      { q: "When should I send Diwali gift cards?", a: "Send them one to two weeks before Diwali so recipients can use them during festive sales and Dhanteras." },
      { q: "Can companies send Diwali gift cards to employees?", a: "Yes — Orbit by SaverPe is built for bulk festive gifting with multiple brands and denominations." },
    ],
    guide: "/blog/diwali-gift-card-ideas",
  },
  eid: {
    id: "eid",
    headline: "Eid gift cards to share the joy",
    blurb: "Festive fashion, feasts and jewellery for Eid al-Fitr and Eid al-Adha.",
    intro: [
      "Eid is celebrated with new clothes, family feasts and generous Eidi. A digital Eid gift card is a modern way to share Eidi — especially for loved ones who live in another city.",
      "Choose festive fashion (Myntra, AJIO, Lifestyle), biryani and dining cards (Behrouz, Barbeque Nation) or jewellery for a special Eid gift.",
    ],
    tips: [
      "Fashion cards before Eid help recipients shop for festive outfits.",
      "Dining cards are perfect for family feasts and get-togethers.",
      "Send e-Eidi to nieces, nephews and cousins who live far away.",
    ],
    image: { prompt: "Eid celebration with a crescent moon lantern, dates, sheer khurma bowl and an elegant green-and-gold envelope with a gift card, warm evening light, festive Indian home | 16:9 | 1600x900", alt: "Eid lantern, sweets and a gift card envelope" },
    faqs: [
      { q: "Can I send Eidi as a gift card?", a: "Yes, an e-gift card is a convenient way to send Eidi digitally to family and friends anywhere in India." },
      { q: "Which gift cards are best for Eid?", a: "Fashion, dining and jewellery cards are the most popular Eid gifts." },
    ],
  },
  rakhi: {
    id: "rakhi",
    headline: "Rakhi gift cards for your sibling",
    blurb: "Beauty, fashion, jewellery and treats — the easiest way to say thank you, sis (or bro).",
    intro: [
      "Raksha Bandhan is the one day you can't forget a gift — and siblings are the hardest people to shop for. A Rakhi e-gift card from their favourite beauty, fashion or jewellery brand lets them pick exactly what they want.",
      "Living in different cities? Send your Rakhi gift digitally, in minutes, with a message only a sibling would understand.",
    ],
    tips: [
      "Beauty cards (Nykaa, Mamaearth, The Body Shop) are top picks for sisters.",
      "Gaming, sneakers and gadget cards are loved by younger brothers.",
      "Add an inside joke in the message — it matters more than the amount.",
    ],
    image: { prompt: "Raksha Bandhan scene: sister tying a colourful rakhi on brother's wrist, brother handing her a phone showing a beauty brand gift card, bright festive colours, happy candid moment, Indian home | 16:9 | 1600x900", alt: "Siblings celebrating Rakhi with a gift card" },
    faqs: [
      { q: "What is a good Rakhi gift for a sister?", a: "Beauty, fashion and jewellery gift cards such as Nykaa, Myntra and Giva are the most loved Rakhi gifts for sisters." },
      { q: "Can I send a Rakhi gift to another city?", a: "Yes — e-gift cards are delivered digitally so distance doesn't matter." },
    ],
  },
  "valentines-day": {
    id: "valentines-day",
    headline: "Valentine's Day gift cards for your favourite person",
    blurb: "Date nights, jewellery, beauty and staycations — romance, made easy.",
    intro: [
      "Valentine's Day gifts work best when they create a moment. A dinner reservation, a movie night, a staycation or a piece of jewellery they choose themselves — all can be gifted instantly with a Valentine's Day e-gift card.",
    ],
    tips: [
      "Plan a date around the card: movie tickets plus dinner is a classic.",
      "Jewellery cards avoid the guesswork on style and size.",
      "A spa or salon card is a thoughtful self-care gift.",
    ],
    image: { prompt: "Romantic Valentine's Day flat-lay with red roses, heart-shaped chocolates, two movie tickets and a pink gift card on a smartphone, soft pastel pink background, dreamy lighting | 16:9 | 1600x900", alt: "Valentine's Day roses and gift card" },
    faqs: [
      { q: "What are romantic gift card ideas?", a: "Hotel staycations, fine dining, movie tickets, jewellery and spa cards are the most romantic gift card ideas." },
    ],
  },
  "mothers-day": {
    id: "mothers-day",
    headline: "Mother's Day gift cards to pamper Mom",
    blurb: "Self-care, sarees, kitchen upgrades and wellness — because she deserves a day off.",
    intro: [
      "Mothers rarely buy things for themselves. A Mother's Day gift card from a beauty, spa, ethnic wear or wellness brand gives her permission to indulge — on her own terms.",
    ],
    tips: [
      "Spa and salon cards are the ultimate 'take a break' gift.",
      "Ethnic wear cards like Taneira or Fabindia let her pick a new saree.",
      "Health check-up and wellness cards show you care about her wellbeing.",
    ],
    image: { prompt: "Smiling Indian mother relaxing with a cup of chai in a sunlit living room while her daughter shows her a gift card on a tablet, flowers on the table, warm soft tones, heartfelt candid moment | 16:9 | 1600x900", alt: "Mother receiving a Mother's Day gift card from her daughter" },
    faqs: [
      { q: "What's the best Mother's Day gift card?", a: "Spa, beauty, ethnic fashion and wellness cards are the most appreciated Mother's Day gifts." },
    ],
  },
  "fathers-day": {
    id: "fathers-day",
    headline: "Father's Day gift cards Dad will love",
    blurb: "Watches, formal wear, gadgets and coffee — upgrades he'd never buy himself.",
    intro: [
      "Dads are famously hard to shop for. A Father's Day e-gift card from a watch, menswear, gadget or sports brand lets him pick the upgrade he's been quietly eyeing.",
    ],
    tips: [
      "Watch and accessory brands like Titan and Fastrack are classic choices.",
      "Formal wear cards (Louis Philippe, Van Heusen) are perfect for the office-goer.",
      "Sports and outdoor cards (Decathlon, Wildcraft) suit active dads.",
    ],
    image: { prompt: "Father and son laughing together at a breakfast table, father opening an email with a watch brand gift card on his phone, morning sunlight, warm family moment, modern Indian home | 16:9 | 1600x900", alt: "Father receiving a Father's Day gift card" },
    faqs: [
      { q: "What gift card should I get my dad?", a: "Titan, Louis Philippe, Decathlon and Croma are popular Father's Day gift cards." },
    ],
  },
  easter: {
    id: "easter",
    headline: "Easter gift cards for sweet celebrations",
    blurb: "Toys, treats and family brunches for Easter Sunday.",
    intro: [
      "Easter is a joyful family celebration with brunches, treats and gifts for the little ones. Easter e-gift cards for toys, kids' fashion, desserts and cafés make it easy to spread the cheer.",
    ],
    tips: [
      "Toy and kids' brands like Hamleys and FirstCry are perfect for children.",
      "Café and dessert cards suit a family Easter brunch.",
    ],
    image: { prompt: "Pastel Easter brunch table with painted eggs, spring flowers, pastries and a small gift card tag, soft morning light, cheerful family gathering, airy editorial style | 16:9 | 1600x900", alt: "Easter brunch table with painted eggs and a gift card" },
    faqs: [
      { q: "What are good Easter gift cards for kids?", a: "Toy stores like Hamleys and kids' fashion brands like FirstCry and MiniKlub are great Easter gifts for children." },
    ],
  },
};
