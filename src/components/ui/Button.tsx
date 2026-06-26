import { cn } from '../../lib/cn'

type Variant = 'accent' | 'dark' | 'light' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill px-5 py-2.5 ' +
  'text-[0.92rem] font-700 leading-none cursor-pointer select-none whitespace-nowrap ' +
  'transition-[background,color,box-shadow,transform] duration-200 ease-[cubic-bezier(.22,1,.36,1)] ' +
  'hover:-translate-y-0.5 active:translate-y-0'

const variants: Record<Variant, string> = {
  accent: 'bg-accent text-white shadow-sm hover:bg-accent-deep hover:shadow-soft',
  dark: 'bg-ink text-white shadow-sm hover:shadow-soft',
  light:
    'bg-surface text-ink border border-line shadow-sm hover:border-ink/20',
  ghost: 'bg-transparent text-ink hover:bg-ink/[0.05]',
}

type Props = {
  children: React.ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
} & Record<string, unknown>

export function Button({
  children,
  variant = 'accent',
  href,
  onClick,
  className,
  type = 'button',
  ...rest
}: Props) {
  const cls = cn(base, variants[variant], className)
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
