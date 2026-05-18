export default function VisionMission() {
  return (
    <section
      id="visi-misi"
      className="py-16 sm:py-24 lg:py-32 bg-gray-100"
      aria-labelledby="vision-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex items-center gap-4 mb-10 sm:mb-16">
          <span className="font-mono text-sm text-gray-400 tracking-widest">
            02
          </span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-0">
          <div className="lg:col-span-7 lg:pr-16 lg:border-r border-gray-300">
            <div className="reveal">
              <h2
                id="vision-heading"
                className="font-display font-bold text-sm tracking-widest text-gray-500 uppercase mb-4 sm:mb-6"
              >
                Visi
              </h2>
              <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-accent-900 leading-tight">
                Menjadi komunitas pemuda terdepan dalam pengembangan
                intelektual, karakter, dan kontribusi sosial untuk Indonesia
                timur.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-16">
            <div className="reveal">
              <h3 className="font-display font-bold text-sm tracking-widest text-gray-500 uppercase mb-6 sm:mb-8">
                Misi
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Mengembangkan kapasitas kepemimpinan dan keilmuan anggota melalui program pelatihan dan mentorship.",
                  "Menjalankan program pemberdayaan masyarakat yang berdampak nyata dan berkelanjutan.",
                  "Membangun jaringan kolaborasi dengan institusi pendidikan, pemerintah, dan sektor swasta.",
                  "Menjadi agen perubahan yang menginspirasi generasi muda Maluku Utara.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 sm:gap-4">
                    <span className="font-display font-bold text-tertiary-500 text-lg shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}