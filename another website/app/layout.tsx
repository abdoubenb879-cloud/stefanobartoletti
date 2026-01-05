import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://itqanweb.com'),
  title: {
    default: 'Itqan Web — Premium Web Agency',
    template: '%s — Itqan Web',
  },
  description: 'Premium web agency specializing in web design, development, and digital solutions.',
  keywords: ['web agency', 'web design', 'webflow', 'framer', 'seo', 'branding', 'ui/ux', 'web development'],
  authors: [{ name: 'Itqan Web' }],
  creator: 'Itqan Web',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://itqanweb.com',
    siteName: 'Itqan Web',
    title: 'Itqan Web — Premium Web Agency',
    description: 'Premium web agency specializing in web design, development, and digital solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itqan Web — Premium Web Agency',
    description: 'Premium web agency specializing in web design, development, and digital solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-neutral-900 text-neutral-50`}>
        <SmoothScroll>
          <ParticleBackground />
          <Header />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
