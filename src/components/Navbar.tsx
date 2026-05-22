export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-cream/92 backdrop-blur-[12px] border-b border-border px-10 h-[60px] flex items-center justify-between">
      <span className="font-mono text-[13px] font-medium text-blue tracking-[0.05em]">
        alfat.
      </span>
      <div className="flex gap-7">
        {["About", "Stack", "Projects", "Experience", "Contact"].map(
          (link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium text-stone tracking-[0.02em] hover:text-blue transition-colors duration-200"
            >
              {link}
            </a>
          )
        )}
      </div>
    </nav>
  );
}
