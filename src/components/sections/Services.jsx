import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { serviceIcons } from '../ui/icons'
import { Link } from '../../lib/router'
import { pillars, services } from '../../data/content'

/** Services grouped under the three pillars: pillar intro on the left, its services on the right. */
export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title="Seven services, one accountable team."
          description="Grouped by what you need: something built, something secured, or everything kept connected."
        />
        <div className="mt-14 flex flex-col">
          {pillars.map((p) => (
            <div key={p.key} className="grid gap-8 border-t border-ink-950/10 py-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <h3 className="font-display text-3xl font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-ink-600">{p.description}</p>
              </Reveal>
              <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {services
                  .filter((s) => s.pillar === p.key)
                  .map((s, i, list) => {
                    const Icon = serviceIcons[s.icon]
                    // A leftover card in an odd-sized group fills the row instead of leaving a gap.
                    const span = i === list.length - 1 && list.length % 2 === 1 ? 'sm:col-span-2' : ''
                    return (
                      <Reveal as="li" key={s.slug} delay={i * 60} className={span}>
                        <Link href={`/services/${s.slug}`} className="card card-interactive group flex h-full flex-col p-7">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <h4 className="mt-6 font-display text-xl font-semibold text-ink-950">{s.title}</h4>
                          <p className="mt-2 flex-1 leading-relaxed text-ink-600">{s.short}</p>
                          <span className="text-link mt-5 text-sm font-medium">
                            Learn more<span className="sr-only"> about {s.title}</span>
                            <ArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                          </span>
                        </Link>
                      </Reveal>
                    )
                  })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
