import { Link } from "wouter";
import { FadeIn } from "@/components/FadeIn";

const tocItems = [
  { id: "section-1", label: "1. About us" },
  { id: "section-2", label: "2. Website use" },
  { id: "section-3", label: "3. Information on this website" },
  { id: "section-4", label: "4. Services" },
  { id: "section-5", label: "5. Quotes and project scope" },
  { id: "section-6", label: "6. Client responsibilities" },
  { id: "section-7", label: "7. Consultancy and advice" },
  { id: "section-8", label: "8. Client content and compliance" },
  { id: "section-9", label: "9. Intellectual property" },
  { id: "section-10", label: "10. Third-party services" },
  { id: "section-11", label: "11. Payments and VAT" },
  { id: "section-12", label: "12. LEO Grow Digital Voucher" },
  { id: "section-13", label: "13. Cancellation and refunds" },
  { id: "section-14", label: "14. Timelines and delivery" },
  { id: "section-15", label: "15. Support and maintenance" },
  { id: "section-16", label: "16. Limitation of liability" },
  { id: "section-17", label: "17. No guarantees" },
  { id: "section-18", label: "18. Indemnity" },
  { id: "section-19", label: "19. Links to third-party websites" },
  { id: "section-20", label: "20. Privacy" },
  { id: "section-21", label: "21. Governing law" },
  { id: "section-22", label: "22. Changes to these terms" },
  { id: "section-23", label: "23. Contact" },
];

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#f3f4f5] py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Legal</span>
            <h1 className="text-4xl md:text-5xl leading-[1.1] mb-6">Terms and Conditions</h1>
            <p className="text-foreground font-sans">Effective date: 10/03/2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Table of Contents */}
          <nav aria-label="Terms and Conditions table of contents" className="mb-12 p-6 bg-[#f3f4f5] rounded-2xl" data-testid="section-toc">
            <h2 className="text-base font-headline font-bold mb-4 text-foreground">Contents</h2>
            <ol className="space-y-1.5 columns-2 gap-x-6">
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

          <div className="prose prose-lg max-w-none text-foreground space-y-10" data-testid="text-terms-conditions">
            <p>
              These Terms and Conditions govern your use of the Crettyard Digital website and any enquiry or engagement with our services.
            </p>
            <p>
              By using this website, contacting us, or engaging our services, you agree to these Terms and Conditions.
            </p>

            <div id="section-1">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. About us</h2>
              <p>Crettyard Digital is a sole trader business based in Crettyard, Co. Laois, Ireland, registered with the Companies Registration Office (CRO) under No. 783799.</p>
              <p className="mt-2"><strong>Contact details:</strong></p>
              <ul className="list-none space-y-1 pl-0">
                <li>Email: <a href="mailto:info@crettyarddigital.ie" className="text-accent hover:underline">info@crettyarddigital.ie</a></li>
                <li>Phone: <a href="tel:+353879700701" className="text-accent hover:underline">+353 87 970 0701</a></li>
              </ul>
            </div>

            <div id="section-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Website use</h2>
              <p>You agree to use this website only for lawful purposes. You must not use the website in any way that may damage, disable, overburden, or impair the website or interfere with any other party's use of it.</p>
              <p className="mt-2">You must not attempt to gain unauthorised access to any part of the website, server, or connected systems.</p>
            </div>

            <div id="section-3">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Information on this website</h2>
              <p>The content on this website is provided for general information only. While we aim to keep information accurate and up to date, we make no guarantees, representations, or warranties, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the website or its content.</p>
              <p className="mt-2">Any reliance you place on information on this website is at your own risk.</p>
            </div>

            <div id="section-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Services</h2>
              <p>Crettyard Digital provides services such as website design, website support, digital advice, Microsoft 365 support, network advice, Wi-Fi and security-related guidance, and related consulting services.</p>
              <p className="mt-2">All services are subject to availability and may be tailored to the specific client and project.</p>
            </div>

            <div id="section-5">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Quotes and project scope</h2>
              <p>Any quote, estimate, proposal, or timeline provided by us is based on the information available at the time and may be subject to change if the scope of work changes.</p>
              <p className="mt-2">A project will only begin once the scope, deliverables, pricing, and any required deposit or agreement have been confirmed.</p>
            </div>

            <div id="section-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Client responsibilities</h2>
              <p>The client is responsible for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Providing accurate information and clear instructions</li>
                <li>Supplying text, images, logos, credentials, approvals, and other required materials on time</li>
                <li>Ensuring they have the right to use any content they provide</li>
                <li>Reviewing deliverables and providing timely feedback</li>
                <li>Making their own decisions on whether to accept, reject, or implement any advice or recommendation</li>
              </ul>
              <p className="mt-2">Delays in receiving content, access, approvals, or feedback may result in project delays.</p>
            </div>

            <div id="section-7">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Consultancy and advice</h2>
              <p>Where we provide advice, recommendations, opinions, or technical suggestions, these are offered in a consultancy capacity based on the information available at the time.</p>
              <p className="mt-2">The client is solely responsible for deciding whether to follow, implement, or rely on any recommendation. The client remains fully responsible for the operation of their own business, website, systems, services, legal compliance, and business decisions.</p>
            </div>

            <div id="section-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Client content and compliance</h2>
              <p>The client is responsible for ensuring that all content, claims, images, branding, business information, legal notices, and materials they provide or approve are lawful, accurate, non-infringing, and suitable for publication.</p>
              <p className="mt-2">We are not responsible for verifying the legal accuracy of client-supplied content, including regulatory, advertising, privacy, accessibility, or industry-specific compliance unless expressly agreed in writing.</p>
            </div>

            <div id="section-9">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Intellectual property</h2>
              <p>Unless otherwise agreed in writing:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The client retains ownership of content they supply</li>
                <li>Third-party tools, plugins, fonts, templates, stock assets, and software remain subject to their own licences</li>
                <li>We retain ownership of our pre-existing methods, processes, know-how, and reusable materials</li>
              </ul>
              <p className="mt-2">Full rights in the final deliverables may transfer to the client only after full payment of all agreed fees, unless otherwise agreed in writing.</p>
            </div>

            <div id="section-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-party services</h2>
              <p>Projects may involve third-party providers such as domain registrars, hosting companies, email providers, analytics platforms, plugins, themes, payment processors, social platforms, or software services.</p>
              <p className="mt-2">We are not responsible for downtime, pricing changes, account restrictions, outages, security issues, policy changes, or other failures caused by third-party providers.</p>
            </div>

            <div id="section-11">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Payments and VAT</h2>
              <p>Payment terms will be set out in the applicable quote, invoice, or project agreement.</p>
              <p className="mt-2">Unless otherwise agreed:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>invoices must be paid by the due date shown on the invoice</li>
                <li>late payments may result in paused work, withheld delivery, or suspension of support</li>
                <li>we reserve the right to charge statutory interest and reasonable recovery costs on overdue amounts where permitted by law</li>
              </ul>
              <p className="mt-4">
                Payments for subscription services are processed securely through Stripe, Inc. ("Stripe"), a third-party payment processor. By subscribing to or purchasing any service that involves online payment, you agree to Stripe's Terms of Service and Privacy Policy. Crettyard Digital does not store your card details. Stripe also manages invoicing and subscription billing where applicable.
              </p>
              <p className="mt-4">
                <strong>VAT:</strong> Crettyard Digital operates below the mandatory VAT registration threshold for services in Ireland. No VAT is charged on any invoices or transactions. Prices quoted are the full amount payable.
              </p>
            </div>

            <div id="section-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. LEO Grow Digital Voucher</h2>
              <p className="font-semibold mt-2">12.1 Scheme Awareness &amp; Provider Status</p>
              <p className="mt-1">Crettyard Digital positions itself as "Grow Digital Voucher Ready" under the Local Enterprise Office (LEO) Grow Digital Voucher scheme. This means our invoicing and documentation are prepared to meet the scheme's requirements, not that we are an officially approved or endorsed supplier. The Grow Digital Voucher scheme does not operate a formal approved provider list. Certain services we provide may be eligible for funding under this programme \u2014 specifically new software subscriptions, implementation, and training. Bespoke website development is not eligible. Nothing in these Terms and Conditions constitutes a guarantee that any specific service, engagement, or project will be approved by the LEO.</p>

              <p className="font-semibold mt-4">12.2 Further Information &amp; How to Apply</p>
              <p className="mt-1">The Grow Digital Voucher provides financial support (up to €5,000, covering 50% of eligible costs) for businesses to invest in digital technology. For full details on eligibility, covered services, and the step-by-step application guide, please visit the official LEO portal at <a href="https://www.localenterprise.ie/growdigital" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">localenterprise.ie/growdigital</a>. Applications must be initiated directly with your local LEO via the "Digital for Business" process.</p>

              <p className="font-semibold mt-4">12.3 Client Responsibility</p>
              <p className="mt-1">The Client is strictly and solely responsible for assessing their own eligibility, completing the application process, and managing all communications with the LEO. Crettyard Digital cannot apply on your behalf, and does not offer advisory services regarding voucher applications.</p>

              <p className="font-semibold mt-4">12.4 Disclaimer of Liability</p>
              <p className="mt-1">Crettyard Digital makes no guarantees or representations regarding the success of any voucher application. We accept no liability or responsibility for rejected claims, partial funding, application delays, or changes to the scheme's terms, eligibility criteria, or funding levels.</p>

              <p className="font-semibold mt-4">12.5 Payment Obligations</p>
              <p className="mt-1">The Client's obligation to pay Crettyard Digital in full for all services rendered is absolute and is in no way contingent upon the successful application, approval, or receipt of the LEO Grow Digital Voucher or any other grant, subsidy, or funding scheme. All invoices fall due on the terms stated, regardless of the status of any funding application.</p>
            </div>

            <div id="section-13">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Cancellation and refunds</h2>
              <p>A client may cancel a project before final publication of the website.</p>
              <p className="mt-2">However:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>costs already incurred for third-party services are non-refundable</li>
                <li>domain registration or renewal fees are non-refundable</li>
                <li>hosting, software, plugin, licence, or similar third-party costs already incurred are non-refundable</li>
                <li>work already completed up to the cancellation date may still be chargeable</li>
              </ul>
              <p className="mt-2">If a client decides not to publish the final website, they are still responsible for paying for work completed and any non-refundable third-party costs already committed.</p>
            </div>

            <div id="section-14">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Timelines and delivery</h2>
              <p>Any delivery date or timeframe is an estimate unless expressly agreed otherwise in writing. We are not liable for delays caused by missing client materials, delayed approvals, third-party providers, technical issues outside our control, or force majeure events.</p>
            </div>

            <div id="section-15">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Support and maintenance</h2>
              <p>Ongoing support, maintenance, updates, monitoring, or security work are only included where expressly agreed. Unless a separate support arrangement is in place, we are under no obligation to provide continuing maintenance after project completion.</p>
            </div>

            <div id="section-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Limitation of liability</h2>
              <p>To the fullest extent permitted by law, Crettyard Digital shall not be liable for any indirect, incidental, special, consequential, business interruption, loss of profits, loss of revenue, loss of opportunity, loss of data, reputational damage, or similar losses arising from or connected with the use of the website, our services, or any advice or recommendations provided.</p>
              <p className="mt-2">Our total liability, whether in contract, tort, negligence, or otherwise, shall be limited to the amount actually paid by the client to us for the specific service giving rise to the claim.</p>
              <p className="mt-2">Nothing in these Terms and Conditions excludes liability where it cannot lawfully be excluded under applicable law.</p>
            </div>

            <div id="section-17">
              <h2 className="text-2xl font-bold text-foreground mb-4">17. No guarantees</h2>
              <p>We do not guarantee specific business outcomes, search engine rankings, enquiry levels, sales results, uptime, compatibility with all third-party systems, or uninterrupted website availability unless expressly agreed in writing.</p>
            </div>

            <div id="section-18">
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Indemnity</h2>
              <p>You agree to indemnify and hold Crettyard Digital harmless against claims, losses, damages, liabilities, and costs arising from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>client-supplied content</li>
                <li>misuse of the website</li>
                <li>breach of these Terms and Conditions</li>
                <li>the client's implementation or non-implementation of advice</li>
                <li>the client's business operations, legal obligations, or commercial decisions</li>
              </ul>
            </div>

            <div id="section-19">
              <h2 className="text-2xl font-bold text-foreground mb-4">19. Links to third-party websites</h2>
              <p>This website may contain links to third-party websites. These are provided for convenience only. We do not endorse and are not responsible for the content, availability, or practices of third-party websites.</p>
            </div>

            <div id="section-20">
              <h2 className="text-2xl font-bold text-foreground mb-4">20. Privacy</h2>
              <p>Use of the website is also subject to our <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.</p>
            </div>

            <div id="section-21">
              <h2 className="text-2xl font-bold text-foreground mb-4">21. Governing law</h2>
              <p>These Terms and Conditions are governed by the laws of Ireland. Any dispute arising in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the Irish courts.</p>
            </div>

            <div id="section-22">
              <h2 className="text-2xl font-bold text-foreground mb-4">22. Changes to these terms</h2>
              <p>We may update these Terms and Conditions from time to time. The latest version will be published on this page with the updated effective date.</p>
            </div>

            <div id="section-23">
              <h2 className="text-2xl font-bold text-foreground mb-4">23. Contact</h2>
              <div className="space-y-1">
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
