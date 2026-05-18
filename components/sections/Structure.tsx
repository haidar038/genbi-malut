export default function Structure() {
  return (
    <section
      id="struktur"
      className="py-16 sm:py-24 lg:py-32 bg-white"
      aria-labelledby="structure-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex items-center gap-4 mb-10 sm:mb-16">
          <span className="font-mono text-sm text-gray-400 tracking-widest">
            05
          </span>
          <div className="flex-1 h-px bg-gray-200" />
          <h2
            id="structure-heading"
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-accent-900"
          >
            Struktur Organisasi
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <article className="reveal lg:col-span-7 bg-gray-100 p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-accent-900 shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-body text-xs tracking-widest text-tertiary-500 uppercase">
                  Ketua Umum
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-accent-900 mt-2">
                  Amelia Puspita Taufik
                </h3>
                <p className="font-body text-gray-500 mt-1 text-sm sm:text-base">
                  Mahasiswa Fakultas Hukum, Universitas Khairun
                </p>
                <p className="font-body text-gray-400 text-sm mt-4 leading-relaxed">
                  Memimpin dengan visi kolaboratif dan fokus pada pemberdayaan
                  pemuda melalui program-program berdampak nyata.
                </p>
              </div>
            </div>
          </article>
          <article className="reveal lg:col-span-5 bg-gray-100 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent-900 shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-body text-xs tracking-widest text-tertiary-500 uppercase">
                  Wakil Ketua
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-accent-900 mt-2">
                  Bagus Muhammad
                </h3>
                <p className="font-body text-gray-500 text-sm mt-1">
                  Mahasiswa Program Studi Manajemen, UMMU
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {[
            {
              num: "Divisi 01",
              title: "PUBSOS",
              subtitle: "Publikasi & Sosialisasi",
              desc: "Mengelola strategi komunikasi, media sosial, publikasi, dan sosialisasi program GenBI Malut kepada publik.",
            },
            {
              num: "Divisi 02",
              title: "PENDIKBUD",
              subtitle: "Pendidikan & Kebudayaan",
              desc: "Mengembangkan program pendidikan, seminar akademik, dan pelestarian nilai budaya lokal Maluku Utara.",
            },
            {
              num: "Divisi 03",
              title: "KEWIRAUSAHAAN",
              subtitle: "Entrepreneurship Development",
              desc: "Memfasilitasi program pelatihan bisnis, mentoring usaha, dan inkubasi ide kreatif untuk anggota.",
            },
            {
              num: "Divisi 04",
              title: "PENGMAS",
              subtitle: "Pengabdian Masyarakat",
              desc: "Mengoordinasikan program pemberdayaan desa, literasi keuangan, dan kegiatan sosial masyarakat.",
            },
            {
              num: "Divisi 05",
              title: "LINGKUP",
              subtitle: "Lingkungan Hidup",
              desc: "Menginisiasi program keberlanjutan lingkungan, penghijauan, dan edukasi kesadaran ekologi.",
            },
          ].map((d) => (
            <div key={d.num} className="reveal py-4 lg:px-6">
              <span className="font-display font-bold text-tertiary-500 text-sm">
                {d.num}
              </span>
              <h4 className="font-display font-bold text-accent-900 mt-1 text-sm sm:text-base">
                {d.title}
              </h4>
              <p className="font-body text-gray-400 text-xs sm:text-sm mt-1">
                {d.subtitle}
              </p>
              <p className="font-body text-gray-500 text-xs sm:text-sm mt-2">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}