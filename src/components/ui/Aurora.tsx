import { cn } from '../../lib/cn'

type Blob = {
  color: string
  size: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity?: number
}

/**
 * Static soft aurora — blurred, low-opacity tint blobs. No animation (painted
 * once) so it costs nothing at runtime; just sets the calm pastel mood.
 */
export function Aurora({
  blobs,
  className,
  dark = false,
}: {
  blobs: Blob[]
  className?: string
  dark?: boolean
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
      style={{ mixBlendMode: dark ? 'screen' : 'normal' }}
    >
      {blobs.map((b, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            background: b.color,
            opacity: b.opacity ?? (dark ? 0.5 : 0.6),
            borderRadius: '50%',
            filter: `blur(${Math.round(b.size * 0.4)}px)`,
          }}
        />
      ))}
    </div>
  )
}
