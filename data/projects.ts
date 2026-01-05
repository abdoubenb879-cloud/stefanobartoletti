export interface Project {
  id: string
  slug: string
  title: string
  year: string
  tags: string[]
  description: string
  client?: string
  scope: string[]
  services: string[]
  heroImage?: string
  heroVideo?: string
  engagement: string
  externalLink?: string
  gallery?: {
    image?: string
    video?: string
    caption?: string
  }[]
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'premium-ecommerce-platform',
    title: 'Premium E-commerce Platform',
    year: '2024',
    tags: ['Web Design', 'Webflow', 'E-commerce'],
    description: 'A modern, high-performance e-commerce platform built with Webflow, featuring seamless checkout and inventory management.',
    client: 'Fashion Brand Co.',
    scope: ['Web Design', 'Development', 'CMS Setup', 'SEO'],
    services: ['Web Design', 'Webflow Development', 'SEO Optimization'],
    engagement: 'We partnered with Fashion Brand Co. to create a premium e-commerce experience that reflects their brand identity while maximizing conversion rates. The platform features intuitive navigation, fast load times, and a seamless mobile experience.',
    externalLink: 'https://example.com',
    gallery: [
      { image: '/projects/project1-1.jpg', caption: 'Homepage design' },
      { image: '/projects/project1-2.jpg', caption: 'Product page' },
      { image: '/projects/project1-3.jpg', caption: 'Checkout flow' },
    ],
  },
  {
    id: '2',
    slug: 'corporate-website-redesign',
    title: 'Corporate Website Redesign',
    year: '2024',
    tags: ['UI/UX', 'Framer', 'Branding'],
    description: 'Complete redesign of a corporate website with focus on user experience and brand storytelling.',
    client: 'Enterprise Solutions',
    scope: ['UI/UX Design', 'Development', 'Content Strategy'],
    services: ['UI/UX Design', 'Framer Development', 'Branding'],
    engagement: 'Enterprise Solutions needed a modern digital presence that communicates their expertise and values. We delivered a responsive, content-rich website that engages visitors and converts leads effectively.',
    externalLink: 'https://example.com',
    gallery: [
      { image: '/projects/project2-1.jpg', caption: 'Hero section' },
      { image: '/projects/project2-2.jpg', caption: 'Services overview' },
    ],
  },
  {
    id: '3',
    slug: 'startup-landing-page',
    title: 'Startup Landing Page',
    year: '2023',
    tags: ['Web Design', 'Webflow', 'Marketing'],
    description: 'High-converting landing page for a tech startup, optimized for lead generation and user engagement.',
    client: 'TechStart Inc.',
    scope: ['Web Design', 'Development', 'Conversion Optimization'],
    services: ['Web Design', 'Webflow Development', 'SEO Optimization'],
    engagement: 'TechStart Inc. required a compelling landing page that captures attention and drives sign-ups. We created a focused, conversion-optimized experience that highlights their unique value proposition.',
    externalLink: 'https://example.com',
    gallery: [
      { image: '/projects/project3-1.jpg', caption: 'Landing page hero' },
    ],
  },
]
