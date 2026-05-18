# Software Requirements Specification (SRS)

## Website GenBI Maluku Utara

**1. Kebutuhan Perangkat Lunak (Tech Stack)**

-   **Framework Frontend:** Next.js (React).

-   **Styling:** Tailwind CSS.

-   **Font Management:** `public/fonts/neue-power-webfont` (Neue Power) dan `next/font/google` (Poppins).

-   **AI Integration:** LLM (OpenAI API/Gemini) dengan implementasi **System Prompting** yang membatasi konteks (hanya menjawab domain pengetahuan "GenBI Maluku Utara", mencakup beasiswa BI, program kerja, sejarah, dan komisariat Unkhair, UMMU, IAIN).

-   **Deployment:** Vercel.

**2. Kebutuhan Fungsional (Functional Requirements)**

-   **REQ-01: Render Konten Halaman**

    -   Sistem harus merender komponen berikut dalam satu halaman berurut: Hero, Tentang & Sejarah, Visi Misi, Komisariat, Program Unggulan, Pencapaian, Struktur, Hall of Fame, CTA, dan Footer.

-   **REQ-02: Tata Letak Galeri (Hall of Fame)**

    -   Sistem harus merender bagian galeri menggunakan pendekatan *Masonry Layout* CSS agar gambar dengan dimensi berbeda dapat tersusun rapi dan responsif.

-   **REQ-03: Navigasi Anchor**

    -   Sistem harus memiliki navigasi *sticky header* yang menggunakan *smooth scrolling* saat diklik untuk melompat ke *section* terkait.

-   **REQ-04: AI Chatbot (Core Feature)**

    -   Sistem harus menyediakan antarmuka obrolan (*floating UI*).

    -   Sistem harus memproses input teks ke *endpoint* API (Backend Route Next.js).

    -   **Validasi Konteks:** Jika input pengguna tidak berhubungan dengan GenBI/Bank Indonesia/Beasiswa/Pendidikan, sistem harus memblokir/mengalihkan jawaban dengan respons standar (Sistem tidak boleh memberikan kode pemrograman, resep makanan, dll).

**3. Kebutuhan Non-Fungsional (Non-Functional Requirements)**

-   **NFR-01: Responsivitas:** Komponen grid (Komisariat, Program, Stats) harus menyesuaikan dari 1 kolom di *Mobile* menjadi multi-kolom di *Desktop*.

-   **NFR-02: Performa:** Penggunaan gambar (khususnya di Hall of Fame) harus dioptimasi menggunakan komponen `next/image` bawaan Next.js.

-   **NFR-03: Keamanan API:** *Key API* LLM dilarang keras bocor ke sisi klien.

-   **NFR-04: Keamanan API:** Key API untuk layanan AI (jika menggunakan pihak ketiga) harus disimpan dengan aman menggunakan Environment Variables (.env.local) dan pemanggilan API harus dilakukan melalui API Routes Next.js di sisi server (Server-Side), tidak pernah terekspos di sisi client (browser pengguna).

**4. Struktur Direktori Proyek (Saran Next.js App Router)**
```
genbi-malut-web/
├── public/
│   ├── fonts/
│   │   └── NeuePower-Regular.woff2 (dan variannya)
│   └── images/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/route.js (API Route untuk logika AI Chatbot)
│   │   ├── profil/page.jsx (Dedicated Page)
│   │   ├── globals.css (Tailwind & custom styling)
│   │   ├── layout.jsx (Global Header & Footer)
│   │   └── page.jsx (Landing Page: Hero, Visi Misi, Program, Struktur)
│   └── components/
│       ├── Chatbot.jsx (UI Chatbot)
│       └── ... (komponen UI lainnya)
```