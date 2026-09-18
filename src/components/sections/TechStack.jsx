import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { techStack } from '../../data/content'

export default function TechStack() {
  const loop = [...techStack, ...techStack]

  return (
    <section id="stack" className="relative border-t border-white/5 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our toolkit"
          title="Modern, battle-tested technology"
          description="We choose tools for reliability and longevity — not hype. Here's what regularly powers what we build."
        />
      </Container>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent sm:w-40" />

        <div className="animate-marquee flex w-max gap-4 [animation-play-state:running] hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="surface flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
