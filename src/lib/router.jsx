import { createContext, useContext, useEffect, useRef, useState } from 'react'

// Minimal History-API router. The site has a handful of static routes, so a
// full routing library would be mostly dead weight.
// ponytail: no nested routes/loaders — reach for react-router if those are ever needed.

const RouterContext = createContext({ path: '/', search: '', navigate: () => {} })

function current() {
  return { path: window.location.pathname, search: window.location.search }
}

export function RouterProvider({ url = '/', children }) {
  const [location, setLocation] = useState(() => {
    if (typeof window !== 'undefined') return current()
    const u = new URL(url, 'http://x')
    return { path: u.pathname, search: u.search }
  })
  const isFirst = useRef(true)

  useEffect(() => {
    const onPop = () => setLocation(current())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // After client-side navigation: scroll to the hash target or the top, and
  // move focus to <main> so screen readers announce the new page.
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    const hash = window.location.hash.slice(1)
    const target = hash && document.getElementById(hash)
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [location.path])

  function navigate(to) {
    window.history.pushState(null, '', to)
    setLocation(current())
  }

  return (
    <RouterContext.Provider value={{ ...location, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export const useRouter = () => useContext(RouterContext)

/** Internal links use client-side navigation; everything else is a plain <a>. */
export function Link({ href, onClick, ...props }) {
  const { navigate } = useRouter()
  const internal = href?.startsWith('/') && !props.target && !props.download

  function handleClick(e) {
    onClick?.(e)
    if (
      !internal ||
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    ) return
    e.preventDefault()
    if (href !== window.location.pathname + window.location.hash) navigate(href)
  }

  return <a href={href} onClick={handleClick} {...props} />
}
