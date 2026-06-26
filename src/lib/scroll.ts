import { prefersReducedMotion } from './reducedMotion'

/** Native smooth anchor scroll. CSS `scroll-padding-top` handles the nav offset. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
}
