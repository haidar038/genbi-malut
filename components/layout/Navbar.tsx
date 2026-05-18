"use client";

import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      role="navigation"
      aria-label="Navigasi utama"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="GenBI Malut - Halaman Utama"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M188.214 74.2849C200.118 73.2616 220.337 75.1039 231.912 78.0673C262.737 85.9601 283.26 97.4902 300 124.124C283.845 107.109 269.715 104.09 247.455 108.041C260.271 123.066 263.672 137.335 261.029 156.458C259.15 163.544 257.081 169.706 253.282 176C253.719 116.549 185.088 93.6811 138 78.7367C150.625 76.7528 175.39 75.018 188.214 74.2849Z"
                  fill="#0C4494"
                />
                <path
                  d="M45.6136 203C63.4188 254.803 146.386 255.97 191 247.58C171.029 258.917 147.158 272.763 125.848 280.299C92.4132 292.941 51.2293 290.609 22 268.893C42.9842 277.652 59.4907 277.143 78.1288 263.196C66.7656 257.834 59.538 252.475 52.8844 241.48C46.8065 231.435 42.6486 214.536 45.6136 203Z"
                  fill="#0C4494"
                />
                <path
                  d="M166 272.228C222.894 255.26 228.964 183.627 227.303 134C247.259 178.079 267.145 223.079 248.651 271.866C247.251 275.563 242.209 286.603 239.631 289.162C237.682 292.65 233.62 296.941 230.852 300C233.288 294.898 234.582 291.739 236.525 286.488C240.809 270.042 238.811 261.269 230.843 246.116C225.586 253.468 221.423 258.793 213.615 263.723C199.181 272.838 182.678 275.021 166 272.228Z"
                  fill="#0C4494"
                />
                <path
                  d="M44 95.2363C51.5749 86.1953 61.4188 81.4946 72 77C66.3286 82.9363 62.5477 88.5699 59.0498 96.063C57.9922 98.3274 57.2151 100.859 56.1058 103C55.0603 101.249 56.905 98.8273 56.6843 98.3576C54.7471 94.2306 53.0406 94.5338 51.7398 89.4011C49.1325 91.145 46.4574 95.2459 44 95.2363Z"
                  fill="#0C4494"
                />
                <path
                  d="M39.055 246.191C42.0011 245.607 45.0541 246.378 47.3694 248.291C49.6851 250.204 51.0181 253.056 50.9998 256.059C50.9718 260.734 47.708 264.765 43.1411 265.766C37.7092 266.956 32.3496 263.486 31.2131 258.042C30.0766 252.599 33.6006 247.274 39.055 246.191Z"
                  fill="#D52825"
                />
                <path
                  d="M276.639 121.194C280.019 120.483 283.499 121.755 285.734 124.518C287.968 127.28 288.605 131.1 287.399 134.499C286.193 137.897 283.332 140.341 279.925 140.886C274.824 141.7 270.038 138.079 269.145 132.729C268.252 127.38 271.58 122.259 276.639 121.194Z"
                  fill="#D52825"
                />
                <path
                  d="M216.541 272.308C220.038 271.42 223.743 272.485 226.234 275.096C228.726 277.706 229.617 281.457 228.567 284.909C227.517 288.362 224.687 290.981 221.164 291.761C215.831 292.943 210.536 289.626 209.273 284.311C208.01 278.997 211.246 273.652 216.541 272.308Z"
                  fill="#D52825"
                />
                <path
                  d="M156.086 13.4152C161.378 11.8825 166.975 14.7258 168.572 19.7586C170.169 24.7909 167.16 30.0989 161.857 31.6013C156.578 33.0974 151.019 30.2531 149.428 25.2418C147.838 20.2305 150.815 14.941 156.086 13.4152Z"
                  fill="#D52825"
                />
                <path
                  d="M19.9805 86.1302C25.1698 85.2453 30.0547 88.9645 30.8807 94.4294C31.7063 99.8938 28.1588 105.025 22.9652 105.879C17.7926 106.729 12.9419 103.013 12.1193 97.5706C11.2971 92.1284 14.8128 87.0121 19.9805 86.1302Z"
                  fill="#D52825"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 82.4214C3 82.4179 3 82.4249 3 82.4214C2.99781 82.2812 2.99544 82.1341 2.99307 82C2.98969 82.016 2.98641 82.0319 2.98304 82.0479C2.13143 86.1249 1.48112 90.8068 1 95"
                  fill="#0C4494"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M143 210V184C156.631 181.385 170.299 179.212 184 177C182.059 178.637 180.014 180.37 177.897 182.163C166.958 191.431 153.405 202.122 143 210Z"
                  fill="#0C4494"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M143 184V210L102 176L119.864 179.454L131.402 181.613L143 184Z"
                  fill="#0C4494"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M143 153V179L102 172L102 153H143Z"
                  fill="#D52825"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M143 153V179L184 172L184 153H143Z"
                  fill="#D52825"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M143 143H219L214.947 149.947H205.827V151.931L205.826 153.332C205.825 154.327 205.822 155.321 205.811 158.726V159.87L205.812 160.401C205.826 169.803 205.826 170.056 207.672 174.052C207.6 174.42 207.558 174.689 207.526 174.894L207.522 174.917L207.494 175.093L207.474 175.204C207.448 175.337 207.42 175.428 207.372 175.508C207.293 175.639 207.161 175.739 206.898 175.94C206.774 176.034 206.62 176.151 206.43 176.304C206.576 177.003 206.838 178.023 207.142 179.207C208.187 183.285 209.73 189.306 208.809 190.836C206.338 192.489 202.457 192.534 200.511 189.976C198.968 187.948 201.29 180.493 202.49 178.736C202.573 176.971 201.966 176.216 201.475 175.606C200.741 174.694 200.267 174.104 202.748 170.937C203.337 170.186 203.048 163.75 202.86 159.56C202.832 158.945 202.807 158.379 202.787 157.886V155.901V149.947H143V143Z"
                  fill="#D52825"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M68 143H143V150H72.0541L70.1647 146.738L68.0266 143.046L68 143Z"
                  fill="#D52825"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M130.594 31.6874L130.538 31.8852L130.5 32.0198L130.496 32.032L130.493 32.0442L130.457 32.1676C129.281 36.3461 128.624 40.1894 128.191 44.6416C131.997 43.206 139.375 40.6378 143.499 40.7092C162.915 37.0069 183 49.1016 196 62.4488C185.107 58.1053 179.265 57.2262 167.579 57.3892L165.033 57.6956C120.283 63.3229 87.764 103.866 62 137C64.115 130.684 66.2668 122.618 67.8384 116.079C76.3309 80.7381 90.0543 42.5892 120.375 19.8595L120.406 19.8365C122.031 18.4229 123.625 17.1303 125.204 15.9448C136.322 7.59746 146.591 4.46538 160.229 0.305915L161.232 0C150.26 5.59457 141.908 11.43 135.945 20.6485C133.964 23.7121 132.246 27.1491 130.784 31.0751C130.755 31.1725 130.725 31.2689 130.694 31.3653L130.688 31.3859L130.679 31.4153L130.67 31.451L130.639 31.5479L130.62 31.6047L130.594 31.6874Z"
                  fill="#0C4494"
                />
                <path
                  d="M3.97796 94.5013C7.24182 110.393 12.5484 119.301 26.5911 128.496C27.03 128.787 27.4745 129.069 27.9241 129.343C28.2099 129.517 28.4979 129.689 28.7877 129.857C30.1071 119.347 35.0486 102.002 44.0144 95.2764C51.6857 86.2158 61.655 81.5043 72.371 77C66.6274 82.9494 62.7983 88.5956 59.2558 96.1049C58.7819 97.109 58.3636 98.1655 57.9471 99.2176C57.4224 100.543 56.9007 101.861 56.2744 103.057C54.3496 110.818 52.7166 118.741 52.4886 126.753C51.4903 161.839 68.6901 197.722 85 228C79.1406 222.872 73.251 218.084 67.4366 213.357C51.9586 200.773 37.0123 188.622 24.5829 171.639C9.51424 151.051 -3.35468 120.909 0.784532 95.0547C1.42844 90.9758 2.29879 86.4215 3.43854 82.4556L3.45197 82.409L3.46112 82.8145L3.47455 83.5009L3.49444 84.6704C3.54815 87.917 3.61602 91.9687 3.97796 94.5013Z"
                  fill="#0C4494"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-accent-900 text-base sm:text-lg tracking-tight">
                GenBI Malut
              </span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-10">
            <a href="/profil" className="nav-link">
              Profil
            </a>
            <a href="#tentang" className="nav-link">
              Tentang
            </a>
            <a href="#visi-misi" className="nav-link">
              Visi Misi
            </a>
            <a href="#program" className="nav-link">
              Program
            </a>
            <a href="#struktur" className="nav-link">
              Struktur
            </a>
          </div>
          <button
            className="lg:hidden p-2 -mr-2"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Buka menu navigasi"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden bg-white border-t border-gray-200 ${mobileMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
        role="menu"
      >
        <div className="px-6 py-6 space-y-4">
          <a
            href="/profil"
            className="block font-display font-medium text-accent-900 py-2"
            role="menuitem"
          >
            Profil
          </a>
          <a
            href="#tentang"
            className="block font-display font-medium text-accent-900 py-2"
            role="menuitem"
          >
            Tentang
          </a>
          <a
            href="#visi-misi"
            className="block font-display font-medium text-accent-900 py-2"
            role="menuitem"
          >
            Visi Misi
          </a>
          <a
            href="#program"
            className="block font-display font-medium text-accent-900 py-2"
            role="menuitem"
          >
            Program
          </a>
          <a
            href="#komisariat"
            className="block font-display font-medium text-accent-900 py-2"
            role="menuitem"
          >
            Komisariat
          </a>
          <a
            href="#struktur"
            className="block font-display font-medium text-accent-900 py-2"
            role="menuitem"
          >
            Struktur
          </a>
          <a
            href="#galeri"
            className="block font-display font-medium text-accent-900 py-2"
            role="menuitem"
          >
            Galeri
          </a>
        </div>
      </div>
    </nav>
  );
}