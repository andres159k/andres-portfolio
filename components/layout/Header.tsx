'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { cn } from '@/lib/utils'
import { lockScroll, unlockScroll } from '@/lib/scroll-lock'
import { CommandPalette } from './CommandPalette'
import { LocaleSwitcher } from './LocaleSwitcher'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

type NavProject = { slug: string; index: string; title: string }

export function Header({
  locale,
  dict,
  projects,
}: {
  locale: Locale
  dict: Dictionary
  projects: NavProject[]
}) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    lockScroll()
    return () => unlockScroll()
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled &&
          'border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-bg)_72%,transparent)] backdrop-blur-xl',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo href={`/${locale}`} name="Andrés Finol" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-sm transition-colors',
                isActive(link.href)
                  ? 'text-[var(--color-foreground)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} label={dict.actions.switchLocale} />
          <CommandPalette locale={locale} dict={dict} projects={projects} />
          <ThemeToggle label={dict.actions.toggleTheme} />
          <Button href={`/${locale}/contact`} size="sm" className="hidden sm:inline-flex">
            {dict.actions.getInTouch}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? dict.actions.closeMenu : dict.actions.openMenu}
            aria-expanded={open}
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-foreground)] md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden">
          <nav className="container-page flex flex-col gap-2 py-8" aria-label="Mobile">
            <Link
              href={`/${locale}`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-semibold text-[var(--color-foreground)]"
            >
              {dict.nav.home}
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-[var(--color-foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="container-page pb-10">
            <Button
              href={`/${locale}/contact`}
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {dict.actions.getInTouch}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
