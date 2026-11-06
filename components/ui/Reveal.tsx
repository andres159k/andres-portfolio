'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { DURATION, EASE, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'span'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: DURATION.lg, ease: EASE.soft, delay }}
    >
      {children}
    </MotionTag>
  )
}
