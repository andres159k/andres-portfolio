import type { Locale } from '@/i18n/config'
import { site } from '@/lib/site'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maracaibo',
      addressCountry: 'VE',
    },
    sameAs: [site.socials.linkedin, site.socials.github, site.socials.contra],
    knowsLanguage: ['es', 'en'],
  }
}

export function websiteJsonLd(locale: Locale, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url: `${site.url}/${locale}`,
    inLanguage: locale,
  }
}
