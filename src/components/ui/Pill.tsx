import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

/** Small frosted banner pill — e.g. the hero "An embedded technology partner". */
export function Pill({
  children,
  href,
  className,
  arrow = true,
  onClick,
}: {
  children: React.ReactNode
  href?: string
  className?: string
  arrow?: boolean
  onClick?: React.MouseEventHandler
}) {
  const Tag = href ? 'a' : 'span'
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={cn(
        'group inline-flex items-center gap-2 rounded-pill border border-line bg-surface/70 px-3.5 py-1.5',
        'text-[0.84rem] font-600 text-ink-soft shadow-sm backdrop-blur',
        'transition-colors duration-200 hover:text-ink',
        className,
      )}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
      {arrow && (
        <ArrowRight className="size-3.5 text-accent transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Tag>
  )
}
