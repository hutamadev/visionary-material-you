# Project Memory: Visionary (Vibecoding Project)

## Project Overview

Membangun "Visionary", sebuah aplikasi web modern dan berkinerja tinggi yang menggabungkan desain ergonomis Google Material You 3, visualisasi 3D WebGL, dan animasi interaktif untuk pengalaman pengguna yang premium.

## Environment & Tech Stack

- **Core**: React 19, TypeScript, Vite, Bun
- **Styling**: Tailwind CSS v4, Base UI, Material You 3 Design System
- **Animation & 3D**: Framer Motion, Three.js
- **Tooling**: Oxlint, Playwright (untuk e2e testing)
- **Target OS/Env**: Linux/WSL

## Current State & Completed Tasks

- **Setup Proyek**: Berhasil mengonfigurasi React 19 + TypeScript dengan Vite dan Bun.
- **Struktur Halaman Utama**: Komponen fitur telah dipecah secara modular di `src/features` (Hero, About, Services, Workflow, Portfolio, dll.).
- **UI/UX & Tema**:
  - Implementasi _Dark Mode_ dan sistem warna dinamis berbasis variabel CSS Material You 3.
  - Penambahan animasi gulir halus (Smooth Scrolling) dan efek _parallax_ interaktif menggunakan Framer Motion pada struktur utama (`App.tsx`).
- **Fundamental SEO**: _Meta tags_, Open Graph, Twitter Cards, dan konfigurasi standar telah disisipkan di `index.html`.

## Pending Issues

- **Semantic HTML & A11y**: Belum semua komponen React sepenuhnya menerapkan panduan standar aksesibilitas dan elemen semantik HTML5 seperti yang direncanakan secara mendetail pada file `TASK.md`.

## Next Steps

- **Audit & Refaktor HTML Semantik**: Memperbarui struktur DOM di setiap komponen (seperti `HeroSection`, `AboutSection`, dsb.) agar menggunakan tag `<header>`, `<main>`, `<section>`, dan `<article>`.
- **Perbaikan Hierarki Heading**: Memastikan struktur tag heading (H1 hingga H6) terstruktur secara logis dan berurutan untuk keperluan _screen reader_ dan bot pencari.
- **Peningkatan Aksesibilitas**: Menambahkan atribut `alt` deskriptif pada setiap gambar dan `aria-label` pada elemen UI/tombol interaktif, serta memastikan aplikasi 100% mendukung _keyboard navigation_.

## Agent Instructions

- **Aksesibilitas (A11y) sebagai Standar Utama**: Jangan gunakan elemen generik `<div>` atau `<span>` jika ada tag semantik HTML5 yang lebih sesuai fungsinya. Pastikan semua elemen interaktif bisa diakses oleh _screen reader_.
- **Konsistensi Desain M3**: Selalu gunakan variabel sistem warna CSS Material You (misal: `var(--md-sys-color-primary)`) daripada warna utilitas Tailwind manual agar integrasi mode terang/gelap tetap konsisten dan _native_.
- **Performa Render Tinggi**: Karena aplikasi ini padat visual dan animasi, hindari _re-renders_ DOM yang tidak perlu dengan implementasi _React 19 patterns_ dan manfaatkan _hardware acceleration_ (`transform-gpu`) untuk pergerakan UI yang kompleks.
