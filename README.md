# GameZone & Premium Apps Showcase

A high-fidelity multi-screen mobile showcase built with **Next.js 15 (App Router)** and **Tailwind CSS**. Replicates pixel-for-pixel the 3-screen mobile experience (Dashboard Statistics, 2-Column Catalog Grid, Cosmic Sunset Profile) with interactive coin rewards, game previews, and a toggleable **Premium Apps Edition** (CapCut Pro, Netflix Ultra HD, Spotify Hi-Fi, YouTube, Disney+, Canva Pro).

---

## 🚀 Cara Menjalankan & Deploy ke Vercel (Vercel Support)

Aplikasi ini sudah **100% siap dan kompatibel** dengan Vercel tanpa perlu konfigurasi tambahan.

### Opsi 1: Deploy Langsung via Vercel CLI
1. Pastikan Anda telah menginstal Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Jalankan perintah deploy di root proyek:
   ```bash
   vercel
   ```
3. Untuk deployment langsung ke production:
   ```bash
   vercel --prod
   ```

### Opsi 2: Deploy Otomatis via GitHub di Vercel Dashboard
1. Hubungkan repository GitHub Anda ke akun [Vercel](https://vercel.com).
2. Pilih project ini:
   - **Framework Preset**: `Next.js` (terdeteksi otomatis)
   - **Root Directory**: `./`
   - **Build Command**: `next build` atau `npm run build`
   - **Output Directory**: `.next` (otomatis)
3. Klik **Deploy**.

---

## 🛠️ Menjalankan Lokal

```bash
# Install dependencies
npm install

# Jalankan server development
npm run dev
# Buka http://localhost:3000

# Cek build produksi
npm run build
npm run start
```

---

## ✨ Fitur Unggulan
- **Replika 3 Layar Presisi**:
  - Halaman 1: Dashboard Statistik dengan kartu 3D Crown (Level) & Stopwatch (Time), saldo koin, filter waktu.
  - Halaman 2: Kisi 2-Kolom dengan 6 kartu aplikasi/game, rating, jumlah pemain, dan tombol Play.
  - Halaman 3: Banner Lanskap Kosmik Sci-Fi dengan profil avatar tumpuk GAMER_NZ & kisi 4 metrik.
- **Katalog Ganda**:
  - Mode Games Asli (Sonic, Field Trip Z, Rainbow Friends, Stumble Guys, PUBG, Pool).
  - Mode Aplikasi Premium (CapCut Pro, Netflix, Spotify, YouTube, Disney+, Canva).
- **Interaktivitas Penuh**: Modal klaim koin harian, modal unlock/launch aplikasi, filter kategori, dan tombol switch mockup.
