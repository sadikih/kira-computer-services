import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SystemMockup from '../ui/SystemMockup'
import { Link } from '../../lib/router'

export default function Hero() {
  return (
    <section className="overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" aria-labelledby="hero-title">
      <Container className="text-center">
        <h1 id="hero-title" className="rise mx-auto max-w-3xl text-[clamp(2.5rem,1.6rem+3.8vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink-950">
          Engineering intelligent business systems.
        </h1>
        <p className="lede rise mx-auto mt-6 max-w-2xl" style={{ '--delay': '80ms' }}>
          We design, engineer and integrate intelligent digital systems that help organisations
          streamline operations, automate workflows, connect technologies and make better decisions.
        </p>
        <div className="rise mt-9 flex flex-col justify-center gap-3 sm:flex-row" style={{ '--delay': '160ms' }}>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Discuss Your Project <ArrowRight className="arrow" aria-hidden="true" />
          </Link>
          <Link href="/services" className="btn btn-secondary btn-lg">Explore Our Solutions</Link>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <div className="rise mx-auto max-w-5xl" style={{ '--delay': '240ms' }}>
          <SystemMockup />
        </div>
      </Container>
    </section>
  )
}
