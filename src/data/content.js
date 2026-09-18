// Static fallback content. This mirrors the shape of data we expect to read
// from Supabase (see supabase/schema.sql) so the site renders fully even
// before a Supabase project is connected, and components don't need to
// change shape once dynamic content is wired in.

export const siteInfo = {
  name: 'Kira Computer Services',
  shortName: 'Kira',
  tagline: 'Engineering the software behind Africa’s next generation of technology companies.',
  description:
    'Kira Computer Services designs and builds software, websites, digital platforms, and custom technology solutions for ambitious businesses.',
  email: 'hello@kiracomputerservices.com',
  phone: '+255 700 000 000',
  location: 'Dar es Salaam, Tanzania',
  addressLine: 'Kinondoni, Dar es Salaam, Tanzania',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Kira', href: '#why-kira' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'X (Twitter)', href: 'https://x.com', icon: 'twitter' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
]

export const heroStats = [
  { value: '40+', label: 'Products shipped' },
  { value: '98%', label: 'Client retention' },
  { value: '24/7', label: 'Systems monitoring' },
]

export const aboutStats = [
  { value: '6+', label: 'Years building software' },
  { value: '40+', label: 'Projects delivered' },
  { value: '15+', label: 'Industries served' },
  { value: '10+', label: 'Engineers & designers' },
]

export const services = [
  {
    slug: 'software-development',
    icon: 'code-2',
    title: 'Software Development',
    description:
      'Custom software engineered around your workflows — from internal tools to full-scale enterprise platforms, built to scale with your business.',
    points: ['Custom platforms', 'API design & integration', 'Legacy modernization'],
  },
  {
    slug: 'web-development',
    icon: 'globe',
    title: 'Web Development',
    description:
      'Fast, secure, beautifully engineered websites and web apps — from marketing sites to complex customer portals.',
    points: ['Marketing & corporate sites', 'Web applications', 'E-commerce platforms'],
  },
  {
    slug: 'mobile-apps',
    icon: 'smartphone',
    title: 'Mobile Apps',
    description:
      'Native-quality iOS and Android apps built with modern cross-platform frameworks, designed for performance and delight.',
    points: ['iOS & Android', 'Cross-platform (React Native)', 'App store deployment'],
  },
  {
    slug: 'cloud-solutions',
    icon: 'cloud',
    title: 'Cloud Solutions',
    description:
      'Cloud architecture, migration, and DevOps that keeps your infrastructure resilient, secure, and ready to scale.',
    points: ['Cloud architecture', 'CI/CD pipelines', 'Infrastructure as code'],
  },
  {
    slug: 'ai-data-solutions',
    icon: 'brain-circuit',
    title: 'AI & Data Solutions',
    description:
      'Practical AI — automation, data pipelines, and intelligent features that turn your data into a real advantage.',
    points: ['AI-powered automation', 'Data pipelines & analytics', 'LLM integrations'],
  },
  {
    slug: 'it-consulting',
    icon: 'lightbulb',
    title: 'IT Consulting',
    description:
      'Strategic technology guidance — architecture reviews, digital transformation roadmaps, and technical due diligence.',
    points: ['Technology strategy', 'Digital transformation', 'Technical audits'],
  },
]

export const projectsFallback = [
  {
    id: 'p1',
    title: 'Panda Pay',
    slug: 'panda-pay',
    summary: 'A mobile-first payments platform processing thousands of transactions daily across East Africa.',
    tags: ['Fintech', 'React Native', 'Cloud'],
    image_url:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
    link_url: '#',
    featured: true,
  },
  {
    id: 'p2',
    title: 'Harvest OS',
    slug: 'harvest-os',
    summary: 'A logistics and inventory platform connecting agricultural cooperatives with buyers in real time.',
    tags: ['Web App', 'Supply Chain', 'AI'],
    image_url:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    link_url: '#',
    featured: true,
  },
  {
    id: 'p3',
    title: 'Nova Health',
    slug: 'nova-health',
    summary: 'A telemedicine and patient-records system built for clinics with unreliable connectivity.',
    tags: ['Healthtech', 'Cloud', 'Offline-first'],
    image_url:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop',
    link_url: '#',
    featured: true,
  },
  {
    id: 'p4',
    title: 'Lumo Analytics',
    slug: 'lumo-analytics',
    summary: 'A real-time analytics dashboard turning raw operational data into decisions for retail teams.',
    tags: ['Data', 'Dashboards', 'SaaS'],
    image_url:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop&fm=jpg&ixid=2',
    link_url: '#',
    featured: false,
  },
]

export const whyKira = [
  {
    icon: 'shield-check',
    title: 'Security-first engineering',
    description: 'Every product is designed with security and compliance in mind from day one, not bolted on later.',
  },
  {
    icon: 'gauge',
    title: 'Built for performance',
    description: 'We obsess over load times, reliability, and scale so your platform performs under real-world pressure.',
  },
  {
    icon: 'users',
    title: 'A true technology partner',
    description: 'We work as an extension of your team — transparent, communicative, and invested in your outcomes.',
  },
  {
    icon: 'rocket',
    title: 'Fast, disciplined delivery',
    description: 'Agile delivery cycles with clear milestones mean you see working software early and often.',
  },
  {
    icon: 'map',
    title: 'Local context, global standard',
    description: 'Deep understanding of African markets and infrastructure, engineered to international standards.',
  },
  {
    icon: 'life-buoy',
    title: 'Support that doesn’t disappear',
    description: 'Post-launch support and monitoring keep your systems healthy long after we ship.',
  },
]

export const techStack = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'React Native',
  'Python', 'PostgreSQL', 'Supabase', 'AWS', 'Docker',
  'Kubernetes', 'Tailwind CSS', 'GraphQL', 'Figma', 'OpenAI',
]

export const projectTypes = [
  'Software Development',
  'Web Development',
  'Mobile App',
  'Cloud Solutions',
  'AI & Data Solutions',
  'IT Consulting',
  'Something else',
]

export const budgetRanges = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
]
