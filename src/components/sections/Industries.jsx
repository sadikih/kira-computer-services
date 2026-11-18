import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { industryIcons } from '../ui/icons'
import { Link } from '../../lib/router'
import { industries } from '../../data/content'

export default function Industries() {
  return (
    <section className="section relative isolate overflow-hidden" aria-labelledby="industries-title">
            <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="industries-title"
            eyebrow="Industries"
            title="Built for organisations with complex operations."
            description="We focus on sectors with demanding data, compliance and integration requirements."
          />
          <Link href="/industries" className="text-link shrink-0">Explore industries <ArrowRight aria-hidden="true" /></Link>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => {
            const Icon = industryIcons[ind.icon]
            return (
              <Reveal as="li" key={ind.slug} delay={i * 60}>
                <Link href={`/industries#${ind.slug}`} className="card card-interactive flex h-full flex-col p-6">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-6 font-semibold leading-snug tracking-[-0.01em] text-ink-950">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{ind.needs[0]}</p>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
