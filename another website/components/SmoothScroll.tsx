'use client'

import { useEffect, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) return

    // Simple smooth scroll implementation
    let rafId: number | null = null
    let targetScroll = window.scrollY
    let currentScroll = targetScroll

    const smoothScroll = () => {
      currentScroll += (targetScroll - currentScroll) * 0.1
      
      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        window.scrollTo(0, currentScroll)
        rafId = requestAnimationFrame(smoothScroll)
      } else {
        window.scrollTo(0, targetScroll)
      }
    }

    const handleScroll = () => {
      targetScroll = window.scrollY
      if (rafId === null) {
        rafId = requestAnimationFrame(smoothScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return <>{children}</>
}
