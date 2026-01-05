# Itqan Web — Portfolio Website

A premium portfolio website for Itqan Web, built with Next.js, TypeScript, and Tailwind CSS. This site features a modern design system, smooth animations, and a particle background effect.

## Features

- **Modern Design System**: Custom design tokens, typography, and component library
- **Particle Background**: Animated particle/snow effect with performance optimization
- **Smooth Animations**: Scroll reveals, hover interactions, and micro-animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Accessible**: Keyboard navigation, ARIA labels, focus states, and form validation
- **Performance**: Lazy loading, optimized images, minimal JavaScript footprint

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home/About page
│   ├── work/              # Work pages
│   ├── experiments/       # Experiments page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ParticleBackground.tsx
│   ├── ScrollReveal.tsx
│   ├── NumberedCard.tsx
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   └── SmoothScroll.tsx
├── data/                  # Content data files
│   ├── site.ts           # Site configuration
│   ├── projects.ts       # Projects data
│   ├── experiments.ts    # Experiments data
│   └── testimonials.ts   # Testimonials data
└── public/               # Static assets
```

## Content Management

All content is managed through TypeScript files in the `data/` directory:

### Updating Site Information

Edit `data/site.ts` to update:
- Brand information
- Contact details
- Social links
- Services
- Culture/hobbies
- About section
- Hero content

### Adding/Editing Projects

Edit `data/projects.ts` to add or modify projects. Each project includes:
- Title, description, year
- Tags and services
- Client information
- Engagement narrative
- Gallery images
- External links

### Managing Testimonials

Edit `data/testimonials.ts` to add or update client testimonials.

### Adding Experiments

Edit `data/experiments.ts` to add new experiments or resources.

## Customization

### Design Tokens

Design tokens are defined in:
- `tailwind.config.ts` - Colors, spacing, typography
- `app/globals.css` - Component styles and utilities

### Colors

The color palette uses a neutral gray scale with primary blue accents. Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* ... */ },
  neutral: { /* ... */ },
}
```

### Typography

Fonts are configured in `app/layout.tsx` and `app/globals.css`. The site uses Inter by default.

## Building for Production

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Make sure to set the following environment variables if needed:
- `NEXT_PUBLIC_SITE_URL` (optional, for absolute URLs)

## SEO Configuration

- Update `app/layout.tsx` with your actual site URL
- Update `app/sitemap.ts` with your domain
- Update `app/robots.ts` with your domain
- Add Open Graph images in `public/` and reference them in metadata

## Accessibility

The site includes:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Form validation with error messages
- Respects `prefers-reduced-motion`

## Performance Optimization

- Images are optimized with Next.js Image component
- Lazy loading for below-the-fold content
- Minimal JavaScript bundle
- Particle effect respects reduced motion preferences
- Static generation for most pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For questions or issues, contact: hello@itqanweb.com
