import { projects, services } from './data/content.js'
import { hasWork } from './lib/useProjects.js'

// Every URL that is prerendered to static HTML. `sitemap: false` keeps a page
// out of sitemap.xml.
export const staticRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/services', priority: '0.9' },
  ...services.map((s) => ({ path: `/services/${s.slug}`, priority: '0.8' })),
  { path: '/about', priority: '0.7' },
  { path: '/contact', priority: '0.8' },
  { path: '/work', priority: '0.6', sitemap: hasWork },
  ...projects.map((p) => ({ path: `/work/${p.slug}`, priority: '0.6' })),
  { path: '/privacy', priority: '0.2' },
  { path: '/terms', priority: '0.2' },
]
