# Project Roadmap & Task Planning: Iteration 2 (Phase 4 - Beyond MVP)

Dokumen ini berisi perencanaan lanjutan untuk memperkaya fungsionalitas dan skalabilitas proyek "Visionary".

---

## 🚀 Phase 4: Production-Ready Enhancements
*Fokus: Telemetri, PWA, dan Dynamic Theme.*

### 1. Telemetry & User Insights
- [ ] **Integrasi Analitik**: Implementasi [Vercel Analytics](https://vercel.com/analytics) atau [Plausible](https://plausible.io/) untuk melacak *user journey* tanpa mengorbankan privasi.
- [ ] **Custom Event Tracking**: Tambahkan pelacakan event khusus untuk:
    - CTA Form Submission (event `cta_form_submit`).
    - Durasi interaksi dengan `HeroGlobe` (Three.js canvas).

### 2. Progressive Web App (PWA)
- [ ] **Offline Capabilities**: Integrasi `vite-plugin-pwa` untuk *service worker* dasar.
- [ ] **Manifest & Assets**: Konfigurasi `manifest.json` (ikon, *theme-color*, nama aplikasi) agar aplikasi dapat diinstal di *mobile* atau *desktop*.

### 3. Dynamic Design System
- [ ] **Theme Switcher**: Implementasi toggle manual (Dark/Light/System) yang mengubah CSS variables `var(--md-sys-color-*)` secara dinamis.
- [ ] **Color Palette Sync**: Sinkronisasi warna aksen berdasarkan preferensi sistem pengguna menggunakan `prefers-color-scheme`.

### 4. Advanced UX Polish
- [ ] **Reduced Motion Preference**: Implementasi `prefers-reduced-motion` pada komponen `HeroGlobe` dan transisi lainnya untuk aksesibilitas yang lebih baik.
- [ ] **Micro-Interaction**: Penambahan *framer-motion* *hover effects* yang lebih responsif pada elemen kartu (portfolio/services).

---

## 📈 Monitoring & Maintenance
- [ ] **Lighthouse CI**: Automasi pengecekan performa setiap *push* ke `main` menggunakan GitHub Actions/Playwright script.
- [ ] **Dependency Audit**: Rutin cek versi `three`, `react`, dan `vite` untuk menghindari *security vulnerabilities*.
