import { ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { cta } from '../data/content'
import { Button } from './ui/Button'
import { Aurora } from './ui/Aurora'
import { scrollToId } from '../lib/scroll'

export function CTA() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="cta" className="section">
      <div ref={ref} className="shell">
        <div className="relative overflow-hidden rounded-card bg-ink px-7 py-[clamp(56px,9vw,110px)] text-center text-white shadow-lg">
          <Aurora
            dark
            blobs={[
              { color: 'var(--color-accent)', size: 520, top: '-34%', left: '8%', opacity: 0.34 },
              { color: 'var(--color-accent-2)', size: 460, bottom: '-44%', right: '6%', opacity: 0.26 },
              { color: 'var(--color-au-lilac)', size: 360, top: '20%', right: '34%', opacity: 0.2 },
            ]}
          />

          <div className="relative mx-auto max-w-[42rem]">
            <h2 className="t-h2 text-white">
              {cta.h2Lines.map((line, i) => (
                <span
                  key={line}
                  data-reveal
                  className="block"
                  style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
                >
                  {line}
                </span>
              ))}
            </h2>
            <p
              data-reveal
              className="t-lead mx-auto mt-5 text-white/75"
              style={{ ['--reveal-delay' as string]: '180ms' }}
            >
              {cta.sub}
            </p>

            <div
              data-reveal
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ ['--reveal-delay' as string]: '260ms' }}
            >
              <Button
                variant="light"
                href={`mailto:${cta.email}`}
                className="bg-white text-ink"
              >
                {cta.ctaPrimary}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => scrollToId('services')}
              >
                {cta.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
