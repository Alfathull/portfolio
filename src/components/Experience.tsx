interface TimelineItem {
  period: string;
  company: string;
  role: string;
  desc: string;
  isCurrent?: boolean;
}

const timeline: TimelineItem[] = [
  {
    period: "Jul 2024 – Present",
    company: "Hepytech",
    role: "Fullstack Developer & QA Engineer (Return)",
    desc: "Continuing full-stack and QA work across Erajaya and new client projects. Leading frontend teams as semi-lead, building features end-to-end with Next.js, TypeScript, and Laravel.",
    isCurrent: true,
  },
  {
    period: "Apr 2023 – Nov 2023",
    company: "Hepytech",
    role: "Fullstack Developer & QA Engineer",
    desc: "Delivered features across enterprise POS, automotive website, and e-commerce platforms. Implemented automated testing with Playwright, reducing regression time by 60%. Managed project lifecycle as PM for internal ticketing platform.",
    isCurrent: true,
  },
  {
    period: "Jan 2021 – Mar 2021",
    company: "Prabaswara Digital",
    role: "Web Developer",
    desc: "Developed WordPress-based plant nursery website with SEO optimization. Increased social media engagement by 200% through strategic content creation.",
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="fade-in py-[100px] px-10 max-w-[1100px] mx-auto">
      <div className="font-mono text-[11px] font-medium text-blue tracking-[0.14em] uppercase mb-3">
        Experience
      </div>
      <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-navy leading-[1.1] tracking-[-0.01em] mb-4">
        Career timeline
      </h2>
      <p className="text-base text-stone max-w-[520px] mb-14">
        Roles and responsibilities across two companies.
      </p>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

        {timeline.map((item, i) => (
          <div key={i} className="relative mb-12 last:mb-0">
            {/* Dot */}
            <div
              className={`absolute -left-[36px] top-1.5 w-[9px] h-[9px] rounded-full border-2 border-cream shadow-[0_0_0_1px] ${
                item.isCurrent
                  ? "bg-blue shadow-blue"
                  : "bg-stone shadow-stone"
              }`}
            />
            <div className="font-mono text-[11px] text-stone tracking-[0.06em] mb-1.5">
              {item.period}
            </div>
            <div className="text-[17px] font-semibold text-navy mb-0.5">
              {item.company}
            </div>
            <div className="text-[13px] text-blue font-medium mb-3">
              {item.role}
            </div>
            <p className="text-sm text-stone leading-[1.7] max-w-[600px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
