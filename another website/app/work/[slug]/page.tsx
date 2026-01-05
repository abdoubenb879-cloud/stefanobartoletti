import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ScrollReveal from '@/components/ScrollReveal'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import Image from 'next/image'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found — Itqan Web',
    }
  }

  return {
    title: `${project.title} — Itqan Web`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="heading-1 mb-8">{project.title}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 mb-12">
              {project.heroImage ? (
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                  <span className="text-sm">Hero Image Placeholder</span>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Metadata */}
      <section className="section-padding bg-neutral-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Year
                </h3>
                <p className="text-white">{project.year}</p>
              </div>
            </ScrollReveal>
            {project.client && (
              <ScrollReveal delay={0.1}>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Client
                  </h3>
                  <p className="text-white">{project.client}</p>
                </div>
              </ScrollReveal>
            )}
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Scope
                </h3>
                <ul className="space-y-1">
                  {project.scope.map((item) => (
                    <li key={item} className="text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Engagement Narrative */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="heading-2 mb-6">The Engagement</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body">{project.engagement}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-neutral-900/50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-3 mb-6">Services Provided</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {project.services.map((service) => (
                <span key={service} className="tag text-base px-4 py-2">
                  {service}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* External Link */}
      {project.externalLink && (
        <section className="section-padding">
          <div className="container-custom text-center">
            <ScrollReveal>
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Visit Website →
              </a>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Media Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-padding bg-neutral-900/50">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="heading-3 mb-8">Gallery</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="up">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.caption || `Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                        <span className="text-sm">Image Placeholder</span>
                      </div>
                    )}
                  </div>
                  {item.caption && (
                    <p className="text-sm text-neutral-400 mt-2">{item.caption}</p>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Up Next Navigation */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevProject && (
              <ScrollReveal>
                <Link
                  href={`/work/${prevProject.slug}`}
                  className="block group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl hover:border-primary-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl"
                >
                  <p className="text-sm text-neutral-400 mb-2">Previous Project</p>
                  <h3 className="heading-3 group-hover:text-primary-400 transition-colors">
                    {prevProject.title}
                  </h3>
                </Link>
              </ScrollReveal>
            )}
            {nextProject && (
              <ScrollReveal delay={0.1}>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="block group p-6 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl hover:border-primary-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl text-right md:text-left"
                >
                  <p className="text-sm text-neutral-400 mb-2">Next Project</p>
                  <h3 className="heading-3 group-hover:text-primary-400 transition-colors">
                    {nextProject.title}
                  </h3>
                </Link>
              </ScrollReveal>
            )}
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
