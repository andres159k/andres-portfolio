import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { OtherWork } from '@/components/sections/OtherWork'
import { WorkCard } from '@/components/sections/WorkCard'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionLabel } from '@/components/ui/Section'
import { getFeaturedProjects } from '@/content/projects'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.work.title,
    description: dict.work.subtitle,
    alternates: { canonical: `/${locale}/work` },
  }
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const [first, ...rest] = getFeaturedProjects()
  const labels = { view: dict.actions.viewCase, featured: dict.work.featured }

  return (
    <div>
      <header className="container-page pt-10 pb-8 md:pt-20">
        <SectionLabel>{dict.work.eyebrow}</SectionLabel>
        <h1 className="mt-4 text-[clamp(2rem,6vw,4rem)] font-semibold">{dict.work.title}</h1>
        <p className="mt-4 max-w-xl text-base text-[var(--color-muted)] md:text-lg">
          {dict.work.subtitle}
        </p>
      </header>

      <Section className="pt-4">
        <div className="container-page grid gap-4 md:gap-6">
          {first ? (
            <Reveal>
              <WorkCard project={first} locale={locale} large labels={labels} />
            </Reveal>
          ) : null}
          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <WorkCard project={project} locale={locale} labels={labels} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <OtherWork locale={locale} dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </div>
  )
}
