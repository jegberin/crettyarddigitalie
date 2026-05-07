import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight, Quote } from "lucide-react";
import serviceImg from "@assets/service-microsoft-365.webp";
import teamsPhoneImg from "@assets/m365-teams-phone-multi-device.webp";
import iconEmailPro from "@assets/concept-email-pro.webp";
import iconCloudStorage from "@assets/concept-cloud-storage.webp";
import iconTeamCollab from "@assets/concept-team-collab.webp";
import iconBusinessPhone from "@assets/concept-business-phone.webp";
import iconSharedCalendar from "@assets/concept-shared-calendar.webp";
import iconWorkAnywhere from "@assets/concept-work-anywhere.webp";
import iconGdprShield from "@assets/concept-gdpr-shield.webp";
import iconLicenceMatch from "@assets/concept-licence-match.webp";
import iconMigrationSafe from "@assets/concept-migration-safe.webp";
import iconTraining from "@assets/concept-training.webp";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { CredentialBand } from "@/components/CredentialBand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Microsoft365() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-[#f3f4f5] py-20 md:py-28 dot-matrix-bg relative overflow-hidden">
        <GridLines cols={8} rows={5} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="eyebrow mb-5 inline-block">Microsoft 365 &amp; Teams Phone</span>
              <h1 className="display-sm mb-6" data-testid="text-page-title">
                Microsoft 365, Done the Way Microsoft Actually Recommends
              </h1>
              <p className="text-xl text-foreground mb-8 leading-relaxed font-sans font-normal" data-testid="text-hero-description">
                Stop losing emails, sharing files by USB stick, or sending quotes from a Gmail address. I set up Microsoft 365 for small businesses across Ireland so your email, file storage, and collaboration tools work securely from anywhere &mdash; and with Teams Phone, your business calls work through the same system. Built on the standards I learned across Microsoft, Intel and Dell, with the security baselines Microsoft recommends but most resellers skip.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact#send-message">
                  <Button size="lg" className="px-10" data-testid="button-hero-cta">
                    Book a Free Consultation
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="px-8" data-testid="link-pricing">
                    See Pricing &rarr;
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn className="hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={serviceImg}
                  alt="Microsoft 365 business email open on a laptop in a small Irish office, with Teams and OneDrive visible"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CredentialBand />

      {/* ── Why this matters callout ─────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="bg-accent/5 border-l-4 border-accent p-6 md:p-7 rounded-r-xl" data-testid="callout-default-tenants">
              <p className="text-foreground text-[16px] leading-relaxed font-sans font-medium">
                Most small Irish businesses run on Microsoft 365 tenants that were set up by the cheapest available reseller and never touched again. <span className="text-primary font-headline font-bold">Default tenants are not secure tenants.</span> The hardening is the work.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Key Benefits ──────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Key Benefits</span>
            <h2 className="text-3xl">Seven Ways to Make Your Business Run Better</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: iconEmailPro,
                alt: "Glass envelope with an @-symbol representing professional business email",
                title: "Professional Email",
                benefit: "Send and receive emails from you@yourbusiness.ie \u2014 not a personal Gmail or Yahoo address. Every email builds credibility. 50GB+ mailbox, shared calendars, and contacts.",
              },
              {
                img: iconCloudStorage,
                alt: "Glass cloud cradling a folder representing secure cloud file storage",
                title: "Cloud File Storage",
                benefit: "Quotes, invoices, photos, documents \u2014 stored safely in the cloud, accessible from any device. No more USB sticks, no more lost attachments.",
              },
              {
                img: iconTeamCollab,
                alt: "Three overlapping glass speech bubbles representing team collaboration",
                title: "Team Collaboration",
                benefit: "Microsoft Teams for chat, file sharing, and video calls \u2014 whether your team is in the office, on site, or at home. One app for all communication.",
              },
              {
                img: iconBusinessPhone,
                alt: "Glass telephone handset representing a business phone system",
                title: "Business Phone System",
                benefit: "Teams Phone replaces your landline with a proper business number that works from your mobile, laptop, or desk phone \u2014 integrated with your calendar and contacts.",
              },
              {
                img: iconSharedCalendar,
                alt: "Glass calendar page with a highlighted date representing shared calendars",
                title: "Shared Calendars",
                benefit: "Book meetings, check availability, and set reminders without endless back-and-forth texts and phone calls.",
              },
              {
                img: iconWorkAnywhere,
                alt: "Glass globe orbited by device silhouettes representing working from anywhere",
                title: "Work from Anywhere",
                benefit: "Full access to everything from any device, securely. Whether your team is at a desk, on a building site, or at the kitchen table.",
              },
              {
                img: iconGdprShield,
                alt: "Glass shield with a tick and a ring of EU stars representing GDPR compliance",
                title: "GDPR-Compliant from Day One",
                benefit: "I configure your environment with EU data residency, Microsoft Entra ID (formerly Azure AD) identity, data retention policies, Multi-Factor Authentication, and encrypted communications \u2014 so your setup meets GDPR requirements from the start. Business Premium adds Intune device management if you need it.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover h-full" data-testid={`card-benefit-${i}`}>
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-20 h-20 mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Teams Phone ───────────────────────────────────────────── */}
      <section className="py-20 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={iconBusinessPhone}
                    alt="Glass telephone handset representing Microsoft Teams Phone"
                    width={1000}
                    height={1000}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                  <span className="eyebrow">Microsoft Teams Phone</span>
                </div>
                <h2 className="text-2xl md:text-3xl mb-4">Replace Your Landline for Good</h2>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">
                  If your business still relies on a traditional landline or personal mobile numbers for business calls, Microsoft Teams Phone is the upgrade you didn't know you needed. Your team gets a proper business number that works from any device, anywhere &mdash; all integrated with your calendar, contacts, and email.
                </p>
                <ul className="space-y-3 mb-4">
                  {[
                    "Proper business number (or keep your existing one)",
                    "Calls from mobile, laptop, tablet, or desk phone",
                    "Voicemail-to-email transcription",
                    "Call forwarding, auto-attendants, and call queues",
                    "No separate phone company needed",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] font-sans">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-headline font-bold text-accent mb-5">From &euro;7.50 per user per month (plus Microsoft calling plan). I handle the entire setup.</p>
                <Link href="/contact#send-message">
                  <Button size="lg">Ask About Teams Phone</Button>
                </Link>
              </div>
              <div>
                <img
                  src={teamsPhoneImg}
                  alt="A Microsoft Teams incoming call ringing simultaneously on a laptop, smartphone and desk handset on a small-office desk"
                  width={1920}
                  height={1280}
                  className="w-full h-auto rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Who This Is For ───────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Is This for You?</span>
            <h2 className="text-3xl">Microsoft 365 for Businesses That Need It to Just Work</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Tradespeople & Contractors", desc: "You need a professional email address and a simple way to share quotes, invoices, and site photos between the office and the field. Not a personal Gmail.", href: "/trades" },
              { title: "Small Offices & Teams (2\u201320 staff)", desc: "You need email, shared calendars, and file storage that everyone can access without IT headaches or paying someone every time something breaks." },
              { title: "Professional Services", desc: "Accountants, solicitors, consultants \u2014 you handle sensitive client data. Consumer-grade email isn\u2019t secure enough. You need proper business email with real security controls and GDPR compliance.", href: "/professional-services" },
              { title: "Growing Businesses", desc: "You\u2019ve outgrown free email and ad-hoc file sharing. You need a system that scales easily as you hire, without starting over every time." },
            ].map((item, i) => {
              const Card = (
                <div className="bg-white p-8 rounded-2xl card-hover h-full" data-testid={`card-who-for-${i}`}>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                  {item.href && (
                    <span className="text-accent text-sm font-headline font-bold mt-4 inline-flex items-center">
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </span>
                  )}
                </div>
              );
              return (
                <StaggerItem key={i}>
                  {item.href ? <Link href={item.href}>{Card}</Link> : Card}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Full Service</span>
            <h2 className="text-3xl">I Don't Just Hand You a Licence Key and Wish You Luck</h2>
            <p className="text-foreground mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Every setup includes hands-on configuration, migration, and training so your team is productive from day one.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { img: iconEmailPro, alt: "Glass envelope with an @-symbol representing professional business email", title: "Professional Business Email", desc: "Custom domain email (you@yourbusiness.ie) with 50GB+ mailboxes, shared calendars, and contacts on Exchange Online." },
              { img: iconLicenceMatch, alt: "Glass hexagonal tag with a checkmark representing licence-to-needs matching", title: "The Right Licence for Your Needs", desc: "I recommend the Microsoft 365 plan that fits your actual business \u2014 no upselling features you\u2019ll never use, no paying for things you don\u2019t need." },
              { img: iconTeamCollab, alt: "Three overlapping glass speech bubbles representing team collaboration", title: "Teams & Collaboration", desc: "Microsoft Teams set up with the right channels, permissions, and settings so your staff can work together \u2014 without the chaos of an un-managed free-for-all." },
              { img: iconBusinessPhone, alt: "Glass telephone handset representing Teams Phone setup", title: "Teams Phone Setup", desc: "Business phone numbers, call routing, voicemail, and auto-attendant \u2014 all configured and tested. Replace your landline with a modern cloud phone system." },
              { img: iconCloudStorage, alt: "Glass cloud cradling a folder representing OneDrive and SharePoint cloud storage", title: "Cloud File Storage", desc: "OneDrive for personal files, SharePoint for team files \u2014 properly organised, version-controlled, and accessible from anywhere. The end of USB sticks." },
              { img: iconGdprShield, alt: "Glass shield with a tick and EU stars representing GDPR-compliant security", title: "GDPR-Compliant Security", desc: "MFA, tenant hardening, EU data residency, data retention policies, and email encryption. These aren\u2019t optional extras \u2014 they\u2019re how I set up every single tenant." },
              { img: iconMigrationSafe, alt: "Two glass folders connected by an arrow representing a safe email migration", title: "Safe Email Migration", desc: "Every email, contact, and calendar entry moved safely from your old system. I\u2019ve migrated dozens of businesses without losing a single message." },
              { img: iconTraining, alt: "Glass lightbulb with a speech bubble representing practical team training", title: "Team Training", desc: "Your team gets a walkthrough so everyone is confident from the start. Not a lecture \u2014 practical, task-based training they can use immediately." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-8 rounded-2xl flex gap-6 card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-included-${i}`}>
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-20 h-20 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Migration Reassurance ──────────────────────────────────── */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm" data-testid="section-migration-reassurance">
              <h2 className="text-2xl mb-6">Worried About Losing Emails When You Switch? Don't Be.</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-foreground leading-relaxed mb-4 font-sans font-normal">
                    Moving to Microsoft 365 sounds daunting if you've been on Gmail, Google Workspace, or an old POP / legacy Exchange account for years. I understand &mdash; your emails feel irreplaceable.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4 font-sans font-normal">
                    That's why I plan every migration carefully. I've migrated dozens of businesses and have never lost a single email. Where possible, I run the migration overnight to minimise disruption.
                  </p>
                  <p className="text-foreground leading-relaxed font-sans font-normal">
                    The result? You wake up to a professional email system with everything intact &mdash; and wonder why you didn't do it sooner.
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "All existing emails moved across safely",
                    "Contacts and calendar entries preserved",
                    "Minimal disruption \u2014 often done overnight",
                    "Clear communication at every step",
                    "Test run before going live",
                    "I stay available until everything feels right",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground font-sans text-[15px]">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={17} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Common Migrations ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Migrations Handled</span>
            <h2 className="text-2xl">Common Microsoft 365 Migrations I Handle</h2>
            <p className="text-foreground text-[15px] font-sans mt-3 max-w-2xl mx-auto">Whatever you&rsquo;re moving from, I&rsquo;ve moved it to Microsoft 365 without losing data.</p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { from: "Gmail", detail: "Personal Gmail to professional @yourbusiness.ie." },
              { from: "Google Workspace", detail: "Full tenant move from Google Workspace to Microsoft 365." },
              { from: "Exchange 2016 / 2019", detail: "Legacy on-premise Exchange to cloud-hosted Exchange Online." },
              { from: "POP / IMAP email", detail: "Old-school POP or IMAP mailboxes to a proper cloud platform." },
            ].map((item) => (
              <StaggerItem key={item.from}>
                <div className="bg-[#f3f4f5] p-5 rounded-xl text-center h-full">
                  <p className="text-xs font-headline font-bold uppercase tracking-wider text-accent mb-1">From</p>
                  <p className="font-headline font-bold text-primary text-base mb-2">{item.from}</p>
                  <p className="text-foreground text-sm font-sans">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Proof Block ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-[#f3f4f5] p-8 md:p-10 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-foreground text-lg leading-relaxed font-sans italic mb-4">
                    "Joey did the lot for us &mdash; a professional website, Microsoft 365 so we have proper email between the office and the lads on site, and sorted our Wi-Fi so it works in every room. Can't recommend him enough."
                  </p>
                  <p className="font-headline font-bold text-primary">Brian, Nurney Plant and Civil</p>
                  <p className="text-sm text-muted-foreground">Gmail accounts &rarr; professional @nurneyplantandcivil.ie email &rarr; reliable communication between office and site teams</p>
                </div>
              </div>
              <div className="mt-4 pl-0 md:pl-12">
                <Link href="/portfolio#project-nurney-plant-civil" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                  Read the full case study <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Without vs With ───────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Difference</span>
            <h2 className="text-3xl">Without Professional Setup vs With Professional Setup</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.05}>
              <div className="bg-red-50/60 p-8 rounded-2xl h-full" data-testid="card-comparison-without">
                <h3 className="text-lg mb-6 text-red-700 flex items-center gap-2">
                  <XCircle size={20} /> Without Professional Setup
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free email addresses that look unprofessional to clients",
                    "Files scattered across USB sticks, personal laptops, and attachments",
                    "No security \u2014 one phishing email could compromise everything",
                    "Staff can\u2019t access what they need when working remotely",
                    "Personal mobile number given to every client",
                    "No GDPR compliance \u2014 data stored who-knows-where",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-red-800/80 font-sans">
                      <XCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-green-50/60 p-8 rounded-2xl h-full" data-testid="card-comparison-with">
                <h3 className="text-lg mb-6 text-green-700 flex items-center gap-2">
                  <CheckCircle size={20} /> With Professional Setup
                </h3>
                <ul className="space-y-4">
                  {[
                    "Professional @yourbusiness.ie email that builds client trust",
                    "All files in one secure, GDPR-compliant cloud \u2014 any device",
                    "MFA and security policies protecting your data from day one",
                    "Staff collaborate seamlessly from office, home, or site",
                    "Proper business phone number via Teams Phone",
                    "EU data residency and retention policies configured",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-green-800/80 font-sans">
                      <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Saves Money ───────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Smart Investment</span>
            <h2 className="text-3xl">Why Proper Setup Saves You Money</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Avoid Costly Mistakes", desc: "A misconfigured tenant can lead to data breaches, lost emails, or GDPR compliance failures. Getting it right from the start prevents expensive emergency fixes." },
              { title: "Stop Paying for What You Don\u2019t Need", desc: "Many businesses are on the wrong Microsoft 365 plan \u2014 overpaying for features they\u2019ll never use. I match the right plan to your actual needs." },
              { title: "Reduce Downtime", desc: "When email goes down or files disappear, your business stops. Professional setup means fewer problems, and someone who knows your system can fix them fast." },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-[#f3f4f5] p-8 rounded-2xl h-full" data-testid={`card-saves-money-${index}`}>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Pricing</span>
            <h2 className="text-3xl">What Microsoft 365 Setup Costs</h2>
            <p className="text-foreground mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Every business is different, so I quote based on your specific situation. Here's what typically influences the price.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            <FadeIn>
              <ul className="space-y-5">
                {[
                  { factor: "Number of users", detail: "More mailboxes means a larger setup scope." },
                  { factor: "Migration complexity", detail: "Moving from Gmail is simpler than migrating years of data from legacy Exchange." },
                  { factor: "Security needs", detail: "Basic protection vs advanced compliance for regulated industries." },
                  { factor: "Teams Phone", detail: "Adding a business phone system increases setup scope but simplifies your ongoing costs." },
                  { factor: "Training", detail: "A quick walkthrough vs detailed hands-on sessions for your full team." },
                  { factor: "Ongoing support", detail: "One-off setup vs monthly administration and support." },
                ].map((item) => (
                  <li key={item.factor} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5"></span>
                    <div>
                      <span className="font-headline font-bold text-[15px]">{item.factor}:</span>
                      <span className="text-foreground text-[15px] ml-1 font-sans">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white p-8 rounded-2xl shadow-sm" data-testid="card-pricing-guidance">
                <h3 className="text-lg mb-4">Typical Starting Points</h3>
                <ul className="space-y-4 text-[15px] font-sans">
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-foreground">Basic setup (1&ndash;5 users)</span>
                    <span className="font-headline font-bold">From &euro;350</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-foreground">Full migration &amp; setup (5&ndash;20 users)</span>
                    <span className="font-headline font-bold">From &euro;600</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-foreground">GDPR &amp; security hardening</span>
                    <span className="font-headline font-bold">From &euro;150</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-foreground">Teams Phone setup</span>
                    <span className="font-headline font-bold">From &euro;150</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-foreground">Teams Phone (calling plan)</span>
                    <span className="font-headline font-bold">From &euro;7.50/user/mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground">Monthly support &amp; admin</span>
                    <span className="font-headline font-bold">From &euro;50/mo</span>
                  </li>
                </ul>
                <p className="text-foreground/80 text-sm mt-6 leading-relaxed font-sans">
                  Microsoft 365 licence fees are separate and billed directly by Microsoft. I recommend the most cost-effective plan.
                </p>
                <p className="text-sm font-headline font-bold text-accent mt-4">
                  <Link href="/grants-funding" className="hover:underline">The Grow Digital Voucher</Link> may cover up to 50% of setup costs and 12 months of licences.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mt-10">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free Consultation</Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">See Digital Foundation Bundles</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl">Answered in Plain English</h2>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3" data-testid="faq-accordion">
              {[
                { id: "m365-faq-1", q: "I already have Gmail \u2014 why switch?", a: "Microsoft 365 gives you a professional email on your own domain, better security controls, GDPR-compliant data storage in the EU, and business tools like Teams, OneDrive, and SharePoint. It also includes the option to add a full business phone system through Teams Phone." },
                { id: "m365-faq-2", q: "Will I lose emails during migration?", a: "No. I use proven migration tools and verify everything afterwards. Every email, contact, and calendar entry transfers safely. I\u2019ve migrated dozens of businesses without losing a single message." },
                { id: "m365-faq-3", q: "What\u2019s Teams Phone, in simple terms?", a: "It turns the Microsoft Teams app on your phone, laptop, or a desk handset into your business phone system. You get a real phone number, your team can make and receive calls from anywhere, and it\u2019s all connected to your calendar and email. No separate phone company needed." },
                { id: "m365-faq-4", q: "Do I need a desk phone?", a: "Not unless you want one. Most small businesses use Teams Phone on their mobile and laptop. If you prefer a physical handset, I can supply and configure one \u2014 but it\u2019s entirely optional." },
                { id: "m365-faq-5", q: "Which Microsoft 365 plan do I need?", a: "Most small businesses do well with Business Basic or Business Standard. For Teams Phone, you need a compatible plan plus a calling plan. I\u2019ll assess your needs and recommend the most cost-effective option." },
                { id: "m365-faq-6", q: "I\u2019m not technical \u2014 will this be complicated for me?", a: "Not at all. I handle all the technical work and provide plain-English training. That\u2019s literally the entire point \u2014 you don\u2019t need to be technical." },
                { id: "m365-faq-7", q: "Can I use a government grant?", a: "M365 is one of the cleanest fits for the Grow Digital Voucher (see the grants page for full details). It can cover 50% of your first year of licence fees plus setup and training, up to \u20ac5,000 total. You must complete a free Digital for Business consultation with your LEO first, then apply yourself \u2014 I provide scheme-compliant invoicing to support your claim." },
                { id: "m365-faq-8", q: "Do you offer ongoing support?", a: "Yes. Monthly plans covering user management, troubleshooting, security updates, and administration \u2014 so you always have someone to call who knows your setup." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6">
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ── Related Services ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">Related Services</span>
            <h2 className="text-2xl">More Ways I Can Help Your Business</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/ai-readiness", title: "Microsoft Copilot & AI", desc: "Microsoft 365 Copilot turns your existing M365 into an AI assistant. I set it up securely and train your team to use it properly.", label: "AI readiness \u2192" },
              { href: "/microsoft-365-setup-ireland", title: "M365 Across Ireland", desc: "Nationwide Microsoft 365 setup, migration, and training \u2014 remote-first, no matter where your team is based.", label: "See Ireland setup \u2192" },
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Proactive monitoring, updates, security, and compliance \u2014 for a fixed monthly fee.", label: "Learn more \u2192" },
              { href: "/managed-hardware", title: "Managed Hardware", desc: "Turnkey business PCs and on-site servers, delivered ready to use.", label: "Learn more \u2192" },
              { href: "/network-wifi-security", title: "Network & Wi-Fi", desc: "Reliable connectivity for offices, workshops, and retail spaces.", label: "Learn more \u2192" },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "NIS2, GDPR, and threat protection for your business.", label: "Learn more \u2192" },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-white p-7 rounded-2xl card-hover cursor-pointer shadow-sm h-full">
                    <h3 className="text-lg mb-3">{item.title}</h3>
                    <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold inline-block">{item.label}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Get Your Email, Phone, and IT Working Properly"
        subtext="Book a free consultation. I'll look at your current setup, recommend the right Microsoft 365 plan, and give you a clear quote &mdash; all in plain English."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="Explore Managed IT Support"
        secondaryHref="/managed-it-support"
      />
    </div>
  );
}
