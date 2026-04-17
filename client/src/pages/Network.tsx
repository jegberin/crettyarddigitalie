import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Building2, Wrench, HelpCircle, ArrowRight, PiggyBank, Quote, Server } from "lucide-react";
import serviceImg from "@assets/network-hero-sme-install.webp";
import iconNetworkDesign from "@assets/concept-network-design.webp";
import iconWifiMesh from "@assets/concept-wifi-mesh.webp";
import iconEndpointSecurity from "@assets/concept-endpoint-security.webp";
import iconProactiveMonitoring from "@assets/concept-proactive-monitoring.webp";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";

// FAQ content kept in sync with faqData["/network-wifi-security"] in App.tsx,
// which emits the FAQPage JSON-LD. Don't emit it from this component too.
const faqItems = [
  {
    q: "How do I know if I need a new network or just a fix?",
    a: "I'll start with a free review — looking at your current setup, your pain points, and what you need. Sometimes a tweak is all it takes; other times a proper redesign is the smarter long-term move. I'll give you an honest recommendation either way."
  },
  {
    q: "Can you work around our business hours?",
    a: "Absolutely. I regularly schedule installations and upgrades for evenings or weekends to minimise disruption. Your team shouldn't lose a day's work because of an IT upgrade."
  },
  {
    q: "Do you supply the hardware?",
    a: "Yes. I source and supply business-grade equipment from trusted brands like Ubiquiti UniFi, MikroTik, and TP-Link Omada. I'll recommend the best options for your space and budget — Wi-Fi 6, Wi-Fi 6E or Wi-Fi 7 where it makes sense, no unnecessary upselling."
  },
  {
    q: "How long does a typical installation take?",
    a: "A small office setup can often be done in a day. Larger premises with new Cat6a or Cat7 structured cabling (Cat8 for specialist short runs where needed) may take 2–3 days. I'll give you a clear timeline before any work begins."
  },
  {
    q: "What about ongoing support?",
    a: "I offer optional support packages for monitoring, maintenance, and troubleshooting. But even without a package, I'm always just a call or message away if something goes wrong."
  },
  {
    q: "Do you cover areas outside Laois and Carlow?",
    a: "I'm based on the Laois/Carlow border but regularly work across the Midlands and South-East including Kilkenny. Get in touch and we'll figure it out."
  },
];

export default function NetworkWifi() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#f3f4f5] py-20 md:py-28 dot-matrix-bg relative overflow-hidden">
        <GridLines cols={8} rows={5} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="eyebrow mb-5 inline-block">Network &amp; Security</span>
              <h1 className="display-sm mb-6" data-testid="text-page-title">
                Business Network &amp; Wi&#8209;Fi Solutions for Offices and Workshops
              </h1>
              <p className="text-xl text-foreground mb-8 leading-relaxed font-sans font-normal">
                Dropped connections, Wi&#8209;Fi dead spots, and unreliable internet cost your business time and money every single day. I design, install, and secure networks for small businesses across Laois, Carlow, Kilkenny, and the Irish Midlands using Ubiquiti UniFi, MikroTik, and TP-Link Omada equipment &mdash; Wi&#8209;Fi 6, Wi&#8209;Fi 6E and Wi&#8209;Fi 7; Cat6a or Cat7 structured cabling (Cat8 for specialist runs); and CRA-compliant firewalls. Real coverage, real security, no consumer-grade shortcuts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact#send-message">
                  <Button size="lg" className="px-10" data-testid="button-hero-cta">
                    Book a Free Network Review
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
                  alt="Tidy small-business network install \u2014 a wall-mounted rack with Cat6a patch panel, PoE switch and firewall, plus a ceiling-mounted Wi-Fi 6E access point in a professional Irish office environment"
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

      {/* Common Issues */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Common Issues</span>
            <h2 className="text-3xl mb-6">Solving Real-World Connectivity Problems</h2>
            <p className="text-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-normal">
              These are the everyday frustrations I help businesses eliminate — for good.
            </p>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {[
                "Dead spots in the office",
                "Dropped video calls",
                "Poor workshop coverage",
                "Weak warehouse Wi‑Fi",
                "Card terminals dropping off",
                "Unreliable remote access",
                "No firewall or network security"
              ].map((painPoint, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[#f3f4f5] px-4 py-3 rounded-xl text-center font-headline font-bold text-primary text-sm" data-testid={`text-pain-point-${i}`}>
                    {painPoint}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Who This Is For</span>
            <h2 className="text-3xl mb-6">Built for Businesses That Rely on Connectivity</h2>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              If your business depends on a reliable internet connection — and whose doesn't — this service is for you.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Building2, title: "Offices & Co-Working Spaces", desc: "Multiple users, video calls, cloud apps — your network needs to handle it all without slowing down." },
              { icon: Wrench, title: "Workshops & Warehouses", desc: "Card machines, security cameras, and devices that need coverage across large or awkward spaces." },
              { icon: Users, title: "Retail & Hospitality", desc: "Customer Wi‑Fi, point-of-sale systems, and staff devices all running smoothly on separate, secure networks." },
              { icon: Server, title: "Home Offices & Remote Workers", desc: "A professional-grade setup so your home office runs as reliably as any corporate network." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-who-for-${i}`}>
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">What's Included</span>
            <h2 className="text-3xl mb-6">Everything You Need for a Rock-Solid Network</h2>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              From initial survey to ongoing support, I handle every part of the process so you don't have to.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <img
                  src={iconNetworkDesign}
                  alt="Glass router connected to three glass nodes representing a network design hub-and-spoke topology"
                  width={1000}
                  height={1000}
                  className="w-20 h-20 mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl mb-4">Network Design & Planning</h3>
                <p className="text-foreground text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  I survey your premises and design a network that fits your space — proper cabling, switch placement, and access point positioning for full coverage.
                </p>
                <ul className="space-y-2">
                  {["Site survey & coverage mapping", "Structured Cat6a / Cat7 cabling plans (Cat8 for specialist runs)", "VLAN segmentation", "Capacity planning for growth"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <img
                  src={iconWifiMesh}
                  alt="Glass Wi-Fi access point with three concentric glass signal arcs representing mesh Wi-Fi coverage"
                  width={1000}
                  height={1000}
                  className="w-20 h-20 mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl mb-4">Wi&#8209;Fi Setup & Optimisation</h3>
                <p className="text-foreground text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Professional mesh Wi&#8209;Fi and access point placement to eliminate dead spots across offices, multi-story buildings, or tricky workshop layouts.
                </p>
                <ul className="space-y-2">
                  {["Mesh Wi‑Fi 6 / 6E / Wi‑Fi 7 access point deployment", "Channel optimisation", "Guest network separation", "Seamless roaming between zones"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <img
                  src={iconEndpointSecurity}
                  alt="Glass laptop with a padlock in its screen representing network security and firewalls"
                  width={1000}
                  height={1000}
                  className="w-20 h-20 mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl mb-4">Security & Firewalls</h3>
                <p className="text-foreground text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Business-grade firewalls and security to protect your data and your customers' information. I only source hardware that meets EU Cyber Resilience Act (CRA) standards &mdash; no cheap, uncertified consumer gear.
                </p>
                <ul className="space-y-2">
                  {["Business-grade firewall setup", "Intrusion detection", "Guest Wi‑Fi isolation", "Security policy configuration"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <img
                  src={iconProactiveMonitoring}
                  alt="Glass ECG heartbeat line over a glass eye representing network health checks and monitoring"
                  width={1000}
                  height={1000}
                  className="w-20 h-20 mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl mb-4">Health Checks & Remote Access</h3>
                <p className="text-foreground text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Ongoing network health checks plus secure VPN and remote access — so your team can work from anywhere without compromising security.
                </p>
                <ul className="space-y-2">
                  {["Network health audit & reporting", "VPN setup for remote access", "Performance troubleshooting", "Ongoing monitoring & support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Proof Block */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-foreground text-lg leading-relaxed font-sans italic mb-4">
                    "Joey sorted our Wi-Fi so it works in every room. The lads even get compliments from clients about the website now. Can't recommend him enough."
                  </p>
                  <p className="font-headline font-bold text-primary">Brian, Nurney Plant and Civil</p>
                  <p className="text-sm text-muted-foreground">Patchy Wi-Fi with dead spots &rarr; full business-grade coverage across entire premises including workshop</p>
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

      {/* Why This Saves You Money */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Why It Pays Off</span>
            <h2 className="text-3xl mb-6">Why Getting Your Network Right Saves You Money</h2>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              A poorly set up network doesn't just cause frustration — it costs you real money in lost productivity, missed sales, and emergency call-outs.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Fewer Emergency Call-Outs", desc: "A properly designed network rarely fails. You stop paying for reactive fixes and start enjoying reliable, predictable connectivity." },
              { title: "Less Downtime, More Revenue", desc: "Every hour your team spends waiting for pages to load or reconnecting to calls is money lost. A solid network keeps everyone productive." },
              { title: "Built to Grow With You", desc: "Adding new staff, devices, or locations is simple when your network is designed with growth in mind — no expensive rip-and-replace later." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-savings-${i}`}>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Guidance */}
      <section className="py-28 bg-white" id="pricing">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <PiggyBank className="text-accent mx-auto mb-4" size={32} />
            <span className="eyebrow mb-5 inline-block">Pricing Guidance</span>
            <h2 className="text-3xl mb-6">What Affects the Price</h2>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Every premises is different, so I quote after a proper survey. Here's what typically influences the cost:
            </p>
          </FadeIn>

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#f3f4f5] p-8 rounded-2xl">
                <h3 className="text-lg mb-4">Factors That Affect Cost</h3>
                <ul className="space-y-3">
                  {[
                    "Size and layout of the premises",
                    "Number of users and devices",
                    "Cabling requirements (new runs vs existing)",
                    "Equipment grade (home vs business-grade)",
                    "Security requirements (firewall, VPN, guest isolation)",
                    "Whether remote access or VPN is needed",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f3f4f5] p-8 rounded-2xl">
                <h3 className="text-lg mb-4">Typical Starting Points</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Wi‑Fi health check & optimisation", range: "From €150" },
                    { label: "Small office network setup", range: "From €400" },
                    { label: "Full network design & install", range: "From €800" },
                    { label: "Firewall & security configuration", range: "From €300" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-sm border-b border-white pb-3 last:border-0 last:pb-0" data-testid={`text-pricing-${i}`}>
                      <span className="text-foreground font-sans">{item.label}</span>
                      <span className="font-headline font-bold text-primary">{item.range}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground mt-4 font-sans">
                  All prices are indicative. I'll provide a clear, fixed quote after an initial chat.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section — native details/summary for no-JS compatibility */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <HelpCircle className="text-accent mx-auto mb-4" size={32} />
            <span className="eyebrow mb-5 inline-block">FAQ</span>
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-3" data-testid="faq-list">
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
                  data-testid={`faq-item-${i}`}
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-[15px] font-headline font-bold text-primary list-none select-none">
                    <span>{faq.q}</span>
                    <svg
                      className="w-4 h-4 text-accent flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-[15px] text-foreground leading-relaxed font-sans">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* By Region callout */}
      <section className="py-16 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-accent/5 border border-accent/20 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-5 justify-between">
              <div>
                <h2 className="text-xl mb-2">Based in Laois or Carlow?</h2>
                <p className="text-foreground text-[15px] font-sans">
                  See the dedicated Laois &amp; Carlow network page for on-site survey details, local towns covered, and case studies like Nurney Plant and Civil.
                </p>
              </div>
              <Link href="/network-wifi-laois-carlow">
                <Button size="lg" variant="outline" className="shrink-0">
                  Laois &amp; Carlow network details &rarr;
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl mb-4">Related Services</h2>
            <p className="text-foreground leading-relaxed font-sans font-normal">
              Most businesses need more than just a network. Here's how else I can help.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <Link href="/managed-it-support">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group h-full">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Managed IT Support</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans mb-3">
                    Proactive monitoring, updates, security, and compliance for a fixed monthly fee.
                  </p>
                  <span className="text-accent text-sm font-headline font-bold inline-flex items-center gap-1">Learn more <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/managed-hardware">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group h-full">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Managed Hardware</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans mb-3">
                    Turnkey business PCs and on-site servers that plug straight into your new network.
                  </p>
                  <span className="text-accent text-sm font-headline font-bold inline-flex items-center gap-1">Learn more <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/microsoft-365">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group h-full">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Microsoft 365 & Teams Phone</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans mb-3">
                    Professional email, cloud storage, and a modern business phone system.
                  </p>
                  <span className="text-accent text-sm font-headline font-bold inline-flex items-center gap-1">Learn more <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/cybersecurity">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group h-full">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Cybersecurity & Compliance</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans mb-3">
                    NIS2, GDPR, and practical threat protection for your business.
                  </p>
                  <span className="text-accent text-sm font-headline font-bold inline-flex items-center gap-1">Learn more <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Fix Your Network for Good"
        subtext="Book a free, no-obligation network review. I'll assess your setup, identify the problems, and give you a clear plan with a fixed price."
        primaryText="Book a Free Network Review"
        primaryHref="/contact#send-message"
        secondaryText="See Bundles &amp; Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
