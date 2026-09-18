import { ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { useProjects } from '../../lib/useProjects'

export default function Portfolio() {
  const { projects } = useProjects()

  return (
    <section id="work" className="relative border-t border-white/5 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Products we've helped bring to life"
          description="A glimpse at the platforms, apps, and systems we've designed and engineered for our partners."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id ?? project.slug} delay={(i % 2) * 0.1}>
              <a
                href={project.link_url || '#'}
                className="surface surface-hover focus-ring group relative block overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={`${project.title} product screenshot`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2">
                    {(project.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-navy-950/70 px-3 py-1 text-[11px] font-medium text-ink-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 flex items-center gap-2 font-display text-xl font-semibold text-white sm:text-2xl">
                    {project.title}
                    <ArrowUpRight className="h-5 w-5 text-electric-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-300">
                    {project.summary}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
