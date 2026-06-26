import { Radar, ListChecks, GitBranch, TrendingUp } from 'lucide-react'

const shell =
  'relative aspect-[4/3.2] w-full overflow-hidden rounded-card border border-line bg-surface p-6 shadow-soft'

/** 01 Discover — surface where value leaks across people, process, tech. */
function Discover() {
  const leaks = [
    { label: 'People', x: 60 },
    { label: 'Process', x: 160 },
    { label: 'Technology', x: 260 },
  ]
  return (
    <div className={shell}>
      <div className="grid-faint absolute inset-0 opacity-[0.5]" />
      <div className="relative flex h-full flex-col">
        <div className="mx-auto mb-3 flex items-center gap-2 rounded-pill bg-ink px-4 py-2 text-white shadow-soft">
          <Radar className="size-3.5 text-au-mint" />
          <span className="text-[0.82rem] font-700">Where the business leaks</span>
        </div>
        <svg viewBox="0 0 320 130" className="mt-auto h-full w-full" fill="none">
          <line x1="20" y1="100" x2="300" y2="100" stroke="var(--color-line)" />
          {leaks.map((l) => (
            <g key={l.label}>
              <circle cx={l.x} cy="100" r="6" fill="#E0683B" />
              <circle cx={l.x} cy="100" r="13" stroke="#E0683B" strokeOpacity="0.4" strokeWidth="1.5" />
              <line x1={l.x} y1="94" x2={l.x} y2="40" stroke="var(--color-line)" strokeDasharray="3 3" />
              <text x={l.x} y="30" fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--color-ink-soft)">{l.label}</text>
            </g>
          ))}
        </svg>
        <p className="text-center text-[0.74rem] font-700 text-[#B96C1E]">3 high-impact leaks found</p>
      </div>
    </div>
  )
}

/** 02 Prioritize — rank by impact, effort, readiness. */
function Prioritize() {
  const rows = [
    { label: 'Revenue routing', impact: 0.95, top: true },
    { label: 'Quote-to-cash', impact: 0.8 },
    { label: 'Reporting cleanup', impact: 0.6 },
    { label: 'Legacy migration', impact: 0.4 },
  ]
  return (
    <div className={shell}>
      <div className="relative flex h-full flex-col gap-2.5">
        <div className="flex items-center gap-2 text-[0.82rem] font-800">
          <ListChecks className="size-4 text-accent" /> Ranked by impact · effort · readiness
        </div>
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 rounded-inner border border-line bg-bg/50 px-3 py-2.5">
            <span className="w-[42%] shrink-0 truncate text-[0.82rem] font-700">{r.label}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-line">
              <span className="block h-full rounded-full" style={{ width: `${r.impact * 100}%`, background: r.top ? 'var(--color-accent)' : 'var(--color-ink-faint)' }} />
            </span>
            {r.top && <span className="rounded-pill bg-accent-wash px-2 py-0.5 text-[0.64rem] font-700 text-accent-deep">first</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

/** 03 Deliver — weekly production increments inside the stack. */
function Deliver() {
  const weeks = [
    { w: 'Wk 1', t: 'Routing live' },
    { w: 'Wk 2', t: 'Dashboards' },
    { w: 'Wk 3', t: 'Quote API' },
    { w: 'Wk 4', t: 'Portal v1' },
  ]
  return (
    <div className={shell}>
      <div className="relative flex h-full flex-col gap-2.5">
        <div className="flex items-center gap-2 text-[0.82rem] font-800">
          <GitBranch className="size-4 text-accent" /> Shipped to production, weekly
        </div>
        {weeks.map((wk, i) => (
          <div key={wk.w} className="flex items-center gap-3 rounded-inner border border-line bg-surface px-3 py-2.5">
            <span className="flex size-7 items-center justify-center rounded-[8px] bg-accent-wash text-[0.66rem] font-800 text-accent-deep">{i + 1}</span>
            <span className="text-[0.82rem] font-700">{wk.t}</span>
            <span className="ml-auto text-[0.68rem] font-600 text-ink-faint">{wk.w}</span>
            <span className="rounded-pill bg-accent-wash px-2 py-0.5 text-[0.62rem] font-700 text-accent-deep">live</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** 04 Optimize — track outcomes, compound improvement. */
function Optimize() {
  return (
    <div className={shell}>
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-2 text-[0.82rem] font-800">
          <TrendingUp className="size-4 text-accent" /> Outcomes compound over time
        </div>
        <svg viewBox="0 0 320 150" className="mt-auto h-full w-full" fill="none">
          <line x1="20" y1="130" x2="300" y2="130" stroke="var(--color-line)" />
          <path d="M20 122 C90 120 130 96 180 80 C230 64 260 36 300 22" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" />
          <path d="M20 122 C90 120 130 96 180 80 C230 64 260 36 300 22 L300 130 L20 130 Z" fill="var(--color-accent)" opacity="0.08" />
          {[[20, 122], [180, 80], [300, 22]].map(([x, y], i) => (<circle key={i} cx={x} cy={y} r="4.5" fill="#fff" stroke="var(--color-accent)" strokeWidth="2" />))}
          <text x="300" y="16" fontSize="11" fontWeight="800" textAnchor="end" fill="var(--color-accent-deep)">compounding</text>
        </svg>
      </div>
    </div>
  )
}

export const loopVisuals = [Discover, Prioritize, Deliver, Optimize]
