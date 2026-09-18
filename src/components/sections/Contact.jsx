import { useState } from 'react'
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { budgetRanges, projectTypes, siteInfo } from '../../data/content'
import { submitQuoteRequest } from '../../lib/submitQuoteRequest'

const initialForm = {
  name: '',
  email: '',
  company: '',
  project_type: projectTypes[0],
  budget_range: budgetRanges[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    setStatus('loading')
    setErrorMessage('')

    const result = await submitQuoteRequest(form)

    if (result.ok) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('error')
      setErrorMessage(result.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative border-t border-white/5 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something worth shipping"
          description="Tell us about your project and we'll get back to you within one business day with next steps."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="surface flex h-full flex-col justify-between rounded-3xl p-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Request a quote
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  Whether you have a detailed spec or just an idea, we'll help you scope
                  it into a plan with clear milestones and pricing.
                </p>

                <ul className="mt-8 flex flex-col gap-5">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-electric-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-500">Email</p>
                      <a href={`mailto:${siteInfo.email}`} className="focus-ring text-sm text-white hover:text-electric-400">
                        {siteInfo.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-electric-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-500">Phone</p>
                      <a href={`tel:${siteInfo.phone}`} className="focus-ring text-sm text-white hover:text-electric-400">
                        {siteInfo.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-electric-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-500">Location</p>
                      <p className="text-sm text-white">{siteInfo.location}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="surface rounded-3xl p-8"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Doe"
                    className="input"
                  />
                </Field>
                <Field label="Email address" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@company.com"
                    className="input"
                  />
                </Field>
                <Field label="Company (optional)" htmlFor="company">
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={update('company')}
                    placeholder="Company name"
                    className="input"
                  />
                </Field>
                <Field label="Project type" htmlFor="project_type">
                  <select
                    id="project_type"
                    value={form.project_type}
                    onChange={update('project_type')}
                    className="input"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-navy-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Estimated budget" htmlFor="budget_range" className="sm:col-span-2">
                  <select
                    id="budget_range"
                    value={form.budget_range}
                    onChange={update('budget_range')}
                    className="input"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-navy-900">
                        {range}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Project details" htmlFor="message" className="sm:col-span-2">
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us what you're looking to build..."
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-electric-600/25 transition-colors hover:bg-electric-600 disabled:opacity-60 sm:w-auto"
              >
                {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'loading' ? 'Sending...' : 'Request a Quote'}
              </button>

              {status === 'success' && (
                <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks — we've received your request and will be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  {errorMessage}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Field({ label, htmlFor, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
        {label}
      </label>
      {children}
    </div>
  )
}
