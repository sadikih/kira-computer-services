import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  BrainCircuit,
  Lightbulb,
  ArrowUpRight,
} from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/content'

const icons = {
  'code-2': Code2,
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
  'brain-circuit': BrainCircuit,
  lightbulb: Lightbulb,
}

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/5 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="End-to-end technology services"
          description="From first line of code to production scale — we cover the full stack of what modern businesses need to compete digitally."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Code2
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <article className="surface surface-hover group relative h-full rounded-2xl p-7">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 ring-1 ring-electric-400/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="relative mt-6 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink-300">
                    {service.description}
                  </p>

                  <ul className="relative mt-5 flex flex-col gap-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-ink-500">
                        <span className="h-1 w-1 rounded-full bg-electric-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="focus-ring relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    Discuss this service
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
