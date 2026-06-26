import { useReveal } from '../hooks/useReveal'
import { proof } from '../data/content'

export function Proof() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="border-y border-line bg-surface/50">
      <div ref={ref} className="shell py-12">
        <p
          data-reveal
          className="text-center text-[0.8rem] font-700 uppercase tracking-[0.1em] text-ink-faint"
        >
          {proof.label}
        </p>
        <div
          data-reveal
          className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14"
        >
          {proof.wordmarks.map((w) => (
            <span
              key={w}
              className="text-[1.25rem] font-800 tracking-[-0.03em] text-ink/45 transition-colors duration-300 hover:text-ink/80 sm:text-[1.4rem]"
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
