import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Mail, FileText, Presentation, MessageSquare, Zap, CheckCircle, ArrowRight, Clock, Users } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AIReadiness() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">AI Readiness &amp; Microsoft Copilot</span>
            <h1 className="display-heading text-white mb-6 leading-tight">
              AI Isn't Hype. It's a Practical Tool That Saves Hours Every Week.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              You've heard about AI. You've seen the headlines. But you're not sure what it can actually do for a business like yours &mdash; or where to start. I help small businesses cut through the noise, understand what AI can realistically do, and implement tools like Microsoft Copilot that deliver genuine productivity gains. No buzzwords, no science fiction &mdash; just practical technology that saves you time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book an AI Consultation</Button>
              </Link>
              <a href="#what-it-does">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  See What Copilot Does &darr;
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What AI Actually Does */}
      <section id="what-it-does" className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">In Practice</span>
            <h2 className="text-3xl md:text-4xl mb-4">Forget the Hype. Here's What AI Does for a Small Business.</h2>
            <p className="text-foreground max-w-2xl mx-auto font-sans font-normal">
              AI in a small business isn't about robots or replacing people. It's about automating the time-consuming admin tasks that eat into your working day.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Draft Emails in Seconds", desc: "Tell Copilot what you want to say. It writes a professional first draft. You review, tweak, and send \u2014 saving 15\u201330 minutes per email-heavy session." },
              { icon: FileText, title: "Summarise Documents", desc: "Instead of reading a 20-page report, Copilot gives you a concise summary with key points and action items." },
              { icon: Presentation, title: "Create Presentations", desc: "Generate a first-draft PowerPoint from a Word document, an email thread, or a simple brief. You refine instead of building from scratch." },
              { icon: MessageSquare, title: "Answer Business Questions", desc: "\u201CWhat were our top services last quarter?\u201D \u201CSummarise the last three emails from this client.\u201D Copilot works with your Microsoft 365 data to give instant answers." },
              { icon: Zap, title: "Automate Repetitive Admin", desc: "Formatting spreadsheets, drafting agendas, categorising email \u2014 tasks that take 20 minutes now take 20 seconds." },
              { icon: Clock, title: "Get Real Hours Back", desc: "This isn\u2019t theoretical. Businesses using Copilot consistently report getting 5\u201310 hours per week back from admin tasks." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover h-full">
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What I Offer</span>
            <h2 className="text-3xl">AI Services for Small Businesses</h2>
          </FadeIn>

          <StaggerContainer className="grid gap-8">
            {[
              {
                title: "AI Readiness Assessment",
                price: "From \u20ac150",
                desc: "A practical, jargon-free consultation where I look at how your business works day-to-day and identify where AI tools could save you the most time. You get a clear report showing what\u2019s worth implementing now, what can wait, and what the realistic costs and benefits are.",
                note: "This isn\u2019t a sales pitch for Microsoft \u2014 it\u2019s an honest assessment. If AI isn\u2019t the right investment for your business today, I\u2019ll tell you.",
              },
              {
                title: "Microsoft Copilot Setup & Training",
                price: "From \u20ac250",
                desc: "If your business is already on Microsoft 365, adding Copilot is straightforward \u2014 but it needs correct configuration and your team needs to know how to get the best out of it.",
                items: [
                  "Copilot licence setup and configuration within your Microsoft 365 environment",
                  "Data and security review (Copilot accesses your business data \u2014 I make sure permissions are correct)",
                  "Hands-on training session for your team (practical, task-based \u2014 not a lecture)",
                  "Quick reference guide for the most useful everyday commands",
                  "Follow-up support to answer questions once your team starts using it",
                ],
              },
              {
                title: "AI Strategy Consultation",
                price: "From \u20ac400",
                desc: "For businesses that want a deeper understanding of how AI could reshape their operations over the next 12\u201324 months. I assess your workflows, identify automation opportunities, and create a practical roadmap. Strategic advantage, not technology for its own sake.",
                note: null,
              },
            ].map((service, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <h3 className="text-xl">{service.title}</h3>
                    <span className="text-sm font-headline font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{service.price}</span>
                  </div>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">{service.desc}</p>
                  {service.items && (
                    <ul className="space-y-2.5 mb-4">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-[14px] font-sans text-foreground">
                          <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.note && (
                    <p className="text-sm text-muted-foreground font-sans italic">{service.note}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Is This for You?</span>
            <h2 className="text-3xl">Who Benefits Most from AI</h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: "Drowning in Admin", desc: "If your team spends hours on emails, reports, presentations, and data entry \u2014 AI can give you those hours back." },
              { icon: BrainCircuit, title: "Microsoft 365 Users", desc: "If you\u2019re already paying for M365, Copilot is a natural next step. I make sure you get real return on the investment." },
              { icon: Users, title: "Curious but Cautious", desc: "You\u2019ve seen the headlines, you think there might be something in it, but you don\u2019t want to waste money on hype. My assessment gives honest answers." },
              { icon: Zap, title: "Want to Stay Ahead", desc: "Your competitors will adopt AI. Businesses that move first gain a real advantage in efficiency and responsiveness." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover">
                  <item.icon className="text-accent mb-3" size={24} />
                  <h3 className="text-base font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl">Answered in Plain English</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "ai-1", q: "Do I need Microsoft 365 to use AI?", a: "Not necessarily, but Microsoft Copilot is the most practical and well-integrated AI tool for small businesses already using M365. If you\u2019re not on Microsoft 365, my AI Readiness Assessment can recommend other options." },
                { id: "ai-2", q: "Is my business data safe with Copilot?", a: "Yes \u2014 when configured correctly. Copilot accesses your existing Microsoft 365 data, so proper permissions and security settings are essential. That\u2019s why professional setup matters. I ensure Copilot only sees what it should, and your data never leaves your Microsoft environment." },
                { id: "ai-3", q: "How much does Microsoft Copilot cost?", a: "Microsoft Copilot for Microsoft 365 is currently priced at around \u20ac28.10 per user per month (on top of your M365 subscription). I\u2019ll confirm exact current pricing during our consultation." },
                { id: "ai-4", q: "Is this actually useful for a small business?", a: "Genuinely useful. The businesses that benefit most aren\u2019t necessarily the biggest \u2014 they\u2019re the ones where a small team handles a lot of admin. If you spend hours on email, proposals, and paperwork, Copilot gives measurable time back every week." },
                { id: "ai-5", q: "Will AI replace my staff?", a: "No. Copilot is a productivity tool \u2014 it helps your team work faster and smarter, not replaces them. Think of it as giving everyone an assistant for the boring parts of their job." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6 bg-white">
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Curious About AI?"
        heading="Find Out What AI Can Realistically Do for Your Business"
        subtext="Book an AI Readiness Consultation. I'll look at how your business works, where time is being wasted, and whether tools like Copilot are worth the investment. Honest advice, no hype."
        primaryText="Book an AI Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Managed IT Plans"
        secondaryHref="/managed-it-support"
      />
    </div>
  );
}
