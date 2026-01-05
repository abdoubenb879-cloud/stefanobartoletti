import Link from 'next/link'
import { socialLinks, contactInfo } from '@/data/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '/', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/experiments', label: 'Experiments' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialIcons: Record<string, string> = {
    email: '📧',
    phone: '📱',
    instagram: '📸',
    telegram: '✈️',
    twitter: '🐦',
  }

  return (
    <footer className="border-t border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Itqan Web</h3>
            <p className="text-neutral-400 text-sm">
              Premium web agency specializing in digital excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1"
                >
                  <span>{socialIcons.email}</span>
                  <span>{contactInfo.email}</span>
                </a>
              )}
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1"
                >
                  <span>{socialIcons.phone}</span>
                  <span>{contactInfo.phone}</span>
                </a>
              )}
            </div>
            <div className="flex gap-4 mt-4">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 text-xl focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                  aria-label="Instagram"
                >
                  {socialIcons.instagram}
                </a>
              )}
              {socialLinks.telegram && (
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 text-xl focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                  aria-label="Telegram"
                >
                  {socialIcons.telegram}
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 text-xl focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                  aria-label="Twitter"
                >
                  {socialIcons.twitter}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <p className="text-center text-neutral-500 text-sm">
            © {currentYear} Itqan Web. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
