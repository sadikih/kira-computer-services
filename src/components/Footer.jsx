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
      <h2 className="text-xs font-semibold text-ink-950">{title}</h2>
      <ul className="mt-2.5 flex flex-col gap-2 text-xs">{children}</ul>
    </div>
  )
}

const linkClass = 'text-ink-600 hover:underline'

export default function Footer() {
  return (
    <footer className="bg-muted text-xs leading-[1.33337] tracking-[-0.01em] text-ink-500">
      <div className="mx-auto max-w-[1024px] px-4 lg:px-[22px]">
        <p className="border-b border-[rgb(11_31_51/0.1)] py-4 leading-relaxed">{siteInfo.description}</p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-5 sm:grid-cols-3 lg:grid-cols-4">
          <Column title="Services">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={linkClass}>{s.title}</Link>
              </li>
            ))}
          </Column>

          <Column title="Company">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
          </Column>

          <Column title="Contact">
            <li><a href={siteInfo.phoneHref} className={linkClass}>{siteInfo.phone}</a></li>
            <li><a href={`mailto:${siteInfo.email}`} className={`${linkClass} break-all`}>{siteInfo.email}</a></li>
            <li>{siteInfo.location}</li>
          </Column>

          {socialLinks.length > 0 && (
            <Column title="Follow">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener" className={linkClass}>
                    {s.label}<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </Column>
          )}
        </div>

        <p className="pt-2 pb-2">
          More ways to get started: <Link href="/contact" className="text-accent underline">send an enquiry</Link> or call{' '}
          <a href={siteInfo.phoneHref} className="text-accent underline">{siteInfo.phone}</a>.
        </p>

        <div className="flex flex-col gap-2 border-t border-[rgb(11_31_51/0.1)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
            <p>Copyright © {new Date().getFullYear()} {siteInfo.legalName}. All rights reserved.</p>
            <ul className="flex divide-x divide-[rgb(11_31_51/0.1)]">
              <li className="pr-2.5"><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
              <li className="px-2.5"><Link href="/terms" className={linkClass}>Terms of Use</Link></li>
              <li className="pl-2.5"><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>
          <p>{siteInfo.location}</p>
        </div>
      </div>
    </footer>
  )
}
