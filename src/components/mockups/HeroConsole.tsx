import {
  Radar,
  ListChecks,
  Hammer,
  RefreshCw,
  TrendingUp,
  Check,
  GitBranch,
} from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * The embedded-engagement console — how an Nx engagement looks from inside the
 * client's business: the operating loop on the left, this week's work tied to
 * business outcomes on the right. Shows the operating model, not a product.
 */
const loop = [
  { icon: Radar, label: 'Discover' },
  { icon: ListChecks, label: 'Prioritize' },
  { icon: Hammer, label: 'Deliver', active: true },
  { icon: RefreshCw, label: 'Optimize' },
]

const feed = [
  {
    icon: GitBranch,
    text: 'Quote-to-cash API shipped',
    meta: 'Product · in prod',
    tone: 'done',
  },
  {
    icon: TrendingUp,
    text: 'CRM automation live',
    meta: 'Go-to-market · +18% qualified pipeline',
    tone: 'win',
  },
  {
    icon: Radar,
    text: '3 revenue leaks found',
    meta: 'Discover · prioritized',
    tone: 'run',
  },
]

export function HeroConsole() {
  return (
    <div className="relative w-full overflow-hidden rounded-card border border-line bg-surface shadow-lg">
      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div className="win-dots flex gap-1.5">
          <span style={{ background: '#FF5F57' }} />
          <span style={{ background: '#FEBC2E' }} />
          <span style={{ background: '#28C840' }} />
        </div>
        <div className="ml-1 flex items-center gap-2 text-[0.78rem] font-700 text-ink-soft">
          <span className="size-2 rounded-full bg-accent" />
          Nx · live engagement
        </div>
        <div className="ml-auto rounded-pill bg-accent-wash px-2.5 py-1 text-[0.68rem] font-700 text-accent-deep">
          week 6
        </div>
      </div>

      <div className="grid grid-cols-[128px_1fr] sm:grid-cols-[148px_1fr]">
        {/* left rail — the operating loop */}
        <aside className="border-r border-line bg-bg/40 px-2.5 py-3">
          <p className="px-2 pb-2 text-[0.62rem] font-700 uppercase tracking-[0.08em] text-ink-faint">
            The loop
          </p>
          <ul className="flex flex-col gap-0.5">
            {loop.map((s) => (
              <li
                key={s.label}
                className={cn(
                  'flex items-center gap-2 rounded-[10px] px-2 py-1.5 text-[0.8rem] font-600',
                  s.active ? 'bg-surface text-ink shadow-sm' : 'text-ink-soft',
                )}
              >
                <s.icon
                  className={cn(
                    'size-3.5',
                    s.active ? 'text-accent' : 'text-ink-faint',
                  )}
                />
                {s.label}
              </li>
            ))}
          </ul>
          <div className="mt-3 rounded-inner border border-dashed border-line px-2 py-2 text-[0.66rem] font-600 text-ink-faint">
            embedded · senior team
          </div>
        </aside>

        {/* main — this week's work, tied to outcomes */}
        <main className="p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[0.82rem] font-800 tracking-[-0.01em]">
              This week
            </p>
            <span className="flex items-center gap-1.5 rounded-pill bg-bg px-2 py-0.5 text-[0.66rem] font-700 text-ink-soft">
              <span className="size-1.5 rounded-full bg-accent" />
              shipping weekly
            </span>
          </div>

          <ul className="flex flex-col gap-2">
            {feed.map((f) => (
              <li
                key={f.text}
                className="flex items-center gap-3 rounded-inner border border-line bg-surface px-3 py-2.5"
              >
                <span
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-[10px]',
                    f.tone === 'done' || f.tone === 'win'
                      ? 'bg-accent-wash text-accent-deep'
                      : 'bg-bg text-ink-soft',
                  )}
                >
                  <f.icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.84rem] font-700">
                    {f.text}
                  </span>
                  <span className="block truncate text-[0.7rem] font-600 text-ink-faint">
                    {f.meta}
                  </span>
                </span>
                {f.tone === 'done' && (
                  <span className="ml-auto flex items-center gap-1 rounded-pill bg-accent-wash px-2 py-0.5 text-[0.66rem] font-700 text-accent-deep">
                    <Check className="size-3" /> live
                  </span>
                )}
                {f.tone === 'win' && (
                  <span className="ml-auto rounded-pill bg-[#E7F8EF] px-2 py-0.5 text-[0.66rem] font-700 text-[#0A7E45]">
                    outcome
                  </span>
                )}
                {f.tone === 'run' && (
                  <span className="ml-auto rounded-pill bg-bg px-2 py-0.5 text-[0.66rem] font-700 text-ink-soft">
                    queued
                  </span>
                )}
              </li>
            ))}

            {/* outcome strip */}
            <li className="mt-1 flex items-center gap-3 rounded-inner bg-ink px-3.5 py-3 text-white">
              <TrendingUp className="size-4 text-au-mint" />
              <span className="text-[0.82rem] font-700">
                Tied to a business outcome
              </span>
              <span className="ml-auto text-[0.78rem] font-800 text-au-mint">
                +18% pipeline
              </span>
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}
