import ScrollReveal from './ScrollReveal'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="section-padding bg-neutral-900/50">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="heading-2 text-center mb-16">What Clients Say</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1} direction="up">
              <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 sm:p-8">
                <p className="text-body mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-sm text-neutral-400">{testimonial.role}</p>
                  )}
                  {testimonial.company && (
                    <p className="text-sm text-neutral-500">{testimonial.company}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
