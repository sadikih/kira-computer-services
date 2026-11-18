import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Logo from './ui/Logo'
import { serviceIcons } from './ui/icons'
import { Link, useRouter } from '../lib/router'
import { navLinks, services, siteInfo } from '../data/content'

const [core, ...supporting] = services
const links = navLinks.slice(1, -1) // Services has its own menu; Contact is the CTA.

export default function Navbar() {
  const { path } = useRouter()
  // Menus remember the path they were opened on, so navigating closes them.
  const [menuPath, setMenuPathState] = useState(null)
  const [servicesPath, setServicesPath] = useState(null)
  const menuOpen = menuPath === path
  const servicesOpen = servicesPath === path
  const setMenuOpen = (v) => setMenuPathState((cur) => ((typeof v === 'function' ? v(cur === path) : v) ? path : null))
  const setServicesOpen = (v) => setServicesPath((cur) => ((typeof v === 'function' ? v(cur === path) : v) ? path : null))
  const servicesRef = useRef(null)
  const toggleRef = useRef(null)

  const isActive = (href) => path === href || path.startsWith(`${href}/`)

  // Desktop services menu: close on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return
    const onDown = (e) => !servicesRef.current?.contains(e.target) && setServicesPath(null)
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setServicesPath(null)
      servicesRef.current?.querySelector('button')?.focus()
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [servicesOpen])

  // Mobile menu: lock scroll, make the page behind inert, close on Escape,
  // and close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!menuOpen) return
    const behind = [document.getElementById('main-content'), document.querySelector('body > #root footer')]
    document.body.style.overflow = 'hidden'
    behind.forEach((el) => el?.setAttribute('inert', ''))
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setMenuPathState(null)
      toggleRef.current?.focus()
    }
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => mq.matches && setMenuPathState(null)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = ''
      behind.forEach((el) => el?.removeAttribute('inert'))
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [menuOpen])

  const navLink = 'flex h-16 items-center gap-1 px-3 text-sm transition-colors hover:text-ink-950'
  const CoreIcon = serviceIcons[core.icon]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/85 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo className="text-ink-950" />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-x-6">
            <li ref={servicesRef}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((v) => !v)}
                className={`${navLink} ${isActive('/services') || servicesOpen ? 'text-ink-950' : 'text-ink-600'}`}
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              <div
                id="services-menu"
                hidden={!servicesOpen}
                className="page-in absolute inset-x-0 top-16 border-b border-line bg-white shadow-[0_30px_50px_-30px_rgb(15_23_42/0.25)]"
              >
                <div className="mx-auto grid max-w-7xl grid-cols-[1fr_1.6fr] gap-10 px-8 py-10">
                  <Link
                    href={`/services/${core.slug}`}
                    className="card card-interactive flex flex-col bg-muted p-7"
                  >
                                        <CoreIcon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <p className="mt-5 text-sm text-ink-500">Core practice</p>
                    <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-ink-950">{core.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{core.short}</p>
                    <span className="text-link mt-auto pt-6 text-sm">Explore <ArrowRight aria-hidden="true" /></span>
                  </Link>
                  <div>
                    <p className="text-sm text-ink-500">Supporting services</p>
                    <ul className="mt-4 grid grid-cols-2 gap-1">
                      {supporting.map((s) => {
                        const Icon = serviceIcons[s.icon]
                        return (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`} className="flex gap-3 rounded-lg p-3 transition-colors hover:bg-muted">
                              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                              <span>
                                <span className="block text-sm font-medium text-ink-950">{s.title}</span>
                                <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-500">{s.short}</span>
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                    <Link href="/services" className="text-link mt-5 ml-3 text-sm">All services <ArrowRight aria-hidden="true" /></Link>
                  </div>
                </div>
              </div>
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`${navLink} ${isActive(link.href) ? 'text-ink-950' : 'text-ink-600'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            aria-current={isActive('/contact') ? 'page' : undefined}
            className={`hidden px-3 text-sm transition-colors hover:text-ink-950 lg:block ${isActive('/contact') ? 'text-ink-950' : 'text-ink-600'}`}
          >
            Contact
          </Link>
          <Link href="/contact" className="btn btn-primary hidden !min-h-9 !px-3.5 !text-sm sm:inline-flex">
            Discuss Your Project
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink-800 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="page-in h-[calc(100dvh-4rem)] overflow-y-auto bg-white lg:hidden">
          <div className="flex min-h-full flex-col px-6 pt-4 pb-10">
            <nav aria-label="Mobile">
              <ul className="flex flex-col divide-y divide-line">
                <li>
                  <details className="group" open={isActive('/services')}>
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-xl font-semibold tracking-[-0.02em] text-ink-950 [&::-webkit-details-marker]:hidden">
                      Services
                      <ChevronDown className="h-5 w-5 text-ink-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="pb-4">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            aria-current={path === `/services/${s.slug}` ? 'page' : undefined}
                            className="block py-2 text-[0.9375rem] text-ink-600 hover:text-ink-950 aria-[current=page]:text-accent"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/services" className="text-link py-2 text-[0.9375rem]">
                          All services <ArrowRight aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                {navLinks.slice(1).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      className="block py-4 text-xl font-semibold tracking-[-0.02em] text-ink-950 aria-[current=page]:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-10">
              <Link href="/contact" className="btn btn-primary btn-lg w-full">Discuss Your Project</Link>
              <a href={siteInfo.phoneHref} className="btn btn-secondary btn-lg mt-3 w-full">Call {siteInfo.phone}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
