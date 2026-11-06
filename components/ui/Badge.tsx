import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgeProps = {
  children: ReactNode
  className?: string
  tone?: 'default' | 'accent' | 'paper'
}

const tones = {
  default: 'border-[var(--color-line)] text-[var(--color-muted)]',
  accent: 'border-transparent bg-[var(--color-accent)] text-white',
  paper: 'border-[var(--color-line-strong)] text-[var(--color-foreground)]',
} as const

export function Badge({ children, className, tone = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
