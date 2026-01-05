'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface NumberedCardProps {
  number: string
  title: string
  description: string
  tags: string[]
  href?: string
  delay?: number
}

export default function NumberedCard({
  number,
  title,
  description,
  tags,
  href,
  delay = 0,
}: NumberedCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 sm:p-8 hover:border-primary-500/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl sm:text-5xl font-bold text-primary-500/30 group-hover:text-primary-500/50 transition-colors">
          {number}
        </span>
        {href && (
          <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        )}
      </div>
      <h3 className="heading-3 mb-3 text-white group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-body mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )

  return (
    <ScrollReveal delay={delay} direction="up">
      {href ? (
        <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl">
          {content}
        </Link>
      ) : (
        content
      )}
    </ScrollReveal>
  )
}
