import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTASection({
  title = "Let's Build Something Great",
  description = "Ready to start your project? Get in touch and let's discuss how we can help.",
  buttonText = "Start a Project",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900/20 to-neutral-900 border-y border-neutral-800">
      <div className="container-custom text-center">
        <ScrollReveal>
          <h2 className="heading-2 mb-6">{title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-body max-w-2xl mx-auto mb-8">{description}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link href={buttonHref} className="btn-primary inline-block">
            {buttonText}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
