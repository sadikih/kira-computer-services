import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { Link } from '../../lib/router'
import { useProjects } from '../../lib/useProjects'

/** Homepage work preview. Renders nothing until real projects exist. */
export default function Portfolio() {
  const { projects } = useProjects()
  if (!projects.length) return null

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="work-title" eyebrow="Work" title="Recent projects." />
          <Link href="/work" className="text-link shrink-0">
            All projects <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={(i % 2) * 80} />
          ))}
        </div>
      </Container>
    </section>
  )
}
