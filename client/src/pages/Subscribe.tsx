import { useEffect, useState, useCallback } from "react";
import { loadStripe, type Stripe as StripeType } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { SEO } from "@/components/SEO";

const FEATURES = [
  "Complete design & deployment",
  "Cloudflare hosting & security monitoring",
  "Guaranteed 99.99% uptime",
  "Content migration & SEO optimisation",
  "Unlimited same-day updates",
  "5-year price lock — zero increases",
];

function CheckoutForm({ stripePromise }: { stripePromise: Promise<StripeType | null> }) {
  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/subscribe/create-session", { method: "POST" });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to start checkout");
    return data.clientSecret as string;
  }, []);

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
}

function SuccessMessage({ sessionId }: { sessionId: string }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/subscribe/session-status?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((d) => setEmail(d.customer_email ?? null))
      .catch(() => {});
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full">
        <div className="w-16 h-16 bg-[#12B388]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#12B388]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="font-headline font-bold text-[#0C2366] text-2xl mb-3">You're all set!</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          Your <strong>Everything Included</strong> subscription is now active.
        </p>
        {email && (
          <p className="text-gray-500 text-sm mb-4">
            A confirmation has been sent to <strong>{email}</strong>.
          </p>
        )}
        <p className="text-gray-600 text-sm leading-relaxed">
          Joey will be in touch shortly to get everything kicked off. You can also reach us any time at{" "}
          <a href="mailto:info@crettyarddigital.ie" className="text-[#12B388] font-medium hover:underline">
            info@crettyarddigital.ie
          </a>{" "}
          or WhatsApp <a href="https://wa.me/353879700701" className="text-[#12B388] font-medium hover:underline">087 970 0701</a>.
        </p>
      </div>
    </div>
  );
}

export default function Subscribe() {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  const [stripePromise, setStripePromise] = useState<Promise<StripeType | null> | null>(null);
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) return;
    fetch("/api/subscribe/config")
      .then((r) => r.json())
      .then(({ publishableKey }) => {
        if (!publishableKey) throw new Error("No publishable key");
        setStripePromise(loadStripe(publishableKey));
      })
      .catch(() => setConfigError("Unable to load payment form. Please contact info@crettyarddigital.ie."));
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-[#f3f4f5] flex flex-col">
      <SEO
        title="Everything Included Subscription | Crettyard Digital"
        description="Subscribe to the Crettyard Digital Everything Included web design package."
        canonicalPath="/subscribe"
        noindex
      />
      {/* Minimal header */}
      <header className="bg-[#0C2366] py-5 px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3" data-testid="link-logo">
          <span className="font-bold text-white text-lg tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
            Crettyard Digital
          </span>
        </a>
        <a
          href="mailto:info@crettyarddigital.ie"
          className="text-white/70 hover:text-white text-sm transition-colors"
          data-testid="link-help-email"
        >
          Need help? info@crettyarddigital.ie
        </a>
      </header>

      <main className="flex-1 container mx-auto px-4 max-w-5xl py-10">
        {sessionId ? (
          <SuccessMessage sessionId={sessionId} />
        ) : (
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 items-start">
            {/* Left — plan details */}
            <div className="bg-white rounded-2xl shadow p-8 md:sticky md:top-8">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#12B388] mb-4">
                The "Everything Included" Subscription
              </span>

              {/* Pricing */}
              <div className="flex items-end gap-1 mb-1">
                <span className="font-bold text-[#0C2366] text-4xl leading-none" style={{ fontFamily: "Manrope, sans-serif" }}>€99</span>
                <span className="text-gray-400 text-sm mb-1">/ month</span>
              </div>
              <p className="text-[#12B388] text-sm font-semibold mb-5">
                Upfront build &amp; deployment: €0 — no capital expenditure to get started
              </p>

              <ul className="space-y-3 mb-6">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#12B388] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* VAT note */}
              <div className="bg-[#f3f4f5] rounded-xl px-4 py-3 mb-6">
                <p className="text-xs font-semibold text-gray-600 mb-0.5">No VAT charged</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Crettyard Digital operates below the mandatory VAT registration threshold for services — no VAT is charged.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5 text-center">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Secure payment by Stripe. Your card details are never stored by Crettyard Digital.
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-xs text-gray-400">SSL encrypted</span>
                </div>
              </div>
            </div>

            {/* Right — Stripe embedded checkout */}
            <div className="bg-white rounded-2xl shadow overflow-hidden min-h-[400px] flex items-center justify-center">
              {configError ? (
                <p className="text-red-500 text-sm text-center px-6 py-8">{configError}</p>
              ) : stripePromise ? (
                <div className="w-full">
                  <CheckoutForm stripePromise={stripePromise} />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 py-12">
                  <div className="w-8 h-8 border-2 border-[#12B388] border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm text-gray-400">Loading payment form…</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Crettyard Digital · Crettyard, Co. Laois ·{" "}
        <a href="/privacy-policy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
      </footer>
    </div>
  );
}
