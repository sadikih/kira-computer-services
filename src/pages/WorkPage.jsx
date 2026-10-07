import { ArrowRight, FolderOpen } from 'lucide-react'
import Seo from '../components/ui/Seo'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import ProjectCard from '../components/ui/ProjectCard'
import CtaBand from '../components/ui/CtaBand'
import { Link } from '../lib/router'
import { useProjects } from '../lib/useProjects'

export default function WorkPage() {
  const { projects, loading } = useProjects()

  return (
    <>
      <Seo title="Work" path="/work" description="Selected projects and case studies from KiraTech, Nairobi." />
      <PageHeader
        eyebrow="Work"
        title="Selected projects."
        intro="Each case study covers the challenge, our approach, the technology used and the result."
        breadcrumbs={[['Home', '/'], ['Work', '/work']]}
      />
      <section className="section pt-16" aria-label="Projects" aria-busy={loading}>
        <Container>
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2" aria-hidden="true">
              {[0, 1].map((i) => (
                <div key={i} className="card h-96 animate-pulse" />
              ))}
            </div>
          ) : projects.length ? (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((p, i) => <ProjectCard key={p.slug} project={p} delay={(i % 2) * 80} />)}
            </div>
          ) : (
            <div className="card flex flex-col items-start gap-5 p-10 sm:p-14">
              <FolderOpen className="h-8 w-8 text-accent" aria-hidden="true" />
              <h2 className="font-display text-2xl font-semibold text-ink-950">Case studies are on their way.</h2>
              <p className="max-w-xl leading-relaxed text-ink-600">
                We are preparing write-ups of recent projects with our clients’ permission. In the
                meantime, we are happy to talk you through relevant examples of our work.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Ask about our work <ArrowRight className="arrow" aria-hidden="true" />
              </Link>
            </div>
          )}
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
