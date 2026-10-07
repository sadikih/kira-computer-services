import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { serviceIcons } from '../ui/icons'
import { Link } from '../../lib/router'
import { services } from '../../data/content'

/** Homepage services index: an editorial list rather than a grid of identical cards. */
export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <p className="eyebrow">Services</p>
              <h2 id="services-title" className="display-2 mt-5 text-ink-950">How we can help.</h2>
              <p className="lede mt-5">
                Pick the one closest to your problem. Each page explains what is included and
                who it suits.
              </p>
              <Link href="/services" className="btn btn-secondary mt-8">
                Compare all services <ArrowRight className="arrow" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <ul className="border-t border-ink-950/10 lg:col-span-8">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon]
              return (
                <Reveal as="li" key={s.slug} delay={(i % 4) * 50} className="border-b border-ink-950/10">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-1 py-7 transition-colors sm:gap-x-8 sm:py-8"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-950/10 text-accent transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-display text-xl font-semibold text-ink-950 sm:text-2xl">{s.title}</span>
                      <span className="mt-2 block max-w-xl leading-relaxed text-ink-600">{s.summary}</span>
                    </span>
                    <ArrowUpRight
                      className="mt-2 h-5 w-5 text-ink-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
