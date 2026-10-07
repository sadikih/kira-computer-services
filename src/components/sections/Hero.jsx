import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import { LogoMark } from '../ui/Logo'
import { Link } from '../../lib/router'
import { pillars, services, siteInfo } from '../../data/content'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28" aria-labelledby="hero-title">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-48 right-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full bg-electric-600/20 blur-[120px]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow rise">Technology company · {siteInfo.location}</p>
            <h1 id="hero-title" className="display-1 rise mt-6 text-ink-950" style={{ '--delay': '60ms' }}>
              Build it. Secure it.
              <br />
              <span className="text-accent">Keep it connected.</span>
            </h1>
            <p className="lede rise mt-7 max-w-xl" style={{ '--delay': '120ms' }}>
              KiraTech develops software and websites, tests and hardens systems through
              authorised ethical hacking, and sets up the networks and cloud infrastructure
              they run on — for organisations across Kenya.
            </p>
            <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ '--delay': '180ms' }}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a project <ArrowRight className="arrow" aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                Explore services
              </Link>
            </div>
            <p className="rise mt-8 text-sm text-ink-500" style={{ '--delay': '240ms' }}>
              Prefer to talk? Call{' '}
              <a href={siteInfo.phoneHref} className="font-medium text-ink-800 underline decoration-ink-950/25 underline-offset-4 hover:decoration-accent">
                {siteInfo.phone}
              </a>{' '}
              or email{' '}
              <a href={`mailto:${siteInfo.email}`} className="font-medium text-ink-800 underline decoration-ink-950/25 underline-offset-4 hover:decoration-accent">
                {siteInfo.email}
              </a>
            </p>
          </div>

          <div className="rise lg:col-span-5" style={{ '--delay': '200ms' }}>
            <SystemDiagram />
          </div>
        </div>
      </Container>
    </section>
  )
}

/** A schematic of what KiraTech covers: one stack, three layers. */
function SystemDiagram() {
  const byPillar = (key) => services.filter((s) => s.pillar === key)
  return (
    <figure className="card relative mx-auto max-w-md overflow-hidden p-5 shadow-2xl shadow-ink-950/10 sm:p-6 lg:max-w-none">
      <figcaption className="flex items-center justify-between border-b border-ink-950/10 pb-4">
        <span className="flex items-center gap-2 text-xs font-medium text-ink-500">
          <LogoMark className="h-3.5 w-auto text-accent" />
          One partner, the whole stack
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-ink-950/15" />
          <span className="h-2 w-2 rounded-full bg-ink-950/15" />
          <span className="h-2 w-2 rounded-full bg-accent/70" />
        </span>
      </figcaption>

      <div className="relative mt-5">
        {/* connector line + travelling signal */}
        <div className="absolute left-[0.6875rem] top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-ink-950/15 to-accent/60" aria-hidden="true">
          <span className="signal absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_12px_2px] shadow-accent/60" />
        </div>

        <ol className="flex flex-col gap-3">
          {pillars.map((p, i) => (
            <li key={p.key} className="relative pl-9">
              <span
                className="absolute left-0 top-4 flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full border border-accent/50 bg-surface text-[0.625rem] font-semibold text-accent"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="rounded-xl bg-white/70 p-4 ring-1 ring-ink-950/[0.06]">
                <p className="font-display text-base font-semibold text-ink-950">{p.title}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {byPillar(p.key).map((s) => (
                    <li key={s.slug} className="rounded-md bg-canvas px-2 py-1 text-xs text-ink-600">
                      {s.title.replace(/ &.*$/, '')}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  )
}
