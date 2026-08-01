export type CardBreakdown = {
  what: string;
  why: string;
  worthKnowing: string;
  example: string;
  visualKey?:
    | "email-mock"
    | "repair-loop"
    | "gulf-map"
    | "consignment-flow"
    | "tech-edge-tiles";
};

export type ExpandableCard = {
  id: string;
  title: string;
  tagline: string;
  breakdown: CardBreakdown;
};

export type ContentBlock = {
  id: string;
  headline: string;
  body: string;
  visual: string;
  statCallout?: string;
};

export type TocItem = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

export type Chapter = {
  id: string;
  number: string;
  tocLabel: string;
  title: string;
  statement: string;
  subline: string;
  closing?: string;
  blocks?: ContentBlock[];
  cards?: ExpandableCard[];
};

export const mapMeta = {
  preparedFor: "ADS",
  preparedBy: "The AGNTCY",
  projectName: "The ADS Opportunity Map",
  agencyUrl: "https://www.theagntcy.ae",
  adsSiteUrl: "[new ADS site URL]",
  responseTimeLabel: "X hours",
  footerNote: "Prepared privately for ADS · Not for distribution",
};

export const contactDetails = {
  name: "Louis [surname]",
  phone: "[phone number]",
  email: "[email address]",
  linkedIn: "[LinkedIn URL]",
  note: "Questions on anything here. Message me any time.",
};

export const navLinks = [
  { label: "Visit The AGNTCY", href: mapMeta.agencyUrl },
  { label: "Visit ADS", href: mapMeta.adsSiteUrl },
] as const;

export const hero = {
  id: "start-here",
  eyebrow: "PREPARED FOR ADS · PRIVATE",
  headline: "The ADS Opportunity Map.",
  subheadline:
    "Ideas, concepts and opportunities I've been exploring after digging into the industry. Some may fit, some may not. That's the conversation.",
  support:
    "One page. Seven chapters. Everything visual. Scroll through at your own pace.",
  scrollCue: "Start the walkthrough",
};

export const promiseCopy = {
  headline: `Quoted in ${mapMeta.responseTimeLabel}. Tracked. Guaranteed.`,
  body: "A public response-time promise, measured and displayed. When ADS says fast and transparent, the numbers are on screen to back it.",
  note: "Placeholder until a real, sustainable target is agreed. The promise only works if it's kept.",
};

export const phases = [
  {
    id: "phase-visible",
    number: "01",
    title: "Get Visible",
    body: "The digital front door: website, portal, search presence.",
  },
  {
    id: "phase-efficient",
    number: "02",
    title: "Get Efficient",
    body: "The speed engine: quoting, inbox, data, chasing.",
  },
  {
    id: "phase-valuable",
    number: "03",
    title: "Get Valuable",
    body: "The intelligence and resilience layer: data, systems, documentation.",
  },
] as const;

export const techEdgeTiles = [
  { id: "tile-tender", label: "Tender Discovery", line: "Procurement-board scanner" },
  { id: "tile-xref", label: "Cross-Reference Rescue", line: "Equivalent part-number lookup" },
  { id: "tile-watch", label: "Obsolescence Watchdog", line: "EOL monitoring" },
  { id: "tile-pricing", label: "Pricing Intelligence", line: "Decades of quote data, structured" },
  { id: "tile-repair", label: "Repair Loop OS", line: "Repair management, productised" },
  { id: "tile-consign", label: "Consignment Manager", line: "Site-stock + invoice-on-use" },
] as const;

export const chapters: Chapter[] = [
  {
    id: "foundation",
    number: "01",
    tocLabel: "The Foundation",
    title: "The Foundation",
    statement: "I started by rebuilding something tangible.",
    subline:
      "Rather than turning up with only theory, I wanted to show what modern could look like for ADS. So I built it.",
    blocks: [
      {
        id: "foundation-website",
        headline: "A £30M business deserves a front door that matches it.",
        body: "The website is the first thing every new client, partner and counterparty sees. The rebuild is modern, fast, and designed around what buyers actually do: search for parts.",
        visual: "before-after",
      },
      {
        id: "foundation-portal",
        headline: "The portal could become the product.",
        body: "Clients finding a part, checking availability and ordering, without a phone call. Self-service as the default turns the website into a revenue channel rather than a business card.",
        visual: "portal-frames",
      },
      {
        id: "foundation-seo",
        headline: "Every part number becomes a doorway.",
        body: "Buyers Google part numbers every day, and almost nobody in this industry optimises for it. Every part ADS lists could have its own automatically optimised page, so when someone searches that number, ADS is what they find.",
        visual: "seo-search",
        statCallout:
          "Thousands of part numbers → thousands of doorways → zero ongoing effort.",
      },
    ],
  },
  {
    id: "win-more",
    number: "02",
    tocLabel: "Win More Deals",
    title: "Win More Deals",
    statement: "Right now, ADS competes for the deals it can see.",
    subline:
      "Five systems that could widen the funnel. More tenders found, more requests captured, fewer sales lost.",
    closing: "Same team. Same day. More at-bats.",
    cards: [
      {
        id: "win-tender-discovery",
        title: "Tender Discovery Engine",
        tagline: "Finds tenders ADS doesn't know exist.",
        breakdown: {
          what: "An automated scout that scans procurement boards, contract portals and tender publications around the clock, including sources nobody at ADS currently has time to watch. Matching opportunities land in the pipeline, scored and ready to review.",
          why: "The team already monitors key portals daily, but coverage is limited by hours in the day. A scanner has no such limit. It widens the net without adding headcount, and the team keeps full control over what gets bid.",
          worthKnowing:
            "Match quality is everything: too loose and it's noise, too tight and it misses deals. It needs tuning against real ADS win history to be useful. Expect a calibration period, not perfection on day one.",
          example:
            "Monday morning: the pipeline shows 14 new opportunities found overnight across 9 sources, each tagged with platform, part type and closing date. Two are on boards nobody at ADS had ever checked.",
        },
      },
      {
        id: "win-cross-reference",
        title: "Cross-Reference Rescue",
        tagline: "Turn 'we can't source that' into 'here's the alternative.'",
        breakdown: {
          what: "When a request arrives for a part ADS can't immediately supply, the system automatically checks equivalent part numbers, alternate conditions and secondary supplier sources before anyone writes back.",
          why: "Every 'sorry, no' is revenue walking out the door, often to a competitor who found the equivalent. Parts frequently exist under multiple numbers across OEMs and NSN records. A system checks all of them in seconds, every time, without relying on someone remembering.",
          worthKnowing:
            "Equivalence in aviation isn't casual. Form-fit-function alternates still need the right certification and traceability, so the system suggests and a human verifies. It's a rescue net, not an auto-substitution engine.",
          example:
            "An RFQ comes in for a part number ADS doesn't stock. Before the email is even opened, the system has flagged two equivalent numbers, one available through an existing supplier at a workable price. The reply goes out same-day with an alternative instead of an apology.",
        },
      },
      {
        id: "win-fleet",
        title: "Fleet-Based Selling",
        tagline: "Know what clients need before they ask.",
        breakdown: {
          what: "Maintenance schedules on military and civil platforms are largely predictable. By mapping which platforms each client operates, the system can flag what parts they're statistically likely to need and when, before the RFQ is written.",
          why: "ADS's sales team currently responds to demand. This flips a portion of it: reaching out with the right part at the right time, first in line instead of one of five bidders. It also deepens the trusted-advisor position with existing accounts, which is where 75% of revenue already lives.",
          worthKnowing:
            "It's guidance, not prophecy. Flying hours vary, budgets shift, and some clients guard fleet information closely. Works best on established relationships where usage patterns are visible in ADS's own order history.",
          example:
            "The system flags: 'Client X last ordered these seal kits 11 months ago; typical replacement cycle ~12 months.' The team sends a short note, 'expecting to need these again soon? Stock's available,' two weeks before the client would have gone to market.",
        },
      },
      {
        id: "win-follow-up",
        title: "Quote Follow-Up Machine",
        tagline: "No quote goes silent again.",
        breakdown: {
          what: "Every quote that hasn't had a response gets followed up automatically. Politely worded, intelligently timed, and aligned to tender deadlines where they exist.",
          why: "Quotes go quiet for mundane reasons: the buyer got busy, the email sank, the decision slipped. Right now, chasing depends on someone remembering. A system never forgets, and even a small recovery rate on silent quotes is revenue that was already earned once.",
          worthKnowing:
            "Tone and frequency matter enormously in a small industry. Over-chasing reads as desperate. The cadence needs to be conservative and the wording human. And some silence is a 'no'; the system should gracefully stop, not nag.",
          example:
            "Day 4 after a quote: a short, personal-sounding note, 'wanted to make sure this reached you; happy to adjust lead time if useful.' Day 10: one final touch referencing the tender close date. Every reply routes straight to the salesperson who owns the account.",
        },
      },
      {
        id: "win-marketplace",
        title: "Marketplace Sync",
        tagline: "Be everywhere buyers search.",
        breakdown: {
          what: "ADS inventory automatically listed, and kept current, across the industry's major parts platforms, with inquiries routed back into the normal sales flow.",
          why: "A meaningful share of part searches starts on marketplace platforms, and listings there are effectively free shelf space. Manual listing is why most distributors ADS's size are barely present. Automation removes that excuse entirely.",
          worthKnowing:
            "Marketplace presence invites price comparison. It suits stocked lines and competitive positions more than every SKU. Listing strategy (what to show, what to hold back) is a commercial decision the system should follow, not make.",
          example:
            "A part arrives into stock Tuesday morning. By Tuesday afternoon it's live on the major platforms with condition, quantity and lead time, and an inquiry from a buyer ADS has never spoken to lands in the inbox by Thursday.",
        },
      },
    ],
  },
  {
    id: "move-faster",
    number: "03",
    tocLabel: "Move Faster Than Anyone",
    title: "Move Faster Than Anyone",
    statement: "In this industry, the fastest credible quote usually wins.",
    subline:
      "Four systems that could collapse hours of manual work into minutes, and free the most senior people from the most junior tasks.",
    closing:
      "Speed isn't a nice-to-have here. It's the difference between winning and coming second.",
    cards: [
      {
        id: "speed-quote-engine",
        title: "AI Quote Engine",
        tagline: "Tender in. Draft quote out. Human approves.",
        breakdown: {
          what: "The system reads incoming tenders, extracts every line item, checks against historical quoting data, gathers supplier pricing and availability, and assembles a draft quote ready for a person to review, adjust and send.",
          why: "Quoting is the money artery of the business, and today it consumes senior time on mechanical steps: extraction, portal checks, form-filling, re-keying. Compressing 2–3 hours to a 10-minute review means more tenders bid per day and faster responses on all of them. Speed that directly correlates with win rate.",
          worthKnowing:
            "The human stays in the loop by design. Complex or unusual parts need judgment no system should make alone, and pricing sign-off stays with people. It also depends on ERP integration. The depth of connection available shapes how seamless this can be.",
          example:
            "A 12-line tender lands at 9:04. By 9:15 a draft sits in the ERP: every line sourced, priced and margin-suggested, flagged where the system was uncertain. A person spends ten minutes on judgment instead of three hours on plumbing.",
        },
      },
      {
        id: "speed-inbox",
        title: "Email-to-ERP Inbox Agent",
        tagline: "RFQs become records before anyone opens the email.",
        breakdown: {
          what: "Every request landing in the shared inbox is read, classified, and turned into a structured draft entry with a suggested response, so the team starts from 80% done instead of zero.",
          why: "Direct RFQs by email are a core inbound channel for ADS, and each one currently means manual reading, extraction and re-keying before real work starts. This is also the natural first step toward the full Quote Engine. Same foundations, smaller scope, faster to prove.",
          worthKnowing:
            "Emails are messier than tender documents: attachments, typos, missing details. The system flags what it can't parse confidently rather than guessing, so accuracy expectations should be 'excellent triage', not 'perfect automation'.",
          example:
            "A client emails three part numbers with quantities at 07:40. By 07:41 there's a draft inquiry record in the ERP with all three lines structured, plus a suggested acknowledgement reply queued for approval before the team has made coffee.",
        },
      },
      {
        id: "speed-data-entry",
        title: "Data Entry Elimination",
        tagline: "Documents in. Structured data out. Nobody re-types anything.",
        breakdown: {
          what: "Incoming documents, whatever the format, are read, interpreted and pushed into the ERP as structured data automatically, with a human checking exceptions rather than typing everything.",
          why: "Multiple people currently spend their days moving information from documents into the system. It's the definition of automatable work: structured, repetitive, rule-based. Freeing those hours redirects real capacity toward clients, exceptions and account work, without anyone's day being about copy-paste anymore.",
          worthKnowing:
            "Format variety is the challenge. The system needs training on ADS's actual document flows, and the first weeks involve correcting it. Accuracy compounds fast, but it earns trust gradually. Run it parallel to the manual process until the numbers prove it.",
          example:
            "A supplier confirmation PDF arrives. Seconds later the order record is updated with confirmed pricing, lead time and condition, and the one field the system wasn't sure about is highlighted for a 10-second human check.",
        },
      },
      {
        id: "speed-chasing",
        title: "Order Status & Chasing Automation",
        tagline: "Suppliers chased. Clients updated. Nobody on hold.",
        breakdown: {
          what: "Lead-time checks, supplier status requests and client updates run automatically in the background. The ERP stays current, clients stay informed, and people only step in when something actually needs a decision.",
          why: "A real slice of the operations team's day is chasing: emailing suppliers for updates, telling clients where things are, syncing the answers into the system. None of it needs judgment until something slips, which is exactly when the system escalates to a human.",
          worthKnowing:
            "Supplier responsiveness varies, and some updates only exist in phone calls. The system handles the written channels and knows what it can't reach. Client-facing messages need careful templating so they read as ADS, not as a robot.",
          example:
            "Every open order past its check-in date gets an automatic supplier nudge. Replies update the ERP directly. Clients get a branded status note when their order changes state. The team's morning chase-list shrinks to only the orders that are actually in trouble.",
        },
      },
    ],
  },
  {
    id: "reliable",
    number: "04",
    tocLabel: "Be The Reliable One",
    title: "Be The Reliable One",
    statement:
      "Every competitor says they're reliable. There's a version where ADS proves it, publicly.",
    subline:
      "Reliability stops being a claim and becomes the brand: measured, visible, and built into every client interaction.",
    closing:
      "The most transparent distribution operation in defence aviation, and the receipts to prove it.",
    cards: [
      {
        id: "reliable-portal",
        title: "Client Portal 2.0",
        tagline: "Everything about your order, without a phone call.",
        breakdown: {
          what: "Live order tracking, full order history, two-click reordering, document downloads, and the cross-reference lookup built in. One login, everything visible.",
          why: "Clients currently call or email for status, which costs their time and the team's. A portal that answers those questions instantly becomes a reason clients prefer ADS, and every self-served answer is capacity handed back to the operations team.",
          worthKnowing:
            "Portals only work if the data behind them is live. It inherits everything from the ERP connection and the status automation. Half-current information is worse than none, so this ships after the plumbing, not before.",
          example:
            "A procurement manager logs in at 6am their time, sees all four open orders with live statuses, downloads the cert pack for last month's delivery, and reorders a consumable line. No email sent, no call made.",
        },
      },
      {
        id: "reliable-platform",
        title: "Platform Lookup",
        tagline: "Tell us what you fly. See everything we stock for it.",
        breakdown: {
          what: "Enter an aircraft platform and instantly see every relevant part ADS supplies for it. The way people expect to shop for car parts, applied to aviation.",
          why: "Buyers think in platforms; catalogues are organised by part number. Bridging that gap makes the portal dramatically more useful, surfaces stock a client didn't know ADS carried, and quietly showcases the breadth behind the distribution agreements.",
          worthKnowing:
            "It depends on clean platform-to-part mapping data, which takes real effort to build and maintain. Start with the platforms ADS's top clients actually fly rather than aiming for everything.",
          example:
            "A client selects their platform from a dropdown and gets a live, filterable view: every ADS-stocked part for that aircraft, by category, with availability shown. Three items they'd been sourcing elsewhere turn out to have been on ADS's shelf all along.",
        },
      },
      {
        id: "reliable-alerts",
        title: "Usage-Based Alerts",
        tagline: "Your consumables, on autopilot.",
        breakdown: {
          what: "The system learns each client's ordering rhythm and gets ahead of it, flagging when their regular items are due and reserving stock proactively.",
          why: "Consumables are repeat business by nature, but repeat currently depends on the client remembering to reorder. Getting ahead of the cycle locks in revenue that might otherwise go to whoever answered fastest that day, and it feels like service, not selling.",
          worthKnowing:
            "Only works where genuine patterns exist in the order history. Forced predictions on irregular items would feel like spam. Start with clients who have clearly rhythmic consumption and expand from evidence.",
          example:
            "'Your 90-day filter kits are due in ~3 weeks. Next batch reserved. Confirm to ship on your usual schedule.' One click, done, and the order never went to market.",
        },
      },
      {
        id: "reliable-white-glove",
        title: "White Glove Tier",
        tagline: "Premium handling for the parts that can't go wrong.",
        breakdown: {
          what: "A named premium service for sensitive and critical components: enhanced tracking, priority handling, dedicated communication, and priced accordingly.",
          why: "Some shipments matter more than others, and the clients shipping them know it. A defined premium tier captures value ADS currently gives away informally, and gives the reliability brand a flagship product to point at.",
          worthKnowing:
            "It's a service promise, not software. It only works if operations can genuinely deliver the elevated standard every time. Define it tightly, launch it small, let it earn its reputation.",
          example:
            "A sensitive avionics unit ships under the premium tier: dedicated tracking page, proactive milestone updates, priority handling at every step, named contact throughout. The client pays [X]% more and considers it the obvious choice.",
        },
      },
    ],
  },
  {
    id: "know-more",
    number: "05",
    tocLabel: "Know More Than Anyone",
    title: "Know More Than Anyone",
    statement: "ADS is sitting on 25 years of data almost nobody has used.",
    subline:
      "Every quote, every win, every loss, every supplier's real performance, captured since 2000. Four systems that could turn that archive into an unfair advantage.",
    closing: "Competitors have opinions. ADS could have data.",
    cards: [
      {
        id: "know-pricing",
        title: "Pricing & Win/Loss Intelligence",
        tagline: "Price every quote with 25 years of hindsight.",
        breakdown: {
          what: "The system learns which prices win, which suppliers actually deliver, and where margin hides, then guides every new quote with that history in view.",
          why: "Pricing today is experience and judgment, which works but lives in people's heads and leaves with them. Structured, the same knowledge guides every quote consistently, and it compounds: an edge no competitor can copy, because no competitor has the data.",
          worthKnowing:
            "It depends entirely on how structured the historical data actually is. The honest first step is an assessment of what's cleanly usable. And it advises rather than decides: pricing authority stays exactly where it is today.",
          example:
            "Quoting a familiar part type: the screen shows win rates at three margin levels from ADS's own history, plus the two suppliers who've actually hit their quoted lead times on it. The quote goes out sharper, in half the deliberation.",
        },
      },
      {
        id: "know-obsolescence",
        title: "Obsolescence Watchdog",
        tagline: "Know a part is dying before the client does.",
        breakdown: {
          what: "Constant monitoring of end-of-life and last-time-buy announcements across the platforms ADS's clients fly, surfaced as proactive alerts, to the team and then to clients.",
          why: "Obsolescence is a permanent feature of platforms that fly for 40–50 years, and today the news travels by luck. Being the supplier who calls first, 'this part is going end-of-life, shall we secure stock?', turns ADS from vendor into advisor, and last-time buys are naturally large orders.",
          worthKnowing:
            "Sources are scattered (OEM notices, bulletins, distributor communications), so coverage builds over time rather than arriving complete. Alerts need human review before anything goes to a client. A false alarm costs credibility.",
          example:
            "The Watchdog flags an EOL notice on a component fitted across two clients' fleets. The team reviews it, confirms, and both clients get a heads-up with a last-time-buy option, weeks before either would have heard through normal channels.",
        },
      },
      {
        id: "know-email",
        title: "Structured Email Marketing",
        tagline: "Professional campaigns, not one-off emails.",
        breakdown: {
          what: "Designed, branded HTML email campaigns to segmented client lists: obsolescence alerts, new distribution lines, stock arrivals, market notes. Replacing ad-hoc plain-text sends.",
          why: "ADS's relationships already live in inboxes; the channel exists, it's just unstructured. Branded campaigns keep ADS present between orders, make announcements look like the £30M company sending them, and cost almost nothing to run once templated.",
          worthKnowing:
            "It only works with a maintained, segmented list driven by real ERP/CRM data. And in a small industry, over-sending burns goodwill fast. Quarterly-rhythm quality beats weekly noise, every time.",
          example:
            "ADS-branded header. Subject: 'New distribution line: [OEM name]'. One-line intro. A product row showing part family, condition and lead time. Single button: View availability. Clean footer with contact and unsubscribe.",
          visualKey: "email-mock",
        },
      },
      {
        id: "know-report",
        title: "The State of Military Spares Report",
        tagline: "The industry report everyone forwards, with ADS on the cover.",
        breakdown: {
          what: "An annual, data-backed report on pricing trends, lead times and supply-chain patterns, drawn from ADS's own anonymised data plus public sources.",
          why: "Nobody at ADS's size publishes anything like it. Authority of this kind is usually the preserve of the giants. It earns press mentions, inbound conversations and forwards to exactly the right desks, and it makes the data asset visible in a way a database never is.",
          worthKnowing:
            "Anonymisation has to be genuinely careful. In a small industry, patterns can identify clients if handled clumsily. And it's a yearly commitment: one strong edition beats three thin ones, so scope it modestly the first year.",
          example:
            "A 20-page first edition: five findings from ADS's own lead-time data, three pricing trend charts, one platform spotlight, one obsolescence outlook. Released with a LinkedIn push and emailed to every client, then referenced in conversations for the rest of the year.",
        },
      },
    ],
  },
  {
    id: "run-itself",
    number: "06",
    tocLabel: "Built To Run Itself",
    title: "Built To Run Itself",
    statement:
      "The strongest businesses don't depend on any one person. Including the owners.",
    subline:
      "Four systems that capture knowledge, document the machine, and make ADS more resilient, and more valuable, every month they run.",
    closing: "Resilience isn't just protection. It's what makes a business worth more.",
    cards: [
      {
        id: "run-compliance",
        title: "Compliance Copilot",
        tagline: "Decades of export-control judgment, searchable in seconds.",
        breakdown: {
          what: "Export-control knowledge, precedent decisions and regulatory references captured into a system the whole team can query in plain English, with the expert reviewing anything novel.",
          why: "Compliance is among ADS's most specialised functions and it lives mostly in expert heads. Captured, it answers routine questions instantly, keeps decisions consistent, and means the expertise scales instead of queueing. Resilience for one of the business's most critical single points of knowledge.",
          worthKnowing:
            "Compliance is exactly where AI must assist rather than decide. The copilot cites sources and precedent, and a human owns every call. It's a reference library with a brain, not an automated approver.",
          example:
            "A salesperson asks: 'end-user in [country], part classified [X]. What applied last time?' The copilot surfaces the two relevant precedents and the licensing route used, in seconds. The expert confirms in one glance instead of reconstructing it from memory.",
        },
      },
      {
        id: "run-onboarding",
        title: "Onboarding-in-a-Box",
        tagline: "New hires productive in days, not months.",
        breakdown: {
          what: "Every process captured once (screen recordings with AI-generated step-by-step documentation) becomes a permanent, searchable training library that onboards every future hire.",
          why: "ADS is onboarding right now, and training currently consumes the time of exactly the senior people who can least spare it. Captured once, the knowledge trains everyone after, and standards stop depending on who happened to do the training.",
          worthKnowing:
            "Documentation goes stale. It needs a light rhythm of upkeep and an owner, or it quietly rots. The capture itself is easy. The habit is the discipline.",
          example:
            "A new account manager's first week: a structured playlist of short process videos with written steps beside each. By Friday they've processed a live inquiry with a checklist instead of a shadow, and asked their mentor questions that actually needed a human.",
        },
      },
      {
        id: "run-dashboards",
        title: "Documented Systems & Dashboards",
        tagline: "See the whole business on one screen.",
        breakdown: {
          what: "The ERP and its processes documented properly, with live dashboards showing profitability per product line and per customer. Decisions made on current numbers instead of instinct and memory.",
          why: "The business runs on a system built over 25 years, understood deeply by very few people. Documenting it protects against the unthinkable, speeds up every future improvement, and the dashboards turn a rich archive into a management instrument.",
          worthKnowing:
            "Documenting a long-evolved system is genuinely unglamorous work that needs the IT lead's time and buy-in. It competes with keeping everything running, so it has to be resourced, not squeezed in.",
          example:
            "A monthly view: margin by product family, profitability by customer, quote volumes and win rates trending. Visible in one screen, current to yesterday, no spreadsheet archaeology required.",
        },
      },
      {
        id: "run-agreements",
        title: "Agreement Pipeline System",
        tagline: "Turn moat-building into a machine.",
        breakdown: {
          what: "A living system for pursuing new distribution lines: a target list of OEM product lines, tracked outreach and relationship stages, and a simple business case behind every pursuit.",
          why: "Distribution agreements are ADS's real competitive weapon. They're what makes the margin defensible. Winning them has historically been opportunistic. A pipeline makes it deliberate, reviewable and constant, the same way the industry's biggest names treat it.",
          worthKnowing:
            "The system organises the pursuit. The relationships, credibility and capital commitments remain entirely human work. It's a discipline tool, not a shortcut. The wins still take as long as OEMs take.",
          example:
            "A standing monthly review: twelve target lines on the board, each with owner, stage, last contact and a one-paragraph case. Two conversations progressing, one proposal out, one signed this year, and the next targets already queued behind it.",
        },
      },
    ],
  },
  {
    id: "horizon",
    number: "07",
    tocLabel: "The Horizon",
    title: "The Horizon",
    statement:
      "Defence spending is in a once-in-a-generation supercycle. The question is how much of it ADS captures.",
    subline:
      "Beyond the systems: the directions the business could grow, mapped as Now / Next / Later, with honest reasoning on each.",
    closing:
      "The industry's biggest players are building their edges. There's no reason ADS can't build sharper ones.",
    cards: [
      {
        id: "horizon-repair",
        title: "The Repair Loop",
        tagline: "Enter the repair business without owning a workshop.",
        breakdown: {
          what: "Rotable parts (landing gear, actuators, avionics) cycle through repair shops constantly, and someone has to manage that journey: routing, tracking, certification paperwork, client communication. A management system puts ADS at the centre of that loop with zero workshops owned.",
          why: "It's a natural extension of what ADS already does. Logistics, compliance and coordination are the existing core skills, just pointed at repairs instead of sales. It adds a service revenue stream to existing clients, deepens the relationship, and clips margin on a cycle that currently passes ADS by. Vertical integration into actual repair capability can come later, if ever. The system is the low-risk way in.",
          worthKnowing:
            "It needs repair-shop relationships and enough rotable volume through existing clients to justify itself. Worth validating demand with two or three key accounts before building anything. Turnaround-time promises depend on shops ADS doesn't control.",
          example:
            "ADS owns the experience. Partners own the workshops. Client books through ADS, ADS routes and tracks, the approved shop does the work, ADS handles QC docs and return logistics.",
          visualKey: "repair-loop",
        },
      },
      {
        id: "horizon-gulf",
        title: "The Gulf Push",
        tagline:
          "The fastest-growing defence market on earth. And there's already a foot in the door.",
        breakdown: {
          what: "Gulf states are pouring money into defence and increasingly requiring local presence and localisation from suppliers. ADS has a director on the ground in Dubai today. Most UK competitors have nobody within a thousand miles.",
          why: "Step one costs almost nothing: deliberate, systematic relationship-building across the region (events, introductions, procurement communities) run from where there's already presence. If traction follows, it can grow in stages: partnerships, then local presence, then potentially local stock. The option value is enormous and the entry price is time.",
          worthKnowing:
            "Gulf defence procurement runs on long relationship cycles and localisation requirements are real and rising. This is a multi-year patience play, not a quick channel. Formal entity/licensing questions only need answering if stage one shows real pull.",
          example:
            "Now: relationships from Dubai. Later: presence. The region's procurement hubs sit around a foot that's already planted.",
          visualKey: "gulf-map",
        },
      },
      {
        id: "horizon-consignment",
        title: "Consignment & Long-Term Agreements",
        tagline: "From winning orders to owning contracts.",
        breakdown: {
          what: "Consignment means ADS-owned stock physically held at client sites, invoiced automatically as it's used. LTAs are standing agreements on predictable lines. Both convert win-it-each-time revenue into recurring, contracted revenue.",
          why: "Recurring contracted revenue is the most valuable kind a distribution business can have. It smooths cash flow, deepens client lock-in, and it's precisely what few mid-size players offer because they lack the systems to track remote stock and bill on use. With the systems from earlier chapters in place, ADS wouldn't.",
          worthKnowing:
            "Consignment ties up ADS capital in stock sitting at client sites. It suits high-confidence, high-rhythm lines with trusted accounts, not everything. The tracking and auto-invoicing systems must exist and be trusted before the first pallet ships.",
          example:
            "The client never runs out. ADS never chases the order. Stock at site, usage detected, automatic invoice, replenishment trigger, stock level restored.",
          visualKey: "consignment-flow",
        },
      },
      {
        id: "horizon-obsolescence",
        title: "The Obsolescence Division",
        tagline: "A second business hiding inside the first.",
        breakdown: {
          what: "Military platforms fly for decades after OEMs abandon their parts, and someone has to solve that: last-time-buy stock positions, alternate sourcing, re-engineering partnerships for parts nobody makes anymore. This is a dedicated division doing exactly that.",
          why: "It's some of the highest-margin work in the industry, because clients facing an obsolete part on a flying platform have almost no alternatives. The Obsolescence Watchdog from Chapter 05 plants the seed. It generates the intelligence and the client conversations this division would grow from. ADS's platform knowledge and client trust are exactly the right foundations.",
          worthKnowing:
            "It's capital-hungry (last-time buys mean big stock positions held for years) and re-engineering involves certification complexity that demands the right partners. It earns its place after the intelligence systems have proven where the demand actually is. That's why it's Later, not Now.",
          example:
            "Year one of the division: three last-time-buy programmes running for key clients, one alternate-sourcing win on an out-of-production component, one re-engineering partnership scoped. Each deal individually larger than a typical spares order.",
        },
      },
      {
        id: "horizon-tech",
        title: "The Technology Edge",
        tagline: "Every system on this page is something the industry doesn't have.",
        breakdown: {
          what: "Six of the systems described here don't meaningfully exist in this industry today, not at mid-size distributor level: Tender Discovery, Cross-Reference Rescue, the Obsolescence Watchdog, Pricing Intelligence built on decades of real quote data, the Repair Loop OS, and the Consignment Manager. Each one built for ADS is an edge competitors don't have.",
          why: "Technology capability compounds. Each system makes the next one easier (they share the same data plumbing), and together they create an operational gap competitors can't close by hiring. A distributor that finds more tenders, rescues more sales, prices smarter, warns clients first and manages repair loops isn't competing on the same field anymore.",
          worthKnowing:
            "Edges like these are strongest when they stay quiet. The advantage is in the results clients feel, not in publicising the tooling. Prioritisation matters too: built in the wrong order, systems wait on plumbing that doesn't exist yet. That sequencing is a conversation, not a page.",
          example:
            "Six quiet capability tiles around ADS. Understated by design. Industry today: none of these.",
          visualKey: "tech-edge-tiles",
        },
      },
    ],
  },
];

export const horizonBands = {
  now: ["horizon-repair", "horizon-gulf"],
  next: ["horizon-consignment"],
  later: ["horizon-obsolescence", "horizon-tech"],
} as const;

export const closeBlock = {
  id: "things-worth-considering",
  headline: "Things worth considering.",
  subline:
    "If any of this resonates, the ideas naturally fall into three groupings. Each one makes the next easier.",
  finalLine:
    "No assumptions, no obligations. These are the ideas. The conversation is the next step.",
};

const blockTocLabels: Record<string, string> = {
  "foundation-website": "New website",
  "foundation-portal": "Portal direction",
  "foundation-seo": "SEO land-grab",
};

export const tocItems: TocItem[] = [
  { id: hero.id, label: "00 · Start Here" },
  ...chapters.map((chapter) => ({
    id: chapter.id,
    label: `${chapter.number} · ${chapter.tocLabel}`,
    children: [
      ...(chapter.blocks?.map((block) => ({
        id: block.id,
        label: blockTocLabels[block.id] ?? block.headline,
      })) ?? []),
      ...(chapter.id === "move-faster"
        ? [{ id: "move-faster-timeline", label: "Today vs engine" }]
        : []),
      ...(chapter.id === "reliable"
        ? [{ id: "reliable-promise", label: "Response promise" }]
        : []),
      ...(chapter.cards?.map((card) => ({
        id: card.id,
        label: card.title,
      })) ?? []),
      ...(chapter.id === "horizon"
        ? [{ id: closeBlock.id, label: "Things worth considering" }]
        : []),
    ],
  })),
];

export function getOutlineItems() {
  return tocItems;
}
