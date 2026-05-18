# Project Design Document (PDD)

## Website GenBI Maluku Utara

**1. Konsep Desain (Design Concept)**

*   **Tema Utama:** Clean, Profesional, Modern, dan Informatif.
    
*   **Prinsip:**
    
    *   _Clean Design:_ Meminimalkan elemen yang tidak perlu untuk fokus pada konten.
        
    *   _Proporsional Spacing:_ Menggunakan _whitespace_ (ruang kosong) yang cukup antar elemen untuk memberikan kesan lega dan mudah dibaca (legibility).
        
    *   _Proper UI/UX:_ Hierarki informasi yang jelas, navigasi intuitif, dan _call-to-action_ (CTA) yang terarah.
        

**2. Panduan Gaya (Style Guide)**

*   **Tipografi:**
    
    *   **Heading (H1, H2, H3, dll):** Neue Power (File font disediakan). Memberikan kesan kuat, modern, dan berkarakter.
        
    *   **Body Text & Paragraf:** Poppins. Memastikan keterbacaan yang optimal di berbagai ukuran layar, memberikan kesan bersih dan geometris.
        
*   **Palet Warna (Color Palette):**
    
    *   **Primary/Background:** Clean White (#FFFFFF atau variasi sangat terang seperti #F8F9FA untuk seksi tertentu) - Mendominasi desain untuk kesan bersih.
        
    *   **Aksen/Primary Brand:** Biru (#06619F) - Digunakan untuk tombol utama, link hover, elemen grafis utama, dan penekanan.
        
    *   **Tertiary/Highlight:** Merah (#E82925) - Digunakan secara selektif untuk notifikasi penting, label khusus, atau aksen dinamis agar tidak terlalu kaku.
        
    *   **Teks:** Warna gelap seperti Dark Grey atau hampir hitam (misal #333333) untuk teks body agar kontras dengan latar belakang putih.
        

**3. Struktur Halaman (Sitemap & Layout)**

*   **Header (Global):** Logo GenBI Malut, Navigasi (Beranda, Profil, Visi Misi, Program, Struktur), Tombol CTA (misal: "Hubungi Kami" atau trigger Chatbot).
    
*   **Beranda (Landing Page):**
    
    -   **Header:** Logo, Navigasi (Beranda, Tentang, Komisariat, Program, Galeri), Tombol CTA Chatbot.

    -   **Hero Section:** Headline besar, intro singkat, dua tombol CTA (Jelajahi/Kenali).

    -   **Tentang & Sejarah:** Layout *two-column* (Teks/Timeline di satu sisi, Gambar representatif di sisi lain).

    -   **Visi & Misi:** Layout *cards* yang bersih dengan icon minimalis.

    -   **Komisariat:** 3 Kolom grid yang menampilkan logo dan deksripsi singkat untuk Unkhair, UMMU, dan IAIN Ternate.

    -   **Program Unggulan:** 3 *Cards* dengan thumbnail gambar (gaya feed Instagram) dan tag kategori.

    -   **Pencapaian (Stats):** *Full-width banner* dengan *background* biru menampilkan 4 statistik utama secara berderet horizontal.

    -   **Struktur Organisasi:** Galeri profil bentuk *circle* untuk pengurus inti.

    -   **Hall of Fame:** Layout tipe *Masonry Grid* bergaya modern untuk menampilkan foto-foto kegiatan bervariasi ukuran.

    -   **Call to Action (CTA):** *Section* ajakan bergabung sebelum footer dengan warna latar biru kontras.

    -   **Footer:** Informasi kontak, logo, tautan cepat, dan ikon media sosial.
        
*   **Profil (Dedicated Page):**
    
    *   Penjelasan mendetail mengenai sejarah dan identitas GenBI Malut. Tata letak _long-form_ dengan tipografi yang nyaman dibaca (Poppins).
        
*   **Footer (Global):** Tautan cepat, informasi kontak, tautan ke media sosial (terutama Instagram), dan hak cipta.
    

**4. Interaksi AI Chatbot (UI/UX)**

*   **Posisi:** _Floating button_ (ikon chat) di sudut kanan bawah layar yang persisten di semua halaman.
    
*   **Tampilan Jendela:** Saat diklik, akan muncul jendela obrolan (_chat window_) dengan desain bersih, mengadopsi warna biru (#06619F) untuk header chatbot.
    
*   **Perilaku:** Harus ada pesan sambutan yang jelas mengenai _ruang lingkup_ kemampuannya (contoh: "Halo! Saya asisten virtual GenBI Malut. Tanyakan apa saja tentang program dan informasi GenBI kepada saya.").