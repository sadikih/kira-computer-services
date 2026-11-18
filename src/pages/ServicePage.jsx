import { ArrowRight, Check, Info } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { breadcrumbLd, organizationLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/ui/CtaBand'
import { industryIcons, serviceIcons } from '../components/ui/icons'
import { Link } from '../lib/router'
import { industries, services, siteInfo } from '../data/content'
import NotFound from './NotFound'

export default function ServicePage({ slug }) {
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  const path = `/services/${service.slug}`
  // Supporting services always point back to the core practice first.
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const sectors = industries.filter((i) => i.services.includes(service.slug))

  return (
    <>
      <Seo
        title={service.seoTitle}
        path={path}
        description={service.seoDescription}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: service.title,
              description: service.summary,
              serviceType: service.title,
              provider: { '@type': organizationLd['@type'], '@id': organizationLd['@id'], name: siteInfo.name },
              areaServed: organizationLd.areaServed,
              url: siteInfo.url + path,
            },
            breadcrumbLd([['Home', '/'], ['Services', '/services'], [service.title, path]]),
          ],
        }}
      />
      <PageHeader
        eyebrow={service.core ? 'Our core practice' : 'Services'}
        title={service.title}
        intro={service.summary}
        breadcrumbs={[['Home', '/'], ['Services', '/services'], [service.title, path]]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={`/contact?subject=${service.slug}`} className="btn btn-primary btn-lg">
            Discuss Your Project <ArrowRight className="arrow" aria-hidden="true" />
          </Link>
          <a href={siteInfo.phoneHref} className="btn btn-secondary btn-lg">Call {siteInfo.phone}</a>
        </div>
      </PageHeader>

      <section className="section" aria-label="Overview">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal className="card p-8 sm:p-10">
              <h2 className="text-sm font-medium text-ink-500">The problem</h2>
              <p className="mt-5 text-xl leading-snug tracking-[-0.015em] text-ink-950 sm:text-2xl">{service.problem}</p>
            </Reveal>
            <Reveal delay={80} className="card bg-muted p-8 sm:p-10">
              <h2 className="text-sm font-medium text-accent">The outcome</h2>
              <p className="mt-5 text-xl leading-snug tracking-[-0.015em] text-ink-950 sm:text-2xl">{service.outcome}</p>
            </Reveal>
          </div>

          {service.modules && (
            <Reveal className="mt-4 card p-8 sm:p-10">
              <h2 className="text-sm font-medium text-ink-500">Systems we build</h2>
              <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {service.modules.map((m) => (
                  <li key={m} className="rounded-lg bg-muted px-4 py-3 text-center text-sm font-medium text-ink-800">{m}</li>
                ))}
              </ul>
            </Reveal>
          )}

          <div className="mt-20 grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h2 className="display-2">What is included</h2>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4 text-ink-800">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
              <h2 className="display-2">A good fit if…</h2>
              <ul className="mt-8 space-y-3">
                {service.suitedFor.map((item) => (
                  <li key={item} className="card p-5 leading-relaxed text-ink-600">{item}</li>
                ))}
              </ul>
              {service.note && (
                <p className="mt-6 flex gap-3 rounded-xl border border-line bg-muted p-5 text-sm leading-relaxed text-ink-600">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {service.note}
                </p>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      {sectors.length > 0 && (
        <section className="section bg-muted" aria-labelledby="sectors-title">
          <Container>
            <h2 id="sectors-title" className="display-2">Where this matters most</h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {sectors.map((ind) => {
                const Icon = industryIcons[ind.icon]
                return (
                  <li key={ind.slug}>
                    <Link href={`/industries#${ind.slug}`} className="card card-interactive flex h-full flex-col p-7">
                      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      <h3 className="mt-6 font-semibold text-ink-950">{ind.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{ind.summary}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Container>
        </section>
      )}

      <section className="section" aria-labelledby="related-title">
        <Container>
          <h2 id="related-title" className="display-2">Related services</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((s) => {
              const Icon = serviceIcons[s.icon]
              return (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="card card-interactive flex h-full flex-col p-7">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-6 font-semibold text-ink-950">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{s.short}</p>
                    <span className="text-link mt-6 text-sm">Learn more <ArrowRight aria-hidden="true" /></span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      <CtaBand title={`Talk to us about ${service.title}.`} href={`/contact?subject=${service.slug}`} />
    </>
  )
}
