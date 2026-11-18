import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { techStack } from '../../data/content'

export default function TechStack() {
  return (
    <section id="technology" className="section bg-muted" aria-labelledby="tech-title">
      <Container>
        <SectionHeading
          id="tech-title"
          eyebrow="Technology"
          title="Proven, well-supported tools."
          description="Chosen for reliability and long-term maintainability, so your systems are never tied to a fad or a single vendor."
        />
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((g, i) => (
            <Reveal key={g.group} delay={i * 60} className="border-t border-ink-950/15 pt-6">
              <dt className="font-semibold text-ink-950">{g.group}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{g.items.join(', ')}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}
