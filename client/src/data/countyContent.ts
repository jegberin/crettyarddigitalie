// County landing-page content. Each profile feeds <CountyLandingPage>
// with genuinely unique copy per county, so the generated pages don't
// read as near-duplicates.
//
// Tone rule: lead with the customer's world (sector mix, market shape,
// what buyers actually care about). Avoid framing that positions us
// against "Dublin agencies" or similar competitors — the business is
// nationwide, not an alternative to a city agency.

import heroDublin from "@assets/wd-dublin-hero-hapenny-bridge-dusk.webp";
import heroCork from "@assets/wd-cork-hero-city-streets.webp";
import heroGalway from "@assets/wd-galway-hero-river-sunset.webp";
import heroLimerick from "@assets/wd-limerick-hero-shannon-riverside.webp";
import heroWaterford from "@assets/wd-waterford-hero-peoples-park.webp";

export type CountySlug = "dublin" | "cork" | "galway" | "limerick" | "waterford";

export type CountyProfile = {
  slug: CountySlug;
  name: string;         // "County Dublin"
  shortName: string;    // "Dublin"
  heroImage: string;
  heroImageAlt: string;
  mainTowns: string[];
  leo: { headline: string; detail: string };
  dominantSectors: string;       // 1-line summary of the county's commercial mix
  economicAnchor: string;        // unique paragraph — the county's distinguishing economy
  marketContext: string;         // unique paragraph — the shape of the SME market
  heroAngleWebDesign: string;    // unique hero subline, web design
  heroAngleItSupport: string;    // unique hero subline, managed IT
  searchTerms: string[];         // 12 distinct terms mixing county × town × sector
  whyUsAngles: { title: string; desc: string }[]; // 4 angle cards per county
  faqsWebDesign: { q: string; a: string }[];      // 3 county-specific FAQs
  faqsItSupport: { q: string; a: string }[];      // 3 county-specific FAQs
  ctaLine: string;               // invitational line for the spotlight CTA
};

export const COUNTIES: Record<CountySlug, CountyProfile> = {
  dublin: {
    slug: "dublin",
    name: "County Dublin",
    shortName: "Dublin",
    heroImage: heroDublin,
    heroImageAlt: "Moody dusk view of Dublin's Ha'penny Bridge over the River Liffey with historic city buildings reflecting in the water",
    mainTowns: ["Dublin city", "Swords", "Tallaght", "Blanchardstown", "Dún Laoghaire", "Balbriggan"],
    leo: {
      headline: "Dublin has four Local Enterprise Offices",
      detail: "LEO Dublin City (Wood Quay), LEO Fingal (Swords), LEO South Dublin (Tallaght) and LEO Dún Laoghaire-Rathdown each administer the Grow Digital Voucher for their catchment — 50% of new software subscriptions up to €5,000 for businesses with 1–50 employees. Which one you apply to depends on the registered address of your business, not where you do the work.",
    },
    dominantSectors: "professional services, tech, creative and media, hospitality, retail, startups",
    economicAnchor: "Dublin runs the broadest SME economy in Ireland. The IFSC anchors financial services; Silicon Docks and the Grand Canal Dock concentrate tech and startup activity; the city centre and suburban corridors host a dense professional services layer (law, accountancy, consulting) plus a substantial hospitality and retail base serving both the local population and tourism flows. Roughly 40% of Ireland's economic activity happens inside the M50.",
    marketContext: "Dublin SME buyers are digital-native and patient with nobody. They've seen good work, they recognise stock photography and template copy instantly, and they're paying attention to how well you articulate what you do. The competitive set for any small business here is crowded — and the winners are almost always the ones whose website, email address, and IT setup don't undercut the quality of their work.",
    heroAngleWebDesign: "A Website That Stands Up in Ireland's Busiest SME Market",
    heroAngleItSupport: "Managed IT for Dublin's Professional Services, Tech, and Creative SMEs",
    searchTerms: [
      "\"web designer Dublin\"",
      "\"web design Swords\"",
      "\"IT support Tallaght\"",
      "\"solicitor website Dublin 2\"",
      "\"accountant website D4\"",
      "\"Microsoft 365 Dublin\"",
      "\"consultancy website D6\"",
      "\"startup web design Dublin\"",
      "\"IT support Blanchardstown\"",
      "\"web design Dún Laoghaire\"",
      "\"local SEO Dublin\"",
      "\"managed IT Dublin city\"",
    ],
    whyUsAngles: [
      { title: "Enterprise Standards, SME Scale", desc: "Fifteen years inside Microsoft, Intel, and Dell. The same engineering discipline and security posture applied to a Dublin SME — without the corporate ceremony or the corporate bill." },
      { title: "One Partner, Full Stack", desc: "Website, professional email, Microsoft 365 tenant, managed IT, cybersecurity, and compliance — all from one person who keeps them working together. You stop juggling providers and start using your technology." },
      { title: "Direct Access, No Ticket Queue", desc: "Every enquiry, change request, and incident comes straight to Joey. No account manager introduction calls, no queue position, no re-explaining your setup to a new tier-2 agent." },
      { title: "Sector-Fluent for Dublin", desc: "Dublin SMEs concentrate in professional services, tech, creative, and hospitality — each with its own compliance edges (GDPR rigour for solicitors, IFSC-adjacent security for fintech, EAA for anyone selling online). Built in, not bolted on." },
    ],
    faqsWebDesign: [
      {
        q: "What kinds of Dublin businesses do you typically build for?",
        a: "A good cross-section of the Dublin SME layer: professional firms (accountants, solicitors, consultants) who need a site that builds trust from the first scroll; tech and B2B startups who need the site to hold up against polished competitors; and independent hospitality, retail, and service businesses who live off Google local search and the specific intent-rich queries the big aggregators can't rank for. Every build uses the same fixed-quote process and comes with a mandatory care plan so the site doesn't degrade over time.",
      },
      {
        q: "Do you meet Dublin clients in person, or is it all remote?",
        a: "A mix, depending on what the step actually needs. Kick-offs, stakeholder workshops, and launch reviews are often better face-to-face — Dublin from Crettyard is about ninety minutes door-to-door, so day trips work both ways. For weekly design reviews, content sign-off, and iteration, Teams is faster and produces a clearer paper trail than sitting in a meeting room. The goal is the right mode per step, not padded travel.",
      },
      {
        q: "Which of Dublin's four LEOs do I apply to for the Grow Digital Voucher?",
        a: "Whichever LEO covers the address your business is registered at. LEO Dublin City handles postcodes inside the canals; LEO Fingal covers Swords, Balbriggan, and the north suburbs; LEO South Dublin runs Tallaght, Clondalkin, and Lucan; LEO Dún Laoghaire-Rathdown takes the coastal south. The scheme rules are identical across all four — the same 50% cap, the same €5,000 ceiling, the same Digital for Business prerequisite — but the application has to go through the right one or it bounces.",
      },
    ],
    faqsItSupport: [
      {
        q: "We're a ten-person professional services firm in the city centre. What does managed IT actually look like?",
        a: "On the Essential plan (€45/user/month): a properly hardened Microsoft 365 tenant with MFA enforced, Microsoft Defender for Endpoint on every device, cloud-to-cloud backup for mail and files, conditional access, patch management, and a direct line to Joey when something needs a human. At ten users that's €450/month — usually less than the billable time a firm currently loses to IT admin, waiting on suppliers, and recovering from preventable incidents.",
      },
      {
        q: "Our corporate clients keep asking about our IT security posture. Can you help us respond?",
        a: "Yes — this is one of the most common requests from Dublin professional firms, and the questionnaires are becoming standardised. I implement the technical measures behind the answers (MFA, Microsoft Defender, Intune device management, conditional access, encrypted backup, secure email) and maintain a documentation pack that includes an information-security overview, an access-control policy, an incident-response summary, and a backup and retention statement. When the vendor questionnaire arrives, you answer from the pack rather than starting from scratch.",
      },
      {
        q: "How does support actually work when something goes wrong?",
        a: "Your environment is monitored — 365 tenant health, endpoint security, backup jobs, patch status — so the majority of incidents get caught before they're visible to you. When something does need a human, a WhatsApp or Teams message reaches me directly, not a queue. For on-site work (swapping a failed device, for example), I coordinate with a Dublin engineer or schedule a same-week visit — and I'll tell you which up front rather than pretending distance doesn't exist.",
      },
    ],
    ctaLine: "Based in Dublin and looking for a direct, one-person IT and web partner? Let's start with a free chat about what you actually need.",
  },

  cork: {
    slug: "cork",
    name: "County Cork",
    shortName: "Cork",
    heroImage: heroCork,
    heroImageAlt: "Colourful terraced buildings and a lively street scene in Cork, Ireland capturing the city's distinctive character",
    mainTowns: ["Cork city", "Ballincollig", "Mallow", "Midleton", "Carrigaline", "Cobh", "Bandon", "Kinsale", "Fermoy"],
    leo: {
      headline: "Cork has three Local Enterprise Offices",
      detail: "LEO Cork City, LEO Cork North & West (offices in Mallow and Skibbereen), and LEO Cork South between them cover the largest county in Ireland by area. The Grow Digital Voucher rules are identical across all three — 50% of new software subscriptions up to €5,000, 1–50 employees, a Digital for Business consultation first — but the application lodgement depends on where your business is registered.",
    },
    dominantSectors: "pharma and medtech, tech, food production, hospitality and tourism, marine and port",
    economicAnchor: "Cork is Ireland's second city and runs a notably different economy from Dublin. Apple's European headquarters in Hollyhill employs roughly 6,000 people; Pfizer and Eli Lilly operate major pharmaceutical manufacturing sites; the Tyndall National Institute at University College Cork leads national research in semiconductors and photonics. Outside the city, the pharma corridor stretches through Ringaskiddy and Dunderrow, while the food cluster around Mitchelstown and Fermoy supplies both Dairygold and the wider Kerry-adjacent export chain.",
    marketContext: "Cork's SME base divides roughly three ways: suppliers feeding the pharma and tech multinationals, hospitality operators working the Kinsale and West Cork tourism economy, and food-production businesses sitting between family farms and export-grade manufacturing. Cork buyers value authenticity and directness — they can spot a generic pitch from the next county over, and they prefer plain English to polished marketing.",
    heroAngleWebDesign: "A Website Built for Cork — From Kinsale Kitchens to Ringaskiddy Suppliers",
    heroAngleItSupport: "Managed IT for Cork Pharma Suppliers, Food Producers, and Hospitality Operators",
    searchTerms: [
      "\"web design Cork\"",
      "\"web designer Cork city\"",
      "\"IT support Ballincollig\"",
      "\"Microsoft 365 Cork\"",
      "\"restaurant website Kinsale\"",
      "\"accountant website Cork\"",
      "\"B&B website West Cork\"",
      "\"pharma supplier IT Cork\"",
      "\"web designer Midleton\"",
      "\"solicitor website Cork\"",
      "\"hotel website Cork\"",
      "\"IT support Carrigaline\"",
    ],
    whyUsAngles: [
      { title: "One Partner, Full Stack", desc: "Website, Microsoft 365, managed IT, cybersecurity, and compliance — from one person who keeps them joined up. For most Cork SMEs this replaces three or four suppliers with one point of contact who already knows the setup." },
      { title: "Pharma and Tech Supply Chain Ready", desc: "Cork's Ringaskiddy and Hollyhill multinationals audit their suppliers hard. Technical controls (MFA, endpoint monitoring, encrypted backup) plus the documentation pack that answers the vendor questionnaire on the first pass — both included by default." },
      { title: "Hospitality That Actually Books", desc: "Kinsale, Cobh, and West Cork hospitality businesses live on direct bookings, solid photography, and a Google Business Profile that converts. I build the full loop, not just the homepage — which is the difference between a site that exists and a site that fills the diary." },
      { title: "Plain English and Direct Answers", desc: "No account managers, no jargon, no waiting three days for a tier-2 agent to come back with a clarifying question. You deal with Joey, who built your setup and knows it cold." },
    ],
    faqsWebDesign: [
      {
        q: "I'm based in West Cork — is that too far for a sensible working relationship?",
        a: "Not in the slightest. West Cork hospitality, B&Bs, and food producers are some of the best-fit projects I take on, and the delivery model is the same whether you're in Bantry or on the Laois border. Discovery calls happen over Teams; the build happens in my studio; sign-off and launch happen remotely. If a kick-off face-to-face matters to you, a drive down is a fair trade for the quality of work we'll do together.",
      },
      {
        q: "We supply Pfizer / Eli Lilly / Stryker. Do you understand what their procurement teams look for?",
        a: "Yes — supplying into the pharma plants is exactly the kind of buyer this service was built for. Pharma procurement increasingly pushes security questionnaires and quality documentation down their Tier 2 and Tier 3 suppliers: MFA, documented access control, endpoint protection, backup with a tested restore, and an incident-response statement. I implement the controls and maintain the documentation so the audit is answered rather than improvised.",
      },
      {
        q: "How do the three Cork LEOs differ in practice?",
        a: "The Grow Digital Voucher scheme is national — same 50% cap, same €5,000 ceiling, same Digital for Business prerequisite across LEO Cork City, LEO Cork North & West, and LEO Cork South. What varies is the enterprise officer you end up working with, the local session calendar, and (in practice) processing speed during busy periods. LEO Cork City typically has the tightest schedule because demand is heaviest there.",
      },
    ],
    faqsItSupport: [
      {
        q: "How do you handle the vendor security documentation our pharma customers ask for?",
        a: "I maintain a standardised pack per client: an information-security overview, an access-control policy, an incident-response summary, a backup-and-retention statement, and a list of technical controls in force (MFA, conditional access, Microsoft Defender for Endpoint, Intune, encrypted backup). When your pharma customer sends their questionnaire, you answer from that pack rather than starting from scratch. It scales from two-person suppliers to thirty-person subcontractors without turning IT into a compliance industry.",
      },
      {
        q: "Our Kinsale venue gets slammed in peak season and the Wi-Fi gives up. Can you actually fix that?",
        a: "Yes, and it's usually a cleaner fix than people expect. The pattern is almost always consumer-grade access points trying to handle 80+ guest devices on the same radio channel, with the POS and card machine sharing the same network as streaming guests. Proper business-grade APs, a dedicated VLAN for payment and back-office traffic, QoS for the card machine, and in some cases a 4G failover for the reader, solves it for well under four figures in most venues. A site survey settles the exact combination.",
      },
      {
        q: "We're six staff in a food-production business outside Mitchelstown. What do we actually get for €45 per user per month?",
        a: "The Essential tier covers managed Microsoft 365 (mailboxes, OneDrive, SharePoint), MFA and conditional access, Microsoft Defender for Endpoint on every device, cloud-to-cloud backup for mail and files, patch management, and a direct line to me when something needs a human. At six users that's €270 a month — typically less than the cost of a single emergency call-out and the trading day lost around it.",
      },
    ],
    ctaLine: "Based in Cork? Let's have a straightforward conversation about your website, 365, or IT — in plain English and with a clear price.",
  },

  galway: {
    slug: "galway",
    name: "County Galway",
    shortName: "Galway",
    heroImage: heroGalway,
    heroImageAlt: "Galway riverfront at sunset with historic stone buildings along the Corrib and calm water reflecting the evening sky",
    mainTowns: ["Galway city", "Salthill", "Oranmore", "Tuam", "Athenry", "Ballinasloe", "Loughrea", "Clifden"],
    leo: {
      headline: "LEO Galway operates from two offices",
      detail: "LEO Galway's main office is in Liosbán Industrial Estate on the Tuam Road, with a secondary presence in Ballinasloe serving the eastern county. The Grow Digital Voucher rules are the national default — 50% of new software subscriptions up to €5,000 — but the LEO officers have strong visibility into the medtech cluster and the tourism ecosystem, and will often flag sector supports (Enterprise Ireland innovation vouchers, trading-online supports) during the Digital for Business consultation.",
    },
    dominantSectors: "medtech and medical devices, marine and ocean sciences, tourism and hospitality, tech, craft and design",
    economicAnchor: "Galway is the medtech capital of Ireland. Medtronic's Parkmore campus, Boston Scientific, Merit Medical, Creganna, and a supporting cluster of roughly 250 medical-device companies have made the city a centre of excellence for devices and instruments. The Marine Institute in Oranmore anchors Irish marine science, the Insight Centre for Data Analytics at the University of Galway works at the leading edge of AI research, and the city was designated European Capital of Culture in 2020.",
    marketContext: "Galway SMEs tend to sit in one of two quite different ecosystems. Medtech supply-chain suppliers face rigorous vendor audits — quality documentation, traceability, and serious IT security expectations pushed down from the device makers. Tourism and hospitality businesses — B&Bs in Connemara, cafés on Shop Street, Aran Islands operators — live on seasonal booking volume, Google Maps visibility, and Wi-Fi reliability on peak weekends. A digital partner who can only handle one of these isn't much use to the county.",
    heroAngleWebDesign: "Websites for Galway's Medtech Corridor, Connemara Tourism, and Creative Scene",
    heroAngleItSupport: "Managed IT for Galway Medtech Suppliers, Tourism Operators, and Professional Firms",
    searchTerms: [
      "\"web design Galway\"",
      "\"web designer Galway city\"",
      "\"IT support Oranmore\"",
      "\"Microsoft 365 Galway\"",
      "\"medical device website Galway\"",
      "\"B&B website Connemara\"",
      "\"hotel website Salthill\"",
      "\"restaurant website Galway\"",
      "\"web designer Tuam\"",
      "\"accountant website Galway\"",
      "\"solicitor website Galway\"",
      "\"IT support Ballinasloe\"",
    ],
    whyUsAngles: [
      { title: "Medtech Supplier Documentation", desc: "Medtronic, Boston Scientific, Merit Medical, and Creganna all audit their suppliers on technical security and documentation. I implement the controls and produce the paperwork — security overview, access policy, backup-and-restore statement — that survives a serious vendor review." },
      { title: "Tourism Sites That Convert", desc: "Connemara B&Bs, Salthill hotels, and Aran operators live on Google Maps, Booking.com-adjacent searches, and direct bookings. I build the specific pieces in between — fast mobile sites, working booking flows, structured data, and Google Business Profile done properly." },
      { title: "Bilingual Where It Matters", desc: "Gaeltacht businesses increasingly want their site to work in both languages without looking like a half-finished translation. I handle Irish-first or parallel-language builds with correct hreflang, URL structure, and content organisation." },
      { title: "One Partner, Full Stack", desc: "Website, Microsoft 365, managed IT, cybersecurity, and the documentation pack that sits alongside — from one person who keeps them joined up. No supplier chain, no missing handoffs." },
    ],
    faqsWebDesign: [
      {
        q: "We need a bilingual website (English and Irish). Can you do that properly?",
        a: "Yes — and properly meaning the Irish version isn't a machine-translated afterthought. I build the content structure with both languages as first-class options, handle the URL structure (/ga/ vs /en/ or domain-level split), set the hreflang tags so Google understands the relationship, and coordinate with an Irish-language copyeditor where you need translations. For Gaeltacht-area businesses this is often the difference between a site that converts and a site that merely exists.",
      },
      {
        q: "We run a B&B in Connemara. How do we get bookings ahead of Booking.com and Airbnb?",
        a: "You don't beat the aggregators on generic searches — they outspend everyone on 'B&B Connemara'. But you absolutely own the specific, intent-rich searches the aggregators can't rank for: 'dog-friendly cottage near Kylemore', 'family-run guesthouse Roundstone with sea views', 'B&B Clifden with evening meal'. A properly structured site, a solid Google Business Profile, and honest guest reviews win those searches — and the bookings that come through direct are the ones with your full margin.",
      },
      {
        q: "Does LEO Galway offer anything the other LEOs don't?",
        a: "The Grow Digital Voucher is a nationally standardised scheme, so the voucher itself is identical across every LEO. What LEO Galway brings is strong working links into the medtech cluster and the tourism sector — their enterprise officers will often flag supports that run alongside the voucher (Enterprise Ireland innovation vouchers, sector mentoring, trading-online supports). Worth attending the Digital for Business consultation even if you think you already know what you want.",
      },
    ],
    faqsItSupport: [
      {
        q: "Medtronic is auditing us as a supplier. What do we need from an IT perspective?",
        a: "Typically: MFA on all accounts, a documented access-control policy, endpoint protection with central management (Microsoft Defender for Endpoint or equivalent), encrypted backup with a tested restore, a written information-security overview, and an incident-response statement. ISO 13485-adjacent audits may also probe change management and user-access review cadence. I implement the controls and supply the documentation so the auditor gets prepared answers rather than a scramble.",
      },
      {
        q: "Our Salthill hotel Wi-Fi collapses every bank holiday weekend. What's actually wrong?",
        a: "Almost always one or both of: consumer-grade access points trying to handle 200+ guest devices on the same radio channel, or guest traffic sharing one network with the POS and back-office. Business-grade hardware with guest VLAN isolation, QoS for the card machine, and correct AP placement handles peak weekends without drama. A site survey confirms which combination you need and what it costs.",
      },
      {
        q: "We're a Gaeltacht business and use Irish daily. Does Microsoft 365 handle that properly?",
        a: "Yes — Microsoft 365 supports Irish as a display language across the web apps, Teams, and desktop clients, and staff can set their own preference. What often needs attention is language-tagged document libraries (so SharePoint search ranks Irish-language documents correctly for Irish-language queries), and Teams channel structure for bilingual meeting notes. Not hard once you know where to look, and something generic IT providers frequently leave unconfigured.",
      },
    ],
    ctaLine: "Based in Galway, supplying medtech or working the tourism economy? Let's talk about what a solid digital foundation looks like for your business.",
  },

  limerick: {
    slug: "limerick",
    name: "County Limerick",
    shortName: "Limerick",
    heroImage: heroLimerick,
    heroImageAlt: "Traditional terraced architectural houses lining the Shannon River in Limerick at golden hour",
    mainTowns: ["Limerick city", "Newcastle West", "Abbeyfeale", "Kilmallock", "Adare", "Annacotty", "Raheen", "Castletroy"],
    leo: {
      headline: "LEO Limerick covers the whole county from one office",
      detail: "LEO Limerick is based on O'Connell Street in the city and administers the Grow Digital Voucher for the entire county — 50% of new software subscriptions up to €5,000 for businesses with 1–50 employees. The Limerick officers have strong visibility on the manufacturing corridor (Shannon-side, Raheen) and the hospitality build-up around the 2027 Ryder Cup at Adare Manor.",
    },
    dominantSectors: "manufacturing and logistics, medtech and pharma, tech, dairy and food, hospitality",
    economicAnchor: "Limerick anchors Ireland's mid-west industrial corridor. Johnson & Johnson Vistakon, Cook Medical, Regeneron, and Analog Devices operate substantial sites in and around the city. The Shannon Free Zone (technically in County Clare but commercially integrated with Limerick) houses aviation, logistics, and export manufacturing. The University of Limerick and its Kemmy Business School feed into a growing tech cluster in Castletroy, while Adare Manor will host the 2027 Ryder Cup — the first time the event has been held in Ireland — triggering a multi-year hospitality preparation across the county.",
    marketContext: "Limerick's SME mix is different from Cork's pharma dominance or Galway's medtech cluster. The weight here is on manufacturing, logistics, and a hospitality sector gearing up for a globally visible event in 2027. Suppliers feeding Regeneron or Johnson & Johnson face the same vendor-audit pressure you see around Cork pharma. Meanwhile Adare-area hospitality, Castletroy guest houses, and Newcastle West SMEs are all rebuilding digital presence well ahead of Ryder Cup kick-off.",
    heroAngleWebDesign: "Websites for Limerick's Manufacturing Corridor, Hospitality Sector, and Ryder Cup Era",
    heroAngleItSupport: "Managed IT for Limerick Manufacturers, Hospitality Operators, and Professional SMEs",
    searchTerms: [
      "\"web design Limerick\"",
      "\"web designer Limerick city\"",
      "\"IT support Castletroy\"",
      "\"Microsoft 365 Limerick\"",
      "\"manufacturing IT Limerick\"",
      "\"hotel website Adare\"",
      "\"B&B website Limerick\"",
      "\"accountant website Limerick\"",
      "\"web designer Newcastle West\"",
      "\"restaurant website Limerick\"",
      "\"solicitor website Limerick\"",
      "\"IT support Raheen\"",
    ],
    whyUsAngles: [
      { title: "Manufacturing Supply-Chain Security", desc: "Regeneron and Johnson & Johnson audit their Irish suppliers the same way Cork pharma plants do. I build the technical controls and the documentation pack to match — so a vendor questionnaire becomes an afternoon's work, not a quarter-long project." },
      { title: "Ryder Cup-Era Hospitality Sites", desc: "Adare, Castletroy, and Newcastle West hospitality is rebuilding ahead of 2027. Fast mobile sites, correct structured data for Google, real photography, and serious Google Business Profile work — the basics most competitors aren't getting right yet." },
      { title: "One Partner, Full Stack", desc: "Website, Microsoft 365, managed IT, cybersecurity, and compliance — from one person. Manufacturing and hospitality SMEs alike benefit from the consolidation: one invoice, one relationship, one person who already knows your setup." },
      { title: "Direct Access, Real Response", desc: "No ticketing system, no account manager layer. When something needs a decision, a WhatsApp or Teams message reaches me directly — which matters in manufacturing (lines don't wait) and hospitality (neither do guests)." },
    ],
    faqsWebDesign: [
      {
        q: "We're an Adare hospitality business. How should we be preparing for Ryder Cup 2027?",
        a: "Digitally, the work is front-loaded. The Ryder Cup booking window opens early — US and European golf travellers research venues 18 to 24 months ahead — so your website, Google Business Profile, and direct-booking flow need to be ranking and converting by mid-2026 at the latest. That means fast mobile performance, solid structured data for room types and availability, real photography (not stock), and a booking system that doesn't dump guests into a PayPal redirect. A hospitality site can be on that footing inside six weeks from kick-off.",
      },
      {
        q: "We're a small manufacturer supplying into Regeneron. Does a professional website actually move the needle?",
        a: "More than most owners expect. The buyers making the supplier decision increasingly do their homework on you before the first call — they check LinkedIn, they check your site, they're looking for signals that you operate at the same standard as the tier-1 suppliers. A clean, credible website with the right sector language, case studies, and proof of quality systems closes the gap before the procurement team has even opened a conversation. Not a guarantee, but consistently the thing that gets you onto the shortlist.",
      },
      {
        q: "How does LEO Limerick compare to other Local Enterprise Offices?",
        a: "LEO Limerick runs the standard national Grow Digital Voucher rules, so the voucher itself is identical to every other county. What the Limerick officers are particularly good at locally is connecting SMEs into the manufacturing-corridor supply chain and flagging Enterprise Ireland supports when the project scale exceeds what the voucher covers. Worth attending the Digital for Business session even if you've decided what you want to build — their officers often spot related supports that aren't obvious.",
      },
    ],
    faqsItSupport: [
      {
        q: "We supply into Regeneron. What does their IT vendor audit actually ask for?",
        a: "Standard supplier questionnaire territory: MFA on all accounts (including privileged), documented access control, centrally-managed endpoint protection with logging retained for audit, encrypted backup with a tested restore procedure, a written information-security policy, and an incident-response statement. For deeper audits, expect probes on change management, user-access review cadence, and supply-chain controls of your own. I implement the controls and supply the documentation so you're responding from a settled position rather than constructing answers under deadline.",
      },
      {
        q: "Our Limerick hotel Wi-Fi is fine off-season and collapses in July. What's usually wrong?",
        a: "Two things almost every time. First, consumer-grade access points trying to handle 150+ guest devices on a single radio channel — business-grade APs with automatic channel management solve this cleanly. Second, guest traffic and back-office traffic sharing one network, so when guests stream Netflix the POS slows down. Separate VLANs with a QoS policy for the payment and back-office traffic sorts that. A site survey settles the exact combination and confirms whether your existing cabling needs an upgrade.",
      },
      {
        q: "We're four staff in Newcastle West. Is managed IT actually worth it at our scale?",
        a: "Usually yes, for one practical reason: at four users the cost lands around €180 a month on the Essential plan, and the first avoided day of downtime pays for that for a year. The other benefit is consolidation — instead of the printer guy, the 365 consultant, and a nephew who 'knows computers', you have one person who knows your whole setup and handles all of it. That's worth real money in time you don't spend explaining your own systems to strangers.",
      },
    ],
    ctaLine: "Based in Limerick, gearing up for 2027 or running manufacturing in 2026? Let's talk about what your business needs, plainly.",
  },

  waterford: {
    slug: "waterford",
    name: "County Waterford",
    shortName: "Waterford",
    heroImage: heroWaterford,
    heroImageAlt: "Aerial view of Waterford city's People's Park showing the park greenery alongside the historic city architecture",
    mainTowns: ["Waterford city", "Tramore", "Dungarvan", "Dunmore East", "Lismore", "Ardmore", "Portlaw"],
    leo: {
      headline: "LEO Waterford covers the county from the city",
      detail: "LEO Waterford (Waterford city) is the single Local Enterprise Office for the county. Grow Digital Voucher rules are the national default — 50% of new software subscriptions up to €5,000 for businesses with 1–50 employees. The Waterford officers work closely with the South East Technological University (SETU) and the regional tourism bodies, so sector cross-referrals are common during the Digital for Business consultation.",
    },
    dominantSectors: "pharma, tech, food, tourism and hospitality, craft and heritage, marine",
    economicAnchor: "Waterford's commercial geography is shaped by two anchors that fit together better than they first appear. GlaxoSmithKline's Dungarvan manufacturing plant is one of the largest employers in the South-East and sits at the head of a real pharma and healthcare supply chain. At the other end of the same county, the Waterford Greenway — a 46-kilometre traffic-free cycling and walking route opened in 2017 — has transformed rural tourism from Waterford city through Dungarvan to the Copper Coast UNESCO Global Geopark. SETU (South East Technological University, formed from the Waterford and Carlow IT merger in 2022) provides the research and talent base that quietly joins the two ecosystems.",
    marketContext: "Waterford SMEs sit in one of three groups. Suppliers feeding GlaxoSmithKline's Dungarvan plant or the broader South-East pharma corridor face the same vendor-audit pressure you see around Cork and Limerick. Tourism and hospitality businesses along the Greenway and Copper Coast — guesthouses, bike-hire operators, cafés in Dungarvan and Ardmore — have shifted from a brochure-site mindset to a booking-driven one over the past seven years. And a solid layer of professional services (accountants, solicitors, consultancies) serves both groups plus the city-centre economy. One digital partner who understands all three is rarer than it should be.",
    heroAngleWebDesign: "Websites for Waterford's Pharma Corridor, Greenway Economy, and Heritage Towns",
    heroAngleItSupport: "Managed IT for Waterford Pharma Suppliers, Greenway Operators, and Professional Firms",
    searchTerms: [
      "\"web design Waterford\"",
      "\"web designer Waterford city\"",
      "\"IT support Dungarvan\"",
      "\"Microsoft 365 Waterford\"",
      "\"B&B website Copper Coast\"",
      "\"bike hire website Greenway\"",
      "\"restaurant website Dungarvan\"",
      "\"accountant website Waterford\"",
      "\"web designer Tramore\"",
      "\"hotel website Waterford\"",
      "\"solicitor website Waterford\"",
      "\"pharma supplier website Waterford\"",
    ],
    whyUsAngles: [
      { title: "Pharma Supply-Chain Ready", desc: "GSK's Dungarvan plant audits suppliers the way the Cork and Limerick pharma plants do. Technical controls (MFA, endpoint monitoring, encrypted backup) and the documentation pack that answers the vendor questionnaire — both included, both field-tested." },
      { title: "Greenway Tourism Sites That Book", desc: "The Waterford Greenway is a remarkable success story, and the businesses feeding it are still catching up digitally. Fast mobile sites, integrated booking, Google Business Profile, and structured data tuned for the specific searches your guests actually run — all handled." },
      { title: "SETU-Region Familiarity", desc: "Crettyard is a short drive from Carlow, and SETU is a merged Waterford/Carlow institution. I know the region, its talent pipeline, and its business networks through the same everyday contact you'd expect of a neighbouring county." },
      { title: "One Partner, Full Stack", desc: "Website, Microsoft 365, managed IT, cybersecurity, and the documentation pack — from one person. Waterford SMEs running between pharma supply, tourism operations, and professional services benefit from the consolidation." },
    ],
    faqsWebDesign: [
      {
        q: "We're a Copper Coast B&B. How do we compete with the big aggregators?",
        a: "You don't compete head-to-head on generic searches — Booking.com and Airbnb will always outrank you on 'Copper Coast accommodation'. What you can own are the specific, intent-rich searches the aggregators don't prioritise: 'dog-friendly cottage Ardmore', 'family B&B near Waterford Greenway with bike storage', 'self-catering Dungarvan with sea views'. A properly structured site that names those specifics, backed by a solid Google Business Profile and honest guest reviews, wins the bookings where your margin is best — the direct ones.",
      },
      {
        q: "Does the Waterford Greenway still drive enough traffic to justify a new website?",
        a: "More than ever. The Greenway opened in 2017 with optimistic projections and by 2023 was drawing over 300,000 users a year, well ahead of plan. The tourism businesses that caught the wave early (bike hire, cafés in Kilmacthomas, guesthouses along the route) scaled fast. The ones with outdated websites or no booking integration lost ground. If your business sits on or near the Greenway, a professional website is no longer a luxury — it's how you capture the traffic that's already landing in your area.",
      },
      {
        q: "How does LEO Waterford work alongside SETU?",
        a: "LEO Waterford has a strong working relationship with the South East Technological University — formed in 2022 from the merger of WIT and Carlow IT. Where a Grow Digital Voucher project has an innovation or R&D element, the LEO officers will often flag SETU's research supports or the Enterprise Ireland innovation vouchers (separate scheme, up to €5,000 for SETU-delivered R&D). Worth raising in your Digital for Business consultation even if you think you only need the standard voucher.",
      },
    ],
    faqsItSupport: [
      {
        q: "We supply GSK Dungarvan. What do they ask for on an IT audit?",
        a: "Standard pharma supplier questionnaire territory: MFA enforced on all accounts, a written information-security policy, documented access-control procedure, centrally-managed endpoint protection with logging retained for audit, encrypted backup with a tested restore process, and an incident-response statement. Deeper reviews will probe change management, user-access review cadence, and your own upstream supplier controls. I implement the controls and maintain the documentation pack so a GSK audit is a calm Tuesday rather than a crisis week.",
      },
      {
        q: "Our Greenway-adjacent café has patchy Wi-Fi that kills the card machine on busy days. Can you fix it properly?",
        a: "Yes, and it's usually a surprisingly cheap fix. The pattern is almost always: consumer-grade router handling 40+ guest devices, card machine sharing one network with customer phones, and a wired-only POS bolted on as an afterthought. Proper business-grade access points with a dedicated VLAN for the card machine (ideally wired, backup over Wi-Fi), QoS policies, and a 4G failover for the reader solve it for under €1,500 in most Copper Coast-area venues. No more lost sales at 1pm on a bank holiday.",
      },
      {
        q: "We're five staff in a Waterford law firm. Is managed IT actually worth it for us?",
        a: "For a regulated professional firm at five staff, the answer is almost always yes — not because of the technology itself but because of the compliance risk. GDPR data-processor obligations, client-confidentiality expectations, and increasingly corporate-client vendor-audit pressure mean 'hoping nothing goes wrong' isn't a defensible posture. €225 a month on the Essential plan covers MFA, managed 365, Microsoft Defender, backup, and someone accountable for the whole thing. A single mishandled GDPR incident costs multiples of a year's plan.",
      },
    ],
    ctaLine: "Based in Waterford, working the pharma corridor or the Greenway economy? Let's have a plain-English conversation about what your business actually needs.",
  },
};
