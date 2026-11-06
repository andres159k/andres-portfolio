import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { Reveal } from '@/components/ui/Reveal'
import type { Locale } from '@/i18n/config'

const STATS = [
  {
    value: 7,
    suffix: '+',
    en: 'Years shipping production frontend',
    es: 'Años entregando frontend de producción',
  },
  { value: 10, suffix: '+', en: 'Products and sites shipped', es: 'Productos y sitios entregados' },
  { value: 5, en: 'Industries — AI to e-commerce', es: 'Industrias — de IA a e-commerce' },
  { value: 50, prefix: '$', suffix: 'k+', en: 'Earned on Contra', es: 'Facturado en Contra' },
] as const

export function StatsBand({ locale }: { locale: Locale }) {
  return (
    <div className="container-page py-8 md:py-14">
      <div className="glass glass-sheen grid grid-cols-2 gap-x-6 gap-y-7 rounded-[var(--radius-2xl)] px-5 py-7 sm:gap-8 sm:px-8 sm:py-10 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <Reveal key={stat.en} delay={index * 0.07} className="text-center sm:text-left">
            <div className="font-display text-[clamp(2.2rem,4vw,3.25rem)] font-semibold text-[var(--color-foreground)]">
              <AnimatedCounter
                value={stat.value}
                prefix={'prefix' in stat ? stat.prefix : ''}
                suffix={'suffix' in stat ? stat.suffix : ''}
              />
            </div>
            <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-[var(--color-subtle)] uppercase">
              {locale === 'es' ? stat.es : stat.en}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
