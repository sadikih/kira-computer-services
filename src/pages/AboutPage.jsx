import Seo from '../components/ui/Seo'
import { breadcrumbLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import CtaBand from '../components/ui/CtaBand'
import { LogoMark } from '../components/ui/Logo'
import { Link } from '../lib/router'
import { about, pillars, principles, services, siteInfo } from '../data/content'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="KiraTech is a technology company in Nairobi, Kenya, bringing software development, cybersecurity and networking together under one roof."
        jsonLd={{ '@context': 'https://schema.org', ...breadcrumbLd([['Home', '/'], ['About', '/about']]) }}
      />
      <PageHeader
        eyebrow="About KiraTech"
        title="Technology that is built well, secured properly and kept running."
        intro={`${siteInfo.name} is a technology company based in ${siteInfo.location}. We help organisations build the software they need, protect it, and connect it — with one accountable team from start to finish.`}
        breadcrumbs={[['Home', '/'], ['About', '/about']]}
      />

      <section className="section" aria-labelledby="approach-title">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="card relative flex aspect-square items-center justify-center overflow-hidden lg:sticky lg:top-28">
                <div className="grid-bg absolute inset-0" aria-hidden="true" />
                <LogoMark className="relative h-auto w-3/5 text-accent" />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <p className="eyebrow">Our approach</p>
                <h2 id="approach-title" className="display-2 mt-5 text-ink-950">Three disciplines that belong together.</h2>
                <div className="lede mt-6 space-y-5">
                  {about.story.length > 0 ? (
                    about.story.map((para) => <p key={para}>{para}</p>)
                  ) : (
                    <>
                      <p>
                        Software, security and infrastructure are usually bought from different
                        suppliers. The result is systems that work in isolation, security that is
                        checked late — if at all — and nobody who sees the whole picture.
                      </p>
                      <p>
                        KiraTech was set up to work across all three. The same team that builds
                        an application understands how it will be attacked and the network it
                        will run on, which leads to better decisions at every stage.
                      </p>
                    </>
                  )}
                </div>
              </Reveal>

              <dl className="mt-14 divide-y divide-ink-950/10 border-y border-ink-950/10">
                {pillars.map((p) => (
                  <Reveal key={p.key} className="grid gap-2 py-7 sm:grid-cols-[8rem_1fr] sm:gap-8">
                    <dt className="font-display text-xl font-semibold text-ink-950">{p.title}</dt>
                    <dd className="leading-relaxed text-ink-600">
                      {p.description}{' '}
                      <span className="text-ink-500">
                        ({services.filter((s) => s.pillar === p.key).map((s) => s.title).join(', ')})
                      </span>
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="section" aria-labelledby="values-title">
        <Container>
          <SectionHeading id="values-title" eyebrow="What you can expect" title="Principles we hold ourselves to." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80} className="card p-8 sm:p-10">
                <h3 className="font-display text-xl font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{p.description}</p>
              </Reveal>
            ))}
            <Reveal className="card p-8 sm:col-span-2 sm:p-10">
              <h3 className="font-display text-xl font-semibold text-ink-950">Ethical by default</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-600">
                Our security testing is always authorised: we only test systems you own or have
                permission to test, under a written scope agreed in advance, and we treat
                everything we find as confidential.{' '}
                <Link href="/services/cybersecurity" className="text-link">How security testing works</Link>
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
                    <p className="font-display text-lg font-semibold text-ink-950">{m.name}</p>
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
