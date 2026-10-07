import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useRouter } from './lib/router'
import { matchPath } from './lib/matchPath'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServicePage from './pages/ServicePage'
import WorkPage from './pages/WorkPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import NotFound from './pages/NotFound'

const routes = [
  ['/', Home],
  ['/about', AboutPage],
  ['/services', ServicesPage],
  ['/services/:slug', ServicePage],
  ['/work', WorkPage],
  ['/work/:slug', ProjectPage],
  ['/contact', ContactPage],
  ['/privacy', PrivacyPage],
  ['/terms', TermsPage],
]

function resolve(path) {
  for (const [pattern, Page] of routes) {
    const params = matchPath(pattern, path)
    if (params) return { Page, params }
  }
  return { Page: NotFound, params: {} }
}

export default function App() {
  const { path } = useRouter()
  const { Page, params } = resolve(path)

  return (
    <>
      <a
        href="#main-content"
        className="sr-only rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} key={path} className="page-in">
        <Page {...params} />
      </main>
      <Footer />
    </>
  )
}
