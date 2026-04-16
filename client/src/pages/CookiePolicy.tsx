import { Link } from "wouter";
import { FadeIn } from "@/components/FadeIn";

const tocItems = [
  { id: "section-1", label: "1. Who we are" },
  { id: "section-2", label: "2. What are cookies?" },
  { id: "section-3", label: "3. Types of cookies we may use" },
  { id: "section-4", label: "4. Third-party cookies" },
  { id: "section-5", label: "5. Why we use cookies" },
  { id: "section-6", label: "6. Your choices" },
  { id: "section-7", label: "7. Consent" },
  { id: "section-8", label: "8. Changes to this policy" },
  { id: "section-9", label: "9. Contact" },
];

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#f3f4f5] py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Legal</span>
            <h1 className="text-4xl md:text-5xl leading-[1.1] mb-6">Cookie Policy</h1>
            <p className="text-foreground font-sans">Effective date: 10/03/2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Table of Contents */}
          <nav aria-label="Cookie Policy table of contents" className="mb-12 p-6 bg-[#f3f4f5] rounded-2xl" data-testid="section-toc">
            <h2 className="text-base font-headline font-bold mb-4 text-foreground">Contents</h2>
            <ol className="space-y-1.5">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-accent hover:underline font-sans"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none text-foreground space-y-10" data-testid="text-cookie-policy">
            <p>
              This Cookie Policy explains how Crettyard Digital ("we", "us", "our") uses cookies and similar technologies on our website.
            </p>
            <p>
              By continuing to use our website, you may consent to the use of cookies where permitted by law. Where required, we will request your consent before placing non-essential cookies on your device.
            </p>

            <div id="section-1">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Who we are</h2>
              <ul className="list-none space-y-1 pl-0">
                <li><strong>Business name:</strong> Crettyard Digital</li>
                <li><strong>Location:</strong> Crettyard, Co. Laois, Ireland</li>
                <li><strong>Email:</strong> <a href="mailto:info@crettyarddigital.ie" className="text-accent hover:underline">info@crettyarddigital.ie</a></li>
                <li><strong>Phone:</strong> <a href="tel:+353879700701" className="text-accent hover:underline">+353 87 970 0701</a></li>
              </ul>
            </div>

            <div id="section-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. What are cookies?</h2>
              <p>Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember preferences, improve performance, and collect information about how visitors use the site.</p>
              <p className="mt-2">Some cookies are set by us, and others may be set by third-party services that appear on or support the website.</p>
            </div>

            <div id="section-3">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of cookies we may use</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">A. Strictly necessary cookies</h3>
              <p>These cookies are essential for the website to function properly. They may be used for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>basic site operation</li>
                <li>security</li>
                <li>spam prevention</li>
                <li>page navigation</li>
                <li>form handling</li>
              </ul>
              <p className="mt-2">These cookies do not usually require consent where they are strictly necessary.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">B. Analytics cookies</h3>
              <p>These cookies help us understand how visitors use the website so we can improve content, layout, and performance.</p>
              <p className="mt-2">These may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google Analytics</li>
              </ul>
              <p className="mt-2">Analytics cookies may collect information such as:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>pages visited</li>
                <li>time spent on pages</li>
                <li>device/browser type</li>
                <li>approximate location</li>
                <li>referring website</li>
                <li>general usage behaviour</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">C. Advertising and marketing cookies</h3>
              <p>These cookies may be used to measure ad performance, build audiences, or support remarketing.</p>
              <p className="mt-2">These may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Meta Pixel</li>
              </ul>
              <p className="mt-2">These cookies may track browsing behaviour across websites or platforms.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">D. Functional cookies</h3>
              <p>These cookies help enable enhanced website features and third-party services.</p>
              <p className="mt-2">These may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>embedded maps</li>
                <li>YouTube videos</li>
                <li>calendar tools</li>
                <li>chat widgets</li>
              </ul>
              <p className="mt-2">If these services are enabled, they may place cookies or similar technologies on your device.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">E. Security and anti-spam cookies</h3>
              <p>We may use tools such as Google reCAPTCHA or similar security services to protect forms and prevent spam or abuse.</p>
            </div>

            <div id="section-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-party cookies</h2>
              <p>Some cookies on our website may be placed by third-party providers. We do not control these cookies directly. Their use is governed by the privacy or cookie policies of those third parties.</p>
              <p className="mt-2">Third-party services used on our website may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google Analytics</li>
                <li>Meta Pixel</li>
                <li>Google reCAPTCHA</li>
                <li>embedded maps</li>
                <li>YouTube</li>
                <li>calendar integrations</li>
                <li>chat or contact tools, where used</li>
              </ul>
            </div>

            <div id="section-5">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Why we use cookies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>make the website function properly</li>
                <li>improve site performance and usability</li>
                <li>understand how visitors use the website</li>
                <li>measure marketing effectiveness</li>
                <li>provide embedded features and content</li>
                <li>help protect forms and the website from spam and abuse</li>
              </ul>
            </div>

            <div id="section-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your choices</h2>
              <p>You can control or delete cookies through your browser settings. You may also be able to manage your preferences through any cookie banner or settings tool available on the website.</p>
              <p className="mt-2">Please note that disabling some cookies may affect how the website functions.</p>
            </div>

            <div id="section-7">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Consent</h2>
              <p>Where required by law, we will ask for your consent before using non-essential cookies such as analytics, advertising, or certain third-party functional cookies.</p>
              <p className="mt-2">You can withdraw or change your cookie preferences at any time, subject to the functionality available on the website.</p>
            </div>

            <div id="section-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to this Cookie Policy</h2>
              <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
            </div>

            <div id="section-9">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
              <p>If you have any questions about this Cookie Policy, please contact:</p>
              <div className="mt-4 space-y-1">
                <p><strong>Crettyard Digital</strong></p>
                <p>Crettyard, Co. Laois, Ireland</p>
                <p>Email: <a href="mailto:info@crettyarddigital.ie" className="text-accent hover:underline">info@crettyarddigital.ie</a></p>
                <p>Phone: <a href="tel:+353879700701" className="text-accent hover:underline">+353 87 970 0701</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
