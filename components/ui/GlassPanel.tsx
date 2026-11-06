import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function GlassPanel({
  children,
  className,
  strong,
  sheen = true,
}: {
  children: ReactNode
  className?: string
  strong?: boolean
  sheen?: boolean
}) {
  return (
    <div
      className={cn(
        strong ? 'glass-strong' : 'glass',
        sheen && 'glass-sheen',
        'rounded-[var(--radius-lg)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
