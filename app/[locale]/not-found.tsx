'use client'

import { ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Aurora } from '@/components/ui/Aurora'

const COPY = {
  en: {
    title: 'Page not found',
    subtitle: 'The page you are looking for does not exist or has moved.',
    cta: 'Back home',
  },
  es: {
    title: 'Página no encontrada',
    subtitle: 'La página que buscas no existe o se ha movido.',
    cta: 'Volver al inicio',
  },
} as const

export default function NotFound() {
  const pathname = usePathname()
  const locale = pathname.startsWith('/es') ? 'es' : 'en'
  const copy = COPY[locale]

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Aurora />
      <div className="container-narrow relative text-center">
        <p className="font-display text-[clamp(4rem,14vw,9rem)] font-semibold text-[var(--color-accent)]">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold">{copy.title}</h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--color-muted)]">{copy.subtitle}</p>
        <div className="mt-9 flex justify-center">
          <Button href={`/${locale}`} size="lg">
            <ArrowLeft className="h-4 w-4" />
            {copy.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
