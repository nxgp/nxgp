import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../lib/reducedMotion'

/**
 * Lightweight reveal-on-scroll. Attach the returned ref to a container; every
 * descendant with `data-reveal` fades/rises in once as it enters the viewport.
 * Pure IntersectionObserver + CSS transition — no animation library, no RAF.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll<HTMLElement>('[data-reveal]')
    if (els.length === 0) return

    if (prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}

/** Returns a ref + boolean that flips true once the element enters view. */
export function useInViewOnce<T extends HTMLElement = HTMLDivElement>(
  rootMargin = '-15% 0px',
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return { ref, inView }
}
