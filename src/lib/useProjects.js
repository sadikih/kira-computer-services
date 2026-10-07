import { useEffect, useState } from 'react'
import { getSupabase, isSupabaseConfigured } from './supabaseClient'
import { projects as staticProjects } from '../data/content'

/** True when there is (or may be) at least one case study to show. */
export const hasWork = staticProjects.length > 0 || isSupabaseConfigured

/**
 * Case studies from the Supabase `projects` table when configured, otherwise
 * the static list in content.js. `error` is set if the remote load fails.
 */
export function useProjects() {
  const [state, setState] = useState({
    projects: staticProjects,
    loading: isSupabaseConfigured,
    error: null,
  })

  useEffect(() => {
    if (!isSupabaseConfigured) return
    let cancelled = false

    getSupabase()
      .then((supabase) =>
        supabase.from('projects').select('*').order('sort_order', { ascending: true }),
      )
      .then(({ data, error }) => {
        if (cancelled) return
        setState({
          projects: data?.length ? data : staticProjects,
          loading: false,
          error: error?.message ?? null,
        })
      })
      .catch((err) => {
        if (!cancelled) setState({ projects: staticProjects, loading: false, error: err.message })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}
