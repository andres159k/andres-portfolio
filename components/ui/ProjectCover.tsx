import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { Project } from '@/content/projects'
import { cn } from '@/lib/utils'

const TONES: Record<Project['accent'], string> = {
  signal: '#0071e3',
  paper: '#86868b',
  olive: '#30d158',
}

export function ProjectCover({
  project,
  className,
  compact = false,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
}: {
  project: Project
  className?: string
  compact?: boolean
  priority?: boolean
  sizes?: string
}) {
  const tone = TONES[project.accent]

  if (project.cover) {
    return (
      <div
        className={cn(
          'relative h-full w-full overflow-hidden bg-[var(--color-ink-900)]',
          className,
        )}
      >
        <Image
          src={project.cover}
          alt={`${project.client} — ${project.copy.en.title}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition-transform duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
        <span className="absolute top-5 left-5 font-mono text-[11px] tracking-[0.2em] text-white/85">
          {project.index}
        </span>
        <span
          className="absolute top-6 right-5 h-2.5 w-2.5 rounded-full"
          style={{ background: tone }}
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative isolate flex h-full w-full flex-col justify-between overflow-hidden bg-[var(--color-ink-900)] p-6',
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={
          {
            background: `radial-gradient(120% 120% at 100% 0%, ${tone}1f, transparent 60%)`,
          } as CSSProperties
        }
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-[var(--color-subtle)]">
          {project.index}
        </span>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: tone }} />
      </div>

      <div className="relative">
        <p
          className={cn(
            'font-display leading-[0.94] font-semibold tracking-tight text-[var(--color-foreground)] uppercase',
            compact ? 'text-[clamp(1.4rem,3vw,2.1rem)]' : 'text-[clamp(2rem,4.6vw,3.6rem)]',
          )}
        >
          {project.client}
        </p>
        <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
          {project.year} · {project.role}
        </p>
      </div>

      <span
        className="absolute bottom-0 left-0 h-px w-full"
        style={{ background: `linear-gradient(90deg, ${tone}, transparent)` }}
      />
    </div>
  )
}
