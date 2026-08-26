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
- **Dokumentasi & Standarisasi (`feature/documentation`)**:
  - Menyusun `README.md` komprehensif (fitur, tech stack, struktur direktori, panduan instalasi, build, dan QA).
- **Optimasi Performa & Core Web Vitals (`feature/performance-and-optimization`)**:
  - **Code Splitting**: Menerapkan `React.lazy` + `Suspense` untuk `HeroGlobe` (Three.js 3D WebGL), memangkas *initial bundle* JS dari ~1.013 kB menjadi ~338 kB (~66% lebih ringan).
  - **Vite Manual Chunks**: Memisahkan dependensi `three` dan animasi (`framer-motion`/`lenis`) ke vendor chunk terpisah.
  - **UI/UX Polish**: Menambahkan spinner loading asinkron (`Loader2`) pada form CTA dan menghilangkan deprecation warning `THREE.Clock`.
- **Kualitas Kode**: 100% lolos Oxlint (0 warning/error), kompilasi TypeScript sukses, dan seluruh 12 pengujian Playwright E2E lulus (CLS < 0.0001).

## Pending Issues
- Tidak ada isu saat ini.

## Next Steps
- Menggabungkan (*merge*) branch `feature/performance-and-optimization` ke cabang utama (`main`).
- Melakukan evaluasi lanjutan atau deployment produksi jika diperlukan.

## Agent Instructions
- **Kepatuhan Aturan Global**: Selalu jalankan prinsip yang tertera di `GEMINI.md` (*Planner Mode*, hindari aksi destruktif, kode utuh tanpa placeholder).
- **SoC & Arsitektur Fleksibel**: Jangan pernah menulis *hardcoded data* dalam komponen presentasi (UI). Gunakan struktur *data layer* terpisah.
- **Strict TypeScript & Keamanan (OWASP)**: Dilarang keras memakai tipe `any`. Wajib memvalidasi input eksternal menggunakan Zod. Jangan ada _hardcoded secrets_ di dalam kode.
- **Desain Material You 3**: Patuhi standar estetika visual dan micro-animasi yang premium dengan token warna dinamis (seperti `var(--md-sys-color-*)`).
