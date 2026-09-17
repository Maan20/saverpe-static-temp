import type { Extension } from "./extensions";

// "Key takeaways" summaries + additional FAQs for every SaverPe article (answer-first content for search and LLMs).
const k = (takeaways: string[], faqs: [string, string][]): Extension => ({
  body: `## Key takeaways\n\n${takeaways.map((t) => `- ${t}`).join("\n")}`,
  faqs: faqs.map(([q, a]) => ({ q, a })),
});

export const extensionsD: Record<string, Extension> = {
  "how-digital-gift-cards-work": k(
    ["An e-gift card is prepaid value for a specific brand, delivered as a code by email.", "Validity, partial redemption and where the card works are set by each brand.", "Some cards are fixed denominations; others allow any value in a range.", "Treat codes like cash and never share them with anyone asking for payment."],
    [
      ["Do I need to print an e-gift card?", "No. Most brands accept the code digitally at checkout or on your phone in store. A few stores may ask to see the email."],
      ["Can someone else use my e-gift card?", "Usually yes, if they have the code and PIN — which is why you should keep codes private and add them to your account early."],
      ["Can I send an e-gift card to someone abroad?", "You can send the email anywhere, but most Indian brand cards can only be redeemed with the brand's Indian website, app or stores. Check the terms first."],
    ],
  ),
  "how-to-redeem-a-saverpe-gift-card": k(
    ["Find the delivery email and note the code, PIN and validity.", "Check whether the card works online, in-app, in-store or all three.", "Marketplace and food apps usually need the card added to your account.", "For in-store use, show the code at billing and pay any difference separately.", "Contact support with the brand, last four digits and a screenshot if a code fails."],
    [
      ["Can I use a SaverPe gift card on a brand's app?", "Yes, if the brand accepts gift cards in its app. Many food, fashion and marketplace apps let you add the card to your wallet."],
      ["Does a gift card work during sales?", "Usually yes, unless the brand's terms exclude sale items or specific offers. Check the brand's exclusions before shopping."],
      ["What if I lose the gift card email?", "Search your inbox for the brand name. If you still can't find it, ask the sender to contact support with order details."],
    ],
  ),
  "gift-card-scams-how-to-stay-safe": k(
    ["Nobody legitimate asks you to pay fines, fees or bills with gift cards.", "Urgency, secrecy and requests for code photos are major red flags.", "Verify any 'boss' or 'bank' request through a known number.", "Report fraud quickly on cybercrime.gov.in or helpline 1930 and contact the issuer."],
    [
      ["Is it safe to buy discounted gift cards on social media?", "It's risky. Heavily discounted cards from unknown sellers are often fake, used or stolen. Buy from brands or trusted platforms."],
      ["Should I share my gift card code with customer care?", "Only through official channels when you initiated contact, and never share OTPs, passwords or full codes with unsolicited callers."],
      ["Can scammers use a photo of my gift card?", "Yes. A clear photo of the code and PIN is enough to redeem the card, so never post or send such photos."],
    ],
  ),
  "gift-card-validity-and-expiry-explained": k(
    ["Validity is set by each brand and commonly ranges from 3 to 12 months.", "Check whether validity counts from issue or activation.", "Expired balances usually cannot be restored.", "Add cards to your account early and set reminders before expiry."],
    [
      ["Where can I see my gift card's expiry date?", "In the delivery email and on the brand's page on SaverPe. Many brand apps also show expiry once the card is added."],
      ["Do unused balances roll over after expiry?", "Generally no. Once the validity period ends, any remaining balance usually lapses."],
      ["Should I choose a longer validity card for someone who rarely shops?", "Yes. For infrequent shoppers or big planned purchases, brands with longer validity reduce the risk of the gift going unused."],
    ],
  ),
  "gift-cards-vs-cash-gifting": k(
    ["Cash is maximally flexible and fits rituals like shagun.", "Gift cards feel more personal and are more likely to be spent on a treat.", "Gift cards suit colleagues, friends and long-distance gifting.", "A small cash shagun plus a gift card combines tradition and thoughtfulness."],
    [
      ["Is giving a gift card seen as lazy?", "Not when you choose a brand that matches the person and add a personal message. Many people prefer gift cards to guessed gifts."],
      ["Which is better for kids — cash or gift cards?", "For young children, parents often prefer toy or book gift cards; for teens, gaming, fashion or food cards are popular."],
      ["Can I give both cash and a gift card?", "Yes. A symbolic cash amount with a gift card is a common and well-received combination for weddings and festivals."],
    ],
  ),
  "open-loop-vs-closed-loop-gift-cards": k(
    ["Closed-loop cards work only with one brand and feel most personal.", "Semi-closed or multi-brand cards work across a merchant network.", "Marketplace vouchers work across huge catalogs and suit almost anyone.", "Pick the type based on how well you know the recipient's preferences."],
    [
      ["Which type of gift card is best for a colleague I don't know well?", "A marketplace card or a broadly useful food delivery card is usually the safest choice."],
      ["Are marketplace gift cards single-use?", "Most marketplace vouchers are added to your account balance and can be used across multiple orders until expiry, subject to terms."],
      ["Can a brand gift card be used at a sister brand?", "Only if the brand's terms say so. Group companies often issue separate cards for each brand."],
    ],
  ),
  "how-to-check-gift-card-balance": k(
    ["Check balances in your brand account wallet whenever possible.", "Use official balance pages reached from the brand's homepage.", "Ask the cashier to confirm balance before in-store billing.", "Avoid third-party balance checker sites that ask for code and PIN."],
    [
      ["Why doesn't my refund show on my gift card yet?", "Refunds to gift cards or wallets can take several days depending on the brand's return process."],
      ["Can I check a gift card balance by calling the brand?", "Some brands offer support lines. Only call numbers listed on the brand's official website."],
      ["Does checking a balance use up the card?", "No. Checking the balance doesn't redeem or reduce the value."],
    ],
  ),
  "can-you-use-multiple-gift-cards-in-one-order": k(
    ["Many brands allow multiple gift cards on one bill — often up to five for retail and jewellery brands.", "Marketplace wallets combine balances automatically.", "Use single-use cards on purchases close to their value.", "Group gifters should choose the same brand so cards can be combined."],
    [
      ["Can I combine gift cards from different brands?", "No. Each card can only be used with its own brand (or its defined merchant network)."],
      ["What if my cards have different expiry dates?", "Use the card expiring first, and combine it with longer-validity cards where the brand allows multiple cards per bill."],
      ["Can I combine a gift card with a bank offer?", "Often yes, but some bank offers require paying a minimum amount with a specific card. Check the offer terms at checkout."],
    ],
  ),
  "e-gift-card-vs-physical-gift-card": k(
    ["E-gift cards arrive in minutes and can't be physically lost.", "They're greener — no plastic, packaging or courier.", "Physical cards suit in-person ceremonies where something tangible matters.", "A printed note with a digital card gives you both speed and presentation."],
    [
      ["Are e-gift cards accepted in physical stores?", "Many brands accept e-gift card codes in store. The brand's terms list whether in-store redemption is allowed."],
      ["Can I convert a physical gift card into a digital one?", "Some brands let you add physical card numbers to your online account. Check the brand's gift card page."],
      ["Which is safer for elderly recipients?", "E-gift cards can be safer if a family member helps add them to an account; physical cards can be lost or misplaced."],
    ],
  ),
  "what-happens-to-unused-gift-card-balance": k(
    ["Multi-use cards keep leftover balance until expiry.", "Single-use cards usually forfeit unspent value after one bill.", "Small balances are perfect for essentials, add-ons or small gifts.", "Gifters can reduce waste by choosing values that match typical purchases."],
    [
      ["Can I transfer my remaining balance to someone else?", "Only if the card hasn't been locked to your account and the brand's terms allow it. Many cards can't be transferred once added."],
      ["Can leftover balance be refunded to my bank?", "Generally no. Gift card balances can't be cashed out."],
      ["How do I avoid forgetting small balances?", "Keep a simple tracker of cards, balances and expiry dates, and review it monthly."],
    ],
  ),
  "best-birthday-gift-cards-india": k(
    ["Match the brand to one clear interest: fashion, food, movies, beauty, travel or gaming.", "₹500–₹2,000 suits friends and colleagues; close family often receive more.", "Marketplace cards are the safest choice when you're unsure.", "A specific, personal message makes a birthday gift card memorable."],
    [
      ["What's a good birthday gift card for a 10-year-old?", "Toy, book or entertainment brands such as Hamleys, FirstCry or BookMyShow are popular choices for children."],
      ["What should I gift a colleague on their birthday?", "Coffee, food delivery or marketplace cards between ₹500 and ₹1,000 are thoughtful and appropriate."],
      ["Can I schedule a birthday gift card in advance?", "Scheduling depends on the platform. If scheduling isn't available, set a reminder and send it at the right moment."],
    ],
  ),
  "gift-cards-for-him": k(
    ["Think about what he uses daily but rarely replaces — wallet, watch, shoes, bag.", "Watch, menswear, gadget and sports brands are consistent favourites.", "Experience cards like travel or dining suit men who have everything.", "Budget by relationship and add a specific, personal note."],
    [
      ["What gift card should I get my boyfriend?", "Pick his clear interest — sneakers (Puma), style (Levi's), movies (BookMyShow) or coffee (Starbucks) — and add a personal note."],
      ["What is a good gift card for my father-in-law?", "Classic choices include Titan watches, Louis Philippe formal wear or a family dinner experience."],
      ["Are gaming gift cards good gifts for adult men?", "Yes, if he plays regularly. Confirm the platform first."],
    ],
  ),
  "gift-cards-for-her": k(
    ["Choose based on what she already loves, not stereotypes.", "Beauty, jewellery, fashion, self-care and experiences are popular categories.", "Jewellery cards avoid guessing designs and sizes.", "Check that salons or stores are available near her."],
    [
      ["What's a thoughtful gift card for my wife's birthday?", "A jewellery card from Tanishq or BlueStone, a spa day, or a hotel staycation are popular, meaningful choices."],
      ["What gift card is good for a female colleague?", "Coffee, The Body Shop, Amazon or food delivery cards are appropriate and widely appreciated."],
      ["Is a beauty gift card a good idea if I don't know her skin type?", "Yes — that's exactly why gift cards work. She can choose products suited to her."],
    ],
  ),
  "gift-cards-for-parents": k(
    ["Parents appreciate comfort, health and experiences they wouldn't buy themselves.", "Hotel stays, health check-ups and kitchen upgrades are top choices.", "Help them redeem — booking or adding the card together makes it easier.", "Siblings can pool for a bigger experience."],
    [
      ["What gift card is good for parents who don't shop online?", "Choose brands with nearby stores, like jewellery, fashion or restaurants, and help them redeem in person."],
      ["What's a meaningful anniversary gift card for parents?", "A hotel stay or fine dining experience lets them celebrate together."],
      ["Are health check-up gift cards appropriate?", "Yes, when framed with care. Many families see them as a loving, practical gift."],
    ],
  ),
  "gift-cards-for-teenagers": k(
    ["Teens value choice and relevance to their social world.", "Gaming, fashion, sneakers, food and beauty are top picks.", "Confirm gaming platform and region before buying game credits.", "Use gift cards to teach budgeting and online safety."],
    [
      ["How much should I spend on a gift card for a teenager?", "₹500–₹2,000 is typical depending on your relationship; close family may spend more for milestones."],
      ["Are gift cards good rewards for exam results?", "Yes — they let teens choose their own reward while celebrating their effort."],
      ["Which gift card is safest for a 13-year-old?", "Brands with parent-accessible accounts, like fashion or food platforms used by the family, are easiest to supervise."],
    ],
  ),
  "gift-cards-for-foodies": k(
    ["Food delivery cards offer the widest restaurant choice.", "Café, pizza, biryani and dining brands suit specific cravings.", "Food cards are ideal care gifts for busy, unwell or new-parent friends.", "Check the brand delivers or operates in the recipient's city."],
    [
      ["Is a Swiggy or Zomato gift card better?", "Choose the app the recipient already uses most; both cover large restaurant networks."],
      ["What food gift card works for vegetarians?", "Delivery platforms and many restaurant brands offer extensive vegetarian options; choose a platform-level card for maximum choice."],
      ["Can food gift cards be used for dining in?", "Some restaurant-brand cards work for dine-in; delivery platform cards typically work within their apps. Check the terms."],
    ],
  ),
  "gift-cards-for-travel-lovers": k(
    ["Online travel platform cards cover flights, hotels and holidays.", "Airline and hotel cards suit specific trips or milestone celebrations.", "Check which services each travel card covers and any blackout dates.", "Luggage and outdoor gear cards make great companions to travel gifts."],
    [
      ["Can a travel gift card be used for international flights?", "It depends on the brand and card terms. Some travel cards cover international bookings, others don't."],
      ["What if the recipient's trip is months away?", "Choose brands with longer validity or redeem the card early by booking in advance."],
      ["Is a hotel gift card a good honeymoon gift?", "Yes — especially from friends pooling together for a special stay."],
    ],
  ),
  "gift-cards-for-gamers": k(
    ["Ask which platform and game they play before buying.", "Steam suits PC gamers; game-specific currencies suit dedicated players.", "Account region matters for gaming credits.", "Teach young gamers never to share codes in game chats."],
    [
      ["Can a Steam gift card be used for in-game purchases?", "Steam wallet funds can be used for games and supported in-game items sold through Steam."],
      ["What if I buy the wrong gaming gift card?", "Gaming codes are usually non-refundable once issued, so confirm the platform before gifting."],
      ["Are gaming gift cards good for parents to control spending?", "Yes. A fixed-value card sets a clear budget compared with linking a payment method."],
    ],
  ),
  "gift-cards-for-fitness-enthusiasts": k(
    ["Sports gear, shoes, classes, nutrition and recovery are all great categories.", "Gift cards let people choose the right fit for shoes and equipment.", "Frame fitness gifts positively and avoid weight-related messages.", "Pair gifts with shared goals for extra motivation."],
    [
      ["What's the best gift card for a runner?", "Running shoe and sportswear brands like Puma, Skechers or Decathlon let them choose the right fit."],
      ["Is a gym or fitness class gift card appropriate for a friend?", "Yes, if they've expressed interest in fitness. Keep the message encouraging and pressure-free."],
      ["What should I gift someone recovering from a race?", "A spa or massage gift card is a thoughtful recovery treat."],
    ],
  ),
  "gift-cards-for-book-lovers-and-students": k(
    ["Students value practical cards for books, tech, food and commute.", "Bookstore and marketplace cards suit readers.", "Moving to a new city? Groceries and ride cards help most.", "Pair a book card with a personal reading recommendation."],
    [
      ["Can marketplace gift cards be used for e-books?", "Some marketplace vouchers exclude digital content like e-books. Check exclusions before gifting."],
      ["What's a good gift card for a hostel student?", "Food delivery, grocery and ride cards are practical and quickly used."],
      ["What should I gift a student going abroad?", "Luggage, formal wear and electronics accessories cards help with the move."],
    ],
  ),
  "last-minute-gift-ideas-e-gift-cards": k(
    ["E-gift cards arrive in minutes, making them perfect last-minute gifts.", "Pick a brand tied to one clear interest to avoid feeling rushed.", "Specific messages and good timing make gifts feel planned.", "Calendar reminders prevent future last-minute panic."],
    [
      ["What's the fastest gift I can send tonight?", "An e-gift card from a brand they love, sent digitally with a heartfelt message."],
      ["How do I make a late gift feel sincere?", "Acknowledge it warmly, be specific about why you chose the brand, and follow up with a call or plan to meet."],
      ["Are e-gift cards good for forgotten anniversaries?", "Yes — an experience card like dinner or a staycation, paired with a thoughtful note, works well."],
    ],
  ),
  "gift-cards-under-1000": k(
    ["Choose brands where your budget buys a complete treat.", "Cafés, quick meals, movies and small beauty products work well under ₹1,000.", "Specific messages make small gifts feel generous.", "Check minimum denominations before choosing a brand."],
    [
      ["Is ₹500 too little for a gift card?", "Not at all for colleagues, neighbours or Secret Santa — especially for coffee, dessert or movie brands."],
      ["What's a good ₹1,000 gift card for a friend?", "Food delivery, a movie outing or a beauty treat are popular choices."],
      ["Can I combine two small gift cards?", "Yes — pairing a movie card with a food card makes a great experience bundle."],
    ],
  ),
  "luxury-gift-cards-india": k(
    ["Luxury gift cards suit milestones, close relationships and formal recognition.", "Global fashion, fine jewellery and five-star hotels are top categories.", "Presentation matters: pair digital cards with elegant physical notes.", "Check corporate policies before sending luxury gifts to clients."],
    [
      ["What's a luxury gift card for a 50th birthday?", "A five-star hotel stay, fine jewellery or an international designer brand card makes a memorable milestone gift."],
      ["Are luxury brand gift cards usable online?", "Some are; many premium brands primarily accept cards in select stores. Check participating locations."],
      ["How do I make a luxury gift card feel special?", "Use a premium envelope, a handwritten note and deliver it in person if you can."],
    ],
  ),
  "gift-cards-for-new-parents-baby-shower": k(
    ["New parents value practical help: baby essentials, groceries and meals.", "Gift cards avoid wrong clothing sizes.", "Don't forget gifts for the parents' own comfort and wellbeing.", "Check family customs around baby showers and when to give gifts."],
    [
      ["What's the most useful baby shower gift card?", "Baby essentials brands like FirstCry or Mothercare, plus a food delivery card for busy weeks."],
      ["Should I gift before or after the baby arrives?", "Some families prefer gifts after the birth. Ask discreetly or follow the family's customs."],
      ["What should colleagues gift an expecting teammate?", "A pooled baby essentials card with a group message is thoughtful and inclusive."],
    ],
  ),
  "diwali-gift-card-ideas": k(
    ["Send Diwali gift cards one to two weeks early for festive sales and Dhanteras.", "Gold coin cards suit Dhanteras; marketplace and fashion cards suit most people.", "Plan by relationship and budget to manage long gift lists.", "Include staff and helpers with practical grocery or fashion cards."],
    [
      ["What's a good Diwali gift card for employees?", "Marketplace, sweets, fashion and grocery cards are popular. Companies can use Orbit by SaverPe for bulk orders."],
      ["Are gold coin gift cards good for Diwali?", "Yes, especially for Dhanteras. Check whether the card is for coins or jewellery."],
      ["What should I gift my house help for Diwali?", "Practical cards for groceries, clothing or marketplace shopping are appreciated, along with sweets and a sincere thank-you."],
    ],
  ),
  "top-10-gift-card-ideas-for-festive-season": k(
    ["Ten versatile brands cover shopping, fashion, gold, food, gadgets, movies, home, beauty and travel.", "India's festive season spans months — spread your gifting budget.", "Regional festivals deserve locally relevant gifts.", "Encourage recipients to redeem during festive sales but before expiry."],
    [
      ["Which gift card works for every festival?", "Marketplace cards like Amazon or Flipkart suit almost any festival and recipient."],
      ["What's a good Navratri gift card?", "Fashion and beauty cards are popular for Navratri outfits and celebrations."],
      ["Should festive gift cards be sent on the festival day?", "Fashion and shopping cards work best a week or two early; greeting-style gifts can be sent on the day."],
    ],
  ),
  "raksha-bandhan-gift-cards-for-sister": k(
    ["Beauty, fashion and jewellery cards are top Rakhi picks for sisters.", "Sneakers, gadgets and gaming cards suit brothers.", "Digital delivery makes long-distance Rakhi gifting easy.", "Inside jokes and memories make Rakhi messages special."],
    [
      ["What's a good Rakhi gift card for a younger sister?", "Beauty starter products from Nykaa or Mamaearth, or fashion from Myntra, are popular with teens and young adults."],
      ["What gift card should a sister give a brother?", "Sneakers, gaming credits, gadgets or food delivery cards are well loved."],
      ["How much do people spend on Rakhi gifts?", "It varies widely; ₹500–₹3,000 is common, with more for milestone or jewellery gifts."],
    ],
  ),
  "wedding-gift-cards-guide": k(
    ["Home setup and honeymoon cards are the most useful wedding gifts.", "Jewellery and ethnic wear cards suit close family.", "Pool with friends for a substantial, memorable gift.", "Present digital cards with a printed note in a wedding envelope."],
    [
      ["How much should I give as a wedding gift card?", "Typical ranges are ₹2,000–₹5,000 for colleagues, ₹3,000–₹10,000 for friends and more for close family."],
      ["Can I gift a wedding card after the wedding?", "Yes. Many guests send gifts shortly after, especially for destination or small weddings."],
      ["Is it okay to give a gift card for a second wedding?", "Yes. Experience cards like dining or travel often suit couples who already have established homes."],
    ],
  ),
  "anniversary-gift-card-ideas": k(
    ["Experience cards — stays, dining, spa — make the most memorable anniversary gifts.", "Jewellery cards let partners choose designs they love.", "Milestone years deserve bigger, shared experiences.", "Offer to handle bookings for parents' anniversary gifts."],
    [
      ["What's a good first anniversary gift card?", "A weekend staycation or a dinner at a special restaurant recreates honeymoon memories."],
      ["What should I gift my parents on their 25th anniversary?", "A luxury hotel stay, silver jewellery or a family dinner experience fits the silver jubilee."],
      ["Can I gift an anniversary card to a couple of friends?", "Yes — movie and dinner cards are fun, appropriate choices."],
    ],
  ),
  "housewarming-gift-cards-griha-pravesh": k(
    ["Furniture, decor, kitchen and grocery cards help most after moving.", "The first 30 days are about essentials — groceries, meals and bedding.", "Bring a plant or sweets in person with a digital gift.", "Respect family traditions for griha pravesh ceremonies."],
    [
      ["What's a good housewarming gift card for renters?", "Storage, bedding, kitchen and grocery cards are practical for rented homes."],
      ["How much should I spend on a housewarming gift card?", "₹500–₹1,500 for neighbours, ₹1,500–₹5,000 for friends and more for close family."],
      ["Is a gift card appropriate for a griha pravesh puja?", "Yes, especially home decor or kitchen cards, often accompanied by sweets or flowers."],
    ],
  ),
  "eid-gift-ideas-digital-eidi": k(
    ["Digital Eidi makes Eid gifting easy for family in other cities.", "Fashion cards before Eid help recipients shop festive outfits.", "Dining cards suit family feasts; toy cards suit children.", "Keep Eidi values fair among children of similar ages."],
    [
      ["How do I send Eidi digitally?", "Choose an e-gift card, add a warm Eid Mubarak message and send it to the recipient's email."],
      ["What Eid gift card is good for kids?", "Toy, book or entertainment brands like Hamleys or BookMyShow are popular."],
      ["When should I send Eid gift cards?", "Fashion cards a few days before Eid; greeting gifts on Chand Raat or Eid morning."],
    ],
  ),
  "valentines-day-gift-cards": k(
    ["Valentine's gift cards work best when they create a shared moment.", "Movie, dinner and staycation cards are romantic, flexible choices.", "Keep gifts light for new relationships.", "Self-care and Galentine's gifts celebrate friendship too."],
    [
      ["What's a romantic gift card idea for a new relationship?", "A movie and dinner card combination is thoughtful without being overwhelming."],
      ["Are jewellery gift cards romantic?", "Yes — they let your partner choose a piece they truly love."],
      ["What can I gift a friend for Galentine's Day?", "Coffee, beauty or dessert cards make fun, affectionate gifts."],
    ],
  ),
  "mothers-day-gift-card-ideas": k(
    ["Spa, salon and self-care cards give moms a real break.", "Ethnic wear and jewellery cards let her choose something special.", "Health and wellness cards show care for her wellbeing.", "Plan the day around the gift so she actually gets to enjoy it."],
    [
      ["What's a good Mother's Day gift card for a mother-in-law?", "Fabindia, Taneira, jewellery or a family dinner experience are respectful and warm choices."],
      ["What should I gift a new mom on Mother's Day?", "A food delivery card, a self-care treat and a promise of babysitting time."],
      ["How do I help Mom actually use her gift card?", "Book the appointment together or help add the card to her app."],
    ],
  ),
  "fathers-day-gift-card-ideas": k(
    ["Watches, formal wear, gadgets and outdoor gear are Father's Day favourites.", "Think about what Dad uses daily but never replaces.", "Experiences that create time together are especially meaningful.", "Remember grandfathers, uncles and father figures too."],
    [
      ["What's a good Father's Day gift card for a dad who has everything?", "An experience like a family dinner or a weekend getaway."],
      ["What gift card suits a retired father?", "Hobbies, travel, comfortable footwear or health check-ups are thoughtful choices."],
      ["What's a budget-friendly Father's Day gift card?", "Coffee beans, a movie outing or grooming essentials under ₹1,500."],
    ],
  ),
  "new-year-gift-cards": k(
    ["Match New Year gift cards to resolutions — fitness, travel, reading or self-care.", "Party and dining cards suit New Year's Eve celebrations.", "Accountability gifts ('I'll join you') boost resolution success.", "Businesses often send New Year cards to clients and teams."],
    [
      ["What's a good New Year gift card for a friend?", "A fitness, travel or entertainment card aligned with their plans for the year."],
      ["Are New Year gift cards good for clients?", "Yes — premium dining or gourmet cards with a year-in-review note, within gifting policies."],
      ["When should I send New Year gift cards?", "In the last week of December or on New Year's morning."],
    ],
  ),
  "christmas-gift-cards-secret-santa": k(
    ["Set a clear budget for Secret Santa — ₹500 or ₹1,000 works well.", "Favourite-category forms help givers pick relevant cards.", "Inclusive year-end gifting works for diverse teams.", "Toy and bookstore cards are great for children's Christmas gifts."],
    [
      ["What's the best Secret Santa gift card under ₹500?", "Coffee, dessert or quick-meal cards are reliable choices."],
      ["How do I run Secret Santa for a remote team?", "Use an online name draw, collect favourite categories, send e-gift cards and reveal on a video call."],
      ["Is a gift card okay for Christmas for someone who doesn't celebrate?", "Frame it as a year-end or holiday gift and choose a neutral brand."],
    ],
  ),
  "teachers-day-gift-ideas": k(
    ["Teachers' Day gifts should be modest, meaningful and policy-compliant.", "Bookstore, coffee and stationery-related cards are popular.", "Class groups can pool for one thoughtful gift.", "A handwritten note from the student matters most."],
    [
      ["How much should parents spend on a Teachers' Day gift?", "Keep it modest; pooled class gifts avoid pressure on individual families."],
      ["Can students gift teachers individually?", "Check school policy first; many schools prefer group gifts or cards only."],
      ["What's a good gift card for a college professor?", "A bookstore card with a thank-you note is appropriate and thoughtful."],
    ],
  ),
  "graduation-gift-cards": k(
    ["Graduation gifts should support the next step — job, studies or relocation.", "Workwear, laptops, bags and travel cards are top choices.", "Moving cities? Furniture, grocery and ride cards help.", "Acknowledge the effort behind the achievement in your message."],
    [
      ["What's a good graduation gift card for a first job?", "Formal wear from Louis Philippe or Van Heusen, a professional bag, or a watch."],
      ["What should I gift a graduate going abroad?", "Luggage, travel and electronics accessories cards help with relocation."],
      ["How much should I spend on a graduation gift card?", "₹500–₹1,500 for friends, ₹1,500–₹5,000 for relatives and more for your own child."],
    ],
  ),
  "gift-card-message-ideas": k(
    ["Use the formula: warm wish + why this brand + a nudge to treat themselves.", "Specific details make any template personal.", "Don't mention the gift amount.", "Keep messages to two or three sentences."],
    [
      ["Should I mention the gift card value in the message?", "No. Let the recipient discover it privately; focus the message on them."],
      ["What do I write for a gift card to my boss?", "Keep it respectful and grateful, for example: \"Thank you for your guidance this year. Wishing you a wonderful festive season.\""],
      ["Can I write gift card messages in Hindi or regional languages?", "Absolutely. A message in the recipient's preferred language can feel even more personal."],
    ],
  ),
  "how-much-to-spend-on-a-gift-card": k(
    ["Choose a value that buys a complete treat at the chosen brand.", "Spend in proportion to closeness and community norms.", "Group gifts let everyone contribute to something meaningful.", "An annual gifting budget prevents month-to-month stress."],
    [
      ["Is it rude to give a small gift card?", "No. A thoughtful small gift card with a sincere message is always appropriate."],
      ["How much do people usually give for weddings?", "It varies by closeness and region; friends often give ₹3,000–₹10,000 and close family more."],
      ["Should I match the value of a gift I received?", "Not necessarily. Give what's comfortable and thoughtful."],
    ],
  ),
  "gift-card-etiquette-india": k(
    ["Gift cards are polite when chosen thoughtfully.", "Add a message, check validity and present nicely.", "Don't mention amounts or regift nearly expired cards.", "Respect traditions, including cash shagun at ceremonies."],
    [
      ["Is it okay to ask for a gift card as a gift?", "Among close friends and family, many people happily share gift card preferences, especially for weddings or housewarmings."],
      ["How should I thank someone for a gift card?", "Thank them promptly and mention what you plan to buy."],
      ["Can I regift a gift card?", "Yes, if it's unused, has plenty of validity and suits the new recipient."],
    ],
  ),
  "how-to-make-a-gift-card-feel-personal": k(
    ["Connect the brand to a shared memory or plan.", "Pair the card with a small related item.", "Creative presentation — DIY envelopes, photos, scavenger hunts — adds delight.", "Timing and a specific message make a big difference."],
    [
      ["What can I pair with a coffee gift card?", "A mug, a bag of beans or a handwritten note about your favourite café memory."],
      ["How do I present a digital gift card in person?", "Print a card or note saying 'Check your inbox' and hand it over in an envelope."],
      ["Is a scavenger hunt a good idea for adults?", "Yes, especially for partners and close friends — it turns a gift card into an experience."],
    ],
  ),
  "group-gifting-with-gift-cards": k(
    ["Appoint one organiser and decide the brand early.", "Keep contributions optional and private.", "Collect via UPI with a clear deadline.", "Buy one card or several from the same brand, and share a group message."],
    [
      ["How do I handle people who don't pay for a group gift?", "Send one polite reminder, then proceed with the collected amount."],
      ["What if the total exceeds the brand's maximum card value?", "Buy multiple cards from the same brand — many brands allow combining cards in one bill."],
      ["Should contributors' amounts be shared?", "It's best to keep amounts private and sign the card as a group."],
    ],
  ),
  "long-distance-gifting-ideas": k(
    ["E-gift cards bridge distance instantly.", "Plan shared experiences — virtual dinners, watch parties, coffee calls.", "Grocery and health cards help parents living far away.", "Travel cards can fund the next reunion."],
    [
      ["How do I celebrate a birthday long-distance?", "Send a gift card in the morning, surprise them with a food order and join a video call with cake."],
      ["What's a good long-distance gift for parents?", "Grocery delivery, health check-ups or a travel card to visit you."],
      ["Can I send e-gift cards to family who aren't tech-savvy?", "Yes — call ahead and ask a local relative to help redeem."],
    ],
  ),
  "sustainable-gifting-digital-gift-cards": k(
    ["Digital gift cards remove plastic, packaging and courier emissions.", "Recipients choose items they'll use, reducing waste.", "Experiences and artisan brands make greener gifts.", "Donation gift cards suit people who have everything."],
    [
      ["Are e-gift cards really better for the environment?", "They avoid plastic cards, wrapping and shipping, and reduce unwanted gifts, which lowers waste."],
      ["What are eco-friendly gift card ideas?", "Handcrafted and natural product brands, experiences and donation-based gift cards."],
      ["How can companies make festive gifting greener?", "Replace physical hampers with multi-brand digital gift cards."],
    ],
  ),
  "gifting-calendar-india": k(
    ["India has gifting moments in nearly every month.", "Festival dates vary each year — confirm them annually.", "Add personal milestones to your calendar with reminders.", "A five-minute monthly routine removes gifting stress."],
    [
      ["When is the biggest gifting season in India?", "The Diwali season, typically between October and November, is the peak gifting period."],
      ["How far ahead should I plan festival gifts?", "One to two weeks is enough for most personal gifts; businesses should plan four to eight weeks ahead."],
      ["What's a good way to remember everyone's birthdays?", "Add them to your phone calendar with a reminder a week in advance."],
    ],
  ),
  "amazon-vs-flipkart-gift-card": k(
    ["Both are highly flexible marketplace gifts.", "Choose the platform the recipient already uses.", "Read exclusions — some vouchers exclude digital content and payment categories.", "Fashion-focused recipients may prefer Myntra or AJIO."],
    [
      ["Can an Amazon Shopping Voucher be used for Amazon Pay recharges?", "According to its listed terms, the Amazon Shopping Voucher is meant for eligible physical products and excludes Amazon Pay categories like recharges and bill payments."],
      ["Which is better for electronics — Amazon or Flipkart?", "Both offer wide electronics ranges; choose the platform the recipient prefers."],
      ["Do marketplace gift cards expire?", "Yes. Validity is listed in the card terms; many marketplace vouchers are valid for about a year."],
    ],
  ),
  "myntra-gift-card-guide": k(
    ["Myntra suits fashion lovers of all ages.", "Great for birthdays, festivals, Rakhi and new jobs.", "₹2,000–₹3,000 typically covers a complete casual outfit.", "Pair with a beauty card for a full look."],
    [
      ["Can a Myntra gift card be used for beauty products?", "Myntra offers beauty and personal care categories; eligibility depends on the card terms."],
      ["Is a Myntra gift card good for men?", "Yes — Myntra carries extensive menswear, footwear and accessories."],
      ["What's a good alternative to a Myntra gift card?", "AJIO, Nykaa Fashion, Lifestyle or Westside are popular alternatives."],
    ],
  ),
  "hotel-gift-cards-taj-itc-marriott": k(
    ["Hotel gift cards turn gifts into memorable experiences.", "Choose stay, dining or spa variants based on the recipient.", "Check validity, booking rules and blackout dates.", "Hotel cards suit anniversaries, parents' milestones and corporate awards."],
    [
      ["Can hotel gift cards be used for dining only?", "Some programs offer dining-specific variants; stay cards may or may not cover dining. Check the terms."],
      ["Do I need to book in advance with a hotel gift card?", "Usually yes — confirm availability and gift card acceptance when booking."],
      ["Are hotel gift cards valid at all properties?", "Participating properties are defined by each program; check the list before gifting."],
    ],
  ),
  "jewellery-gift-cards-tanishq-kalyan-malabar": k(
    ["Jewellery cards let recipients choose designs, metals and sizes.", "Check card variants — coin, gold, diamond or studded jewellery.", "Final prices depend on metal rates and making charges.", "Choose brands with stores near the recipient."],
    [
      ["Can a gold coin gift card be used for jewellery?", "Not always. Coin cards may be restricted to coins; check the card terms."],
      ["Can I combine jewellery gift cards?", "Many jewellery brands allow multiple cards per bill, often up to five."],
      ["Are jewellery gift cards good for weddings?", "Yes — they're among the most popular and meaningful wedding gifts in India."],
    ],
  ),
  "food-delivery-gift-cards-swiggy-zomato": k(
    ["Food delivery cards are used quickly and appreciated widely.", "Perfect for students, new parents and friends who are unwell.", "Restaurant-brand cards suit fans of specific chains.", "Check dietary preferences and delivery coverage."],
    [
      ["Can I use a food delivery gift card for grocery delivery?", "It depends on the platform and card terms; some platform credits work across services, others don't."],
      ["What's a good value for a food delivery gift card?", "₹500 covers a comfort meal; ₹1,000–₹1,500 covers dinner for two."],
      ["Are food delivery cards good for team rewards?", "Yes — they're a quick, inclusive way to celebrate wins."],
    ],
  ),
  "movie-gift-cards-bookmyshow-pvr": k(
    ["BookMyShow suits flexible movie and event plans.", "PVR INOX suits loyal cinema-chain fans.", "Combine movie and food cards for a complete night out.", "Check whether cards cover snacks and convenience fees."],
    [
      ["Can a BookMyShow gift card be used for concerts?", "Depending on the card terms, BookMyShow cards may cover events beyond movies. Check eligibility."],
      ["Do movie gift cards cover popcorn?", "Some cards cover food and beverages; others apply only to tickets."],
      ["Are movie gift cards good for teenagers?", "Yes — they're a fun, social gift for teens and their friends."],
    ],
  ),
  "corporate-gifting-101": k(
    ["Corporate gifting builds relationships with employees, clients and partners.", "Gift cards remove logistics and offer recipient choice.", "Plan budgets by recipient group and occasion.", "Check tax and gifting policy rules with finance."],
    [
      ["What's the easiest way for a company to start gifting?", "Begin with festive gifts and work anniversaries using multi-brand gift cards, then add recognition programs."],
      ["Can small companies use corporate gifting platforms?", "Yes. Orbit by SaverPe supports programs of all sizes."],
      ["Are client gifts tax-deductible?", "Tax treatment depends on the nature and purpose of the expense. Consult your CA."],
    ],
  ),
  "employee-gift-card-ideas-small-business": k(
    ["Consistency, timeliness and specific thank-yous matter more than big budgets.", "Food, marketplace and entertainment cards suit most small teams.", "Offer brand choice for festive gifts.", "Track gift values per employee for tax purposes."],
    [
      ["How much should a small business spend on employee gifts?", "Many start with modest per-person values for festivals and birthdays, then add spot awards as budgets allow."],
      ["Are gift cards better than team parties?", "Both have value. Gift cards reach remote employees equally; parties build connection. Many teams do both."],
      ["What's a good gift for an employee's work anniversary?", "A gift card that grows with tenure, paired with a specific thank-you note."],
    ],
  ),
  "client-thank-you-gifts": k(
    ["Check client gifting policies before sending anything.", "Tie gifts to meaningful moments, not negotiations.", "Personal notes from relationship owners make gifts memorable.", "Recognise client project teams, not just decision-makers."],
    [
      ["What's an appropriate client gift value?", "Keep it modest and within the client's gifting policy; some organisations prohibit gifts entirely."],
      ["When is the best time to send client gifts?", "After project milestones, at renewals, and during festive or New Year seasons."],
      ["Can I send client gifts to government organisations?", "Many public sector entities restrict gifts. Seek guidance and consider a sincere note instead."],
    ],
  ),
};
