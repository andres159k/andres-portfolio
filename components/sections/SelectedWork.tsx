import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionLabel } from '@/components/ui/Section'
import { getFeaturedProjects } from '@/content/projects'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { WorkCard } from './WorkCard'

export function SelectedWork({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getFeaturedProjects()
  const [first, ...rest] = projects

  const labels = {
    view: dict.actions.viewCase,
    featured: dict.work.featured,
  }

  return (
    <Section id="work">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>{dict.work.eyebrow}</SectionLabel>
            <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold">
              {dict.work.title}
            </h2>
            <p className="mt-3 max-w-xl text-[var(--color-muted)]">{dict.work.subtitle}</p>
          </div>
          <Link
            href={`/${locale}/work`}
            className="group inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            {dict.actions.allWork}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:mt-14 md:gap-6">
          {first ? (
            <Reveal>
              <WorkCard project={first} locale={locale} large labels={labels} />
            </Reveal>
          ) : null}

          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <WorkCard project={project} locale={locale} labels={labels} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
