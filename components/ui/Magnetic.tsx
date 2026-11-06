'use client'

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 })
  const reduce = useReducedMotion()

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el || reduce) return
    const rect = el.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduce ? undefined : { x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
