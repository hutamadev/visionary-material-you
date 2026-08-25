import { Code2, Palette, Cloud, Bot, Cuboid, Smartphone, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Web Engineering',
      description: 'Modern, reactive single-page & multi-page applications built with React 19, TypeScript, and high-throughput backends.',
      badge: 'Engineering',
      tonalClass: 'm3-tonal-lavender',
      tags: ['React 19', 'TypeScript', 'Bun', 'REST / GraphQL'],
    },
    {
      icon: Palette,
      title: 'Material You 3 UI/UX Design',
      description: 'Dynamic color-theming systems, fluid typography, and accessible design tokens crafted in accordance with Google Material 3.',
      badge: 'Design System',
      tonalClass: 'm3-tonal-peach',
      tags: ['Material 3', 'Figma Tokens', 'WCAG AAA', 'Tailwind'],
    },
    {
      icon: Cuboid,
      title: '3D WebGL & Interactive Graphics',
      description: 'Immersive browser-based 3D animations and interactive particle systems powered by Three.js and custom GLSL shaders.',
      badge: 'Interactive 3D',
      tonalClass: 'm3-tonal-sky',
      tags: ['Three.js', 'WebGL', 'Shaders', 'Canvas 2D'],
    },
    {
      icon: Bot,
      title: 'AI Workflows & Autonomous Agents',
      description: 'Integration of LLMs, agentic task runners, knowledge item retrieval, and automated intelligence pipelines.',
      badge: 'AI & Data',
      tonalClass: 'm3-tonal-mint',
      tags: ['Agentic AI', 'Vector DB', 'Prompt Ops', 'Automation'],
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Automated CI/CD pipelines, container orchestration, and serverless architectures with 99.99% availability guarantees.',
      badge: 'Cloud Native',
      tonalClass: 'm3-tonal-amber',
      tags: ['Docker', 'AWS / GCP', 'Edge Network', 'Monitoring'],
    },
    {
      icon: Smartphone,
      title: 'Responsive & Cross-Platform Apps',
      description: 'Seamless experiences optimized across mobile phones, tablets, foldables, and ultra-wide desktop monitors.',
      badge: 'Multi-Device',
      tonalClass: 'm3-tonal-rose',
      tags: ['Progressive Web', 'Mobile-First', 'PWA', 'Touch Ergonomics'],
    },
  ]

  return (
    <section id="services" aria-label="Core Capabilities" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="sky">
          <Palette className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Core Capabilities</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)]">
          End-to-End Digital Solutions
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-2xl">
          From architectural design to full-scale deployment, we engineer software products with uncompromising quality and Material You 3 aesthetics.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card
              key={index}
              as="article"
              aria-label={service.title}
              className="m3-card group relative flex flex-col justify-between p-8 cursor-pointer overflow-hidden"
            >
              {/* Card Header & Icon */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl ${service.tonalClass} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[var(--md-sys-color-surface-container-high)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                    <ArrowUpRight className="w-4 h-4 text-[var(--md-sys-color-primary)]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="pt-6 mt-6 border-t border-[var(--md-sys-color-outline-variant)]">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface-variant)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
