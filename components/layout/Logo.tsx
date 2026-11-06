import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  href,
  name,
  className,
}: {
  href: string
  name: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn('group flex items-center gap-2.5', className)}
      aria-label={name}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-[var(--color-foreground)] text-[11px] font-semibold tracking-tight text-[var(--color-bg)]">
        AF
      </span>
      <span className="text-sm font-semibold tracking-tight text-[var(--color-foreground)]">
        {name}
      </span>
    </Link>
  )
}
