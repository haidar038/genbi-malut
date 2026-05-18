export default function Programs() {
  return (
    <section
      id="program"
      className="py-16 sm:py-24 lg:py-32 bg-white"
      aria-labelledby="programs-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div>
            <span className="font-mono text-sm text-gray-400 tracking-widest">
              03
            </span>
            <h2
              id="programs-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-accent-900 mt-2"
            >
              Program Unggulan
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-gray-500 max-w-md">
            Inisiatif strategis yang dijalankan secara berkala untuk
            memberdayakan masyarakat dan mengembangkan kapasitas anggota.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {[
            {
              num: "01",
              title: "Bina Desa",
              desc: "Program pemberdayaan masyarakat desa melalui edukasi, pelatihan keterampilan, dan pendampingan UMKM lokal.",
              tag: "Pemberdayaan",
            },
            {
              num: "02",
              title: "Literasi Keuangan",
              desc: "Sosialisasi dan edukasi pengelolaan keuangan personal untuk pelajar, mahasiswa, dan masyarakat umum.",
              tag: "Edukasi",
            },
            {
              num: "03",
              title: "GenBI Leadership Forum",
              desc: "Wadah pengembangan kepemimpinan dan soft skill melalui seminar, workshop, dan mentorship intensif.",
              tag: "Pengembangan",
            },
            {
              num: "04",
              title: "Aksi Sosial",
              desc: "Kegiatan kepedulian sosial meliputi bakti sosial, donasi, dan bantuan kemanusiaan untuk masyarakat terdampak.",
              tag: "Kemanusiaan",
            },
          ].map((p) => (
            <article key={p.num} className="reveal program-card bg-white group">
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <span className="font-display font-bold text-4xl sm:text-5xl text-gray-100 group-hover:text-tertiary-500 transition-colors">
                  {p.num}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-accent-900 mb-2 sm:mb-3">
                {p.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                <span className="font-body text-xs tracking-widest text-gray-400 uppercase">
                  {p.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}