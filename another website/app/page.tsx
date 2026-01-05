import { hero, about, culture, proofPoints, services, socialLinks } from '@/data/site'
import { projects } from '@/data/projects'
import ScrollReveal from '@/components/ScrollReveal'
import NumberedCard from '@/components/NumberedCard'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-32">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h1 className="heading-1 mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
              {hero.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body max-w-3xl mx-auto mb-8">
              {hero.subheadline}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {proofPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-500">{point.value}</div>
                  <div className="text-sm text-neutral-400 mt-1">{point.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a href="/contact" className="btn-primary inline-block">
              {hero.cta}
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-neutral-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="heading-2 mb-6">About Itqan Web</h2>
                <p className="text-body mb-6">{about.story}</p>
                <div className="space-y-2 text-neutral-400">
                  <p>{about.location}</p>
                  <p>{about.availability}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="left">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700">
                {/* Placeholder for team/founder image */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                  <span className="text-sm">Team Image Placeholder</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Culture / Hobbies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-2 text-center mb-12">Our Culture</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 text-center hover:border-primary-500/50 transition-all duration-300">
                  <h3 className="font-semibold text-white mb-2">{item}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Online / Social Block */}
      <section className="section-padding bg-neutral-900/50">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="heading-3 mb-6">Online</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 text-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
                  aria-label="Instagram"
                >
                  📸 Instagram
                </a>
              )}
              {socialLinks.telegram && (
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 text-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
                  aria-label="Telegram"
                >
                  ✈️ Telegram
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 text-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
                  aria-label="Twitter"
                >
                  🐦 X (Twitter)
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-2 text-center mb-16">Featured Work</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <NumberedCard
                key={project.id}
                number={(index + 1).toString().padStart(2, '0')}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={`/work/${project.slug}`}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <ScrollReveal delay={0.4}>
              <a href="/work" className="btn-secondary">
                View All Work
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Collaboration CTA */}
      <CTASection />
    </>
  )
}
