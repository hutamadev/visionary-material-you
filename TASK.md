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

## ✅ Phase 3: Production-Ready MVP (Selesai)
*Fokus: Version Control, UI/UX Finalization, Core Web Vitals, Dokumentasi.*

### 1. Version Control & Git Flow
- [x] *Code review* akhir untuk branch `feature/refactor`.
- [x] *Merge* branch `feature/refactor` ke branch `main`.
- [x] Hapus branch `feature/refactor` setelah proses *merge* berhasil.

### 2. UI/UX Finalization (Frontend Only)
- [x] **Form CTA**: Animasi _loading_ dan _success state_ pada form CTA berjalan mulus sebagai simulasi frontend murni.

### 3. Core Web Vitals & Pre-Production Optimization
- [x] **Optimasi Gambar/Aset**: Kompresi `hero.png` dan aset grafis (WebP/AVIF).
- [x] **Code Splitting & Lazy Loading**: `React.lazy` untuk `HeroGlobe.tsx` (Three.js) agar tidak membebani *initial load*.
- [x] **Lighthouse Audit & QA**: Build produksi terverifikasi, zero lint warnings, CLS < 0.05, Playwright 100% Passed.

### 4. Dokumentasi & Readme
- [x] **Pembaruan README.md**: Deskripsi proyek, *Tech Stack*, Arsitektur Direktori, panduan instalasi & cara menjalankan.

---

## 🚀 Phase 4: Production-Ready Enhancements (In Progress)
*Fokus: Telemetri, PWA, Dynamic Theme, dan Advanced UX Polish.*

### 1. Dynamic Design System ✅
- [x] **Theme Switcher**: Toggle manual (Dark/Light/System) mengubah CSS variables `var(--md-sys-color-*)` secara dinamis.
- [x] **Color Palette Sync**: Sinkronisasi warna aksen berdasarkan `prefers-color-scheme`.

### 2. Advanced UX Polish ✅

#### 2a. Core Motion & Parallax
- [x] **Globe Three.js** — `HeroGlobe.tsx`: Animation loop (`requestAnimationFrame`) + cleanup (`cancelAnimationFrame`, `dispose()` geometry/material/renderer).
- [x] **Smooth Scroll (Lenis)** — `useSmoothScroll.ts`: Hook dipanggil di `MainLayout`, RAF loop + `lenis.destroy()` on cleanup. Sync `document.documentElement.scrollTop` via `lenis.on('scroll', ...)` agar framer-motion `useScroll` membaca nilai smooth.
- [x] **Parallax Background** — `HeroSection.tsx` & `App.tsx`: `useScroll` + `useTransform` dari framer-motion untuk parallax multi-layer (globe, content, ambient glows).

#### 2b. Card Micro-Interactions (Framer Motion Spring)
- [x] **Portfolio cards** — `PortfolioSection.tsx`: `<motion.div>` dengan `whileHover={{ scale: 1.03, y: -6 }}` spring + staggered `whileInView` entrance. Arrow icon `rotate: 45` spring on hover.
- [x] **Services cards** — `ServicesSection.tsx`: `<motion.div>` spring hover + `whileInView` staggered entrance. Icon container `rotate: -6` spring. Arrow icon motion opacity/translate.
- [x] **Team cards** — `TeamSection.tsx`: `<motion.div>` spring hover (`scale: 1.04, y: -8`). Avatar bouncy spring + `rotate: 4`. Social links `<motion.a>` dengan `whileHover` scale + color spring.

### 3. Telemetry & User Insights
- [ ] **Integrasi Analitik**: Implementasi [Vercel Analytics](https://vercel.com/analytics) atau [Plausible](https://plausible.io/) untuk melacak *user journey* tanpa mengorbankan privasi.
- [ ] **Custom Event Tracking**: Pelacakan event khusus:
    - CTA Form Submission (event `cta_form_submit`).
    - Durasi interaksi dengan `HeroGlobe` (Three.js canvas).

### 4. Progressive Web App (PWA)
- [ ] **Offline Capabilities**: Integrasi `vite-plugin-pwa` untuk *service worker* dasar.
- [ ] **Manifest & Assets**: Konfigurasi `manifest.json` (ikon, *theme-color*, nama aplikasi) agar aplikasi dapat diinstal di *mobile* atau *desktop*.

---

## 📈 Phase 5: Monitoring & Maintenance (Backlog)
- [ ] **Lighthouse CI**: Automasi pengecekan performa setiap *push* ke `main` menggunakan GitHub Actions.
- [ ] **Dependency Audit**: Rutin cek versi `three`, `react`, dan `vite` untuk menghindari *security vulnerabilities*.
