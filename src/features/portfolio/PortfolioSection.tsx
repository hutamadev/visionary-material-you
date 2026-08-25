import { Layers, ArrowUpRight, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import type { ProjectItem } from '@/types'

export function PortfolioSection() {
  const projects: ProjectItem[] = [
    {
      id: 'p1',
      title: 'Nexus Enterprise Banking Core',
      client: 'Global FinTech Corp',
      category: 'Financial Infrastructure',
      description: 'A modular, high-security banking dashboard built with Material You 3 design guidelines and micro-frontend architecture.',
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
      description: 'End-to-end patient telemetry and secure video consultation portal with adaptive dark/light accessibility modes.',
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
      description: 'Real-time supply chain mapping with interactive Three.js 3D globe routing and automated dispatch intelligence.',
      tags: ['Three.js', 'AI Agents', 'GraphQL', 'Edge Workers'],
      metric: '3.8M+',
      metricLabel: 'Daily Operations',
      tonalClass: 'm3-tonal-peach',
    },
  ]

  return (
    <section id="portfolio" aria-label="Selected Case Studies" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="tertiary">
          <Layers className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Selected Case Studies</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)]">
          Proven Engineering at Scale
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-2xl">
          Explore how our Material 3 design and modern reactive architecture solve complex problems for market leaders.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <Card
            key={proj.id}
            as="article"
            aria-label={`Case Study: ${proj.title}`}
            className="m3-card group relative flex flex-col justify-between p-8 border-[var(--md-sys-color-outline-variant)]"
          >
            <div className="space-y-6">
              {/* Header category and arrow */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                  {proj.category}
                </span>
                <div className="w-9 h-9 rounded-full bg-[var(--md-sys-color-surface-container-high)] flex items-center justify-center text-[var(--md-sys-color-primary)] group-hover:scale-110 transition-transform" aria-hidden="true">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
                  {proj.description}
                </p>
              </div>

              {/* Metric Highlight Box */}
              <div className={`${proj.tonalClass} rounded-2xl p-4 flex items-center justify-between shadow-inner`}>
                <div>
                  <div className="text-2xl font-black tracking-tight">{proj.metric}</div>
                  <div className="text-[11px] uppercase tracking-wider opacity-80 font-semibold">
                    {proj.metricLabel}
                  </div>
                </div>
                <TrendingUp className="w-6 h-6 opacity-60" aria-hidden="true" />
              </div>
            </div>

            {/* Tags */}
            <div className="pt-6 mt-6 border-t border-[var(--md-sys-color-outline-variant)]">
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
