# 🌌 Visionary

> **Visionary** adalah aplikasi web modern berskala _enterprise_ yang menggabungkan ergonomi desain **Google Material You 3**, visualisasi interaktif **3D WebGL (Three.js)**, dan arsitektur frontend reaktif berkinerja tinggi berbasis **React 19**.

---

## ✨ Fitur Utama

- **🎨 Google Material You 3 Design System**: Integrasi tema dinamis (_Dark & Light mode_) menggunakan variabel CSS native (`--md-sys-color-*`).
- **🌐 Visualisasi 3D WebGL Interaktif**: Rendering bola dunia partikel interaktif menggunakan Three.js pada Hero Section.
- **⚡ Ultra Smooth Experience**: Transisi animasi yang halus dan _smooth scrolling_ menggunakan **Framer Motion** dan **Lenis**.
- **🏗️ Arsitektur Enterprise (Separation of Concerns)**: Pemisahan tegas antara lapisan antarmuka (UI Components) dan lapisan data (`*.data.ts`).
- **🛡️ Strict Type-Safety & Validation**: 100% TypeScript tanpa tipe `any`, serta validasi skema input formulir menggunakan **Zod**.
- **🚦 Global Error Handling**: Dilengkapi dengan `ErrorBoundary` tingkat aplikasi bertema Material You 3 untuk stabilitas _runtime_.
- **♿ SEO & Aksesibilitas Terstandarisasi**: Mematuhi hierarki heading semantik HTML5 dan standar aksesibilitas WCAG (A11y).
- **🧪 Automated QA**: Didukung oleh linter berkecepatan tinggi **Oxlint** dan pengujian _end-to-end_ (E2E) menggunakan **Playwright**.

---

## 🛠️ Tech Stack

| Kategori               | Teknologi                                                                                                                       |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **Runtime & Bundler**  | [Bun](https://bun.sh/) / [Node.js](https://nodejs.org/), [Vite](https://vitejs.dev/)                                            |
| **Framework & Core**   | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)                                                   |
| **Styling & Design**   | [Tailwind CSS v4](https://tailwindcss.com/), [Base UI](https://base-ui.com/), Material You 3                                    |
| **Animation & 3D**     | [Three.js](https://threejs.org/), [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/) |
| **Data Validation**    | [Zod](https://zod.dev/)                                                                                                         |
| **Icons & Typography** | [Lucide React](https://lucide.dev/), [Inter Font](https://fontsource.org/fonts/inter)                                           |
| **Tooling & Testing**  | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html), [Playwright](https://playwright.dev/)                                    |

---

## 📁 Struktur Direktori

Proyek ini menggunakan arsitektur berbasis fitur (_feature-based modular structure_):

```text
vibecoding-project/
├── e2e/                           # Pengujian End-to-End Playwright
│   ├── accessibility-seo.spec.ts  # Audit aksesibilitas & SEO
│   ├── app.spec.ts                # Pengujian navigasi & interaksi UI
│   └── performance.spec.ts        # Pengujian metrik performa
├── public/                        # Aset statis & favicon
├── src/
│   ├── assets/                    # Gambar & aset grafis
│   ├── components/
│   │   ├── ui/                    # Komponen UI dasar (Button, Card, Input, Badge, dll.)
│   │   └── ErrorBoundary.tsx      # Global Error Boundary
│   ├── features/                  # Modul fitur mandiri (UI + Data Layer)
│   │   ├── about/                 # About Section & about.data.ts
│   │   ├── cta/                   # CTA Section & data
│   │   ├── footer/                # Footer Section & footer.data.ts
│   │   ├── hero/                  # Hero Section & HeroGlobe (Three.js)
│   │   ├── navbar/                # Navigasi & Theme Switcher
│   │   ├── portfolio/             # Portfolio Section & portfolio.data.ts
│   │   ├── services/              # Services Section & services.data.ts
│   │   ├── team/                  # Team Section & team.data.ts
│   │   ├── testimonials/          # Testimonials Section & testimonials.data.ts
│   │   └── workflow/              # Workflow Section & workflow.data.ts
│   ├── hooks/                     # Custom React Hooks (useTheme, useSmoothScroll)
│   ├── layouts/                   # Template Layout Utama
│   ├── lib/                       # Skema validasi (Zod) & utilitas umum
│   ├── types/                     # Definisi tipe & interface TypeScript terpusat
│   ├── App.tsx                    # Komponen root aplikasi
│   ├── index.css                  # Token desain Material You 3 & utilitas CSS
│   └── main.tsx                   # Entry point aplikasi
├── MEMORY.md                      # Log status & riwayat arsitektur proyek
├── TASK.md                        # Roadmap pengerjaan & checklist fitur
└── package.json                   # Dependensi & skrip proyek
```

---

## 🚀 Panduan Memulai (_Getting Started_)

### 1. Prasyarat

Pastikan Anda telah menginstal salah satu dari runtime berikut:

- [Bun](https://bun.sh/) (Sangat direkomendasikan): `v1.0.0+`
- Atau [Node.js](https://nodejs.org/): `v20.0.0+`

### 2. Instalasi Dependensi

Clone repositori dan pasang seluruh dependensi:

```bash
# Menggunakan Bun (Direkomendasikan)
bun install

# Atau menggunakan NPM
npm install
```

### 3. Menjalankan Development Server

Jalankan server pengembangan lokal:

```bash
# Menggunakan Bun
bun run dev

# Atau menggunakan NPM
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser Anda untuk melihat aplikasi.

---

## 📦 Build & Production

### Membangun Bundle Produksi

Untuk melakukan kompilasi TypeScript dan membangun aset produksi:

```bash
# Menggunakan Bun
bun run build

# Atau menggunakan NPM
npm run build
```

Hasil kompilasi yang teroptimasi akan berada di folder `/dist`.

### Menjalankan Preview Produksi

Untuk menguji build produksi secara lokal:

```bash
bun run preview
# atau
npm run preview
```

---

## 🧪 Linting & Testing

### Linting (Oxlint)

Proyek ini menggunakan Oxlint untuk proses linting berkecepatan tinggi:

```bash
bun run lint
# atau
npm run lint
```

### End-to-End Testing (Playwright)

Jalankan pengujian E2E otomatis untuk memverifikasi UI, navigasi, aksesibilitas, dan performa:

```bash
# Menjalankan seluruh rangkaian tes
bun run test:e2e

# Menjalankan tes dengan mode UI interaktif
bunx playwright test --ui
```

---

## 📜 Standar & Konvensi Kode

- **Absolute Imports**: Gunakan path alias `@/` (misal: `@/components/ui/Button` atau `@/features/hero/HeroSection`).
- **Data Layer Separation**: Jangan menaruh data statis langsung di dalam komponen JSX; selalu letakkan di file `*.data.ts` terkait.
- **Strict Typing**: Selalu gunakan `interface` atau `type` eksplisit dan hindari penggunaan `any`.
- **Validation**: Selalu validasi data formulir / input pengguna menggunakan skema **Zod**.
