import type { ProjectItem } from '@/types'

export const portfolioProjectsData: readonly ProjectItem[] = [
  {
    id: 'p1',
    title: 'Nexus Enterprise Banking Core',
    client: 'Global FinTech Corp',
    category: 'Financial Infrastructure',
    description:
      'A modular, high-security banking dashboard built with Material You 3 design guidelines and micro-frontend architecture.',
    tags: ['React 19', 'TypeScript', 'Material 3', 'Tailwind', 'Docker'],
    metric: '+420%',
    metricLabel: 'Processing Velocity',
    tonalClass: 'm3-tonal-lavender',
  },
  {
    id: 'p2',
    title: 'Aura Telemedicine & Clinical Portal',
    client: 'Aura Health System',
    category: 'Digital Healthcare',
    description:
      'End-to-end patient telemetry and secure video consultation portal with adaptive dark/light accessibility modes.',
    tags: ['WebGL', 'WebRTC', 'HIPAA Ready', 'Bun Runtime'],
    metric: '99.99%',
    metricLabel: 'System Availability',
    tonalClass: 'm3-tonal-mint',
  },
  {
    id: 'p3',
    title: 'Hyperion Autonomous Logistics Engine',
    client: 'Hyperion Freight AI',
    category: 'Autonomous AI Systems',
    description:
      'Real-time supply chain mapping with interactive Three.js 3D globe routing and automated dispatch intelligence.',
    tags: ['Three.js', 'AI Agents', 'GraphQL', 'Edge Workers'],
    metric: '3.8M+',
    metricLabel: 'Daily Operations',
    tonalClass: 'm3-tonal-peach',
  },
] as const
