import Seo from '../components/ui/Seo'
import { breadcrumbLd, organizationLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import ContactForm from '../components/ContactForm'
import ContactOptions from '../components/sections/ContactOptions'
import { processSteps } from '../data/content'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact KiraTech in Nairobi. Call 0112796092, email shamisi@kiratech.co.ke or send us a message about your project."
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'ContactPage', url: `${organizationLd.url}/contact`, about: { '@id': organizationLd['@id'] } },
            organizationLd,
            breadcrumbLd([['Home', '/'], ['Contact', '/contact']]),
          ],
        }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about what you need."
        intro="Send a message using the form, or call or email us directly. Tell us as much or as little as you know — a rough idea is a perfectly good starting point."
        breadcrumbs={[['Home', '/'], ['Contact', '/contact']]}
      />

      <section className="pb-24 sm:pb-32" aria-label="Contact options">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7 lg:order-last">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactOptions compact />
              <div className="mt-10 border-t border-ink-950/10 pt-10">
                <h2 className="font-display text-xl font-semibold text-ink-950">What happens next</h2>
                <ol className="mt-6 space-y-5">
                  {processSteps.slice(0, 2).map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/50 text-xs font-semibold text-accent">{i + 1}</span>
                      <div>
                        <p className="font-semibold text-ink-950">{s.title}</p>
                        <p className="mt-1 leading-relaxed text-ink-600">{s.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
