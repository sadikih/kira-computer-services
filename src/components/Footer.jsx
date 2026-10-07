import { Mail, MapPin, Phone } from 'lucide-react'
import Container from './ui/Container'
import Logo from './ui/Logo'
import { socialIcons } from './ui/SocialIcons'
import { Link } from '../lib/router'
import { hasWork } from '../lib/useProjects'
import { services, siteInfo, socialLinks } from '../data/content'

const company = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  ...(hasWork ? [{ label: 'Work', href: '/work' }] : []),
  { label: 'Contact', href: '/contact' },
]

function Column({ title, children }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ink-950">{title}</h2>
      <ul className="mt-4 flex flex-col gap-1.5 text-sm">{children}</ul>
    </div>
  )
}

const linkClass = 'inline-block py-1 text-ink-500 transition-colors hover:text-ink-950'

export default function Footer() {
  return (
    <footer className="glass border-t border-white/80">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:py-20 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-500">{siteInfo.description}</p>
            {socialLinks.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {socialLinks.map((s) => {
                  const Icon = socialIcons[s.icon]
                  return (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${s.label} (opens in a new tab)`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/10 text-ink-600 transition-colors hover:border-ink-950/25 hover:text-ink-950"
                      >
                        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          <div className="lg:col-span-2">
            <Column title="Company">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </Column>
          </div>

          <div className="lg:col-span-3">
            <Column title="Services">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>{s.title}</Link>
                </li>
              ))}
            </Column>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <Column title="Contact">
              <li>
                <a href={siteInfo.phoneHref} className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteInfo.email}`} className={`${linkClass} inline-flex items-center gap-2.5 break-all`}>
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {siteInfo.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-ink-500">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                {siteInfo.location}
              </li>
            </Column>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink-950/10 py-8 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteInfo.legalName}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
            <li><Link href="/terms" className={linkClass}>Terms of Service</Link></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
