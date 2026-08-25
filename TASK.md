# High-Level Improvement Plan: Vibecoding Project (SEO & Accessibility)

Dokumen ini berisi perencanaan tingkat tinggi (high-level) untuk perbaikan struktur antarmuka web pada `vibecoding-project`. Fokus utama dari perbaikan ini adalah pada optimalisasi **Search Engine Optimization (SEO)** dan **Accessibility (Aksesibilitas/a11y)**. Perencanaan ini dirancang agar mudah dieksekusi oleh programmer junior maupun agen AI.

## 1. Implementasi Semantic HTML5
*   **Konsep Utama:** Mengganti elemen generik (`<div>`, `<span>`) dengan elemen HTML5 yang semantik sesuai dengan fungsinya. Ini sangat penting agar mesin pencari (Googlebot) dapat memahami struktur dan hierarki konten web dengan tepat.
*   **Target Implementasi:**
    *   Menggunakan `<header>` dan `<nav>` untuk bagian navigasi utama.
    *   Menggunakan `<main>` untuk membungkus keseluruhan konten utama halaman.
    *   Menggunakan `<section>` untuk setiap bagian konten utama (Hero, About, Services, dll).
    *   Menggunakan `<article>` untuk blok konten mandiri yang dapat dibagikan atau berdiri sendiri (seperti item portofolio atau testimoni).
    *   Menggunakan `<footer>` untuk bagian informasi penutup halaman.

## 2. Struktur Heading yang Logis (Heading Hierarchy)
*   **Konsep Utama:** Memastikan hierarki *heading* berurutan secara logis untuk membantu *screen reader* dan bot mesin pencari melakukan *crawling*.
*   **Target Implementasi:**
    *   Hanya boleh ada **satu** tag `<h1>` per halaman (berada di Hero Section) yang memuat kata kunci utama.
    *   Menggunakan `<h2>` untuk judul utama di setiap `<section>`.
    *   Menggunakan `<h3>`, `<h4>`, dan seterusnya untuk sub-judul tanpa melompati level (misalnya tidak boleh lompat dari `<h2>` langsung ke `<h4>`).

## 3. Peningkatan Aksesibilitas (Accessibility / A11y)
*   **Konsep Utama:** Memastikan website ramah bagi penyandang disabilitas dan mematuhi standar WCAG (Web Content Accessibility Guidelines). Tingkat aksesibilitas yang tinggi juga berkorelasi positif dengan skor SEO.
*   **Target Implementasi:**
    *   **Atribut Alt Image:** Pastikan semua gambar memiliki atribut `alt` yang deskriptif. Jika gambar hanya untuk dekorasi, gunakan atribut `alt=""` atau `aria-hidden="true"`.
    *   **Aria Labels:** Tambahkan atribut `aria-label` pada tombol atau tautan yang tidak memiliki teks (seperti tombol ikon, hamburger menu, atau tautan media sosial) agar *screen reader* bisa membacanya.
    *   **Kontras Teks & Navigasi Keyboard:** (Opsional/Bawaan Material You 3) Pastikan kontras warna teks dan latar belakang sudah memadai serta elemen interaktif (tombol, link) dapat diakses menggunakan tombol `Tab` pada keyboard.

## 4. Meta Tags & SEO Fundamental
*   **Konsep Utama:** Memberikan metadata yang kaya agar tautan website tampil menarik di hasil pencarian (SERP) dan media sosial.
*   **Target Implementasi:**
    *   Memastikan `index.html` memiliki `<title>` yang jelas dan memuat *keywords* relevan.
    *   Menambahkan `<meta name="description">` yang ringkas dan mengundang klik.
    *   Menambahkan meta tags Open Graph (`og:title`, `og:description`, `og:image`) untuk optimasi *sharing* di platform media sosial.
