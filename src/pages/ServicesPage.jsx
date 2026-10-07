import { ArrowRight } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { breadcrumbLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/ui/CtaBand'
import { serviceIcons } from '../components/ui/icons'
import Process from '../components/sections/Process'
import { Link } from '../lib/router'
import { pillars, services } from '../data/content'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        path="/services"
        description="Software development, websites, cybersecurity and penetration testing, networking, cloud, data and IT consulting from KiraTech in Nairobi."
        jsonLd={{ '@context': 'https://schema.org', ...breadcrumbLd([['Home', '/'], ['Services', '/services']]) }}
      />
      <PageHeader
        eyebrow="Services"
        title="Everything between the idea and a system that runs securely."
        intro="Our services fall into three groups. Choose the one closest to your problem — or get in touch and we will point you to the right place."
        breadcrumbs={[['Home', '/'], ['Services', '/services']]}
      >
        <nav aria-label="Service groups">
          <ul className="flex flex-wrap gap-2">
            {pillars.map((p) => (
              <li key={p.key}>
                <a href={`#${p.key}`} className="btn btn-secondary">{p.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {pillars.map((p) => (
        <section key={p.key} id={p.key} className="section" aria-labelledby={`${p.key}-title`}>
          <Container>
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <h2 id={`${p.key}-title`} className="display-2 text-ink-950">{p.title}</h2>
                <p className="lede mt-4">{p.description}</p>
              </Reveal>
              <div className="grid gap-5 lg:col-span-8">
                {services.filter((s) => s.pillar === p.key).map((s, i) => {
                  const Icon = serviceIcons[s.icon]
                  return (
                    <Reveal key={s.slug} delay={i * 60}>
                      <Link href={`/services/${s.slug}`} className="card card-interactive group grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:p-9">
                        <div>
                          <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                          <h3 className="mt-6 font-display text-2xl font-semibold text-ink-950">{s.title}</h3>
                          <p className="mt-3 max-w-xl leading-relaxed text-ink-600">{s.summary}</p>
                          <ul className="mt-6 flex flex-wrap gap-2">
                            {s.includes.slice(0, 3).map((x) => (
                              <li key={x} className="rounded-full border border-ink-950/10 px-3 py-1 text-sm text-ink-600">{x}</li>
                            ))}
                          </ul>
                        </div>
                        <span className="text-link self-end">
                          Learn more <ArrowRight aria-hidden="true" />
                        </span>
                      </Link>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <Process />
      <CtaBand title="Not sure which service you need?" text="Describe the problem and we will recommend where to start — even if the answer is that you do not need us." />
    </>
  )
}
