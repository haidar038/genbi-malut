"use client";

import { useEffect, useRef, useState } from "react";

const Logo = () => (
  <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M188.214 74.2849C200.118 73.2616 220.337 75.1039 231.912 78.0673C262.737 85.9601 283.26 97.4902 300 124.124C283.845 107.109 269.715 104.09 247.455 108.041C260.271 123.066 263.672 137.335 261.029 156.458C259.15 163.544 257.081 169.706 253.282 176C253.719 116.549 185.088 93.6811 138 78.7367C150.625 76.7528 175.39 75.018 188.214 74.2849Z" fill="#0C4494" /><path d="M45.6136 203C63.4188 254.803 146.386 255.97 191 247.58C171.029 258.917 147.158 272.763 125.848 280.299C92.4132 292.941 51.2293 290.609 22 268.893C42.9842 277.652 59.4907 277.143 78.1288 263.196C66.7656 257.834 59.538 252.475 52.8844 241.48C46.8065 231.435 42.6486 214.536 45.6136 203Z" fill="#0C4494" /><path d="M166 272.228C222.894 255.26 228.964 183.627 227.303 134C247.259 178.079 267.145 223.079 248.651 271.866C247.251 275.563 242.209 286.603 239.631 289.162C237.682 292.65 233.62 296.941 230.852 300C233.288 294.898 234.582 291.739 236.525 286.488C240.809 270.042 238.811 261.269 230.843 246.116C225.586 253.468 221.423 258.793 213.615 263.723C199.181 272.838 182.678 275.021 166 272.228Z" fill="#0C4494" /><path d="M44 95.2363C51.5749 86.1953 61.4188 81.4946 72 77C66.3286 82.9363 62.5477 88.5699 59.0498 96.063C57.9922 98.3274 57.2151 100.859 56.1058 103C55.0603 101.249 56.905 98.8273 56.6843 98.3576C54.7471 94.2306 53.0406 94.5338 51.7398 89.4011C49.1325 91.145 46.4574 95.2459 44 95.2363Z" fill="#0C4494" /><path d="M39.055 246.191C42.0011 245.607 45.0541 246.378 47.3694 248.291C49.6851 250.204 51.0181 253.056 50.9998 256.059C50.9718 260.734 47.708 264.765 43.1411 265.766C37.7092 266.956 32.3496 263.486 31.2131 258.042C30.0766 252.599 33.6006 247.274 39.055 246.191Z" fill="#D52825" /><path d="M276.639 121.194C280.019 120.483 283.499 121.755 285.734 124.518C287.968 127.28 288.605 131.1 287.399 134.499C286.193 137.897 283.332 140.341 279.925 140.886C274.824 141.7 270.038 138.079 269.145 132.729C268.252 127.38 271.58 122.259 276.639 121.194Z" fill="#D52825" /><path d="M216.541 272.308C220.038 271.42 223.743 272.485 226.234 275.096C228.726 277.706 229.617 281.457 228.567 284.909C227.517 288.362 224.687 290.981 221.164 291.761C215.831 292.943 210.536 289.626 209.273 284.311C208.01 278.997 211.246 273.652 216.541 272.308Z" fill="#D52825" /><path d="M156.086 13.4152C161.378 11.8825 166.975 14.7258 168.572 19.7586C170.169 24.7909 167.16 30.0989 161.857 31.6013C156.578 33.0974 151.019 30.2531 149.428 25.2418C147.838 20.2305 150.815 14.941 156.086 13.4152Z" fill="#D52825" /><path d="M19.9805 86.1302C25.1698 85.2453 30.0547 88.9645 30.8807 94.4294C31.7063 99.8938 28.1588 105.025 22.9652 105.879C17.7926 106.729 12.9419 103.013 12.1193 97.5706C11.2971 92.1284 14.8128 87.0121 19.9805 86.1302Z" fill="#D52825" /><path fillRule="evenodd" clipRule="evenodd" d="M3 82.4214C3 82.4179 3 82.4249 3 82.4214C2.99781 82.2812 2.99544 82.1341 2.99307 82C2.98969 82.016 2.98641 82.0319 2.98304 82.0479C2.13143 86.1249 1.48112 90.8068 1 95" fill="#0C4494" /><path fillRule="evenodd" clipRule="evenodd" d="M143 210V184C156.631 181.385 170.299 179.212 184 177C182.059 178.637 180.014 180.37 177.897 182.163C166.958 191.431 153.405 202.122 143 210Z" fill="#0C4494" /><path fillRule="evenodd" clipRule="evenodd" d="M143 184V210L102 176L119.864 179.454L131.402 181.613L143 184Z" fill="#0C4494" /><path fillRule="evenodd" clipRule="evenodd" d="M143 153V179L102 172L102 153H143Z" fill="#D52825" /><path fillRule="evenodd" clipRule="evenodd" d="M143 153V179L184 172L184 153H143Z" fill="#D52825" /><path fillRule="evenodd" clipRule="evenodd" d="M143 143H219L214.947 149.947H205.827V151.931L205.826 153.332C205.825 154.327 205.822 155.321 205.811 158.726V159.87L205.812 160.401C205.826 169.803 205.826 170.056 207.672 174.052C207.6 174.42 207.558 174.689 207.526 174.894L207.522 174.917L207.494 175.093L207.474 175.204C207.448 175.337 207.42 175.428 207.372 175.508C207.293 175.639 207.161 175.739 206.898 175.94C206.774 176.034 206.62 176.151 206.43 176.304C206.576 177.003 206.838 178.023 207.142 179.207C208.187 183.285 209.73 189.306 208.809 190.836C206.338 192.489 202.457 192.534 200.511 189.976C198.968 187.948 201.29 180.493 202.49 178.736C202.573 176.971 201.966 176.216 201.475 175.606C200.741 174.694 200.267 174.104 202.748 170.937C203.337 170.186 203.048 163.75 202.86 159.56C202.832 158.945 202.807 158.379 202.787 157.886V155.901V149.947H143V143Z" fill="#D52825" /><path fillRule="evenodd" clipRule="evenodd" d="M68 143H143V150H72.0541L70.1647 146.738L68.0266 143.046L68 143Z" fill="#D52825" /><path fillRule="evenodd" clipRule="evenodd" d="M130.594 31.6874L130.538 31.8852L130.5 32.0198L130.496 32.032L130.493 32.0442L130.457 32.1676C129.281 36.3461 128.624 40.1894 128.191 44.6416C131.997 43.206 139.375 40.6378 143.499 40.7092C162.915 37.0069 183 49.1016 196 62.4488C185.107 58.1053 179.265 57.2262 167.579 57.3892L165.033 57.6956C120.283 63.3229 87.764 103.866 62 137C64.115 130.684 66.2668 122.618 67.8384 116.079C76.3309 80.7381 90.0543 42.5892 120.375 19.8595L120.406 19.8365C122.031 18.4229 123.625 17.1303 125.204 15.9448C136.322 7.59746 146.591 4.46538 160.229 0.305915L161.232 0C150.26 5.59457 141.908 11.43 135.945 20.6485C133.964 23.7121 132.246 27.1491 130.784 31.0751C130.755 31.1725 130.725 31.2689 130.694 31.3653L130.688 31.3859L130.679 31.4153L130.67 31.451L130.639 31.5479L130.62 31.6047L130.594 31.6874Z" fill="#0C4494" /><path d="M3.97796 94.5013C7.24182 110.393 12.5484 119.301 26.5911 128.496C27.03 128.787 27.4745 129.069 27.9241 129.343C28.2099 129.517 28.4979 129.689 28.7877 129.857C30.1071 119.347 35.0486 102.002 44.0144 95.2764C51.6857 86.2158 61.655 81.5043 72.371 77C66.6274 82.9494 62.7983 88.5956 59.2558 96.1049C58.7819 97.109 58.3636 98.1655 57.9471 99.2176C57.4224 100.543 56.9007 101.861 56.2744 103.057C54.3496 110.818 52.7166 118.741 52.4886 126.753C51.4903 161.839 68.6901 197.722 85 228C79.1406 222.872 73.251 218.084 67.4366 213.357C51.9586 200.773 37.0123 188.622 24.5829 171.639C9.51424 151.051 -3.35468 120.909 0.784532 95.0547C1.42844 90.9758 2.29879 86.4215 3.43854 82.4556L3.45197 82.409L3.46112 82.8145L3.47455 83.5009L3.49444 84.6704C3.54815 87.917 3.61602 91.9687 3.97796 94.5013Z" fill="#0C4494" /></svg>
);

const LogoWhite = () => (
  <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M226.621 134C246.356 178.079 266.02 223.079 247.733 271.866C246.347 275.563 241.361 286.603 238.812 289.162C236.885 292.65 232.868 296.941 230.131 300C232.54 294.898 233.82 291.739 235.741 286.487C239.977 270.042 238.001 261.269 230.121 246.116C224.924 253.468 220.806 258.793 213.085 263.724C198.812 272.838 182.492 275.021 165.999 272.229C222.261 255.26 228.264 183.627 226.621 134Z" fill="white" />
    <path d="M45.7532 203C63.6637 254.803 147.122 255.97 191.999 247.58C171.91 258.917 147.898 272.762 126.461 280.299C92.8289 292.941 51.4015 290.609 21.9993 268.894C43.1076 277.652 59.7119 277.143 78.4602 263.196C67.0299 257.833 59.7595 252.475 53.0667 241.479C46.9529 231.435 42.7707 214.536 45.7532 203Z" fill="white" />
    <path d="M183.999 172.27L142.999 179L100.999 172.27V154H183.999V172.27Z" fill="white" />
    <path d="M188.213 75.2822C200.118 74.2689 220.337 76.0929 231.911 79.0273C262.736 86.8427 283.259 98.2602 299.999 124.633C283.845 107.785 269.715 104.796 247.454 108.707C260.27 123.586 263.672 137.714 261.029 156.649C259.15 163.667 257.081 169.768 253.281 176C253.718 117.132 185.087 94.4884 137.999 79.6904C150.624 77.726 175.389 76.0081 188.213 75.2822Z" fill="white" />
    <path d="M156.085 12.415C161.378 10.8825 166.975 13.7261 168.572 18.7588C170.169 23.791 167.159 29.0992 161.857 30.6016C156.577 32.0975 151.018 29.2532 149.428 24.2422C147.837 19.2309 150.815 13.9409 156.085 12.415Z" fill="white" />
  </svg>
);

const divisions = [
  { num: "Divisi 01", title: "PUBSOS", subtitle: "Publikasi & Sosialisasi", desc: "Mengelola strategi komunikasi, media sosial, publikasi, dan sosialisasi program GenBI Malut kepada publik." },
  { num: "Divisi 02", title: "PENDIKBUD", subtitle: "Pendidikan & Kebudayaan", desc: "Mengembangkan program pendidikan, seminar akademik, dan pelestarian nilai budaya lokal Maluku Utara." },
  { num: "Divisi 03", title: "KEWIRAUSAHAAN", subtitle: "Entrepreneurship Development", desc: "Memfasilitasi program pelatihan bisnis, mentoring usaha, dan inkubasi ide kreatif untuk anggota." },
  { num: "Divisi 04", title: "PENGMAS", subtitle: "Pengabdian Masyarakat", desc: "Mengoordinasikan program pemberdayaan desa, literasi keuangan, dan kegiatan sosial masyarakat." },
  { num: "Divisi 05", title: "LINGKUP", subtitle: "Lingkungan Hidup", desc: "Menginisiasi program keberlanjutan lingkungan, penghijauan, dan edukasi kesadaran ekologi." },
];

const values = [
  { title: "Integritas", desc: "Menjunjung tinggi kejujuran, etika, dan tanggung jawab dalam setiap tindakan dan keputusan." },
  { title: "Kolaborasi", desc: "Membangun kerjasama yang sinergis antar anggota, komisariat, dan mitra untuk mencapai tujuan bersama." },
  { title: "Inovasi", desc: "Terus berinovasi dalam menciptakan program dan solusi yang relevan bagi tantangan zaman." },
  { title: "Dedikasi", desc: "Berkomitmen penuh dalam menjalankan setiap amanah dan tanggung jawab dengan sepenuh hati." },
  { title: "Keberlanjutan", desc: "Memastikan setiap program dan inisiatif memberikan dampak jangka panjang yang berkesinambungan." },
];

export default function Profil() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Array.from(els).indexOf(entry.target) % 4 * 100;
            setTimeout(() => entry.target.classList.add("visible"), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: "smooth" });
            setMobileMenuOpen(false);
          }
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link font-display text-sm tracking-wide">Lewati ke Konten Utama</a>

      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200" role="navigation" aria-label="Navigasi utama">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/" className="flex items-center gap-3" aria-label="GenBI Malut - Halaman Utama">
              <div className="w-9 h-9 sm:w-10 sm:h-10"><Logo /></div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-accent-900 text-base sm:text-lg tracking-tight">GenBI Malut</span>
              </div>
            </a>
            <div className="hidden lg:flex items-center gap-10">
              <a href="/" className="nav-link">Beranda</a>
              <a href="#sejarah" className="nav-link font-semibold text-accent-900">Profil</a>
              <a href="#pembina" className="nav-link">Pembina</a>
              <a href="#struktur-detail" className="nav-link">Struktur</a>
              <a href="#visi-misi" className="nav-link">Visi Misi</a>
              <a href="#nilai" className="nav-link">Nilai</a>
            </div>
            <button className="lg:hidden p-2 -mr-2" aria-expanded={mobileMenuOpen} aria-controls="mobile-menu" aria-label="Buka menu navigasi" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
        <div className={`lg:hidden bg-white border-t border-gray-200 ${mobileMenuOpen ? "" : "hidden"}`} id="mobile-menu" role="menu">
          <div className="px-6 py-6 space-y-4">
            <a href="/" className="block font-display font-medium text-accent-900 py-2" role="menuitem">Beranda</a>
            <a href="#sejarah" className="block font-display font-medium text-accent-900 py-2" role="menuitem">Profil</a>
            <a href="#pembina" className="block font-display font-medium text-accent-900 py-2" role="menuitem">Pembina</a>
            <a href="#struktur-detail" className="block font-display font-medium text-accent-900 py-2" role="menuitem">Struktur</a>
            <a href="#visi-misi" className="block font-display font-medium text-accent-900 py-2" role="menuitem">Visi Misi</a>
            <a href="#nilai" className="block font-display font-medium text-accent-900 py-2" role="menuitem">Nilai</a>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <section className="pt-16 sm:pt-20 bg-accent-900 relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="reveal">
                <span className="font-body text-xs sm:text-sm tracking-widest text-blue-300 uppercase">Generasi Baru Indonesia</span>
              </div>
              <h1 id="hero-heading" className="reveal font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-white mt-4 sm:mt-6">
                Profil <span className="text-tertiary-400">GenBI</span> <br />Maluku Utara
              </h1>
              <p className="reveal font-body text-base sm:text-lg lg:text-xl text-blue-100 max-w-xl leading-relaxed mt-6 sm:mt-8">
                Mengenal lebih dekat komunitas penerima beasiswa Bank Indonesia di Maluku Utara — siapa kami, apa yang kami perjuangkan, dan bagaimana kami berkontribusi bagi kemajuan daerah.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        </section>

        {/* Hero Photo */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="reveal hero-image-placeholder w-full aspect-21/9 sm:aspect-3/1 lg:aspect-4/1 rounded-lg shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg">
                <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-blue-400 rounded-full flex items-center justify-center bg-accent-900/20 mb-6">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <span className="font-display text-white text-sm sm:text-base tracking-widest uppercase font-medium">Foto Komunitas GenBI Malut</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sejarah */}
        <section id="sejarah" className="py-16 sm:py-24 lg:py-32 bg-white" aria-labelledby="history-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <div className="reveal">
                  <span className="font-mono text-sm text-gray-400 tracking-widest">01</span>
                  <h2 id="history-heading" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-accent-900 mt-2">Sejarah<br />GenBI Malut</h2>
                  <div className="w-16 h-1 bg-tertiary-500 mt-6" />
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="reveal space-y-6 sm:space-y-8">
                  <p className="drop-cap font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    GenBI Malut lahir dari visi Bank Indonesia untuk mencetak generasi muda yang tidak hanya unggul secara akademis, tetapi juga berkarakter dan peduli terhadap masyarakat. Pada tahun 2014, program beasiswa Bank Indonesia mulai menjangkau mahasiswa di wilayah Maluku Utara, melahirkan komunitas yang kelak dikenal sebagai GenBI Malut.
                  </p>
                  <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Sejak awal berdirinya, GenBI Malut telah menjadi wadah bagi mahasiswa berprestasi dari berbagai perguruan tinggi di Ternate dan sekitarnya. Dengan semangat kolaborasi dan dedikasi tinggi, para anggota aktif menginisiasi berbagai program yang berdampak langsung bagi masyarakat Maluku Utara.
                  </p>
                  <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Menjadi bagian dari jaringan nasional GenBI Indonesia, GenBI Malut terus memperluas jangkauan dan meningkatkan kualitas programnya, menjadikan komunitas ini sebagai salah satu kekuatan sosial yang diperhitungkan di kawasan Indonesia Timur.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                    <div>
                      <span className="font-display font-bold text-2xl sm:text-3xl text-tertiary-500">2014</span>
                      <p className="font-body text-sm sm:text-base text-gray-500 mt-1">Tahun Pendirian</p>
                    </div>
                    <div>
                      <span className="font-display font-bold text-2xl sm:text-3xl text-tertiary-500">3</span>
                      <p className="font-body text-sm sm:text-base text-gray-500 mt-1">Komisariat</p>
                    </div>
                    <div>
                      <span className="font-display font-bold text-2xl sm:text-3xl text-tertiary-500">5</span>
                      <p className="font-body text-sm sm:text-base text-gray-500 mt-1">Divisi Aktif</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pembina */}
        <section id="pembina" className="py-16 sm:py-24 lg:py-32 bg-gray-100" aria-labelledby="pembina-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="reveal flex items-center gap-4 mb-10 sm:mb-16">
              <span className="font-mono text-sm text-gray-400 tracking-widest">02</span>
              <div className="flex-1 h-px bg-gray-300" />
              <h2 id="pembina-heading" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-accent-900">Profil Pembina</h2>
            </div>
            <div className="reveal grid lg:grid-cols-12 gap-8 lg:gap-0">
              <div className="lg:col-span-5 lg:pr-16">
                <div className="w-full aspect-square sm:aspect-4/3 bg-accent-900 relative overflow-hidden max-w-md mx-auto lg:max-w-none">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-blue-400 rounded-full flex items-center justify-center bg-accent-800/50">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <span className="font-display text-blue-400 text-xs sm:text-sm tracking-widest uppercase mt-4">Foto Pembina</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-tertiary-500" />
                </div>
              </div>
              <div className="lg:col-span-7 lg:pl-16 flex flex-col justify-center">
                <span className="font-body text-xs tracking-widest text-tertiary-500 uppercase">Pembina GenBI Malut</span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-accent-900 mt-3 sm:mt-4">Perwakilan Bank Indonesia</h3>
                <p className="font-body text-sm sm:text-base text-gray-500 mt-2">Kantor Perwakilan Bank Indonesia Provinsi Maluku Utara</p>
                <div className="w-16 h-1 bg-tertiary-500 mt-6" />
                <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed mt-6">
                  Bank Indonesia sebagai institusi pembina berperan penting dalam membimbing dan mendukung seluruh kegiatan GenBI Malut. Melalui program beasiswa dan pendampingan intensif, BI berkomitmen mengembangkan potensi pemuda Maluku Utara agar menjadi generasi yang berdaya saing tinggi.
                </p>
                <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
                  Dukungan ini mencakup pembinaan akademik, pelatihan soft skill, pendanaan program pemberdayaan masyarakat, serta fasilitasi jaringan kolaborasi dengan berbagai pemangku kepentingan di wilayah Maluku Utara dan nasional.
                </p>
                <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
                  <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 border border-gray-200">
                    <span className="font-display font-bold text-accent-900 text-sm sm:text-base">Beasiswa Penuh</span>
                    <p className="font-body text-xs sm:text-sm text-gray-500 mt-1">Biaya pendidikan & hidup</p>
                  </div>
                  <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 border border-gray-200">
                    <span className="font-display font-bold text-accent-900 text-sm sm:text-base">Pendampingan</span>
                    <p className="font-body text-xs sm:text-sm text-gray-500 mt-1">Mentor & pengembangan diri</p>
                  </div>
                  <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 border border-gray-200">
                    <span className="font-display font-bold text-accent-900 text-sm sm:text-base">Jaringan Nasional</span>
                    <p className="font-body text-xs sm:text-sm text-gray-500 mt-1">Kolaborasi GenBI se-Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi Detail */}
        <section id="struktur-detail" className="py-16 sm:py-24 lg:py-32 bg-white" aria-labelledby="structure-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
              <div>
                <span className="font-mono text-sm text-gray-400 tracking-widest">03</span>
                <h2 id="structure-heading" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-accent-900 mt-2">Struktur Organisasi</h2>
              </div>
              <p className="font-body text-sm sm:text-base text-gray-500 max-w-md">Setiap divisi memiliki peran strategis dalam menjalankan misi GenBI Malut.</p>
            </div>
            {/* Ketua & Wakil */}
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <article className="reveal lg:col-span-7 bg-gray-100 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-accent-900 shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                  </div>
                  <div>
                    <span className="font-body text-xs tracking-widest text-tertiary-500 uppercase">Ketua Umum</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-accent-900 mt-2">Amelia Puspita Taufik</h3>
                    <p className="font-body text-gray-500 mt-1 text-sm sm:text-base">Mahasiswa Fakultas Hukum, Universitas Khairun</p>
                    <p className="font-body text-gray-400 text-sm mt-4 leading-relaxed">Memimpin dengan visi kolaboratif dan fokus pada pemberdayaan pemuda melalui program-program berdampak nyata.</p>
                  </div>
                </div>
              </article>
              <article className="reveal lg:col-span-5 bg-gray-100 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent-900 shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                  </div>
                  <div>
                    <span className="font-body text-xs tracking-widest text-tertiary-500 uppercase">Wakil Ketua</span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-accent-900 mt-2">Bagus Muhammad</h3>
                    <p className="font-body text-gray-500 text-sm mt-1">Mahasiswa Program Studi Manajemen, UMMU</p>
                  </div>
                </div>
              </article>
            </div>
            {/* Divisions Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200">
              {divisions.map((d) => (
                <article key={d.num} className="reveal program-card bg-white group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-900 flex items-center justify-center text-blue-300 mb-4 sm:mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <span className="font-display font-bold text-tertiary-500 text-xs">{d.num}</span>
                  <h4 className="font-display font-bold text-accent-900 mt-1 text-sm sm:text-base">{d.title}</h4>
                  <p className="font-body text-gray-400 text-xs sm:text-sm mt-1">{d.subtitle}</p>
                  <p className="font-body text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">{d.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section id="visi-misi" className="py-16 sm:py-24 lg:py-32 bg-gray-100" aria-labelledby="vision-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="reveal flex items-center gap-4 mb-10 sm:mb-16">
              <span className="font-mono text-sm text-gray-400 tracking-widest">04</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-0">
              <div className="lg:col-span-7 lg:pr-16 lg:border-r border-gray-300">
                <div className="reveal">
                  <h2 id="vision-heading" className="font-display font-bold text-sm tracking-widest text-gray-500 uppercase mb-4 sm:mb-6">Visi</h2>
                  <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-accent-900 leading-tight">
                    Menjadi komunitas pemuda terdepan dalam pengembangan intelektual, karakter, dan kontribusi sosial untuk Indonesia timur.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-16">
                <div className="reveal">
                  <h3 className="font-display font-bold text-sm tracking-widest text-gray-500 uppercase mb-6 sm:mb-8">Misi</h3>
                  <ul className="space-y-4 sm:space-y-6">
                    {[
                      "Mengembangkan kapasitas kepemimpinan dan keilmuan anggota melalui program pelatihan dan mentorship.",
                      "Menjalankan program pemberdayaan masyarakat yang berdampak nyata dan berkelanjutan.",
                      "Membangun jaringan kolaborasi dengan institusi pendidikan, pemerintah, dan sektor swasta.",
                      "Menjadi agen perubahan yang menginspirasi generasi muda Maluku Utara.",
                    ].map((text, i) => (
                      <li key={i} className="flex gap-3 sm:gap-4">
                        <span className="font-display font-bold text-tertiary-500 text-lg shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nilai-Nilai */}
        <section id="nilai" className="py-16 sm:py-24 lg:py-32 bg-white" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="reveal text-center mb-10 sm:mb-16">
              <span className="font-mono text-sm text-gray-400 tracking-widest">05</span>
              <h2 id="values-heading" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-accent-900 mt-2">Nilai-Nilai Organisasi</h2>
              <p className="font-body text-gray-500 mt-3 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base">Prinsip dasar yang menjadi fondasi setiap langkah dan kebijakan GenBI Malut.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              {values.map((v, i) => (
                <article key={v.title} className="reveal text-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-900 group-hover:bg-tertiary-500 mx-auto flex items-center justify-center text-blue-300 group-hover:text-white transition-colors mb-4 sm:mb-6">
                    <span className="font-display font-bold text-xl sm:text-2xl">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display font-bold text-accent-900 text-base sm:text-lg">{v.title}</h3>
                  <p className="font-body text-gray-500 text-sm mt-2 leading-relaxed">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 lg:py-32 bg-accent-900" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="reveal grid lg:grid-cols-12 gap-8 lg:gap-0">
              <div className="lg:col-span-8 lg:pr-16">
                <span className="font-mono text-sm text-blue-300 tracking-widest">06</span>
                <h2 id="cta-heading" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-white mt-2 leading-tight">Bergabung Bersama<br />GenBI Malut</h2>
                <p className="font-body text-base sm:text-lg text-blue-100 mt-4 sm:mt-6 max-w-lg">Jadilah bagian dari komunitas pemuda berprestasi yang berkontribusi untuk Maluku Utara dan Indonesia.</p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4 lg:justify-end">
                <a href="https://instagram.com/genbimalut" target="_blank" rel="noopener noreferrer" className="bg-white text-accent-900 px-8 py-4 font-display font-semibold text-sm tracking-widest uppercase text-center hover:bg-tertiary-500 hover:text-white transition-colors">Ikuti Instagram</a>
                <a href="mailto:genbimalut@gmail.com" className="bg-transparent border border-white text-white px-8 py-4 font-display font-semibold text-sm tracking-widest uppercase text-center hover:bg-white hover:text-accent-900 transition-colors">Hubungi Kami</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-accent-900 py-12 sm:py-16 border-t border-accent-800" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-0">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10">
                  <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M226.621 134C246.356 178.079 266.02 223.079 247.733 271.866C246.347 275.563 241.361 286.603 238.812 289.162C236.885 292.65 232.868 296.941 230.131 300C232.54 294.898 233.82 291.739 235.741 286.487C239.977 270.042 238.001 261.269 230.121 246.116C224.924 253.468 220.806 258.793 213.085 263.724C198.812 272.838 182.492 275.021 165.999 272.229C222.261 255.26 228.264 183.627 226.621 134ZM216.786 273.292C219.934 272.449 223.268 273.461 225.51 275.941C227.752 278.421 228.555 281.984 227.61 285.264C226.664 288.544 224.118 291.032 220.948 291.773C216.147 292.896 211.382 289.745 210.245 284.695C209.109 279.647 212.021 274.569 216.786 273.292ZM45.7532 203C63.6637 254.803 147.122 255.97 191.999 247.58C171.91 258.917 147.898 272.762 126.461 280.299C92.8289 292.941 51.4015 290.609 21.9993 268.894C43.1076 277.652 59.7119 277.143 78.4602 263.196C67.0299 257.833 59.7595 252.475 53.0667 241.479C46.9529 231.435 42.7707 214.536 45.7532 203ZM38.8596 245.201C42.1003 244.587 45.4593 245.397 48.0061 247.405C50.5533 249.414 52.0194 252.409 51.9993 255.562C51.9682 260.471 48.3781 264.703 43.3547 265.754C37.3796 267.004 31.4838 263.36 30.2336 257.645C28.9835 251.929 32.8601 246.338 38.8596 245.201ZM72.3704 76C66.6267 81.9887 62.7976 87.6724 59.2551 95.2314C58.7813 96.2422 58.363 97.3062 57.9465 98.3652C57.4221 99.6991 57.4991 99.1532 56.2737 102.23C54.349 110.042 52.7165 118.018 52.4885 126.083C51.4904 161.401 68.6895 197.522 84.9993 228C79.1399 222.838 73.2502 218.018 67.4358 213.26C51.9579 200.593 37.0115 188.361 24.5823 171.267C9.51365 150.542 -3.35458 120.201 0.784424 94.1748C1.4283 90.069 2.29807 85.4842 3.43774 81.4922L3.45142 81.4453L3.46021 81.8535L3.47388 82.5439L3.49048 83.5381C3.64646 83.0321 3.80779 82.5333 3.97388 82.0439C3.99306 82.0293 3.99599 82.0147 3.9895 82C3.99306 82.1237 3.99599 82.2594 3.99927 82.3887V82.3916L3.50415 84.3037C3.55718 87.4621 3.63706 91.2173 3.97778 93.6172C7.24164 109.614 12.5484 118.581 26.5911 127.837C27.0299 128.13 27.4746 128.415 27.9241 128.69C28.2098 128.866 28.4977 129.038 28.7874 129.207C30.1068 118.628 36.4995 102.675 44.0139 94.3975C51.6852 85.2769 61.6544 80.5342 72.3704 76ZM119.299 179.454L131.118 181.612L142.999 184C156.63 181.385 170.299 179.212 183.999 177C182.058 178.637 180.014 180.37 177.897 182.163C166.957 191.431 153.404 202.122 142.999 210L100.999 176L119.299 179.454ZM215.893 150.23H206.653V153.754C206.652 154.789 206.648 155.825 206.637 159.368V160.56L206.638 161.111C206.652 170.896 206.653 171.161 208.523 175.319C208.45 175.702 208.407 175.983 208.374 176.195L208.37 176.22L208.342 176.403L208.322 176.519C208.295 176.657 208.267 176.752 208.218 176.835C208.139 176.971 208.005 177.076 207.739 177.284C207.613 177.382 207.457 177.504 207.264 177.663C207.413 178.391 207.677 179.452 207.985 180.686C209.044 184.929 210.608 191.195 209.675 192.788C207.171 194.508 203.239 194.556 201.267 191.894C199.704 189.783 202.057 182.023 203.272 180.194C203.356 178.357 202.742 177.571 202.244 176.937C201.501 175.987 201.02 175.373 203.533 172.078C204.131 171.296 203.837 164.597 203.647 160.236C203.619 159.596 203.593 159.007 203.573 158.493V150.23H142.999V150H72.054L70.1643 146.738L68.0256 143.046L67.9993 143H219.999L215.893 150.23ZM183.999 172.27L142.999 179L100.999 172.27V154H183.999V172.27ZM188.213 75.2822C200.118 74.2689 220.337 76.0929 231.911 79.0273C262.736 86.8427 283.259 98.2602 299.999 124.633C283.845 107.785 269.715 104.796 247.454 108.707C260.27 123.586 263.672 137.714 261.029 156.649C259.15 163.667 257.081 169.768 253.281 176C253.718 117.132 185.087 94.4884 137.999 79.6904C150.624 77.726 175.389 76.0081 188.213 75.2822ZM277.237 121.185C280.438 120.509 283.736 121.717 285.853 124.342C287.969 126.966 288.573 130.596 287.431 133.824C286.288 137.053 283.577 139.375 280.349 139.892C275.516 140.665 270.983 137.224 270.137 132.143C269.291 127.061 272.443 122.196 277.237 121.185ZM161.49 0C150.601 5.63533 142.311 11.5132 136.393 20.7988C134.426 23.8847 132.722 27.3472 131.271 31.3018C131.242 31.3999 131.211 31.4976 131.181 31.5947L131.175 31.6152L131.166 31.6445L131.157 31.6807L131.126 31.7783L131.107 31.835L131.082 31.9189L131.026 32.1182L130.988 32.2539L130.985 32.2656L130.981 32.2783L130.946 32.4023C129.778 36.6114 129.126 40.4831 128.697 44.9678C132.474 43.5217 139.797 40.9349 143.89 41.0068C163.161 37.2775 183.096 49.4598 195.999 62.9043C185.188 58.5292 179.389 57.6434 167.79 57.8076L165.263 58.1172C120.847 63.7858 88.571 104.624 62.9993 138C65.0985 131.638 67.2344 123.513 68.7942 116.927C77.2234 81.3276 90.8447 42.9005 120.939 20.0049L120.969 19.9814C122.582 18.5576 124.165 17.2556 125.732 16.0615C136.767 7.65332 146.959 4.49839 160.495 0.308594L161.49 0ZM19.5598 85.1299C24.4759 84.2449 29.1044 87.9648 29.887 93.4297C30.6688 98.8938 27.3079 104.025 22.3879 104.879C17.4876 105.728 12.8919 102.013 12.1125 96.5703C11.3339 91.1282 14.6642 86.0118 19.5598 85.1299ZM156.085 12.415C161.378 10.8825 166.975 13.7261 168.572 18.7588C170.169 23.791 167.159 29.0992 161.857 30.6016C156.577 32.0975 151.018 29.2532 149.428 24.2422C147.837 19.2309 150.815 13.9409 156.085 12.415Z" fill="white" /></svg>
                </div>
                <span className="font-display font-bold text-white text-lg tracking-tight">GenBI Malut</span>
              </div>
              <p className="font-body text-blue-400 text-sm leading-relaxed max-w-xs">Generasi Baru Indonesia <br /> Provinsi Maluku Utara</p>
            </div>
            <div className="lg:col-span-4 lg:pl-8">
              <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-4">Navigasi</h3>
              <ul className="space-y-3">
                <li><a href="/" className="font-body text-blue-400 text-sm hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#sejarah" className="font-body text-blue-400 text-sm hover:text-white transition-colors">Profil</a></li>
                <li><a href="#pembina" className="font-body text-blue-400 text-sm hover:text-white transition-colors">Pembina</a></li>
                <li><a href="#struktur-detail" className="font-body text-blue-400 text-sm hover:text-white transition-colors">Struktur</a></li>
              </ul>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-4">Kontak</h3>
              <p className="font-body text-blue-400 text-sm">genbimalut@gmail.com</p>
              <p className="font-body text-blue-400 text-sm mt-1">Ternate, Maluku Utara</p>
              <div className="flex gap-4 mt-4 sm:mt-6 lg:justify-end">
                <a href="https://instagram.com/genbimalut" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-tertiary-500 transition-colors" aria-label="Instagram GenBI Malut">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-accent-800">
            <p className="font-body text-blue-400 text-sm text-center">GenBI Malut 2026. Didukung oleh Bank Indonesia.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
