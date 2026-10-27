import { ArrowRight, CodeXml, Network, ShieldCheck } from 'lucide-react'
import Container from '../ui/Container'
import { LogoMark } from '../ui/Logo'
import { Link } from '../../lib/router'
import { pillars, siteInfo } from '../../data/content'

const icons = { build: CodeXml, secure: ShieldCheck, connect: Network }

/** Split hero: what we do on the left, the mark and the three pillars on a navy panel on the right. */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-muted to-white pt-28 pb-16 sm:pt-36 sm:pb-24" aria-labelledby="hero-title">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow rise !text-accent">IT company · {siteInfo.location}</p>
            <h1 id="hero-title" className="display-1 rise mt-4 text-ink-950" style={{ '--delay': '60ms' }}>
              Build it. Secure it. Keep&nbsp;it&nbsp;connected.
            </h1>
            <p className="lede rise mt-6 max-w-xl !text-ink-600" style={{ '--delay': '120ms' }}>
              Software development, cybersecurity and networking for organisations across Kenya, from
              one accountable team.
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ '--delay': '180ms' }}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a project <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                Explore services<span className="sr-only"> from KiraTech</span>
              </Link>
            </div>
          </div>

          <div className="rise lg:col-span-5" style={{ '--delay': '220ms' }}>
            <div className="tile-dark relative overflow-hidden rounded-[28px] p-8 sm:p-10">
              <LogoMark className="mx-auto h-28 w-auto text-brand sm:h-36" />
              <ul className="mt-10 grid gap-3">
                {pillars.map((p) => {
                  const Icon = icons[p.key]
                  return (
                    <li key={p.key} className="flex items-start gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                      <span>
                        <span className="block font-semibold text-white">{p.title}</span>
                        <span className="mt-0.5 block text-sm leading-snug text-[#b7c8d6]">{p.description}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
