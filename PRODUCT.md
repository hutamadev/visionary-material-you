# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Calon klien enterprise, tech lead, VP of Engineering, dan design director yang mencari partner pengembangan produk web berstandar tinggi, mengutamakan estetika visual mutakhir, performa reaktif, dan arsitektur kode yang skalabel.

## Product Purpose

Visionary mendemonstrasikan kapabilitas rekayasa web kelas enterprise yang menyatukan sistem desain adaptif (Google Material You 3), visual interaktif 3D WebGL (Three.js), dan animasi mikro responsif tanpa mengorbankan performa (Core Web Vitals optimal) serta aksesibilitas. Keberhasilan produk diukur dari konversi leads melalui CTA dan impresi kredibilitas teknis tingkat tinggi.

## Positioning

Kombinasi live 3D WebGL physics-based particle rendering, token sistem desain dinamis multi-state (Light/Dark/System Material You 3), dan pondasi arsitektur React 19 / strict TypeScript bebas kompromi. Mematahkan stereotip template agensi digital biasa yang generik ("AI slop") melalui craftmanship visual dan teknis berstandar enterprise.

## Operating Context

- Diinspeksi dan dievaluasi via desktop browser resolusi tinggi dan perangkat mobile modern.
- Dinavigasi dengan smooth momentum scroll (Lenis) yang terintegrasi dengan transform Framer Motion.
- Menghubungkan calon klien melalui formulir kontak/konsultasi berbasis validasi skema runtime (Zod) dengan status asinkron interaktif.

## Capabilities and Constraints

- **Stack**: React 19, TypeScript strict (zero `any`, interface-first), Vite, Tailwind CSS v4, Base UI, Three.js, Framer Motion, Lenis, Zod, Oxlint, Playwright.
- **Arsitektur**: Feature-based modularity dengan pemisahan tegas antara data layer (`*.data.ts`) dan lapisan antarmuka komponen.
- **Kinerja**: Code-splitting asinkron untuk modul 3D berat (`HeroGlobe`), target CLS < 0.05, zero-warning linting.
- **Batasan**: Frontend-first MVP tanpa backend database persisten mandiri (formulir CTA bersifat simulasi terisolasi dengan telemetri Vercel Analytics terpasang).

## Brand Commitments

- **Identitas**: "Visionary" — futuristik, presisi, elegan, teknis namun hangat.
- **Sistem Warna**: Variabel CSS semantik Google Material You 3 (`--md-sys-color-*`) yang responsif terhadap mode kontras dan preferensi tema sistem pengguna.
- **Tipografi**: Inter Variable Font berhierarki tegas dan terbaca jelas.

## Evidence on Hand

- Komponen 3D `HeroGlobe.tsx` interaktif di viewport utama.
- Sistem tema 3-mode (Light, Dark, System) aktif di `useTheme.ts` dan Navbar.
- Telemetri privasi via `@vercel/analytics` dan `@vercel/speed-insights`.
- 12/12 Playwright E2E tests passing dan status lint bersih (0 warnings/errors).

## Product Principles

1. **Craft Without Slop**: Setiap elemen visual memiliki fungsi, proporsi, dan interaksi yang disengaja. Dilarang menggunakan pola desain generik tanpa pertimbangan konteks.
2. **Performance Is Aesthetic**: Keindahan visual tidak boleh mengorbankan fluiditas 60 FPS, waktu muat awal, atau responsivitas scroll.
3. **Rigorous Modularity**: Pemisahan tegas Presentation, Business Logic, dan Data Layer di setiap fitur.
4. **Accessible Ergonomics**: Kontras warna yang lolos standar keterbacaan, navigasi keyboard lengkap, dan semantik HTML5 yang valid.
