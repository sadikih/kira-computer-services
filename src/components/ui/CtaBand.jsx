import { ArrowRight } from 'lucide-react'
import { Link } from '../../lib/router'
import { siteInfo } from '../../data/content'
import Container from './Container'
import Reveal from './Reveal'

export default function CtaBand({
  title = 'Have a system that needs engineering?',
  text = 'Tell us about the problem in a few sentences. We will come back with questions, options and an honest view of whether we are the right fit.',
  href = '/contact',
}) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <Container>
        <Reveal className="flex flex-col gap-8 rounded-2xl bg-muted px-8 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cta-title" className="display-2">{title}</h2>
            <p className="lede mt-4">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Link href={href} className="btn btn-primary btn-lg">
              Discuss Your Project <ArrowRight className="arrow" aria-hidden="true" />
            </Link>
            <a href={siteInfo.phoneHref} className="btn btn-secondary btn-lg">Call {siteInfo.phone}</a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
