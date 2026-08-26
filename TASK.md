# Project Roadmap & Task Planning: Vibecoding Project

Dokumen ini berisi perencanaan tugas (*roadmap*), status pengerjaan, dan detail teknis untuk iterasi proyek selanjutnya. Gunakan *checkboxes* untuk memantau kemajuan.

---

## ✅ Phase 1: Fundamental SEO & Accessibility (Selesai)
*Fokus: Semantic HTML5, Heading Hierarchy, Alt Image, & Meta Tags.*
- [x] Menggunakan elemen semantik `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- [x] Struktur hierarki heading berurutan (`H1` hingga `H3`).
- [x] Atribut `alt` untuk gambar dekoratif dan informatif.
- [x] Metadata SEO, Open Graph, dan Twitter Cards di `index.html`.

## ✅ Phase 2: Enterprise Architecture Refactoring (Selesai)
*Fokus: Separation of Concerns, Type-Safety, Validasi, dan Error Handling.*
- [x] Ekstraksi data statis (*hardcoded*) ke modul data terpisah (`*.data.ts`).
- [x] Refaktor *strict type-safety* (penghapusan `any` dan penggunaan `interface`).
- [x] Pemasangan Zod *schema validation* untuk sanitasi input email di komponen CTA.
- [x] Implementasi `ErrorBoundary` global untuk penanganan *runtime error*.
- [x] Pembersihan *Fast Refresh warnings* dan standarisasi *absolute imports*.

---

## 🚀 Phase 3: Next Steps (In Progress)
Berdasarkan status terakhir di `MEMORY.md`, berikut adalah detail perencanaan untuk iterasi selanjutnya:

### 1. Version Control & Git Flow
- [x] Lakukan *code review* akhir untuk branch `feature/refactor`.
- [x] *Merge* branch `feature/refactor` ke branch `main`.
- [x] Hapus branch `feature/refactor` setelah proses *merge* berhasil untuk menjaga kebersihan repositori.

### 2. UI/UX Finalization (Frontend Only)
- [x] **Form CTA**: Pastikan animasi _loading_ dan _success state_ pada form CTA berjalan mulus sebagai simulasi frontend murni (Integrasi backend API tidak dilakukan).

### 3. Core Web Vitals & Pre-Production Optimization
- [x] **Optimasi Gambar/Aset**: Pastikan gambar `hero.png` dan aset grafis lainnya dikompresi dengan baik (gunakan format WebP atau AVIF jika perlu).
- [x] **Code Splitting & Lazy Loading**: Analisis hasil dari *bundler* (Vite/Rolldown) dan terapkan `React.lazy` untuk komponen yang memuat *library* berat seperti `Three.js` (pada `HeroGlobe.tsx`) agar tidak membebani *initial load*.
- [x] **Lighthouse Audit & QA**: Verifikasi build produksi, zero lint warnings, audit CLS Core Web Vitals (< 0.05), dan pengujian otomatis Playwright (100% Passed).

### 4. Dokumentasi & Readme
- [x] **Pembaruan README.md**: Ganti teks bawaan Vite dengan dokumentasi nyata yang mencakup: Deskripsi proyek (Visionary), *Tech Stack* yang digunakan, Arsitektur/Struktur Direktori, dan panduan instalasi serta cara menjalankannya (*How to run/dev/build*).

### 5. Telemetry & Analytics (Opsional/Tahap Lanjut)
- [ ] Integrasikan solusi analitik privasi sentris (seperti Vercel Analytics, Plausible, atau PostHog) untuk melacak *user journey* tanpa mengganggu *page load speed*.
