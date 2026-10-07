-- KiraTech — Supabase schema
-- Run this in the Supabase SQL editor on a fresh project. On a project created
-- from an earlier version, run the statements marked "upgrade" (and drop the
-- old policies listed at the bottom).
--
-- Security model: the public website uses the anon key and can only read
-- projects and insert enquiries. There are deliberately NO policies granting
-- the `authenticated` role extra access — Supabase allows public sign-ups by
-- default, so "authenticated" can mean "anyone". Staff manage data through the
-- Supabase dashboard, which uses the service role and bypasses RLS.

-- ---------------------------------------------------------------------------
-- projects: case studies shown on /work and /work/<slug>
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
  client text,
  challenge text,
  approach text,
  solution text,
  technologies text[] not null default '{}',
  result text,              -- only measured, verifiable outcomes
  image_alt text,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- upgrade: case-study fields for projects created by an earlier schema
alter table public.projects add column if not exists client text;
alter table public.projects add column if not exists challenge text;
alter table public.projects add column if not exists approach text;
alter table public.projects add column if not exists solution text;
alter table public.projects add column if not exists technologies text[] not null default '{}';
alter table public.projects add column if not exists result text;
alter table public.projects add column if not exists image_alt text;

alter table public.projects enable row level security;

-- Anyone can read published projects (this is public marketing content).
create policy "Projects are publicly readable"
  on public.projects for select
  using (true);

-- No write policies: projects are edited in the dashboard (service role).

-- ---------------------------------------------------------------------------
-- quote_requests: submissions from the contact form (src/lib/enquiry.js)
-- ---------------------------------------------------------------------------
create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254 and email like '%_@_%'),
  phone text check (char_length(phone) <= 32),
  company text check (char_length(company) <= 160),
  subject text not null check (char_length(subject) <= 64),
  message text not null check (char_length(message) between 10 and 5000),
  created_at timestamptz not null default now()
);

-- upgrade: tables created by the earlier "Request a Quote" form
alter table public.quote_requests add column if not exists phone text;
alter table public.quote_requests add column if not exists subject text;
do $$ begin
  if exists (select 1 from information_schema.columns
             where table_schema = 'public' and table_name = 'quote_requests' and column_name = 'project_type') then
    alter table public.quote_requests alter column project_type drop not null;
    alter table public.quote_requests alter column budget_range drop not null;
  end if;
end $$;

alter table public.quote_requests enable row level security;

-- The public site may only INSERT a new enquiry — never read, update or
-- delete submissions. Staff read them in the dashboard (service role).
create policy "Anyone can submit a quote request"
  on public.quote_requests for insert
  with check (true);

-- ---------------------------------------------------------------------------
-- Storage bucket for portfolio media / site imagery
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('kira-media', 'kira-media', true)
on conflict (id) do nothing;

create policy "Public read access to Kira media"
  on storage.objects for select
  using (bucket_id = 'kira-media');
-- Uploads happen through the dashboard (service role); no upload policy.

-- No seed data: add only real, client-approved case studies to public.projects.

-- ---------------------------------------------------------------------------
-- upgrade: remove policies from earlier versions that granted any signed-up
-- user access to leads, projects and media.
-- ---------------------------------------------------------------------------
drop policy if exists "Only authenticated users can read quote requests" on public.quote_requests;
drop policy if exists "Only authenticated users can modify projects" on public.projects;
drop policy if exists "Only authenticated users can upload Kira media" on storage.objects;
