'use client'

import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { EASE } from '@/lib/motion'

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (reduce || !inView) return
    const controls = animate(0, value, {
      duration: 1.3,
      ease: EASE.soft,
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  const shown = reduce ? value : display

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  )
}
