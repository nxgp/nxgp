/** Single source of truth for the motion gate. */
export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Coarse pointer / touch — used to disable the custom cursor + heavy pins. */
export const isCoarsePointer = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none), (pointer: coarse)').matches

export const isSmallScreen = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 880px)').matches
