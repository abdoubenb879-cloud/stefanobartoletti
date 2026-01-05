export interface Experiment {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  preview?: string
}

export const experiments: Experiment[] = [
  {
    id: '1',
    title: 'Interactive 3D Navigation',
    description: 'Exploring WebGL-based navigation patterns for immersive web experiences.',
    tags: ['WebGL', 'Three.js', 'Interaction Design'],
    link: 'https://example.com/experiment1',
  },
  {
    id: '2',
    title: 'Micro-interaction Library',
    description: 'A collection of reusable micro-interactions for modern web interfaces.',
    tags: ['Animation', 'CSS', 'JavaScript'],
    link: 'https://example.com/experiment2',
  },
  {
    id: '3',
    title: 'Performance Optimization Techniques',
    description: 'Research and implementation of advanced performance optimization strategies.',
    tags: ['Performance', 'Web Vitals', 'Optimization'],
    link: 'https://example.com/experiment3',
  },
  {
    id: '4',
    title: 'Accessibility Patterns',
    description: 'Building accessible components that work for everyone.',
    tags: ['Accessibility', 'A11y', 'Inclusive Design'],
    link: 'https://example.com/experiment4',
  },
]
