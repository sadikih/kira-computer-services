import Container from '../ui/Container'
import { Link } from '../../lib/router'
import { siteInfo } from '../../data/content'

/** "Pro"-style hero: bright stage, aurora light and a gradient headline; the glass mark follows in <Story />. */
export default function Hero() {
  return (
    <section className="hero-pro relative isolate overflow-hidden pt-24 pb-0 text-center sm:pt-28" aria-labelledby="hero-title">
      <div className="hero-aurora" aria-hidden="true" />
      <Container>
        <p className="eyebrow rise !text-accent">IT company · {siteInfo.location}</p>
        <h1 id="hero-title" className="mx-auto mt-4 max-w-4xl font-display text-[clamp(2.75rem,1.6rem+5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink-950">
          <span className="focus-in block" style={{ '--delay': '80ms' }}>Build it. Secure it.</span>
          <span className="focus-in shimmer-text block pb-[0.08em]" style={{ '--delay': '380ms' }}>Keep&nbsp;it&nbsp;connected.</span>
        </h1>
        <p className="lede rise mx-auto mt-6 max-w-2xl !text-ink-500" style={{ '--delay': '120ms' }}>
          Software development, cybersecurity and networking for organisations across Kenya, from one accountable team.
        </p>
        <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ '--delay': '180ms' }}>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Start a project
          </Link>
          <Link href="/services" className="btn btn-secondary btn-lg">
            Explore services<span className="sr-only"> from KiraTech</span>
          </Link>
        </div>

      </Container>
    </section>
  )
}
