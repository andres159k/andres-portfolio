import { Gauge, Layers, MousePointerClick, PenTool } from 'lucide-react'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionLabel } from '@/components/ui/Section'
import type { Dictionary } from '@/i18n/get-dictionary'

const CAPABILITIES = [
  {
    icon: MousePointerClick,
    en: {
      title: 'Growth & conversion',
      body: 'Acquisition funnels, checkout, pricing and A/B experiments — the surfaces where a small UI change shows up in the numbers.',
    },
    es: {
      title: 'Growth y conversión',
      body: 'Funnels de adquisición, checkout, pricing y experimentos A/B: las superficies donde un pequeño cambio de UI se refleja en los números.',
    },
  },
  {
    icon: PenTool,
    en: {
      title: 'Craft & motion',
      body: 'Interactive UI, scroll storytelling, micro-interactions and design systems with real taste — the details that make a product feel expensive.',
    },
    es: {
      title: 'Craft y motion',
      body: 'UI interactiva, narrativa por scroll, micro-interacciones y design systems con criterio: los detalles que hacen que un producto se sienta caro.',
    },
  },
  {
    icon: Layers,
    en: {
      title: 'Systems & architecture',
      body: 'Reusable component libraries, design tokens and Turborepo monorepos that scale across apps and let a team ship faster than the last time.',
    },
    es: {
      title: 'Sistemas y arquitectura',
      body: 'Librerías de componentes reutilizables, design tokens y monorepos con Turborepo que escalan entre apps y hacen que el equipo entregue más rápido.',
    },
  },
  {
    icon: Gauge,
    en: {
      title: 'Scale & reliability',
      body: 'Performance as a product constraint, not a cleanup task: accessible, localized and fast on the devices real people use.',
    },
    es: {
      title: 'Escala y fiabilidad',
      body: 'El rendimiento como restricción de producto, no como tarea de limpieza: accesible, localizado y rápido en los dispositivos que usa la gente.',
    },
  },
] as const

export function Capabilities({ locale, dict }: { locale: 'en' | 'es'; dict: Dictionary }) {
  return (
    <Section id="capabilities">
      <div className="container-page">
        <SectionLabel>{dict.nav.about}</SectionLabel>
        <div className="mt-4 grid gap-4 md:mt-6 md:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold">{dict.about.lead}</h2>
          <p className="max-w-lg text-[var(--color-muted)] lg:justify-self-end">{dict.about.p2}</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5">
          {CAPABILITIES.map((item, index) => {
            const Icon = item.icon
            const copy = item[locale]
            return (
              <Reveal key={item.en.title} delay={index * 0.06}>
                <GlassPanel className="group h-full p-5 transition-transform duration-500 hover:-translate-y-1 md:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-glass-100)] text-[var(--color-foreground)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-foreground)]">
                    {copy.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {copy.body}
                  </p>
                </GlassPanel>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
