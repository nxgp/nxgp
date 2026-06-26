import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion, isSmallScreen } from '../lib/reducedMotion'
import { work } from '../data/content'
import type { CaseStudy } from '../data/content'
import { Eyebrow } from './ui/Eyebrow'
import { useReveal } from '../hooks/useReveal'

function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-surface p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <span className="self-start rounded-pill px-3 py-1 text-[0.72rem] font-700" style={{ background: `${c.accent}16`, color: c.accent }}>
        {c.tag}
      </span>
      <h3 className="mt-4 text-[1.2rem] font-800 leading-snug tracking-[-0.01em]">{c.title}</h3>

      <dl className="mt-5 flex flex-col gap-3 text-[0.92rem]">
        <div>
          <dt className="text-[0.7rem] font-700 uppercase tracking-[0.07em] text-ink-faint">Situation</dt>
          <dd className="mt-1 text-ink-soft">{c.situation}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-700 uppercase tracking-[0.07em] text-ink-faint">What we built</dt>
          <dd className="mt-1 text-ink-soft">{c.built}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-700 uppercase tracking-[0.07em] text-ink-faint">Result</dt>
          <dd className="mt-1 text-ink">{c.result}</dd>
        </div>
      </dl>

      <div className="mt-auto flex items-baseline gap-2 border-t border-line pt-5">
        <span className="text-[1.7rem] font-800 leading-none tracking-[-0.03em]" style={{ color: c.accent }}>{c.metric}</span>
        <span className="text-[0.82rem] font-600 text-ink-faint">{c.metricLabel}</span>
      </div>
    </article>
  )
}

export function Work() {
  const section = useRef<HTMLDivElement>(null)
  const pinned = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [stacked, setStacked] = useState(false)
  const stackRef = useReveal<HTMLDivElement>()

  useEffect(() => {
    if (prefersReducedMotion() || isSmallScreen()) {
      setStacked(true)
      return
    }
    const sec = section.current
    const pin = pinned.current
    const tr = track.current
    if (!sec || !pin || !tr) return

    const ctx = gsap.context(() => {
      const getDistance = () => tr.scrollWidth - window.innerWidth + 24
      const tween = gsap.to(tr, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + getDistance(), pin, scrub: 0.6, invalidateOnRefresh: true },
      })
      tr.querySelectorAll<HTMLElement>('[data-card]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 26,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, containerAnimation: tween, start: 'left 85%', toggleActions: 'play none none reverse' },
        })
      })
      return () => tween.kill()
    }, sec)

    return () => ctx.revert()
  }, [])

  if (stacked) {
    return (
      <section id="work" className="section">
        <div ref={stackRef} className="shell">
          <div data-reveal><Eyebrow>{work.kicker}</Eyebrow></div>
          <h2 data-reveal className="t-h2 mt-4">{work.h2}</h2>
          <p data-reveal className="t-lead mt-5 max-w-[40rem]">{work.sub}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {work.cases.map((c) => (<div data-reveal key={c.title}><CaseCard c={c} /></div>))}
          </div>
          <p data-reveal className="mt-6 text-[0.86rem] font-600 text-ink-faint">Outcomes are anonymized — named stories are published as clients approve them.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="work" ref={section} className="relative bg-surface/40">
      <div ref={pinned} className="flex h-screen flex-col justify-center overflow-hidden">
        <div className="shell flex items-end justify-between gap-6 pb-8">
          <div>
            <Eyebrow>{work.kicker}</Eyebrow>
            <h2 className="t-h2 mt-4">{work.h2}</h2>
            <p className="t-lead mt-4 max-w-[34rem]">{work.sub}</p>
          </div>
          <p className="hidden shrink-0 items-center gap-2 text-[0.82rem] font-700 text-ink-faint lg:flex">
            scroll
            <span className="inline-block h-px w-10 bg-ink-faint" />
          </p>
        </div>

        <div ref={track} className="flex gap-5 pl-[max(4vw,calc((100vw-var(--shell))/2))] pr-[6vw]" style={{ willChange: 'transform' }}>
          {work.cases.map((c) => (
            <div key={c.title} data-card className="w-[min(82vw,380px)] shrink-0">
              <CaseCard c={c} />
            </div>
          ))}
          <div className="flex w-[min(60vw,300px)] shrink-0 items-center">
            <p className="t-h3 max-w-[16ch] text-ink-faint">Embedded, accountable to the outcome.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
