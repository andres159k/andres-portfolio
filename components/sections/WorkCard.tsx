import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ProjectCover } from '@/components/ui/ProjectCover'
import { Tag } from '@/components/ui/Tag'
import { metricLabel, type Project } from '@/content/projects'
import type { Locale } from '@/i18n/config'
import { cn } from '@/lib/utils'

export function WorkCard({
  project,
  locale,
  large = false,
  labels,
}: {
  project: Project
  locale: Locale
  large?: boolean
  labels: { view: string; featured: string }
}) {
  const copy = project.copy[locale]

  return (
    <Link
      href={`/${locale}/work/${project.slug}`}
      className={cn(
        'group relative block h-full overflow-hidden rounded-[var(--radius-xl)]',
        'glass glass-sheen transition-transform duration-500 hover:-translate-y-1.5',
      )}
    >
      <div className={cn(large && 'grid md:grid-cols-[1.05fr_0.95fr] md:items-stretch')}>
        <div
          className={cn(
            'relative overflow-hidden',
            large ? 'aspect-[16/10] md:aspect-auto md:min-h-[22rem]' : 'aspect-[16/10]',
          )}
        >
          <ProjectCover
            project={project}
            compact={!large}
            className="transition-transform duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
          />
          {large ? (
            <span className="absolute top-5 left-5 rounded-full bg-black/45 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-white uppercase backdrop-blur-sm">
              {labels.featured}
            </span>
          ) : null}
        </div>

        <div className={cn('flex flex-col p-5 md:p-7', large && 'md:justify-center md:p-10')}>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
            <span>{project.index}</span>
            <span className="h-3 w-px bg-[var(--color-line-strong)]" />
            <span>{project.client}</span>
            <span className="h-3 w-px bg-[var(--color-line-strong)]" />
            <span>{project.year}</span>
          </div>

          <h3
            className={cn(
              'mt-3 font-semibold text-[var(--color-foreground)]',
              large ? 'text-[clamp(1.4rem,3vw,2.4rem)]' : 'text-xl',
            )}
          >
            {copy.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
            {large ? copy.summary : copy.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 md:mt-6">
            {project.metrics.slice(0, large ? 3 : 2).map((metric) => (
              <div key={metric.value}>
                <p className="font-display text-lg font-semibold text-[var(--color-foreground)]">
                  {metric.value}
                </p>
                <p className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-subtle)] uppercase">
                  {metricLabel(metric, locale)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
            {project.stack.slice(0, large ? 6 : 4).map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] md:mt-7">
            {labels.view}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
