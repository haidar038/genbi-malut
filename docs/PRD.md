# Product Requirements Document (PRD)

## Website GenBI Maluku Utara

**1. Pendahuluan**

-   **Tujuan:** Mengembangkan website resmi untuk Generasi Baru Indonesia (GenBI) Maluku Utara sebagai pusat informasi publik yang komprehensif, terstruktur, dan mudah diakses, mengurangi ketergantungan eksklusif pada platform Instagram.

-   **Latar Belakang:** Saat ini, informasi mengenai kegiatan, program, dan profil GenBI Malut terpusat pada Instagram. Dibutuhkan sebuah platform (website) yang dapat merangkum semua informasi tersebut dalam satu wadah resmi yang lebih profesional dan terorganisir.

-   **Target Pengguna:** Mahasiswa (calon anggota GenBI), anggota GenBI saat ini, Bank Indonesia (sebagai pembina), masyarakat umum, dan stakeholder terkait.

**2. Ruang Lingkup Produk**

Website ini akan berfokus pada penyajian informasi statis dengan struktur komprehensif dan satu fitur interaktif utama, yaitu AI Chatbot khusus.

-   **Fitur/Section Utama (Core Features):**

    -   **Landing Page (Beranda):** Halaman muka utama.

    -   **Tentang & Sejarah:** Menjelaskan apa itu GenBI, sejarah pembentukan, dan latar belakang.

    -   **Visi & Misi:** Bagian yang menjelaskan arah dan tujuan organisasi (Front Liners, Change Agents, Future Leaders).

    -   **Komisariat:** Profil singkat 3 perguruan tinggi afiliasi (Universitas Khairun/Unkhair, Universitas Muhammadiyah/UMMU, dan IAIN Ternate).

    -   **Program Unggulan:** Menampilkan program kerja inti seperti pendidikan, ekonomi, dan lingkungan.

    -   **Pencapaian (Stats):** Angka-angka statistik kebanggaan organisasi (jumlah anggota, program, dll).

    -   **Struktur Organisasi:** Menampilkan susunan pengurus inti wilayah.

    -   **Hall of Fame (Galeri):** Representasi visual (grid/masonry) dari momen-momen penting dan penghargaan.

    -   **Call to Action (CTA):** Area ajakan untuk mencari tahu info pendaftaran atau menghubungi organisasi.

-   **Fitur Killer (Killer Feature):**

    -   **AI ChatBot (GenBI Assistant):** Asisten virtual terintegrasi AI dengan pendekatan Machine Learning (ML). Chatbot ini **wajib** dikonfigurasi dengan *context-bound* (batasan konteks) yang ketat. Chatbot hanya akan menjawab pertanyaan seputar GenBI dan akan menolak merespons pertanyaan di luar konteks (misal: coding, cuaca, dll).

**3. Asumsi & Batasan**

-   **Teknologi:** Menggunakan **Next.js** (React Framework).

-   **Konten Awal:** Konten teks dan gambar (termasuk font *Neue Power*) akan disediakan oleh tim GenBI Malut.

-   **Fase Rilis:** Dokumen ini mencakup MVP untuk rilis pertama.
    

**4. Metrik Kesuksesan**

*   Jumlah pengunjung unik (Unique Visitors) per bulan.
    
*   Tingkat interaksi (Engagement Rate) dengan AI Chatbot (jumlah percakapan sukses vs di luar konteks).
    
*   Waktu rata-rata yang dihabiskan pengguna di website (Session Duration).