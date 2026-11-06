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
    <Link href={href} className={cn('flex items-center gap-2.5', className)} aria-label={name}>
      <span className="block h-7 w-7 shrink-0" aria-hidden />
    </Link>
  )
}
