# Changelog

All notable changes to this project are documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2026.09] - 2026-09-16

- Maintenance review of optometry-clinic — a single-page React marketing site for an optometry practice, titled "ClearView Optometry | Expert Eye Care & Vision Services".
- Status: one-page composition of nine section components (Navbar, Hero, InsuranceBanner, Services, About, Testimonials, BookingForm, Contact, Footer); the booking form is a front-end component with no backend in this repo.
- Stack: React 19 + Vite 7 + Tailwind CSS 4 (via `@tailwindcss/vite`), lucide-react icons, ESLint 9; Vite was pinned to v7 in the last commit for Tailwind/Vercel build compatibility.
- Reviewed September 2026: docs refreshed, package version bumped to 0.1.0, versioned as v2026.09. No components, styles or build config were changed.
- Known gaps: README is still the stock "React + Vite" template text with nothing about this site; package version had never been set (0.0.0); no LICENSE; no CHANGELOG before this release; no tests; no live URL stated in the repo.
