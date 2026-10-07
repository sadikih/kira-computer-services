import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { breadcrumbLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/ui/CtaBand'
import { Link } from '../lib/router'
import { useProjects } from '../lib/useProjects'
import NotFound from './NotFound'

const SECTIONS = [
  ['challenge', 'Challenge'],
  ['approach', 'Approach'],
  ['solution', 'Solution'],
  ['result', 'Result'],
]

export default function ProjectPage({ slug }) {
  const { projects, loading } = useProjects()
  const project = projects.find((p) => p.slug === slug)

  if (loading && !project) {
    return (
      <div className="pt-40 pb-32" role="status">
        <Container>
          <div className="h-12 w-2/3 animate-pulse rounded-lg bg-muted" />
          <span className="sr-only">Loading project…</span>
        </Container>
      </div>
    )
  }
  if (!project) return <NotFound />

  const path = `/work/${project.slug}`
  const technologies = project.technologies ?? []

  return (
    <>
      <Seo
        title={project.title}
        path={path}
        description={project.summary}
        jsonLd={{ '@context': 'https://schema.org', ...breadcrumbLd([['Home', '/'], ['Work', '/work'], [project.title, path]]) }}
      />
      <PageHeader
        eyebrow={project.client || 'Case study'}
        title={project.title}
        intro={project.summary}
        breadcrumbs={[['Home', '/'], ['Work', '/work'], [project.title, path]]}
      >
        {project.link_url && (
          <a href={project.link_url} target="_blank" rel="noreferrer noopener" className="btn btn-secondary">
            Visit project <ArrowUpRight aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </PageHeader>

      {project.image_url && (
        <Container>
          <img
            src={project.image_url}
            alt={project.image_alt || `${project.title} screenshot`}
            width="1600"
            height="900"
            className="aspect-video w-full rounded-2xl border border-ink-950/10 object-cover"
          />
        </Container>
      )}

      <section className="section" aria-label="Case study">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              {technologies.length > 0 && (
                <>
                  <h2 className="text-sm font-semibold text-ink-500">Technology</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((t) => (
                      <li key={t} className="rounded-full border border-ink-950/10 px-3 py-1 text-sm text-ink-800">{t}</li>
                    ))}
                  </ul>
                </>
              )}
            </aside>
            <div className="space-y-14 lg:col-span-8 lg:col-start-5">
              {SECTIONS.filter(([key]) => project[key]).map(([key, label]) => (
                <Reveal key={key}>
                  <h2 className="font-display text-2xl font-semibold text-ink-950">{label}</h2>
                  <p className="lede mt-4 whitespace-pre-line">{project[key]}</p>
                </Reveal>
              ))}
              <Link href="/work" className="text-link">
                <ArrowLeft aria-hidden="true" /> All projects
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
