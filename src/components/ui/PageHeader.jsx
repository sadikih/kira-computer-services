import { ChevronRight } from 'lucide-react'
import { Link } from '../../lib/router'
import Container from './Container'

/** Standard top section for inner pages: breadcrumb, eyebrow, H1, intro. */
export default function PageHeader({ eyebrow, title, intro, breadcrumbs = [], children }) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <Container>
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="rise mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-500">
              {breadcrumbs.map(([label, href], i) => (
                <li key={href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-ink-600">{label}</span>
                  ) : (
                    <Link href={href} className="hover:text-ink-950">{label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow rise">{eyebrow}</p>}
          <h1 className="display-1 rise mt-5 text-ink-950" style={{ '--delay': '60ms' }}>{title}</h1>
          {intro && <p className="lede rise mt-6 max-w-2xl" style={{ '--delay': '120ms' }}>{intro}</p>}
          {children && <div className="rise mt-10" style={{ '--delay': '180ms' }}>{children}</div>}
        </div>
      </Container>
    </section>
  )
}
