'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { scrollToTop } from '@/lib/scroll-lock'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * Resets scroll to the top on client-side route changes. Without this, Lenis
 * keeps its previous position when navigating between pages.
 */
export function ScrollToTop() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useIsomorphicLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    scrollToTop()
  }, [pathname])

  return null
}
