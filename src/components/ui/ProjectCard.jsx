import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { Link } from '../../lib/router'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/work/${project.slug}`} className="card card-interactive group block h-full overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          {project.image_url && (
            <img
              src={project.image_url}
              alt=""
              width="1600"
              height="1000"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="p-7">
          {project.tags?.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="rounded-full border border-ink-950/10 px-3 py-1 text-xs text-ink-600">{t}</li>
              ))}
            </ul>
          )}
          <h3 className="mt-5 flex items-center gap-2 font-display text-xl font-semibold text-ink-950 sm:text-2xl">
            {project.title}
            <ArrowUpRight className="h-5 w-5 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </h3>
          <p className="mt-2 leading-relaxed text-ink-600">{project.summary}</p>
        </div>
      </Link>
    </Reveal>
  )
}
