import React from "react";

export default function WhatsAppButton({ phone = "254700000000", message = "Hello, I have a question about your products." }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 .008 5.373 0 12c0 2.116.553 4.18 1.6 6.007L0 24l6.21-1.6A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.246-6.193-3.48-8.52z" fill="#25D366" />
        <path d="M17.28 14.06c-.31-.16-1.83-.9-2.12-1-.29-.1-.5-.16-.71.16s-.82 1-.99 1.2c-.18.19-.36.22-.67.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.13.31-.36.47-.54.15-.17.2-.29.31-.49.1-.19.05-.36-.03-.49-.08-.13-.71-1.7-.98-2.33-.26-.61-.53-.53-.71-.54l-.6-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.4s1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.9 4.31 2.87 1.24 2.87.82 3.38.77.5-.05 1.83-.74 2.09-1.45.26-.71.26-1.32.18-1.45-.08-.13-.29-.19-.6-.35z" fill="#fff" />
      </svg>
    </a>
  );
}
