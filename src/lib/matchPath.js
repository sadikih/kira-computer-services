/** Matches `/services/:slug` style patterns. Returns params or null. */
export function matchPath(pattern, path) {
  const p = pattern.split('/')
  const s = path.replace(/\/+$/, '').split('/')
  if (path === '/' && pattern === '/') return {}
  if (p.length !== s.length) return null
  const params = {}
  for (let i = 0; i < p.length; i++) {
    if (p[i].startsWith(':')) params[p[i].slice(1)] = decodeURIComponent(s[i])
    else if (p[i] !== s[i]) return null
  }
  return params
}
