'use client'

import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { registerScrollController } from '@/lib/scroll-lock'

export function SmoothScroll() {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    registerScrollController({
      stop: () => lenis.stop(),
      start: () => lenis.start(),
      scrollToTop: () => lenis.scrollTo(0, { immediate: true }),
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    const onAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      event.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -80 })
    }

    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      cancelAnimationFrame(frame)
      registerScrollController(null)
      lenis.destroy()
    }
  }, [reduce])

  return null
}
