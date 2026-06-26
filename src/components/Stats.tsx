import NumberFlow from '@number-flow/react'
import { stats } from '../data/content'
import { Aurora } from './ui/Aurora'
import { useInViewOnce } from '../hooks/useReveal'

export function Stats() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Aurora
        dark
        blobs={[
          { color: 'var(--color-accent)', size: 460, top: '-30%', left: '4%', opacity: 0.28 },
          { color: 'var(--color-accent-2)', size: 420, bottom: '-40%', right: '8%', opacity: 0.22 },
        ]}
      />
      <div className="grid-faint absolute inset-0 opacity-60" />

      <div ref={ref} className="shell relative section">
        <h2 className="t-h2 max-w-[24ch] text-white">{stats.h2}</h2>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((s) => (
            <div key={s.label} className="border-t border-white/15 pt-5">
              <div className="flex items-baseline text-[clamp(2.6rem,5vw,3.6rem)] font-800 leading-none tracking-[-0.035em]">
                {s.prefix && <span>{s.prefix}</span>}
                {s.valueOverride ? (
                  <span>{s.valueOverride}</span>
                ) : (
                  <NumberFlow value={inView ? s.value : 0} />
                )}
                {s.suffix && <span>{s.suffix}</span>}
              </div>
              <p className="t-serif mt-3 text-[0.98rem] text-white/65">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="t-serif mt-12 max-w-[44rem] text-[0.96rem] text-white/45">
          {stats.note}
        </p>
      </div>
    </section>
  )
}
