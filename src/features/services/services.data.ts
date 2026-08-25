import { Code2, Palette, Cloud, Bot, Cuboid, Smartphone } from 'lucide-react'
import type { ServiceItem } from '@/types'

export const servicesData: readonly ServiceItem[] = [
  {
    id: 's1',
    icon: Code2,
    title: 'Full-Stack Web Engineering',
    description:
      'Modern, reactive single-page & multi-page applications built with React 19, TypeScript, and high-throughput backends.',
    badge: 'Engineering',
    tonalClass: 'm3-tonal-lavender',
    tags: ['React 19', 'TypeScript', 'Bun', 'REST / GraphQL'],
  },
  {
    id: 's2',
    icon: Palette,
    title: 'Material You 3 UI/UX Design',
    description:
      'Dynamic color-theming systems, fluid typography, and accessible design tokens crafted in accordance with Google Material 3.',
    badge: 'Design System',
    tonalClass: 'm3-tonal-peach',
    tags: ['Material 3', 'Figma Tokens', 'WCAG AAA', 'Tailwind'],
  },
  {
    id: 's3',
    icon: Cuboid,
    title: '3D WebGL & Interactive Graphics',
    description:
      'Immersive browser-based 3D animations and interactive particle systems powered by Three.js and custom GLSL shaders.',
    badge: 'Interactive 3D',
    tonalClass: 'm3-tonal-sky',
    tags: ['Three.js', 'WebGL', 'Shaders', 'Canvas 2D'],
  },
  {
    id: 's4',
    icon: Bot,
    title: 'AI Workflows & Autonomous Agents',
    description:
      'Integration of LLMs, agentic task runners, knowledge item retrieval, and automated intelligence pipelines.',
    badge: 'AI & Data',
    tonalClass: 'm3-tonal-mint',
    tags: ['Agentic AI', 'Vector DB', 'Prompt Ops', 'Automation'],
  },
  {
    id: 's5',
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Automated CI/CD pipelines, container orchestration, and serverless architectures with 99.99% availability guarantees.',
    badge: 'Cloud Native',
    tonalClass: 'm3-tonal-amber',
    tags: ['Docker', 'AWS / GCP', 'Edge Network', 'Monitoring'],
  },
  {
    id: 's6',
    icon: Smartphone,
    title: 'Responsive & Cross-Platform Apps',
    description:
      'Seamless experiences optimized across mobile phones, tablets, foldables, and ultra-wide desktop monitors.',
    badge: 'Multi-Device',
    tonalClass: 'm3-tonal-rose',
    tags: ['Progressive Web', 'Mobile-First', 'PWA', 'Touch Ergonomics'],
  },
] as const
