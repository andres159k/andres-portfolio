import { cn } from '@/lib/utils'

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-[var(--color-muted)] uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
