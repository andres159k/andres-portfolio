import type { Metadata } from 'next'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { notFound } from 'next/navigation'
import { ContactForm } from '@/components/sections/ContactForm'
import { Aurora } from '@/components/ui/Aurora'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { Section, SectionLabel } from '@/components/ui/Section'
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
    title: dict.contact.title,
    description: dict.contact.subtitle,
    alternates: { canonical: `/${locale}/contact` },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale)

  const socials = [
    { href: site.socials.linkedin, label: 'LinkedIn', icon: Linkedin, handle: '/in/andresfma' },
    { href: site.socials.github, label: 'GitHub', icon: Github, handle: '@andres159k' },
    { href: site.socials.contra, label: 'Contra', icon: ArrowUpRight, handle: '/andresfma' },
  ]

  return (
    <div className="relative">
      <Aurora intensity={0.7} />
      <header className="container-page relative pt-10 pb-8 md:pt-20">
        <SectionLabel>{dict.contact.eyebrow}</SectionLabel>
        <h1 className="mt-4 text-[clamp(2rem,5.5vw,4rem)] font-semibold">{dict.contact.title}</h1>
        <p className="mt-4 max-w-xl text-base text-[var(--color-muted)] md:text-lg">
          {dict.contact.subtitle}
        </p>
      </header>

      <Section className="relative pt-4">
        <div className="container-page grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassPanel strong className="p-6 md:p-9">
            <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
              {dict.contact.formLabel}
            </h2>
            <div className="mt-5">
              <ContactForm dict={dict} />
            </div>
          </GlassPanel>

          <div className="flex flex-col gap-6">
            <GlassPanel className="p-7">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
                {dict.contact.emailLabel}
              </p>
              <a
                href={site.socials.email}
                className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-accent-400)]"
              >
                <Mail className="h-5 w-5" />
                {site.email}
              </a>
              <p className="mt-4 font-mono text-xs text-[var(--color-subtle)]">{site.location}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-foreground)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-live)]" />
                {dict.availability}
              </p>
            </GlassPanel>

            <GlassPanel className="p-7">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
                {dict.contact.socialsLabel}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                      >
                        <span className="glass flex h-9 w-9 items-center justify-center rounded-full">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="font-medium text-[var(--color-foreground)]">
                          {social.label}
                        </span>
                        <span className="font-mono text-xs text-[var(--color-subtle)]">
                          {social.handle}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </GlassPanel>
          </div>
        </div>
      </Section>
    </div>
  )
}
