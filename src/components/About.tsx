import { useReveal } from '../hooks/useReveal'
import { about } from '../data/content'
import { Eyebrow } from './ui/Eyebrow'

export function About() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="about" className="section">
      <div ref={ref} className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-[34rem]">
          <div data-reveal><Eyebrow>{about.kicker}</Eyebrow></div>
          <h2 data-reveal className="t-h2 mt-4">{about.h2}</h2>
          <p data-reveal className="t-lead mt-5">{about.sub}</p>
        </div>
        <div className="flex flex-col gap-3">
          {about.points.map((p) => (
            <div data-reveal key={p.title} className="rounded-card border border-line bg-surface p-6 shadow-sm">
              <h3 className="text-[1.1rem] font-800 tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-2 text-[0.96rem] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
