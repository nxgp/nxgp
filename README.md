# NX Growth Partners — marketing site

A high-craft, Mercury-quality marketing site for NX Growth Partners (nxgp.io) — a holding
company and venture studio that builds, holds and operates exceptional companies, run on an
AI-native internal operating model.

## Stack

- **Vite + React + TypeScript**, **Tailwind CSS v4** (`@theme` tokens in `src/index.css`)
- **Lenis** — app-wide smooth inertia scroll (`src/lib/useSmoothScroll.ts`)
- **GSAP + ScrollTrigger** — scroll choreography: hero pin/scrub, the pinned "how the studio
  works" section, the **pinned horizontal portfolio scroll**, batched reveals
- **Motion** — Card/Nav/HowItWorks springs & transitions
- **lucide-react** icons · **@number-flow/react** counters · **Manrope** type

Lenis and GSAP share one ticker so scroll and pins never fight. Everything is gated behind
`prefers-reduced-motion`; pinned/horizontal sections fall back to vertical stacked reveals on
small screens.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Sections

Hero (clip-reveal + studio-ops console + pin/scrub) · Proof · Studio model (5 arms) · How the
studio works (pinned) · Engineering (capabilities + stack + Mentera proof) · **Portfolio
(pinned horizontal scroll — Mentera, Convey, Logbook, Koitel, Agentics, WD Chat)** · Stats ·
Quote · Approach · CTA · Footer. Plus a custom cursor and a subtly shifting tonal background.

All copy lives in `src/data/content.ts`.

## Positioning rule

The AI agent fleet is **internal operating leverage only** — it powers how the studio works,
not the companies it builds. People own the decisions; the fleet does the volume, internally.

## Notes

- This is a git repo — commit a checkpoint before large changes. A prior "embedded technology
  partner" rewrite is preserved in an earlier commit if ever needed.
- SEO: OG/Twitter meta, JSON-LD Organization, `public/robots.txt` + `sitemap.xml`.
