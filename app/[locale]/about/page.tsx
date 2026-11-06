import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionLabel } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { site } from '@/lib/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.about.title,
    description: dict.about.lead,
    alternates: { canonical: `/${locale}/about` },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale)

  return (
    <div>
      <header className="relative overflow-hidden pt-10 pb-8 md:pt-20">
        <div className="container-page">
          <SectionLabel>{dict.about.eyebrow}</SectionLabel>
          <div className="mt-6 grid items-center gap-8 md:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-[clamp(2rem,5.5vw,4rem)] font-semibold">{dict.about.title}</h1>
              <p className="mt-4 max-w-xl text-base text-[var(--color-muted)] md:text-lg">
                {dict.about.lead}
              </p>
              <div className="mt-5 flex max-w-xl flex-col gap-3 text-[var(--color-muted)]">
                <p>{dict.about.p1}</p>
                <p>{dict.about.p2}</p>
                <p>{dict.about.p3}</p>
              </div>
            </div>

            <div className="glass glass-sheen flex aspect-[4/3] flex-col justify-between rounded-[var(--radius-xl)] p-6 md:aspect-square md:p-8">
              <span className="eyebrow">
                {dict.about.eyebrow} — {site.location}
              </span>
              <p className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95] font-semibold text-[var(--color-foreground)] uppercase">
                {site.name}
              </p>
              <div>
                <span className="inline-block h-2.5 w-2.5 bg-[var(--color-accent)]" />
                <p className="eyebrow mt-4">{dict.about.currently}</p>
                <p className="mt-1 text-sm text-[var(--color-foreground)]">{site.role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section>
        <div className="container-page">
          <SectionLabel>{dict.about.skillsTitle}</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-5">
            {dict.about.skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05}>
                <div className="glass glass-sheen h-full rounded-[var(--radius-xl)] p-5 md:p-7">
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="container-page">
          <SectionLabel>{dict.about.experienceTitle}</SectionLabel>
          <ol className="mt-6 flex flex-col md:mt-10">
            {dict.about.experience.map((item, index) => (
              <Reveal key={`${item.org}-${item.period}`} delay={index * 0.04} as="li">
                <div className="grid gap-2 border-t border-[var(--color-line)] py-5 md:grid-cols-[10rem_1fr] md:gap-8 md:py-6">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-subtle)] uppercase">
                    {item.period}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-[var(--color-foreground)]">
                      {item.role}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-accent-400)]">{item.org}</p>
                    <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="glass rounded-[var(--radius-xl)] p-6">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
                {dict.about.languagesLabel}
              </p>
              <p className="mt-2 text-sm text-[var(--color-foreground)]">{dict.about.languages}</p>
            </div>
            <div className="glass rounded-[var(--radius-xl)] p-6">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
                {dict.about.currently}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--color-foreground)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-live)]" />
                {dict.availability}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <ContactCTA locale={locale} dict={dict} />
    </div>
  )
}
