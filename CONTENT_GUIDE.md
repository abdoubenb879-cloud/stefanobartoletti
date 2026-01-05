# Content Update Guide

This guide explains how to update content throughout the Itqan Web website.

## Quick Content Updates

### Site Information (`data/site.ts`)

Update brand information, contact details, and site-wide content:

```typescript
// Update contact information
export const contactInfo = {
  email: 'your-email@example.com',
  phone: '+1 (555) 123-4567',
}

// Update social links
export const socialLinks = {
  instagram: 'https://instagram.com/yourhandle',
  telegram: 'https://t.me/yourhandle',
  twitter: 'https://twitter.com/yourhandle',
}

// Update hero section
export const hero = {
  headline: 'Your headline here',
  subheadline: 'Your subheadline here',
  cta: 'Start a Project',
}

// Update about section
export const about = {
  story: 'Your agency story...',
  location: 'Your Location',
  availability: 'Available for new projects',
}

// Update culture/hobbies (must be exactly 4 items)
export const culture = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]
```

### Adding a New Project (`data/projects.ts`)

Add a new project object to the `projects` array:

```typescript
{
  id: 'unique-id',
  slug: 'project-url-slug', // Used in URL: /work/project-url-slug
  title: 'Project Title',
  year: '2024',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  description: 'Brief project description',
  client: 'Client Name', // Optional
  scope: ['Scope Item 1', 'Scope Item 2'],
  services: ['Service 1', 'Service 2'],
  engagement: 'Detailed narrative about the project engagement...',
  externalLink: 'https://example.com', // Optional
  heroImage: '/projects/hero-image.jpg', // Optional
  gallery: [
    { image: '/projects/image1.jpg', caption: 'Caption 1' },
    { image: '/projects/image2.jpg', caption: 'Caption 2' },
  ],
}
```

**Important**: 
- The `slug` must be URL-friendly (lowercase, hyphens, no spaces)
- Add images to the `public/projects/` directory
- Use relative paths starting with `/projects/`

### Adding a Testimonial (`data/testimonials.ts`)

Add a new testimonial object:

```typescript
{
  id: 'unique-id',
  quote: 'Client testimonial quote...',
  name: 'Client Name',
  role: 'Client Role', // Optional
  company: 'Company Name', // Optional
}
```

### Adding an Experiment (`data/experiments.ts`)

Add a new experiment object:

```typescript
{
  id: 'unique-id',
  title: 'Experiment Title',
  description: 'Brief description of the experiment',
  tags: ['Tag 1', 'Tag 2'],
  link: 'https://example.com/experiment', // Optional
  preview: '/experiments/preview.jpg', // Optional
}
```

## Adding Images

1. **Project Images**: Add to `public/projects/`
   - Hero images: `project-slug-hero.jpg`
   - Gallery images: `project-slug-1.jpg`, `project-slug-2.jpg`, etc.

2. **Team/Founder Image**: Add to `public/` and update the placeholder in `app/page.tsx`

3. **Logo**: Add to `public/` and update the Header component if needed

## Updating Services

Edit the `services` array in `data/site.ts`:

```typescript
export const services = [
  'Service 1',
  'Service 2',
  'Service 3',
  // Add more services
]
```

## SEO Updates

1. **Site URL**: Update in `app/layout.tsx`:
   ```typescript
   metadataBase: new URL('https://yourdomain.com'),
   ```

2. **Sitemap**: Update in `app/sitemap.ts`:
   ```typescript
   const baseUrl = 'https://yourdomain.com'
   ```

3. **Robots.txt**: Update in `app/robots.ts`:
   ```typescript
   sitemap: 'https://yourdomain.com/sitemap.xml',
   ```

## After Making Changes

1. Save the file
2. The development server will automatically reload
3. Check the browser to see your changes
4. For production, rebuild: `npm run build`

## Tips

- Keep descriptions concise and engaging
- Use consistent tag naming across projects
- Ensure all image paths are correct
- Test links before deploying
- Keep the culture list at exactly 4 items for layout consistency
