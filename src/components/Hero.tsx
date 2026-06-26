import { ArrowRight } from 'lucide-react'
import { scrollToId } from '../lib/scroll'
import { hero } from '../data/content'
import { Pill } from './ui/Pill'
import { Button } from './ui/Button'
import { Aurora } from './ui/Aurora'
import { HeroConsole } from './mockups/HeroConsole'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Aurora
          blobs={[
            { color: 'var(--color-soft-sky)', size: 460, top: '-8%', left: '-4%', opacity: 0.7 },
            { color: 'var(--color-soft-cyan)', size: 400, top: '4%', right: '-6%', opacity: 0.55 },
            { color: 'var(--color-au-lilac)', size: 320, bottom: '-14%', left: '26%', opacity: 0.4 },
          ]}
        />
      </div>

      <div className="shell grid items-center gap-12 pb-[clamp(40px,7vw,90px)] pt-[calc(var(--nav-h)+clamp(36px,7vw,84px))] lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* copy */}
        <div className="min-w-0">
          <span className="rise inline-block">
            <Pill arrow={false}>{hero.eyebrow}</Pill>
          </span>

          <h1 className="t-h1 mt-5">
            <span
              className="rise block"
              style={{ ['--rise-delay' as string]: '80ms' }}
            >
              {hero.h1a}
            </span>
            <span
              className="rise block text-accent"
              style={{ ['--rise-delay' as string]: '160ms' }}
            >
              {hero.h1b}
            </span>
          </h1>

          <p
            className="rise t-lead mt-6 max-w-[36rem]"
            style={{ ['--rise-delay' as string]: '260ms' }}
          >
            {hero.sub}
          </p>

          <div
            className="rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ ['--rise-delay' as string]: '340ms' }}
          >
            <Button variant="accent" onClick={() => scrollToId('cta')}>
              {hero.ctaPrimary}
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="light" onClick={() => scrollToId('how-we-work')}>
              {hero.ctaSecondary}
            </Button>
          </div>

          <p
            className="rise mt-6 max-w-[34rem] text-[0.88rem] font-600 text-ink-faint"
            style={{ ['--rise-delay' as string]: '420ms' }}
          >
            {hero.note}
          </p>
        </div>

        {/* embedded engagement mockup */}
        <div
          className="rise min-w-0"
          style={{ ['--rise-delay' as string]: '200ms' }}
        >
          <HeroConsole />
        </div>
      </div>
    </section>
  )
}
