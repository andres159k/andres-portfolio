import { cn } from '@/lib/utils'

type AuroraProps = {
  className?: string
  intensity?: number
}

/**
 * Soft accent wash — a single, restrained blue glow behind hero sections.
 * Pure CSS, theme-aware, safe for SSR.
 */
export function Aurora({ className, intensity = 1 }: AuroraProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
      style={{ opacity: intensity }}
    >
      <span
        className="absolute -top-56 left-1/2 h-[42rem] w-[60rem] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent 70%)',
        }}
      />
    </div>
  )
}
