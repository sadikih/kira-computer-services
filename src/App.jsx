import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import WhyKira from './components/sections/WhyKira'
import TechStack from './components/sections/TechStack'
import Contact from './components/sections/Contact'
import { siteInfo } from './data/content'

function App() {
  const title = `${siteInfo.name} | Software, Web & AI Engineering`
  const description = siteInfo.description

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#08090b" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteInfo.name,
            description: siteInfo.description,
            email: siteInfo.email,
            telephone: siteInfo.phone,
            address: {
              '@type': 'PostalAddress',
              addressLocality: siteInfo.location,
            },
          })}
        </script>
      </Helmet>

      <a
        href="#main-content"
        className="focus-ring sr-only rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyKira />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
