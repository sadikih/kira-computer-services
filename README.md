# Kira Computer Services — Website

A modern, production-ready marketing website for Kira Computer Services, built with
**React + Vite + Tailwind CSS**, animated with **Framer Motion**, and backed by
**Supabase** for dynamic content (portfolio projects) and lead capture (quote requests).

## Stack

- **React 19 + Vite** — app shell and build tooling
- **Tailwind CSS v4** — styling, via the `@tailwindcss/vite` plugin
- **Framer Motion** — scroll reveals and micro-interactions
- **lucide-react** — icon set
- **react-helmet-async** — per-page SEO/meta tags
- **@supabase/supabase-js** — database + storage client

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase credentials
npm run dev
```

The site runs fully without Supabase configured — it falls back to the static content
in `src/data/content.js` and the quote form logs submissions to the console instead of
persisting them. This makes local development and design review possible before a
Supabase project exists.

## Connecting Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run `supabase/schema.sql`. This creates:
   - `public.projects` — portfolio items rendered in the "Work" section, with row-level
     security allowing public reads and restricting writes to authenticated users.
   - `public.quote_requests` — leads captured from the "Request a Quote" form, insert-only
     for anonymous visitors, readable only by authenticated staff.
   - A public `kira-media` storage bucket for portfolio images and other site assets.
   - Seed rows matching the static fallback content, so the DB and UI agree from day one.
3. Copy your project URL and anon public key (Project Settings → API) into `.env.local`:

   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   VITE_SUPABASE_MEDIA_BUCKET=kira-media
   ```

4. Restart the dev server. Portfolio projects will now load from Supabase, and quote
   submissions will be written to `quote_requests`.

Never commit `.env.local` — it's already ignored via the `*.local` rule in `.gitignore`.

## Project structure

```
src/
  components/
    ui/            Reusable primitives (Reveal, Container, SectionHeading)
    sections/       One component per page section (Hero, About, Services, ...)
    Navbar.jsx
    Footer.jsx
  data/
    content.js      Static fallback content — mirrors the Supabase table shape
  lib/
    supabaseClient.js     Supabase client + config guard
    useProjects.js        Hook: loads portfolio projects (Supabase, falls back to static)
    submitQuoteRequest.js Writes a quote request lead to Supabase
supabase/
  schema.sql        Full schema, RLS policies, storage bucket, and seed data
```

Adding a new dynamic section later means following the same pattern: add a table to
`supabase/schema.sql`, add matching fallback data to `src/data/content.js`, and add a
small hook in `src/lib/` that prefers Supabase and falls back to the static data.

## Scripts

```bash
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Design system

- Palette: deep navy (`navy-950`…`navy-500`) with an electric blue accent
  (`electric-400`…`electric-700`), defined as Tailwind v4 theme tokens in `src/index.css`.
- Typography: Inter (body) and Space Grotesk (display/headings), loaded via Google Fonts.
- Glassmorphism: `.glass` utility class for translucent, blurred panels (nav, cards, form).
- Motion: `Reveal` (`src/components/ui/Reveal.jsx`) wraps content in a scroll-triggered
  fade/slide using Framer Motion's `whileInView`, animating once per element.

## Accessibility & SEO

- Semantic landmarks (`header`, `main`, `footer`, `nav`), skip-to-content link, and visible
  focus rings (`.focus-ring`) throughout.
- All imagery includes descriptive `alt` text.
- Per-page `<title>`, meta description, Open Graph/Twitter tags, and JSON-LD Organization
  markup via `react-helmet-async` in `src/App.jsx`.
- `public/robots.txt` and `public/sitemap.xml` included — update the sitemap domain once
  the site has a production URL.
