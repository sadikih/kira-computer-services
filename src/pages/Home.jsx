import Seo from '../components/ui/Seo'
import { organizationLd } from '../lib/structuredData'
import CtaBand from '../components/ui/CtaBand'
import Hero from '../components/sections/Hero'
import CoreService from '../components/sections/CoreService'
import Services from '../components/sections/Services'
import Industries from '../components/sections/Industries'
import Capabilities from '../components/sections/Capabilities'
import Process from '../components/sections/Process'
import TechStack from '../components/sections/TechStack'
import Portfolio from '../components/sections/Portfolio'
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
      <CoreService />
      <Services />
      <Industries />
      <Capabilities />
      <Portfolio />
      <Process />
      <TechStack />
      <CtaBand />
    </>
  )
}
