import { describe, expect, it } from 'vitest'
import {
  allProjects,
  getNextProject,
  metricLabel,
  otherProjects,
  otherWork,
  projects,
} from '@/content/projects'

describe('projects content', () => {
  it('has unique slugs across all projects', () => {
    const slugs = allProjects.map((project) => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('provides copy for both locales', () => {
    for (const project of allProjects) {
      for (const locale of ['en', 'es'] as const) {
        const copy = project.copy[locale]
        expect(copy.title.length).toBeGreaterThan(3)
        for (const field of ['summary', 'challenge', 'approach', 'outcome'] as const) {
          expect(copy[field].length).toBeGreaterThan(40)
        }
        expect(copy.highlights.length).toBeGreaterThanOrEqual(3)
      }
    }
  })

  it('defines metrics and stack for every project', () => {
    for (const project of allProjects) {
      expect(project.metrics.length).toBeGreaterThanOrEqual(3)
      expect(project.stack.length).toBeGreaterThanOrEqual(3)
      expect(project.index).toMatch(/^\d{2}$/)
    }
  })

  it('wraps the next project around the end of the list', () => {
    const last = allProjects[allProjects.length - 1]
    const first = allProjects[0]
    expect(last).toBeDefined()
    expect(first).toBeDefined()
    expect(getNextProject(last!.slug).slug).toBe(first!.slug)
  })

  it('returns localized metric labels', () => {
    const metric = { value: '93', en: 'score', es: 'puntaje' }
    expect(metricLabel(metric, 'en')).toBe('score')
    expect(metricLabel(metric, 'es')).toBe('puntaje')
  })
})

describe('other work', () => {
  it('is populated and fully bilingual', () => {
    expect(otherWork.length).toBeGreaterThan(0)
    for (const item of otherWork) {
      expect(item.category.en.length).toBeGreaterThan(0)
      expect(item.category.es.length).toBeGreaterThan(0)
      expect(item.role.length).toBeGreaterThan(0)
      expect(item.title.en.length).toBeGreaterThan(3)
      expect(item.title.es.length).toBeGreaterThan(3)
      for (const field of ['tagline', 'summary', 'challenge', 'approach', 'outcome'] as const) {
        expect(item[field].en.length).toBeGreaterThan(20)
        expect(item[field].es.length).toBeGreaterThan(20)
      }
      expect(item.highlights.en.length).toBeGreaterThanOrEqual(2)
      expect(item.highlights.es.length).toBe(item.highlights.en.length)
      expect(item.metrics.length).toBeGreaterThanOrEqual(3)
    }
  })

  it('maps other work to full case-study pages', () => {
    expect(otherProjects.length).toBe(otherWork.length)
    expect(allProjects.length).toBe(projects.length + otherProjects.length)
    for (const project of otherProjects) {
      expect(project.featured).toBe(false)
      expect(project.copy.en.challenge.length).toBeGreaterThan(20)
      expect(project.copy.es.outcome.length).toBeGreaterThan(20)
    }
  })
})
