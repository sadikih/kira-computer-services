import { ShieldCheck, Gauge, Users, Rocket, Map, LifeBuoy } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { whyKira } from '../../data/content'

const icons = {
  'shield-check': ShieldCheck,
  gauge: Gauge,
  users: Users,
  rocket: Rocket,
  map: Map,
  'life-buoy': LifeBuoy,
}

export default function WhyKira() {
  return (
    <section id="why-kira" className="relative border-t border-white/5 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Kira"
          title="Built differently from a typical dev shop"
          description="We operate like a product team that happens to work with you — not a vendor executing a spec."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyKira.map((item, i) => {
            const Icon = icons[item.icon] ?? ShieldCheck
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="surface surface-hover group h-full rounded-2xl p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 ring-1 ring-electric-400/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
