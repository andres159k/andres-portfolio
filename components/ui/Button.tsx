'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] active:brightness-95',
  secondary:
    'bg-[var(--color-bg-elevated)] text-[var(--color-foreground)] border border-[var(--color-line)] hover:bg-[var(--color-glass-200)]',
  ghost: 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
  'aria-label'?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium tracking-tight',
    'transition-[background-color,border-color,color,transform,filter] duration-300 ease-[var(--ease-out-soft)]',
    'active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    const isExternal = external ?? /^https?:|^mailto:|^tel:/.test(href)
    if (isExternal) {
      return (
        <a
          href={href}
          aria-label={ariaLabel}
          onClick={onClick}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={classes}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} aria-label={ariaLabel} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} aria-label={ariaLabel} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
