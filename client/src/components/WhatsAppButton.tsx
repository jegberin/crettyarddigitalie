export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/353879700701?text=Hi%2C%20I%20found%20your%20website%20and%20I%27d%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] transition-all duration-200"
      data-testid="button-whatsapp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M16.004 2.667A13.26 13.26 0 0 0 2.753 15.92a13.18 13.18 0 0 0 1.888 6.8L2.667 29.333l6.84-1.933A13.28 13.28 0 0 0 16.004 29.333 13.267 13.267 0 1 0 16.004 2.667Zm0 24.28a10.89 10.89 0 0 1-5.88-1.72l-.42-.253-4.36 1.233 1.16-4.28-.28-.44a10.88 10.88 0 1 1 9.78 5.46Zm5.96-8.147c-.327-.16-1.927-.947-2.227-1.053-.3-.107-.52-.16-.733.16-.213.32-.84 1.053-1.027 1.267-.187.213-.38.24-.707.08-.327-.16-1.38-.507-2.627-1.62-.973-.867-1.627-1.933-1.82-2.26-.187-.327-.02-.507.14-.667.147-.147.327-.38.493-.573.167-.193.22-.327.333-.547.113-.22.06-.413-.027-.573-.093-.16-.733-1.773-1.007-2.427-.267-.64-.533-.553-.733-.56l-.627-.013a1.2 1.2 0 0 0-.867.407c-.3.327-1.14 1.113-1.14 2.72 0 1.607 1.167 3.16 1.327 3.373.167.213 2.293 3.507 5.56 4.913.78.333 1.387.533 1.86.687.78.247 1.493.213 2.06.127.627-.093 1.927-.787 2.2-1.547.273-.76.273-1.413.193-1.547-.08-.133-.3-.213-.627-.373Z" />
      </svg>
    </a>
  );
}
