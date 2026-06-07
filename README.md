# GenBI Maluku Utara - Official Website

Website resmi Generasi Baru Indonesia (GenBI) Maluku Utara, komunitas pemuda yang berada di bawah naungan Bank Indonesia dan fokus pada pengembangan Front Liners, Change Agents, dan Future Leaders.

## Tentang GenBI

GenBI (Generasi Baru Indonesia) adalah komunitas pengembangan kepemimpinan untuk mahasiswa yang berafiliasi dengan Bank Indonesia. GenBI Maluku Utara hadir untuk:

- Membangun generasi muda berkualitas melalui program edukasi, ekonomi, dan lingkungan
- Menjadi katalis perubahan dalam masyarakat lokal
- Mengembangkan kepemimpinan masa depan di kalangan mahasiswa

Website ini berfungsi sebagai pusat informasi terpusat yang menggantikan ketergantungan eksklusif pada platform media sosial.

## Fitur Utama

### Konten Informatif

- **Landing Page** - Tampilan pertama yang menarik dan profesional
- **Profil** - Profil lengkap GenBI Maluku Utara
- **Tentang Kami** - Sejarah, visi, dan misi GenBI Maluku Utara
- **Program Unggulan** - Portfolio program kerja dan inisiatif komunitas
- **Komisariat** - Profil tiga perguruan tinggi afiliasi (Unkhair, UMMU, IAIN Ternate)
- **Struktur Organisasi** - Susunan pengurus inti dan tim
- **Pencapaian** - Statistik dan data pencapaian organisasi
- **Galeri** - Dokumentasi visual dari momen dan penghargaan penting

### Fitur Interaktif

- **GenBI Assistant** - AI Chatbot bertenaga Groq AI
  - Menjawab pertanyaan seputar GenBI dengan akurat
  - Batasan konteks ketat untuk memastikan informasi tetap relevan
  - Tersedia untuk calon anggota dan masyarakat umum

## Tech Stack

- **Framework:** Next.js 16 dengan React 19
- **Styling:** Tailwind CSS 4
- **AI/Chatbot:** Groq AI SDK dengan @ai-sdk/groq
- **Icons:** Hugeicons
- **Language:** TypeScript
- **Font:** Host Grotesk (custom branding)

## Mulai Pengembangan

### Prerequisites

Cukup punya Node.js 18+ dan salah satu package manager (npm, yarn, atau pnpm).

### Setup Lokal

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd genbi-malut
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   Atau gunakan `yarn install` atau `pnpm install` jika lebih suka.

3. **Setup environment variables**
   Buat file `.env.local` di root directory dan tambahkan:

   ```env
   NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
   ```

   Bisa dapat API key dari [console.groq.com](https://console.groq.com).

4. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser.

### Development Commands

```bash
npm run dev      # Development server
npm run build    # Build untuk production
npm start        # Production server
npm run lint     # Jalankan linter
```

## Struktur Project

```
genbi-malut/
├── app/ Next.js App Router
│ ├── api/chat/ API endpoint untuk ChatBot
│ ├── profil/ Halaman profil
│ ├── page.tsx Halaman utama
│ └── layout.tsx Layout root
├── components/ React Components
│ ├── layout/ Navbar & Footer
│ └── sections/ Berbagai section halaman
├── hooks/ Custom React Hooks
├── lib/ Utility functions & constants
├── docs/ Dokumentasi teknis
└── public/ Static assets
```

## Konfigurasi Chatbot

Chatbot GenBI menggunakan Groq AI dengan batasan konteks yang ketat. Knowledge base dan konfigurasi ada di:

- `lib/constants/genbi-knowledge.ts` - Knowledge base GenBI
- `app/api/chat/route.ts` - API endpoint chatbot

Kalau mau ubah perilaku chatbot, tinggal edit kedua file itu dengan konteks dan prompt yang sesuai.

## Dokumentasi Lengkap

Kalau butuh info teknis lebih detail, lihat folder `docs/`:

- `PRD.md` - Product Requirements Document
- `SRS.md` - Software Requirements Specification
- `DESIGN.md` - Design guidelines
- `AI_SDK_README.md` - Dokumentasi AI integration

## Deployment

### Deploy di Vercel

Vercel adalah pilihan terbaik untuk Next.js karena support penuh untuk edge functions dan serverless.

1. Push code ke GitHub
2. Buka vercel.com
3. Import project dari GitHub
4. Set environment variables di dashboard Vercel
5. Selesai, langsung live

### Alternatif Lain

Bisa juga deploy ke:

- Railway
- Netlify
- AWS Amplify
- Server sendiri

## Kontak & Informasi

- Instagram: [@genbi.malut](https://instagram.com/genbi.malut)
- Email: genbi.malut@bankIndonesia.id
- Website: genbi-malut.id

## Lisensi

Lihat file LICENSE untuk detail lengkapnya.

---

Dibuat untuk GenBI Maluku Utara | Generasi Baru Indonesia
