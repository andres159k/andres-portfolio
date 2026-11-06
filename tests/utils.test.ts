import { describe, expect, it } from 'vitest'
import { cn, formatNumber } from '@/lib/utils'

describe('cn', () => {
  it('merges conflicting tailwind classes, last one wins', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })

  it('drops falsy values', () => {
    expect(cn('text-white', false && 'hidden', undefined, null)).toBe('text-white')
  })
})

describe('formatNumber', () => {
  it('formats thousands with separators', () => {
    expect(formatNumber(1000)).toBe('1,000')
    expect(formatNumber(29)).toBe('29')
  })
})
