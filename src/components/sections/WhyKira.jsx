import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { principles } from '../../data/content'

export default function WhyKira() {
  return (
    <section id="why-kiratech" className="section" aria-labelledby="why-title">
      <Container>
        <SectionHeading
          id="why-title"
          eyebrow="Why KiraTech"
          title="How we work, and why it matters to you."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80} className="card p-8 sm:p-10">
              <span className="font-display text-sm font-semibold text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink-950 sm:text-2xl">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
