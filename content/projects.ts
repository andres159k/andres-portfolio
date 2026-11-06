import type { Locale } from '@/i18n/config'

export type Metric = {
  value: string
  en: string
  es: string
}

export type ProjectImage = {
  src: string
  aspect?: 'wide' | 'tall'
  caption?: Record<Locale, string>
}

export type ProjectCopy = {
  title: string
  tagline: string
  summary: string
  challenge: string
  approach: string
  outcome: string
  highlights: string[]
}

export type Project = {
  slug: string
  index: string
  client: string
  year: string
  role: string
  url?: string
  stack: string[]
  accent: 'signal' | 'paper' | 'olive'
  featured: boolean
  cover?: string
  gallery?: ProjectImage[]
  metrics: Metric[]
  copy: Record<Locale, ProjectCopy>
}

export const projects: Project[] = [
  {
    slug: 'memorae-growth',
    index: '01',
    client: 'Memorae',
    year: '2026',
    role: 'Marketing Growth Engineer / Senior Frontend Engineer',
    url: 'https://memorae.ai/en/',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vanilla JS (SVG)',
      'Serverless + Postgres',
    ],
    accent: 'signal',
    cover: '/work/memorae-growth/home-hero.png',
    gallery: [
      { src: '/work/memorae-growth/graph-memorae.png' },
      { src: '/work/memorae-growth/home-2nd.png' },
      { src: '/work/memorae-growth/home-3rd.png' },
      { src: '/work/memorae-growth/screenshot-1.png' },
      { src: '/work/memorae-growth/l23-1.png', aspect: 'tall' },
      { src: '/work/memorae-growth/teams-hero.png' },
      { src: '/work/memorae-growth/teams-2nd.png' },
      { src: '/work/memorae-growth/teams-4th.png' },
    ],
    featured: true,
    metrics: [
      {
        value: 'End-to-end',
        en: 'funnel to data room, in code',
        es: 'del funnel al data room, en código',
      },
      { value: 'EN · FR · PT', en: 'localized markets', es: 'mercados localizados' },
      { value: '0', en: 'low-code dependency', es: 'dependencia de low-code' },
    ],
    copy: {
      en: {
        title: 'Memorae — Growth Funnel & Investor Data Room',
        tagline: 'Growth systems and a walkable Series A data room.',
        summary:
          'End-to-end frontend for an AI memory product: acquisition funnel, product launchpads, marketing homepage and a dark-glassmorphic investor data room — all built in code.',
        challenge:
          'Memorae needed to convert visitors into users while preparing a Series A raise. The funnel had to move fast, localize across markets, track every step for paid experiments, and present investors with a data room that felt as considered as the product itself.',
        approach:
          'I owned the frontend for the global funnel built on Next.js App Router, React and TypeScript, with no low-code layer. For the data room I wrote a custom SVG node-graph engine in vanilla JavaScript backed by a serverless gated-content API and Postgres, so the investor copy and source links never ship in the static bundle. I architected the i18n layer (EN/FR/PT), consent management and data-layer events for A/B testing.',
        outcome:
          'A cohesive set of growth surfaces that load fast on mobile, localize cleanly and feed a measurable experimentation loop — plus a data room designed to make the Series A story legible in a single walk-through.',
        highlights: [
          'Custom SVG node-graph engine in vanilla JS with a guided 29-node investor path.',
          'Serverless gated-content API with Postgres persistence and per-investor progress.',
          'Multi-market architecture (EN/FR/PT) with CMP consent and data-layer instrumentation.',
          'Mobile-first launchpads and onboarding flows built entirely in code, not Webflow.',
        ],
      },
      es: {
        title: 'Memorae — Funnel de Growth y Data Room',
        tagline: 'Sistemas de growth y un data room caminable para la Serie A.',
        summary:
          'Frontend de punta a punta para un producto de memoria con IA: funnel de adquisición, launchpads de producto, homepage de marketing y un data room dark-glassmorphic para inversores, todo hecho en código.',
        challenge:
          'Memorae necesitaba convertir visitantes en usuarios mientras preparaba una ronda Serie A. El funnel debía moverse rápido, localizarse por mercados, medir cada paso para experimentos pagos y presentar a los inversores un data room tan cuidado como el propio producto.',
        approach:
          'Lideré el frontend del funnel global sobre Next.js App Router, React y TypeScript, sin capa low-code. Para el data room escribí un motor de grafo SVG a medida en JavaScript vanilla, respaldado por una API serverless con contenido protegido y Postgres, para que el copy y los enlaces nunca viajen en el bundle estático. Arquitecté la capa i18n (EN/FR/PT), el consentimiento y los eventos de data-layer para tests A/B.',
        outcome:
          'Un conjunto coherente de superficies de growth que cargan rápido en móvil, se localizan con limpieza y alimentan un loop de experimentación medible, más un data room pensado para hacer legible la historia de la Serie A en un solo recorrido.',
        highlights: [
          'Motor de grafo SVG a medida en JS vanilla con recorrido guiado de 29 nodos.',
          'API serverless con contenido protegido, persistencia en Postgres y progreso por inversor.',
          'Arquitectura multi-mercado (EN/FR/PT) con consentimiento y data-layer.',
          'Launchpads y flujos de onboarding mobile-first construidos en código, sin Webflow.',
        ],
      },
    },
  },
  {
    slug: 'learning-heroes-site',
    index: '02',
    client: 'Learning Heroes',
    year: '2024',
    role: 'Frontend Engineer (contract)',
    url: 'https://www.learningheroes.com/',
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'GSAP', 'HubSpot'],
    accent: 'paper',
    cover: '/work/learning-heroes-site/frame-1.png',
    gallery: [
      { src: '/work/learning-heroes-site/frame-2.png' },
      { src: '/work/learning-heroes-site/frame-3.png' },
      { src: '/work/learning-heroes-site/frame-4.png' },
      { src: '/work/learning-heroes-site/frame-5.png' },
      { src: '/work/learning-heroes-site/frame-6.png' },
    ],
    featured: true,
    metrics: [
      { value: 'Webflow → Nuxt 3', en: 'platform migration', es: 'migración de plataforma' },
      { value: 'Self-serve', en: 'marketing CMS', es: 'CMS de marketing' },
      { value: 'SSR', en: 'SEO-first delivery', es: 'entrega SEO-first' },
    ],
    copy: {
      en: {
        title: 'Learning Heroes — Marketing Site',
        tagline: 'From a heavy platform to a fast, SEO-first Nuxt stack.',
        summary:
          "Learning Heroes' primary acquisition channel: an SSR marketing site that replaced Webflow/Memberstack, with scroll-driven motion and an internal CMS the marketing team runs itself.",
        challenge:
          'The team was on Webflow with Memberstack — flexible but slow, expensive and limited for SEO and performance. They needed a fast, server-rendered site the marketing team could edit without engineering, with animations that did not hurt Core Web Vitals.',
        approach:
          'I built the public site from scratch on Nuxt 3 with SSR and TypeScript, a Tailwind design system, GSAP scroll animations and page transitions, and HubSpot for forms, tracking and CRM sync. I also built an internal CMS so marketing could manage pages, blog posts and landing pages independently.',
        outcome:
          'A fast, SEO-friendly site that removed third-party platform dependencies and gave marketing full control of content — keeping the 40→93 performance gain while layering on GSAP motion.',
        highlights: [
          'Kept it fast (Lighthouse 40→93) while layering on GSAP scroll motion.',
          'Migration off Webflow/Memberstack to a self-hosted Nuxt 3 stack.',
          'Internal CMS giving marketing full ownership of content.',
          'GSAP scroll animations and page transitions that respect performance.',
        ],
      },
      es: {
        title: 'Learning Heroes — Sitio de Marketing',
        tagline: 'De una plataforma pesada a un stack Nuxt rápido y SEO-first.',
        summary:
          'El principal canal de adquisición de Learning Heroes: un sitio SSR que sustituyó a Webflow/Memberstack, con motion basado en scroll y un CMS interno que gestiona el propio equipo de marketing.',
        challenge:
          'El equipo estaba en Webflow con Memberstack: flexible pero lento, caro y limitado en SEO y rendimiento. Necesitaban un sitio rápido, renderizado en servidor, que marketing pudiera editar sin ingeniería y con animaciones que no dañaran los Core Web Vitals.',
        approach:
          'Construí el sitio público desde cero en Nuxt 3 con SSR y TypeScript, un design system en Tailwind, animaciones y transiciones con GSAP, y HubSpot para formularios, tracking y sincronización con el CRM. También creé un CMS interno para que marketing gestionara páginas, blog y landings con autonomía.',
        outcome:
          'Un sitio rápido y SEO-friendly que eliminó dependencias de plataformas de terceros y dio a marketing control total del contenido, manteniendo la mejora de rendimiento (40→93) mientras añadía animaciones GSAP.',
        highlights: [
          'Lo mantuve rápido (Lighthouse de 40 a 93) mientras añadía animaciones GSAP.',
          'Migración de Webflow/Memberstack a un stack Nuxt 3 propio.',
          'CMS interno que dio a marketing control total del contenido.',
          'Animaciones y transiciones GSAP que respetan el rendimiento.',
        ],
      },
    },
  },
  {
    slug: 'learning-heroes-classroom',
    index: '03',
    client: 'Learning Heroes',
    year: '2025',
    role: 'Senior Frontend Engineer',
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Turborepo', 'Tailwind CSS', 'Playwright'],
    accent: 'olive',
    cover: '/work/learning-heroes-classroom/01.webp',
    gallery: [{ src: '/work/learning-heroes-classroom/02.webp' }],
    featured: true,
    metrics: [
      { value: '7 / 16', en: 'apps / packages in monorepo', es: 'apps / paquetes del monorepo' },
      { value: 'SSO', en: 'authentication flow', es: 'flujo de autenticación' },
      { value: 'E2E', en: 'Playwright coverage', es: 'cobertura con Playwright' },
    ],
    copy: {
      en: {
        title: 'Learning Heroes — Virtual Classroom',
        tagline: 'A product-grade classroom app inside a shared monorepo.',
        summary:
          'Frontend for the online classroom: course navigation, in-session interaction, progress tracking and an AI learning companion, built inside a Vue 3 / Nuxt monorepo.',
        challenge:
          'The classroom experience had to scale as the student base grew, share a design system across several apps, and stay maintainable within a 12-person engineering team with strict quality gates.',
        approach:
          'I built and maintained the classroom application inside a Turborepo monorepo of shared Vue/Nuxt packages, with TypeScript throughout. I integrated SSO authentication, an AI learning companion UI and internal tooling, and set up automated E2E testing with Playwright across critical paths.',
        outcome:
          'A consistent, component-driven classroom experience that is easy to extend, with shared packages, automated end-to-end coverage and a design system the whole team builds on.',
        highlights: [
          'Classroom app within a Turborepo monorepo of 7 apps and 16 packages.',
          'SSO authentication, AI learning companion UI and internal tooling.',
          'Automated Playwright E2E workflows across critical platform paths.',
          'Shared component system driving consistency across apps.',
        ],
      },
      es: {
        title: 'Learning Heroes — Aula Virtual',
        tagline: 'Una app de aula con calidad de producto dentro de un monorepo compartido.',
        summary:
          'Frontend del aula online: navegación de cursos, interacción en sesión, seguimiento de progreso y un compañero de aprendizaje con IA, dentro de un monorepo Vue 3 / Nuxt.',
        challenge:
          'La experiencia de aula debía escalar con el crecimiento de estudiantes, compartir un design system entre varias apps y mantenerse dentro de un equipo de 12 personas con gates de calidad estrictos.',
        approach:
          'Construí y mantuve la aplicación de aula dentro de un monorepo Turborepo de paquetes Vue/Nuxt compartidos, con TypeScript en todo. Integré autenticación SSO, la UI del compañero de aprendizaje con IA y herramientas internas, y monté testing E2E automatizado con Playwright en rutas críticas.',
        outcome:
          'Una experiencia de aula consistente y basada en componentes, fácil de extender, con paquetes compartidos, cobertura E2E automatizada y un design system sobre el que construye todo el equipo.',
        highlights: [
          'App de aula dentro de un monorepo Turborepo de 7 apps y 16 paquetes.',
          'Autenticación SSO, UI del compañero con IA y herramientas internas.',
          'Flujos E2E automatizados con Playwright en rutas críticas.',
          'Sistema de componentes compartido que da consistencia entre apps.',
        ],
      },
    },
  },
  {
    slug: 'and-immo',
    index: '04',
    client: 'And Immo · Andorra',
    year: '2024',
    role: 'Frontend Engineer (contract)',
    url: 'https://www.and.immo/',
    stack: ['Webflow', 'JavaScript', 'Node.js', 'REST APIs'],
    accent: 'paper',
    cover: '/work/and-immo/01.webp',
    gallery: [
      { src: '/work/and-immo/02.webp' },
      { src: '/work/and-immo/03.webp' },
      { src: '/work/and-immo/04.webp' },
      { src: '/work/and-immo/05.webp' },
    ],
    featured: true,
    metrics: [
      { value: 'Multi-language', en: 'i18n architecture', es: 'arquitectura i18n' },
      { value: 'Node.js', en: 'CRM sync pipeline', es: 'pipeline de sync con CRM' },
      { value: 'Figma → Webflow', en: 'design to build', es: 'de diseño a build' },
    ],
    copy: {
      en: {
        title: 'And Immo — Multilingual Real Estate',
        tagline: 'A luxury property site with an automated CRM pipeline.',
        summary:
          'A multilingual website for a luxury real estate company in Andorra, with a custom Node.js integration syncing listings and leads to the client CRM.',
        challenge:
          'The company sells to international buyers, so multiple languages, SEO-friendly routing and a property system that stays in sync with their sales pipeline were non-negotiable from day one.',
        approach:
          'I built the full site in Webflow from Figma designs with custom interactions and responsive layouts, an i18n architecture with clean URLs, and a Node.js integration that syncs property listings and lead-capture forms with the existing CRM. Listings support filtering, search and detail pages from a structured content model.',
        outcome:
          'A polished, fast-loading site that serves an international audience and keeps the sales pipeline connected through automated CRM syncing.',
        highlights: [
          'Multilingual architecture with SEO-friendly, clean URL routing.',
          'Node.js CRM integration syncing listings and lead capture.',
          'Property listings with filtering, search and detail pages.',
          'Performance work: optimised images, lazy loading and fast regional loads.',
        ],
      },
      es: {
        title: 'And Immo — Inmobiliaria Multilingüe',
        tagline: 'Un sitio de lujo con pipeline automatizado hacia el CRM.',
        summary:
          'Sitio multilingüe para una inmobiliaria de lujo en Andorra, con integración a medida en Node.js que sincroniza propiedades y leads con el CRM del cliente.',
        challenge:
          'La empresa vende a compradores internacionales, así que varios idiomas, rutas SEO-friendly y un sistema de propiedades sincronizado con su pipeline comercial eran innegociables desde el día uno.',
        approach:
          'Construí el sitio completo en Webflow a partir de diseños Figma, con interacciones a medida y layouts responsive, una arquitectura i18n con URLs limpias y una integración Node.js que sincroniza propiedades y formularios de captura con el CRM existente. Las propiedades incluyen filtrado, búsqueda y páginas de detalle desde un modelo de contenido estructurado.',
        outcome:
          'Un sitio pulido y rápido que sirve a una audiencia internacional y mantiene el pipeline comercial conectado mediante sincronización automática con el CRM.',
        highlights: [
          'Arquitectura multilingüe con URLs limpias y SEO-friendly.',
          'Integración Node.js con el CRM para propiedades y captura de leads.',
          'Listado de propiedades con filtros, búsqueda y detalle.',
          'Performance: imágenes optimizadas, lazy loading y carga regional rápida.',
        ],
      },
    },
  },
  {
    slug: 'alostra-shopify',
    index: '05',
    client: 'Alostra',
    year: '2024',
    role: 'Frontend Developer (contract)',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    accent: 'signal',
    cover: '/work/alostra-shopify/01.webp',
    gallery: [
      { src: '/work/alostra-shopify/02.webp' },
      { src: '/work/alostra-shopify/03.webp' },
      { src: '/work/alostra-shopify/04.webp' },
      { src: '/work/alostra-shopify/05.webp' },
      { src: '/work/alostra-shopify/06.webp' },
      { src: '/work/alostra-shopify/07.webp' },
    ],
    featured: true,
    metrics: [
      { value: 'Liquid', en: 'custom Shopify theme', es: 'tema Shopify a medida' },
      { value: 'Mobile-first', en: 'conversion storefront', es: 'storefront de conversión' },
      { value: 'JS', en: 'cart & filtering UX', es: 'UX de carrito y filtros' },
    ],
    copy: {
      en: {
        title: 'Alostra — Custom Shopify Storefront',
        tagline: 'A premium e-commerce experience, built to convert.',
        summary:
          'A custom Shopify storefront for a premium hair care brand: a theme tailored to the brand identity, rich product pages and a mobile-first path to checkout.',
        challenge:
          'Most of the brand traffic comes from mobile, and the storefront had to feel as premium as the product while staying fast despite heavy imagery and a rich product catalogue.',
        approach:
          'I built a custom Shopify theme with Liquid, tailored product pages with rich media and variant selectors, custom JavaScript for smooth cart behaviour and product filtering, and performance tuning to keep loads fast.',
        outcome:
          'A polished storefront that reflects the brand positioning and gives customers a smooth path from browsing to checkout.',
        highlights: [
          'Custom Liquid theme matched to the brand identity.',
          'Product pages with rich media, variants and benefit breakdowns.',
          'Custom JavaScript for cart behaviour, filtering and UI polish.',
          'Performance tuning for a mobile-heavy audience.',
        ],
      },
      es: {
        title: 'Alostra — Storefront Shopify a Medida',
        tagline: 'Una experiencia e-commerce premium, pensada para convertir.',
        summary:
          'Storefront Shopify a medida para una marca premium de cuidado capilar: un tema alineado a la identidad de marca, páginas de producto ricas y un camino mobile-first al checkout.',
        challenge:
          'La mayor parte del tráfico llega desde móvil y el storefront debía sentirse tan premium como el producto, manteniéndose rápido pese a imágenes pesadas y un catálogo amplio.',
        approach:
          'Construí un tema Shopify a medida con Liquid, páginas de producto con medios enriquecidos y selectores de variantes, JavaScript propio para un carrito fluido y filtrado de productos, y ajustes de rendimiento para cargas rápidas.',
        outcome:
          'Un storefront pulido que refleja el posicionamiento de la marca y da al cliente un camino fluido desde la exploración hasta el checkout.',
        highlights: [
          'Tema Liquid a medida alineado a la identidad de marca.',
          'Páginas de producto con medios enriquecidos, variantes y beneficios.',
          'JavaScript propio para carrito, filtros y pulido de UI.',
          'Ajuste de rendimiento para una audiencia mobile-first.',
        ],
      },
    },
  },
]

export type OtherWork = {
  slug: string
  index: string
  name: string
  year: string
  category: Record<Locale, string>
  tags: string[]
  role: string
  accent: 'signal' | 'paper' | 'olive'
  title: Record<Locale, string>
  tagline: Record<Locale, string>
  summary: Record<Locale, string>
  challenge: Record<Locale, string>
  approach: Record<Locale, string>
  outcome: Record<Locale, string>
  highlights: Record<Locale, string[]>
  metrics: Metric[]
  cover?: string
  gallery?: ProjectImage[]
  url?: string
}

export const otherWork: OtherWork[] = [
  {
    name: 'McK Solutions',
    slug: 'mck-solutions',
    index: '06',
    accent: 'olive',
    title: {
      en: 'McK Solutions — Brand & Web Redesign',
      es: 'McK Solutions — Rediseño de Marca y Web',
    },
    tagline: {
      en: 'A full rebrand and Webflow build, designed and shipped end to end.',
      es: 'Un rebranding completo y build en Webflow, diseñado y entregado de punta a punta.',
    },
    challenge: {
      en: 'The existing site felt dated and was hard to update. They needed a modern identity and a site the team could edit without a developer.',
      es: 'El sitio existente se veía anticuado y era difícil de actualizar. Necesitaban una identidad moderna y un sitio que el equipo pudiera editar sin desarrollador.',
    },
    approach: {
      en: 'I owned design and frontend: built a component system in Figma, translated it into Webflow with custom JavaScript interactions, and structured the CMS so team, services and content are editable.',
      es: 'Llevé el diseño y el frontend: construí un sistema de componentes en Figma, lo traduje a Webflow con interacciones JS a medida y estructuré el CMS para que equipo, servicios y contenido fueran editables.',
    },
    outcome: {
      en: 'A modern, coherent site that matches the quality of their services, with an editing experience the client owns.',
      es: 'Un sitio moderno y coherente que está a la altura de sus servicios, con una experiencia de edición que el cliente controla.',
    },
    metrics: [
      { value: 'End-to-end', en: 'design + build', es: 'diseño + build' },
      { value: 'CMS', en: 'client-managed content', es: 'contenido gestionado por el cliente' },
      { value: 'Custom', en: 'JavaScript interactions', es: 'interacciones JavaScript' },
    ],
    gallery: [
      { src: '/work/mck-solutions/02.webp' },
      { src: '/work/mck-solutions/03.webp' },
      { src: '/work/mck-solutions/04.webp' },
      { src: '/work/mck-solutions/05.webp' },
      { src: '/work/mck-solutions/06.webp' },
    ],
    year: '2024',
    category: { en: 'Brand & web design', es: 'Marca y diseño web' },
    tags: ['Figma', 'Webflow', 'JavaScript'],
    cover: '/work/mck-solutions/01.webp',
    role: 'Design & Webflow build',
    summary: {
      en: 'A full redesign of a professional-services website — Figma design and Webflow build, with CMS-driven sections so the client can update services and team without a developer.',
      es: 'Rediseño completo del sitio de una empresa de servicios profesionales: diseño en Figma y build en Webflow, con secciones gestionadas por CMS para que el cliente actualice servicios y equipo sin desarrollador.',
    },
    highlights: {
      en: [
        'Figma design system and responsive layouts',
        'Webflow build with custom JavaScript interactions',
        'CMS structure the client updates independently',
      ],
      es: [
        'Design system en Figma y layouts responsive',
        'Build en Webflow con interacciones JS a medida',
        'Estructura CMS que el cliente actualiza solo',
      ],
    },
  },
  {
    name: 'Macaulay Property Group',
    slug: 'macaulay-property-group',
    index: '07',
    accent: 'paper',
    title: {
      en: 'Macaulay Property Group — Real Estate Site',
      es: 'Macaulay Property Group — Sitio Inmobiliario',
    },
    tagline: {
      en: 'A boutique real estate site on a flexible, CMS-driven Webflow foundation.',
      es: 'Un sitio inmobiliario boutique sobre una base Webflow flexible y gestionada por CMS.',
    },
    challenge: {
      en: 'The group needed a polished, easy-to-update site that showcases listings and locations without a developer.',
      es: 'El grupo necesitaba un sitio pulido y fácil de actualizar que mostrara propiedades y ubicaciones sin un desarrollador.',
    },
    approach: {
      en: 'I built the site in Webflow with a CMS structure for properties and locations, responsive layouts and reusable components.',
      es: 'Construí el sitio en Webflow con una estructura CMS para propiedades y ubicaciones, layouts responsive y componentes reutilizables.',
    },
    outcome: {
      en: 'A clean, fast site the team can update themselves, aligned to the brand.',
      es: 'Un sitio limpio y rápido que el equipo puede actualizar solo, alineado a la marca.',
    },
    metrics: [
      { value: 'CMS', en: 'listings & locations', es: 'propiedades y ubicaciones' },
      { value: 'Webflow', en: 'build', es: 'build' },
      { value: 'Responsive', en: 'mobile-first layout', es: 'layout mobile-first' },
    ],
    gallery: [
      { src: '/work/macaulay-property-group/02.webp' },
      { src: '/work/macaulay-property-group/03.webp' },
      { src: '/work/macaulay-property-group/04.webp' },
      { src: '/work/macaulay-property-group/05.webp' },
      { src: '/work/macaulay-property-group/06.webp' },
    ],
    year: '2024',
    category: { en: 'Real estate', es: 'Inmobiliario' },
    tags: ['Webflow', 'CMS', 'JavaScript'],
    cover: '/work/macaulay-property-group/01.webp',
    role: 'Webflow & CMS',
    summary: {
      en: 'A boutique real estate group site, built in Webflow with a CMS-driven structure for listings and team pages.',
      es: 'Sitio de un grupo inmobiliario boutique, construido en Webflow con estructura CMS para listados y páginas de equipo.',
    },
    highlights: {
      en: [
        'Webflow build aligned to the brand',
        'CMS for listings and team pages',
        'Responsive, mobile-first layouts',
      ],
      es: [
        'Build en Webflow alineado a la marca',
        'CMS para listados y páginas de equipo',
        'Layouts responsive, mobile-first',
      ],
    },
  },
  {
    name: 'Subnets.IO',
    slug: 'subnets',
    index: '08',
    accent: 'signal',
    title: {
      en: 'Subnets.IO — Avalanche Subnet Explorer',
      es: 'Subnets.IO — Explorador de Subnets de Avalanche',
    },
    tagline: {
      en: 'Real-time on-chain analytics with a spatial navigation UI.',
      es: 'Analítica on-chain en tiempo real con una UI de navegación espacial.',
    },
    challenge: {
      en: 'Rendering high-frequency on-chain data without overwhelming the user, and making a complex network feel navigable.',
      es: 'Renderizar datos on-chain de alta frecuencia sin abrumar al usuario y hacer navegable una red compleja.',
    },
    approach: {
      en: 'I built real-time dashboards over WebSocket streams, with a spatial 2D/3D navigation system and dynamic data panels in React.',
      es: 'Construí dashboards en tiempo real sobre streams WebSocket, con un sistema de navegación espacial 2D/3D y paneles de datos dinámicos en React.',
    },
    outcome: {
      en: 'A fast, legible analytics surface that made subnet activity explorable in real time.',
      es: 'Una superficie analítica rápida y legible que hacía explorable la actividad de las subnets en tiempo real.',
    },
    metrics: [
      { value: 'Real-time', en: 'on-chain metrics', es: 'métricas on-chain' },
      { value: 'WebSockets', en: 'live data streams', es: 'streams de datos en vivo' },
      { value: '2D/3D', en: 'navigation UI', es: 'UI de navegación' },
    ],
    gallery: [{ src: '/work/subnets/subnets-05.png' }, { src: '/work/subnets/subnets-06.jpg' }],
    year: '2023',
    category: { en: 'Web3 analytics', es: 'Analítica Web3' },
    tags: ['React', 'WebSockets', 'SVG'],
    role: 'Lead Frontend Engineer',
    summary: {
      en: 'A real-time monitoring platform for Avalanche subnets: live on-chain metrics, WebSocket data streams and a spatial 2D/3D navigation UI.',
      es: 'Plataforma de monitoreo en tiempo real para subnets de Avalanche: métricas on-chain en vivo, streams por WebSocket y una UI de navegación espacial 2D/3D.',
    },
    highlights: {
      en: [
        'Real-time dashboards for validators and gas fees',
        'WebSocket data streams',
        'Spatial 2D/3D navigation in React',
      ],
      es: [
        'Dashboards en tiempo real de validadores y gas fees',
        'Streams de datos por WebSocket',
        'Navegación espacial 2D/3D en React',
      ],
    },
    cover: '/work/subnets/subnets-09.png',
  },
  {
    name: 'Achievemint.io',
    slug: 'achievemint',
    index: '09',
    accent: 'signal',
    title: {
      en: 'Achievemint.io — NFT Platform',
      es: 'Achievemint.io — Plataforma NFT',
    },
    tagline: {
      en: 'NFTs for real-world achievements, with instant claiming at live events.',
      es: 'NFTs para logros del mundo real, con reclamo instantáneo en eventos.',
    },
    challenge: {
      en: 'Onboarding non-crypto users and making NFT claiming instant at physical events.',
      es: 'Incorporar a usuarios no cripto y hacer instantáneo el reclamo de NFT en eventos físicos.',
    },
    approach: {
      en: 'Wallet connection flows, NFT collection interfaces, and a QR-based claiming experience for live events, with a focus on retention after the event.',
      es: 'Flujos de conexión de wallet, interfaces de colecciones NFT y una experiencia de reclamo por QR para eventos, con foco en la retención posterior.',
    },
    outcome: {
      en: 'A smooth claim flow at events and a platform that made NFTs feel accessible.',
      es: 'Un flujo de reclamo fluido en eventos y una plataforma que hizo los NFT accesibles.',
    },
    metrics: [
      { value: 'QR', en: 'instant claiming', es: 'reclamo instantáneo' },
      { value: 'Wallets', en: 'onboarding flows', es: 'flujos de onboarding' },
      { value: 'Events', en: 'gamification', es: 'gamificación' },
    ],
    gallery: [
      { src: '/work/achievemint/02.webp' },
      { src: '/work/achievemint/03.webp' },
      { src: '/work/achievemint/04.webp' },
      { src: '/work/achievemint/05.webp' },
    ],
    year: '2022',
    category: { en: 'Web3 product', es: 'Producto Web3' },
    tags: ['React', 'Wallets', 'NFT'],
    cover: '/work/achievemint/01.webp',
    role: 'Frontend Engineer',
    summary: {
      en: 'An NFT platform on Avalanche focused on asset accessibility and event gamification, with wallet onboarding and QR-based instant NFT claiming at live events.',
      es: 'Plataforma NFT en Avalanche centrada en accesibilidad de activos y gamificación de eventos, con onboarding de wallet y reclamo instantáneo de NFT por QR en eventos.',
    },
    highlights: {
      en: [
        'Wallet connection and onboarding flows',
        'QR-based NFT claiming at events',
        'NFT collection interfaces',
      ],
      es: [
        'Flujos de conexión y onboarding de wallet',
        'Reclamo de NFT por QR en eventos',
        'Interfaces de colecciones NFT',
      ],
    },
  },
  {
    name: 'Play Rytell',
    slug: 'play-rytell',
    index: '10',
    accent: 'olive',
    title: {
      en: 'Play Rytell — NFT Play-to-Earn Game',
      es: 'Play Rytell — Juego Play-to-Earn NFT',
    },
    tagline: {
      en: 'Real-time combat and an interactive world for a Web3 fantasy game.',
      es: 'Combate en tiempo real y un mundo interactivo para un juego de fantasía Web3.',
    },
    challenge: {
      en: 'Building responsive real-time combat and map interactions in the browser while integrating wallets.',
      es: 'Construir combate en tiempo real y navegación por mapa en el navegador, integrando wallets.',
    },
    approach: {
      en: 'I implemented real-time combat UI, interactive map navigation and complex animation systems in React/Sass, with wallet integration.',
      es: 'Implementé la UI de combate en tiempo real, la navegación por mapa interactivo y sistemas de animación complejos en React/Sass, con integración de wallet.',
    },
    outcome: {
      en: 'A fluid game frontend with responsive combat and navigation.',
      es: 'Un frontend de juego fluido, con combate y navegación responsivos.',
    },
    metrics: [
      { value: 'Real-time', en: 'combat UI', es: 'UI de combate' },
      { value: 'Map', en: 'navigation', es: 'navegación' },
      { value: 'Web3', en: 'wallet integration', es: 'integración de wallet' },
    ],
    gallery: [{ src: '/work/rytell/rytell-04.png' }, { src: '/work/rytell/rytell-06.png' }],
    year: '2022',
    category: { en: 'Web3 game', es: 'Juego Web3' },
    tags: ['React', 'Sass', 'Motion'],
    role: 'Frontend Engineer',
    summary: {
      en: 'A frontend for an NFT play-to-earn fantasy game on Avalanche: real-time combat UI, interactive map navigation and wallet integration.',
      es: 'Frontend de un juego de fantasía play-to-earn con NFT en Avalanche: UI de combate en tiempo real, navegación por mapa interactivo e integración de wallet.',
    },
    highlights: {
      en: ['Real-time combat UI', 'Interactive map navigation', 'Complex animation systems'],
      es: [
        'UI de combate en tiempo real',
        'Navegación por mapa interactivo',
        'Sistemas de animación complejos',
      ],
    },
    cover: '/work/rytell/rytell-05.png',
  },
]

export function otherWorkToProject(item: OtherWork): Project {
  return {
    slug: item.slug,
    index: item.index,
    client: item.name,
    year: item.year,
    role: item.role,
    url: item.url,
    stack: item.tags,
    accent: item.accent,
    featured: false,
    cover: item.cover,
    gallery: item.gallery,
    metrics: item.metrics,
    copy: {
      en: {
        title: item.title.en,
        tagline: item.tagline.en,
        summary: item.summary.en,
        challenge: item.challenge.en,
        approach: item.approach.en,
        outcome: item.outcome.en,
        highlights: item.highlights.en,
      },
      es: {
        title: item.title.es,
        tagline: item.tagline.es,
        summary: item.summary.es,
        challenge: item.challenge.es,
        approach: item.approach.es,
        outcome: item.outcome.es,
        highlights: item.highlights.es,
      },
    },
  }
}

export const otherProjects: Project[] = otherWork.map(otherWorkToProject)
export const allProjects: Project[] = [...projects, ...otherProjects]

export function getProject(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getOtherProjects(): Project[] {
  return otherProjects
}

export function getNextProject(slug: string): Project {
  const index = allProjects.findIndex((project) => project.slug === slug)
  const next = allProjects[(index + 1) % allProjects.length]
  return next ?? allProjects[0]!
}

export function metricLabel(metric: Metric, locale: Locale): string {
  return locale === 'es' ? metric.es : metric.en
}
