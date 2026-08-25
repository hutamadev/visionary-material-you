import { Users2, Rocket, Trophy } from 'lucide-react'
import type { AboutValue } from '@/types'

export const aboutValuesData: readonly AboutValue[] = [
  {
    icon: Users2,
    title: 'Human-Centric Material Design',
    description:
      'Every pixel is tuned to Google Material You 3 standards—accessible, expressive, and tailored to human tactile interaction.',
    tonalClass: 'm3-tonal-lavender',
    badge: 'Ergonomics',
  },
  {
    icon: Rocket,
    title: 'High-Velocity Scalability',
    description:
      'Engineered on cutting-edge stacks (React, TypeScript, Bun) ensuring sub-second response times and rock-solid reliability.',
    tonalClass: 'm3-tonal-mint',
    badge: 'Performance',
  },
  {
    icon: Trophy,
    title: 'Measurable Business Impact',
    description:
      'We measure our success by your growth. From seed-stage startups to Global 500 enterprises, our solutions drive tangible ROI.',
    tonalClass: 'm3-tonal-peach',
    badge: 'Success',
  },
] as const

export const aboutMilestonesData: readonly string[] = [
  'Strict Material 3 design tokens & responsive fluid typography',
  'High-performance 3D WebGL visualizations with Three.js',
  'Modular React 19 architecture with strict type safety',
  'Optimized build pipeline powered by Bun runtime',
] as const
