---
name: Visionary
description: Architectural Fluidity rooted in Google Material You 3 and Three.js WebGL
colors:
  primary: "#6750a4"
  on-primary: "#ffffff"
  primary-container: "#eaddff"
  on-primary-container: "#21005d"
  secondary: "#625b71"
  secondary-container: "#e8def8"
  on-secondary-container: "#1d192b"
  tertiary: "#7d5260"
  tertiary-container: "#ffd8e4"
  on-tertiary-container: "#31111d"
  surface: "#fdf8fd"
  surface-container-low: "#f7f2fa"
  surface-container: "#f3edf7"
  surface-container-high: "#ece6f0"
  surface-container-highest: "#e6e0e9"
  outline: "#79747e"
  outline-variant: "#cac4d0"
  dark-surface: "#141218"
  dark-surface-container: "#211f26"
  dark-primary: "#d0bcff"
  dark-primary-container: "#4f378b"
  tonal-mint: "#d7f2e3"
  tonal-mint-dark: "#0b3d2c"
  tonal-rose: "#ffd8e4"
  tonal-rose-dark: "#492532"
  tonal-amber: "#fdf3c9"
  tonal-amber-dark: "#3b3300"
typography:
  display:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "28px"
  "2xl": "36px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-tonal:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  card-filled:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xl}"
    padding: "24px 32px"
  card-elevated:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xl}"
    padding: "24px 32px"
  input-field:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.outline}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
---

# Design System: Visionary

## Overview

**Creative North Star: "The Architectural Fluid"**

Visionary adalah manifestasi sistem desain Google Material You 3 (M3) dengan pendekatan teknik bedah yang presisi (*surgical & restrained*). Desain menolak keras tren "AI Slop" — tidak ada gradasi ungu-ke-biru generik tanpa fungsi, tidak ada tumpukan kartu tanpa tujuan hierarki, dan tidak ada dekorasi visual acak. Setiap elemen visual beroperasi sebagai instrumen antarmuka yang disiplin, memadukan partikel 3D WebGL (Three.js) dengan ergonomi kontur Material You.

Sistem ini didasarkan pada fluiditas arsitektur: transisi tema reaktif (*Light, Dark, System*), momentum scroll berbasis fisika (*Lenis*), dan elevasi tonal terukur (*Tonal Surface Containers*). Bentuk kapsul kontinu (*continuous pill shape*) menjadi jangkar visual untuk semua elemen aksi interaktif, sementara kontainer konten menggunakan radius lebar yang proporsional.

**Key Characteristics:**
- Kepatuhan total terhadap spesifikasi Google Material You 3 dan token semantik CSS (`--md-sys-color-*`).
- Elevasi tonal terukur menggantikan ketergantungan pada drop-shadow pekat.
- Bentuk kapsul penuh (*pill shape*) untuk seluruh kontrol aksi (tombol, badge, input, nav-bar).
- Zero AI Slop: Tipografi fungsional berhierarki tegas, palet warna harmonis berbasis tonal ramps, dan mikro-interaksi spring terkalibrasi.

## Colors

Palet warna diturunkan langsung dari spesifikasi Material You 3, dibagi secara ketat menurut peran semantik (Primary, Secondary, Tertiary, dan Neutral Containers) dengan responsivitas tema Light & Dark terkalibrasi.

### Primary
- **Iris Lavender / Deep Violet** (`#6750a4` Light / `#d0bcff` Dark): Aksen utama aksi konversi dan identitas brand. Digunakan secara terukur (≤10% dari viewport) pada tombol CTA primer, indikator aktif, dan status aktif.
- **Primary Container** (`#eaddff` Light / `#4f378b` Dark): Permukaan aksen tonal rendah untuk tombol sekunder dan badge fitur unggulan.

### Secondary
- **Slate Violet** (`#625b71` Light / `#ccc2dc` Dark): Pendukung elemen informasi sekunder dan penyeimbang aksen primer.
- **Secondary Container** (`#e8def8` Light / `#4a4458` Dark): Kontainer aksen kedua untuk filter dan status informasi.

### Tertiary
- **Dusty Mauve / Soft Rose** (`#7d5260` Light / `#efb8c8` Dark): Elemen penegas artistik dan kontras visual halus pada visualisasi data atau tag spesifik.

### Neutral
- **Surface & Background** (`#fdf8fd` Light / `#0f0d13` Dark): Kanvas latar utama aplikasi.
- **Surface Container Low** (`#f7f2fa` Light / `#1d1b20` Dark): Layer permukaan terendah di atas kanvas.
- **Surface Container** (`#f3edf7` Light / `#211f26` Dark): Permukaan standar untuk kartu konten dan form input.
- **Surface Container High** (`#ece6f0` Light / `#2b2930` Dark): Permukaan aktif untuk state hover atau elevasi kartu.
- **Outline & Outline Variant** (`#79747e` / `#cac4d0` Light, `#938f99` / `#49454f` Dark): Garis batas struktural setebal 1px untuk mempertegas pemisahan ruang.

### Named Rules
**The Strict Tonal Role Rule.** Dilarang menggunakan warna aksen primer di luar komponen aksi langsung (CTA, link aktif, pill terpilih). Seluruh permukaan latar wajib menggunakan deret `surface-container-*`.
**The No-Unanchored-Gradient Rule.** Dilarang menambahkan linear gradient dekoratif tanpa sumber cahaya kontekstual. Gradasi hanya diizinkan sebagai ambient glow partikel kosmik di balik kanvas 3D Three.js.

## Typography

**Display Font:** Inter Variable (fallback: Inter, system-ui, sans-serif)  
**Body Font:** Inter Variable (fallback: Inter, system-ui, sans-serif)  
**Label Font:** Inter Variable (uppercase tracking wide)

**Character:** Rasional, bersih, dan berwibawa enterprise. Tipografi mengandalkan kontras bobot matematis (800 Extrabold vs 400 Regular) serta tight tracking untuk display demi menciptakan impresi modern dan terukur.

### Hierarchy
- **Display** (800 Extrabold, `clamp(2.5rem, 5vw, 4.5rem)`, line-height: 1.1, letter-spacing: `-0.03em`): Digunakan khusus pada Hero headline.
- **Headline** (700 Bold, `2.25rem` / 36px, line-height: 1.2, letter-spacing: `-0.02em`): Digunakan pada judul seksi utama.
- **Title** (600 SemiBold, `1.25rem` / 20px, line-height: 1.4, letter-spacing: `-0.01em`): Judul kartu modul dan fitur.
- **Body** (400 Regular, `1rem` / 16px, line-height: 1.6, letter-spacing: `-0.01em`, max-width: 65ch): Paragraf deskriptif dan narasi.
- **Label** (600 SemiBold, `0.75rem` / 12px, line-height: 1, letter-spacing: `0.05em`, uppercase): Badge kategori, metadata, dan chip status.

### Named Rules
**The Surgical Weight Rule.** Maksimal 3 tingkatan bobot tipografi dalam satu viewport (800/700 untuk judul, 600 untuk label/interaksi, 400 untuk teks isi). Menghindari ketidakteraturan ritme baca.

## Layout

Model spasial mengadopsi single-column flow terpusat dengan container `max-w-6xl` (1152px) dan padding horizontal responsif (`px-4 sm:px-8`). 

- **Ritme Vertikal:** Spasi antar seksi menggunakan skala proporsional `py-20` hingga `py-28` (80px–112px).
- **Grid Sistem:** Kartu fitur menggunakan responsive grid 1 kolom pada mobile, 2 kolom pada tablet (`md:grid-cols-2`), dan 3 kolom pada desktop (`lg:grid-cols-3`) dengan jarak antar elemen `gap-6` atau `gap-8`.
- **Fluid Momentum:** Seluruh navigasi halaman diikat oleh momentum scroll Lenis yang tersinkronisasi dengan transformasi Framer Motion.

### Named Rules
**The Single Momentum Rule.** Dilarang membuat kontainer dengan internal scrolling vertikal di dalam halaman kecuali modal dialog. Seluruh aliran informasi harus mengikuti single scroll axis global.

## Elevation & Depth

Sistem mengadopsi filosofi **Tonal Elevation** murni Google Material You 3. Ketinggian elemen tidak direpresentasikan oleh drop-shadow pekat, melainkan oleh pergeseran rona warna permukaan (*surface tonal shifts*).

- **Rest State:** Flat by default. Kartu berada di atas `surface-container` dengan batas `outline-variant` 1px.
- **Lifted State (Hover/Active):** Permukaan bergeser ke `surface-container-high` disertai elevasi translasi `translateY(-4px)` dan ambient diffuse shadow tipis (`0 12px 32px var(--md-sys-color-shadow)`).
- **Glassmorphism Layer (Navbar):** Memanfaatkan `backdrop-blur-xl` dengan perpaduan warna permukaan semitransparan 80% untuk mempertahankan keterbacaan teks saat melintasi objek 3D.

### Named Rules
**The Tonal Layering Rule.** Elevasi wajib dicapai melalui perpindahan tingkat kontainer (`low` → `container` → `high`), bukan dengan mempertebal bayangan hitam pekat.

## Shapes

- **Bentuk Kapsul Kontinu (Full Radius `9999px`):** Wajib digunakan untuk seluruh elemen aksi interaktif — tombol, tag/badge, input form, pill navbar, dan indikator status.
- **Kontainer Konten (Radius XL `28px` / `rounded-3xl`):** Digunakan untuk seluruh kartu fitur, panel dialog, dan kontainer seksi.
- **Border Stroke:** Tepat 1px `var(--md-sys-color-outline-variant)` untuk mendefinisikan batas modul secara presisi tanpa terasa kaku.

## Components

### Buttons
- **Shape:** Full pill (`rounded-full`, 9999px).
- **Primary:** Background `var(--md-sys-color-primary)`, teks `var(--md-sys-color-on-primary)`, tinggi 44px (`h-11`), padding `px-6`. Hover: opacity 90%, skala active `scale-[0.98]`.
- **Tonal:** Background `var(--md-sys-color-primary-container)`, teks `var(--md-sys-color-on-primary-container)`.
- **Outlined:** Border 1px `var(--md-sys-color-outline)`, background transparan, teks `var(--md-sys-color-primary)`.

### Cards
- **Corner Style:** Radius `28px` (`rounded-3xl`).
- **Background:** `var(--md-sys-color-surface-container)`.
- **Border:** 1px `var(--md-sys-color-outline-variant)`.
- **Hover:** Translasi vertikal `translateY(-4px)`, transisi kubik `cubic-bezier(0.2, 0, 0, 1)`.

### Inputs
- **Style:** Kapsul penuh (`rounded-full`), tinggi 48px (`h-12`), border 1px `var(--md-sys-color-outline)`, padding `px-5 py-3`.
- **Focus:** Border aktif `var(--md-sys-color-primary)` dengan ring 2px `var(--md-sys-color-primary-container)`.

### Navigation
- **Style:** Floating pill container di tengah atas, `rounded-full`, border 1px translucent, `backdrop-blur-xl`.

## Do's and Don'ts

### Do:
- **Do** gunakan token CSS native `var(--md-sys-color-*)` untuk semua penetapan warna.
- **Do** pertahankan radius `rounded-full` untuk semua tombol dan kontrol interaktif.
- **Do** gunakan elevasi tonal (`surface-container` ke `surface-container-high`) saat state aktif/hover.
- **Do** terapkan rasio kontras teks minimal 4.5:1 untuk keterbacaan standar WCAG AA.

### Don't:
- **Don't** gunakan gradasi ungu-ke-biru klise ala template AI generik (AI Slop).
- **Don't** gunakan sudut tajam atau radius di bawah 8px untuk kartu konten.
- **Don't** menggunakan warna hardcoded hex di dalam styling komponen jika token Material You sudah menyediakannya.
- **Don't** menumpuk kartu di dalam kartu (*nested card fatigue*).
