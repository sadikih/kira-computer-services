import { CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { aboutStats } from '../../data/content'

const pillars = [
  'Product-minded engineers, not just contractors',
  'Transparent timelines and weekly progress demos',
  'Architecture that scales with your growth',
]

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/5 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal direction="right" className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
                alt="Kira engineers reviewing architecture on a whiteboard"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            </div>
            <div className="surface absolute -bottom-8 -right-6 hidden max-w-[220px] rounded-2xl p-5 shadow-xl sm:block">
              <p className="font-display text-3xl font-semibold text-white">6+</p>
              <p className="mt-1 text-sm text-ink-300">
                years engineering software for growing businesses
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-400">
                About Kira
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                A technology partner built for how modern businesses actually grow
              </h2>
              <p className="mt-6 text-balance text-base leading-relaxed text-ink-300 sm:text-lg">
                Kira Computer Services is a technology startup building software,
                websites, digital platforms, and custom technology solutions for
                businesses that refuse to settle for generic. We combine rigorous
                engineering with genuine partnership — translating ambitious ideas
                into products that are fast, secure, and built to last.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex flex-col gap-3">
              {pillars.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-400" />
                  <span className="text-sm text-ink-300 sm:text-base">{point}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-ink-500 sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
