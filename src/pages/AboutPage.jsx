import Seo from '../components/ui/Seo'
import { breadcrumbLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import CtaBand from '../components/ui/CtaBand'
import { LogoMark } from '../components/ui/Logo'
import { Link } from '../lib/router'
import { about, principles, services, siteInfo } from '../data/content'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us: Business Systems Engineering Company in Nairobi"
        path="/about"
        description="KiraTech is a Nairobi-based business systems engineering company building custom software, automation, integrations and secure infrastructure for organisations in Kenya and internationally."
        jsonLd={{ '@context': 'https://schema.org', ...breadcrumbLd([['Home', '/'], ['About', '/about']]) }}
      />
      <PageHeader
        eyebrow="About KiraTech"
        title="We build the systems organisations run on."
        intro={`${siteInfo.name} is a business systems engineering company based in ${siteInfo.location}, working with organisations in Kenya and internationally.`}
        breadcrumbs={[['Home', '/'], ['About', '/about']]}
      />

      <section className="section" aria-labelledby="approach-title">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-muted lg:sticky lg:top-28">
                <LogoMark className="h-auto w-2/5 text-accent" />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <p className="eyebrow">Our approach</p>
                <h2 id="approach-title" className="display-2 mt-4">Software shaped around the organisation — not the other way round.</h2>
                <div className="lede mt-6 space-y-5">
                  {about.story.length > 0 ? (
                    about.story.map((para) => <p key={para}>{para}</p>)
                  ) : (
                    <>
                      <p>
                        Most organisations run on a patchwork of spreadsheets, generic software and
                        systems that do not talk to each other. Staff work around their tools, and
                        leadership waits days for numbers they cannot fully trust.
                      </p>
                      <p>
                        We start by understanding how an organisation actually works, then engineer
                        systems that fit: custom business platforms at the core, connected through
                        APIs, enhanced with automation and AI where it is reliable, and run on
                        secure, well-operated infrastructure.
                      </p>
                    </>
                  )}
                </div>
              </Reveal>

              <dl className="mt-14 divide-y divide-line border-y border-line">
                {services.map((s) => (
                  <Reveal key={s.slug} className="py-5">
                    <dt><Link href={`/services/${s.slug}`} className="font-semibold text-ink-950 hover:text-accent">{s.title}</Link></dt>
                    <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-600">{s.short}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-muted" aria-labelledby="values-title">
        <Container>
          <SectionHeading id="values-title" eyebrow="Principles" title="How we work." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80} className="card p-8 sm:p-10">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink-950">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{p.description}</p>
              </Reveal>
            ))}
            <Reveal className="card p-8 sm:col-span-2 sm:p-10">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink-950">Ethical by default</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-600">
                Security testing is always authorised: we only test systems you own or have
                permission to test, under a written scope agreed in advance, and we treat
                everything we see as confidential.{' '}
                <Link href="/services/cybersecurity" className="text-link">Our security practice</Link>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {about.team.length > 0 && (
        <section className="section" aria-labelledby="team-title">
          <Container>
            <SectionHeading id="team-title" eyebrow="Team" title="The people you will work with." />
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {about.team.map((m) => (
                <Reveal as="li" key={m.name} className="card overflow-hidden">
                  {m.photo && <img src={m.photo} alt={m.name} width="600" height="600" loading="lazy" className="aspect-square w-full object-cover" />}
                  <div className="p-6">
                    <p className="text-lg font-semibold text-ink-950">{m.name}</p>
                    <p className="mt-1 text-sm text-ink-500">{m.role}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  )
}
