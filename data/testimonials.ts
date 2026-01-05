export interface Testimonial {
  id: string
  quote: string
  name: string
  role?: string
  company?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Itqan Web transformed our online presence. Their attention to detail and technical expertise is unmatched.',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
  },
  {
    id: '2',
    quote: 'Working with Itqan Web was a game-changer. They delivered beyond our expectations and continue to support us.',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Design Studio',
  },
  {
    id: '3',
    quote: 'Professional, creative, and results-driven. Itqan Web is our go-to partner for all digital projects.',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Global Brands',
  },
]
