// Renders every static route to its own HTML file so visitors, search engines
// and link previews get real content and metadata without running JavaScript.
// Also writes 404.html and sitemap.xml. Runs after `vite build` (see package.json).
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverEntry = path.join(root, 'dist-server', 'entry-server.js')

const { render, staticRoutes, siteInfo } = await import(serverEntry)
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

// React 19 emits hoisted <title>/<meta>/<link> tags first; move them into <head>.
const HEAD_TAGS = /^(?:<title>[^<]*<\/title>|<meta [^>]*\/>|<link [^>]*\/>)+/

function page(url, rootAttrs = ` data-route="${url}"`) {
  const html = render(url)
  const head = html.match(HEAD_TAGS)?.[0] ?? ''
  return template
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root"${rootAttrs}>${html.slice(head.length)}</div>`)
}

for (const { path: url } of staticRoutes) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html')
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, page(url))
}
await fs.writeFile(path.join(dist, '404.html'), page('/404', ' data-fallback'))

const today = new Date().toISOString().slice(0, 10)
const urls = staticRoutes
  .filter((r) => r.sitemap !== false)
  .map(
    (r) =>
      `  <url>\n    <loc>${siteInfo.url}${r.path === '/' ? '/' : r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`,
  )
await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)
await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteInfo.url}/sitemap.xml\n`)
await fs.rm(path.join(root, 'dist-server'), { recursive: true, force: true })

console.log(`Prerendered ${staticRoutes.length} routes + 404.html, sitemap.xml, robots.txt`)
