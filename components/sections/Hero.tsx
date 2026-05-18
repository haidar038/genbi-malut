export default function Hero() {
  return (
    <section
      className="min-h-screen pt-16 sm:pt-20 grid-lines relative"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] items-center py-12 sm:py-16 lg:py-0">
          <div className="flex flex-col justify-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="reveal">
                <span className="font-body text-xs sm:text-sm tracking-widest text-gray-400 uppercase">
                  Generasi Baru Indonesia
                </span>
              </div>
              <h1
                id="hero-heading"
                className="reveal font-display font-extrabold text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[0.95]"
              >
                Membangun <br />
                <span className="text-tertiary-500">Generasi Emas</span> <br />
                <span className="text-accent-900">Maluku Utara</span>
              </h1>
              <p className="reveal font-body text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
                GenBI Maluku Utara adalah komunitas penerima beasiswa Bank
                Indonesia yang berkomitmen mengembangkan potensi mahasiswa
                melalui program pemberdayaan, literasi keuangan, dan pengabdian
                masyarakat.
              </p>
              <div className="reveal flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                <a href="#tentang" className="btn-primary">
                  Kenali Kami
                </a>
                <a href="#program" className="btn-outline">
                  Lihat Program
                </a>
              </div>
            </div>
          </div>
          {/* Image - hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <div className="reveal-right w-full max-w-sm aspect-square hero-image-placeholder rounded-lg shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg">
                <div className="w-32 h-32 border-2 border-blue-400 rounded-full mx-auto mb-8 flex items-center justify-center bg-accent-900/20">
                  <svg
                    className="w-16 h-16 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="font-display text-white text-sm tracking-widest uppercase font-medium">
                  Foto Komunitas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-3">
          <span className="font-body text-xs tracking-widest text-gray-400 uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gray-300" />
        </div>
      </div>
    </section>
  );
}