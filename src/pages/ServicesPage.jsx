import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { breadcrumbLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/ui/CtaBand'
import { serviceIcons } from '../components/ui/icons'
import Process from '../components/sections/Process'
import { Link } from '../lib/router'
import { services } from '../data/content'

const [core, ...supporting] = services

export default function ServicesPage() {
  const CoreIcon = serviceIcons[core.icon]
  return (
    <>
      <Seo
        title="Services: Business Systems, AI Automation, Integration & Cloud"
        path="/services"
        description="Business systems engineering, AI and workflow automation, API and systems integration, cloud and DevOps, cybersecurity, web applications and networking from KiraTech in Nairobi."
        jsonLd={{ '@context': 'https://schema.org', ...breadcrumbLd([['Home', '/'], ['Services', '/services']]) }}
      />
      <PageHeader
        eyebrow="Services"
        title="Our services"
        intro="Business systems engineering is our core practice. Our other services make those systems smarter, better connected, secure and reliably run."
        breadcrumbs={[['Home', '/'], ['Services', '/services']]}
      >
        <nav aria-label="Jump to a service">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className="text-ink-600 underline-offset-4 hover:text-ink-950 hover:underline">{s.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {/* Core practice */}
      <section id={core.slug} className="section" aria-labelledby={`${core.slug}-title`}>
        <Container>
          <Reveal className="card grid gap-12 overflow-hidden p-8 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <CoreIcon className="h-6 w-6 text-accent" aria-hidden="true" />
              <p className="eyebrow mt-6">Our core practice</p>
              <h2 id={`${core.slug}-title`} className="display-2 mt-2">{core.title}</h2>
              <p className="lede mt-5">{core.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/services/${core.slug}`} className="btn btn-primary btn-lg">
                  Explore the practice <ArrowRight className="arrow" aria-hidden="true" />
                </Link>
                <Link href={`/contact?subject=${core.slug}`} className="btn btn-secondary btn-lg">Scope a system</Link>
              </div>
            </div>
            <ul className="space-y-3 border-line lg:col-span-5 lg:border-l lg:pl-12">
              {core.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] text-ink-800">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Supporting services */}
      <section className="pb-24" aria-label="Supporting capabilities">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {supporting.map((s) => {
              const Icon = serviceIcons[s.icon]
              return (
                <Reveal key={s.slug} id={s.slug} className="grid scroll-mt-24 gap-8 py-12 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h2 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-ink-950 sm:text-3xl">{s.title}</h2>
                    <Link href={`/services/${s.slug}`} className="text-link mt-4 text-sm">
                      Learn more<span className="sr-only"> about {s.title}</span> <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-lg leading-relaxed text-ink-600">{s.summary}</p>
                    <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {s.includes.map((x) => (
                        <li key={x} className="flex gap-2.5 text-[0.9375rem] text-ink-800">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <Process />
      <CtaBand title="Not sure where to start?" text="Describe the problem and we will recommend an approach — even if the answer is a smaller project than you expected." />
    </>
  )
}
