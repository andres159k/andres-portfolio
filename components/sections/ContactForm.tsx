'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import type { Dictionary } from '@/i18n/get-dictionary'
import { track } from '@/lib/analytics'
import { site } from '@/lib/site'

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = `Project enquiry — ${name || 'New message'}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    track('contact_submit', { name: Boolean(name), email: Boolean(email) })
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = `${site.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fieldClass =
    'w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-glass-50)] px-4 py-3 text-sm text-[var(--color-foreground)] outline-none transition-colors placeholder:text-[var(--color-subtle)] focus:border-[var(--color-accent)]'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-subtle)] uppercase">
            {dict.contact.name}
          </span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-subtle)] uppercase">
            {dict.contact.email}
          </span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-subtle)] uppercase">
          {dict.contact.message}
        </span>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          {dict.contact.send}
        </Button>
        {sent ? (
          <p className="text-sm text-[var(--color-live)]">{dict.contact.success}</p>
        ) : (
          <p className="text-xs text-[var(--color-subtle)]">{dict.contact.hint}</p>
        )}
      </div>
    </form>
  )
}
