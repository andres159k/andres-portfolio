'use client'

import {
  ArrowUpRight,
  Command,
  CornerDownLeft,
  FolderKanban,
  Github,
  Home,
  Layers,
  Linkedin,
  Mail,
  Search,
  UserRound,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { track } from '@/lib/analytics'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { lockScroll, unlockScroll } from '@/lib/scroll-lock'

type Command = {
  id: string
  label: string
  group: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
  keywords?: string
}

export function CommandPalette({
  locale,
  dict,
  projects,
}: {
  locale: Locale
  dict: Dictionary
  projects: { slug: string; index: string; title: string }[]
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = [
      {
        id: 'home',
        label: dict.nav.home,
        group: dict.palette.navigation,
        href: `/${locale}`,
        icon: Home,
      },
      {
        id: 'work',
        label: dict.nav.work,
        group: dict.palette.navigation,
        href: `/${locale}/work`,
        icon: Layers,
      },
      {
        id: 'about',
        label: dict.nav.about,
        group: dict.palette.navigation,
        href: `/${locale}/about`,
        icon: UserRound,
      },
      {
        id: 'contact',
        label: dict.nav.contact,
        group: dict.palette.navigation,
        href: `/${locale}/contact`,
        icon: Mail,
      },
    ]
    const projectCommands: Command[] = projects.map((project) => ({
      id: `project-${project.slug}`,
      label: project.title,
      group: dict.palette.projects,
      href: `/${locale}/work/${project.slug}`,
      icon: FolderKanban,
      keywords: project.index,
    }))
    const social: Command[] = [
      {
        id: 'email',
        label: site.email,
        group: dict.palette.social,
        href: site.socials.email,
        icon: Mail,
        keywords: 'mail',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        group: dict.palette.social,
        href: site.socials.linkedin,
        icon: Linkedin,
        external: true,
      },
      {
        id: 'github',
        label: 'GitHub',
        group: dict.palette.social,
        href: site.socials.github,
        icon: Github,
        external: true,
      },
      {
        id: 'contra',
        label: 'Contra',
        group: dict.palette.social,
        href: site.socials.contra,
        icon: ArrowUpRight,
        external: true,
      },
    ]
    return [...nav, ...projectCommands, ...social]
  }, [dict, locale, projects])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((command) =>
      `${command.label} ${command.group} ${command.keywords ?? ''}`.toLowerCase().includes(q),
    )
  }, [commands, query])

  const groups = useMemo(() => {
    const map = new Map<string, Command[]>()
    for (const command of filtered) {
      const list = map.get(command.group) ?? []
      list.push(command)
      map.set(command.group, list)
    }
    return [...map.entries()]
  }, [filtered])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setQuery('')
        setActive(0)
        setOpen((value) => !value)
      }
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return
    const id = window.setTimeout(() => inputRef.current?.focus(), 40)
    return () => window.clearTimeout(id)
  }, [open])

  useEffect(() => {
    if (!open) return
    lockScroll()
    return () => unlockScroll()
  }, [open])

  function openPalette() {
    setQuery('')
    setActive(0)
    setOpen(true)
  }

  function run(command: Command) {
    track('palette_select', { id: command.id })
    setOpen(false)
    if (command.external) {
      if (command.href.startsWith('mailto:')) {
        window.location.href = command.href
      } else {
        window.open(command.href, '_blank', 'noopener,noreferrer')
      }
    } else {
      router.push(command.href)
    }
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index) => Math.min(index + 1, filtered.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => Math.max(index - 1, 0))
    } else if (event.key === 'Enter') {
      const command = filtered[active]
      if (command) run(command)
    }
  }

  let flatIndex = -1

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        aria-label={dict.actions.openPalette}
        className="glass hidden h-9 items-center gap-2 rounded-full px-3 text-xs text-[var(--color-subtle)] transition hover:text-[var(--color-foreground)] md:flex"
      >
        <Command className="h-3.5 w-3.5" />
        <kbd className="font-mono text-[10px] tracking-widest">K</kbd>
      </button>

      {open && typeof document !== 'undefined'
        ? createPortal(
            <div
              className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
              role="dialog"
              aria-modal="true"
              aria-label={dict.palette.placeholder}
            >
              <button
                type="button"
                aria-label={dict.actions.closeMenu}
                onClick={() => setOpen(false)}
                className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
              />
              <div className="glass-strong glass-sheen relative z-10 w-full max-w-xl overflow-hidden rounded-[var(--radius-lg)]">
                <div className="flex items-center gap-3 border-b border-[var(--color-line)] px-4">
                  <Search className="h-4 w-4 text-[var(--color-subtle)]" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value)
                      setActive(0)
                    }}
                    onKeyDown={onInputKeyDown}
                    placeholder={dict.palette.placeholder}
                    className="h-14 w-full bg-transparent text-sm text-[var(--color-foreground)] outline-none placeholder:text-[var(--color-subtle)]"
                  />
                </div>
                <div className="max-h-[52vh] overflow-y-auto p-2" data-lenis-prevent>
                  {groups.length === 0 ? (
                    <p className="px-3 py-8 text-center text-sm text-[var(--color-subtle)]">
                      {dict.palette.noResults}
                    </p>
                  ) : (
                    groups.map(([group, items]) => (
                      <div key={group} className="mb-1">
                        <p className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
                          {group}
                        </p>
                        {items.map((command) => {
                          flatIndex += 1
                          const isActive = flatIndex === active
                          const Icon = command.icon
                          return (
                            <button
                              key={command.id}
                              type="button"
                              onMouseEnter={() => setActive(flatIndex)}
                              onClick={() => run(command)}
                              className={cn(
                                'flex w-full items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-left text-sm transition-colors',
                                isActive
                                  ? 'bg-[var(--color-glass-200)] text-[var(--color-foreground)]'
                                  : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]',
                              )}
                            >
                              <Icon className="h-4 w-4 shrink-0 opacity-70" />
                              <span className="truncate">{command.label}</span>
                              {isActive ? (
                                <CornerDownLeft className="ml-auto h-3.5 w-3.5 opacity-60" />
                              ) : null}
                            </button>
                          )
                        })}
                      </div>
                    ))
                  )}
                </div>
                <div className="border-t border-[var(--color-line)] px-4 py-2 text-center font-mono text-[10px] tracking-[0.2em] text-[var(--color-subtle)] uppercase">
                  {dict.palette.hint}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
