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
        <Reveal className="tile-aurora overflow-hidden rounded-[36px] px-6 py-16 text-center sm:px-12 sm:py-24 lg:px-16">
          <div className="flex flex-col items-center gap-10">
            <div className="max-w-2xl">
              <h2 id="cta-title" className="display-2 text-gradient-cta">{title}</h2>
              <p className="lede mx-auto mt-5 !text-ink-500">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
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
