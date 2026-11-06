import { describe, expect, it } from 'vitest'
import en from '@/i18n/dictionaries/en'
import es from '@/i18n/dictionaries/es'

function paths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) {
    return value.length > 0 ? paths(value[0], `${prefix}[]`) : [`${prefix}[]`]
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
      paths(child, prefix ? `${prefix}.${key}` : key),
    )
  }
  return [prefix]
}

describe('dictionaries', () => {
  it('have identical key structures across locales', () => {
    expect(paths(es).sort()).toEqual(paths(en).sort())
  })

  it('have no empty strings', () => {
    const collect = (value: unknown): string[] => {
      if (typeof value === 'string') return [value]
      if (Array.isArray(value)) return value.flatMap(collect)
      if (value !== null && typeof value === 'object') {
        return Object.values(value as Record<string, unknown>).flatMap(collect)
      }
      return []
    }
    for (const dict of [en, es]) {
      for (const text of collect(dict)) {
        expect(text.trim().length).toBeGreaterThan(0)
      }
    }
  })
})
