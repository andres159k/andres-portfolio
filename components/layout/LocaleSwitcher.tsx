'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import { cn } from '@/lib/utils'

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname()
  const rest = pathname.split('/').slice(2).join('/')

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-[var(--color-line)] p-0.5"
      role="group"
      aria-label={label}
    >
      {locales.map((code) => {
        const href = `/${code}${rest ? `/${rest}` : ''}`
        const active = code === locale
        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'rounded-full px-2.5 py-1 text-[11px] font-medium tracking-widest uppercase transition-colors',
              active
                ? 'bg-[var(--color-foreground)] text-[var(--color-bg)]'
                : 'text-[var(--color-subtle)] hover:text-[var(--color-foreground)]',
            )}
          >
            {code}
          </Link>
        )
      })}
    </div>
  )
}
