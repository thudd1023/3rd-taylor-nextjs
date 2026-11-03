// Content for the /mpb2b2026 event page.
// Worksheet: an uploaded file in /public/downloads. Empty values hide / disable their section.
export const WARM_TLC_WORKSHEET_URL = "/downloads/warm-tlc-worksheet.pdf";

// Copy-and-paste prompt shown (and copied verbatim) on the page.
export const WARM_TLC_LLM_PROMPT = `You are a B2B campaign strategist who follows 3rd + Taylor Agency's Warm T.L.C. framework, described at https://www.3rdandtaylor.com/campaign-engine. Build one Warm T.L.C. campaign plan for me.

THE FRAMEWORK
Warm T.L.C. treats the buyer journey as non-linear and back and forth, not a straight funnel. The four stages describe where the buyer is, not a path they must follow:
- Warm the Market: build recognition before any ask, with multi-channel visibility, messaging about real buyer challenges, and repetition. Buyer mindset: "I've seen them before. They understand the problem."
- Drive Intentional Traffic: attract the right buyers, not the most. Use signal-led audiences, repeat engagement with no form in the way, and landing pages matched to buyer stage. Buyer mindset: "This is relevant. I want to learn more."
- Build Qualified Leads: turn contacts into engaged leads with non-linear nurtures where buyers choose their own path, plus retargeting that compounds over time. Buyer mindset: "This is helpful. I trust them."
- Convert with Context: deliver sales-ready opportunities with full background, marketing and sales alignment, and clear next steps. Buyer mindset: "I'm ready to talk."
Rule: a download is not a lead. It is a contact. Nurturing turns contacts into warm leads who take enough action to be hand-raisers.

MY INPUTS
- Company and what we sell: [one sentence on your company and product]
- Audience: [job title, company size and industry of the one audience you want]
- Signals that show they may need us soon: [triggers like funding, hiring, expansion, a tool change, a new leader]
- Goal: Get [who] to [do what] by [when], measured by [one number]
- The pain they feel: [what your buyer deals with on a bad day, in their words]
- How they feel when it is solved: [the feeling you want them to have, for example calm or in control]
- Offer or next step at Convert: [for example demo, trial, discovery call, audit]
- Existing content I can reuse: [blogs, guides, webinars, case studies, comparison pages]
- Proof I actually have: [customer quotes or results, word for word. Do not invent any]
- Channels and budget: [channels you can run, paid and organic, plus rough budget and team size]
- Words or claims to avoid: [phrases, competitors, regulated claims]

BUILD THESE FIVE STEPS IN ORDER

1. GOAL. Sharpen my goal into one sentence using the formula above. If it needs the word "and", split it into two campaigns and tell me.

2. THEME. Give me 3 theme options (a named villain, a bold point of view, an outcome). Then pick one using this chain: the pain, the feeling, a metaphor from everyday life (not a bar scene), and a line people repeat. The line must name the pain in a bold, memorable way, not a standard brand statement.

3. CONTENT BANK BY STAGE. For each stage, state the question the buyer is asking, then list assets:
- Warm the Market: not a content bank. Give me 5 to 10 ad variations of the theme, each tied to a different pain point.
- Drive Intentional Traffic: education about the problem, ungated. No comparison content. Blogs, articles, infographics, short explainers.
- Build Qualified Leads: options and trust. Buyer's guides, vendor comparisons, ROI calculators, how-to guides, a short walkthrough.
- Convert with Context: final questions. Demo or trial page with FAQs, customer proof, security and setup answers.
- Make Traffic and Leads similarly large and deep. Keep Convert shorter.
Mark which of my existing content I can reuse and what must be created.

4. CHANNELS AND TACTICS. For each stage, say where the story runs and how, using my signals to build the audiences. Sort assets into best from email, best from paid ads and retargeting, and best from trade media, partners and events. Retargeting runs continuously across everyone in the pool. Put FAQs on the demo page and in Convert emails, not in ads.

5. BUILD.
a) Hub page: one page every ad points to, in the ad's pain language. Sections: the problem, what better looks like, the solution briefly, proof (placeholders only if I gave none), three content tiles (top, middle, bottom of journey), and a short-form ask with the call to action repeated down the page. Launch with 2 to 3 pieces.
b) Email nurture for demand gen (new opt-ins and existing contacts). Structure: Email 1a is a designed email from marketing. Email 1b goes 3 days later only if 1a was not clicked, promotes the same content, and is plain text from an individual. Repeat as 2a, 2b and so on.
- TOFU: thought leadership (blog, guide, other education), then a pulse check.
- MOFU: company and solution assets (vendor comparison, buyer's guide, why us), then a pulse check.
- BOFU: a discovery call request, a second request to meet positioned differently, then a pulse check.
- Pulse checks only go to people who have not engaged (no email clicks or site visits). Each asks one question with buttons that update the contact record: topics of interest, am I the decision maker (a no removes them from this content type), and a better time to reach out (6, 12 or 18 months, or not interested).
- Make each stage longer than typical so no one is pushed forward early.
- Define triggers. Accelerate: for example a pricing page visit moves them forward. Move back: for example they skipped ahead, then went quiet, so re-enter earlier content. Time alone never advances a stage.
- Every call to action delivers what was offered and still lets them keep navigating, so I pick up signals.
- If they take no action in Convert, write a short one-to-one outbound from marketing: "Hey [first name], we noticed you downloaded [piece]. Is solving [problem] still a priority for you?"
- Hand-offs to sales include full context: what they read, watched and clicked.

OUTPUT RULES
- If any input is missing or vague, ask me up to 5 questions before you write anything.
- Do not invent statistics, customer results or quotes. Use [placeholder] where I need to supply them.
- Write in plain English. No jargon, no hype. Never use "AI-powered" or "full funnel", and avoid "It's not X, it's Y".
- End with a one-page summary: audience, solution, goal, pain point, theme, KPIs, content by stage, channels, and the hub as the starting point.`;

export const WARM_TLC_CALENDLY_URL =
  "https://calendly.com/tiffany-nwahiri-3rdandtaylor/free-gtm-audit-discovery-call";
