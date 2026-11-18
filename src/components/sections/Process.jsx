import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { processSteps } from '../../data/content'

export default function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <Container>
        <SectionHeading
          id="process-title"
          eyebrow="How we work"
          title="From first conversation to a system in production."
          description="A written scope, staged delivery and progress you can review at every step."
        />
        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 60} className="border-t border-ink-950/15 pt-6">
              <p className="text-sm text-ink-500">Step {i + 1}</p>
              <h3 className="mt-1 font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
