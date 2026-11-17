import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { principles } from '../../data/content'

export default function WhyKira() {
  return (
    <section id="why-kiratech" className="section bg-muted" aria-labelledby="why-title">
      <Container>
        <SectionHeading id="why-title" align="center" eyebrow="Why KiraTech" title="How we work, and why it matters to you." />
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80} className="card p-9 sm:p-12">
              <span className="text-gradient block font-display text-6xl font-semibold tracking-[-0.04em] sm:text-7xl" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em] text-ink-950 sm:text-[1.75rem]">{p.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-500">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
