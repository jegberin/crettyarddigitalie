import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench, Rocket, HeartPulse, CheckCircle, ArrowRight, Quote, Calendar, FileText, MonitorSmartphone, Cloud, Shield } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">How It Works</span>
            <h1 className="display-heading text-white mb-6 leading-tight">
              What Actually Happens When You Work With Me
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              You've seen the services and the pricing. Now here's exactly what the experience looks like &mdash; from first conversation to launch to month twelve and beyond. No surprises, no hidden steps, and no jargon.
            </p>
            <Link href="/contact#send-message">
              <Button size="lg">Book a Free Consultation</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Before We Start */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Before We Start</span>
            <h2 className="text-3xl">From First Chat to Go-Ahead</h2>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {[
              {
                icon: MessageCircle,
                num: "01",
                title: "The Free Consultation (15\u201320 minutes)",
                desc: "We have a relaxed call \u2014 phone, video, or in person. I ask about your business, what\u2019s working, what\u2019s frustrating, and what you want to achieve. I\u2019ll flag any government grants you might be eligible for and give you honest advice on what you need (and what you don\u2019t). If I\u2019m not the right fit, I\u2019ll tell you.",
              },
              {
                icon: FileText,
                num: "02",
                title: "The Proposal (within 2\u20133 business days)",
                desc: "You receive a clear, written document covering exactly what I\u2019ll deliver, the fixed price, the timeline, and any grant opportunities. No surprises, no fine print. You review it in your own time \u2014 there\u2019s no follow-up pressure.",
              },
              {
                icon: Calendar,
                num: "03",
                title: "You Say Yes (when you\u2019re ready)",
                desc: "I send a simple agreement confirming the scope, timeline, and price. Once signed, we\u2019re off. There\u2019s no rush \u2014 you decide in your own time.",
              },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <step.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-headline font-extrabold text-primary/10">{step.num}</span>
                      <h3 className="text-lg">{step.title}</h3>
                    </div>
                    <p className="text-foreground text-[15px] leading-relaxed font-sans">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* During the Build */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">During the Build</span>
            <h2 className="text-3xl">What Month One Looks Like</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Website timeline */}
            <FadeIn>
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <MonitorSmartphone className="text-accent" size={24} />
                  <h3 className="text-lg">If You're Getting a Website</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { week: "Week 1", title: "Discovery & Planning", desc: "I ask about your customers, services, and what makes you different. I plan the site structure and begin writing copy." },
                    { week: "Week 2", title: "Design & First Draft", desc: "You see the first version \u2014 typically the homepage and key pages. You give feedback. I refine." },
                    { week: "Week 3", title: "Full Build", desc: "All pages designed and built. Forms, SEO, maps, accessibility, GDPR, and cookie consent configured." },
                    { week: "Week 4", title: "Launch", desc: "The site goes live. I walk you through everything. Your care plan starts immediately." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-16 shrink-0">
                        <span className="text-xs font-headline font-bold text-accent bg-accent/10 px-2 py-1 rounded">{item.week}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-headline font-bold mb-1">{item.title}</h4>
                        <p className="text-foreground text-[13px] font-sans">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* M365 timeline */}
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="text-accent" size={24} />
                  <h3 className="text-lg">If You're Getting Microsoft 365</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { day: "Day 1\u20132", title: "Assessment & Planning", desc: "I review your current email and files, recommend the right M365 plan, and plan the migration." },
                    { day: "Day 3\u20135", title: "Setup & Configuration", desc: "M365 environment created \u2014 email, Teams, OneDrive/SharePoint, security (MFA, policies), and Teams Phone if included." },
                    { day: "Day 5\u20137", title: "Migration", desc: "Full email migration (often overnight). I verify everything transferred correctly." },
                    { day: "Day 7\u201310", title: "Training & Handover", desc: "Training session for your team. Quick-reference guide provided. I\u2019m available for any questions." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-16 shrink-0">
                        <span className="text-xs font-headline font-bold text-accent bg-accent/10 px-2 py-1 rounded">{item.day}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-headline font-bold mb-1">{item.title}</h4>
                        <p className="text-foreground text-[13px] font-sans">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <Shield className="text-accent mx-auto mb-3" size={24} />
              <h3 className="text-base font-headline font-bold mb-2">Getting a Digital Foundation Bundle?</h3>
              <p className="text-foreground text-sm font-sans max-w-xl mx-auto">
                All of the above happens in a coordinated sequence \u2014 website, email, phone, security, and network configured together as one integrated system. That\u2019s the whole point.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* After Launch */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">After Launch</span>
            <h2 className="text-3xl">I Don't Disappear. Here's What Ongoing Looks Like.</h2>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl">
                <h3 className="text-lg mb-3">Your Website Care Plan (active from day one)</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Hosting, backups, and security running automatically",
                    "Uptime and performance monitored",
                    "Content changes made within a business day of request",
                    "Problems fixed \u2014 often before you notice",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[14px] font-sans">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl">
                <h3 className="text-lg mb-3">Your Managed IT Plan (if applicable)</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Systems monitored proactively",
                    "M365 user management handled",
                    "Security patches applied automatically",
                    "Direct access to me \u2014 not a helpdesk",
                    "Quarterly or monthly reviews depending on plan",
                    "Compliance posture kept current",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[14px] font-sans">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl">
                <h3 className="text-lg mb-3">How Support Actually Works</h3>
                <div className="space-y-4 text-foreground text-[15px] font-sans leading-relaxed">
                  <p>
                    <strong>Need a content change?</strong> Send me an email or WhatsApp. I make the change &mdash; usually within a business day &mdash; and confirm when it&rsquo;s done. No ticket, no portal.
                  </p>
                  <p>
                    <strong>Something broken?</strong> Call me. I already know your setup because I built it. Fast, informed support without repeating yourself to a stranger.
                  </p>
                  <p>
                    <strong>Proactive monitoring?</strong> I run tools that check your systems continuously. If something has an issue at 2am, I get an alert. Most months, you won&rsquo;t hear from me about technical issues &mdash; because I&rsquo;ve already dealt with them.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl">What Clients Experience</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl shadow-sm">
                <Quote className="text-accent/30 mb-3" size={24} />
                <p className="text-foreground text-[15px] font-sans italic mb-4">
                  "The thing I appreciate most is that I don't have to think about any of it. Joey handles the website, the email, the Wi-Fi \u2014 and when I need something changed, I send one message and it's done."
                </p>
                <p className="font-headline font-bold text-sm">Brian, Nurney Plant and Civil</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl shadow-sm">
                <Quote className="text-accent/30 mb-3" size={24} />
                <p className="text-foreground text-[15px] font-sans italic mb-4">
                  "I was nervous about the whole process because I'm not technical at all. Joey explained everything in plain English and made it completely painless."
                </p>
                <p className="font-headline font-bold text-sm">Darren, Go Green Steam Clean</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="The First Step Is a Free Conversation"
        subtext="Book a free consultation and I'll walk you through exactly what the process looks like for your specific business. No obligation, no jargon."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Services &amp; Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
