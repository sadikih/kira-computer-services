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
          eyebrow="Process"
          title="What working with us looks like."
          description="The same four stages whether it is a website, a security assessment or a new office network."
        />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="relative border-t border-ink-950/15 pt-8">
              <span className="absolute -top-px left-0 h-px w-12 bg-accent" aria-hidden="true" />
              <p className="text-sm font-medium text-ink-500">Step {i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
