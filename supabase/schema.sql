-- Kira Computer Services — Supabase schema
-- Run this in the Supabase SQL editor (or via the CLI) on a fresh project.

-- ---------------------------------------------------------------------------
-- projects: portfolio items shown in the "Work" section
-- ---------------------------------------------------------------------------
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text not null,
  description text,
  tags text[] not null default '{}',
  image_path text,          -- object path inside the storage bucket, if hosted on Supabase
  image_url text,           -- fully-qualified image URL (external or resolved from image_path)
  link_url text,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

-- Anyone can read published projects (this is public marketing content).
create policy "Projects are publicly readable"
  on public.projects for select
  using (true);

-- Writes are restricted to authenticated staff/service-role only — the
-- public site never inserts or updates projects directly.
create policy "Only authenticated users can modify projects"
  on public.projects for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ---------------------------------------------------------------------------
-- quote_requests: submissions from the "Request a Quote" contact form
-- ---------------------------------------------------------------------------
create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  project_type text not null,
  budget_range text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.quote_requests enable row level security;

-- The public site is only ever allowed to INSERT a new lead — never read,
-- update, or delete existing submissions (that stays restricted to staff).
create policy "Anyone can submit a quote request"
  on public.quote_requests for insert
  with check (true);

create policy "Only authenticated users can read quote requests"
  on public.quote_requests for select
  using (auth.role() = 'authenticated');

-- ---------------------------------------------------------------------------
-- Storage bucket for portfolio media / site imagery
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('kira-media', 'kira-media', true)
on conflict (id) do nothing;

create policy "Public read access to Kira media"
  on storage.objects for select
  using (bucket_id = 'kira-media');

create policy "Only authenticated users can upload Kira media"
  on storage.objects for insert
  with check (bucket_id = 'kira-media' and auth.role() = 'authenticated');

-- ---------------------------------------------------------------------------
-- Seed data (mirrors src/data/content.js so the DB matches the fallback UI)
-- ---------------------------------------------------------------------------
insert into public.projects (title, slug, summary, tags, image_url, link_url, featured, sort_order)
values
  ('Panda Pay', 'panda-pay', 'A mobile-first payments platform processing thousands of transactions daily across East Africa.', array['Fintech','React Native','Cloud'], 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop', '#', true, 1),
  ('Harvest OS', 'harvest-os', 'A logistics and inventory platform connecting agricultural cooperatives with buyers in real time.', array['Web App','Supply Chain','AI'], 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop', '#', true, 2),
  ('Nova Health', 'nova-health', 'A telemedicine and patient-records system built for clinics with unreliable connectivity.', array['Healthtech','Cloud','Offline-first'], 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop', '#', true, 3),
  ('Lumo Analytics', 'lumo-analytics', 'A real-time analytics dashboard turning raw operational data into decisions for retail teams.', array['Data','Dashboards','SaaS'], 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop&fm=jpg&ixid=2', '#', false, 4)
on conflict (slug) do nothing;
