import Seo from '../components/ui/Seo'
import { organizationLd } from '../lib/structuredData'
import CtaBand from '../components/ui/CtaBand'
import Hero from '../components/sections/Hero'
import Story from '../components/sections/Story'
import Services from '../components/sections/Services'
import WhyKira from '../components/sections/WhyKira'
import Process from '../components/sections/Process'
import TechStack from '../components/sections/TechStack'
import Portfolio from '../components/sections/Portfolio'
import AboutTeaser from '../components/sections/AboutTeaser'
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
      <Story />
      <Services />
      <WhyKira />
      <Process />
      <TechStack />
      <Portfolio />
      <AboutTeaser />
      <CtaBand />
    </>
  )
}
