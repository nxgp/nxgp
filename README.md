# Nx Growth Partners — marketing site

A performance-first marketing site for Nx Growth Partners (nxgp.io).

**Positioning:** Nx is an **embedded technology partner** — "your team, extended, not
replaced." Senior operators and engineers work inside the client's business across three equal
service pillars (Go-to-Market · AI Engineering · Product Development), for private equity,
enterprise and government buyers. The spine is the operating loop: Discover → Prioritize →
Deliver → Optimize. One CTA everywhere: **Book a call**. AI is one of three pillars — never the
top-line. All copy lives in `src/data/content.ts`.

## Stack

- **Vite + React + TypeScript**, **Tailwind CSS v4** (`@theme` tokens in `src/index.css`)
- **No animation libraries** — motion is pure CSS + IntersectionObserver for page speed:
  - `[data-reveal]` + `useReveal` (IntersectionObserver) → CSS transition reveals
  - `.rise` CSS auto-play for the hero (always fires, no observer dependency)
  - CSS hover on Button/Card, native smooth anchor scroll, static aurora
- **lucide-react** icons · **@number-flow/react** animated counters
- **Montserrat** (headlines + UI) + **Lora** (supporting serif copy)

Removing GSAP/Lenis/Motion cut the JS bundle from ~171KB to ~78KB gzipped. Everything is gated
behind `prefers-reduced-motion`.

## SEO

Semantic sections, single `<h1>`, descriptive `<title>`/meta, Open Graph + Twitter cards,
canonical, JSON-LD `Organization`, `public/robots.txt` + `public/sitemap.xml`.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Sections

Hero · Proof (logo wall) · Operating model (the loop) · Services (3 pillars) · Embedded
(embed-vs-handoff + weekly cadence) · Industries (PE/Enterprise/Government) · Work (case
studies) · Stats · Quote · About · CTA · Footer.

## Before publish (needs real data)

- **Logo wall** — currently the honest "Our team has delivered for" frame. Use "Trusted by"
  only for contracted, paying clients.
- **Case studies** — currently anonymized; publish named stories only with client approval.
- **Government** — framed as "capabilities & teaming"; upgrade only with real past performance.
- **Book a call** — wire to a real scheduler (currently a placeholder).
