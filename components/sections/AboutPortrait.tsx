import { existsSync } from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import type { Dictionary } from '@/i18n/get-dictionary'
import { site } from '@/lib/site'

const PORTRAIT = '/portrait.jpg'

export function AboutPortrait({ dict }: { dict: Dictionary }) {
  const hasPortrait = existsSync(path.join(process.cwd(), 'public', 'portrait.jpg'))

  if (hasPortrait) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)]">
        <Image
          src={PORTRAIT}
          alt={site.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="eyebrow text-white/70">
            {dict.about.eyebrow} — {site.location}
          </p>
          <p className="mt-1 text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-0.5 text-sm text-white/80">{site.role}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="glass glass-sheen flex aspect-[4/3] flex-col justify-between rounded-[var(--radius-xl)] p-6 md:aspect-square md:p-8">
      <span className="eyebrow">
        {dict.about.eyebrow} — {site.location}
      </span>
      <p className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95] font-semibold text-[var(--color-foreground)] uppercase">
        {site.name}
      </p>
      <div>
        <span className="inline-block h-2.5 w-2.5 bg-[var(--color-accent)]" />
        <p className="eyebrow mt-4">{dict.about.currently}</p>
        <p className="mt-1 text-sm text-[var(--color-foreground)]">{site.role}</p>
      </div>
    </div>
  )
}
