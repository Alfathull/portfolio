"use client";

import TiltCard from "./TiltCard";
import ImageWithSkeleton from "./ImageWithSkeleton";

interface Metric {
  num: string;
  label: string;
}

interface Project {
  index: string;
  client: string;
  title: string;
  role: string;
  tags: string[];
  metrics?: Metric[];
  highlights?: string[];
  screenshot?: string;
  link?: string;
}

const projects: Project[] = [
  {
    index: "01 / 06",
    client: "Erajaya Group",
    title: "POS B2B Enterprise Platform",
    role: "Frontend Developer & QA Engineer Lead",
    tags: ["Next.js", "TypeScript", "Playwright", "PostgreSQL", "JMeter"],
    metrics: [
      { num: "60%", label: "Regression time reduced" },
      { num: "95%", label: "Test coverage achieved" },
      { num: "8h", label: "Avg. bug resolution" },
    ],
    screenshot: "/project-pos.png",
  },
  {
    index: "02 / 06",
    client: "Xpeng Automotive",
    title: "Automotive Website & CMS",
    role: "Frontend Developer & QA Engineer Lead",
    tags: ["Next.js 16", "Prisma ORM", "PostgreSQL", "TanStack Query", "Tailwind CSS"],
    highlights: [
      "Stabilized an inherited codebase by resolving <strong>70+ critical bugs</strong> independently under tight delivery deadlines",
      "Built full CMS module with dynamic routing, SSR, and TanStack React Query integration",
      "Delivered project on schedule despite inheriting significant technical debt",
    ],
    screenshot: "/project-xpeng.png",
    link: "https://xpeng.co.id/id",
  },
  {
    index: "03 / 06",
    client: "Under Armour",
    title: "E-commerce Platform",
    role: "Frontend Developer & QA Engineer",
    tags: ["Next.js", "Tailwind CSS", "GA4", "Figma"],
    metrics: [
      { num: "50→85", label: "PageSpeed score" },
      { num: "100%", label: "Purchase funnel restored" },
    ],
    highlights: [
      "Pixel-perfect Figma-to-code checkout flow and user profile dashboard",
      "Fixed broken GA4 ecommerce tracking, restoring marketing analytics visibility",
      "Performance optimized via code splitting, lazy loading, and asset compression",
    ],
    screenshot: "/project-underarmour.png",
    link: "https://www.underarmour.co.id/",
  },
  {
    index: "04 / 06",
    client: "Sour Sally",
    title: "Full-stack CMS Platform",
    role: "Full-stack Developer & QA",
    tags: ["Laravel", "Next.js", "PHP", "REST API"],
    highlights: [
      "Built complete CMS from scratch — Laravel backend, Next.js frontend",
      "Achieved <strong>100% API reliability</strong> by writing and testing every endpoint simultaneously",
      "Eliminated client dependency on developers for routine content updates",
      "Pixel-perfect implementation across all breakpoints, validated with visual regression tests",
    ],
    link: "https://soursallyglobal.com/",
    screenshot: "/project-soursally.png",
  },
  {
    index: "05 / 06",
    client: "Erajaya Group",
    title: "Eraspace & Erafone E-commerce",
    role: "Frontend Developer & QA Engineer",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "<strong>Zero critical bugs</strong> in production across both platforms",
      "<strong>100% on-time sprint delivery</strong> managed as semi-lead across both projects",
      "Developed mobile-responsive transaction history and news features",
      "Led frontend developer onboarding and structured team task tracking",
    ],
    link: "https://erafone.com/artikel",
    screenshot: "/project-erafone.png",
  },
  {
    index: "06 / 06",
    client: "Multiple Clients",
    title: "Corporate Website Portfolio",
    role: "Full-stack Developer",
    tags: ["Laravel", "PHP", "SEO", "CMS"],
    metrics: [
      { num: "7+", label: "Websites delivered" },
      { num: "90+", label: "PageSpeed score" },
    ],
    highlights: [
      "Custom CMS, SEO optimization, and responsive design on each project",
      "90+ PageSpeed scores through lazy loading, image optimization, and caching",
    ],
  },
];

function ProjectScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-video relative bg-frost border border-border rounded-[4px] overflow-hidden">
      <ImageWithSkeleton src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="fade-in py-[100px] px-5 md:px-10 max-w-[1100px] mx-auto"
    >
      <div className="font-mono text-[11px] font-medium text-blue tracking-[0.14em] uppercase mb-3">
        Selected Work
      </div>
      <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-navy leading-[1.1] tracking-[-0.01em] mb-4">
        Projects
      </h2>
      <p className="text-base text-stone max-w-[520px] mb-14">
        Enterprise systems shipped for real clients, at production scale.
      </p>

      <div className="flex flex-col gap-px bg-border border border-border rounded-[4px] overflow-hidden">
        {projects.map((project) => (
          <TiltCard
            key={project.title}
            className="bg-white p-10 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-15 items-start hover:bg-[#FAFCFF] transition-colors duration-200"
          >
            {/* Meta */}
            <div>
              <div className="font-mono text-[11px] text-stone tracking-[0.08em] mb-4">
                {project.index}
              </div>
              <div className="text-[11px] font-semibold text-blue tracking-[0.1em] uppercase mb-2">
                {project.client}
              </div>
              <h3 className="font-serif text-[26px] text-navy leading-[1.2] mb-3">
                {project.title}
              </h3>
              <div className="text-[12px] font-medium text-stone tracking-[0.04em] mb-5">
                {project.role}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] font-medium px-2.5 py-[3px] border border-border text-stone rounded-[2px] bg-cream hover:border-blue hover:text-blue transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div>
              {project.metrics && (
                <div className="flex gap-6 mb-7 p-4 px-5 bg-frost border-l-[3px] border-l-blue rounded-r-[4px]">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-serif text-[26px] text-navy leading-none">
                        {m.num}
                      </div>
                      <div className="text-[11px] text-stone mt-0.5 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {project.highlights && (
                <ul className="flex flex-col gap-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-[13px] text-stone leading-[1.6] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-sky before:text-[12px]"
                      dangerouslySetInnerHTML={{ __html: h }}
                    />
                  ))}
                </ul>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-blue hover:underline mb-4"
                >
                  Visit Site →
                </a>
              )}

              {project.screenshot ? (
                <ProjectScreenshot src={project.screenshot} alt={project.title} />
              ) : null}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
