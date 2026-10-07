import LegalPage from './LegalPage'
import { siteInfo } from '../data/content'

// Plain description of what this website actually does with personal data.
// Have it reviewed against the Kenya Data Protection Act, 2019 before relying on it.
export default function PrivacyPage() {
  const email = <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="7 October 2026"
      description="How KiraTech collects, uses and protects personal information submitted through this website."
    >
      <p>
        This policy explains what personal information {siteInfo.name} (“we”, “us”) collects
        through this website, why, and the choices you have. We aim to collect as little as
        possible.
      </p>

      <h2>Information we collect</h2>
      <p>We only collect information you choose to give us:</p>
      <ul>
        <li>
          <strong>Contact form:</strong> your name, email address, and optionally your phone
          number, company and the content of your message.
        </li>
        <li>
          <strong>Email and phone:</strong> whatever you include when you contact us directly.
        </li>
      </ul>
      <p>
        This website does not use advertising trackers, and it does not set cookies to profile
        visitors.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and discuss the work you have asked about.</li>
        <li>To keep a record of our correspondence with you.</li>
      </ul>
      <p>We do not sell your information or use it for unrelated marketing.</p>

      <h2>Where it is stored</h2>
      <p>
        Messages sent through the contact form are stored securely by our hosting and database
        providers, who process it on our behalf. Messages sent by email are held in our email
        system. Access is limited to the people who need it to respond to you.
      </p>

      <h2>Third-party services</h2>
      <p>
        To display text in our chosen typefaces, pages load fonts from Google Fonts, which
        means your browser connects to Google’s servers and shares your IP address with them.
        See{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">
          Google’s privacy policy
        </a>{' '}
        for details.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiries for as long as needed to respond and for a reasonable period
        afterwards in case you get back in touch. You can ask us to delete them at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the Kenya Data Protection Act, 2019 you have the right to be informed about how
        your data is used, to access it, to have it corrected or deleted, and to object to its
        processing. To exercise any of these rights, email {email}.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to {email} or by phone on{' '}
        <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>. {siteInfo.name}, {siteInfo.location}.
      </p>
    </LegalPage>
  )
}
