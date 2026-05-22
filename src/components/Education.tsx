export default function Education() {
  const courses = [
    "Software Testing",
    "Database Management",
    "System Analysis & Design",
    "IT Project Management",
    "Information Security",
    "Business Process Management",
  ];

  return (
    <section id="education" className="fade-in py-[100px] px-10 max-w-[1100px] mx-auto">
      <div className="font-mono text-[11px] font-medium text-blue tracking-[0.14em] uppercase mb-3">
        Education
      </div>
      <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-navy leading-[1.1] tracking-[-0.01em] mb-4">
        Academic background
      </h2>
      <p className="text-base text-stone max-w-[520px] mb-14">
        Pursuing formal education alongside full-time professional work.
      </p>

      <div className="border border-border rounded-[4px] p-9 px-10 bg-white grid grid-cols-[auto_1fr] gap-8 items-start">
        {/* Icon */}
        <div className="w-12 h-12 bg-frost rounded-[4px] flex items-center justify-center text-blue">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Body */}
        <div>
          <div className="text-[17px] font-semibold text-navy mb-0.5">
            Bachelor of Information Systems Management
          </div>
          <div className="text-sm text-blue font-medium mb-1">
            Universitas Terbuka
          </div>
          <div className="text-[13px] text-stone mb-3">
            Bandung, Indonesia · Oct 2023 – 2027 (Expected) · Currently 6th
            Semester
          </div>
          <p className="text-[13px] text-stone mb-3">
            Pursuing degree while working full-time — demonstrating disciplined
            time management and sustained commitment to professional development.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {courses.map((course) => (
              <span
                key={course}
                className="text-[11px] font-mono px-2.5 py-[3px] border border-border text-stone rounded-[2px] bg-cream"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
