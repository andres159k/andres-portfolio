'use client'

import { Moon, Sun } from 'lucide-react'

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const el = document.documentElement
    const next = el.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    el.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // ignore storage failures
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="glass flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-foreground)] transition hover:bg-[var(--color-glass-200)]"
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </button>
  )
}
