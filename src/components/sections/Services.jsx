import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { serviceIcons } from '../ui/icons'
import { Link } from '../../lib/router'
import { services } from '../../data/content'

/** The six supporting services. */
export default function Services() {
  return (
    <section id="services" className="section bg-muted" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Supporting services"
          title="Everything your systems need to run well."
          description="Automation, integration, infrastructure and security that extend the systems we build, or strengthen the ones you already have."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(1).map((s, i) => {
            const Icon = serviceIcons[s.icon]
            return (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 60}>
                <Link href={`/services/${s.slug}`} className="card card-interactive flex h-full flex-col p-7">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-ink-950">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">{s.short}</p>
                  <span className="text-link mt-5 text-sm">
                    Learn more<span className="sr-only"> about {s.title}</span> <ArrowRight aria-hidden="true" />
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
