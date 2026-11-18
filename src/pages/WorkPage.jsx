import { ArrowRight } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { breadcrumbLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import ProjectCard from '../components/ui/ProjectCard'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/ui/CtaBand'
import { Link } from '../lib/router'
import { useProjects } from '../lib/useProjects'
import { solutionBlueprints } from '../data/content'

export default function WorkPage() {
  const { projects, loading } = useProjects()

  return (
    <>
      <Seo
        title="Projects & Case Studies"
        path="/work"
        description="Projects and case studies from KiraTech: business systems, AI automation, integrations and cloud infrastructure, plus the types of systems we engineer."
        jsonLd={{ '@context': 'https://schema.org', ...breadcrumbLd([['Home', '/'], ['Projects', '/work']]) }}
      />
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        intro="Each case study covers the challenge, our approach, the technology used and the measured result — published only with our clients' permission."
        breadcrumbs={[['Home', '/'], ['Projects', '/work']]}
      />
      <section className="section" aria-label="Projects" aria-busy={loading}>
        <Container>
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2" aria-hidden="true">
              {[0, 1].map((i) => <div key={i} className="card h-96 animate-pulse" />)}
            </div>
          ) : projects.length > 0 && (
            <div className="mb-24 grid gap-6 md:grid-cols-2">
              {projects.map((p, i) => <ProjectCard key={p.slug} project={p} delay={(i % 2) * 80} />)}
            </div>
          )}

          <div className="max-w-3xl">
            <p className="eyebrow">Example systems</p>
            <h2 className="display-2 mt-4">The kinds of systems we engineer.</h2>
            <p className="lede mt-5">
              {projects.length
                ? 'Beyond the case studies above, these are representative systems we are equipped to design and build.'
                : 'Detailed case studies are being prepared with client permission. In the meantime, these are representative systems we design and build — illustrations of scope, not past client work.'}
            </p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {solutionBlueprints.map((b, i) => (
              <Reveal as="li" key={b.title} delay={(i % 2) * 80} className="card flex flex-col p-8">
                <p className="text-sm text-ink-500">{b.industry}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-ink-950">{b.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-600">{b.description}</p>
                <p className="mt-5 text-sm text-ink-500">Modules: {b.modules.join(', ')}</p>
              </Reveal>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary btn-lg mt-12">
            Ask about relevant work <ArrowRight className="arrow" aria-hidden="true" />
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
