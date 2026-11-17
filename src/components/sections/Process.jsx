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
          align="center"
          eyebrow="Process"
          title="What working with us looks like."
          description="The same four stages whether it is a website, a security assessment or a new office network."
        />
        <div className="relative mt-20">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-ink-950/10" aria-hidden="true" />
          <div className="process-line" aria-hidden="true" />
          <ol className="grid gap-12 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 100}>
                <span className="text-gradient block font-display text-5xl font-semibold tracking-[-0.04em]" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-ink-950">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-500">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
