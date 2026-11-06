import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('relative py-12 md:py-20 lg:py-28', className)}>
      {children}
    </section>
  )
}

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
      <span className="eyebrow">{children}</span>
      <span className="h-px flex-1 bg-[var(--color-line)]" aria-hidden />
    </div>
  )
}
