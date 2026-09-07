# Project Memory: Visionary (Vibecoding Project)

## Project Overview

Membangun "Visionary", sebuah aplikasi web modern berskala enterprise yang mengombinasikan ergonomi desain Google Material You 3, visualisasi interaktif 3D WebGL (Three.js), dan arsitektur frontend reaktif berkinerja tinggi berbasis React 19.

## Environment & Tech Stack

- **Core**: React 19, TypeScript strict (zero `any`, interface-first), Vite, Bun
- **Styling & Design**: Tailwind CSS v4, Base UI, sistem desain Google Material You 3 (`var(--md-sys-color-*)`)
- **Animation & 3D**: Three.js (WebGL 2.0), Framer Motion (physics spring), Lenis (smooth scroll)
- **Validation**: Zod (runtime schema validation)
- **Tooling & QA**: Oxlint, Prettier, Playwright (E2E Testing bound to host browser)
- **Host Browser Binding**: Helium Browser (`C:\Program Files\imput\Helium\Application\chrome.exe`) via Chrome DevTools Protocol (CDP) / Playwright protocol
- **Target OS**: Linux/WSL (Debian) & Windows 11 host
- **Agent Skill**: Impeccable v4.2.0 (Design Director toolchain: 23 commands, detector rules, design token generator)

---

## Current State & Completed Tasks

### Sebelumnya (Selesai)

- **Dokumentasi & Standarisasi (`feature/documentation`)**:
  - Menyusun `README.md` komprehensif (fitur, tech stack, struktur direktori, panduan instalasi, build, dan QA).
- **Optimasi Performa & Core Web Vitals (`feature/performance-and-optimization`)**:
  - **Code Splitting**: Menerapkan `React.lazy` + `Suspense` untuk `HeroGlobe` (Three.js 3D WebGL), memangkas _initial bundle_ JS dari ~1.013 kB menjadi ~338 kB (~66% lebih ringan).
  - **Vite Manual Chunks**: Memisahkan dependensi `three` dan animasi (`framer-motion`/`lenis`) ke vendor chunk terpisah.
  - **UI/UX Polish**: Menambahkan spinner loading asinkron (`Loader2`) pada form CTA dan menghilangkan deprecation warning `THREE.Clock`.
- **Kualitas Kode**: 100% lolos Oxlint (0 warning/error), kompilasi TypeScript sukses, dan seluruh 12 pengujian Playwright E2E lulus (CLS < 0.0001).

### Sesi 29 Agustus 2026

#### 1. Dynamic Theme System (`feature/dynamic-theme`)

- **3-State Theme Toggle**: Sistem tema dinamis 3 mode: Light, Dark, dan System (mengikuti OS via `prefers-color-scheme`).
- **Hook `useTheme`**: Reaktif terhadap perubahan preferensi sistem secara _real-time_ via `matchMedia` listener.
- **Navbar Integration**: Integrasi toggle tema di Navbar dengan ikon dinamis.

#### 2. UX Polish & Micro-Interactions (`feature/ux-polish`)

- **Card Micro-Interactions**: Animasi Framer Motion (spring `whileHover`, staggered `whileInView` entrance) pada `PortfolioSection`, `ServicesSection`, dan `TeamSection`.
- **Parallax Polish**: Sinkronisasi Lenis smooth scroll dengan Framer Motion `useScroll`.
- **`StarfieldBackground` Component**: Animasi canvas 2D starfield untuk ambient visual latar belakang seluruh halaman.

#### 3. Tailwind CSS v4 Syntax Migration

- **Automated Migration Script**: `scripts/fix-tailwind-syntax.mjs` untuk migrasi massal otomatis di seluruh codebase (42 file, ~1.660 baris).
- **Refaktor Komponen & Seksi**: Standarisasi syntax `(--...)`, `shrink-0`, `z-0` pada seluruh komponen UI dasar dan seksi halaman.

#### 4. Lenis Smooth Scroll Navigation Fix

- **Fix `useSmoothScroll.ts`**: Anchor link navigation (`#section`) terhubung dengan instance Lenis.

#### 5. Tooling & Infra

- Setup `.prettierrc`, pembaruan SEO metadata di `index.html`, penambahan E2E accessibility tests.

### Sesi 30 Agustus 2026

#### 1. Phase 4.3: Telemetry & Analytics (`feature/telemetry-analytics` -> merged to `main`)

- **Vercel Analytics + Speed Insights**: `@vercel/analytics@2.0.1` + `@vercel/speed-insights@2.0.0` di `main.tsx`.
- **Type-safe Analytics Abstraction**: `src/lib/analytics.ts` (`trackEvent<K>()` dengan `AnalyticsEventMap`).
- **Custom Event Tracking**: `cta_form_submit`, `cta_form_error`, `globe_interaction_start`, `globe_interaction_duration`, `theme_toggle`, `section_view`.
- **Merge**: Di-merge ke `main` (commit `6b6e02f`), dideploy ulang ke Vercel (commit `a36f29e`).

---

### Sesi 5–7 September 2026: Impeccable Design System, Audit, Critique, Refactoring, & Tooling Stabilization (`branch: development`)

#### 1. Branching & Version Control

- Dibuat branch baru `development` dari `main` untuk seluruh pengerjaan iterasi stabilisasi dan fitur lanjutan. Semua pekerjaan diisolasi di branch ini sebelum merge akhir ke `main`.

#### 2. Integrasi Impeccable Toolchain

- **Pemasangan Skill Global**: Menginstal Impeccable skill v4.2.0 ke `~/.agents/skills/impeccable/` dan engine binary `impeccable.exe` v0.1.0 ke `~/.impeccable/bin/0.1.0/`.
- **Inisialisasi (`/impeccable init`)**:
  - Menghasilkan `PRODUCT.md` (skema v1) yang mencatat audiens enterprise, positioning teknis 3D/Material You, batasan arsitektur, dan prinsip produk _Craft Without Slop_.
  - Menetapkan alur kerja `"buildPath": "code"` (code-first) di `.impeccable/config.json`.
- **Dokumentasi Sistem Desain (`/impeccable document`)**:
  - Menghasilkan `DESIGN.md` dengan Creative North Star _"The Architectural Fluid"_, token YAML frontmatter lengkap, 8 seksi kanonikal, dan _Named Rules_ (_Strict Tonal Role_, _No-Unanchored-Gradient_, _Surgical Weight_, _Single Momentum_, _Tonal Layering_).
  - Menghasilkan sidecar `.impeccable/design.json` (skema v2) dengan metadata tonal ramps OKLCH, shadow tokens, timing curves, dan self-contained shadow DOM component snippets.

#### 3. Audit Mutu Teknis (`/impeccable audit`) & Perbaikan Awal

- **Hasil Skor Audit**: 16/20 (Good - Production Quality) mencakup A11y, Performance, Theming, Responsive, dan Integrity.
- **Perbaikan yang Diterapkan (Commit `706bdd9`)**:
  - **Accessibility (`prefers-reduced-motion`)**: Mengintegrasikan `window.matchMedia('(prefers-reduced-motion: reduce)')` di `useSmoothScroll.ts` (durasi scroll instan) dan aturan CSS di `index.css` (mematikan animasi looping non-esensial dan translasi hover).
  - **Theming**: Menghilangkan warna hex mentah di `Navbar.tsx` dan menggantinya dengan token semantik M3 (`--md-sys-color-outline-variant`, `--md-sys-color-surface`, `--md-sys-color-shadow`).
  - **Performance**: Menghapus 11 deklarasi statis `will-change-transform` yang menempel saat idle di `App.tsx`, `HeroGlobe.tsx`, `HeroSection.tsx`, `PortfolioSection.tsx`, `ServicesSection.tsx`, dan `TeamSection.tsx`.

#### 4. Dual-Agent Design Critique (`/impeccable critique`) & Resolusi Isu Prioritas

- **Eksekusi Dual-Agent**: Menjalankan sub-agent mandiri A (Design Review, ID `7724da3e`) dan B (Deterministic Detector, ID `847f17e6`). Skor Heuristik Nielsen: 21/32. Snapshot disimpan di `.impeccable/critique/critique-src-app-tsx.md`.
- **Perbaikan yang Diterapkan (Commit `8ab4206`)**:
  - **[P0] Brand Unification**: Mengganti seluruh referensi brand "Vibecoding" menjadi "Visionary" di Navbar, Hero, Footer, dan copy aplikasi.
  - **[P1] Keyboard Navigation (`focus-visible`)**: Menambahkan ring fokus `focus-visible:ring-2 focus-visible:ring-(--md-sys-color-primary) focus-visible:outline-none` pada varian dasar tombol di `button.variants.ts`.
  - **[P1] Pembersihan AI Slop**: Menghapus 6 radial gradient blurred background orbs yang melayang di `App.tsx`.
  - **[P2] Canvas Reduced-Motion Guards**: Menambahkan guard `prefers-reduced-motion` pada loop WebGL `HeroGlobe.tsx` dan canvas 2D `StarfieldBackground.tsx`.

#### 5. Refaktor Layout & UX Navbar (Commit `d248792`)

- **Active Scroll-Spy Navbar**: Mengimplementasikan deteksi seksi aktif secara real-time saat scroll melintasi setiap section.
- **Touch Targets $\ge 44$px**:
  - Tombol menu desktop disesuaikan ke `min-h-11`.
  - Toggle tema dan hamburger menu disesuaikan ke `min-h-11 min-w-11`.
  - Ikon sosial media tim dan footer diperbesar dari 32px ke 44px (`h-11 w-11`) memenuhi standar WCAG 2.5.5.
- **Workflow Stepper Pipeline**: Mengubah seksi Workflow dari grid kartu generik 4-kolom menjadi arsitektur _stepper pipeline_ terhubung (garis konektor gradien pada desktop, nomor milestone `01`–`04`, dan tag sprint) untuk memecah kejenuhan layout.
- **Semantik & Outline**: Mengubah nama pembuat testimoni dari `<h3>` menjadi `<p font-bold>` untuk menjaga kerapian outline dokumen, serta menghapus wrapper nested card berlebih di `FooterSection.tsx`.

#### 6. Resolusi Bug Card Hover Clipping & Footer Island (Commit `24e7bac`)

- **Bug Card Terpotong**: Kartu pada Core Capabilities, Portfolio, dan Team terpotong di tepi kiri/kanan saat di-hover.
- **Akar Masalah**:
  1. `.m3-section-container` di `index.css` memiliki `content-visibility: auto`, yang memicu browser _paint containment_ (`contain: paint`). Sifat ini memotong paksa (_clip_) elemen apa pun yang keluar dari kotak padding seksi.
  2. Animasi hover menggunakan `scale: 1.03`, yang memperlebar kartu 3% secara horizontal melebihi margin grid.
- **Solusi**:
  - Mengubah `.m3-section-container` menjadi `overflow: visible`.
  - Mengubah hover kartu dari ekspansi skala horizontal menjadi **Pure Vertical Elevation Lift** (`whileHover={{ y: -8 }}` dengan transisi pegas dan bayangan diffuse M3). Kartu terangkat secara elegan ke atas tanpa melebar ke samping.
- **Footer Island Unification**: Mengembalikan `FooterSection` menjadi kontainer pulau M3 yang utuh (`rounded-[2.5rem]`, padding responsif `p-8 sm:p-12 lg:p-16`, border M3) yang sejajar 100% dengan lebar `max-w-6xl` di `App.tsx` (selaras dengan kartu CTA).

#### 7. Polishing Tipografi & Token Warna (Commit `aa5ecb9`)

- **Skala Tipografi**: Menstandarkan seluruh teks mikro (`text-[10px]` dan `text-[11px]` di `AboutSection`, `PortfolioSection`, `ServicesSection`, dan `FooterSection`) menjadi `text-xs` (12px) sesuai lantai batas `DESIGN.md`.
- **Harmonisasi Token Warna**: Mendaftarkan 10 warna tonal M3 (`tonal-mint`, `tonal-rose`, `tonal-amber`, dll.) ke frontmatter `DESIGN.md`.
- **Copywriting**: Menghapus sisa klise AI di `AboutSection` menjadi _"Architected for scale, crafted for human impact."_

#### 8. Hardening, Adaptasi Responsif, & Optimasi Render (Commit `84d3f03`)

- **Hardening (`/impeccable harden`)**:
  - `Input.tsx`: Font input diatur ke `text-base sm:text-sm` (16px di mobile) untuk mencegah Safari iOS melakukan _force-zoom_ otomatis saat fokus.
  - `Card.tsx`: Menambahkan `min-w-0 wrap-break-word` agar teks panjang/URL tidak merusak layout flex/grid.
  - `CtaSection.tsx`: Menambahkan `role="status"` dengan `aria-live="polite"` untuk notifikasi submit form CTA dan `aria-live="assertive"` pada pesan error.
  - `ErrorBoundary.tsx`: Menambahkan ring `focus-visible:ring-2` pada tombol reload.
- **Adaptasi Responsif (`/impeccable adapt`)**:
  - Diuji pada 3 profil viewport: Mobile (360x780), Tablet (768x1024), dan Desktop (1280x800). Navigasi dan hierarki terbukti adaptif tanpa horizontal overflow.
- **Optimasi Performa (`/impeccable optimize`)**:
  - Menambahkan guard `document.hidden` pada animation loop `HeroGlobe.tsx` (Three.js). Saat tab diminimalkan atau berpindah, rendering WebGL berhenti total untuk menghemat siklus GPU/CPU dan baterai perangkat.

#### 9. Pembersihan Linting & Format Prettier (Commit `12a6317`)

- Mengganti class usang Tailwind: `break-words` $\to$ `wrap-break-word`, `h-[1px]` / `w-[1px]` $\to$ `h-px` / `w-px`.
- Mengganti arbitrary bracket `min-h-[44px]`, `min-w-[44px]`, `min-h-[40px]` di `Navbar.tsx` menjadi token standar `min-h-11`, `min-w-11`, `min-h-10`.
- Menghilangkan deklarasi bayangan duplikat pada navbar.
- Menjalankan `prettier --write .` pada 13 file kode. Status: 100% lolos Prettier check dan Oxlint 0 warnings/errors.

#### 10. Sentuhan Delight & Redesain Dropdown Tema M3 (Commit `f761828`)

- **Proporsi Emas Dropdown**: Memperbaiki dropdown ganti tema di `Navbar.tsx` dari kotak kaku (`w-36`) menjadi menu M3 yang proporsional (`w-48`, `rounded-2xl`, kaca `backdrop-blur-xl`).
- **Leading Icons & Trailing Checkmark**: Setiap opsi dilengkapi ikon (☀️ Light, 🌙 Dark, 💻 System) dan ikon centang (`Check`) aktif.
- **Ergonomi Interaksi**: Animasi pegas pada ikon pemicu, rotasi chevron 180°, dan event listener _click-outside_ untuk menutup dropdown otomatis.
- **CTA Success Confirmation**: Menambahkan banner konfirmasi sukses dengan animasi pegas lembut (_spring scale-in_) pada pengiriman form konsultasi di `CtaSection.tsx`.

#### 11. Perbaikan Bug Scroll-Spy & Sliding Pill Navbar (Commit `e25ddea`)

- **Bug**: Background ungu indikator navigasi terkunci di "Contact" dan tidak berpindah saat menu lain diklik atau di-scroll.
- **Akar Masalah**: Setiap section dibungkus `<motion.div className="m3-section-container transform-gpu">`. Di CSS DOM, properti `transform` otomatis menjadikan container pembungkus sebagai `offsetParent`. Akibatnya `el.offsetTop` bernilai `0` untuk semua section, menyebabkan loop scroll-spy selalu mendeteksi elemen terakhir.
- **Solusi**:
  - Mengganti `offsetTop` dengan pengukuran viewport presisi: `rect.top <= anchor && rect.bottom > anchor` (`getBoundingClientRect()`).
  - Menambahkan _immediate click state update_ dan _temporary scroll lock_ (`isClickingRef`) agar animasi scroll tidak melompat.
  - Menerapkan Framer Motion `layoutId="navbar-active-pill"` pada background pill ungu (`primary-container`). Pill ungu kini meluncur halus dengan fisika pegas (_spring physics_) ke tombol mana pun yang aktif.

#### 12. E2E Testing & Browser Automation Setup (Commit `b352e49`)

- **Konfigurasi Playwright Host Browser**: Mengonfigurasi `playwright.config.ts` (`launchOptions.executablePath`) agar secara otomatis mengikat ke **Helium Browser** di Windows host (`C:\Program Files\imput\Helium\Application\chrome.exe`).
- **Pembersihan Cache Playwright**: Menghapus unduhan browser Linux headless Playwright dari `/home/hutamatr/.cache/ms-playwright/` dan Windows host cache untuk membebaskan ruang disk (~600+ MB) karena pengujian berjalan langsung di host browser.
- **Verifikasi 100% Lulus**: 19 pengujian E2E (SEO, A11y, heading hierarchy, HTML5 landmarks, form interactivity, active navigation, WebGL 2.0 active, CLS = 0.0000) terverifikasi lulus di Helium Browser.

#### 13. Pembaruan Dokumen Aturan Global (`%APPDATA%\Zed\AGENTS.md`)

- **Poin 5 Baru**: `⚙️ Ekosistem Backend & Arsitektur Sistem Modern (Universal 2026+)` mencakup 10 pilar universal:
  1. _Hexagonal Architecture (Ports & Adapters)_
  2. _Resiliency & Fault-Tolerance (Idempotency, Circuit Breaker, Outbox Pattern)_
  3. _Backend API Security & Defensive Controls (Rate Limiting, Max Payload, Least Privilege, Audit Trail)_
  4. _Concurrency Control & Race Condition Protection (Optimistic & Pessimistic Locking)_
  5. _Asynchronous Offloading & Durable Background Workers (DLQ, Auto-Retry)_
  6. _Smart Caching & Cache Stampede Protection (TTL Wajib, Distributed Mutex)_
  7. _Contract-First & API Evolution (Schema-First, Expand-Contract)_
  8. _Abstraksi Akses Data & Migrasi Aman (Repository/Unit of Work, Zero-Downtime Migration)_
  9. _Unified Observability (OpenTelemetry: Tracing, JSON Logs, Health Probes)_
  10. _Stateless & Graceful Lifecycle (SIGTERM/SIGINT Graceful Shutdown)_
- **Poin 8**: `🧪 Standar Pengujian E2E & Browser Automation (WSL & Windows)` mewajibkan binding ke host browser Windows (Helium) via CDP dan melarang unduhan Linux headless di WSL tanpa sudo.

---

## Riwayat Commit Terbaru (`development`)

```text
b352e49 test(e2e): configure Helium browser executable path and skip webserver option in Playwright
e25ddea fix(navbar): resolve scroll-spy offset calculation and add animated sliding pill background
f761828 feat(ui): redesign theme dropdown according to Material You 3 menu specs and golden proportions
12a6317 fix(lint): resolve Tailwind v4 syntax warnings and enforce Prettier formatting
4684941 feat(delight): add tactile spring animations to theme toggle and affirmative confirmation feedback to CTA form
84d3f03 feat(impeccable): harden forms and layout overflow, verify responsive adaptation, and optimize Three.js loop
aa5ecb9 feat(design-polish): harmonize typography scale floor to 12px, add tonal colors to DESIGN.md and polish copy
24e7bac fix(layout): eliminate hover clipping via vertical lift and restore rounded footer island
d248792 feat(ux-layout): add active scroll-spy, 44px touch targets, workflow stepper and clean footer semantics
8ab4206 fix(design): unify Visionary branding, add focus-visible ring, remove AI orbs and add reduced-motion guards
706bdd9 feat(design-system): initialize PRODUCT.md, DESIGN.md and resolve audit findings
```

---

## Pending Issues / Status Cabang

- Seluruh pekerjaan iterasi desain, hardening, audit, polish, dan perbaikan UX berada di branch **`development`**.
- Branch **`main`** berada pada commit `a36f29e` (bersih, menunggu merge dari `development` setelah semua fitur Phase 4 selesai).
- File untracked `new.js` di root proyek (dibiarkan sesuai aturan _non-destructive actions_).

---

## Next Steps

1. **Phase 4.4: Progressive Web App (PWA)**:
   - Instalasi & integrasi `vite-plugin-pwa`.
   - Pembuatan Web App Manifest (`manifest.json`: nama aplikasi, theme color, background color, display mode `standalone`).
   - Penyiapan set ikon PWA (192x192, 512x512, maskable icon).
   - Konfigurasi caching strategy service worker (offline fallback, caching font & aset statis).
   - Verifikasi instalabilitas dan kapabilitas offline di Helium Browser.
2. **Phase 4 Final Review & Merge**:
   - Menjalankan linting dan E2E audit penuh sebelum merge.
   - Merge branch `development` ke branch `main`.
3. **Phase 5: Monitoring & Maintenance (Backlog)**:
   - Lighthouse CI di GitHub Actions untuk otomasi audit skor performa per push.
   - Rutin audit versi dependensi (`three`, `react`, `vite`).

---

## Agent Instructions & Rekomendasi Kepatuhan

- **Kepatuhan Aturan Global (`AGENTS.md`)**: Wajib selalu memeriksa `%APPDATA%\Zed\AGENTS.md` (Poin 1–8).
- **Backend Standard**: Jika mengerjakan fitur backend di masa depan, wajib menerapkan 10 pilar Poin 5 (Hexagonal architecture, Idempotency, Rate limiting, Locking, DLQ, TTL cache).
- **E2E Testing di Lingkungan WSL**: Jangan pernah menjalankan `npx playwright install` untuk mengunduh browser Linux di WSL. Selalu gunakan host browser binding ke Helium Browser via `launchOptions.executablePath` atau script evaluasi di host Windows.
- **Desain Material You 3**: Patuhi token kanonikal di `DESIGN.md` dan `.impeccable/design.json`. Elevasi menggunakan _tonal surface containers_ dan translasi vertikal murni (`y: -8`), dilarang menggunakan horizontal scaling yang merusak batas kontainer.
- **Strict TypeScript & OWASP**: Dilarang keras memakai tipe `any`. Semua input form wajib divalidasi dengan Zod schema.
