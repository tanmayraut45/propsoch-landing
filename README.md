# Propsoch Landing Page - Redesigned

An improved version of the [Propsoch landing page](https://www.propsoch.com/) built with Next.js 16, TypeScript, and Tailwind CSS.

## Live Demo

[View Deployed Site](https://propsoch-landing.vercel.app) _(deploy to Vercel to see live)_

---

## Part 1: Analysis

### Original Site Lighthouse Scores

| Metric         | Desktop | Mobile |
| -------------- | ------- | ------ |
| Performance    | 65      | 33     |
| Accessibility  | 74      | 71     |
| Best Practices | 96      | 92     |
| SEO            | 100     | 100    |

### UX/UI Issues Identified

| #   | Issue                                                                                  | Category      | Solution                                                                                                          |
| --- | -------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------- |
| 1   | **Cluttered Hero** — City tabs compete with headline; video thumbnail disconnected     | Visual/UX     | Streamlined layout with clear hierarchy, elegant city toggle with gradient active state, glassmorphism video card |
| 2   | **Weak Stats Section** — Plain numbers, no animation or icons                          | Visual        | Animated counters with intersection observer, custom icons, glass cards with hover effects                        |
| 3   | **Heavy Testimonials** — Long text blocks, tiny navigation arrows (poor touch targets) | UX            | Shortened quotes with "Read more", 48px touch-target buttons, snap-scroll carousel                                |
| 4   | **Poor Mobile Performance** — 5.5s JS execution, 10.6s main-thread blocking            | Performance   | Static generation, Tailwind CSS (no runtime), `next/font` optimization, minimal client JS                         |
| 5   | **Accessibility Issues** — Low contrast (#9CA3AF on white), small interactive elements | Accessibility | WCAG AA colors, 44px+ touch targets, ARIA labels, semantic HTML                                                   |

---

## Part 2: What I Built

### Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

### Sections Built

| Section               | Description                                                                             |
| --------------------- | --------------------------------------------------------------------------------------- |
| **Hero**              | Pearl white gradient, animated headlines, city selector, video modal with YouTube embed |
| **Stats**             | Animated counters triggered on scroll, professional SVG icons                           |
| **How It Works**      | 5-step carousel with navigation, property analysis preview                              |
| **Comparison**        | Feature comparison table (Propsoch vs Portals vs Brokers)                               |
| **Value Proposition** | Peace of Mind report features, extended services grid                                   |
| **Testimonials**      | Horizontal carousel with property images, verified badges, star ratings                 |
| **Navbar**            | Glassmorphism, announcement bar, responsive mobile menu                                 |
| **Footer**            | Developer/area links, social icons, legal info                                          |

### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Touch-friendly navigation (48px minimum targets)
- Optimized images via `next/image` with responsive sizing

---

## Part 3: Improvements Summary

### Design

- **Glassmorphism** — Frosted glass effects for depth and modern feel
- **Pearl White Theme** — Warm, premium color palette replacing generic colors
- **Micro-animations** — Counter animations, hover effects, staggered entrances

### Performance

- Static generation (pre-rendered at build time)
- Font optimization with `next/font` (zero layout shift)
- Lazy-loaded modals and intersection observer for animations
- Tailwind compiles to static CSS (no runtime overhead)

### Accessibility

- WCAG AA compliant contrast ratios
- Semantic HTML structure
- Keyboard navigation support
- Proper ARIA labels on interactive elements

### New Features (v2.0)

- **Endless Testimonials**: Smooth marquee animation for social proof
- **Enhanced SEO**: Comprehensive OpenGraph, Twitter Cards, and JSON-LD ready metadata
- **Favicon**: Custom generated brand icon
- **Performance**: AVIF/WebP image formats enabled, aggressive caching configuration

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel:

```bash
npx vercel
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Stats.tsx
    ├── HowItWorks.tsx
    ├── Comparison.tsx
    ├── ValueProposition.tsx
    ├── Testimonials.tsx
    ├── Footer.tsx
    ├── SearchModal.tsx
    └── BookingModal.tsx
```
