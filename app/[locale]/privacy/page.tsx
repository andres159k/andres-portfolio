import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Section, SectionLabel } from '@/components/ui/Section'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  robots: { index: false },
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const es = locale === 'es'

  const paragraphs = es
    ? [
        'Este sitio es un portfolio personal. No recopilo datos personales de forma automática más allá de métricas agregadas de rendimiento y analítica anónima.',
        'El formulario de contacto abre tu cliente de correo y no almacena datos en un servidor. Cualquier correo que me envíes se usará únicamente para responder a tu consulta.',
        'Si quieres que elimine cualquier información que me hayas compartido, escríbeme y lo haré.',
      ]
    : [
        'This site is a personal portfolio. I do not collect personal data automatically beyond aggregated performance metrics and anonymous analytics.',
        'The contact form opens your email client and does not store data on a server. Any email you send is used only to reply to your enquiry.',
        'If you would like me to delete any information you have shared, reach out and I will.',
      ]

  return (
    <div>
      <header className="container-page pt-16 pb-8 md:pt-20">
        <SectionLabel>{dict.footer.privacy}</SectionLabel>
        <h1 className="mt-6 text-[clamp(2rem,4.5vw,3rem)] font-semibold">
          {es ? 'Política de privacidad' : 'Privacy policy'}
        </h1>
      </header>
      <Section className="pt-0">
        <div className="container-narrow flex flex-col gap-5 text-[var(--color-muted)]">
          {paragraphs.map((text) => (
            <p key={text} className="leading-relaxed">
              {text}
            </p>
          ))}
          <p className="mt-2">
            <a
              href={site.socials.email}
              className="text-[var(--color-foreground)] underline underline-offset-4"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-6">
            <Link
              href={`/${locale}`}
              className="text-sm text-[var(--color-accent-400)] transition-colors hover:text-[var(--color-foreground)]"
            >
              ← {dict.nav.home}
            </Link>
          </p>
        </div>
      </Section>
    </div>
  )
}
