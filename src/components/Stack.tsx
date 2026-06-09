"use client";

export default function Stack() {
  const categories = [
    {
      label: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Vue.js", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      label: "Backend",
      items: ["Laravel (PHP)", "Node.js", "REST API", "Prisma ORM", "MVC Architecture"],
    },
    {
      label: "Database",
      items: ["PostgreSQL", "MySQL"],
    },
    {
      label: "Tools",
      items: ["Playwright", "Postman", "JMeter", "Docker", "Git / Bitbucket", "Jira / Confluence", "DBeaver"],
    },
  ];

  return (
    <div className="bg-navy py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="font-mono text-[11px] font-medium text-white/40 tracking-[0.14em] uppercase mb-3">
          Technical Stack
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-white leading-[1.1] tracking-[-0.01em] mb-2">
          Tools of the trade
        </h2>
        <p className="text-base text-white/45 max-w-[520px] mb-10">
          The technologies I use to build, test, and ship production systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 border border-white/8 rounded-[4px] overflow-hidden">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-navy p-7 group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="font-mono text-[10px] font-medium text-sky tracking-[0.14em] uppercase mb-4">
                {cat.label}
              </div>
              <div className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-white/75 flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
