export default function CTA() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-white"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal grid lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="lg:col-span-8 lg:pr-16">
            <span className="font-mono text-sm text-gray-400 tracking-widest">
              07
            </span>
            <h2
              id="cta-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-accent-900 mt-2 leading-tight"
            >
              Bergabung Bersama
              <br />
              GenBI Malut
            </h2>
            <p className="font-body text-base sm:text-lg text-gray-500 mt-4 sm:mt-6 max-w-lg">
              Jadilah bagian dari komunitas pemuda berprestasi yang berkontribusi
              untuk Maluku Utara dan Indonesia.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 lg:justify-end">
            <a
              href="https://instagram.com/genbimalut"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Ikuti Instagram
            </a>
            <a href="mailto:genbimalut@gmail.com" className="btn-outline text-center">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}