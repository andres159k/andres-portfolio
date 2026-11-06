import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Aurora } from '@/components/ui/Aurora'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { ProjectCover } from '@/components/ui/ProjectCover'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionLabel } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
import { getNextProject, metricLabel, type Project } from '@/content/projects'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { cn } from '@/lib/utils'

export function CaseStudy({
  project,
  locale,
  dict,
}: {
  project: Project
  locale: Locale
  dict: Dictionary
}) {
  const copy = project.copy[locale]
  const next = getNextProject(project.slug)
  const nextCopy = next.copy[locale]

  const narrative = [
    { label: dict.case.overview, body: copy.summary },
    { label: dict.case.challenge, body: copy.challenge },
    { label: dict.case.approach, body: copy.approach },
    { label: dict.case.outcome, body: copy.outcome },
  ]

  const facts = [
    { label: dict.case.client, value: project.client },
    { label: dict.case.role, value: project.role },
    { label: dict.case.year, value: project.year },
  ]

  return (
    <article>
      <header className="relative overflow-hidden pt-8 pb-10 md:pt-12 md:pb-14">
        <Aurora />
        <div className="container-page relative">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {dict.actions.backToWork}
          </Link>

          <div className="mt-6 grid items-center gap-8 md:mt-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
                <span>{project.index}</span>
                <span className="h-3 w-px bg-[var(--color-line-strong)]" />
                <span>{project.client}</span>
                <span className="h-3 w-px bg-[var(--color-line-strong)]" />
                <span>{project.year}</span>
              </div>

              <h1 className="mt-4 text-[clamp(1.8rem,5vw,3.6rem)] font-semibold">{copy.title}</h1>
              <p className="mt-3 max-w-xl text-base text-[var(--color-muted)] md:text-lg">
                {copy.tagline}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.url ? (
                  <Button href={project.url} size="lg" external>
                    {dict.case.visit}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                ) : null}
                <Button href={`/${locale}/contact`} size="lg" variant="secondary">
                  {dict.actions.getInTouch}
                </Button>
              </div>
            </div>

            <div className="glass glass-sheen aspect-[16/10] overflow-hidden rounded-[var(--radius-xl)]">
              <ProjectCover project={project} />
            </div>
          </div>
        </div>
      </header>

      <Section className="py-8 md:py-14">
        <div className="container-page grid gap-3 sm:grid-cols-3 sm:gap-5">
          {project.metrics.map((metric) => (
            <GlassPanel key={metric.value} className="p-4 sm:p-6">
              <p className="font-display text-xl font-semibold text-[var(--color-foreground)] sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-[var(--color-subtle)] uppercase sm:mt-2 sm:text-[11px]">
                {metricLabel(metric, locale)}
              </p>
            </GlassPanel>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container-page grid gap-8 md:gap-12 lg:grid-cols-[0.32fr_0.68fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <GlassPanel className="p-6">
              <p className="font-mono text-[11px] tracking-[0.22em] text-[var(--color-subtle)] uppercase">
                {dict.case.facts}
              </p>
              <dl className="mt-4 flex flex-col gap-3 md:mt-5 md:gap-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1">
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-subtle)] uppercase">
                      {fact.label}
                    </dt>
                    <dd className="text-sm text-[var(--color-foreground)]">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </GlassPanel>
          </div>

          <div className="flex flex-col gap-10 md:gap-14">
            {narrative.map((item) => (
              <Reveal key={item.label}>
                <p className="font-mono text-[11px] tracking-[0.22em] text-[var(--color-subtle)] uppercase">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)] md:mt-4 md:text-lg">
                  {item.body}
                </p>
              </Reveal>
            ))}

            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] text-[var(--color-subtle)] uppercase">
                {dict.case.highlights}
              </p>
              <ul className="mt-4 flex flex-col gap-3 md:mt-5 md:gap-4">
                {copy.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-[var(--color-muted)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-glass-200)] text-[var(--color-accent-400)]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {project.gallery && project.gallery.length > 0 ? (
        <Section className="pt-0">
          <div className="container-page">
            <SectionLabel>{dict.case.gallery}</SectionLabel>
            <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {project.gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={cn(
                    'relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-ink-900)]',
                    image.aspect === 'tall' ? 'aspect-[4/5]' : 'aspect-[16/10]',
                    index === 0 && 'sm:col-span-2',
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.caption ? image.caption[locale] : `${copy.title} — ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </figure>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="container-page">
          <SectionLabel>{dict.case.next}</SectionLabel>
          <Link
            href={`/${locale}/work/${next.slug}`}
            className="glass glass-sheen group mt-4 grid overflow-hidden rounded-[var(--radius-xl)] transition-transform duration-500 hover:-translate-y-1 md:mt-6 md:grid-cols-2"
          >
            <div className="aspect-[16/11] md:aspect-auto md:min-h-[18rem]">
              <ProjectCover project={next} compact />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
                {next.index} · {next.client}
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-foreground)]">
                {nextCopy.title}
              </h3>
              <p className="mt-3 text-[var(--color-muted)]">{nextCopy.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]">
                {dict.actions.viewCase}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </Section>
    </article>
  )
}
