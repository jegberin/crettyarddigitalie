import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Existing pages
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WebDesign from "@/pages/WebDesign";
import Microsoft365 from "@/pages/Microsoft365";
import NetworkWifi from "@/pages/Network";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import CookiePolicy from "@/pages/CookiePolicy";
import GetAQuote from "@/pages/GetAQuote";
import Subscribe from "@/pages/Subscribe";

// New service pages
import ManagedIT from "@/pages/ManagedIT";
import ManagedHardware from "@/pages/ManagedHardware";
import Cybersecurity from "@/pages/Cybersecurity";
import AIReadiness from "@/pages/AIReadiness";
import WebsiteCare from "@/pages/WebsiteCare";
import Grants from "@/pages/Grants";
import Pricing from "@/pages/Pricing";

// New sector pages
import Trades from "@/pages/Trades";
import ProfessionalServices from "@/pages/ProfessionalServices";

// New operational pages
import HowItWorks from "@/pages/HowItWorks";
import DORACompliance from "@/pages/DORACompliance";

// Local SEO landing pages
import WebDesignLaois from "@/pages/WebDesignLaois";
import WebDesignCarlow from "@/pages/WebDesignCarlow";
import WebDesignKilkenny from "@/pages/WebDesignKilkenny";
import ITSupportLaois from "@/pages/ITSupportLaois";
import ITSupportCarlow from "@/pages/ITSupportCarlow";
import ITSupportKilkenny from "@/pages/ITSupportKilkenny";
import Microsoft365Ireland from "@/pages/Microsoft365Ireland";
import NetworkLaoisCarlow from "@/pages/NetworkLaoisCarlow";

// Layout components
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/CookieBanner";
import { SEO, LocalBusinessSchema, ServiceSchema, FAQSchema, AboutPageSchema, ContactPageSchema, PortfolioSchema } from "@/components/SEO";

// ═══════════════════════════════════════════════════════════
//  SEO metadata for every page
// ═══════════════════════════════════════════════════════════

const pageSEO: Record<string, { title: string; description: string; noindex?: boolean }> = {
  "/": {
    title: "Web Design & IT Support \u2014 Laois, Carlow & Kilkenny | Crettyard Digital",
    description: "Professional websites, Microsoft 365 & managed IT for small businesses in Laois, Carlow & Kilkenny. Enterprise experience. Grow Digital Voucher Ready.",
  },
  "/about": {
    title: "About Crettyard Digital \u2014 Enterprise IT Experience for Local Small Businesses in Laois & Carlow",
    description: "Run by Joey, Crettyard Digital brings 15+ years of enterprise IT experience from Microsoft, Intel, and Dell to small businesses across Laois, Carlow, Kilkenny, and the Irish Midlands.",
  },
  "/contact": {
    title: "Get in Touch \u2014 Free Consultation, No Obligation | Crettyard Digital",
    description: "Book a free consultation about your website, IT, security, or compliance. Same-day response before 3pm. Direct access to Joey \u2014 the person doing the work.",
  },
  "/portfolio": {
    title: "Our Work \u2014 Websites and IT Projects With Measurable Results | Crettyard Digital",
    description: "Real websites and IT projects for small businesses in Ireland \u2014 with measurable outcomes. See how local businesses increased enquiries and modernised their operations.",
  },
  "/web-design": {
    title: "Web Design Laois, Carlow & Kilkenny \u2014 From \u20ac799 | Crettyard Digital",
    description: "Custom-built websites for tradespeople and small businesses in Laois, Carlow & Kilkenny. Mobile-friendly, SEO-optimised, EAA-compliant. From \u20ac799.",
  },
  "/microsoft-365": {
    title: "Microsoft 365 Setup, Business Email & Teams Phone for Small Businesses in Ireland | Crettyard Digital",
    description: "Expert Microsoft 365 setup, professional business email, Teams, OneDrive, SharePoint, and Teams Phone for small businesses. GDPR-compliant. Migration and training included.",
  },
  "/managed-it-support": {
    title: "Managed IT Support for Small Businesses in Laois, Carlow & Kilkenny | Crettyard Digital",
    description: "Proactive managed IT support for small businesses across Laois, Carlow, and the Irish Midlands. Fixed monthly pricing, compliance included. From \u20ac45 per user per month.",
  },
  "/managed-hardware": {
    title: "Business PCs & Servers, Delivered Ready to Use | Crettyard Digital",
    description: "Turnkey business desktops and on-site servers for small Irish businesses. Fully configured, licensed, encrypted, and with your data migrated before delivery. Log in and get to work. From \u20ac899 per device.",
  },
  "/network-wifi-security": {
    title: "Business Network & Wi-Fi Solutions for Offices and Workshops in Laois & Carlow | Crettyard Digital",
    description: "Reliable network design, Wi-Fi installation, security, and support for offices, workshops, and retail spaces in Laois, Carlow, Kilkenny, and the Irish Midlands.",
  },
  "/cybersecurity": {
    title: "Cybersecurity & Compliance for Small Businesses in Ireland | NIS2, GDPR, Accessibility | Crettyard Digital",
    description: "Practical cybersecurity and regulatory compliance for small businesses. NIS2 readiness, GDPR setup, phishing protection, accessibility audits, and staff training \u2014 in plain English.",
  },
  "/ai-readiness": {
    title: "AI for Small Business \u2014 Microsoft Copilot Setup & AI Readiness | Crettyard Digital",
    description: "Practical AI implementation for small businesses in Ireland. Microsoft Copilot setup, AI readiness assessments, and hands-on training \u2014 no hype, just real productivity gains.",
  },
  "/website-care-plans": {
    title: "Website Care Plans \u2014 Hosting, Security & Maintenance | Crettyard Digital",
    description: "Every website I build comes with a mandatory care plan. Hosting, backups, security updates, and content changes \u2014 all handled. From \u20ac49/month.",
  },
  "/trades": {
    title: "Websites, Email & IT for Builders, Electricians, Plumbers & Contractors | Crettyard Digital",
    description: "Professional websites, Microsoft 365 email, managed IT, and cybersecurity built specifically for tradespeople and construction businesses in Ireland.",
  },
  "/professional-services": {
    title: "IT, Email & Compliance for Accountants, Solicitors & Professional Services | Crettyard Digital",
    description: "Managed IT, Microsoft 365, cybersecurity, and regulatory compliance for accountants, solicitors, and professional services firms in Ireland. GDPR-aware, NIS2 supply-chain ready. DORA readiness available for regulated financial clients.",
  },
  "/dora-compliance": {
    title: "DORA Compliance for Credit Unions, Investment Firms & Insurance in Ireland | Crettyard Digital",
    description: "DORA-ready IT services for financial sector firms in Ireland. Ensure your systems meet banking-grade operational resilience standards.",
  },
  "/pricing": {
    title: "Digital Foundation Bundles & Pricing \u2014 Website, Email, IT & Security | Crettyard Digital",
    description: "Clear, transparent pricing for websites, Microsoft 365, managed IT, and security. Digital Foundation Bundles combine everything into one predictable monthly cost.",
  },
  "/grants-funding": {
    title: "Grow Digital Voucher \u2014 Up to \u20ac5,000 for Digital Tools | Crettyard Digital",
    description: "The Grow Digital Voucher covers 50% of new software subscriptions, training, and IT configuration up to \u20ac5,000. Honest guidance on what qualifies and what doesn\u2019t. Replaced the Trading Online Voucher in 2024.",
  },
  "/how-it-works": {
    title: "How It Works \u2014 What to Expect When You Work With Crettyard Digital",
    description: "From first conversation to launch to month twelve \u2014 here\u2019s exactly what happens when you work with Crettyard Digital. No surprises, no jargon.",
  },
  "/web-design-laois": {
    title: "Web Design Laois \u2014 Professional Websites for Small Businesses | Crettyard Digital",
    description: "Professional website design for tradespeople and SMEs in County Laois. Get found on Google and win more local customers. Based locally on the Laois\u2013Carlow border.",
  },
  "/web-design-carlow": {
    title: "Web Design Carlow \u2014 Professional Websites for Small Businesses | Crettyard Digital",
    description: "Professional website design for tradespeople and SMEs across County Carlow \u2014 Carlow town, Tullow, Bagenalstown, Borris. Get found on Google, win more local customers. Based five minutes from the Carlow border.",
  },
  "/web-design-kilkenny": {
    title: "Web Design Kilkenny \u2014 Professional Websites for Small Businesses | Crettyard Digital",
    description: "Professional website design for tradespeople and SMEs in County Kilkenny. Get found on Google and win more local customers.",
  },
  "/it-support-laois": {
    title: "IT Support Laois \u2014 Managed IT for Small Businesses | Crettyard Digital",
    description: "Proactive IT support, Microsoft 365 management, and cybersecurity for businesses across County Laois. Based locally on the Laois\u2013Carlow border.",
  },
  "/it-support-carlow": {
    title: "IT Support Carlow \u2014 Managed IT for Small Businesses | Crettyard Digital",
    description: "Proactive IT support, Microsoft 365 management, and cybersecurity for businesses across County Carlow.",
  },
  "/it-support-kilkenny": {
    title: "IT Support Kilkenny \u2014 Managed IT for Small Businesses | Crettyard Digital",
    description: "Proactive IT support, Microsoft 365 management, and cybersecurity for businesses across County Kilkenny.",
  },
  "/microsoft-365-setup-ireland": {
    title: "Microsoft 365 Setup for Small Businesses Across Ireland | Crettyard Digital",
    description: "Remote-first Microsoft 365 setup, migration, Teams Phone and Copilot for small businesses across Ireland \u2014 Dublin, Cork, Galway, Limerick, Waterford, and every county. GDPR-compliant, Grow Digital Voucher ready.",
  },
  "/network-wifi-laois-carlow": {
    title: "Business Network & Wi-Fi Installation in Laois and Carlow | Crettyard Digital",
    description: "Business-grade network design, Cat6 cabling, Wi-Fi 6 installation, and UniFi / MikroTik hardware for offices, workshops, and retail spaces in Laois and Carlow. On-site surveys, no remote guesswork.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Crettyard Digital",
    description: "How Crettyard Digital collects, uses, stores, and protects your personal data.",
    noindex: true,
  },
  "/terms-and-conditions": {
    title: "Terms and Conditions | Crettyard Digital",
    description: "Terms and Conditions governing the use of the Crettyard Digital website and services.",
    noindex: true,
  },
  "/cookie-policy": {
    title: "Cookie Policy | Crettyard Digital",
    description: "How Crettyard Digital uses cookies and similar technologies on our website.",
    noindex: true,
  },
  "/get-a-quote": {
    title: "Get A Quote — Crettyard Digital | Laois, Carlow & Kilkenny",
    description: "Tell me what you need — websites, Microsoft 365, managed IT, hardware, networks, cybersecurity. Six short steps, ballpark estimate on the spot, fixed quote within a business day.",
    noindex: true,
  },
  "/subscribe": {
    title: "Everything Included Subscription | Crettyard Digital",
    description: "Subscribe to the Crettyard Digital Everything Included web design package.",
    noindex: true,
  },
};

// ═══════════════════════════════════════════════════════════
//  FAQ data for structured data (FAQPage schema)
// ═══════════════════════════════════════════════════════════

const faqData: Record<string, { question: string; answer: string }[]> = {
  "/": [
    { question: "I already have a Facebook page \u2014 do I really need a website?", answer: "Facebook is useful for engagement, but it won\u2019t help you appear on Google when someone searches \u2018plumber near me\u2019 or \u2018furniture maker Carlow.\u2019 A website is something you own and control \u2014 it works around the clock, ranks on search engines, and gives potential customers the confidence to call you." },
    { question: "I\u2019m not very technical \u2014 will this be complicated?", answer: "That\u2019s exactly why I do what I do. I handle all the technical work and explain everything in plain English. You don\u2019t need to know anything about hosting, DNS, code, or compliance regulations." },
    { question: "How much does a website cost?", answer: "Most small business websites start from around \u20ac799 for a simple site and \u20ac1,299 for a full business site. Every website includes an ongoing care plan. I provide a clear, fixed quote after a free consultation. Bespoke website builds aren\u2019t eligible for the Grow Digital Voucher, but new software subscriptions like M365 or e-commerce platforms may qualify." },
    { question: "What are the Digital Foundation Bundles?", answer: "Instead of buying a website, email, and IT support separately, bundles give you everything as one integrated package \u2014 with one setup cost and one predictable monthly fee." },
    { question: "Do I need to worry about NIS2 or GDPR?", answer: "If you collect customer data, GDPR applies. If you\u2019re part of a supply chain for a larger company, NIS2 may apply. If you sell online, the European Accessibility Act probably applies. I handle all of this as part of my services." },
    { question: "Can you help with government grants?", answer: "I\u2019m Grow Digital Voucher Ready. The voucher covers 50% of new software subscriptions up to \u20ac5,000. It doesn\u2019t fund bespoke websites. You apply through your LEO after completing a Digital for Business consultation \u2014 I provide scheme-compliant invoicing to support your claim." },
    { question: "What is Microsoft Teams Phone?", answer: "A business phone system that works through the Microsoft Teams app. Your team makes and receives calls from their laptop, mobile, or desk phone \u2014 all integrated with email and calendar. No separate phone company needed." },
    { question: "What\u2019s this about AI and Copilot?", answer: "Microsoft Copilot is an AI assistant built into Microsoft 365 that helps draft emails, summarise documents, and create presentations. I help businesses set it up properly and train teams to use it effectively." },
  ],
  "/web-design": [
    { question: "How long does it take to build a website?", answer: "Most projects take two to four weeks. I\u2019ll give you a clear timeline before we begin." },
    { question: "What do I need to provide?", answer: "Your logo (if you have one), a rough idea of what you want, and some photos. I handle everything else including content and copywriting." },
    { question: "Do I have to have a care plan?", answer: "Yes. Every website comes with a care plan \u2014 it\u2019s how I guarantee your site stays secure, fast, and effective. It\u2019s factored into the project quote from the start." },
    { question: "What about accessibility and the EAA?", answer: "The European Accessibility Act requires many online businesses to have accessible websites. I build with accessibility in mind from the start." },
    { question: "Do you help with SEO and Google rankings?", answer: "Yes. Every site includes on-page SEO and Google Business Profile guidance for local map visibility." },
    { question: "Can I use a government grant?", answer: "The Grow Digital Voucher (replaced the TOV in Dec 2024) covers 50% up to \u20ac5,000 \u2014 but only for new software subscriptions, not bespoke website builds. I\u2019ll be straight with you about what qualifies." },
  ],
  "/microsoft-365": [
    { question: "I already have Gmail \u2014 why switch?", answer: "Microsoft 365 gives you professional email on your own domain, better security, GDPR-compliant EU data storage, and tools like Teams, OneDrive, and SharePoint. Plus the option for a full business phone system." },
    { question: "Will I lose emails during migration?", answer: "No. Every email, contact, and calendar entry transfers safely. I verify everything afterwards." },
    { question: "What\u2019s Teams Phone?", answer: "It turns the Teams app on your phone, laptop, or desk handset into your business phone system. Real phone number, calls from anywhere, integrated with calendar and email." },
    { question: "Which plan do I need?", answer: "Most small businesses do well with Business Basic or Business Standard. I\u2019ll recommend the most cost-effective option." },
    { question: "Do you offer ongoing support?", answer: "Yes. Monthly plans covering user management, troubleshooting, and security updates." },
    { question: "How long does setup take?", answer: "Basic setup for 1\u20135 users takes a few days. Larger migrations may take one to two weeks." },
  ],
  "/managed-it-support": [
    { question: "Is this only for bigger businesses?", answer: "Not at all. Many clients are 1\u20135 person businesses. Even a sole trader benefits from proper email, device, and compliance management." },
    { question: "Is compliance really included?", answer: "Yes. GDPR checks are included in every plan. NIS2 supply-chain readiness is included at Professional and Comprehensive tiers. DORA readiness is included at Comprehensive for regulated financial clients where DORA applies." },
    { question: "How is this different from calling someone when things break?", answer: "Fixed fee (not hourly), problems caught early, I already know your setup, and someone is actively managing your compliance." },
    { question: "Can I change plans as I grow?", answer: "Absolutely. Plans scale with your business. No reinstalling, no starting over." },
  ],
  "/managed-hardware": [
    { question: "What happens to my old data?", answer: "I migrate it before delivery. Documents, mail archives, browser bookmarks \u2014 everything that matters moves across to the new machine. When you log in on day one, it is all where you expect it. Your old kit is wiped securely or returned to you, whichever you prefer." },
    { question: "How long does my team lose to the rollout?", answer: "Effectively nothing. I do the build and configuration off-site. We can swap and install the new systems in an evening \u2014 typically a few hours for a small office. Your team goes home and comes in the next day to meet the new systems, ready to work." },
    { question: "What if the hardware fails?", answer: "Every device ships with manufacturer warranty. With optional Hardware Care, I handle the swap-out myself: priority replacement, spare units on hand, and you are back up the same or next business day. Without Hardware Care, warranty claims go direct to the manufacturer and I help with the process. Either way, your data is backed up so a hardware failure does not mean lost work." },
    { question: "Do you supply the Windows licence?", answer: "Yes. Every desktop includes a proper OEM Windows 11 Pro licence sourced from an authorised EU distributor. Not grey-market, not pre-activated keys of dubious origin. If you are ever audited, your licences are legitimate." },
    { question: "Can I buy the hardware myself and just pay you to set it up?", answer: "I don\u2019t work that way. The outcome I sell is arrives ready to work, properly configured, properly supported \u2014 which requires I source the hardware so I can guarantee compatibility, licensing, and warranty terms. For set-up-only work on existing kit, see my Managed IT service." },
    { question: "What about hybrid or remote workers?", answer: "Desktops are delivered to wherever the user is based. Full remote setup is included \u2014 VPN access can be configured, cloud file sync, Microsoft 365 integration." },
    { question: "Is this suitable for heavy workloads like CAD or video editing?", answer: "The Business Plus tier handles most professional workloads. For specialist needs such as CAD, 3D modelling, or video production we would spec something more powerful. I don\u2019t supply gaming PCs, crypto-mining rigs, or hardware outside the business-computing remit." },
    { question: "Does this help with NIS2 or GDPR compliance?", answer: "Yes, as a supporting measure \u2014 not the whole solution. Every system ships with technical controls (encryption, MFA, backups, hardened configuration, documented setup) that larger customers ask about in supply-chain questionnaires. Compliance also needs policies and processes; see the cybersecurity and compliance page for the full picture." },
    { question: "What is the minimum or maximum order?", answer: "Minimum is one device. For initial engagements I cap the rollout at around 10 devices per site. Larger rollouts need a separate scoping conversation and may be phased across a few weeks to keep disruption low." },
    { question: "Can I fund this through the Grow Digital Voucher?", answer: "No. The Grow Digital Voucher explicitly excludes hardware. It funds new software subscriptions only. See the grants page for the full breakdown." },
  ],
  "/network-wifi-security": [
    { question: "How do I know if I need a new network or just a fix?", answer: "I\u2019ll start with a free review \u2014 looking at your current setup, your pain points, and what you need. Sometimes a tweak is all it takes; other times a proper redesign is the smarter long-term move. I\u2019ll give you an honest recommendation either way." },
    { question: "Can you work around our business hours?", answer: "Absolutely. I regularly schedule installations and upgrades for evenings or weekends to minimise disruption. Your team shouldn\u2019t lose a day\u2019s work because of an IT upgrade." },
    { question: "Do you supply the hardware?", answer: "Yes. I source and supply business-grade equipment from trusted brands like Ubiquiti UniFi, MikroTik, and TP-Link. I\u2019ll recommend the best options for your space and budget \u2014 Wi-Fi 6 / Wi-Fi 6E where it makes sense, no unnecessary upselling." },
    { question: "How long does a typical installation take?", answer: "A small office setup can often be done in a day. Larger premises with new Cat6 / Cat6a cabling may take 2\u20133 days. I\u2019ll give you a clear timeline before any work begins." },
    { question: "What about ongoing support?", answer: "I offer optional support packages for monitoring, maintenance, and troubleshooting. But even without a package, I\u2019m always just a call or message away if something goes wrong." },
    { question: "Do you cover areas outside Laois and Carlow?", answer: "I\u2019m based on the Laois/Carlow border but regularly work across the Midlands and South-East including Kilkenny. Get in touch and we\u2019ll figure it out." },
  ],
  "/cybersecurity": [
    { question: "Do these regulations apply to my small business?", answer: "Almost certainly some do. Contact forms mean GDPR applies. Selling online means the EAA likely applies. Supply chain for larger companies means NIS2 may apply." },
    { question: "I\u2019m just a tradesperson \u2014 do I need cybersecurity?", answer: "If you use email, send invoices, or store customer info \u2014 yes. Phishing doesn\u2019t care about business size. And larger clients increasingly ask about your security." },
    { question: "Web Compliance Audit vs IT Resilience Audit?", answer: "Web Compliance = your website (GDPR, cookies, accessibility). IT Resilience = your network and Microsoft 365 (NIS2, plus DORA where applicable, and security)." },
    { question: "How much does compliance cost?", answer: "Cookie consent from \u20ac150. Full NIS2 readiness from \u20ac500. Clear quote after free assessment." },
  ],
  "/ai-readiness": [
    { question: "Do I need Microsoft 365 to use AI?", answer: "Not necessarily, but Copilot is the most practical tool for M365 users. My assessment can recommend other options too." },
    { question: "Is my data safe with Copilot?", answer: "Yes \u2014 when configured correctly. I ensure proper permissions and your data never leaves your Microsoft environment." },
    { question: "Is this useful for a small business?", answer: "Genuinely useful. Small teams with lots of admin benefit most. Copilot gives measurable time back every week." },
    { question: "How much does Copilot cost?", answer: "Around \u20ac28.10 per user per month on top of your M365 subscription. I\u2019ll confirm current pricing during consultation." },
  ],
  "/grants-funding": [
    { question: "How long does approval take?", answer: "Varies by county. Some LEOs approve within weeks; others take longer. I\u2019ll give you a realistic expectation for your local office." },
    { question: "Can the Grow Digital Voucher fund a website redesign?", answer: "Only if your redesign uses a subscription-based platform (Shopify, Squarespace, etc.) that\u2019s new to your business. Bespoke WordPress redesigns aren\u2019t eligible \u2014 but adding CRM, booking, or e-commerce software to your setup may be." },
    { question: "Can I combine both vouchers?", answer: "They\u2019re separate programmes. Some businesses qualify for both at different times. I\u2019ll advise on the best approach." },
    { question: "Do I have to use a specific provider?", answer: "No. But a provider who understands grant requirements makes approval much smoother \u2014 and that\u2019s what I do." },
  ],
  "/dora-compliance": [
    { question: "Does DORA apply to a small accountancy practice?", answer: "Generally, no. Standard accountancy work (tax, bookkeeping, audit) is not in DORA scope. DORA applies to regulated financial entities: banks, credit unions, investment firms, insurance undertakings, pension funds, and similar. If your practice provides MiFID-regulated investment advice, that activity could fall in scope." },
    { question: "Does this apply to Crettyard Digital too?", answer: "Crettyard Digital is not a designated critical ICT third-party service provider under DORA (that designation is made by European Supervisory Authorities for providers whose failure would impact the financial system). Regulated financial clients must perform due diligence on all ICT providers; I supply the documentation and contractual terms needed to satisfy that." },
    { question: "How is DORA different from NIS2?", answer: "NIS2 covers critical infrastructure broadly. DORA is specifically for financial services, with additional resilience testing and third-party risk obligations." },
  ],
  "/trades": [
    { question: "How much does a website cost for a tradesperson?", answer: "Between \u20ac799 and \u20ac1,299 for a professional website. Note: bespoke website builds aren\u2019t eligible for the Grow Digital Voucher, though CRM, job tracking, or e-commerce software may qualify." },
    { question: "I\u2019m not good with computers \u2014 will this be hard?", answer: "Not at all. I handle everything. My approach is built for people who are experts in their trade, not in technology." },
    { question: "Will bigger clients take me more seriously?", answer: "Yes. Professional website and email immediately positions you as established. And if they ask about IT security, you\u2019ll be ready." },
  ],
  "/professional-services": [
    { question: "What regulations apply to my firm?", answer: "At minimum: GDPR, ePrivacy (cookies), and the European Accessibility Act (for consumer-facing digital services). NIS2 affects supply chains for regulated entities. DORA applies if your firm is a regulated financial entity such as a bank, credit union, investment firm, insurance undertaking or broker, or pension fund." },
    { question: "Can you help pass a client\u2019s IT security assessment?", answer: "Yes. I implement the measures and provide documentation to demonstrate compliance." },
    { question: "Is this more expensive than generic IT?", answer: "Not necessarily. Compliance is included, not billed as an add-on. For regulated firms this is often more cost-effective." },
  ],
  "/web-design-laois": [
    { question: "Can you rank my business in Portlaoise specifically?", answer: "Yes. I optimise for the exact terms your customers search \u2014 'plumber Portlaoise,' 'accountant Portlaoise,' etc. Combined with Google Business Profile optimisation, this targets both the organic results and the local map pack." },
    { question: "I\u2019m in a small town \u2014 is a website worth it?", answer: "Absolutely. In smaller towns like Mountmellick, Mountrath, or Durrow, there's less competition online, which means a well-built site can rank faster and dominate local search results more easily than in a larger town." },
    { question: "How do I apply for the Laois LEO grant?", answer: "The Laois LEO in Portlaoise runs regular information sessions. You attend a session, then apply. I handle the quote, help with the application, and ensure everything meets their requirements." },
  ],
  "/web-design-carlow": [
    { question: "I\u2019m a tradesperson in Carlow \u2014 do I really need a website?", answer: "Your bigger clients are Googling you before awarding work. Under NIS2, main contractors increasingly ask about their subcontractors' online presence and security. A professional website and email address signals credibility \u2014 which translates directly into winning contracts." },
    { question: "Is the Carlow LEO grant easy to get?", answer: "Carlow LEO has a reputation for relatively efficient processing. The main requirements are attending an information session and providing a clear, itemised quote. I handle the quote side and walk you through the application." },
    { question: "Can you meet me in person?", answer: "Yes \u2014 I\u2019m based five minutes from Carlow. I regularly meet clients in Carlow town, Tullow, and the surrounding area. Face-to-face is always an option." },
  ],
  "/web-design-kilkenny": [
    { question: "Do I need an accessible website for my Kilkenny restaurant?", answer: "If you take bookings online or display menus digitally, the European Accessibility Act likely applies. I build accessibility into every site from the start \u2014 so you're covered without paying for a separate audit or retrofit." },
    { question: "Can I compete with Booking.com for accommodation searches?", answer: "Not on volume \u2014 but on specificity, absolutely. Booking.com can\u2019t rank for 'guesthouse near Thomastown with river views.' A properly built website with targeted local SEO can and does." },
    { question: "I\u2019m not in Kilkenny city \u2014 will you still work with me?", answer: "Absolutely. I work with businesses across the entire county \u2014 Castlecomer, Thomastown, Callan, Graiguenamanagh, and everywhere in between. Remote support works perfectly, and I\u2019m available for in-person meetings too." },
  ],
  "/microsoft-365-setup-ireland": [
    { question: "I\u2019m in Dublin / Cork / Galway \u2014 can you still do this remotely?", answer: "Yes. Microsoft 365 setup, migration, and training are ideal for remote delivery. Tenant build, security hardening, Exchange migration and Teams Phone configuration all happen without anyone on-site. I only add on-site time if you\u2019re in the Laois / Carlow / Kilkenny corridor and specifically want face-to-face." },
    { question: "What\u2019s the difference between this and the main Microsoft 365 page?", answer: "Same service, different emphasis. This page is for businesses outside the Laois / Carlow / Kilkenny Midlands area where my work is remote-first by default. The main Microsoft 365 page covers the full product detail, pricing, and FAQs in depth." },
    { question: "Do you handle Google Workspace to Microsoft 365 migrations?", answer: "Yes \u2014 alongside Gmail, POP, IMAP, and legacy Exchange 2016 / 2019. Google Workspace tenant migrations require a bit more planning but I\u2019ve done them for multiple Irish small businesses without losing data." },
    { question: "Does the Grow Digital Voucher cover Copilot as well?", answer: "Microsoft 365 Copilot is a new subscription, which means it can qualify for the Grow Digital Voucher 50% funding up to \u20ac5,000 \u2014 provided you complete the free Digital for Business consultation with your LEO first. See the grants page for the full eligibility breakdown." },
  ],
  "/it-support-laois": [
    { question: "Can you visit my office in Portlaoise?", answer: "Absolutely. I\u2019m 20 minutes from Portlaoise. On-site visits for network issues, hardware setup, or new office configurations are a normal part of my service." },
    { question: "I only have 2\u20133 staff \u2014 is this overkill?", answer: "Not at all. My Essential plan starts at \u20ac45/user/month. Even a 2-person business benefits from proper email management, security, and someone to call when things go wrong." },
    { question: "Do you cover Portarlington and south Offaly too?", answer: "Yes \u2014 Portarlington straddles the border and I cover it fully. I also serve nearby Offaly towns like Mountmellick and Edenderry." },
  ],
  "/it-support-carlow": [
    { question: "My main contractor is asking about IT security. Can you help?", answer: "This is exactly why many Carlow construction firms come to me. I implement the security measures (MFA, email encryption, backup, endpoint protection) and provide documentation that proves compliance. When the question comes, you\u2019re ready." },
    { question: "We\u2019re a small crew \u2014 is managed IT really for us?", answer: "Even a 3-person operation with email, a laptop, and an internet connection benefits. At \u20ac45/user on the Essential plan, it costs less than a single emergency call-out \u2014 and prevents most emergencies." },
    { question: "Can you do on-site work in Tullow or Muinebheag?", answer: "Yes. I cover all of Carlow \u2014 Carlow town, Tullow, Muinebheag (Bagenalstown), Borris, Leighlinbridge, and everywhere in between." },
  ],
  "/it-support-kilkenny": [
    { question: "Do you support POS systems for restaurants?", answer: "I support the IT infrastructure that POS systems run on \u2014 network connectivity, Wi-Fi, security, and integration with your other business systems. If your POS drops out on a busy Friday, the first thing to check is usually the network \u2014 and that\u2019s exactly what I manage." },
    { question: "Can you set up separate guest Wi-Fi for my hotel or caf\u00e9?", answer: "Yes. Guest Wi-Fi should be completely isolated from your business network for security and compliance. I set this up with proper bandwidth management so guests get reliable access without slowing down your staff systems." },
    { question: "I\u2019m a solicitor in Kilkenny \u2014 what compliance do I need?", answer: "At minimum: GDPR for client data handling, secure email with encryption, proper document management with access controls, and regular backup. Law Society practice management requirements apply to client funds and records. If larger corporate clients audit your supply chain under NIS2, I help you respond. I assess all of this in a free review." },
  ],
  "/network-wifi-laois-carlow": [
    { question: "How quickly can you come out for a Laois or Carlow site survey?", answer: "Usually within a week for standard surveys. I\u2019m based on the Laois\u2013Carlow border, so travel time is short and I can often fit an on-site survey around your business hours." },
    { question: "What brands of hardware do you install?", answer: "Business-grade Ubiquiti UniFi, MikroTik, and TP-Link Omada \u2014 selected per-site. Wi-Fi 6 / Wi-Fi 6E where it makes sense, Cat6 / Cat6a cabling, and CRA-compliant firewalls. No consumer-grade kit in commercial installations." },
    { question: "Can you work with my existing ISP / broadband?", answer: "Yes. The network I install sits behind whichever broadband provider you already use (Eir, Vodafone, Sky, SIRO, etc.). If your connection itself is the bottleneck I\u2019ll tell you straight \u2014 no point putting Wi-Fi 6 on a 30Mbps line." },
    { question: "Do you do outdoor Wi-Fi and yard coverage?", answer: "Yes \u2014 common for Carlow plant-hire yards, construction sites, and rural workshops. Weatherproof outdoor APs with proper mounting and power, integrated with the indoor network. On-site survey covers both indoor and outdoor coverage." },
  ],
};

// ═══════════════════════════════════════════════════════════
//  Route-level SEO and schema component
// ═══════════════════════════════════════════════════════════

function RouteSEO() {
  const [location] = useLocation();
  const seo = pageSEO[location];
  if (!seo) return null;

  const faq = faqData[location];

  return (
    <>
      <SEO title={seo.title} description={seo.description} canonicalPath={location} noindex={seo.noindex} />
      {faq && <FAQSchema items={faq} />}

      {/* Service schemas */}
      {location === "/web-design" && (
        <ServiceSchema name="Professional Website Design" description="Custom website design for small businesses in Laois, Carlow, Kilkenny, and surrounding areas. Mobile-friendly, SEO-optimised, accessibility-compliant. From \u20ac799. Government grants available." />
      )}
      {location === "/microsoft-365" && (
        <ServiceSchema name="Microsoft 365 Setup, Business Email & Teams Phone" description="Professional Microsoft 365 setup, business email, Teams, OneDrive, SharePoint, and Teams Phone for small businesses in Ireland. GDPR-compliant. Migration and training included." />
      )}
      {location === "/managed-it-support" && (
        <ServiceSchema name="Managed IT Support for Small Business" description="Proactive managed IT support. Fixed monthly pricing from \u20ac45/user/month. Microsoft 365 admin, endpoint security, compliance management, and direct support." />
      )}
      {location === "/managed-hardware" && (
        <ServiceSchema name="Managed Hardware Supply for Small Business" description="Turnkey business PCs and on-site servers delivered ready to use. Fully configured, licensed, encrypted, and migrated. Compact miniPCs from \u20ac899 per device; on-site servers from \u20ac2,499. Optional Hardware Care from \u20ac19/device/month." />
      )}
      {location === "/network-wifi-security" && (
        <ServiceSchema name="Business Network & Wi-Fi Solutions" description="Network design, Wi-Fi installation, security, and support for offices, workshops, and retail spaces across Laois, Carlow, and the Irish Midlands." />
      )}
      {location === "/cybersecurity" && (
        <ServiceSchema name="Cybersecurity & Compliance Services" description="Cybersecurity audits, NIS2 readiness, GDPR compliance, phishing protection, staff awareness training, and European Accessibility Act audits for small businesses in Ireland." />
      )}
      {location === "/ai-readiness" && (
        <ServiceSchema name="AI Readiness & Microsoft Copilot Setup" description="Practical AI implementation for small businesses. Microsoft Copilot setup, AI readiness assessments, and hands-on training. From \u20ac150." />
      )}
      {location === "/website-care-plans" && (
        <ServiceSchema name="Website Care Plans" description="Mandatory hosting, security updates, backups, performance monitoring, and content changes for all websites. From \u20ac49/month." />
      )}
      {location === "/dora-compliance" && (
        <ServiceSchema name="DORA Compliance for Financial Services" description="DORA readiness assessments, DORA-aligned IT setup, and ongoing compliance management for financial sector firms and their IT providers in Ireland." />
      )}
      {location === "/trades" && (
        <ServiceSchema name="IT & Websites for Trades & Construction" description="Professional websites, Microsoft 365, managed IT, and cybersecurity built for tradespeople and construction businesses in Ireland." />
      )}
      {location === "/professional-services" && (
        <ServiceSchema name="IT & Compliance for Professional Services" description="Managed IT, Microsoft 365, cybersecurity, and regulatory compliance for accountants, solicitors, and professional services firms in Ireland." />
      )}
      {location === "/web-design-laois" && (
        <ServiceSchema name="Web Design in County Laois" description="Professional website design for small businesses across County Laois \u2014 Portlaoise, Portarlington, Abbeyleix, Mountmellick, Mountrath, Stradbally. Mobile-friendly, EAA-compliant, SEO-ready. From \u20ac799." areaServed="County Laois, Ireland" />
      )}
      {location === "/web-design-carlow" && (
        <ServiceSchema name="Web Design in County Carlow" description="Professional website design for small businesses across County Carlow \u2014 Carlow town, Tullow, Bagenalstown, Borris, Leighlinbridge. Mobile-friendly, EAA-compliant, SEO-ready. From \u20ac799." areaServed="County Carlow, Ireland" />
      )}
      {location === "/web-design-kilkenny" && (
        <ServiceSchema name="Web Design in County Kilkenny" description="Professional website design for hospitality, retail, accommodation, and trades across County Kilkenny \u2014 Kilkenny city, Thomastown, Castlecomer, Callan, Graiguenamanagh. EAA-compliant for hospitality and retail. From \u20ac799." areaServed="County Kilkenny, Ireland" />
      )}
      {location === "/microsoft-365-setup-ireland" && (
        <ServiceSchema name="Microsoft 365 Setup & Migration Across Ireland" description="Remote-first Microsoft 365 tenant setup, Exchange/Google Workspace/POP migration, Teams Phone, and Microsoft 365 Copilot configuration for small businesses across Ireland. GDPR-compliant with EU data residency, Microsoft Entra ID identity, and MFA. From \u20ac350 basic setup." areaServed="Ireland" />
      )}
      {location === "/it-support-laois" && (
        <ServiceSchema name="Managed IT Support in County Laois" description="Proactive managed IT support for small businesses across County Laois \u2014 Portlaoise, Portarlington, Abbeyleix, Mountmellick, Mountrath. Microsoft 365 administration, endpoint security, GDPR/NIS2 compliance, on-site support. From \u20ac45 per user per month." areaServed="County Laois, Ireland" />
      )}
      {location === "/it-support-carlow" && (
        <ServiceSchema name="Managed IT Support in County Carlow" description="Managed IT and NIS2-ready cybersecurity for Carlow construction, trades, plant hire and professional services businesses. Supply-chain security documentation, MFA, endpoint protection, Microsoft 365 administration. From \u20ac45 per user per month." areaServed="County Carlow, Ireland" />
      )}
      {location === "/it-support-kilkenny" && (
        <ServiceSchema name="Managed IT Support in County Kilkenny" description="Sector-tailored managed IT for Kilkenny hospitality, professional firms, retail/craft, and trades \u2014 POS support, guest Wi-Fi isolation, EAA and GDPR compliance, Microsoft 365 administration. From \u20ac45 per user per month." areaServed="County Kilkenny, Ireland" />
      )}
      {location === "/network-wifi-laois-carlow" && (
        <ServiceSchema name="Business Network & Wi-Fi Installation in Laois and Carlow" description="On-site network design, Cat6 / Cat6a cabling, Wi-Fi 6 mesh installation, CRA-compliant firewalls, and guest Wi-Fi isolation for offices, workshops, warehouses, and retail across Laois and Carlow. From \u20ac150 Wi-Fi health check, \u20ac400 small-office setup, \u20ac800 full design and install." areaServed="Laois and Carlow, Ireland" />
      )}

      {/* Page-type schemas */}
      {location === "/about" && <AboutPageSchema />}
      {location === "/contact" && <ContactPageSchema />}
      {location === "/portfolio" && <PortfolioSchema />}
    </>
  );
}

// ═══════════════════════════════════════════════════════════
//  Router
// ═══════════════════════════════════════════════════════════

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change (unless URL has a hash anchor)
  useEffect(() => {
    if (window.location.hash) {
      // Let browser handle anchor scroll, but give DOM time to render
      const id = window.location.hash.slice(1);
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        }
      };
      // Small delay to ensure target element exists after route render
      setTimeout(tryScroll, 0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".reveal-on-scroll");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  return (
    <Switch>
      {/* Subscribe gets its own minimal checkout layout */}
      <Route path="/subscribe" component={Subscribe} />
      <Route>
        {() => (
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Switch>
                {/* Core pages */}
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/portfolio" component={Portfolio} />

                {/* Service pages */}
                <Route path="/web-design" component={WebDesign} />
                <Route path="/microsoft-365" component={Microsoft365} />
                <Route path="/managed-it-support" component={ManagedIT} />
                <Route path="/managed-hardware" component={ManagedHardware} />
                <Route path="/network-wifi-security" component={NetworkWifi} />
                <Route path="/cybersecurity" component={Cybersecurity} />
                <Route path="/ai-readiness" component={AIReadiness} />
                <Route path="/website-care-plans" component={WebsiteCare} />

                {/* Sector pages */}
                <Route path="/trades" component={Trades} />
                <Route path="/professional-services" component={ProfessionalServices} />

                {/* Compliance pages */}
                <Route path="/dora-compliance" component={DORACompliance} />

                {/* Commercial pages */}
                <Route path="/pricing" component={Pricing} />
                <Route path="/grants-funding" component={Grants} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Route path="/get-a-quote" component={GetAQuote} />

                {/* Local SEO landing pages */}
                <Route path="/web-design-laois" component={WebDesignLaois} />
                <Route path="/web-design-carlow" component={WebDesignCarlow} />
                <Route path="/web-design-kilkenny" component={WebDesignKilkenny} />
                <Route path="/it-support-laois" component={ITSupportLaois} />
                <Route path="/it-support-carlow" component={ITSupportCarlow} />
                <Route path="/it-support-kilkenny" component={ITSupportKilkenny} />
                <Route path="/microsoft-365-setup-ireland" component={Microsoft365Ireland} />
                <Route path="/network-wifi-laois-carlow" component={NetworkLaoisCarlow} />

                {/* Legal / utility pages */}
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/terms-and-conditions" component={TermsAndConditions} />
                <Route path="/cookie-policy" component={CookiePolicy} />

                {/* 404 */}
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieBanner />
            <LocalBusinessSchema />
            <RouteSEO />
          </div>
        )}
      </Route>
    </Switch>
  );
}

// ═══════════════════════════════════════════════════════════
//  App
// ═══════════════════════════════════════════════════════════

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
