import { RefreshCw } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { operatingModel } from '../data/content'
import { SectionHeader } from './ui/SectionHeader'

export function OperatingModel() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="how-we-work" className="section">
      <div ref={ref} className="shell">
        <SectionHeader
          kicker={operatingModel.kicker}
          title={operatingModel.h2}
          sub={operatingModel.sub}
        />

        <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {operatingModel.steps.map((s, i) => (
            <div
              data-reveal
              key={s.n}
              className="relative flex flex-col rounded-card border border-line bg-surface p-6 shadow-sm"
              style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
            >
              <span className="text-[0.78rem] font-800 text-accent-deep">
                {s.n}
              </span>
              <h3 className="mt-2 text-[1.2rem] font-800 tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="t-serif mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {s.body}
              </p>
              {/* connector arrow on large screens */}
              {i < operatingModel.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-[10px] top-1/2 z-10 hidden size-5 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink-faint lg:flex"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <p
          data-reveal
          className="mt-8 flex items-center justify-center gap-2 text-[0.9rem] font-700 text-ink-faint"
        >
          <RefreshCw className="size-4 text-accent" />
          a continuous loop — every deployment feeds the next discovery
        </p>
      </div>
    </section>
  )
}
