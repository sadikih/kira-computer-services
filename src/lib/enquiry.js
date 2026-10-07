import { getSupabase, isSupabaseConfigured } from './supabaseClient.js'
import { siteInfo } from '../data/content.js'

export const LIMITS = { name: 120, email: 254, phone: 32, company: 160, message: 5000 }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/

/** Returns a { field: message } map; empty when the enquiry is valid. */
export function validateEnquiry(v) {
  const errors = {}
  const name = v.name.trim()
  const email = v.email.trim()
  const phone = v.phone.trim()
  const message = v.message.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(email) || email.length > LIMITS.email)
    errors.email = 'Please enter a valid email address, e.g. name@company.co.ke.'

  if (phone && !PHONE_RE.test(phone)) errors.phone = 'Please enter a valid phone number, e.g. 0712 345 678.'

  if (v.company.trim().length > LIMITS.company) errors.company = `Please keep this under ${LIMITS.company} characters.`

  if (!v.subject) errors.subject = 'Please choose what your enquiry is about.'

  if (!message) errors.message = 'Please tell us a little about what you need.'
  else if (message.length < 10) errors.message = 'Please add a little more detail (at least 10 characters).'
  else if (message.length > LIMITS.message) errors.message = `Please keep your message under ${LIMITS.message} characters.`

  return errors
}

/** Builds a mailto: link containing the enquiry, used when no backend is configured. */
export function enquiryMailto(v, subjectLabel) {
  const body = [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    v.phone && `Phone: ${v.phone}`,
    v.company && `Company: ${v.company}`,
    '',
    v.message,
  ]
    .filter((line) => line !== false && line !== '')
    .join('\n')
  const params = new URLSearchParams({ subject: `Website enquiry: ${subjectLabel}`, body })
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${siteInfo.email}?${params.toString().replace(/\+/g, '%20')}`
}

/**
 * Sends an enquiry.
 * - Supabase configured → inserts into `quote_requests` (insert-only RLS).
 * - Otherwise → returns { ok: true, via: 'email' } and the caller opens the
 *   visitor's mail client with a pre-filled message. Nothing is faked.
 *
 * To use a different backend (an email API, a serverless function, a CRM),
 * replace the body of this function; the form only depends on its result shape.
 */
export async function submitEnquiry(v) {
  if (!isSupabaseConfigured) return { ok: true, via: 'email' }

  try {
    const supabase = await getSupabase()
    const { error } = await supabase.from('quote_requests').insert([
      {
        name: v.name.trim(),
        email: v.email.trim(),
        phone: v.phone.trim() || null,
        company: v.company.trim() || null,
        subject: v.subject,
        message: v.message.trim(),
      },
    ])
    if (error) return { ok: false }
    return { ok: true, via: 'database' }
  } catch {
    return { ok: false }
  }
}
