import { notFound } from 'next/navigation'
import { Capabilities } from '@/components/sections/Capabilities'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { StackMarquee } from '@/components/sections/StackMarquee'
import { StatsBand } from '@/components/sections/StatsBand'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale)

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <StackMarquee label={dict.marquee.label} />
      <SelectedWork locale={locale} dict={dict} />
      <StatsBand locale={locale} />
      <Capabilities locale={locale} dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </>
  )
}
