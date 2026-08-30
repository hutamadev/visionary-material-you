# Project Roadmap & Task Planning: Vibecoding Project

Dokumen ini berisi perencanaan tugas (_roadmap_), status pengerjaan, dan detail teknis untuk iterasi proyek selanjutnya. Gunakan _checkboxes_ untuk memantau kemajuan.

---

## ✅ Phase 1: Fundamental SEO & Accessibility (Selesai)

_Fokus: Semantic HTML5, Heading Hierarchy, Alt Image, & Meta Tags._

- [x] Menggunakan elemen semantik `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- [x] Struktur hierarki heading berurutan (`H1` hingga `H3`).
- [x] Atribut `alt` untuk gambar dekoratif dan informatif.
- [x] Metadata SEO, Open Graph, dan Twitter Cards di `index.html`.

## ✅ Phase 2: Enterprise Architecture Refactoring (Selesai)

_Fokus: Separation of Concerns, Type-Safety, Validasi, dan Error Handling._

- [x] Ekstraksi data statis (_hardcoded_) ke modul data terpisah (`*.data.ts`).
- [x] Refaktor _strict type-safety_ (penghapusan `any` dan penggunaan `interface`).
- [x] Pemasangan Zod _schema validation_ untuk sanitasi input email di komponen CTA.
- [x] Implementasi `ErrorBoundary` global untuk penanganan _runtime error_.
- [x] Pembersihan _Fast Refresh warnings_ dan standarisasi _absolute imports_.

---

## ✅ Phase 3: Production-Ready MVP (Selesai)

_Fokus: Version Control, UI/UX Finalization, Core Web Vitals, Dokumentasi._

### 1. Version Control & Git Flow

- [x] _Code review_ akhir untuk branch `feature/refactor`.
- [x] _Merge_ branch `feature/refactor` ke branch `main`.
- [x] Hapus branch `feature/refactor` setelah proses _merge_ berhasil.

### 2. UI/UX Finalization (Frontend Only)

- [x] **Form CTA**: Animasi _loading_ dan _success state_ pada form CTA berjalan mulus sebagai simulasi frontend murni.

### 3. Core Web Vitals & Pre-Production Optimization

- [x] **Optimasi Gambar/Aset**: Kompresi `hero.png` dan aset grafis (WebP/AVIF).
- [x] **Code Splitting & Lazy Loading**: `React.lazy` untuk `HeroGlobe.tsx` (Three.js) agar tidak membebani _initial load_.
- [x] **Lighthouse Audit & QA**: Build produksi terverifikasi, zero lint warnings, CLS < 0.05, Playwright 100% Passed.

### 4. Dokumentasi & Readme

- [x] **Pembaruan README.md**: Deskripsi proyek, _Tech Stack_, Arsitektur Direktori, panduan instalasi & cara menjalankan.

---

## 🚀 Phase 4: Production-Ready Enhancements (In Progress)

_Fokus: Telemetri, PWA, Dynamic Theme, dan Advanced UX Polish._

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

### 3. Telemetry & User Insights ✅

- [x] **Integrasi Analitik**: Implementasi [Vercel Analytics](https://vercel.com/analytics) (`@vercel/analytics` + `@vercel/speed-insights`) untuk melacak _user journey_ dan Core Web Vitals tanpa mengorbankan privasi.
- [x] **Custom Event Tracking**: Pelacakan event khusus via `src/lib/analytics.ts` (type-safe abstraction):
  - CTA Form Submission (event `cta_form_submit`) + error tracking (`cta_form_error`).
  - Durasi interaksi dengan `HeroGlobe` (Three.js canvas) — `globe_interaction_start` + `globe_interaction_duration`.
  - Theme toggle tracking (`theme_toggle`).
  - Section visibility tracking (`section_view`) via `useTrackSectionView` hook.

### 4. Progressive Web App (PWA)

- [ ] **Offline Capabilities**: Integrasi `vite-plugin-pwa` untuk _service worker_ dasar.
- [ ] **Manifest & Assets**: Konfigurasi `manifest.json` (ikon, _theme-color_, nama aplikasi) agar aplikasi dapat diinstal di _mobile_ atau _desktop_.

---

## 📈 Phase 5: Monitoring & Maintenance (Backlog)

- [ ] **Lighthouse CI**: Automasi pengecekan performa setiap _push_ ke `main` menggunakan GitHub Actions.
- [ ] **Dependency Audit**: Rutin cek versi `three`, `react`, dan `vite` untuk menghindari _security vulnerabilities_.
