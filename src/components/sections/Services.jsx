import Reveal from '../ui/Reveal'
import { serviceIcons } from '../ui/icons'
import { Link } from '../../lib/router'
import { services } from '../../data/content'

/** apple.com's two-up tile grid, one tile per service. */
export default function Services() {
  return (
    <section id="services" className="p-3" aria-label="Services">
      <ul className="grid gap-3 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon]
          const dark = i % 4 === 1 || i % 4 === 2
          const lastOdd = i === services.length - 1 && services.length % 2 === 1
          return (
            <li key={s.slug} className={lastOdd ? 'md:col-span-2' : ''}>
              <Reveal className={`tile h-full min-h-[31rem] ${dark ? 'tile-dark' : 'bg-muted text-ink-950'}`}>
                <h2 className="tile-headline">{s.title}</h2>
                <p className="tile-subhead max-w-md">{s.short}</p>
                <div className="tile-ctas">
                  <Link href={`/services/${s.slug}`} className="btn btn-primary">
                    Learn more<span className="sr-only"> about {s.title}</span>
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">Enquire</Link>
                </div>
                <div className="flex flex-1 items-center py-12" aria-hidden="true">
                  <Icon className={`h-28 w-28 sm:h-36 sm:w-36 ${dark ? 'text-[#2997ff]' : 'text-[#0071e3]'}`} strokeWidth={0.75} />
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
