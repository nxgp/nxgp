import { useReveal } from '../hooks/useReveal'
import { work } from '../data/content'
import { SectionHeader } from './ui/SectionHeader'

export function Work() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="work" className="section">
      <div ref={ref} className="shell">
        <SectionHeader kicker={work.kicker} title={work.h2} sub={work.sub} />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {work.cases.map((c, i) => (
            <article
              data-reveal
              key={c.title}
              className="flex flex-col rounded-card border border-line bg-surface p-7 shadow-sm"
              style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
            >
              <span className="self-start rounded-pill bg-accent-wash px-3 py-1 text-[0.72rem] font-700 text-accent-deep">
                {c.tag}
              </span>
              <h3 className="mt-4 text-[1.15rem] font-800 leading-snug tracking-[-0.01em]">
                {c.title}
              </h3>

              <dl className="mt-5 flex flex-col gap-3 text-[0.92rem]">
                <div>
                  <dt className="text-[0.7rem] font-700 uppercase tracking-[0.07em] text-ink-faint">
                    Situation
                  </dt>
                  <dd className="t-serif mt-1 text-ink-soft">{c.situation}</dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] font-700 uppercase tracking-[0.07em] text-ink-faint">
                    What we built
                  </dt>
                  <dd className="t-serif mt-1 text-ink-soft">{c.built}</dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] font-700 uppercase tracking-[0.07em] text-ink-faint">
                    Result
                  </dt>
                  <dd className="t-serif mt-1 text-ink">{c.result}</dd>
                </div>
              </dl>

              <div className="mt-auto flex items-baseline gap-2 border-t border-line pt-5">
                <span className="text-[1.8rem] font-800 leading-none tracking-[-0.03em] text-accent">
                  {c.metric}
                </span>
                <span className="text-[0.82rem] font-600 text-ink-faint">
                  {c.metricLabel}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p
          data-reveal
          className="mt-6 text-center text-[0.86rem] font-600 text-ink-faint"
        >
          Outcomes shown are anonymized — named stories are published as clients
          approve them.
        </p>
      </div>
    </section>
  )
}
