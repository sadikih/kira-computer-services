# KiraTech — Website

Marketing website for KiraTech (Nairobi, Kenya), built with **React 19 + Vite + Tailwind CSS v4**.
Every page is **prerendered to static HTML** at build time, so search engines and link previews get
real content and metadata, and the site works on any static host.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build + prerender → dist/
npm run preview   # serve dist/ locally (use trailing-slash URLs, e.g. /about/)
npm run lint      # oxlint
npm run check     # contact-form validation checks
```

## Editing content

All copy lives in **`src/data/content.js`** — contact details, services, principles, process,
technology, About-page story/team and case studies. Components read from it, so most changes need
no component edits.

The rule for that file: **only state things that are true.** Sections for real information that
doesn't exist yet render nothing until you add it:

| Add to…            | …and this appears                                         |
| ------------------ | --------------------------------------------------------- |
| `projects`         | “Work” in the nav and footer, homepage work section, `/work/<slug>` case-study pages, sitemap |
| `about.story`      | Replaces the default “Our approach” copy on `/about`       |
| `about.team`       | Team section on `/about`                                  |
| `socialLinks`      | Social icons in the footer (real accounts only)           |

Adding a service to `services` automatically creates `/services/<slug>`, adds it to the
navigation, footer, contact-form subjects and sitemap.

## Contact form

`src/lib/enquiry.js` holds validation and submission.

- **Supabase configured** → enquiries are inserted into `quote_requests`.
- **Not configured** → the form opens the visitor's email app with the message pre-filled to
  `shamisi@kiratech.co.ke`, and tells them to press send. Nothing is faked.

To use another backend (email API, serverless function, CRM), replace `submitEnquiry()` — the form
only depends on its `{ ok, via }` result.

## Supabase (optional)

1. Create a project at [supabase.com](https://supabase.com) and run `supabase/schema.sql`.
2. Copy `.env.example` to `.env.local` and add the project URL and **anon** key.
3. Rebuild.

The anon key is public by design; Row Level Security limits it to reading projects and inserting
enquiries. Read enquiries in the Supabase dashboard. **Never put the service-role key in a
`VITE_` variable** — anything prefixed `VITE_` ships to the browser.

If you set up Supabase from an earlier version of this repo, run the `upgrade` statements in
`schema.sql`: earlier policies let *any* signed-up user read enquiries and edit projects.

## Deployment

Upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, nginx…).

- Each route is a folder with its own `index.html` (`/services/` → `dist/services/index.html`).
- `dist/404.html` is served for unknown URLs by most hosts automatically. On nginx, use
  `try_files $uri $uri/ /404.html;`.
- `sitemap.xml` and `robots.txt` are generated on build from `siteInfo.url` in `content.js`
  (currently `https://kiratech.co.ke` — change it if the site lives elsewhere).

## Structure

```
src/
  data/content.js        All site copy (single source of truth)
  pages/                 One component per route
  components/
    sections/            Homepage sections
    ui/                  Shared building blocks (PageHeader, Reveal, CtaBand, Seo, Logo…)
    Navbar.jsx, Footer.jsx, ContactForm.jsx
  lib/
    router.jsx           Minimal History-API router + <Link>
    enquiry.js           Contact-form validation and submission
    useProjects.js       Case studies (Supabase, falling back to content.js)
    structuredData.js    JSON-LD helpers
  routes.js              Routes that are prerendered / listed in the sitemap
  entry-server.jsx       Server render entry used by the prerender step
scripts/prerender.js     Writes static HTML per route, 404.html, sitemap.xml, robots.txt
```

## Design system

Defined in `src/index.css`:

- **Colour:** near-black navy neutrals with a single electric-blue accent. Text and button colours
  meet WCAG AA contrast.
- **Type:** Space Grotesk (display) and Inter (body). Fluid `display-1` / `display-2` / `lede` scale.
- **Components:** `.btn` (+ `btn-primary`, `btn-secondary`, `btn-light`, `btn-lg`), `.card`,
  `.eyebrow`, `.text-link`, `.input`, `.section`, `.prose-kira`.
- **Motion:** CSS-only entrance and scroll reveals (`Reveal`). Content is never hidden without
  JavaScript, and everything respects `prefers-reduced-motion`.
- **Focus:** one consistent `:focus-visible` outline for every interactive element.
