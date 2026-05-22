import Image from "next/image";

export default function About() {
  const tags = [
    "Next.js",
    "TypeScript",
    "Laravel",
    "PostgreSQL",
    "Playwright",
    "Prisma ORM",
    "Docker",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="fade-in py-[100px] px-10 max-w-[1100px] mx-auto">
      <div className="font-mono text-[11px] font-medium text-blue tracking-[0.14em] uppercase mb-3">
        About
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Photo */}
        <div className="aspect-[3/4] relative bg-frost border border-border rounded-[4px] overflow-hidden">
          <Image
            src="/photo.jpeg"
            alt="Miftah Alfathul Rizky"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="font-serif text-[28px] text-navy leading-[1.2] mb-5">
            Building systems that work
            <br />
            at enterprise scale.
          </h3>
          <p className="text-[15px] text-stone leading-[1.8] mb-4">
            I&apos;m{" "}
            <strong className="text-ink font-medium">
              Miftah Alfathul Rizky
            </strong>{" "}
            — a Full Stack Developer and QA Engineer based in Bandung, Indonesia.
            I work at{" "}
            <strong className="text-ink font-medium">Hepytech</strong>, an
            outsourcing firm where I&apos;ve shipped features for clients
            including Erajaya Group, Xpeng Automotive, and Under Armour.
          </p>
          <p className="text-[15px] text-stone leading-[1.8] mb-4">
            My work spans the full stack:{" "}
            <strong className="text-ink font-medium">
              Next.js and TypeScript
            </strong>{" "}
            on the frontend,{" "}
            <strong className="text-ink font-medium">
              Laravel and PostgreSQL
            </strong>{" "}
            on the backend, and{" "}
            <strong className="text-ink font-medium">
              Playwright, Postman, and JMeter
            </strong>{" "}
            for testing and performance validation. I&apos;ve also led frontend
            onboarding and managed full project lifecycles as Project Manager.
          </p>
          <p className="text-[15px] text-stone leading-[1.8] mb-4">
            Alongside full-time work, I&apos;m pursuing a{" "}
            <strong className="text-ink font-medium">
              Bachelor&apos;s in Information Systems Management
            </strong>{" "}
            at Universitas Terbuka — currently in my 6th semester.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-7">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] font-medium px-3 py-[5px] border border-border rounded-[2px] text-stone tracking-[0.04em] bg-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
