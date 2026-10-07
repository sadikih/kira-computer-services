import { CodeXml, Network, ShieldCheck } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { pillars } from '../../data/content'

const icons = { build: CodeXml, secure: ShieldCheck, connect: Network }

export default function Positioning() {
  return (
    <section className="section" aria-labelledby="positioning-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">What we do</p>
            <h2 id="positioning-title" className="display-2 mt-5 text-ink-950">
              From the code to the network it runs on.
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <p className="lede">
              Most organisations work with one supplier for their website, another for
              their systems, and nobody in particular for security or the office network.
              KiraTech covers all three, so the pieces are designed to work — and stay
              secure — together.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = icons[p.key]
            return (
              <Reveal key={p.key} delay={i * 80} className="card p-8 sm:p-10">
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-8 font-display text-2xl font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{p.description}</p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
