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
- **Refaktor Standar Enterprise (`feature/refactor`)**:
  - **Separation of Concerns (SoC)**: Berhasil mengekstrak semua data statis (*hardcoded fixtures*) dari komponen antarmuka ke modul data layer independen (`*.data.ts`).
  - **Type-Safety Kuat**: Menghapus seluruh penggunaan tipe `any` (terutama pada komponen polimorfik `Card.tsx`) dan memperbarui definisi interface dengan properti `readonly`.
  - **Validasi Keamanan**: Mengimplementasikan Zod schema validation untuk sanitasi input email pada `CtaSection.tsx`.
  - **Global Error Handling**: Mengimplementasikan `ErrorBoundary` global dengan fallback UI bertema Material You 3 pada root aplikasi.
  - **Penyempurnaan Kode**: Memperbaiki peringatan linter React Fast Refresh pada komponen `Button` dan menstandardisasi *absolute imports* (`@/`) secara menyeluruh.
- **Kualitas Kode**: *Build* selesai tanpa error, Oxlint melaporkan 0 peringatan/error, dan semua 12 rangkaian tes *end-to-end* Playwright berhasil lolos (100% Passed).

## Pending Issues
- Tidak ada isu major/kritis saat ini.

## Next Steps
- Menggabungkan (*merge*) branch `feature/refactor` ke cabang utama (jika disetujui).
- Fokus pada penyelesaian UI/UX dan optimalisasi *frontend experience* (Core Web Vitals & SEO).
- Melakukan evaluasi lanjutan terhadap Core Web Vitals dan SEO teknis di tahapan pra-produksi.

## Agent Instructions
- **Kepatuhan Aturan Global**: Selalu jalankan prinsip yang tertera di `GEMINI.md` (*Planner Mode*, hindari aksi destruktif, kode utuh tanpa placeholder).
- **SoC & Arsitektur Fleksibel**: Jangan pernah menulis *hardcoded data* dalam komponen presentasi (UI). Gunakan struktur *data layer* terpisah.
- **Strict TypeScript & Keamanan (OWASP)**: Dilarang keras memakai tipe `any`. Wajib memvalidasi input eksternal menggunakan Zod. Jangan ada _hardcoded secrets_ di dalam kode.
- **Desain Material You 3**: Patuhi standar estetika visual dan micro-animasi yang premium dengan token warna dinamis (seperti `var(--md-sys-color-*)`).
