import { CodeXml, Network, ShieldCheck } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { Link } from '../../lib/router'
import { pillars, services } from '../../data/content'

const icons = { build: CodeXml, secure: ShieldCheck, connect: Network }
// apple.com alternates light and dark full-width tiles.
const tones = { build: 'bg-muted text-ink-950', secure: 'tile-dark', connect: 'bg-white text-ink-950' }

export default function Positioning() {
  return (
    <div className="flex flex-col gap-3 pt-3">
      {pillars.map((p) => {
        const Icon = icons[p.key]
        const first = services.find((s) => s.pillar === p.key)
        return (
          <section key={p.key} className={`tile min-h-[36rem] ${tones[p.key]}`} aria-labelledby={`pillar-${p.key}`}>
            <Reveal className="flex flex-col items-center">
              <h2 id={`pillar-${p.key}`} className="display-1">{p.title}</h2>
              <p className="lede mt-2 max-w-2xl !text-current">{p.description}</p>
              <div className="tile-ctas">
                <Link href={`/services/${first.slug}`} className="btn btn-primary">
                  Learn more<span className="sr-only"> about {first.title}</span>
                </Link>
                <Link href="/contact" className="btn btn-secondary">Get in touch</Link>
              </div>
            </Reveal>
            <div className="flex flex-1 items-center py-14" aria-hidden="true">
              <Icon className={`h-36 w-36 sm:h-48 sm:w-48 ${p.key === 'secure' ? 'text-[#2997ff]' : 'text-[#0071e3]'}`} strokeWidth={0.75} />
            </div>
          </section>
        )
      })}
    </div>
  )
}
