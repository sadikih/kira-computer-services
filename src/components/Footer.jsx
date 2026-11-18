import { Link } from '../lib/router'
import Logo from './ui/Logo'
import { industries, services, siteInfo, socialLinks } from '../data/content'

const company = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

function Column({ title, children }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ink-950">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm">{children}</ul>
    </div>
  )
}

const linkClass = 'text-ink-600 transition-colors hover:text-ink-950'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="text-ink-950" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">{siteInfo.tagline} Custom software, automation, integration and infrastructure from {siteInfo.location}.</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            <Column title="Services">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>{s.title}</Link>
                </li>
              ))}
            </Column>

            <Column title="Industries">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries#${i.slug}`} className={linkClass}>{i.title}</Link>
                </li>
              ))}
            </Column>

            <Column title="Company">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener" className={linkClass}>
                    {s.label}<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </Column>

            <Column title="Contact">
              <li><a href={siteInfo.phoneHref} className={linkClass}>{siteInfo.phone}</a></li>
              <li><a href={`mailto:${siteInfo.email}`} className={`${linkClass} break-all`}>{siteInfo.email}</a></li>
              <li className="text-ink-600">{siteInfo.location}</li>
            </Column>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteInfo.legalName}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link href="/privacy" className="hover:text-ink-950">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-ink-950">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
