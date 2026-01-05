'use client'

import { useRef, ReactNode, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={prefersReducedMotion ? { hidden: {}, visible: {} } : variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
