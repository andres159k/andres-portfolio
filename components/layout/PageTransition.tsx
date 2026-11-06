'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { DURATION, EASE } from '@/lib/motion'

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.lg, ease: EASE.soft }}
    >
      {children}
    </motion.div>
  )
}
