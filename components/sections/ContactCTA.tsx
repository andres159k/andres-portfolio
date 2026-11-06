import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { Aurora } from '@/components/ui/Aurora'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/ui/Magnetic'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { site } from '@/lib/site'

export function ContactCTA({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const socials = [
    { href: site.socials.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: site.socials.github, label: 'GitHub', icon: Github },
    { href: site.socials.email, label: 'Email', icon: Mail },
  ]

  return (
    <Section id="contact-cta">
      <div className="container-page">
        <Reveal>
          <div className="glass-strong glass-sheen relative overflow-hidden rounded-[var(--radius-2xl)] px-6 py-12 text-center md:px-16 md:py-24">
            <Aurora intensity={0.9} />
            <div className="relative mx-auto max-w-2xl">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-[var(--color-muted)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-live)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-live)]" />
                </span>
                {dict.availability}
              </span>

              <h2 className="mt-5 text-[clamp(1.8rem,5vw,3.5rem)] font-semibold">
                {dict.contact.title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
                {dict.contact.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Magnetic>
                  <Button href={site.socials.email} size="lg" external>
                    {dict.actions.emailMe}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Magnetic>
                <Button href={`/${locale}/contact`} size="lg" variant="secondary">
                  {dict.nav.contact}
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
