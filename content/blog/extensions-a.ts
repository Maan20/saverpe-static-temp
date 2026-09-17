import type { Extension } from "./extensions";

// Extended sections for Gift Card Basics + Gift Guides posts (merged into the post body in lib/blog.ts).
export const extensionsA: Record<string, Extension> = {
  "how-to-redeem-a-saverpe-gift-card": {
    body: `## Redemption scenarios, solved

### "The order total is more than my card value"

Apply the gift card first, then pay the remaining amount with UPI, a debit or credit card, or net banking. Most online brands support split payments. If the checkout doesn't let you combine methods, try adding the card to your account wallet first — wallet balances usually combine automatically with other payment methods.

### "The order total is less than my card value"

On a multi-use card, the unused amount stays available for your next purchase. On a single-use card, the leftover amount typically lapses, so add another small item to get closer to the full value.

### "I returned an item I bought with a gift card"

Refunds for products bought with gift card balance usually go back to the gift card or your brand account wallet rather than to a bank account. The timeline depends on the brand's return process.

### "I want to use my card in a different city"

Online and app-based cards work anywhere the brand delivers. For in-store cards, check the list of participating stores or cities in the brand terms.

## A quick redemption checklist

- Code and PIN copied correctly
- Card still within validity
- Correct brand website, app or store
- Products eligible (not excluded categories)
- Partial redemption rules understood
- Remaining balance payment method ready`,
    faqs: [{ q: "Where does the refund go if I return something bought with a gift card?", a: "Usually back to the gift card or your brand account wallet, following the brand's return and refund policy." }],
  },
  "gift-card-scams-how-to-stay-safe": {
    body: `## Real-world example: how the "urgent favour" scam unfolds

1. A new WhatsApp number messages you using your manager's display photo.
2. The message is short and urgent: "Are you free? Need a quick help."
3. Once you reply, they ask you to buy several high-value e-vouchers for "clients".
4. They insist you send photos of the codes immediately and not call because they're "in a meeting".
5. Within minutes of receiving the codes, the balances are spent.

**The fix:** pause, and call your manager on their known number. A 30-second call stops the entire scam.

## A family safety talk in five sentences

Share this with parents and grandparents:

> "No bank, police officer, government office, courier or company will ever ask you to pay using gift card codes. If anyone asks, it is a scam — hang up. Never share OTPs, PINs or codes on the phone. If you're unsure, call me first. If money is lost, we'll call 1930 together immediately."`,
  },
  "gift-card-validity-and-expiry-explained": {
    body: `## Understanding the wording in gift card terms

Brands phrase validity in slightly different ways, and the difference can matter:

- **"Valid for 12 months from the date of issue"** — the clock starts when the card is created, even if the recipient opens the email later.
- **"365 days from the date of activation"** — the clock starts when the card is activated, which for e-gift cards is usually the same day it is issued.
- **"Validity of the voucher is for a maximum period of 6 months"** — the card cannot be used after six months, even if some balance is left.
- **"Can only be redeemed after a 24-hour period"** — a waiting period before in-store use; it doesn't extend the validity.

## Validity considerations when gifting for a specific plan

| If the recipient plans to... | Look for |
|---|---|
| Book a holiday months away | Longer validity and flexible booking terms |
| Buy a big-ticket gadget during a sale | Validity that covers the sale season |
| Shop for a wedding | Validity beyond the wedding date |
| Use it for daily coffee | Multi-use card with a comfortable validity |

## What happens if a brand changes or exits its gift card program?

It's rare, but brands sometimes change program partners, rules or availability. If that happens, the issuer's terms and applicable consumer protection norms determine how existing cards are handled. Keep your delivery email as proof of purchase, and contact support if you receive a notice about program changes.

## Gifting tip: include the expiry in your message

A friendly line like "Valid till March — plan something fun before then!" helps the recipient remember without sounding like a warning.`,
    faqs: [{ q: "Does the waiting period before in-store use reduce validity?", a: "The validity period is defined separately in the brand's terms; a waiting period simply delays when the card can be used in store." }],
  },
  "gift-cards-vs-cash-gifting": {
    body: `## What recipients remember

Think back to gifts you received five years ago. You probably don't remember the exact amount of cash from most birthdays — but you might remember the weekend trip, the concert, or the jacket a friend "made" you buy. That's the psychology behind gift cards: they convert money into an **experience or object tied to the giver**.

Cash tends to be **mentally filed as income** and absorbed into regular expenses. A brand gift card is filed as a **treat**, and people are more likely to spend it on something they enjoy without guilt.

## The workplace angle

At work, cash can feel like salary rather than appreciation, and it can create awkward comparisons. Gift cards feel like a reward, and multi-brand choice keeps them inclusive. That's why companies increasingly use platforms like [Orbit by SaverPe](https://orbit.saverpe.com) for festive gifts and recognition.

## Practical checklist: which one should I give?

- Is there a **ritual or tradition** involved? → Cash shagun (optionally plus a gift card).
- Does the recipient have a **pressing financial need**? → Cash.
- Is this a **friend, sibling or colleague**? → Gift card.
- Do you know a **brand they love**? → Gift card.
- Are you **gifting remotely**? → Either, but a gift card with a message feels warmer.
- Are you gifting **many people at once**? → Gift cards for consistency.

## Common objections to gift cards — answered

**"It looks like I didn't put in effort."** Choose a brand that matches their interests and write a specific message. That is effort.

**"What if they don't use it?"** Pick a brand they already use and check validity. Marketplace or food cards are rarely wasted.

**"Cash is more flexible."** True — but flexibility isn't the only goal of a gift. Meaning matters too.`,
  },
  "open-loop-vs-closed-loop-gift-cards": {
    body: `## Real-life scenarios

**Scenario 1 — the coffee devotee.** Your colleague lives on cappuccinos and visits the same café chain every day. A closed-loop café card is perfect: it will be used within weeks and feels personal.

**Scenario 2 — the new neighbour.** You know very little about their preferences. A marketplace card works best because they can buy anything from groceries to home decor.

**Scenario 3 — a 500-person festive gift.** Employees have diverse tastes. Offering a menu of brands — marketplace, food, fashion, electronics — gives everyone a relevant choice.

## Things to check for each type

### Closed-loop

- Are there stores or delivery in the recipient's city?
- Is partial redemption allowed?
- Are there exclusions like sale items?

### Multi-brand or semi-closed

- Which merchants are included today?
- Are there usage limits or KYC requirements?
- How is balance checked?

### Marketplace

- Which categories are excluded?
- Does the card need to be added to an account?
- Can it be used with other payment methods?

## Why the distinction matters for businesses

Companies choosing gift cards for employees or partners often mix types: a marketplace option for flexibility, plus popular single-brand options for personal appeal. This balance keeps redemption rates high — a gift card only creates value when it's actually used.`,
  },
  "how-to-check-gift-card-balance": {
    body: `## Keep a simple gift card tracker

If you receive several gift cards a year — birthdays, festivals, work rewards — a tracker prevents forgotten balances. A note or spreadsheet with these columns is enough:

| Brand | Value | Expiry | Added to account? | Remaining |
|---|---|---|---|---|
| Food delivery | ₹1,000 | 31 Mar | Yes | ₹420 |
| Fashion | ₹2,000 | 15 Jun | No (in-store) | ₹2,000 |

Update the "Remaining" column after each use. Set a calendar reminder a month before each expiry date.

## How to spot a fake balance-check site

- The web address is slightly misspelled or uses an unfamiliar domain.
- It asks for personal details unrelated to the card, like your bank account.
- It charges a fee to "check" or "unlock" your balance.
- It pressures you with countdown timers or warnings.
- It was sent to you by an unknown number or email.

When in doubt, close the page and navigate from the brand's official homepage.

## Balance questions for in-store cards

If you're redeeming in a store, ask the cashier to confirm the balance **before** billing. For single-use cards, this helps you pick additional items so you don't lose leftover value.`,
  },
  "can-you-use-multiple-gift-cards-in-one-order": {
    body: `## Common combinations that work well

- **Birthday pooling:** several friends send cards for the same fashion brand, and the recipient buys one statement outfit.
- **Festive jewellery purchase:** family members each gift a jewellery brand card, combined toward a gold piece during Dhanteras.
- **Home setup:** multiple furniture cards from a wedding put toward a sofa or bed.
- **Wallet stacking:** marketplace cards added to one account over months fund a big gadget purchase.

## Mistakes to avoid

1. **Mixing online-only and in-store-only cards** for the same purchase — they can't be combined if the channels differ.
2. **Exceeding the per-bill limit** — plan purchases around the number of cards allowed.
3. **Using single-use cards on small bills** — you'll lose the leftover value.
4. **Ignoring different expiry dates** — use the card expiring soonest first.
5. **Forgetting exclusions** — sale items or specific collections may not accept cards.

## For in-store purchases: tell the cashier upfront

Before billing, tell the cashier how many cards you plan to use. Staff can apply them in the right order and confirm whether split payment is allowed for the remainder. It saves time at busy counters, especially during festive rushes.

## For gifters: coordinate brands

If you're part of a friend group gifting separately, agree on one brand. Combining five cards from one brand is far more useful than five cards from five brands.`,
  },
  "e-gift-card-vs-physical-gift-card": {
    body: `## Security: why digital is often safer

Physical cards can be lost, stolen or photographed on a store rack before purchase. E-gift cards arrive directly in the recipient's inbox, and many can be immediately added to an account, locking the balance to that user. Email records also help support teams trace delivery if something goes wrong.

## Accessibility

E-gift cards can be read on phones with accessibility features like screen readers and enlarged text. For recipients who aren't comfortable with email, you can help them add the card to an app — or print the details on a card they can show at a store.

## Presentation ideas for digital gift cards

- **Printed note in a greeting card** — "Your gift is in your inbox!"
- **QR-style printout** with the brand name and a message (keep the code private if printing in public settings).
- **A small token gift** — a chocolate, a plant or a candle — with the e-gift card sent the same day.
- **A video message** revealing the brand.

## Speed comparison for common situations

| Situation | E-gift card | Physical card |
|---|---|---|
| Forgot a birthday until the night before | Works | Difficult |
| Sibling in another city | Works | Needs courier |
| Office party today | Works | Needs store visit |
| Gifting 200 employees | Scales easily | Logistics heavy |

## The bottom line

Choose physical only when the act of handing over something tangible is essential and you have time. For almost everything else, e-gift cards are the faster, safer and greener choice.`,
  },
  "what-happens-to-unused-gift-card-balance": {
    body: `## Why balances go unused in the first place

- **The card is filed away** in an email folder and forgotten.
- **The value doesn't match a purchase** — too small for a meaningful item, too big for a small one.
- **The brand isn't a regular habit** for the recipient.
- **Stores aren't nearby** for in-store-only cards.
- **Uncertainty about rules** — people hesitate if they're unsure how redemption works.

Knowing these reasons helps both recipients and gifters.

## A 10-minute monthly habit

On the first of every month:

1. Search your inbox for "gift card" and "voucher".
2. Note the balances and expiry dates.
3. Add any unadded cards to brand accounts.
4. Plan one purchase for any card expiring in the next 60 days.

## Using leftover balances as gifts

A small remaining balance can still make someone smile. If the brand allows transfers or you haven't added the card to your account, you can gift a small untouched card to a friend. For partially used cards, be transparent: "I had ₹300 left on a café card — coffee's on me this week!"

## For businesses: redemption rates matter

Companies gifting employees want cards to be used. Offering a choice of brands, sending clear redemption instructions and reminding recipients before expiry all improve redemption. [Orbit by SaverPe](https://orbit.saverpe.com) helps teams plan multi-brand programs with that in mind.`,
  },
  "gift-cards-for-him": {
    body: `## How to choose: a 60-second framework

Ask yourself three questions:

1. **What does he spend money on without hesitation?** That's his passion category — coffee, sneakers, gadgets, travel.
2. **What does he use every day but never replaces?** Wallet, watch, bag, running shoes, headphones.
3. **What does he keep postponing?** A trip, a new wardrobe, a cycling hobby.

The brand that fits two out of three is your winner.

## Gift card pairings for men

| Pair this card... | ...with this small add-on |
|---|---|
| Titan or Fastrack | A handwritten "Time for an upgrade" note |
| Blue Tokai | A ceramic mug |
| Decathlon | A sports towel or water bottle |
| Louis Philippe | A pocket square |
| MakeMyTrip | A printed map of the destination |

## Budget guidance

- **Colleague or acquaintance:** ₹500–₹1,000 — coffee, food delivery, Amazon.
- **Friend or brother:** ₹1,000–₹3,000 — sneakers, gaming, fashion.
- **Partner or father:** ₹3,000+ — watches, formal wear, travel, experiences.

## Mistakes to avoid

- **Assuming all men want gadgets.** Many prefer experiences, books or style.
- **Choosing a brand he doesn't use** just because it's premium.
- **Skipping the message.** "Happy birthday, bro" is fine for a group chat — a gift deserves a line more.

## For corporate recognition of male colleagues

Keep it inclusive and neutral — food delivery, marketplace and entertainment cards work across teams.`,
  },
  "gift-cards-for-her": {
    body: `## Reading her style signals

You don't need to be a fashion or beauty expert to choose well. Look for clues:

- **Her social feeds:** saved posts often reveal brands and styles she loves.
- **Her everyday bag:** skincare or makeup brands she carries.
- **Her wardrobe palette:** ethnic, western, minimal, bold.
- **How she unwinds:** spa, books, travel, shopping, dining out.

## Gift card pairings for women

| Gift card | Add-on idea |
|---|---|
| Nykaa | A pretty pouch or a handwritten note |
| Taneira or Fabindia | Jasmine flowers or a saree pin |
| Mia by Tanishq | A small jewellery box |
| O2 Spa | A scented candle |
| Taj Hotels | A printed "weekend itinerary" |

## Budget guidance

- **Colleague:** ₹500–₹1,000 — Starbucks, The Body Shop, Amazon.
- **Friend:** ₹1,000–₹2,500 — Nykaa, Myntra, BookMyShow.
- **Sister:** ₹1,500–₹5,000 — beauty, fashion or silver jewellery.
- **Partner, wife or mother:** ₹3,000+ — jewellery, spa, travel, luxury.

## Mistakes to avoid

- **Stereotyping.** Not every woman wants beauty or jewellery — she might prefer gadgets, books or trekking gear.
- **Choosing by your taste.** Gift what she'd buy, not what you'd like her to wear.
- **Forgetting practicality.** A salon card is wonderful only if there's an outlet near her.

## When she's hard to shop for

Pick a flexible, high-choice brand — Myntra, Nykaa or Amazon — and personalise the message around her, not the product.`,
  },
  "gift-cards-for-parents": {
    body: `## Why parents hesitate to use gifts — and how to help

Many parents feel guilty spending on themselves, or aren't comfortable with apps. A few thoughtful steps make sure your gift is used:

1. **Choose brands they already trust** — familiar names with stores nearby.
2. **Set it up for them** — add the card to their account or save the code in their phone notes.
3. **Make a plan together** — "Let's book the hotel for your anniversary weekend."
4. **Remind gently** before the expiry date.

## Gifting for different kinds of parents

### The traveller parents

Hotel and holiday cards, plus a travel-friendly bag from Nasher Miles or Wildcraft.

### The homebody parents

Kitchen upgrades, a comfortable mattress, OTT subscriptions and grocery cards.

### The health-conscious parents

Health check-ups, yoga or fitness classes, walking shoes and nutrition coaching.

### The social parents

Dining cards for their friends' get-togethers, movie cards, and festive wear.

## For in-laws

Gifting in-laws calls for warmth and respect. Safe, well-loved choices include ethnic wear (Fabindia, Taneira), jewellery (Tanishq, Kalyan) and a family dinner card. Involve your partner in choosing the brand.

## Siblings gifting together

Pooling budgets with siblings means a more meaningful experience — a hotel stay or a pilgrimage trip. Use our [group gifting guide](/blog/group-gifting-with-gift-cards) to coordinate without friction.

## Messages for parents

- "You've given us everything. This weekend, let someone take care of you."
- "Happy anniversary! Go celebrate like it's your honeymoon."
- "For all the health check-ups you remind us about — this one's for you."`,
  },
  "gift-cards-for-teenagers": {
    body: `## What teens say they want (in their own words)

Talk to teenagers and you'll hear the same themes:

- **"Let me choose."** Autonomy matters more than surprise.
- **"Something my friends think is cool."** Social relevance is real.
- **"Stuff I can use now."** Food, games and fashion beat long-term gifts.
- **"Not something embarrassing."** Avoid overly childish brands after 13.

## Ideas by teen personality

| Personality | Gift card ideas |
|---|---|
| The gamer | Steam, Valorant Points, Croma accessories |
| The trendsetter | Myntra, Bewakoof, AJIO |
| The athlete | Puma, Decathlon, Skechers |
| The foodie | Swiggy, Domino's, McDonald's |
| The creative | Amazon (art supplies), Chumbak |
| The reader | Sapna Book House |
| The social butterfly | BookMyShow, Starbucks |

## Money lessons through gift cards

Gift cards can teach budgeting in a low-risk way:

- Encourage teens to **plan purchases** before spending.
- Discuss **validity dates** and why they matter.
- Talk about **scams**, especially "free item" offers in games that ask for codes.
- Let them **compare value** across products before choosing.

## Rewards that motivate

Gift cards make great rewards for effort, not just results: finishing a project, improving a grade, volunteering, or trying a new sport. Keep it proportionate and consistent.

## Safety checklist for parents

- Keep the email address one the parent can also access for younger teens.
- Discuss not sharing codes with online "friends".
- Enable in-app spending controls where available.`,
  },
  "gift-cards-for-foodies": {
    body: `## Match the food card to the foodie

| Foodie type | Best gift card |
|---|---|
| The late-night orderer | Swiggy, Zomato |
| The café hopper | Starbucks, Blue Tokai |
| The biryani loyalist | Behrouz Biryani, Biryani By Kilo |
| The group-dinner planner | Barbeque Nation, Punjab Grill |
| The dessert lover | Sweet Truth |
| The gourmet cook | Nature's Basket, BigBasket |
| The fine-dining explorer | Marriott India Dining |

## Food gift cards for special situations

### When someone is unwell

A food delivery card with a note like "Rest — dinner's handled" is one of the most caring gifts you can send.

### When a friend has a new baby

New parents rarely have time to cook. Food cards are practical for the first few weeks.

### When a colleague relocates

A food card helps them explore their new city's restaurants.

### When a team hits a milestone

A pizza or biryani card turns a Friday win into a celebration.

## Build a "foodie experience" gift

- **Breakfast:** a café card
- **Lunch:** a food delivery card
- **Dinner:** a restaurant or dining card
- **Dessert:** a dessert brand card

Write it like a menu: "Your birthday tasting menu, curated by me."

## Tips for choosing values

- **₹300–₹600:** a café treat or a quick meal.
- **₹800–₹1,500:** a satisfying dinner for two.
- **₹2,000+:** a group feast or fine dining.

Always check that the brand operates or delivers in the recipient's city.`,
  },
  "gift-cards-for-travel-lovers": {
    body: `## How to choose the right travel gift card

### Step 1: Identify the trip type

- **Weekend getaway:** hotel or online travel platform cards.
- **Family holiday:** holiday package cards.
- **International dream trip:** airline cards and luggage.
- **Business traveller:** premium hotel and cab cards.
- **Adventure traveller:** outdoor gear plus bus or rail cards.

### Step 2: Check what the card covers

Travel cards can be restricted to specific services — flights, hotels, holidays, buses or trains. The card name often indicates this (for example, "Hotel" or "Holiday" variants). Always read the terms on the brand page.

### Step 3: Match validity to planning time

Travel plans take time. Make sure the card's validity leaves room to plan and book.

## Budget guide for travel gifts

| Gift size | What it can cover |
|---|---|
| ₹1,000–₹2,000 | Cab rides, a bus or train journey, travel accessories |
| ₹3,000–₹7,000 | A domestic flight contribution or one hotel night |
| ₹10,000+ | A meaningful part of a holiday package or luxury stay |

## Group travel gifting

For honeymoons and milestone trips, friends and family can pool together for a larger travel card. Coordinate using our [group gifting guide](/blog/group-gifting-with-gift-cards).

## Make it exciting

- Print a boarding-pass-style card with "Destination: Your Choice".
- Include a small travel item like a neck pillow or luggage tag.
- Add a list of three destinations you think they'd love.`,
  },
  "gift-cards-for-gamers": {
    body: `## A quick glossary for non-gamers

- **Wallet credit:** money added to a gaming platform account to buy games or items.
- **In-game currency:** a game-specific currency (like Valorant Points) used for cosmetic items or passes.
- **Battle pass:** a seasonal unlock track with rewards.
- **Skins:** cosmetic changes to characters or weapons — they don't change gameplay but are very popular.
- **DLC:** downloadable content, such as expansions or extra levels.

## How much to give

| Gift purpose | Suggested value |
|---|---|
| A cosmetic item or small pack | ₹500–₹1,000 |
| A battle pass or mid-size game | ₹1,000–₹2,500 |
| A new full-price game | ₹2,500–₹5,000 |

Prices vary by game and platform, so treat these as rough guides.

## Healthy gaming gifts

If you're a parent, gift cards can support balanced gaming:

- Pair a gaming card with an agreed screen-time plan.
- Reward milestones in studies or sports.
- Encourage games that involve teamwork or creativity.

## Beyond the screen

Gamers often love related gifts:

- **Headsets and keyboards** from [Croma](/brands/croma-gift-card).
- **Comfortable gaming wear** from [Bewakoof](/brands/bewakoof-brands-gift-card).
- **Snacks for gaming nights** from [Swiggy](/brands/swiggy-food-gift-card).
- **Esports and sports streaming** subscriptions like [FanCode](/brands/fancode-gift-card).

## Message ideas for gamers

- "GG on another level up in life. Happy birthday!"
- "New season, new skins — enjoy!"
- "For the next victory royale (or whatever you call it)."`,
  },
  "gift-cards-for-fitness-enthusiasts": {
    body: `## Match the gift to the fitness style

| Fitness style | Gift card ideas |
|---|---|
| Runner | Puma, Skechers, Decathlon |
| Gym-goer | Cult, HealthKart, Decathlon |
| Yoga practitioner | Cult, BlissClub, Decathlon |
| Swimmer | Speedo, Decathlon |
| Cyclist | Decathlon |
| Hiker / trekker | Wildcraft, Decathlon |
| Beginner starting a resolution | Cult, HealthifyMe, Skechers |

## Supporting a beginner (without being preachy)

Fitness gifts can feel judgmental if framed poorly. Keep the tone encouraging:

- **Do:** "You mentioned wanting to try yoga — here's your first month on me."
- **Don't:** "Thought this might help you lose weight."

Better yet, join them: "Let's do this together — I've signed up too."

## Recovery and wellness gifts

Fitness is also about rest. Consider:

- A **spa or massage** card after a big race.
- **Nutrition coaching** for long-term goals.
- **Health check-ups** before starting intense training.

## Corporate wellness gifting

Companies running step challenges, marathons or wellness weeks often reward participants with sportswear, fitness and nutrition gift cards. [Orbit by SaverPe](https://orbit.saverpe.com) supports multi-brand bulk orders for such programs.

## Budget guide

- **₹500–₹1,500:** accessories, socks, a yoga strap, supplements.
- **₹2,000–₹5,000:** running shoes, activewear sets, a month of classes.
- **₹5,000+:** premium shoes, bikes contribution, long-term memberships.`,
  },
  "gift-cards-for-book-lovers-and-students": {
    body: `## Understanding student needs by stage

### School students

Stationery, books, art supplies and small treats. Keep values modest and brands age-appropriate.

### College freshers

Moving away from home means laptops, bags, bedding, food delivery and rides. Practical cards are gold.

### Final-year and postgraduate students

Exam-prep books, interview clothes, and tech for projects.

### International-bound students

Luggage, formal wear and travel cards help with the big move.

## Gifts for different kinds of readers

| Reader type | Gift idea |
|---|---|
| Fiction lover | Bookstore card + a handwritten recommendation |
| Non-fiction enthusiast | Marketplace card for biographies and business books |
| Student with textbooks | Marketplace or bookstore card |
| Comic and manga fan | Marketplace card |
| Audiobook listener | Subscription-style card where available |

## Make a reader's gift personal

- Write a short note about a book that changed your life.
- Include a bookmark or a reading lamp.
- Start a two-person book club with the gift.

## Budget-friendly tip for students

Students appreciate multiple small cards across essentials — food, rides and stationery — more than one large card for a single brand. It helps them manage monthly expenses.

## Teachers and mentors of students

Don't forget the people guiding them. See our [Teachers' Day gift ideas](/blog/teachers-day-gift-ideas).`,
  },
  "last-minute-gift-ideas-e-gift-cards": {
    body: `## Match the last-minute card to the occasion

| Occasion you forgot | Quick pick |
|---|---|
| Friend's birthday | Myntra, Swiggy, Starbucks |
| Anniversary | Taj Hotels, BookMyShow + Zomato |
| Colleague's farewell | Amazon, Hidesign |
| Housewarming | Pepperfry, BigBasket |
| Thank-you | Starbucks, Swiggy |
| Festival greeting | Amazon, Bikanervala |

## The 5-minute last-minute gifting routine

1. **Minute 1:** Think of one thing they love.
2. **Minute 2:** Pick the brand on [SaverPe](/brands).
3. **Minute 3:** Choose a sensible value.
4. **Minute 4:** Write a specific two-line message.
5. **Minute 5:** Double-check the email address and send.

## What not to do when you're in a hurry

- Don't pick a random premium brand just to look generous.
- Don't forget to check whether the brand works in their city.
- Don't send without a message — that's what makes it feel rushed.
- Don't apologise excessively. A warm message is better than "sorry I forgot".

## Turning a late gift into a thoughtful one

If you genuinely missed the day, own it with humour and warmth: "I'm late, but my love is right on time. Dinner's on me this weekend." Then follow through — call them or make plans.

## Prevent the next panic

Add birthdays and anniversaries to your calendar with a 7-day reminder. And bookmark our [Indian gifting calendar](/blog/gifting-calendar-india) for festivals.`,
  },
  "gift-cards-under-1000": {
    body: `## How to make a small gift card look generous

### Pair it with a small handmade touch

A handwritten note, a doodle, or a small homemade treat adds warmth that money can't buy.

### Be specific about the treat

"One cold coffee and a brownie, on me" feels more generous than "Here's ₹500".

### Choose brands with low-cost hero products

Coffee, desserts, quick meals, small beauty items and movie tickets all feel complete at small values.

## Great combinations under ₹1,000

| Combo | Total idea |
|---|---|
| Coffee + dessert | ₹400 + ₹300 |
| Movie ticket + snacks delivery | ₹500 + ₹400 |
| Lip balm + face mask | Beauty card ~₹800 |
| Book + bookmark | Bookstore card ~₹600 |

## Workplace gifting under ₹1,000

For teams, consistency matters more than size. A food delivery or coffee card for everyone after a big release feels fair and appreciated. For bulk orders, companies can use [Orbit by SaverPe](https://orbit.saverpe.com).

## Budget gifts for people who help you every day

- **Delivery partners and building staff:** food or grocery cards during festivals.
- **Tutors and coaches:** café or bookstore cards.
- **Neighbours who watered your plants:** a dessert card.

## What to avoid on a small budget

- Luxury brands where the value buys nothing.
- Brands with minimum denominations above your budget.
- Single-use cards where small purchases leave leftover value.`,
  },
  "luxury-gift-cards-india": {
    body: `## When a luxury gift card is appropriate

Luxury gifts carry emotional and social weight. They're ideal when:

- The occasion is a **true milestone** — 25th anniversary, 50th birthday, retirement.
- The relationship is **close**, or the gesture is a **formal recognition** of significant contribution.
- The recipient **appreciates premium brands** already.

They can feel uncomfortable when the relationship is new or when gift values in the group are usually modest.

## Choosing the right luxury category

| Recipient | Luxury category |
|---|---|
| Frequent traveller | Tumi luggage, five-star hotels |
| Fashion connoisseur | Coach, Michael Kors, Hugo Boss |
| Traditionalist | Tanishq, Satya Paul |
| Experience seeker | Taj, Oberoi, ITC Hotels |
| Watch lover | Helios (international watch brands) |

## Corporate luxury gifting: be careful

For clients and senior partners, check company gifting policies first. Many organisations cap gift values or prohibit gifts from vendors. Luxury experience cards for internal leadership awards, however, are common and well received.

## Presentation for premium gifts

- Use a textured envelope or a small gift box.
- Hand-write the message with a good pen.
- Deliver in person, or pair the digital card with a physical note sent by courier.

## Make luxury personal

Premium doesn't have to be impersonal. "For the handbag you admired in Delhi last winter" makes a luxury card unforgettable.`,
  },
  "gift-cards-for-new-parents-baby-shower": {
    body: `## What new parents actually run out of

Ask any parent of a newborn and you'll hear the same list:

- Diapers and wipes
- Baby clothes in the next size up
- Feeding supplies
- Groceries and household essentials
- Time and energy to cook

Gift cards that cover these needs are used within days.

## Gifts for the parents, not just the baby

The baby gets plenty of attention. Parents — especially the mother recovering from birth — appreciate gifts for themselves:

- **Meal delivery** to skip cooking.
- **Comfortable clothing** from a fashion brand.
- **Self-care** products for small moments of rest.
- **Entertainment** for late-night feeding sessions.

## Etiquette for baby showers in India

- **Godh bharai** traditions vary by community; ask the family about customs.
- **Some families prefer gifts after the birth** — check before sending baby items.
- **Group gifts** from friends or colleagues are common and practical.

## Gifting through the first year

| Milestone | Gift idea |
|---|---|
| Birth announcement | Food delivery + grocery card |
| Naming ceremony | Baby clothes card |
| 6 months | Toys and feeding essentials |
| First birthday | Toy store card |

## Colleagues going on parental leave

A team gift card for baby essentials and meal delivery is thoughtful and inclusive. Companies with frequent gifting needs can use [Orbit by SaverPe](https://orbit.saverpe.com).`,
  },
};
