import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { LogoMark } from '../ui/Logo'
import { Link } from '../../lib/router'

export default function AboutTeaser() {
  return (
    <section className="section" aria-labelledby="about-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="relative order-last lg:order-first lg:col-span-5">
            <div className="card relative flex aspect-[4/3] items-center justify-center overflow-hidden">
              <div className="grid-bg absolute inset-0" aria-hidden="true" />
              <LogoMark className="relative h-auto w-1/2 text-accent/80" />
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">About KiraTech</p>
            <h2 id="about-title" className="display-2 mt-5 text-ink-950">A Nairobi technology company that does the hands-on work.</h2>
            <p className="lede mt-6">
              KiraTech brings software development, cybersecurity and networking together in
              one Nairobi-based company — so you deal with one accountable partner instead of
              several suppliers who each only see part of the picture.
            </p>
            <Link href="/about" className="text-link mt-8">
              More about us <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
