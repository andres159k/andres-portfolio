import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { allProjects, getProject } from '@/content/projects'
import { isLocale, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

export function generateStaticParams() {
  return locales.flatMap((locale) => allProjects.map((project) => ({ locale, slug: project.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const project = getProject(slug)
  if (!project) return {}
  const copy = project.copy[locale]
  return {
    title: copy.title,
    description: copy.summary,
    alternates: { canonical: `/${locale}/work/${slug}` },
    openGraph: {
      type: 'article',
      title: copy.title,
      description: copy.summary,
    },
  }
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const project = getProject(slug)
  if (!project) notFound()

  const dict = await getDictionary(locale)

  return <CaseStudy project={project} locale={locale} dict={dict} />
}
