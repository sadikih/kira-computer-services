import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.warn(
    '[Kira] Supabase env vars are not set. Falling back to static content. ' +
      'Copy .env.example to .env.local and add your project credentials to enable it.',
  )
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const MEDIA_BUCKET = import.meta.env.VITE_SUPABASE_MEDIA_BUCKET || 'kira-media'

export function publicMediaUrl(path) {
  if (!supabase || !path) return null
  const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path)
  return data?.publicUrl ?? null
}
