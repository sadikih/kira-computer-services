import { ArrowRight, Check } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { Link } from '../../lib/router'
import { services } from '../../data/content'

const core = services[0]

/** The flagship practice, given a full section of its own. */
export default function CoreService() {
  return (
    <section className="section border-t border-line" aria-labelledby="core-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Our core practice</p>
            <h2 id="core-title" className="display-2 mt-3">{core.title}</h2>
            <p className="lede mt-5">{core.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/services/${core.slug}`} className="btn btn-primary">
                Learn more <ArrowRight className="arrow" aria-hidden="true" />
              </Link>
              <Link href={`/contact?subject=${core.slug}`} className="btn btn-secondary">Scope a system</Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-line border-y border-line">
              {core.includes.map((item) => (
                <li key={item} className="flex gap-3 py-4 text-ink-800">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
