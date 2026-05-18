export default function Achievements() {
  return (
    <section
      id="pencapaian"
      className="py-12 sm:py-16 lg:py-20 bg-accent-900"
      aria-labelledby="ach-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 id="ach-heading" className="sr-only">
          Pencapaian GenBI Malut
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-0 lg:divide-x divide-accent-700">
          {[
            { target: 50, suffix: "+", label: "Program Terlaksana" },
            { target: 150, suffix: "+", label: "Anggota Aktif" },
            { target: 12, suffix: "", label: "Desa Binaan" },
            { target: 6, suffix: "", label: "Tahun Berdiri" },
          ].map((s) => (
            <div key={s.label} className="reveal text-center lg:py-0 lg:px-6">
              <span
                className="stat-number font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white"
                data-target={s.target}
              >
                0
              </span>
              <span className="font-display font-bold text-2xl sm:text-3xl text-tertiary-400">
                {s.suffix}
              </span>
              <p className="font-body text-blue-300 mt-2 text-xs sm:text-sm lg:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}