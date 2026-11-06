import type { Variants } from 'framer-motion'

export const EASE = {
  out: [0, 0, 0, 1],
  in: [0.3, 0, 1, 1],
  soft: [0.22, 1, 0.36, 1],
} as const

export const DURATION = {
  xs: 0.18,
  sm: 0.3,
  md: 0.45,
  lg: 0.6,
  xl: 0.9,
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.lg, ease: EASE.soft },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.md, ease: EASE.out } },
}

export const stagger = (each = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: each, delayChildren: delay },
  },
})

export const viewportOnce = { once: true, margin: '-80px' } as const
