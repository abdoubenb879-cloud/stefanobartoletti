import { projects } from '@/data/projects'
import ScrollReveal from '@/components/ScrollReveal'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Work — Itqan Web',
  description: 'Explore our portfolio of premium web projects and digital solutions.',
}

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="heading-1 mb-6">Our Work</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body max-w-2xl">
              A selection of projects that showcase our expertise in web design, development, and digital strategy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project List */}
      <section className="section-padding bg-neutral-900/50">
        <div className="container-custom">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1} direction="up">
                <Link
                  href={`/work/${project.slug}`}
                  className="block group bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 sm:p-8 hover:border-primary-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary-500/50">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="heading-3 group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      <p className="text-body mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                        <span className="tag text-neutral-500">{project.year}</span>
                      </div>
                    </div>
                    <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                      →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection />
    </>
  )
}
