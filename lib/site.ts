export const site = {
  name: 'Andrés Finol',
  shortName: 'Andrés',
  role: 'Senior Frontend & Growth Engineer',
  email: 'andres159k@gmail.com',
  location: 'Maracaibo, Venezuela',
  url: 'https://andresfinol.com',
  availabilityKey: 'availability',
  socials: {
    linkedin: 'https://www.linkedin.com/in/andresfma/',
    github: 'https://github.com/andres159k',
    contra: 'https://contra.com/andresfma',
    email: 'mailto:andres159k@gmail.com',
  },
  proof: {
    rating: '5.00',
    earned: '$50k+',
  },
} as const

export type SiteConfig = typeof site
