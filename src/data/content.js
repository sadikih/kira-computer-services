// Single source of truth for site copy. Everything rendered on the site comes
// from here (or from Supabase, for projects), so real information can be added
// later without touching components.
//
// Rule for this file: only state things that are true. No invented clients,
// statistics, testimonials or history — leave an empty array instead and the
// matching section hides itself.

export const siteInfo = {
  name: 'KiraTech',
  legalName: 'KiraTech',
  // Assumed from the email domain — change if the site is served elsewhere.
  url: 'https://kiratech.co.ke',
  tagline: 'Software, security and networks for organisations in Kenya.',
  description:
    'KiraTech is a Nairobi technology company. We build software and websites, carry out authorised security testing, and design the networks and cloud infrastructure your systems run on.',
  email: 'shamisi@kiratech.co.ke',
  phone: '0112796092',
  phoneHref: 'tel:+254112796092',
  location: 'Nairobi, Kenya',
}

// Primary navigation. `Work` is added automatically once projects exist
// (see src/lib/useProjects.js).
export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Only add accounts that actually exist, e.g.
// { label: 'LinkedIn', href: 'https://www.linkedin.com/company/…', icon: 'linkedin' }
// Supported icons: linkedin, twitter, github, instagram.
export const socialLinks = []

// The three things KiraTech does, used for positioning on the homepage.
export const pillars = [
  {
    key: 'build',
    title: 'Build',
    description: 'Custom software, websites and web applications designed around how your organisation works.',
  },
  {
    key: 'secure',
    title: 'Secure',
    description: 'Authorised security testing and hardening, so weaknesses are found by us before someone else finds them.',
  },
  {
    key: 'connect',
    title: 'Connect',
    description: 'Office networks, cloud hosting and IT infrastructure that keep your people and systems online.',
  },
]

// Services. `slug` becomes /services/<slug>. Each entry answers: what it is,
// the problem it solves, why it matters, what is included, who it suits.
export const services = [
  {
    slug: 'software-development',
    icon: 'code',
    pillar: 'build',
    title: 'Software Development',
    short: 'Custom business systems, internal tools, APIs and mobile apps.',
    summary:
      'Software built around the way your organisation already works — from internal tools and customer portals to integrations and mobile apps.',
    problem:
      'Off-the-shelf tools rarely fit. Teams end up juggling spreadsheets, re-typing data between systems and working around software instead of with it.',
    outcome:
      'A system that matches your process, connects to the tools you already use and can grow as the organisation does.',
    includes: [
      'Business and operations systems',
      'Internal tools and dashboards',
      'API design and third-party integrations',
      'iOS and Android apps (React Native)',
      'Modernising and maintaining existing systems',
    ],
    suitedFor: [
      'You run key processes on spreadsheets or paper',
      'Your current systems do not talk to each other',
      'You need a customer- or staff-facing app',
    ],
  },
  {
    slug: 'web-development',
    icon: 'globe',
    pillar: 'build',
    title: 'Websites & Web Applications',
    short: 'Fast, accessible company websites and browser-based applications.',
    summary:
      'Company websites, e-commerce and web applications that load quickly, work on every device and are easy for your team to keep up to date.',
    problem:
      'A slow, outdated or hard-to-use website costs enquiries. Visitors on mobile data leave before a heavy page finishes loading.',
    outcome:
      'A site that explains what you do clearly, works well on phones and turns visitors into enquiries.',
    includes: [
      'Corporate and marketing websites',
      'Web applications and customer portals',
      'E-commerce',
      'Performance, accessibility and SEO improvements',
      'Hosting set-up and ongoing maintenance',
    ],
    suitedFor: [
      'You are launching a new organisation or product',
      'Your current site is slow, dated or hard to update',
      'You need customers to log in, order or book online',
    ],
  },
  {
    slug: 'cybersecurity',
    icon: 'shield',
    pillar: 'secure',
    title: 'Cybersecurity & Penetration Testing',
    short: 'Authorised ethical hacking, vulnerability assessments and hardening.',
    summary:
      'Ethical hacking carried out with your written permission: we test your websites, applications and networks the way an attacker would, then help you fix what we find.',
    problem:
      'Most organisations only discover a security weakness after it has been exploited — through a breach, lost data or a defaced website.',
    outcome:
      'A clear, prioritised report of real risks in plain language, and support to close them.',
    includes: [
      'Web application and API penetration testing',
      'Network vulnerability assessments',
      'Security configuration reviews and hardening',
      'Remediation support and re-testing',
      'Security awareness guidance for staff',
    ],
    suitedFor: [
      'You handle customer, financial or personal data',
      'You are launching a new system and want it checked first',
      'You are not sure how exposed your organisation is',
    ],
    note: 'We only test systems you own or are authorised to have tested, under a written scope agreed before any work starts.',
  },
  {
    slug: 'networking',
    icon: 'network',
    pillar: 'connect',
    title: 'Networking & IT Infrastructure',
    short: 'Office network design, installation, Wi-Fi and troubleshooting.',
    summary:
      'Network design, installation and support for offices and organisations — wired and wireless — so your team stays connected and your systems stay reachable.',
    problem:
      'Unreliable Wi-Fi, dropped connections and undocumented equipment slow everyone down, and an unmanaged network is also a security risk.',
    outcome:
      'A stable, documented and secured network that is straightforward to support and extend.',
    includes: [
      'Network design and installation',
      'Router, switch, firewall and Wi-Fi configuration',
      'Network troubleshooting and performance fixes',
      'Network security and access control',
      'Documentation and ongoing support',
    ],
    suitedFor: [
      'You are setting up or moving into a new office',
      'Your connection is slow or drops regularly',
      'Nobody is quite sure how the current network is set up',
    ],
  },
  {
    slug: 'cloud-solutions',
    icon: 'cloud',
    pillar: 'connect',
    title: 'Cloud & DevOps',
    short: 'Cloud hosting, migration, deployment pipelines and backups.',
    summary:
      'Cloud architecture, migration and deployment automation that keeps your applications available, backed up and affordable to run.',
    problem:
      'Servers that are set up by hand are fragile: deployments break things, backups are untested and costs creep up unnoticed.',
    outcome:
      'Repeatable deployments, tested backups and infrastructure you can understand and scale.',
    includes: [
      'Cloud architecture and migration',
      'CI/CD deployment pipelines',
      'Infrastructure as code',
      'Monitoring, backups and recovery planning',
      'Cost reviews',
    ],
    suitedFor: [
      'You are moving systems off a single server or office PC',
      'Releases are manual and risky',
      'You are unsure your backups would actually restore',
    ],
  },
  {
    slug: 'ai-data-solutions',
    icon: 'data',
    pillar: 'build',
    title: 'Data & AI Solutions',
    short: 'Reporting, automation and practical AI features.',
    summary:
      'Data pipelines, reporting and practical AI features that save your team time and turn the data you already collect into decisions.',
    problem:
      'Data sits in separate systems and reports are assembled by hand, so decisions are made late or on incomplete information.',
    outcome:
      'Reliable reporting and automation of repetitive work, with AI used only where it genuinely helps.',
    includes: [
      'Dashboards and reporting',
      'Data pipelines and integration',
      'Workflow automation',
      'AI and large-language-model integrations',
    ],
    suitedFor: [
      'Monthly reporting takes days of manual work',
      'Staff spend hours on repetitive tasks',
      'You want to explore AI without a risky big-bang project',
    ],
  },
  {
    slug: 'it-consulting',
    icon: 'compass',
    pillar: 'connect',
    title: 'IT Consulting',
    short: 'Independent technology advice, audits and planning.',
    summary:
      'Straightforward advice on technology decisions — what to build, buy, fix or leave alone — from people who also do the hands-on work.',
    problem:
      'Technology decisions are expensive to get wrong, and vendors are rarely neutral about their own products.',
    outcome:
      'A clear plan with priorities and trade-offs you can act on, whether or not we do the work.',
    includes: [
      'Technology strategy and roadmaps',
      'Technical audits of existing systems',
      'Vendor and tool selection',
      'Digital transformation planning',
    ],
    suitedFor: [
      'You are planning a significant technology investment',
      'You have inherited systems nobody fully understands',
      'You want a second opinion on a proposal',
    ],
  },
]

export const principles = [
  {
    title: 'Security is part of the build',
    description:
      'We also test systems for a living, so security is considered from the first design decision rather than patched on before launch.',
  },
  {
    title: 'One team, fewer hand-offs',
    description:
      'Software, security and networking under one roof means one point of contact and nobody blaming another supplier when something breaks.',
  },
  {
    title: 'Plain-language communication',
    description:
      'You will always know what is being built, why, what it costs and what happens next — without the jargon.',
  },
  {
    title: 'Based in Nairobi',
    description:
      'Same time zone, local context and the ability to be on site when network or infrastructure work needs hands on equipment.',
  },
]

export const processSteps = [
  {
    title: 'Understand',
    description: 'We talk through your goals, constraints and current setup, and look at what already exists before suggesting anything new.',
  },
  {
    title: 'Plan',
    description: 'You receive a written scope with deliverables, timeline and cost. For security work, this includes the agreed testing boundaries.',
  },
  {
    title: 'Build & test',
    description: 'We deliver in stages you can review, testing for quality and security as we go rather than only at the end.',
  },
  {
    title: 'Launch & support',
    description: 'We hand over documentation and access, then stay available for fixes, maintenance and the next improvement.',
  },
]

export const techStack = [
  { group: 'Web & mobile', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'] },
  { group: 'Back end & data', items: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'GraphQL'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes'] },
  { group: 'Design & AI', items: ['Figma', 'OpenAI'] },
]

// Optional About-page content. Leave empty until real details are available;
// the related sections will not render while these are empty.
export const about = {
  // e.g. 'KiraTech was founded in 20XX by …'
  story: [],
  // e.g. { name: 'Jane Doe', role: 'Founder', photo: '/team/jane.jpg' }
  team: [],
}

// Case studies. Add real projects here (or in the Supabase `projects` table).
// Shape:
// {
//   slug: 'project-slug',
//   title: 'Project name',
//   client: 'Client name (with permission)',
//   summary: 'One-sentence description.',
//   tags: ['Web App'],
//   image_url: '/work/project.jpg',
//   challenge: '…', approach: '…', solution: '…',
//   technologies: ['React'],
//   result: 'Only measured, verifiable results.',
//   link_url: 'https://…',
// }
export const projects = []

// Options for the contact form "Subject" field.
export const enquirySubjects = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'general', label: 'General enquiry' },
]
