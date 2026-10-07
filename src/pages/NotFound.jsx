import { ArrowRight } from 'lucide-react'
import Seo from '../components/ui/Seo'
import Container from '../components/ui/Container'
import { Link } from '../lib/router'
import { siteInfo } from '../data/content'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" noindex />
      <section className="relative isolate overflow-hidden pt-40 pb-32 sm:pt-48">
        <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <Container>
          <p className="eyebrow">Error 404</p>
          <h1 className="display-1 mt-5 max-w-3xl text-ink-950">We couldn’t find that page.</h1>
          <p className="lede mt-6 max-w-xl">
            The link may be out of date, or the address may have been mistyped. These pages
            might help instead:
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary btn-lg">
              Go to the homepage <ArrowRight className="arrow" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn btn-secondary btn-lg">View services</Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">Contact us</Link>
          </div>
          <p className="mt-10 text-sm text-ink-500">
            Need help? Call <a href={siteInfo.phoneHref} className="text-ink-800 underline underline-offset-4">{siteInfo.phone}</a>.
          </p>
        </Container>
      </section>
    </>
  )
}
