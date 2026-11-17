import { CodeXml, Network, ShieldCheck } from 'lucide-react'
import { LiquidGlassLogo } from '../liquid-glass-logo'
import { pillars } from '../../data/content'

const icons = { build: CodeXml, secure: ShieldCheck, connect: Network }

/**
 * Scroll story: a pinned stage where the two glass links drift together and
 * snap into the KiraTech mark while the three pillars play as captions.
 * Scroll-driven CSS only; without support (or with reduced motion) it shows
 * the assembled mark with the pillars listed underneath.
 */
export default function Story() {
  return (
    <section className="story" aria-labelledby="story-title">
      <h2 id="story-title" className="sr-only">What we do</h2>
      <div className="story-stage">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="story-ring" aria-hidden="true" />
        <div className="story-logo">
          <LiquidGlassLogo
            logo="/logo.svg"
            parts={['/logo-a.svg', '/logo-b.svg']}
            theme="light"
            depth={2.9}
            label="KiraTech logo"
            style={{ height: 'min(420px, 58vw)' }}
          />
        </div>
        <ul className="story-captions">
          {pillars.map((p) => {
            const Icon = icons[p.key]
            return (
              <li key={p.key} className="story-caption">
                <Icon className="mx-auto h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-display text-[clamp(2rem,1.4rem+2.6vw,3.5rem)] font-semibold tracking-[-0.03em] text-ink-950">{p.title}.</h3>
                <p className="mx-auto mt-2 max-w-md text-[1.0625rem] leading-relaxed text-ink-500">{p.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
