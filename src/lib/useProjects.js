import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from './supabaseClient'
import { projectsFallback } from '../data/content'

/**
 * Loads portfolio projects from the Supabase `projects` table when
 * configured, otherwise serves the static fallback so the section always
 * renders. See supabase/schema.sql for the expected table shape.
 */
export function useProjects() {
  const [projects, setProjects] = useState(projectsFallback)
  const [loading, setLoading] = useState(isSupabaseConfigured)

  useEffect(() => {
    if (!isSupabaseConfigured) return

    let cancelled = false

    async function load() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true })

      if (cancelled) return

      if (!error && data?.length) {
        setProjects(data)
      }
      setLoading(false)
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return { projects, loading }
}
