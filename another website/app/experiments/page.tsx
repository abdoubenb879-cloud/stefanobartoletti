import { experiments } from '@/data/experiments'
import ScrollReveal from '@/components/ScrollReveal'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Experiments — Itqan Web',
  description: 'Explore our experiments, research, and creative explorations in web development.',
}

export default function ExperimentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="heading-1 mb-6">Experiments</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body max-w-2xl">
              A collection of experiments, research projects, and creative explorations in web development and design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Experiments List */}
      <section className="section-padding bg-neutral-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiments.map((experiment, index) => (
              <ScrollReveal key={experiment.id} delay={index * 0.1} direction="up">
                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 sm:p-8 hover:border-primary-500/50 transition-all duration-300">
                  <h3 className="heading-3 mb-3">{experiment.title}</h3>
                  <p className="text-body mb-4">{experiment.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experiment.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {experiment.link && (
                    <a
                      href={experiment.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
                    >
                      View Experiment →
                    </a>
                  )}
                </div>
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
