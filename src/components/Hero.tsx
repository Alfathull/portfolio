export default function Hero() {
  return (
    <div className="px-10 max-w-[1100px] mx-auto">
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center pt-[120px] pb-20 relative"
      >
        {/* Eyebrow */}
        <div className="font-mono text-[12px] font-medium text-blue tracking-[0.12em] uppercase mb-5 flex items-center gap-2.5">
          <span className="block w-8 h-px bg-blue" />
          Available for opportunities
        </div>

        {/* Heading */}
        <h1 className="font-serif text-[clamp(52px,7vw,88px)] leading-[1.05] text-navy tracking-[-0.02em] mb-7">
          Full Stack
          <br />
          <em className="italic text-blue">Developer</em>
          <br />& QA Engineer
        </h1>

        {/* Subtitle */}
        <p className="text-lg font-light text-stone max-w-[560px] leading-[1.8] mb-12">
          Building{" "}
          <strong className="font-medium text-ink">
            enterprise-grade web systems
          </strong>{" "}
          end-to-end — from database architecture to pixel-perfect UI. 2+ years
          delivering across 6+ client products at Hepytech.
        </p>

        {/* Stats */}
        <div className="flex gap-12 mb-13">
          {[
            { num: "6+", label: "Client Products" },
            { num: "2+", label: "Years Experience" },
            { num: "60%", label: "Regression Reduced" },
            { num: "7+", label: "Websites Shipped" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-4xl text-navy leading-none">
                {stat.num}
              </div>
              <div className="text-[12px] font-medium text-stone tracking-[0.06em] uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-[4px] text-sm font-medium tracking-[0.02em] hover:bg-blue hover:-translate-y-px transition-all duration-200"
          >
            View Projects ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-[1.5px] border-border text-ink px-7 py-[13px] rounded-[4px] text-sm font-medium tracking-[0.02em] hover:border-blue hover:text-blue transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Decorative line */}
        <div className="absolute right-0 top-[20%] w-px h-[300px] bg-gradient-to-b from-transparent via-border to-transparent" />
      </section>
    </div>
  );
}
