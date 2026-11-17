import { ChevronRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { serviceIcons } from '../ui/icons'
import { Link } from '../../lib/router'
import { pillars, services } from '../../data/content'

const pillarTitle = Object.fromEntries(pillars.map((p) => [p.key, p.title]))
// Bento rhythm on a 6-column grid: wide/narrow, narrow/wide, half/half, full.
const spans = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-4', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-6']

/** Services as an Apple-style bento grid; each tile is tagged with its pillar. */
export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          id="services-title"
          align="center"
          eyebrow="What we do"
          title="Seven services. One accountable team."
          description="Something built, something secured, or everything kept connected."
        />
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon]
            const wide = /col-span-(4|6)/.test(spans[i] ?? '')
            const last = i === services.length - 1 && services.length % 2 === 1
            return (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 70} className={`${spans[i] ?? 'lg:col-span-3'} ${last ? 'sm:col-span-2' : ''}`}>
                <Link href={`/services/${s.slug}`} className="card card-interactive bento group flex h-full min-h-[300px] flex-col p-8 sm:p-10">
                  <span className="icon-glass">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="mt-8 text-sm font-semibold text-accent">{pillarTitle[s.pillar]}</p>
                  <h3 className={`mt-1.5 font-display font-semibold tracking-[-0.02em] text-ink-950 ${wide ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[1.75rem]'}`}>{s.title}</h3>
                  <p className={`mt-3 flex-1 leading-relaxed text-ink-500 ${wide ? 'max-w-lg text-lg' : ''}`}>{s.short}</p>
                  <span className="text-link mt-6 font-medium">
                    Learn more<span className="sr-only"> about {s.title}</span>
                    <ChevronRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
