export default function About() {
  return (
    <section
      id="tentang"
      className="py-16 sm:py-24 lg:py-32 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <div className="reveal">
              <span className="font-mono text-sm text-gray-400 tracking-widest">
                01
              </span>
              <h2
                id="about-heading"
                className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-accent-900 mt-2"
              >
                Tentang
                <br />
                GenBI Malut
              </h2>
              <div className="w-16 h-1 bg-tertiary-500 mt-6" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="reveal space-y-6 sm:space-y-8">
              <p className="drop-cap font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                GenBI Malut adalah komunitas penerima Beasiswa Bank Indonesia di
                wilayah Maluku Utara yang berkomitmen mewujudkan generasi pemuda
                berintelektual tinggi, berkarakter kuat, dan berjiwa sosial.
                Didirikan sebagai wadah aspirasi dan pengembangan kapasitas,
                GenBI Malut menjadi jembatan antara akademisi, masyarakat, dan
                industri.
              </p>
              <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Sejak berdiri, komunitas ini telah melahirkan berbagai inisiatif
                strategis mulai dari program pemberdayaan desa binaan, literasi
                keuangan untuk pelajar dan UMKM, hingga forum kepemimpinan
                pemuda. Dengan semangat kolaboratif, GenBI Malut terus
                berkontribusi nyata bagi kemajuan daerah.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                <div>
                  <span className="font-display font-bold text-2xl sm:text-3xl text-tertiary-500">
                    2014
                  </span>
                  <p className="font-body text-sm sm:text-base text-gray-500 mt-1">
                    Tahun Pendirian
                  </p>
                </div>
                <div>
                  <span className="font-display font-bold text-2xl sm:text-3xl text-tertiary-500">
                    Bank Indonesia
                  </span>
                  <p className="font-body text-sm sm:text-base text-gray-500 mt-1">
                    Institusi Pembina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}