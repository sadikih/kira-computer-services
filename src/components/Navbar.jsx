import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronRight, Mail, Menu, Phone, X } from 'lucide-react'
import Logo from './ui/Logo'
import { Link, useRouter } from '../lib/router'
import { hasWork } from '../lib/useProjects'
import { navLinks, services, siteInfo } from '../data/content'

const links = hasWork
  ? [navLinks[0], navLinks[1], { label: 'Work', href: '/work' }, ...navLinks.slice(2)]
  : navLinks

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

  const navLink = 'flex h-11 items-center px-2 text-xs tracking-[-0.01em] transition-colors hover:text-ink-950'

  return (
    <header className="glass fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-11 max-w-[1024px] items-center justify-between px-4 lg:px-[22px]">
        <Logo />

        <nav aria-label="Primary" className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-evenly px-8">
            <li ref={servicesRef}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((v) => !v)}
                className={`${navLink} ${isActive('/services') || servicesOpen ? 'text-ink-950' : 'text-ink-950/80'}`}
              >
                Services
              </button>
              <div
                id="services-menu"
                hidden={!servicesOpen}
                className="page-in absolute inset-x-0 top-11 bg-white border-b border-black/5 shadow-[0_24px_40px_-24px_rgb(0_0_0/0.25)]"
              >
                <div className="mx-auto grid max-w-[1024px] grid-cols-[1.4fr_1fr] gap-12 px-[22px] pt-10 pb-20">
                  <div>
                    <p className="text-xs text-ink-500">Explore Services</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="text-2xl font-semibold tracking-[0.009em] text-ink-950 transition-colors hover:text-accent"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">More from KiraTech</p>
                    <ul className="mt-4 flex flex-col gap-2.5 text-xs font-semibold text-ink-950">
                      <li><Link href="/services" className="hover:text-accent">Compare all services</Link></li>
                      <li><Link href="/about" className="hover:text-accent">About us</Link></li>
                      <li><Link href="/contact" className="hover:text-accent">Start a project</Link></li>
                      <li><a href={siteInfo.phoneHref} className="hover:text-accent">Call {siteInfo.phone}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {links.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`${navLink} ${isActive(link.href) ? 'text-ink-950' : 'text-ink-950/80'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={siteInfo.phoneHref}
            aria-label={`Call ${siteInfo.phone}`}
            className="flex h-11 w-9 items-center justify-center text-ink-950/80 transition-colors hover:text-ink-950"
          >
            <Phone className="h-[15px] w-[15px]" strokeWidth={1.6} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${siteInfo.email}`}
            aria-label={`Email ${siteInfo.email}`}
            className="flex h-11 w-9 items-center justify-center text-ink-950/80 transition-colors hover:text-ink-950"
          >
            <Mail className="h-[15px] w-[15px]" strokeWidth={1.6} aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink-950/80 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" /> : <Menu className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="page-in h-[calc(100dvh-2.75rem)] overflow-y-auto bg-white lg:hidden">
          <div className="flex min-h-full flex-col px-12 pt-6 pb-10">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                <li>
                  <details className="group" open={isActive('/services')}>
                    <summary className="flex cursor-pointer list-none items-center justify-between py-1.5 text-[1.75rem] font-semibold tracking-[0.007em] text-ink-950 [&::-webkit-details-marker]:hidden">
                      Services
                      <ChevronDown className="h-5 w-5 text-ink-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="pt-1 pb-3">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            aria-current={path === `/services/${s.slug}` ? 'page' : undefined}
                            className="block py-1.5 text-[1.0625rem] font-semibold text-ink-600 hover:text-ink-950 aria-[current=page]:text-accent"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/services" className="text-link py-1.5 text-[1.0625rem]">
                          All services <ChevronRight className="h-4 w-4" aria-hidden="true" />
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
                      className="block py-1.5 text-[1.75rem] font-semibold tracking-[0.007em] text-ink-950 aria-[current=page]:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-10">
              <Link href="/contact" className="btn btn-primary w-full">Start a project</Link>
              <p className="mt-6 text-center text-xs text-ink-500">{siteInfo.location}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
