import { FadeIn } from "@/components/FadeIn";

const tocItems = [
  { id: "section-1", label: "1. Who we are" },
  { id: "section-2", label: "2. What personal data we collect" },
  { id: "section-3", label: "3. How we collect your data" },
  { id: "section-4", label: "4. How we use your data" },
  { id: "section-5", label: "5. Legal basis for processing" },
  { id: "section-6", label: "6. Cookies and similar technologies" },
  { id: "section-7", label: "7. Sharing your data" },
  { id: "section-8", label: "8. International transfers" },
  { id: "section-9", label: "9. Data retention" },
  { id: "section-10", label: "10. Your rights" },
  { id: "section-11", label: "11. Third-party websites" },
  { id: "section-12", label: "12. Security" },
  { id: "section-13", label: "13. Changes to this policy" },
  { id: "section-14", label: "14. Contact us" },
];

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#f3f4f5] py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Legal</span>
            <h1 className="display-sm mb-6">Privacy Policy</h1>
            <p className="text-foreground font-sans">Effective date: 10/03/2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Table of Contents */}
          <nav aria-label="Privacy Policy table of contents" className="mb-12 p-6 bg-[#f3f4f5] rounded-2xl" data-testid="section-toc">
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

          <div className="prose prose-lg max-w-none text-foreground space-y-10" data-testid="text-privacy-policy">
            <p>
              Crettyard Digital ("we", "us", "our") respects your privacy and is committed to protecting your personal data.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect personal data when you visit our website or contact us.
            </p>

            <div id="section-1">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Who we are</h2>
              <ul className="list-none space-y-1 pl-0">
                <li><strong>Business name:</strong> Crettyard Digital</li>
                <li><strong>Business type:</strong> Sole trader</li>
                <li><strong>CRO No.:</strong> 783799</li>
                <li><strong>Location:</strong> Crettyard, Co. Laois, Ireland</li>
                <li><strong>Email:</strong> <a href="mailto:info@crettyarddigital.ie" className="text-accent hover:underline">info@crettyarddigital.ie</a></li>
                <li><strong>Phone:</strong> <a href="tel:+353879700701" className="text-accent hover:underline">+353 87 970 0701</a></li>
              </ul>
              <p className="mt-4">
                For the purposes of data protection law, Crettyard Digital is the data controller of the personal data described in this policy.
              </p>
            </div>

            <div id="section-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. What personal data we collect</h2>
              <p>We may collect and process the following personal data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name</li>
                <li>Any information you include in a contact form or message</li>
                <li>Subscription and billing information (handled via Stripe — we do not store your card details directly)</li>
                <li>Technical and usage data collected through cookies, analytics, embedded services, and similar technologies</li>
              </ul>
            </div>

            <div id="section-3">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How we collect your data</h2>
              <p>We collect data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>When you complete and submit a contact form</li>
                <li>When you contact us by phone or email</li>
                <li>Automatically through cookies and similar technologies</li>
                <li>Through third-party tools and embedded content used on the website</li>
              </ul>
            </div>

            <div id="section-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. How we use your data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to enquiries</li>
                <li>Provide information about our services</li>
                <li>Communicate with potential clients</li>
                <li>Improve the website and user experience</li>
                <li>Monitor website performance and visitor behaviour</li>
                <li>Protect the website from spam or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div id="section-5">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Legal basis for processing</h2>
              <p>We process your personal data on one or more of the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your consent</li>
                <li>To take steps at your request before entering into a contract</li>
                <li>Our legitimate interests in operating, improving, and protecting our business and website</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </div>

            <div id="section-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and similar technologies</h2>
              <p>Our website may use cookies and similar technologies, including for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Website functionality</li>
                <li>Analytics</li>
                <li>Advertising and remarketing</li>
                <li>Spam prevention and security</li>
                <li>Embedded services such as maps, videos, calendars, or similar tools</li>
              </ul>
              <p className="mt-4">These may include services such as:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google Analytics</li>
                <li>Meta Pixel</li>
                <li>Google reCAPTCHA</li>
                <li>Embedded maps</li>
                <li>YouTube embeds</li>
                <li>Calendar integrations</li>
                <li>Chat widgets or similar tools, where used</li>
              </ul>
              <p className="mt-4">
                Where required by law, we will request your consent before placing non-essential cookies on your device.
              </p>
              <p>
                You can also manage cookies through your browser settings and any cookie preferences tool provided on the website.
              </p>
            </div>

            <div id="section-7">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Sharing your data</h2>
              <p>We may share personal data with trusted third-party service providers where necessary to operate the website or respond to enquiries. These may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Website hosting providers</li>
                <li>Analytics providers</li>
                <li>Security and anti-spam tools</li>
                <li>Embedded content providers</li>
                <li>Email or communications providers</li>
                <li><strong>Stripe, Inc.</strong> — used to process subscription payments and manage invoicing. When you purchase a subscription, your payment and billing details are processed directly by Stripe. Crettyard Digital does not store your card number. Stripe's privacy policy is available at <a href="https://stripe.com/ie/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">stripe.com/ie/privacy</a>.</li>
                <li>Professional advisers where necessary</li>
              </ul>
              <p className="mt-4">We do not sell your personal data.</p>
            </div>

            <div id="section-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. International transfers</h2>
              <p>
                Some third-party providers may process data outside Ireland or the European Economic Area. Where this happens, we will take reasonable steps to ensure appropriate safeguards are in place as required by applicable law.
              </p>
            </div>

            <div id="section-9">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Data retention</h2>
              <p>
                We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, maintaining business records, complying with legal obligations, and resolving disputes.
              </p>
            </div>

            <div id="section-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Your rights</h2>
              <p>Subject to applicable law, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Request restriction of processing</li>
                <li>Object to certain processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us using the details above.</p>
              <p>You also have the right to make a complaint to the Data Protection Commission in Ireland.</p>
            </div>

            <div id="section-11">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Third-party websites</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third-party sites.
              </p>
            </div>

            <div id="section-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect personal data, but no method of transmission over the internet or electronic storage is completely secure.
              </p>
            </div>

            <div id="section-13">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date.
              </p>
            </div>

            <div id="section-14">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact us</h2>
              <p>If you have any questions about this Privacy Policy or how your personal data is handled, please contact:</p>
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
