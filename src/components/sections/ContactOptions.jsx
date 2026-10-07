import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { siteInfo } from '../../data/content'

/** The three direct ways to reach KiraTech. Used on the homepage and contact page. */
export default function ContactOptions({ compact = false }) {
  const items = [
    { icon: Phone, label: 'Call', value: siteInfo.phone, href: siteInfo.phoneHref, action: 'Call now' },
    { icon: Mail, label: 'Email', value: siteInfo.email, href: `mailto:${siteInfo.email}`, action: 'Send an email' },
    { icon: MapPin, label: 'Location', value: siteInfo.location },
  ]
  return (
    <ul className={`grid gap-4 ${compact ? '' : 'md:grid-cols-3'}`}>
      {items.map(({ icon: Icon, label, value, href, action }, i) => {
        const body = (
          <>
            <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
            <span className="mt-6 block text-sm text-ink-500">{label}</span>
            <span className="mt-1 block break-words font-display text-lg font-semibold text-ink-950">{value}</span>
            {action && (
              <span className="text-link mt-4 text-sm">
                {action} <ArrowRight aria-hidden="true" />
              </span>
            )}
          </>
        )
        return (
          <Reveal as="li" key={label} delay={i * 60}>
            {href ? (
              <a href={href} className="card card-interactive group block h-full p-7">{body}</a>
            ) : (
              <div className="card block h-full p-7">{body}</div>
            )}
          </Reveal>
        )
      })}
    </ul>
  )
}
