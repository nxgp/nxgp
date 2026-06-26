import { useEffect, useState } from 'react'
import { Button } from './ui/Button'
import { nav } from '../data/content'
import { scrollToId } from '../lib/scroll'
import { cn } from '../lib/cn'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow] duration-300',
        scrolled ? 'nav-frost' : 'bg-transparent',
      )}
    >
      <nav className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('top')
          }}
          className="flex items-center gap-2.5 font-800 tracking-[-0.02em]"
        >
          <Mark />
          <span className="text-[1.01rem]">{nav.brand}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {nav.links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="link-underline text-[0.92rem] font-600 text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <Button variant="accent" onClick={() => scrollToId('cta')}>
            {nav.cta}
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-full border border-line bg-surface/70 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                'absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-300',
                open ? 'top-1.5 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 h-[1.5px] w-full bg-ink transition-all duration-300',
                open ? 'bottom-1.5 -rotate-45' : '',
              )}
            />
          </span>
        </button>
      </nav>

      {/* mobile sheet */}
      <div
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.22,1,.36,1)] md:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="nav-frost flex flex-col gap-1 px-[4vw] pb-5 pt-2">
            {nav.links.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  scrollToId(l.id)
                  setOpen(false)
                }}
                className="rounded-inner px-2 py-3 text-left text-[1.05rem] font-600 text-ink"
              >
                {l.label}
              </button>
            ))}
            <Button
              variant="accent"
              className="mt-2 w-full"
              onClick={() => {
                scrollToId('cta')
                setOpen(false)
              }}
            >
              {nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <rect width="26" height="26" rx="8" fill="#0A0A0B" />
      <path d="M7 18.5V7.5h2.1l6 7.4V7.5h2.1v11h-2.1l-6-7.4v7.4H7Z" fill="#fff" />
      <circle cx="19" cy="9" r="2.2" fill="#0057FF" />
    </svg>
  )
}
