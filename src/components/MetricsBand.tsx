export default function MetricsBand() {
  const metrics = [
    { num: "60%", label: "Regression time reduced via Playwright automation" },
    { num: "50→85", label: "PageSpeed score lifted on Under Armour" },
    { num: "70+", label: "Critical bugs resolved on Xpeng independently" },
    { num: "0", label: "Critical production bugs across 4 e-commerce platforms" },
    { num: "8h", label: "Bug resolution time, reduced from 3 days" },
  ];

  return (
    <div className="bg-blue py-16 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="font-serif text-[44px] text-white leading-none mb-2">
              {m.num}
            </div>
            <div className="text-[12px] text-white/60 font-medium tracking-[0.04em] leading-[1.4]">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
