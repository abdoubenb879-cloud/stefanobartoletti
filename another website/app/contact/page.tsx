'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { contactInfo } from '@/data/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    email: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to be contacted'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    // In production, replace this with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        website: '',
        email: '',
        message: '',
        consent: false,
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="heading-1 mb-6">Get in Touch</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body max-w-2xl">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-neutral-900/50">
        <div className="container-custom max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <ScrollReveal>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name <span className="text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Company */}
            <ScrollReveal delay={0.1}>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Company Name"
                />
              </div>
            </ScrollReveal>

            {/* Website */}
            <ScrollReveal delay={0.2}>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-neutral-300 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="https://example.com"
                />
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={0.3}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email <span className="text-primary-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Message */}
            <ScrollReveal delay={0.4}>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message <span className="text-primary-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Consent */}
            <ScrollReveal delay={0.5}>
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.consent ? 'true' : 'false'}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    className="mt-1 w-4 h-4 text-primary-600 bg-neutral-800 border-neutral-700 rounded focus:ring-2 focus:ring-primary-500"
                  />
                  <span className="text-sm text-neutral-300">
                    I consent to being contacted by Itqan Web regarding my inquiry.{' '}
                    <span className="text-primary-500">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Submit Button */}
            <ScrollReveal delay={0.6}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </ScrollReveal>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-900/50 border border-green-700 rounded-xl text-green-300" role="alert">
                Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-900/50 border border-red-700 rounded-xl text-red-300" role="alert">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-neutral-800">
            <ScrollReveal>
              <h3 className="heading-3 mb-6">Other Ways to Reach Us</h3>
            </ScrollReveal>
            <div className="space-y-4">
              {contactInfo.email && (
                <ScrollReveal delay={0.1}>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
                  >
                    <span className="text-2xl">📧</span>
                    <span>{contactInfo.email}</span>
                  </a>
                </ScrollReveal>
              )}
              {contactInfo.phone && (
                <ScrollReveal delay={0.2}>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
                  >
                    <span className="text-2xl">📱</span>
                    <span>{contactInfo.phone}</span>
                  </a>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
