import Seo from '../components/ui/Seo'
import { organizationLd } from '../lib/structuredData'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import CtaBand from '../components/ui/CtaBand'
import Hero from '../components/sections/Hero'
import Positioning from '../components/sections/Positioning'
import Services from '../components/sections/Services'
import WhyKira from '../components/sections/WhyKira'
import Process from '../components/sections/Process'
import TechStack from '../components/sections/TechStack'
import Portfolio from '../components/sections/Portfolio'
import AboutTeaser from '../components/sections/AboutTeaser'
import ContactOptions from '../components/sections/ContactOptions'
import { siteInfo } from '../data/content'

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            organizationLd,
            { '@type': 'WebSite', '@id': `${siteInfo.url}/#website`, url: siteInfo.url, name: siteInfo.name, publisher: { '@id': organizationLd['@id'] } },
          ],
        }}
      />
      <Hero />
      <Positioning />
      <Services />
      <WhyKira />
      <Process />
      <TechStack />
      <Portfolio />
      <AboutTeaser />
      <CtaBand />
      <section className="pb-24 sm:pb-32" aria-labelledby="contact-title">
        <Container>
          <SectionHeading id="contact-title" eyebrow="Contact" title="Reach us directly." />
          <div className="mt-12">
            <ContactOptions />
          </div>
        </Container>
      </section>
    </>
  )
}
