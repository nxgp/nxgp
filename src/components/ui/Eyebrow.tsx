import { cn } from '../../lib/cn'

export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode
  className?: string
  dark?: boolean
}) {
  return (
    <span
      className={cn(
        't-eyebrow inline-flex items-center gap-2',
        dark && 'text-au-mint',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'inline-block h-[6px] w-[6px] rounded-full',
          dark ? 'bg-au-mint' : 'bg-accent',
        )}
      />
      {children}
    </span>
  )
}
