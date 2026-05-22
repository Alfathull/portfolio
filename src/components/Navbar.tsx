"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Stack", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-cream/92 backdrop-blur-[12px] border-b border-border px-5 md:px-10 h-[60px] flex items-center justify-between">
      <span className="font-mono text-[13px] font-medium text-blue tracking-[0.05em]">
        alfat.
      </span>

      {/* Desktop links */}
      <div className="hidden md:flex gap-7">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[13px] font-medium text-stone tracking-[0.02em] hover:text-blue transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[60px] left-0 right-0 bg-cream/95 backdrop-blur-[12px] border-b border-border flex flex-col py-4 px-5 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-stone py-3 border-b border-border/50 last:border-b-0 hover:text-blue transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
