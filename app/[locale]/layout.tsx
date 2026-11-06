import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import type { ReactNode } from 'react'
import { BackToTop } from '@/components/layout/BackToTop'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { PageTransition } from '@/components/layout/PageTransition'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { getFeaturedProjects } from '@/content/projects'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { personJsonLd, websiteJsonLd } from '@/lib/seo'
import { site } from '@/lib/site'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.description,
    keywords: [
      'frontend engineer',
      'growth engineer',
      'React',
      'Next.js',
      'Vue',
      'Nuxt',
      'TypeScript',
      'Webflow',
    ],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', es: '/es' },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url: `${site.url}/${locale}`,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale as Locale)
  const navProjects = getFeaturedProjects().map((project) => ({
    slug: project.slug,
    index: project.index,
    title: project.copy[locale as Locale].title,
  }))

  return (
    <html
      lang={locale}
      data-theme="light"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
        />
        <a href="#main" className="skip-link">
          {dict.actions.skipToContent}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personJsonLd(),
              websiteJsonLd(locale as Locale, site.name, dict.meta.description),
            ]),
          }}
        />
        <SmoothScroll />
        <ScrollToTop />
        <ScrollProgress />
        <Header locale={locale as Locale} dict={dict} projects={navProjects} />
        <main id="main" className="pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer locale={locale as Locale} dict={dict} />
        <BackToTop />
      </body>
    </html>
  )
}
