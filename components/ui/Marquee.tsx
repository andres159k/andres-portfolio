import { cn } from '@/lib/utils'

export function Marquee({
  items,
  className,
  itemClassName,
}: {
  items: readonly string[]
  className?: string
  itemClassName?: string
}) {
  const loop = [...items, ...items]
  return (
    <div className={cn('mask-fade-x overflow-hidden', className)} aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={cn(
              'flex items-center gap-10 font-mono text-sm tracking-[0.2em] text-[var(--color-subtle)] uppercase',
              itemClassName,
            )}
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-[var(--color-line-strong)]" />
          </span>
        ))}
      </div>
    </div>
  )
}
