import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { breadcrumbLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/ui/CtaBand'
import { industryIcons } from '../components/ui/icons'
import { Link } from '../lib/router'
import { industries, services } from '../data/content'

const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))

export default function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industries: Healthcare, Regulators, NGOs, Retail & Enterprise"
        path="/industries"
        description="Business systems for healthcare and pharmaceutical organisations, regulatory and professional institutions, NGOs, retail and distribution businesses and enterprises in Kenya."
        jsonLd={{ '@context': 'https://schema.org', ...breadcrumbLd([['Home', '/'], ['Industries', '/industries']]) }}
      />
      <PageHeader
        eyebrow="Industries"
        title="Industries we serve"
        intro="We focus on organisations with complex operations, sensitive data and demanding reporting obligations, where well-engineered systems make the biggest difference."
        breadcrumbs={[['Home', '/'], ['Industries', '/industries']]}
      >
        <nav aria-label="Jump to an industry">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <a href={`#${ind.slug}`} className="text-ink-600 underline-offset-4 hover:text-ink-950 hover:underline">{ind.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <section className="section" aria-label="Industries we serve">
        <Container>
          <div className="space-y-4">
            {industries.map((ind) => {
              const Icon = industryIcons[ind.icon]
              return (
                <Reveal key={ind.slug} id={ind.slug} className="card grid scroll-mt-24 gap-10 p-8 sm:p-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    <h2 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-ink-950 sm:text-3xl">{ind.title}</h2>
                    <p className="mt-4 leading-relaxed text-ink-600">{ind.summary}</p>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
                    <div>
                      <h3 className="text-sm font-semibold text-ink-950">Typical systems</h3>
                      <ul className="mt-4 space-y-3">
                        {ind.needs.map((n) => (
                          <li key={n} className="flex gap-3 text-[0.9375rem] text-ink-800">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink-950">Relevant services</h3>
                      <ul className="mt-4 space-y-2">
                        {ind.services.map((slug) => (
                          <li key={slug}>
                            <Link href={`/services/${slug}`} className="text-link text-[0.9375rem]">
                              {serviceBySlug[slug].title} <ArrowRight aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <CtaBand title="Working in a sector not listed here?" text="The engineering principles are the same. Tell us how your organisation operates and we will tell you honestly whether we can help." />
    </>
  )
}
