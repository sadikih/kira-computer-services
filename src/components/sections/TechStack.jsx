import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { techStack } from '../../data/content'

export default function TechStack() {
  return (
    <section id="technology" className="section" aria-labelledby="tech-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Technology</p>
            <h2 id="tech-title" className="display-2 mt-5 text-ink-950">Proven tools, chosen for the job.</h2>
            <p className="lede mt-5">
              We pick technology for reliability and long-term support, not novelty — so your
              system is maintainable long after launch.
            </p>
          </Reveal>
          <dl className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {techStack.map((g, i) => (
              <Reveal key={g.group} delay={i * 60} className="card p-7">
                <dt className="text-sm font-medium text-ink-500">{g.group}</dt>
                <dd className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span key={t} className="rounded-full bg-white/80 px-3.5 py-1.5 text-sm text-ink-800 ring-1 ring-ink-950/[0.06]">
                      {t}
                    </span>
                  ))}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
