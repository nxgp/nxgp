/* ============================================================
   Nx Growth Partners — all site copy (v2 positioning).

   Nx is an EMBEDDED TECHNOLOGY PARTNER — "your team, extended,
   not replaced." Senior operators + engineers work inside the
   client's business across three EQUAL pillars: Go-to-Market,
   AI Engineering, Product Development. AI is one of three — never
   the top-line. Buyers: Private Equity, Enterprise, Government.
   The spine is the operating loop: Discover → Prioritize →
   Deliver → Optimize. One CTA everywhere: Book a call.
   ============================================================ */

export const brand = 'Nx Growth Partners'

export const nav = {
  brand,
  links: [
    { label: 'How we work', id: 'how-we-work' },
    { label: 'Services', id: 'services' },
    { label: 'Industries', id: 'industries' },
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
  ],
  cta: 'Book a call',
}

export const hero = {
  eyebrow: 'An embedded technology partner',
  h1a: 'Your team, extended —',
  h1b: 'not replaced.',
  sub: 'Nx Growth Partners embeds experienced operators and engineers inside your business — to find the highest-impact opportunities, align technology to business outcomes, and build the systems that move you forward.',
  ctaPrimary: 'Book a call',
  ctaSecondary: 'See how we work',
  note: 'Across go-to-market, AI engineering and product development — for private equity, enterprise and government.',
}

export const proof = {
  // Honest frame: team pedigree, not a "Trusted by" claim. Swap to
  // "Trusted by" only for contracted, paying clients (see brief §6).
  label: 'Our team has delivered for',
  wordmarks: ['Western Digital', 'TraPac', 'Harbor Industrial', 'IntelliGenix', 'Mentera'],
}

export const operatingModel = {
  kicker: 'How we work',
  h2: 'One loop, tied to your business — not just your backlog.',
  sub: 'We embed a cross-functional senior team and run a continuous loop that ties every release to a business outcome. It is the most ownable thing we do.',
  steps: [
    {
      n: '01',
      title: 'Discover',
      body: 'Find what actually moves the business before writing any code. We surface where time, revenue and customer experience leak across people, process and technology.',
    },
    {
      n: '02',
      title: 'Prioritize',
      body: 'Rank every opportunity by business impact, implementation effort and organizational readiness — so resources go where adoption and ROI are highest.',
    },
    {
      n: '03',
      title: 'Deliver',
      body: 'Engineers work inside your environment, releasing in weekly increments that create measurable value — production software that gets used, not closed tickets.',
    },
    {
      n: '04',
      title: 'Optimize',
      body: 'Every deployment feeds new insight. We track outcomes, find the next constraint and compound improvement over time.',
    },
  ],
}

export type Pillar = {
  title: string
  outcome: string
  body: string
  caps: string[]
  icon: string
}

export const services = {
  kicker: 'What we do',
  h2: 'Three pillars. One embedded team.',
  sub: 'Engage one pillar, or a cross-functional team across all three. Each is led by the outcome — the capabilities are the proof of range.',
  pillars: [
    {
      title: 'Go-to-Market',
      outcome: 'Grow pipeline and revenue.',
      body: 'Revenue operations that compound — the systems and motions that turn effort into pipeline.',
      caps: [
        'Revenue Operations',
        'CRM',
        'Sales Automation',
        'Marketing Automation',
        'Analytics',
      ],
      icon: 'TrendingUp',
    },
    {
      title: 'AI Engineering',
      outcome: 'Put AI to work where it actually pays off.',
      body: 'Applied AI inside your workflows — shipped to production, measured by outcome, not demos.',
      caps: [
        'AI SDRs',
        'AI Agents',
        'Workflow Automation',
        'Knowledge Search',
        'RAG',
        'LLM Integrations',
        'Internal Copilots',
      ],
      icon: 'Sparkles',
    },
    {
      title: 'Product Development',
      outcome: "Ship the software your team can't build fast enough.",
      body: 'Full-stack product, mobile and infrastructure — built to a real bar, inside your stack.',
      caps: [
        'SaaS Products',
        'Internal Tooling',
        'Customer Portals',
        'Mobile Apps',
        'APIs',
        'Cloud Infrastructure',
      ],
      icon: 'Boxes',
    },
  ] as Pillar[],
}

export const embedded = {
  kicker: 'The embedded model',
  h2: 'Embedded, not handed off.',
  sub: 'Most firms sell you projects or bodies. We put a senior team inside your environment and make ourselves accountable to the outcome.',
  embed: {
    label: 'Embedded — the Nx way',
    points: [
      'Inside your stack, standups and Slack',
      'A senior, cross-functional team',
      'Accountable to outcomes, not tickets',
      'Production releases every week',
      'Full transparency — you see the board live',
      'Direct access to the people building',
    ],
  },
  handoff: {
    label: 'Hand-off / staff-aug',
    points: [
      'Over the wall, mostly async',
      'Bodies you have to manage',
      'Accountable to a statement of work',
      'Big-bang delivery, months later',
      'A status deck once a month',
      'Account managers in between',
    ],
  },
  cadence: ['Plan', 'Build', 'Demo', 'Ship'],
  cadenceNote: 'A predictable weekly rhythm you can plan around.',
}

export type Industry = {
  name: string
  buyer: string
  frame: string
  visual: 'pe' | 'enterprise' | 'gov'
  accent: string
  note?: string
}

export const industries = {
  kicker: 'Who we serve',
  h2: "Built for the buyers who can't wait.",
  sub: 'Enter by industry or by service. Private equity and enterprise lead on proof; government is where we are building.',
  items: [
    {
      name: 'Private Equity',
      buyer: 'Operating partners & portfolio-company leadership',
      frame:
        'Portfolio value creation, technical diligence and speed across portcos — one partner spanning GTM, AI and product, without standing up an in-house tech org.',
      visual: 'pe',
      accent: '#0057FF',
    },
    {
      name: 'Enterprise',
      buyer: 'Revenue, IT, product and data leaders',
      frame:
        'Senior capacity and outcomes without long agency cycles or heavy hiring — an embedded team that ships inside your stack and displaces slow integrators and staff aug.',
      visual: 'enterprise',
      accent: '#47C7F0',
    },
    {
      name: 'Government',
      buyer: 'Procurement-driven buyers',
      frame:
        'Capabilities and teaming today, building toward past performance and contract vehicles. We frame this honestly — and never claim posture we do not hold.',
      visual: 'gov',
      accent: '#6C5CE7',
      note: 'Capabilities & teaming',
    },
  ] as Industry[],
}

export type CaseStudy = {
  tag: string
  title: string
  situation: string
  built: string
  result: string
  metric: string
  metricLabel: string
}

export const work = {
  kicker: 'Selected work',
  h2: 'Outcomes, not deliverables.',
  sub: 'Situation, what we built embedded, the operational result. Named stories are added as clients approve them.',
  cases: [
    {
      tag: 'Private Equity',
      title: 'Modernized an acquired company without an in-house tech org',
      situation: 'A portco inherited a stalled roadmap and a manual revenue stack.',
      built: 'Embedded a senior team, rebuilt the GTM data flow and shipped weekly.',
      result: 'Pipeline visibility in weeks, not quarters — and a team that kept shipping.',
      metric: 'wks',
      metricLabel: 'to first production value',
    },
    {
      tag: 'Enterprise',
      title: 'Replaced a stalled systems-integrator engagement',
      situation: 'An enterprise revenue team was stuck behind a slow SI and a long backlog.',
      built: 'Embedded inside their stack, displaced the SI and released every week.',
      result: 'Working software in production each sprint, accountable to outcomes.',
      metric: 'wkly',
      metricLabel: 'production releases',
    },
    {
      tag: 'AI Engineering',
      title: 'An autonomous reliability agent for regulated operations',
      situation: 'Root-cause analysis on a complex platform took days of engineer time.',
      built: 'A self-hosted reliability agent and institutional memory over the codebase.',
      result: 'Compressed root-cause from days to under an hour, inside compliance.',
      metric: '<1hr',
      metricLabel: 'root-cause, from days',
    },
  ] as CaseStudy[],
}

export const stats = {
  h2: 'Senior people, inside your business, shipping every week.',
  note: 'One unified brand, one accountable team — no delivery sub-brands, no offshore vendors surfaced as separate entities.',
  items: [
    { value: 3, suffix: '', label: 'service pillars, equal weight' },
    { value: 3, suffix: '', label: 'industries: PE, enterprise, government' },
    { value: 4, suffix: '', label: 'steps in the operating loop' },
    { value: 0, valueOverride: 'Weekly', label: 'production release cadence' },
  ] as {
    value: number
    suffix?: string
    prefix?: string
    valueOverride?: string
    label: string
  }[],
}

export const quote = {
  text: 'Most firms sell you projects or people. We embed a team and tie every release to an outcome.',
  attribution: 'The Nx Growth Partners operating principle',
}

export const about = {
  kicker: 'About',
  h2: "A senior team you'd want inside your business.",
  sub: "You're deciding whether to trust people inside your business — so we lead with experience, judgment and accountability, not headcount.",
  points: [
    {
      title: 'Senior by default',
      body: 'Operators and engineers who have shipped real systems — not a bench of juniors you have to manage.',
    },
    {
      title: 'Cross-functional',
      body: 'GTM, AI and product under one accountable team, so the work connects instead of fragmenting.',
    },
    {
      title: 'Accountable to outcomes',
      body: 'We tie every engagement to a business result and stay until it lands — embedded, not handed off.',
    },
  ],
}

export const cta = {
  h2Lines: ['Let’s find what', 'moves your business.'],
  sub: "Tell us where you are — PE, enterprise or government — and we'll map the highest-impact opportunities. A 30-minute intro, no pitch deck.",
  email: 'hello@nxgp.io',
  ctaPrimary: 'Book a call',
  ctaSecondary: 'See the pillars',
}

export const footer = {
  blurb:
    'An embedded technology partner across go-to-market, AI engineering and product development. Your team, extended — not replaced.',
  tagline: 'Your team, extended.',
  copyright: '© 2026 Nx Growth Partners · nxgp.io',
  columns: [
    {
      heading: 'Services',
      links: ['Go-to-Market', 'AI Engineering', 'Product Development'],
    },
    {
      heading: 'Industries',
      links: ['Private Equity', 'Enterprise', 'Government'],
    },
    {
      heading: 'Company',
      links: ['How we work', 'Work', 'About', 'Book a call'],
    },
    {
      heading: 'Connect',
      links: ['hello@nxgp.io', 'LinkedIn', 'X', 'nxgp.io'],
    },
  ],
}
