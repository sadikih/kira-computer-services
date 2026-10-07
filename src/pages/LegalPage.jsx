import Seo from '../components/ui/Seo'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'

export default function LegalPage({ title, path, description, updated, children }) {
  return (
    <>
      <Seo title={title} path={path} description={description} />
      <PageHeader title={title} intro={`Last updated ${updated}`} breadcrumbs={[['Home', '/'], [title, path]]} />
      <section className="section pt-16">
        <Container>
          <div className="prose-kira">{children}</div>
        </Container>
      </section>
    </>
  )
}
