import { Marquee } from '@/components/ui/Marquee'

const TOOLS = [
  'React',
  'Next.js',
  'TypeScript',
  'Vue 3',
  'Nuxt',
  'Tailwind CSS',
  'GSAP',
  'Framer Motion',
  'SVG / Canvas',
  'Node.js',
  'Webflow',
  'Shopify',
  'Liquid',
  'HubSpot',
  'GTM',
  'Turborepo',
  'Playwright',
  'Figma',
]

export function StackMarquee({ label }: { label: string }) {
  return (
    <div className="relative border-y border-[var(--color-line)] py-4 md:py-6">
      <p className="container-page mb-4 font-mono text-[11px] tracking-[0.24em] text-[var(--color-subtle)] uppercase md:mb-5">
        {label}
      </p>
      <Marquee items={TOOLS} />
    </div>
  )
}
