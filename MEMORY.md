# Project Memory: Visionary (Vibecoding Project)

## Project Overview

Membangun "Visionary", sebuah aplikasi web modern berskala enterprise yang mengombinasikan ergonomi desain Google Material You 3, animasi 3D WebGL, dan arsitektur frontend reaktif berkinerja tinggi.

## Environment & Tech Stack

- **Core**: React 19, TypeScript, Vite, Bun
- **Styling & UI**: Tailwind CSS v4, Base UI, sistem desain Material You 3
- **Animation & 3D**: Framer Motion, Three.js, Lenis (Smooth Scroll)
- **Validation**: Zod
- **Tooling & QA**: Oxlint, Playwright (E2E Testing)
- **Target OS**: Linux/WSL

## Current State & Completed Tasks

### Sebelumnya (Selesai)

- **Dokumentasi & Standarisasi (`feature/documentation`)**:
  - Menyusun `README.md` komprehensif (fitur, tech stack, struktur direktori, panduan instalasi, build, dan QA).
- **Optimasi Performa & Core Web Vitals (`feature/performance-and-optimization`)**:
  - **Code Splitting**: Menerapkan `React.lazy` + `Suspense` untuk `HeroGlobe` (Three.js 3D WebGL), memangkas _initial bundle_ JS dari ~1.013 kB menjadi ~338 kB (~66% lebih ringan).
  - **Vite Manual Chunks**: Memisahkan dependensi `three` dan animasi (`framer-motion`/`lenis`) ke vendor chunk terpisah.
  - **UI/UX Polish**: Menambahkan spinner loading asinkron (`Loader2`) pada form CTA dan menghilangkan deprecation warning `THREE.Clock`.
- **Kualitas Kode**: 100% lolos Oxlint (0 warning/error), kompilasi TypeScript sukses, dan seluruh 12 pengujian Playwright E2E lulus (CLS < 0.0001).

### Sesi 29 Agustus 2026 (21 conversations, 6+ jam kerja)

#### 1. Dynamic Theme System (`feature/dynamic-theme`)

- **3-State Theme Toggle**: Implementasi sistem tema dinamis dengan 3 mode: Light, Dark, dan System (mengikuti preferensi OS via `prefers-color-scheme`).
- **Hook `useTheme`**: Refaktor hook tema untuk mendukung reaktivitas terhadap perubahan preferensi sistem secara _real-time_ via `matchMedia` listener.
- **Navbar Integration**: Integrasi toggle tema di Navbar dengan ikon yang berubah sesuai mode aktif.
- **Fix Theme Reactivity**: Perbaikan bug di mana perubahan mode sistem tidak langsung terefleksi di UI Navbar.
- **E2E Tests Update**: Memperbarui test Playwright (`app.spec.ts`, `performance.spec.ts`) agar kompatibel dengan fitur tema baru.

#### 2. UX Polish & Micro-Interactions (`feature/ux-polish`)

- **Card Micro-Interactions**: Menambahkan animasi Framer Motion (spring `whileHover` scale/translate, staggered `whileInView` entrance) pada komponen `PortfolioSection`, `ServicesSection`, dan `TeamSection`.
- **Parallax Polish**: Sinkronisasi Lenis smooth scroll dengan Framer Motion `useScroll` untuk efek parallax yang lebih halus.
- **`StarfieldBackground` Component**: Membuat komponen baru `StarfieldBackground.tsx` (animasi canvas starfield) untuk ambient visual di background.
- **StarfieldBackground Full-Page Expansion**: Extend efek particle dari hero section ke seluruh halaman. Iterasi beberapa kali untuk memperbaiki visibility di light theme (warna particle kurang terlihat → diangkat gradasi warnanya).
- **Parallax Ambient Glows**: Update `App.tsx` dengan efek ambient glow pada background.
- **Konsolidasi Task Files**: Merge `TASK2.md` ke dalam `TASK.md`, hapus `TASK2.md`.

#### 3. Tailwind CSS v4 Syntax Migration

- **Lint Warning Fixes (Manual)**: Fix satu per satu lint warnings Tailwind v4 di ~10+ conversation kecil — migrasi syntax `[var(--...)]` → `(--...)`, `flex-shrink-0` → `shrink-0`, `-z-0` → `z-0`, dsb.
- **Automated Migration Script**: Pembuatan `scripts/fix-tailwind-syntax.mjs` untuk migrasi massal otomatis di seluruh codebase (42 file, ~1.660 baris berubah).
- **Komponen UI Refaktor**: Polish pada `Avatar`, `Badge`, `Button`, `Card`, `Input`, `Separator`, dan `button.variants.ts` — migrasi syntax + perbaikan styling.
- **Section-level Refaktor**: Update styling/layout pada `AboutSection`, `CtaSection`, `FooterSection`, `HeroSection`, `HeroGlobe`, `Navbar`, `PortfolioSection`, `ServicesSection`, `TeamSection`, `TestimonialsSection`, `WorkflowSection`.

#### 4. Lenis Smooth Scroll Navigation Fix

- **Bug**: Setelah refaktor UX polish, klik menu Navbar tidak lagi scroll ke section yang dituju.
- **Fix**: Refaktor `useSmoothScroll.ts` (69 baris perubahan) agar anchor link (`#section`) bekerja benar dengan Lenis.

#### 5. Dependency Updates & Font Optimization

- **Dependency Audit**: Update dependensi proyek, evaluasi upgrade TypeScript ke v7 (ditunda karena kompatibilitas).
- **Variable Font Migration**: Migrasi font Inter dari multi-file static fonts ke single variable font — mengurangi jumlah file font di `dist/`.
- **Tailwind CSS Linting Rules**: Setup linting rules agar Tailwind class warnings ter-_autofix_.

#### 6. Infrastructure & Tooling

- **`.prettierrc`**: Menambahkan konfigurasi Prettier baru.
- **`index.html` SEO Enhancement**: Update metadata, Open Graph tags, dan structured data.
- **Accessibility & SEO E2E Tests**: Penambahan/refaktor test `accessibility-seo.spec.ts` (60+ baris baru).
- **Agent Tooling Audit**: Review rules, MCP servers, dan skills yang aktif — konfirmasi context-mode MCP aktif, caveman mode aktif, karpathy-guidelines on-demand.
- **MEMORY.md & README.md**: Update dokumentasi sesuai perubahan terkini.

### Sesi 30 Agustus 2026

#### 1. Phase 4.3: Telemetry & Analytics (`feature/telemetry-analytics`)

- **Vercel Analytics + Speed Insights**: Install `@vercel/analytics@2.0.1` + `@vercel/speed-insights@2.0.0`. Root integration di `main.tsx` (`<Analytics />` + `<SpeedInsights />`).
- **Type-safe Analytics Abstraction**: `src/lib/analytics.ts` — generic `trackEvent<K>()` wrapper dengan `AnalyticsEventMap` interface. Provider-agnostic, swap cukup edit 1 file.
- **Custom Event Tracking**:
  - `cta_form_submit` + `cta_form_error` di `CtaSection.tsx` (kirim domain email saja, bukan email penuh → privacy).
  - `globe_interaction_start` + `globe_interaction_duration` di `HeroGlobe.tsx` (mouseenter/mouseleave, fire once per visit).
  - `theme_toggle` di `useTheme.ts`.
  - `section_view` via hook `useTrackSectionView.ts` (IntersectionObserver, 30% threshold, fire once per session per section).
- **E2E Verified**: 12/12 Playwright tests passed, zero regressions. Build clean, lint clean (0 warnings/errors).

## Pending Issues

- Branch `feature/dynamic-theme` masih ada secara lokal (belum dihapus), tapi perubahannya sudah ter-_merge_ ke `main`.
- Branch `feature/telemetry-analytics` aktif, belum di-merge ke `main`.

## Next Steps

- Merge `feature/telemetry-analytics` ke `main` setelah review.
- Deploy ke Vercel untuk aktivasi analytics dashboard.
- Phase 4.4: PWA (`vite-plugin-pwa`, manifest, service worker).
- Hapus branch lokal `feature/dynamic-theme` (opsional cleanup).

## Agent Instructions

- **Kepatuhan Aturan Global**: Selalu jalankan prinsip yang tertera di `GEMINI.md` (_Planner Mode_, hindari aksi destruktif, kode utuh tanpa placeholder).
- **SoC & Arsitektur Fleksibel**: Jangan pernah menulis _hardcoded data_ dalam komponen presentasi (UI). Gunakan struktur _data layer_ terpisah.
- **Strict TypeScript & Keamanan (OWASP)**: Dilarang keras memakai tipe `any`. Wajib memvalidasi input eksternal menggunakan Zod. Jangan ada _hardcoded secrets_ di dalam kode.
- **Desain Material You 3**: Patuhi standar estetika visual dan micro-animasi yang premium dengan token warna dinamis (seperti `var(--md-sys-color-*)`).
