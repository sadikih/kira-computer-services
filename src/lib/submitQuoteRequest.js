import { supabase, isSupabaseConfigured } from './supabaseClient'

/**
 * Persists a "Request a Quote" submission to Supabase. When Supabase isn't
 * configured (e.g. local dev without credentials), it resolves successfully
 * so the UI can be exercised end-to-end without a backend.
 */
export async function submitQuoteRequest(payload) {
  if (!isSupabaseConfigured) {
    // eslint-disable-next-line no-console
    console.info('[Kira] Supabase not configured — quote request not persisted:', payload)
    return { ok: true, simulated: true }
  }

  const { error } = await supabase.from('quote_requests').insert([payload])

  if (error) {
    return { ok: false, error: error.message }
  }

  return { ok: true, simulated: false }
}
