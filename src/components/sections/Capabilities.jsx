import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { capabilities } from '../../data/content'

export default function Capabilities() {
  return (
    <section className="section bg-muted" aria-labelledby="capabilities-title">
      <Container>
        <SectionHeading
          id="capabilities-title"
          eyebrow="How we build"
          title="Systems designed to last, not just to launch."
        />
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 60} className="border-t border-ink-950/15 pt-6">
              <h3 className="font-semibold text-ink-950">{c.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{c.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
