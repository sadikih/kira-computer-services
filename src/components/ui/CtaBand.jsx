import { ArrowRight, Phone } from 'lucide-react'
import { Link } from '../../lib/router'
import { siteInfo } from '../../data/content'
import Container from './Container'
import Reveal from './Reveal'

export default function CtaBand({
  title = 'Tell us what you are working on.',
  text = 'Describe the problem in a few sentences. We will reply with questions, options and an honest view of whether we are the right fit.',
  href = '/contact',
}) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <Container>
        <Reveal className="card relative isolate overflow-hidden !rounded-3xl px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-electric-600/15 blur-3xl" aria-hidden="true" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="cta-title" className="display-2 text-ink-950">{title}</h2>
              <p className="lede mt-5">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link href={href} className="btn btn-primary btn-lg">
                Start a conversation <ArrowRight className="arrow" aria-hidden="true" />
              </Link>
              <a href={siteInfo.phoneHref} className="btn btn-secondary btn-lg">
                <Phone aria-hidden="true" /> Call {siteInfo.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
