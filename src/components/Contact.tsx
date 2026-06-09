"use client";

import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="fade-in py-[100px] px-5 md:px-10 max-w-[1100px] mx-auto text-center">
      <div className="font-mono text-[11px] font-medium text-blue tracking-[0.14em] uppercase mb-3">
        Contact
      </div>
      <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-navy leading-[1.1] tracking-[-0.01em] mb-3">
        Let&apos;s work together
      </h2>
      <p className="text-base text-stone max-w-[520px] mx-auto mb-10">
        Open to full-time roles, freelance projects, and collaborative
        opportunities.
      </p>

      <div className="flex gap-4 justify-center flex-wrap">
        <MagneticButton
          href="mailto:alfathul1717@gmail.com"
          className="flex items-center gap-2.5 px-6 py-3.5 bg-white border border-border rounded-[4px] text-sm font-medium text-ink hover:border-blue hover:text-blue transition-colors duration-200 hover-lift"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          alfathul1717@gmail.com
        </MagneticButton>
        <MagneticButton
          href="tel:+6285155099180"
          className="flex items-center gap-2.5 px-6 py-3.5 bg-white border border-border rounded-[4px] text-sm font-medium text-ink hover:border-blue hover:text-blue transition-colors duration-200 hover-lift"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.86 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +62 851 5509 9180
        </MagneticButton>
        <MagneticButton
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-6 py-3.5 bg-white border border-border rounded-[4px] text-sm font-medium text-ink hover:border-blue hover:text-blue transition-colors duration-200 hover-lift"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn Profile
        </MagneticButton>
        <MagneticButton
          href="#"
          className="flex items-center gap-2.5 px-6 py-3.5 bg-white border border-border rounded-[4px] text-sm font-medium text-ink hover:border-blue hover:text-blue transition-colors duration-200 hover-lift"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          GitHub
        </MagneticButton>
      </div>
    </section>
  );
}
