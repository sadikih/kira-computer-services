// Single source of truth for site copy. Everything rendered on the site comes
// from here (or from Supabase, for projects), so real information can be added
// later without touching components.
//
// Rule for this file: only state things that are true. No invented clients,
// statistics, testimonials, certifications or project results — leave an empty
// array instead and the matching section hides itself.

export const siteInfo = {
  name: 'KiraTech',
  legalName: 'KiraTech',
  // The live host redirects kiratech.co.ke here, so canonical URLs must use www.
  url: 'https://www.kiratech.co.ke',
  tagline: 'Engineering Intelligent Business Systems.',
  description:
    'KiraTech is a Nairobi-based business systems engineering company. We build custom enterprise software, automate operations with AI, integrate systems and run secure cloud infrastructure for organisations in Kenya and internationally.',
  email: 'shamisi@kiratech.co.ke',
  phone: '0112796092',
  phoneHref: 'tel:+254112796092',
  location: 'Nairobi, Kenya',
}

// Primary navigation. Services has its own menu in the navbar.
export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Only add accounts that actually exist, e.g.
// { label: 'LinkedIn', href: 'https://www.linkedin.com/company/…' }
export const socialLinks = []

// Services, in priority order. `slug` becomes /services/<slug>. The first entry
// is the core offer and is given the most prominence across the site.
// Old slugs are 301-redirected in vercel.json.
export const services = [
  {
    slug: 'business-systems-engineering',
    seoTitle: 'Business Systems Engineering: Custom ERP, CRM & Enterprise Software in Kenya',
    seoDescription:
      'Custom enterprise software engineered in Nairobi: ERP, CRM, inventory, business management systems, dashboards and information management platforms built around how your organisation operates.',
    icon: 'systems',
    core: true,
    title: 'Business Systems Engineering',
    short: 'Custom enterprise software, ERP, CRM, inventory systems and decision dashboards.',
    summary:
      'We engineer the core systems organisations run on — business management platforms, ERP, CRM, inventory and information systems — designed around your processes, not the other way round.',
    problem:
      'Operations run across spreadsheets, paper forms and disconnected tools. Data is re-typed, reports take days to assemble, and nobody has a single, reliable view of the organisation.',
    outcome:
      'One engineered system of record that models your real workflows, enforces your rules, connects to the tools you already use and gives leadership live, trustworthy information.',
    includes: [
      'Custom enterprise and business management systems',
      'ERP platforms: finance, procurement, HR and operations',
      'CRM and customer, member or donor management',
      'Inventory, warehouse and distribution systems',
      'Executive dashboards and reporting',
      'Information and records management platforms',
      'Modernisation of legacy systems',
    ],
    modules: ['ERP', 'CRM', 'Inventory', 'Procurement', 'HR & Payroll', 'Finance', 'Records', 'Dashboards'],
    suitedFor: [
      'Key processes depend on spreadsheets, email or paper',
      'Off-the-shelf software forces your team into workarounds',
      'Leadership cannot get accurate numbers without manual effort',
    ],
  },
  {
    slug: 'ai-workflow-automation',
    seoTitle: 'AI & Workflow Automation for Organisations in Kenya',
    seoDescription:
      'AI integration and intelligent workflow automation: document processing, AI assistants and automated business processes that remove repetitive work while keeping people in control.',
    icon: 'ai',
    title: 'AI & Workflow Automation',
    short: 'AI integration, document processing, AI assistants and automated processes.',
    summary:
      'Practical AI and automation built into your operations — extracting data from documents, routing approvals, answering questions from your own knowledge and removing repetitive manual steps.',
    problem:
      'Skilled staff spend hours copying data from documents, chasing approvals and answering the same questions, while work queues and response times grow.',
    outcome:
      'Automated, auditable workflows with AI applied only where it is reliable, with human review built in for the decisions that matter.',
    includes: [
      'AI integration into existing systems',
      'Intelligent document processing and data extraction',
      'AI assistants grounded in your own documents and data',
      'Approval, routing and notification workflows',
      'Automated reporting and scheduled processes',
    ],
    suitedFor: [
      'Staff re-key information from invoices, forms or reports',
      'Approvals stall in inboxes',
      'You want to adopt AI without exposing sensitive data',
    ],
  },
  {
    slug: 'api-systems-integration',
    seoTitle: 'API Development & Systems Integration in Kenya',
    seoDescription:
      'API development, system interoperability, third-party integrations (including M-Pesa, accounting and government platforms) and reliable data synchronisation between your systems.',
    icon: 'integration',
    title: 'API & Systems Integration',
    short: 'API development, interoperability, third-party integrations and data sync.',
    summary:
      'We connect the systems your organisation depends on so data moves between them accurately and automatically — through well-designed APIs and dependable integrations.',
    problem:
      'Systems that do not talk to each other create duplicate entry, conflicting records and errors that only surface at month end.',
    outcome:
      'Documented, secure APIs and monitored integrations that keep every system consistent, with failures detected and retried instead of silently lost.',
    includes: [
      'REST and GraphQL API design and development',
      'Third-party and payment integrations (e.g. M-Pesa, accounting, ERP)',
      'System interoperability and data exchange standards',
      'Data synchronisation and migration',
      'Integration monitoring, logging and alerting',
    ],
    suitedFor: [
      'The same data is entered into more than one system',
      'You need to connect to a partner, payment or government platform',
      'You are replacing a system and must migrate its data safely',
    ],
  },
  {
    slug: 'cloud-devops',
    seoTitle: 'Cloud & DevOps Services in Kenya: Docker, CI/CD & Infrastructure',
    seoDescription:
      'Cloud infrastructure, Docker containerisation, CI/CD pipelines, deployment automation and infrastructure management that keep your systems available, secure and cost-effective.',
    icon: 'cloud',
    title: 'Cloud & DevOps',
    short: 'Cloud infrastructure, Docker, CI/CD pipelines and infrastructure management.',
    summary:
      'Cloud architecture and engineering practices that let you release software safely and often, recover from failure quickly and understand what you are paying for.',
    problem:
      'Hand-configured servers, manual deployments and untested backups make every release risky and every outage longer than it needs to be.',
    outcome:
      'Reproducible, containerised infrastructure with automated deployments, monitoring and tested recovery — documented so your team is never locked in.',
    includes: [
      'Cloud architecture and migration',
      'Docker containerisation',
      'CI/CD pipelines and deployment automation',
      'Infrastructure as code',
      'Monitoring, backups and disaster recovery',
      'Cost and performance optimisation',
    ],
    suitedFor: [
      'Releases are manual and stressful',
      'Systems run on a single server or office machine',
      'You are not certain your backups would restore',
    ],
  },
  {
    slug: 'cybersecurity',
    seoTitle: 'Cybersecurity & Application Security in Kenya',
    seoDescription:
      'Application security, secure architecture, access management, data protection and authorised penetration testing for organisations handling sensitive and regulated data in Kenya.',
    icon: 'shield',
    title: 'Cybersecurity',
    short: 'Application security, secure architecture, access management and data protection.',
    summary:
      'Security engineered into systems from the first design decision — and independently tested, with your written authorisation, before attackers can test it for you.',
    problem:
      'Organisations handling health, financial or personal data face growing threats and obligations under the Kenya Data Protection Act, yet security is often checked late or not at all.',
    outcome:
      'Systems designed with least-privilege access, protected data and a clear, prioritised view of real risks, with support to close them.',
    includes: [
      'Application and API security reviews',
      'Secure architecture and threat modelling',
      'Identity and access management',
      'Data protection and encryption',
      'Authorised penetration testing and re-testing',
    ],
    suitedFor: [
      'You handle patient, financial or personal data',
      'You are launching a system and want it assessed first',
      'You need to demonstrate data protection to regulators or partners',
    ],
    note: 'We only test systems you own or are authorised to have tested, under a written scope agreed before any work starts.',
  },
  {
    slug: 'web-development',
    seoTitle: 'Websites & Web Applications in Nairobi',
    seoDescription:
      'Corporate websites, e-commerce and custom web applications engineered for performance, accessibility and search visibility.',
    icon: 'globe',
    title: 'Websites & Web Applications',
    short: 'Corporate websites, e-commerce and custom web applications.',
    summary:
      'Fast, accessible corporate websites, e-commerce and web applications built with the same engineering standards as our enterprise systems.',
    problem:
      'A slow or dated website undermines credibility, and visitors on mobile data leave before heavy pages finish loading.',
    outcome:
      'A fast, maintainable web presence that represents your organisation professionally and converts visitors into enquiries.',
    includes: [
      'Corporate and institutional websites',
      'E-commerce platforms',
      'Custom web applications and portals',
      'Performance, accessibility and SEO',
      'Hosting and ongoing maintenance',
    ],
    suitedFor: [
      'Your website no longer reflects the organisation',
      'Customers or members need to log in, order or apply online',
      'Your site is slow, hard to update or invisible in search',
    ],
  },
  {
    slug: 'networking',
    seoTitle: 'Networking & IT Support in Nairobi',
    seoDescription:
      'Network infrastructure, server configuration, maintenance and technical support for offices and organisations in Nairobi.',
    icon: 'network',
    title: 'Networking & IT Support',
    short: 'Network infrastructure, server configuration, maintenance and support.',
    summary:
      'Reliable network and server infrastructure — designed, installed, documented and supported — so the systems we build have a dependable foundation.',
    problem:
      'Unreliable connectivity and undocumented equipment slow everyone down and leave security gaps nobody is watching.',
    outcome:
      'A stable, secured and documented infrastructure that is straightforward to support and extend.',
    includes: [
      'Network design and installation',
      'Router, switch, firewall and Wi-Fi configuration',
      'Server installation and configuration',
      'Maintenance and technical support',
      'Documentation and access control',
    ],
    suitedFor: [
      'You are setting up or moving into new premises',
      'Connectivity is slow or drops regularly',
      'Nobody is sure how the current network is configured',
    ],
  },
]

// Sectors we focus on. Describes typical needs — not claims of past clients.
export const industries = [
  {
    slug: 'healthcare',
    icon: 'health',
    title: 'Healthcare & Pharmaceutical',
    summary:
      'Systems for clinics, hospitals, laboratories, pharmacies and pharmaceutical distributors where accuracy, traceability and patient-data protection are non-negotiable.',
    needs: [
      'Patient, laboratory and pharmacy management',
      'Pharmaceutical inventory, batch and expiry tracking',
      'Insurance and claims integrations',
      'Data protection for health records',
    ],
    services: ['business-systems-engineering', 'api-systems-integration', 'cybersecurity'],
  },
  {
    slug: 'regulatory',
    icon: 'regulatory',
    title: 'Regulatory & Professional Institutions',
    summary:
      'Platforms for regulators, licensing bodies and professional associations managing registrations, compliance, examinations and member records at scale.',
    needs: [
      'Licensing, registration and renewal portals',
      'Member, examination and CPD management',
      'Compliance tracking and inspections',
      'Secure records and document management',
    ],
    services: ['business-systems-engineering', 'ai-workflow-automation', 'web-development'],
  },
  {
    slug: 'ngos',
    icon: 'ngo',
    title: 'NGOs & Development Organisations',
    summary:
      'Programme, grant and beneficiary systems that give donors and leadership reliable data, across field offices with uneven connectivity.',
    needs: [
      'Programme and beneficiary management',
      'Grant, donor and M&E reporting',
      'Field data collection and synchronisation',
      'Automated donor-ready reporting',
    ],
    services: ['business-systems-engineering', 'ai-workflow-automation', 'cloud-devops'],
  },
  {
    slug: 'retail-distribution',
    icon: 'retail',
    title: 'Retail & Distribution',
    summary:
      'Inventory, order and distribution systems that connect warehouses, branches, sales teams and payments into one live operational picture.',
    needs: [
      'Inventory, warehouse and stock control',
      'Order, route and distributor management',
      'M-Pesa, POS and accounting integrations',
      'Sales and margin dashboards',
    ],
    services: ['business-systems-engineering', 'api-systems-integration', 'ai-workflow-automation'],
  },
  {
    slug: 'enterprise',
    icon: 'enterprise',
    title: 'Medium & Large Enterprises',
    summary:
      'Custom systems, integrations and infrastructure for organisations that have outgrown spreadsheets and generic software, and need technology that scales with them.',
    needs: [
      'ERP and departmental systems',
      'Integration of existing platforms',
      'Cloud migration and DevOps',
      'Security architecture and assessments',
    ],
    services: ['business-systems-engineering', 'cloud-devops', 'cybersecurity'],
  },
]

// Engineering capabilities shown on the homepage.
export const capabilities = [
  {
    title: 'Domain modelling',
    description: 'We map how your organisation actually works — roles, rules, approvals, exceptions — before designing a single screen.',
  },
  {
    title: 'Secure by design',
    description: 'Role-based access, audit trails and data protection are designed in from the start, not added before launch.',
  },
  {
    title: 'Integration-first',
    description: 'Every system we build exposes clean APIs, so it connects to payments, accounting, partners and future tools.',
  },
  {
    title: 'Built to be operated',
    description: 'Containerised, monitored and documented, with automated deployments and tested backups.',
  },
]

export const principles = [
  {
    title: 'Engineering, not templates',
    description:
      'Every system is designed around the organisation that will use it. We start from your processes and data, not from a product we need to sell.',
  },
  {
    title: 'Security is part of the build',
    description:
      'We also assess systems for weaknesses, so security informs architecture, access control and data handling from the first design decision.',
  },
  {
    title: 'One accountable team',
    description:
      'Software, integration, cloud, security and infrastructure under one roof — one point of accountability from design to operation.',
  },
  {
    title: 'Clear communication',
    description:
      'Written scopes, staged delivery and plain-language reporting. You always know what is being built, why, what it costs and what comes next.',
  },
]

export const processSteps = [
  {
    title: 'Discover',
    description: 'We study your operations, systems and goals, and agree what success looks like before proposing anything.',
  },
  {
    title: 'Architect',
    description: 'You receive a written scope: system design, data model, integrations, security approach, timeline and cost.',
  },
  {
    title: 'Engineer',
    description: 'We build in short, reviewable stages, with automated testing and security checks throughout.',
  },
  {
    title: 'Operate & evolve',
    description: 'We deploy, train your team, hand over documentation and stay on to support and extend the system.',
  },
]

export const techStack = [
  { group: 'Application', items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'React Native'] },
  { group: 'Data', items: ['PostgreSQL', 'Supabase', 'Redis', 'GraphQL'] },
  { group: 'AI', items: ['Claude', 'OpenAI', 'Document AI', 'Vector search'] },
  { group: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'] },
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
//   tags: ['Business Systems'],
//   image_url: '/work/project.jpg',
//   challenge: '…', approach: '…', solution: '…',
//   technologies: ['React'],
//   result: 'Only measured, verifiable results.',
//   link_url: 'https://…',
// }
export const projects = []

// Representative solution types shown on the Projects page while there are no
// published case studies. These describe what we build, not past clients.
export const solutionBlueprints = [
  {
    title: 'Pharmaceutical distribution platform',
    industry: 'Healthcare & Pharmaceutical',
    description: 'Batch and expiry-aware inventory, order management, distributor portals and M-Pesa reconciliation in one system.',
    modules: ['Inventory', 'Orders', 'Payments', 'Dashboards'],
  },
  {
    title: 'Licensing & registration portal',
    industry: 'Regulatory & Professional',
    description: 'Online applications, renewals, document verification, fee payment and a public register, with an internal review workflow.',
    modules: ['Portal', 'Workflow', 'Payments', 'Records'],
  },
  {
    title: 'Programme & M&E information system',
    industry: 'NGOs & Development',
    description: 'Beneficiary records, offline field data capture, indicator tracking and automated donor reporting.',
    modules: ['Beneficiaries', 'Field sync', 'Indicators', 'Reporting'],
  },
  {
    title: 'AI document-processing pipeline',
    industry: 'Cross-industry',
    description: 'Invoices, claims or applications read automatically, validated against business rules and routed for human approval.',
    modules: ['Extraction', 'Validation', 'Approval', 'Audit'],
  },
]

// Options for the contact form "Subject" field.
export const enquirySubjects = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'general', label: 'General enquiry' },
]
