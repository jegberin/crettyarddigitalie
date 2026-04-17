import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { MessageCircle, Clock, FileText, CheckCircle, MapPin, Calculator, Phone, Mail } from "lucide-react";

// Google Analytics / Ads gtag is injected globally via index.html.
// Narrow the window shape here so call sites are type-safe.
declare global {
  interface Window {
    gtag?: (command: string, targetOrEvent: string, params?: Record<string, unknown>) => void;
  }
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-red-500 text-xs mt-1 font-sans" role="alert">
      {message}
    </p>
  );
}

export default function Contact() {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<"idle" | "success" | "error">("idle");

  function validate(field: string, value: string) {
    if (field === "name" && !value.trim()) return "Your name is required.";
    if (field === "email") {
      if (!value.trim()) return "Your email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address.";
    }
    if (field === "message" && !value.trim()) return "Please tell me a bit about what you need.";
    return undefined;
  }

  const errors: Record<string, string | undefined> = {
    name: validate("name", values.name),
    email: validate("email", values.email),
    message: validate("message", values.message),
  };

  const isValid = !errors.name && !errors.email && !errors.message;

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleChange(field: string, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitted("success");
        window.gtag?.("event", "conversion", { send_to: "AW-18044040603/aBUrCJPXsZAcEJvriJxD" });
      } else {
        setSubmitted("error");
      }
    } catch {
      setSubmitted("error");
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#f3f4f5] py-24 md:py-32 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block" data-testid="text-contact-eyebrow">Get in Touch</span>
            <h1 className="display-sm mb-6" data-testid="text-contact-heading">
              No Jargon. No Pressure. Just a Friendly Chat About Your Business.
            </h1>
            <p className="text-xl text-foreground leading-relaxed max-w-2xl mx-auto font-sans font-normal" data-testid="text-contact-intro">
              Whether you have a clear plan or just a rough question, get in touch. I'll get back to you within one business day with honest, plain-English advice. Every conversation starts with listening &mdash; not selling.
            </p>
            <p className="mt-6 text-sm text-foreground/80 font-headline font-bold tracking-wide" data-testid="text-trust-line">
              Fast response &middot; Local support &middot; Plain-English advice &middot; Grant and compliance guidance included
            </p>
            <p className="mt-3 text-sm text-foreground/80 font-sans flex items-center justify-center gap-1.5" data-testid="text-service-area-reminder">
              <MapPin size={14} className="text-accent" />
              Serving Laois, Carlow, Kilkenny, Kildare, Offaly, Tipperary &amp; the wider Midlands
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl mb-4" data-testid="text-what-happens-heading">What Happens After You Get in Touch</h2>
              <p className="text-foreground max-w-xl mx-auto font-sans">No surprises — here's exactly what to expect.</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-8">
            <StaggerItem>
              <div className="text-center p-6" data-testid="card-step-1">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div className="text-sm font-headline font-bold text-accent mb-2">Step 1</div>
                <h3 className="text-lg mb-2">I Respond &mdash; Fast</h3>
                <p className="text-foreground text-sm leading-relaxed font-sans">Enquiries before 3pm get a same-day response. All others within one business day. You hear from me personally &mdash; not a chatbot.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6" data-testid="card-step-2">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="text-sm font-headline font-bold text-accent mb-2">Step 2</div>
                <h3 className="text-lg mb-2">We Have a Quick Chat</h3>
                <p className="text-foreground text-sm leading-relaxed font-sans">A relaxed phone call or video chat to understand your business and what you need. No tech talk.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6" data-testid="card-step-3">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="text-sm font-headline font-bold text-accent mb-2">Step 3</div>
                <h3 className="text-lg mb-2">I Send You a Clear Proposal</h3>
                <p className="text-foreground text-sm leading-relaxed font-sans">A straightforward quote with no hidden fees. If there's a government grant that could help, I'll include that too. Take your time &mdash; no pressure.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <FadeIn>
            <div className="text-center">
              <p className="text-foreground/80 text-sm italic font-sans">No obligation. No hard sell. If we're not the right fit, I'll tell you honestly.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4" data-testid="text-who-should-heading">Who Should Get in Touch</h2>
              <p className="text-foreground max-w-xl mx-auto font-sans">If any of these sound like you, I'd love to hear from you.</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "You need a website but don't know where to start",
              "Your current site looks outdated or isn't bringing in enquiries",
              "You want professional email, Teams, or a business phone system",
              "Your office Wi-Fi or network keeps causing problems",
              "You need help with cybersecurity, GDPR, or NIS2 compliance",
              "You're interested in a government grant for your website or digital tools",
              "You want to explore AI tools like Microsoft Copilot",
              "You just want honest advice — even if you're not ready to buy yet",
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl" data-testid={`card-who-${index}`}>
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed font-sans">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-12 bg-accent/5 border-b border-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-accent/10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Calculator className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-headline font-bold text-primary mb-1">Looking for a website quote?</p>
                <p className="text-sm text-foreground font-sans">Use our 2-minute quote calculator to get a guide price for your new website — no contact needed until you're ready.</p>
              </div>
              <Link href="/get-a-quote">
                <Button variant="outline" className="shrink-0 whitespace-nowrap" data-testid="button-contact-get-quote">
                  Get a Quote →
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">

            <FadeIn>
              <h2 className="text-3xl mb-6" data-testid="text-service-area-heading">Service Area</h2>
              <p className="text-foreground mb-8 text-[15px] leading-relaxed font-sans font-normal">
                Based near Crettyard on the Laois–Carlow border. I primarily serve businesses in Laois, Carlow, Kilkenny, Kildare, Offaly, Tipperary, and nearby counties, but I am able to work remotely across Ireland for cloud and web projects.
              </p>

              <div className="bg-[#f3f4f5] aspect-video rounded-2xl overflow-hidden shadow-sm" data-testid="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830373.6816004711!2d-7.779090980853563!3d52.72825347087501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d836b5390e36855%3A0xace93d928dcf0243!2sCrettyard%20Digital!5e1!3m2!1sen!2sie!4v1774543257703!5m2!1sen!2sie"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map - Crettyard, Co. Laois"
                ></iframe>
              </div>

              <div className="mt-8 p-5 bg-[#f3f4f5] rounded-2xl">
                <p className="text-sm font-headline font-bold mb-3">Prefer a direct channel?</p>
                <ul className="space-y-2.5 text-sm font-sans">
                  <li className="flex items-start gap-2">
                    <Mail size={16} className="text-accent shrink-0 mt-0.5" />
                    <a href="mailto:info@crettyarddigital.ie" className="text-accent hover:underline" data-testid="link-email">info@crettyarddigital.ie</a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone size={16} className="text-accent shrink-0 mt-0.5" />
                    <a href="tel:+353879700701" className="text-accent hover:underline" data-testid="link-phone">+353 87 970 0701</a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageCircle size={16} className="text-accent shrink-0 mt-0.5" />
                    <a
                      href="https://wa.me/353879700701?text=Hi%2C%20I%20found%20your%20website%20and%20I%27d%20like%20to%20enquire%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                      data-testid="link-whatsapp"
                    >
                      Message me on WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div id="send-message" className="bg-white p-8 border border-gray-200/60 rounded-2xl shadow-sm">
                <h3 className="text-xl mb-2" data-testid="text-form-heading">Send a Message</h3>
                <p className="text-foreground/80 text-sm mb-1 font-sans">It only takes a minute. I'll get back to you within one business day.</p>
                <p className="text-foreground/70 text-xs mb-6 font-sans">No obligation — if I'm not the right fit, I'll tell you honestly.</p>

                {/* Status live region */}
                <div role="alert" aria-live="polite" aria-atomic="true" data-testid="alert-form-status">
                  {submitted === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-sans">
                      <strong>Message sent!</strong> I'll get back to you within one business day. A confirmation has been sent to your email address.
                    </div>
                  )}
                  {submitted === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm font-sans">
                      <strong>Something went wrong.</strong> Please try again or email me directly at <a href="mailto:info@crettyarddigital.ie" className="underline">info@crettyarddigital.ie</a>.
                    </div>
                  )}
                </div>

                {submitted !== "success" && (
                  <form
                    className="space-y-5"
                    data-testid="form-contact"
                    onSubmit={handleSubmit}
                  >

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <Label htmlFor="name" className="text-sm font-headline font-bold text-foreground uppercase tracking-wide">
                          Name <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          value={values.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent h-10 bg-transparent px-0 shadow-none"
                          data-testid="input-name"
                          aria-required="true"
                          aria-describedby={touched.name && errors.name ? "error-name" : undefined}
                        />
                        {touched.name && <FieldError message={errors.name} />}
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email" className="text-sm font-headline font-bold text-foreground uppercase tracking-wide">
                          Email <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={values.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent h-10 bg-transparent px-0 shadow-none"
                          data-testid="input-email"
                          aria-required="true"
                        />
                        {touched.email && <FieldError message={errors.email} />}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="business-name" className="text-sm font-headline font-bold text-foreground uppercase tracking-wide">Business Name</Label>
                      <Input
                        id="business-name"
                        name="business_name"
                        placeholder="Your business name (optional)"
                        value={values.businessName}
                        onChange={(e) => handleChange("businessName", e.target.value)}
                        className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent h-10 bg-transparent px-0 shadow-none"
                        data-testid="input-business-name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <Label htmlFor="phone" className="text-sm font-headline font-bold text-foreground uppercase tracking-wide">Phone (optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="08..."
                          value={values.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent h-10 bg-transparent px-0 shadow-none"
                          data-testid="input-phone"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="service" className="text-sm font-headline font-bold text-foreground uppercase tracking-wide">What can I help with?</Label>
                        <select
                          id="service"
                          name="service"
                          className="flex h-10 w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-accent font-sans transition-colors"
                          data-testid="select-service"
                          value={values.service}
                          onChange={(e) => handleChange("service", e.target.value)}
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="new-website">New website</option>
                          <option value="website-redesign">Website redesign</option>
                          <option value="microsoft-365">Microsoft 365 &amp; Teams Phone</option>
                          <option value="managed-it">Managed IT Support</option>
                          <option value="network-wifi">Network &amp; Wi‑Fi</option>
                          <option value="cybersecurity">Cybersecurity &amp; Compliance</option>
                          <option value="ai-copilot">AI &amp; Microsoft Copilot</option>
                          <option value="digital-bundle">Digital Foundation Bundle</option>
                          <option value="grant-advice">Government Grant Advice</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="message" className="text-sm font-headline font-bold text-foreground uppercase tracking-wide">
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me a bit about your business and what you need help with..."
                        value={values.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent min-h-[120px] bg-transparent px-0 shadow-none resize-none font-sans"
                        data-testid="input-message"
                        aria-required="true"
                      />
                      {touched.message && <FieldError message={errors.message} />}
                    </div>

                    <Button type="submit" className="w-full" data-testid="button-submit">
                      Send Message
                    </Button>
                    <p className="text-sm text-foreground/80 text-center font-sans">No spam. Your details are only used to reply to your enquiry. See the <Link href="/privacy-policy" className="text-accent hover:underline">privacy policy</Link> for how your data is handled.</p>
                  </form>
                )}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
