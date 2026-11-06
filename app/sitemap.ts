import type { MetadataRoute } from 'next'
import { allProjects } from '@/content/projects'
import { locales } from '@/i18n/config'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/work', '/about', '/contact', '/privacy']
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${site.url}/${locale}${route}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.7,
        alternates: {
          languages: {
            en: `${site.url}/en${route}`,
            es: `${site.url}/es${route}`,
          },
        },
      })
    }
    for (const project of allProjects) {
      entries.push({
        url: `${site.url}/${locale}/work/${project.slug}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.8,
      })
    }
  }

  return entries
}
