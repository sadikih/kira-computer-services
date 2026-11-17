import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { techStack } from '../../data/content'

const all = techStack.flatMap((g) => g.items)
const rows = [all.slice(0, Math.ceil(all.length / 2)), all.slice(Math.ceil(all.length / 2))]

function Pill({ children }) {
  return (
    <span className="shrink-0 rounded-full bg-white px-6 py-3.5 font-display text-lg font-medium tracking-[-0.01em] text-ink-950 shadow-[0_8px_24px_-14px_rgb(0_40_120/0.35)] ring-1 ring-black/[0.04]">
      {children}
    </span>
  )
}

/** Technology as an endless two-row ticker. Each row is duplicated so the loop is seamless. */
export default function TechStack() {
  return (
    <section id="technology" className="section overflow-hidden bg-muted" aria-labelledby="tech-title">
      <Container>
        <SectionHeading
          id="tech-title"
          align="center"
          eyebrow="Technology"
          title="Proven tools, chosen for the job."
          description="We pick technology for reliability and long-term support, not novelty, so your system stays maintainable long after launch."
        />
      </Container>
      <div className="mt-16 flex flex-col gap-4">
        {rows.map((row, r) => (
          <div key={r} className={`marquee ${r ? 'marquee-reverse' : ''}`}>
            <ul className="marquee-track" aria-label={r ? undefined : 'Technologies we use'}>
              {row.map((t) => <li key={t}><Pill>{t}</Pill></li>)}
              {[...row, ...row, ...row].map((t, i) => <li key={`${t}-${i}`} aria-hidden="true"><Pill>{t}</Pill></li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
