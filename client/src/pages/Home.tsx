import { useState, useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Shield, BadgeEuro, Network, RefreshCw, FileCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TrustBadges } from "@/components/TrustBadges";
import { StatsStrip } from "@/components/StatsStrip";
import { CredentialBand } from "@/components/CredentialBand";
import { FragmentedVsIntegrated } from "@/components/FragmentedVsIntegrated";
import { AnimatedTetrahedron } from "@/components/AnimatedTetrahedron";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import project1 from "@assets/portfolio-bm-custom-furniture.webp";
import project2 from "@assets/portfolio-go-green-steam-clean.webp";
import project3 from "@assets/portfolio-nurney-plant-civil.webp";
import project4 from "@assets/portfolio-more-than-points.webp";
import project5 from "@assets/portfolio-crettyard-ie.webp";
import joeyPhoto from "@assets/joey-profile-photo.webp";
import iconWebDesign from "@assets/concept-web-design.webp";
import iconAICopilot from "@assets/concept-ai-copilot.webp";
import icon365Admin from "@assets/concept-365-admin.webp";
import iconItHelpdesk from "@assets/concept-it-helpdesk.webp";
import iconWifiMesh from "@assets/concept-wifi-mesh.webp";
import iconGdprShield from "@assets/concept-gdpr-shield.webp";
import iconEndpointSecurity from "@assets/concept-endpoint-security.webp";
import iconCloudBackup from "@assets/concept-cloud-backup.webp";

type Service = {
  num: string;
  image: string;
  imageAlt: string;
  title: string;
  desc: ReactNode;
  price: string;
  href: string;
  linkLabel: string;
  testId: string;
  linkTestId: string;
};

const services: Service[] = [
  {
    num: "01",
    image: iconItHelpdesk,
    imageAlt: "Glass headset with a speech bubble representing direct IT helpdesk support",
    title: "Managed IT Support",
    desc: "Your outsourced IT department. I monitor your systems, keep everything updated and secure, manage compliance, and fix problems before they cost you time or money. Fixed monthly pricing.",
    price: "From \u20ac45/user/month",
    href: "/managed-it-support",
    linkLabel: "Explore managed IT plans",
    testId: "card-service-managedit",
    linkTestId: "link-managedit",
  },
  {
    num: "02",
    image: icon365Admin,
    imageAlt: "Glass cogwheel with an envelope representing Microsoft 365 and Teams Phone administration",
    title: "Microsoft 365 & Teams Phone",
    desc: "Professional @yourbusiness.ie email, cloud file storage, Teams for collaboration, and a modern business phone system \u2014 replacing old landlines. Set up securely with GDPR compliance from day one.",
    price: "Setup from \u20ac350",
    href: "/microsoft-365",
    linkLabel: "See how it works",
    testId: "card-service-microsoft365",
    linkTestId: "link-microsoft365",
  },
  {
    num: "03",
    image: iconGdprShield,
    imageAlt: "Glass shield with a tick and a ring of EU stars representing cybersecurity and GDPR compliance",
    title: "Cybersecurity & Compliance",
    desc: "Practical protection against phishing, ransomware, and data breaches \u2014 plus NIS2, GDPR, and European Accessibility Act compliance. Security audits, staff training, and ongoing monitoring.",
    price: "Audits from \u20ac200",
    href: "/cybersecurity",
    linkLabel: "See cybersecurity options",
    testId: "card-service-cybersecurity",
    linkTestId: "link-cybersecurity",
  },
  {
    num: "04",
    image: iconWifiMesh,
    imageAlt: "Glass Wi-Fi access point with concentric signal arcs representing mesh Wi-Fi coverage",
    title: "Network & Wi\u2011Fi",
    desc: "Business-grade network design, Wi-Fi installation, and security for offices, workshops, warehouses, and retail spaces. Dead spots eliminated, card machines connected, teams productive.",
    price: "Health checks from \u20ac150",
    href: "/network-wifi-security",
    linkLabel: "Book a free network review",
    testId: "card-service-network",
    linkTestId: "link-network",
  },
  {
    num: "05",
    image: iconEndpointSecurity,
    imageAlt: "Glass laptop with a padlock representing managed business hardware",
    title: "Managed Hardware",
    desc: "Turnkey business PCs and on-site servers delivered ready to use \u2014 fully configured, licensed, encrypted, and with your data migrated before they arrive. Log in and get to work.",
    price: "PCs from \u20ac899",
    href: "/managed-hardware",
    linkLabel: "See what's included",
    testId: "card-service-hardware",
    linkTestId: "link-hardware",
  },
  {
    num: "06",
    image: iconAICopilot,
    imageAlt: "Glass four-pointed sparkle with connected spheres representing AI and Microsoft Copilot",
    title: "AI & Microsoft Copilot",
    desc: "Practical AI that saves your team real hours every week. I help you understand what AI can do for your business and implement tools like Microsoft Copilot for genuine productivity gains.",
    price: "Consultations from \u20ac150",
    href: "/ai-readiness",
    linkLabel: "Explore AI readiness",
    testId: "card-service-ai",
    linkTestId: "link-ai",
  },
  {
    num: "07",
    image: iconWebDesign,
    imageAlt: "Glass browser window with a smaller glass smartphone beside it representing responsive web design",
    title: "Web Design",
    desc: (
      <>
        Often the entry point to a longer relationship &mdash; a properly built website is the first piece of digital infrastructure for most businesses, and the one customers see. Every site includes a <Link href="/website-care-plans" className="text-accent hover:underline">care plan</Link>.
      </>
    ),
    price: "From \u20ac799",
    href: "/web-design",
    linkLabel: "Learn what's included",
    testId: "card-service-webdesign",
    linkTestId: "link-webdesign",
  },
  {
    num: "08",
    image: iconCloudBackup,
    imageAlt: "Glass cloud with a shield representing ongoing website care and backups",
    title: "Website Care Plans",
    desc: "Every website I build comes with a mandatory care plan \u2014 EU-hosted, with weekly backups, monthly security updates, uptime monitoring, malware scanning, and a Core Web Vitals review on Premium.",
    price: "From \u20ac49/month",
    href: "/website-care-plans",
    linkLabel: "See care plan details",
    testId: "card-service-care",
    linkTestId: "link-care",
  },

];

const HERO_PHRASES = [
  "Done Properly.",
  "One Trusted Partner.",
  "Built to Stay.",
  "Enterprise Discipline.",
];

function CharReveal({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  let charIndex = 0;
  return (
    <>
      {text.split("").map((ch, i) => {
        if (ch === " ") return <span key={i}>&nbsp;</span>;
        const delay = startDelay + charIndex++ * 40;
        return (
          <span key={i} className="animate-char-in" style={{ animationDelay: `${delay}ms` }}>
            {ch}
          </span>
        );
      })}
    </>
  );
}

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % HERO_PHRASES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-primary overflow-hidden flex flex-col" style={{ minHeight: "88vh" }}>
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />

        <div className="absolute inset-0 z-0" aria-hidden="true">
          <AnimatedTetrahedron />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 flex-1 flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20 w-full">
            <FadeIn direction="up">
              <span className="eyebrow mb-6 inline-block" data-testid="text-eyebrow">Crettyard Digital &mdash; Ireland-Wide</span>
              <h1
                className="display-heading text-white mb-8 leading-none"
                data-testid="text-hero-heading"
              >
                <span className="sr-only">Outsourced IT, Microsoft 365 &amp; Cybersecurity for Irish SMEs &mdash; </span>
                <CharReveal text="Your" startDelay={200} /><br />
                <CharReveal text="Outsourced IT," startDelay={500} /><br />
                <span
                  key={phraseIndex}
                  className="text-accent inline-block whitespace-nowrap"
                  data-testid="text-hero-rotating"
                >
                  <CharReveal text={HERO_PHRASES[phraseIndex]} startDelay={0} />
                </span>
              </h1>
              <p className="text-white text-lg mb-10 leading-relaxed font-sans font-normal max-w-lg" data-testid="text-hero-subheading">
                Outsourced IT, Microsoft 365, cybersecurity, and the full digital surface of your business &mdash; run by one accountable person with 15+ years inside Microsoft, Intel and Dell, and 26 industry certifications. Plain-English Irish service. Built for the long haul &mdash; not the next invoice.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact#send-message">
                  <Button size="lg" className="px-10" data-testid="button-book-consultation">
                    Book a Free Consultation
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="px-8 border-white/30 text-white hover:bg-white/10" data-testid="button-how-it-works">
                    See How I Work &rarr;
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="relative z-10 pb-8 pt-2">
          <div className="container mx-auto px-4 max-w-6xl" data-testid="section-trust-badges">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* ── Credential Band ────────────────────────────────────────── */}
      <CredentialBand />

      {/* ── Stats Strip ───────────────────────────────────────────── */}
      <StatsStrip />

      {/* ── The Problem ───────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center">
            <span className="eyebrow mb-5 inline-block">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl mb-6" data-testid="text-presence-heading">Most Small Businesses Are One Phishing Email or One Disappearing Vendor Away From a Crisis</h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed font-sans font-normal">
              Most small Irish businesses didn&rsquo;t choose their IT setup &mdash; it accumulated. A Gmail address from 2018. A free WordPress theme someone&rsquo;s nephew installed. A network the broadband installer left behind. A vendor who took the cheque and stopped answering emails.
            </p>
            <p className="text-lg text-foreground mb-10 leading-relaxed font-sans font-normal">
              None of it was a decision. All of it is now load-bearing. And every month it gets a little more brittle while NIS2, GDPR, the Accessibility Act and the next ransomware family quietly tighten the screws.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              "The owner becomes the de-facto IT manager \u2014 at 9pm, after a full day\u2019s work",
              "Files scattered across personal Gmail, USB sticks, and someone\u2019s old laptop",
              "MFA off, default passwords on, no one watching for the phishing email that lands tomorrow",
              "Backups that nobody has ever actually tested",
              "GDPR, NIS2 and the EAA tightening with no one inside the business reading them",
              "A website builder who launched two years ago and isn\u2019t returning emails now",
            ].map((point, i) => (
              <StaggerItem key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-foreground font-medium text-[15px] font-sans">{point}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Comparison ────────────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f4f5] relative overflow-hidden">
        <GridLines cols={6} rows={4} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FragmentedVsIntegrated
            eyebrow="The Difference"
            heading="Five Vendors vs One Trusted Partner"
            intro="Most small businesses end up juggling five vendors and nobody accountable. There&rsquo;s a better way."
          />
        </div>
      </section>

      {/* ── Smart Investment ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">Smart Investment</span>
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-investment-heading">Five Vendors Costs More Than One</h2>
            <p className="text-foreground max-w-2xl mx-auto font-sans font-normal">
              In money, in coordination tax, and in everything that falls between the cracks. Fragmented IT looks cheaper line by line and costs more in aggregate.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Network size={24} />, title: "One Stack, One Strategy", desc: "Five vendors means five strategies that don\u2019t talk to each other. One partner means everything works together." },
              { icon: <Shield size={24} />, title: "Risk Caught Early, Not Late", desc: "The cost of a breach, a failed backup, or a missed regulation is always higher than the cost of preventing it. Prevention is the standard." },
              { icon: <RefreshCw size={24} />, title: "No Vendor Roulette", desc: "Every time you switch IT providers you pay a hidden tax in lost knowledge. Built to be the last switch you make." },
              { icon: <FileCheck size={24} />, title: "Compliance, Not a Bill", desc: "NIS2, GDPR, DORA, EAA \u2014 handled as part of the service, not billed as an extra project." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-5 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section id="services" className="py-28 bg-[#f3f4f5] relative overflow-hidden">
        <GridLines cols={6} rows={4} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn className="mb-16">
            <span className="eyebrow mb-5 inline-block">What I Do</span>
            <h2 className="text-3xl md:text-4xl mb-3" data-testid="text-services-heading">One Trusted Partner for the Full Digital Surface of Your Business</h2>
            <p className="text-foreground max-w-2xl font-sans font-normal">
              Most agencies build you a website and disappear. Most IT companies don&rsquo;t touch websites. Almost nobody covers the whole digital surface &mdash; so most small businesses end up with five vendors and nobody accountable. I do all of it, under one roof, with one number to ring, for the long haul.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.num}>
                <div
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col"
                  data-testid={service.testId}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-28 h-28 rounded-xl object-contain mb-5"
                    loading="lazy"
                    width="600"
                    height="600"
                  />
                  <h3 className="text-lg mb-3">{service.title}</h3>
                  <p className="text-foreground text-[14px] leading-relaxed font-sans font-normal flex-1 mb-4">
                    {service.desc}
                  </p>
                  <p className="text-xs font-headline font-bold text-primary/60 mb-3">{service.price}</p>
                  <Link
                    href={service.href}
                    className="text-accent font-headline font-bold inline-flex items-center gap-1 text-sm hover:text-primary transition-colors"
                    data-testid={service.linkTestId}
                  >
                    {service.linkLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-10">
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                See Digital Foundation Bundles &rarr;
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Government Grants ─────────────────────────────────────── */}
      <section className="py-20 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <BadgeEuro className="text-accent" size={24} />
                </div>
                <span className="eyebrow">Government Grants</span>
              </div>
              <h2 className="text-2xl md:text-3xl mb-4">Grow Digital Voucher: Up to &euro;5,000 for Digital Tools</h2>
              <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">
                If you're a small business in Ireland rolling out new digital tools — Microsoft 365, CRM, e-commerce platforms, or cybersecurity software — the Grow Digital Voucher may cover 50% of the cost up to &euro;5,000. It doesn't cover bespoke website builds, but it does cover a lot of what I help clients set up. I'll be straight with you about what qualifies and what doesn't.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-headline font-bold text-primary">
                <span><span className="text-accent">Up to &euro;5,000</span> — 50% of eligible costs</span>
                <span><span className="text-accent">1–50 employees</span> — broader eligibility than the old TOV</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex flex-col gap-3">
              <Link href="/grants-funding">
                <Button size="lg" className="w-full">See How It Works</Button>
              </Link>
              <Link href="/contact#send-message">
                <Button size="lg" variant="outline" className="w-full">Ask Me About Grants</Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meet Joey */}
      <section className="py-24 bg-white" aria-labelledby="meet-joey-heading">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-14 items-center">
              <div className="flex justify-center md:justify-start">
                <img
                  src={joeyPhoto}
                  alt="Joey, founder of Crettyard Digital"
                  className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-md ring-4 ring-accent/10"
                  width="240"
                  height="240"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="eyebrow mb-5 inline-block">Meet Joey</span>
                <h2 id="meet-joey-heading" className="text-3xl md:text-4xl mb-5" data-testid="text-meet-joey-heading">Hi, I&rsquo;m Joey &mdash; and I&rsquo;ll be the one supporting your IT, your email, and your website.</h2>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-5">
                  Fifteen years inside Microsoft, Intel and Dell &mdash; most of it on cloud architecture and enterprise infrastructure. 26 industry certifications. The same standards a Fortune 500 IT department runs on, applied to small Irish businesses with 1 to 50 staff.
                </p>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-5">
                  I&rsquo;ll be the person on the call, the person doing the work, and the person answering the phone three years from now.
                </p>
                <Link href="/about" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors" data-testid="link-meet-joey-about">
                  More about me <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Why I'm not a website studio ──────────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100" aria-labelledby="not-a-studio-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">A Quick Note</span>
            <h2 id="not-a-studio-heading" className="text-3xl md:text-4xl mb-6" data-testid="text-not-a-studio-heading">Why I&rsquo;m Not a Website Studio</h2>
            <p className="text-foreground text-[16px] leading-relaxed font-sans mb-5">
              A new website studio appears in our area roughly every month. Most are one person with an AI tool. Some do good work. Many do not. None of them are still answering the phone two years later when a customer&rsquo;s email stops working, when a compliance auditor asks for documentation, when ransomware lands, when a vendor changes a billing model overnight, or when the business outgrows the original setup.
            </p>
            <p className="text-foreground text-[16px] leading-relaxed font-sans">
              Crettyard Digital is the opposite proposition. The website is one piece of work in a relationship that is meant to last years. The standards behind it are the standards I learned across Microsoft, Intel and Dell. The pricing is transparent. The exit is documented. The phone gets answered. That is the whole offer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">How It Works</span>
            <h2 className="text-3xl md:text-4xl" data-testid="text-process-heading">Four Simple Steps. No Jargon. No Pressure.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
            {[
              { num: "01", title: "We Talk", desc: "A free, no-obligation call about your business and what you need. I'll flag any grants you're eligible for." },
              { num: "02", title: "I Build", desc: "I design and build your complete solution \u2014 website, email, phone, network \u2014 as one integrated package." },
              { num: "03", title: "We Launch", desc: "Everything goes live. I train your team and make sure everyone is confident before I step back." },
              { num: "04", title: "I Manage It", desc: "Your website, email, IT, and security stay monitored and maintained. One call away \u2014 always." },
            ].map((step, i) => (
              <StaggerItem key={i} className="text-center">
                <div className="text-5xl font-headline font-extrabold text-primary/10 mb-4 tracking-tight">{step.num}</div>
                <h4 className="text-base mb-2">{step.title}</h4>
                <p className="text-foreground text-sm leading-relaxed font-sans">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn className="text-center mt-10">
            <Link href="/how-it-works" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
              See the full process in detail <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4">
          <FadeIn className="flex justify-between items-end mb-6">
            <div>
              <span className="eyebrow mb-5 inline-block">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl mb-3" data-testid="text-projects-heading">Real Businesses. Real Relationships.</h2>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex text-accent font-headline font-bold items-center hover:text-primary transition-colors text-sm" data-testid="link-view-all-projects">
              View all projects <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>
          <FadeIn className="mb-10">
            <p className="text-foreground text-[15px] font-sans max-w-3xl">
              Some of the businesses I&rsquo;ve built and supported. Most are still active clients today; one ran for nine years before the relationship naturally concluded. Either way &mdash; these are relationships, not transactions.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { href: "https://bmcustomfurniture.ie", portfolioAnchor: "/portfolio#project-bm-custom-furniture", img: project1, alt: "BM Custom Furniture bespoke fitted furniture website designed by Crettyard Digital", title: "BM Custom Furniture", url: "bmcustomfurniture.ie", desc: "9 years of service · 2016–2025 · Website, hardware, bookkeeping, all support", cta: "Visit site", ariaLabel: "Visit BM Custom Furniture website (opens in new tab)", testId: "card-project-bm" },
              { href: "https://gogreensteamclean.ie", portfolioAnchor: "/portfolio#project-go-green-steam-clean", img: project2, alt: "Go Green Steam Clean eco-friendly steam cleaning business website designed by Crettyard Digital", title: "Go Green Steam Clean", url: "gogreensteamclean.ie", desc: "Live and supported since 2025 · Monthly updates and support", cta: "Visit site", ariaLabel: "Visit Go Green Steam Clean website (opens in new tab)", testId: "card-project-gogreen" },
              { href: "https://nurneyplantandcivil.ie", portfolioAnchor: "/portfolio#project-nurney-plant-civil", img: project3, alt: "Nurney Plant and Civil plant hire and civil engineering website designed by Crettyard Digital", title: "Nurney Plant and Civil", url: "nurneyplantandcivil.ie", desc: "Live and supported since 2022 · Website, Microsoft 365, Wi-Fi", cta: "Visit site", ariaLabel: "Visit Nurney Plant and Civil website (opens in new tab)", testId: "card-project-nurney" },
              { href: "https://morethanpoints.ie", portfolioAnchor: "/portfolio#project-more-than-points", img: project4, alt: "More Than Points teen and parent coaching website designed by Crettyard Digital", title: "More Than Points", url: "morethanpoints.ie", desc: "Live and supported since 2026 · Ongoing support", cta: "Visit site", ariaLabel: "Visit More Than Points coaching website (opens in new tab)", testId: "card-project-morethanpoints" },
              { href: "https://crettyard.ie", portfolioAnchor: "/portfolio#project-crettyard-ie", img: project5, alt: "Crettyard.ie community website designed by Crettyard Digital", title: "Crettyard.ie", url: "crettyard.ie", desc: "Live and supported since 2026 · Ongoing support and development", cta: "Visit site", ariaLabel: "Visit Crettyard.ie community website (opens in new tab)", testId: "card-project-crettyardie" },
            ].map((p) => (
              <StaggerItem key={p.testId}>
                <div className="flex flex-col h-full" data-testid={p.testId}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block" aria-label={p.ariaLabel}>
                    <div className="aspect-[4/3] bg-white mb-5 overflow-hidden rounded-xl shadow-sm">
                      <img src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <h3 className="text-lg mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="text-xs font-medium text-muted-foreground mb-2">{p.url}</p>
                    <p className="text-sm text-foreground mb-3 font-sans">{p.desc}</p>
                  </a>
                  <div className="flex items-center gap-4 mt-auto">
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors" aria-label={p.ariaLabel}>
                      {p.cta} <ArrowRight size={14} className="ml-1" />
                    </a>
                    <Link href={p.portfolioAnchor} className="text-muted-foreground font-headline font-bold inline-flex items-center text-xs hover:text-accent transition-colors" data-testid={`link-case-study-${p.testId}`}>
                      Case study &rarr;
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio">
              <Button variant="outline" data-testid="link-view-all-mobile">View all projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl md:text-4xl" data-testid="text-faq-heading">Answered in Plain English</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3" data-testid="faq-accordion">
              {[
                { q: "I already have a Facebook page \u2014 do I really need a website?", a: "Facebook is useful for engagement, but it won\u2019t help you appear on Google when someone searches \u2018plumber near me\u2019 or \u2018furniture maker Carlow.\u2019 A website is something you own and control \u2014 it works around the clock, ranks on search engines, and gives potential customers the confidence to call you." },
                { q: "I\u2019m not very technical \u2014 will this be complicated?", a: "That\u2019s exactly why I do what I do. I handle all the technical work and explain everything in plain English. You don\u2019t need to know anything about hosting, DNS, code, or compliance regulations. My entire approach is built for people who\u2019d rather focus on running their business." },
                { q: "How much does a website cost?", a: "Most small business websites start from around \u20ac799 for a simple site and \u20ac1,299 for a full business site. Every website includes an ongoing care plan for hosting, security, and maintenance. I provide a clear, fixed quote after a free consultation. Bespoke website builds aren\u2019t eligible for the Grow Digital Voucher, but if your project also includes new software subscriptions like M365 or e-commerce platforms, those elements may qualify." },
                { q: "What are the Digital Foundation Bundles?", a: "Instead of buying a website, email, and IT support separately, bundles give you everything as one integrated package \u2014 with one setup cost and one predictable monthly fee. Most clients save money compared to buying piecemeal, and everything works together because it\u2019s all built by the same person." },
                { q: "Do I need to worry about NIS2 or GDPR?", a: "If you collect customer data (contact forms, email lists, invoices), GDPR applies to you. If you\u2019re part of a supply chain for a larger company, NIS2 may apply too. If you sell online, the European Accessibility Act probably applies. I handle all of this as part of my services \u2014 you don\u2019t need to become an expert." },
                { q: "Can you help with government grants?", a: "I\u2019m Grow Digital Voucher Ready \u2014 my invoicing is prepared to meet scheme requirements. The voucher covers 50% of new software subscriptions (M365, CRM, e-commerce platforms, cybersecurity) up to \u20ac5,000. It doesn\u2019t cover bespoke websites or hardware. You must complete a free Digital for Business consultation with your LEO first, then apply yourself \u2014 I can\u2019t apply for you, but I can make sure my documentation supports your claim." },
                { q: "What is Microsoft Teams Phone?", a: "A business phone system that works through the Microsoft Teams app. Instead of a traditional landline, your team makes and receives business calls from their laptop, mobile, or desk phone \u2014 all integrated with your email and calendar. Simpler, cheaper, and far more flexible." },
                { q: "What\u2019s AI and Copilot about?", a: "Microsoft Copilot is an AI assistant built into Microsoft 365 that helps draft emails, summarise documents, create presentations, and answer questions about your business data. I help businesses understand what it can realistically do, set it up properly, and train teams to use it effectively. No hype \u2014 just practical tools." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-100 rounded-xl px-6" data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="font-headline font-bold text-primary text-[15px] py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground font-sans text-[15px] leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ── Spotlight CTA ─────────────────────────────────────────── */}
      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Let's Talk About Your IT, Properly"
        subtext="Book a free, no-obligation consultation. I'll listen to what you need, give you honest advice, and show you the most cost-effective way to get sorted &mdash; plus any grant opportunities for software elements of your project. No pressure, no jargon, no surprises."
        primaryText="Book Your Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Bundles & Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
