// Supabase is optional. The anon key is a public, RLS-restricted key (see
// supabase/schema.sql) — never put a service-role key in a VITE_ variable.
const env = import.meta.env ?? {} // undefined outside Vite (e.g. plain node checks)
const supabaseUrl = env.VITE_SUPABASE_URL
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

let clientPromise

/** Lazily loads the Supabase SDK so pages that never touch it don't pay for it. */
export function getSupabase() {
  if (!isSupabaseConfigured) return Promise.resolve(null)
  clientPromise ??= import('@supabase/supabase-js').then(({ createClient }) =>
    createClient(supabaseUrl, supabaseAnonKey),
  )
  return clientPromise
}
