import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/ui/Magnetic'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { site } from '@/lib/site'

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const proof = [
    { value: site.proof.rating, label: dict.proof.rating },
    { value: site.proof.hires, label: dict.proof.hires },
    { value: site.proof.earned, label: dict.proof.earned },
  ]

  return (
    <section className="relative pt-10 pb-12 md:pt-16 md:pb-20">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-line)] pb-5">
          <span className="eyebrow">{dict.hero.eyebrow}</span>
          <span className="eyebrow hidden md:inline">{site.location}</span>
          <span className="eyebrow inline-flex items-center gap-2 text-[var(--color-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-live)]" />
            {dict.availability}
          </span>
        </div>

        <h1 className="mt-8 max-w-[22ch] text-[clamp(2rem,8.5vw,6.5rem)] leading-[0.94] font-semibold md:mt-12">
          {dict.hero.titleTop}{' '}
          <span className="text-[var(--color-accent)]">{dict.hero.titleAccent}</span>{' '}
          {dict.hero.titleBottom}
        </h1>

        <div className="mt-8 grid gap-8 md:mt-12 md:gap-10 lg:grid-cols-[1.2fr_auto] lg:items-end">
          <p className="max-w-2xl text-lg text-[var(--color-muted)] md:text-xl">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Magnetic>
              <Button href={`/${locale}/work`} size="lg">
                {dict.actions.viewWork}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            <Button href={`/${locale}/contact`} size="lg" variant="secondary">
              {dict.actions.getInTouch}
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--color-line)] pt-6 sm:grid-cols-4 md:mt-16 md:pt-8">
          <div className="flex flex-col gap-2">
            <span className="font-display text-3xl font-semibold text-[var(--color-foreground)]">
              7+
            </span>
            <span className="eyebrow">
              {locale === 'es' ? 'Años de experiencia' : 'Years of experience'}
            </span>
          </div>
          {proof.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <span className="font-display text-3xl font-semibold text-[var(--color-foreground)]">
                {item.value}
              </span>
              <span className="eyebrow">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-[var(--color-subtle)] uppercase md:mt-10">
          {dict.proof.featured}
        </p>
      </div>
    </section>
  )
}
