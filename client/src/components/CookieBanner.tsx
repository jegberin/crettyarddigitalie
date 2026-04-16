import { useState, useEffect } from "react";
import { Link } from "wouter";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:p-6"
      data-testid="cookie-banner"
      data-cookie-banner="true"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-4 max-w-5xl">
        <div className="flex-1 text-sm text-foreground/80 leading-relaxed">
          <p>
            We use cookies to improve your experience, analyse site traffic, and support marketing.
            By clicking "Accept All", you consent to our use of cookies. See our{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline font-medium">Privacy Policy</Link>{" "}
            and{" "}
            <Link href="/cookie-policy" className="text-accent hover:underline font-medium">Cookie Policy</Link>{" "}
            for details.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 text-sm font-medium border border-gray-300 rounded-[4px] text-foreground/70 hover:bg-gray-50 transition-colors"
            data-testid="button-reject-cookies"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-[4px] hover:bg-accent/90 transition-colors"
            data-testid="button-accept-cookies"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
