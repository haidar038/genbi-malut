export default function Gallery() {
  return (
    <section
      id="galeri"
      className="py-16 sm:py-24 lg:py-32 bg-gray-100"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div>
            <span className="font-mono text-sm text-gray-400 tracking-widest">
              06
            </span>
            <h2
              id="gallery-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-accent-900 mt-2"
            >
              Hall of Fame
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-gray-500 max-w-md">
            Dokumentasi kegiatan dan momen bersejarah perjalanan GenBI Malut.
          </p>
        </div>
        <div className="masonry-grid">
          <div className="reveal masonry-item-1 bg-accent-800 flex items-center justify-center">
            <span className="font-display text-white text-xs sm:text-sm tracking-widest uppercase">
              Foto Kegiatan 1
            </span>
          </div>
          <div className="reveal masonry-item-2 bg-accent-700 flex items-center justify-center">
            <span className="font-display text-blue-400 text-xs sm:text-sm tracking-widest uppercase">
              Foto 2
            </span>
          </div>
          <div className="reveal masonry-item-3 bg-gray-300 flex items-center justify-center">
            <span className="font-display text-accent-900 text-xs sm:text-sm tracking-widest uppercase">
              Foto 3
            </span>
          </div>
          <div className="reveal masonry-item-4 bg-gray-400 flex items-center justify-center">
            <span className="font-display text-accent-900 text-xs sm:text-sm tracking-widest uppercase">
              Foto 4
            </span>
          </div>
          <div className="reveal masonry-item-5 bg-tertiary-500 flex items-center justify-center">
            <span className="font-display text-white text-xs sm:text-sm tracking-widest uppercase">
              Foto 5
            </span>
          </div>
          <div className="reveal masonry-item-6 bg-accent-900 flex items-center justify-center">
            <span className="font-display text-blue-400 text-xs sm:text-sm tracking-widest uppercase">
              Foto 6
            </span>
          </div>
          <div className="reveal masonry-item-7 bg-gray-500 flex items-center justify-center">
            <span className="font-display text-white text-xs sm:text-sm tracking-widest uppercase">
              Foto 7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}