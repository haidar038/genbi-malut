export default function Commissariats() {
  return (
    <section
      id="komisariat"
      className="py-16 sm:py-24 lg:py-32 bg-accent-900"
      aria-labelledby="comm-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-10 sm:mb-16">
          <span className="font-mono text-sm text-blue-300 tracking-widest">
            04
          </span>
          <h2
            id="comm-heading"
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mt-2"
          >
            Komisariat
          </h2>
          <p className="font-body text-blue-100 mt-3 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Tiga komisariat utama yang menjadi basis kegiatan dan pengembangan
            anggota GenBI Malut.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-accent-700">
          {[
            {
              name: "Universitas Khairun",
              short: "Unkhair",
              desc: "Komisariat terbesar dengan aktivitas akademik dan sosial yang intens. Pusat pengembangan riset dan inovasi pemuda.",
            },
            {
              name: "Universitas Muhammadiyah",
              short: "UMMU",
              desc: "Fokus pada pengembangan karakter berbasis nilai keagamaan dan kegiatan sosial kemasyarakatan.",
            },
            {
              name: "IAIN Ternate",
              short: "Institut Agama Islam Negeri",
              desc: "Pusat kajian keislaman dan pengembangan moderasi beragama di kalangan pemuda Maluku Utara.",
            },
          ].map((c) => (
            <article
              key={c.short}
              className="reveal py-8 sm:py-12 lg:py-16 lg:px-12 text-center lg:text-left group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent-800 group-hover:bg-tertiary-400 transition-colors mb-4 sm:mb-6">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-blue-100 group-hover:text-accent-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="square"
                    strokeWidth={1.5}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2">
                {c.name}
              </h3>
              <p className="font-display text-blue-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                {c.short}
              </p>
              <p className="font-body text-blue-100 text-sm leading-relaxed">
                {c.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}