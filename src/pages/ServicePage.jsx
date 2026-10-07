import { ArrowRight, Check, Info } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { breadcrumbLd, organizationLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/ui/CtaBand'
import { serviceIcons } from '../components/ui/icons'
import { Link } from '../lib/router'
import { services, siteInfo } from '../data/content'
import NotFound from './NotFound'

export default function ServicePage({ slug }) {
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  const path = `/services/${service.slug}`
  const related = services.filter((s) => s.pillar === service.pillar && s.slug !== service.slug).concat(
    services.filter((s) => s.pillar !== service.pillar),
  ).slice(0, 3)

  return (
    <>
      <Seo
        title={service.title}
        path={path}
        description={`${service.summary} KiraTech, Nairobi.`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: service.title,
              description: service.summary,
              serviceType: service.title,
              provider: { '@type': organizationLd['@type'], '@id': organizationLd['@id'], name: siteInfo.name },
              areaServed: { '@type': 'Country', name: 'Kenya' },
              url: siteInfo.url + path,
            },
            breadcrumbLd([['Home', '/'], ['Services', '/services'], [service.title, path]]),
          ],
        }}
      />
      <PageHeader
        eyebrow="Service"
        title={service.title}
        intro={service.summary}
        breadcrumbs={[['Home', '/'], ['Services', '/services'], [service.title, path]]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={`/contact?subject=${service.slug}`} className="btn btn-primary btn-lg">
            Discuss your project <ArrowRight className="arrow" aria-hidden="true" />
          </Link>
          <a href={siteInfo.phoneHref} className="btn btn-secondary btn-lg">Call {siteInfo.phone}</a>
        </div>
      </PageHeader>

      <section className="section" aria-label="Overview">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="card p-8 sm:p-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">The problem</h2>
              <p className="mt-5 font-display text-xl leading-snug text-ink-950 sm:text-2xl">{service.problem}</p>
            </Reveal>
            <Reveal delay={80} className="card bg-gradient-to-br from-electric-600/10 to-transparent p-8 sm:p-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">What you get</h2>
              <p className="mt-5 font-display text-xl leading-snug text-ink-950 sm:text-2xl">{service.outcome}</p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h2 className="display-2 text-ink-950">What is included</h2>
              <ul className="mt-8 divide-y divide-ink-950/10 border-y border-ink-950/10">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4 text-lg text-ink-800">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
              <h2 className="display-2 text-ink-950">A good fit if…</h2>
              <ul className="mt-8 space-y-4">
                {service.suitedFor.map((item) => (
                  <li key={item} className="card p-5 leading-relaxed text-ink-600">{item}</li>
                ))}
              </ul>
              {service.note && (
                <p className="mt-6 flex gap-3 rounded-xl border border-ink-950/10 p-5 text-sm leading-relaxed text-ink-600">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {service.note}
                </p>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section" aria-labelledby="related-title">
        <Container>
          <h2 id="related-title" className="display-2 text-ink-950">Related services</h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((s, i) => {
              const Icon = serviceIcons[s.icon]
              return (
                <Reveal as="li" key={s.slug} delay={i * 60}>
                  <Link href={`/services/${s.slug}`} className="card card-interactive group flex h-full flex-col p-7">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    <h3 className="mt-6 font-display text-xl font-semibold text-ink-950">{s.title}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-ink-600">{s.short}</p>
                    <span className="text-link mt-6 text-sm">Learn more <ArrowRight aria-hidden="true" /></span>
                  </Link>
                </Reveal>
              )
            })}
          </ul>
        </Container>
      </section>

      <CtaBand title={`Talk to us about ${service.title.toLowerCase()}.`} href={`/contact?subject=${service.slug}`} />
    </>
  )
}
