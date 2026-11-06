import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { site } from '@/lib/site'
import { Logo } from './Logo'

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navigate = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ]

  const elsewhere = [
    { href: site.socials.linkedin, label: 'LinkedIn' },
    { href: site.socials.github, label: 'GitHub' },
    { href: site.socials.contra, label: 'Contra' },
    { href: site.socials.email, label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-[var(--color-line)]">
      <div className="container-page py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          <div className="flex flex-col gap-4">
            <Logo href={`/${locale}`} name={site.name} />
            <p className="max-w-xs text-sm text-[var(--color-muted)]">{dict.footer.tagline}</p>
            <p className="font-mono text-xs text-[var(--color-subtle)]">{site.location}</p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.22em] text-[var(--color-subtle)] uppercase">
              {dict.footer.navigate}
            </p>
            <ul className="flex flex-col gap-2.5">
              {navigate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.22em] text-[var(--color-subtle)] uppercase">
              {dict.footer.elsewhere}
            </p>
            <ul className="flex flex-col gap-2.5">
              {elsewhere.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-1 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hairline" />

      <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-[var(--color-subtle)] sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
        </p>
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  )
}
