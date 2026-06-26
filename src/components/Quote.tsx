import { useReveal } from '../hooks/useReveal'
import { quote } from '../data/content'

export function Quote() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="section">
      <div ref={ref} className="shell">
        <blockquote className="mx-auto max-w-[42rem] text-center">
          <p
            data-reveal
            className="t-serif text-[clamp(1.8rem,4.2vw,3rem)] font-500 leading-[1.2] tracking-[-0.01em] text-ink"
          >
            “{quote.text}”
          </p>
          <footer
            data-reveal
            className="mt-7 text-[0.9rem] font-700 uppercase tracking-[0.04em] text-ink-faint"
            style={{ ['--reveal-delay' as string]: '80ms' }}
          >
            {quote.attribution}
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
