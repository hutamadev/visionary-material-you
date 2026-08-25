import { Lightbulb, Cpu, GitFork, ShieldAlert } from 'lucide-react'
import type { WorkflowStep } from '@/types'

export const workflowStepsData: readonly WorkflowStep[] = [
  {
    number: '01',
    title: 'Discovery & System Blueprint',
    description:
      'We analyze your core business objectives, user journeys, and technical constraints to draft a rock-solid architectural blueprint.',
    icon: Lightbulb,
    tonal: 'm3-tonal-lavender',
  },
  {
    number: '02',
    title: 'Material 3 Design & Prototyping',
    description:
      'We construct full Figma-to-code design systems with Google Material You 3 tokens, dark/light harmonic palettes, and accessible components.',
    icon: Cpu,
    tonal: 'm3-tonal-mint',
  },
  {
    number: '03',
    title: 'Agile Reactive Engineering',
    description:
      'Iterative sprint delivery with React 19, strict TypeScript type checking, Three.js WebGL animations, and automated unit/e2e testing.',
    icon: GitFork,
    tonal: 'm3-tonal-sky',
  },
  {
    number: '04',
    title: 'Deployment & Telemetry',
    description:
      'Continuous delivery to global edge networks with real-time observability, automated error telemetry, and 99.98% uptime monitoring.',
    icon: ShieldAlert,
    tonal: 'm3-tonal-peach',
  },
] as const
