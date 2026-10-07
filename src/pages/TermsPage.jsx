import LegalPage from './LegalPage'
import { siteInfo } from '../data/content'

// Website terms of use only — client engagements are governed by their own
// written agreements. Have this reviewed by a lawyer before relying on it.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      updated="7 October 2026"
      description="Terms that apply to your use of the KiraTech website."
    >
      <p>
        These terms apply to your use of this website, operated by {siteInfo.name} in{' '}
        {siteInfo.location}. By using the site you agree to them.
      </p>

      <h2>Information on this site</h2>
      <p>
        The content of this website is general information about our services. It is not
        professional advice for your specific situation, and it does not form an offer or a
        contract. We try to keep it accurate and up to date but cannot guarantee that it always
        is.
      </p>

      <h2>Our services</h2>
      <p>
        Any work we carry out for you is governed by a separate written proposal or agreement,
        which sets out the scope, timeline, fees and responsibilities of both parties. Where
        those documents differ from anything on this website, they take precedence.
      </p>
      <p>
        Security testing is only ever carried out with the written authorisation of the system
        owner and within an agreed scope.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the site for anything unlawful, or to send spam or malicious content;</li>
        <li>attempt to gain unauthorised access to the site or the systems behind it;</li>
        <li>interfere with the site’s normal operation.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The {siteInfo.name} name, logo and the content of this site belong to {siteInfo.name}
        unless stated otherwise. You may not copy or reuse them without our permission, other
        than for personal reference.
      </p>

      <h2>Links to other websites</h2>
      <p>We are not responsible for the content or practices of websites we link to.</p>

      <h2>Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any loss arising from your use
        of this website or reliance on its content.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of Kenya.</p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms from time to time; the date above shows the latest version.
        Questions can be sent to <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.
      </p>
    </LegalPage>
  )
}
