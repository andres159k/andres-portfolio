import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ProjectCover } from '@/components/ui/ProjectCover'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionLabel } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
import { getOtherProjects } from '@/content/projects'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'

export function OtherWork({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getOtherProjects()

  return (
    <Section id="other-work">
      <div className="container-page">
        <SectionLabel>{dict.work.other}</SectionLabel>
        <h2 className="mt-6 text-[clamp(1.8rem,4vw,2.75rem)] font-semibold">{dict.work.other}</h2>
        <p className="mt-4 max-w-xl text-[var(--color-muted)]">{dict.work.otherSubtitle}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {projects.map((project, index) => {
            const copy = project.copy[locale]
            return (
              <Reveal key={project.slug} delay={index * 0.05}>
                <Link
                  href={`/${locale}/work/${project.slug}`}
                  className="group glass glass-sheen flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-ink-900)]">
                    <ProjectCover
                      project={project}
                      compact
                      className="transition-transform duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-[var(--color-subtle)] uppercase">
                      <span>{project.index}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-[var(--color-foreground)]">
                      {copy.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">{copy.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-[var(--color-foreground)]">
                      {dict.actions.viewCase}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
