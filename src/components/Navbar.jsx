import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import Container from './ui/Container'
import Logo from './ui/Logo'
import { serviceIcons } from './ui/icons'
import { Link, useRouter } from '../lib/router'
import { hasWork } from '../lib/useProjects'
import { navLinks, services, siteInfo } from '../data/content'

const links = hasWork
  ? [navLinks[0], navLinks[1], { label: 'Work', href: '/work' }, ...navLinks.slice(2)]
  : navLinks

export default function Navbar() {
  const { path } = useRouter()
  const [scrolled, setScrolled] = useState(false)
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'glass border-ink-950/[0.06] shadow-[0_8px_24px_-16px_rgb(11_18_32/0.25)]' : 'border-transparent'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <li ref={servicesRef} className="relative">
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors hover:text-ink-950 ${
                    isActive('/services') ? 'text-ink-950' : 'text-ink-600'
                  }`}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <div
                  id="services-menu"
                  hidden={!servicesOpen}
                  className="absolute left-1/2 top-full mt-3 w-[42rem] -translate-x-1/2 card p-3"
                >
                  <ul className="grid grid-cols-2 gap-1">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.icon]
                      return (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="flex gap-3.5 rounded-xl p-3.5 transition-colors hover:bg-white/80"
                          >
                            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                            <span>
                              <span className="block text-sm font-semibold text-ink-950">{s.title}</span>
                              <span className="mt-1 block text-[0.8125rem] leading-snug text-ink-500">{s.short}</span>
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                    <li>
                      <Link
                        href="/services"
                        className="flex h-full items-center justify-between gap-3 rounded-xl border border-ink-950/10 p-3.5 text-sm font-semibold text-ink-950 transition-colors hover:border-ink-950/25"
                      >
                        All services overview
                        <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {links.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors hover:text-ink-950 ${
                      isActive(link.href) ? 'text-ink-950' : 'text-ink-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={siteInfo.phoneHref} className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950">
              {siteInfo.phone}
            </a>
            <Link href="/contact" className="btn btn-primary">
              Start a project <ArrowRight className="arrow" aria-hidden="true" />
            </Link>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-950 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="page-in h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-950/[0.06] bg-canvas/80 lg:hidden"
        >
          <Container className="flex min-h-full flex-col py-6">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-ink-950/10 border-b border-ink-950/10">
                <li>
                  <details className="group" open={isActive('/services')}>
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between font-display text-2xl font-medium text-ink-950 [&::-webkit-details-marker]:hidden">
                      Services
                      <ChevronDown className="h-5 w-5 text-ink-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="pb-4">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            aria-current={path === `/services/${s.slug}` ? 'page' : undefined}
                            className="block py-2.5 text-base text-ink-600 hover:text-ink-950 aria-[current=page]:text-accent"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/services" className="text-link mt-2 py-2.5 text-base">
                          All services <ArrowRight aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                {links.slice(1).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      className="flex min-h-14 items-center font-display text-2xl font-medium text-ink-950 aria-[current=page]:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-10">
              <Link href="/contact" className="btn btn-primary btn-lg w-full">
                Start a project <ArrowRight className="arrow" aria-hidden="true" />
              </Link>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a href={siteInfo.phoneHref} className="btn btn-secondary">
                  <Phone aria-hidden="true" /> Call
                </a>
                <a href={`mailto:${siteInfo.email}`} className="btn btn-secondary">
                  <Mail aria-hidden="true" /> Email
                </a>
              </div>
              <p className="mt-6 text-center text-sm text-ink-500">{siteInfo.location}</p>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
