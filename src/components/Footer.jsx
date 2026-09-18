import { Mail, MapPin, Phone } from 'lucide-react'
import Container from './ui/Container'
import { socialIcons } from './ui/SocialIcons'
import { navLinks, services, siteInfo, socialLinks } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 pt-20">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric-500/60 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="flex items-center gap-2.5 focus-ring rounded-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 font-display text-lg font-bold text-white">
                K
              </span>
              <span className="font-display text-lg font-semibold text-white">
                {siteInfo.shortName}<span className="text-electric-400">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              {siteInfo.description}
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.icon] ?? Mail
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-white/20 hover:text-electric-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Navigate
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring text-sm text-ink-500 transition-colors hover:text-electric-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <a
                    href="#services"
                    className="focus-ring text-sm text-ink-500 transition-colors hover:text-electric-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-ink-500">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                <a href={`mailto:${siteInfo.email}`} className="focus-ring hover:text-electric-400">
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                <a href={`tel:${siteInfo.phone}`} className="focus-ring hover:text-electric-400">
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                <span>{siteInfo.addressLine}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-ink-500 sm:flex-row">
          <p>© {year} {siteInfo.name}. All rights reserved.</p>
          <p>Designed &amp; engineered by the Kira team.</p>
        </div>
      </Container>
    </footer>
  )
}
