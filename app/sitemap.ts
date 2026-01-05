import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://itqanweb.com'

  const routes = [
    '',
    '/work',
    '/experiments',
    '/contact',
  ]

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...projectRoutes,
  ]
}
