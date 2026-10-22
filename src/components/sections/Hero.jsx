import { LogoMark } from '../ui/Logo'
import { Link } from '../../lib/router'
import { siteInfo } from '../../data/content'

/** apple.com hero tile: 692px, centred copy and CTAs, then the product image (here, the mark). */
export default function Hero() {
  return (
    <section className="hero-tile" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero-headline rise">KiraTech</h1>
      <p className="hero-subhead rise" style={{ '--delay': '60ms' }}>
        Build it. Secure it. Keep it connected.
      </p>
      <p className="hero-callout rise" style={{ '--delay': '120ms' }}>
        Software, security and networks · {siteInfo.location}
      </p>
      <div className="hero-ctas rise" style={{ '--delay': '160ms' }}>
        <Link href="/services" className="btn btn-primary">Learn more<span className="sr-only"> about our IT services</span></Link>
        <Link href="/contact" className="btn btn-secondary">Start a project</Link>
      </div>
      <div className="hero-image rise" style={{ '--delay': '200ms' }}>
        <LogoMark className="" />
      </div>
    </section>
  )
}
