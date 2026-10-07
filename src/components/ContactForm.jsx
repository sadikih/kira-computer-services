import { useEffect, useRef, useState } from 'react'
import { AlertCircle, ArrowRight, CircleCheck, LoaderCircle } from 'lucide-react'
import { Link, useRouter } from '../lib/router'
import { LIMITS, enquiryMailto, submitEnquiry, validateEnquiry } from '../lib/enquiry'
import { enquirySubjects, siteInfo } from '../data/content'

const empty = { name: '', email: '', phone: '', company: '', subject: '', message: '', website: '' }
const ORDER = ['name', 'email', 'phone', 'company', 'subject', 'message']

export default function ContactForm() {
  const { search } = useRouter()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent | emailed | error
  const [announcement, setAnnouncement] = useState('')
  const formRef = useRef(null)
  const resultRef = useRef(null)

  // Preselect the subject when arriving from a service page (?subject=<slug>).
  // An effect (not initial state) so the prerendered HTML hydrates cleanly.
  useEffect(() => {
    const subject = new URLSearchParams(search).get('subject')
    if (subject && enquirySubjects.some((s) => s.value === subject)) {
      // oxlint-disable-next-line react/set-state-in-effect
      setValues((v) => ({ ...v, subject }))
    }
  }, [search])

  useEffect(() => {
    if (status === 'sent' || status === 'emailed' || status === 'error') resultRef.current?.focus()
  }, [status])

  function update(e) {
    const { name, value } = e.target
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors(validateEnquiry(next))
  }

  function blur(e) {
    const { name } = e.target
    if (!values[name] && !touched[name] && name !== 'subject') return // don't nag on tab-through
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validateEnquiry(values))
  }

  async function submit(e) {
    e.preventDefault()
    if (status === 'submitting') return

    const found = validateEnquiry(values)
    setErrors(found)
    setTouched(Object.fromEntries(ORDER.map((k) => [k, true])))
    const invalid = ORDER.filter((k) => found[k])
    if (invalid.length) {
      setAnnouncement(`${invalid.length} ${invalid.length === 1 ? 'field needs' : 'fields need'} attention.`)
      formRef.current?.elements[invalid[0]]?.focus()
      return
    }

    // Honeypot filled → almost certainly a bot. Show success, send nothing.
    if (values.website) {
      setStatus('sent')
      return
    }

    setStatus('submitting')
    setAnnouncement('Sending your message…')
    const result = await submitEnquiry(values)

    if (!result.ok) {
      setStatus('error')
      setAnnouncement('')
      return
    }
    if (result.via === 'email') {
      window.location.href = mailtoHref
      setStatus('emailed')
    } else {
      setStatus('sent')
      setValues(empty)
      setTouched({})
    }
    setAnnouncement('')
  }

  const subjectLabel = enquirySubjects.find((s) => s.value === values.subject)?.label ?? 'General enquiry'
  const mailtoHref = enquiryMailto(values, subjectLabel)

  if (status === 'sent') {
    return (
      <Result ref={resultRef} icon={CircleCheck} tone="success" title="Message sent — thank you.">
        We have received your enquiry and will reply to the email address you provided. If it is
        urgent, call us on{' '}
        <a href={siteInfo.phoneHref} className="font-semibold text-ink-950 underline underline-offset-4">{siteInfo.phone}</a>.
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-secondary mt-8">
          Send another message
        </button>
      </Result>
    )
  }

  if (status === 'emailed') {
    return (
      <Result ref={resultRef} icon={CircleCheck} tone="success" title="One last step: send the email.">
        Your email app should have opened with your message ready to go — press send there to
        reach us. If nothing opened, use the button below or email{' '}
        <a href={`mailto:${siteInfo.email}`} className="font-semibold text-ink-950 underline underline-offset-4">{siteInfo.email}</a>{' '}
        directly.
        <span className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={mailtoHref} className="btn btn-primary">Open email again</a>
          <button type="button" onClick={() => setStatus('idle')} className="btn btn-secondary">Back to the form</button>
        </span>
      </Result>
    )
  }

  const submitting = status === 'submitting'
  const bind = (name) => ({ name, value: values[name], onChange: update, onBlur: blur })

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="card p-6 sm:p-10" aria-describedby="form-note">
      <p id="form-note" className="mb-8 text-sm text-ink-500">
        Fields marked <span aria-hidden="true" className="text-accent">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {status === 'error' && (
        <div ref={resultRef} tabIndex={-1} role="alert" className="mb-8 flex gap-3 rounded-xl border border-danger/40 bg-danger/10 p-4 text-sm text-ink-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-danger" aria-hidden="true" />
          <p>
            Sorry — your message could not be sent. Please try again, or contact us directly on{' '}
            <a href={siteInfo.phoneHref} className="font-semibold underline underline-offset-4">{siteInfo.phone}</a> or{' '}
            <a href={mailtoHref} className="font-semibold underline underline-offset-4">{siteInfo.email}</a>.
          </p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field bind={bind} name="name" label="Full name" required error={touched.name && errors.name}>
          <input type="text" autoComplete="name" maxLength={LIMITS.name} />
        </Field>
        <Field bind={bind} name="email" label="Email address" required error={touched.email && errors.email}>
          <input type="email" autoComplete="email" inputMode="email" maxLength={LIMITS.email} />
        </Field>
        <Field bind={bind} name="phone" label="Phone number" hint="Optional" error={touched.phone && errors.phone}>
          <input type="tel" autoComplete="tel" inputMode="tel" maxLength={LIMITS.phone} />
        </Field>
        <Field bind={bind} name="company" label="Company or organisation" hint="Optional" error={touched.company && errors.company}>
          <input type="text" autoComplete="organization" maxLength={LIMITS.company} />
        </Field>
        <Field bind={bind} name="subject" label="Subject" required error={touched.subject && errors.subject} className="sm:col-span-2">
          <select>
            <option value="" disabled>Choose a topic</option>
            {enquirySubjects.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </Field>
        <Field
          bind={bind}
          name="message"
          label="Message"
          required
          hint="What do you need, and is there a deadline?"
          error={touched.message && errors.message}
          className="sm:col-span-2"
        >
          <textarea rows={6} maxLength={LIMITS.message} className="resize-y" />
        </Field>
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
      </div>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-ink-500">
          We use your details only to reply to this enquiry. See our{' '}
          <Link href="/privacy" className="text-ink-600 underline underline-offset-4 hover:text-ink-950">privacy policy</Link>.
        </p>
        <button type="submit" disabled={submitting} aria-busy={submitting} className="btn btn-primary btn-lg sm:shrink-0">
          {submitting ? (
            <>
              <LoaderCircle className="animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send message <ArrowRight className="arrow" aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      <p role="status" aria-live="polite" className="sr-only">{announcement}</p>
    </form>
  )
}

function Field({ name, label, required, hint, error, bind, className = '', children }) {
  const hintId = hint ? `${name}-hint` : undefined
  const errorId = error ? `${name}-error` : undefined
  const Tag = children.type
  return (
    <div className={className}>
      <label htmlFor={name} className="field-label">
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-accent">*</span>}
      </label>
      {hint && <p id={hintId} className="-mt-1 mb-2 text-sm text-ink-500">{hint}</p>}
      <Tag
        {...children.props}
        {...bind(name)}
        id={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        className={`input ${children.props.className ?? ''}`}
      />
      {error && (
        <p id={errorId} className="mt-2 flex items-start gap-1.5 text-sm text-danger">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

function Result({ ref, icon: Icon, title, children }) {
  return (
    <div ref={ref} tabIndex={-1} role="status" className="card p-8 sm:p-12">
      <Icon className="h-8 w-8 text-success" aria-hidden="true" />
      <h2 className="mt-6 font-display text-2xl font-semibold text-ink-950 sm:text-3xl">{title}</h2>
      <div className="mt-4 max-w-xl leading-relaxed text-ink-600">{children}</div>
    </div>
  )
}
