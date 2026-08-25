import { Sparkles, Users2, Rocket, Trophy, Compass, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function AboutSection() {
  const values = [
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
  ]

  const milestones = [
    'Strict Material 3 design tokens & responsive fluid typography',
    'High-performance 3D WebGL visualizations with Three.js',
    'Modular React 19 architecture with strict type safety',
    'Optimized build pipeline powered by Bun runtime',
  ]

  return (
    <section id="about" aria-label="About Visionary" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="primary">
          <Compass className="w-3.5 h-3.5" aria-hidden="true" />
          <span>About Visionary</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)]">
          Pioneering the Next Wave of Digital Craft
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-2xl">
          We combine Google's adaptive design philosophy with modern software engineering to create experiences that empower businesses worldwide.
        </p>
      </div>

      {/* Main Grid: Story + Pillars */}
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="space-y-6 p-8 border-[var(--md-sys-color-outline-variant)]">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
                Our Genesis
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--md-sys-color-on-surface)]">
                Built for builders, designed for humans.
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
              Founded in 2012, Visionary Tech Solutions emerged with a singular mandate: to bridge the gap between high-level architectural complexity and elegant, human-first visual design.
            </p>

            <p className="text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
              We leverage Material You 3 to bring harmonic tonal palettes, responsive layouts, and seamless micro-animations into production software at scale.
            </p>

            <div className="space-y-3 pt-2">
              {milestones.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[var(--md-sys-color-on-surface)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--md-sys-color-primary)] flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                variant="default"
                onClick={() => {
                  const el = document.getElementById('services')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="gap-2"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Explore Capabilities</span>
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column: 3 Pillar Cards */}
        <div className="lg:col-span-7 space-y-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <article
                key={i}
                aria-label={v.title}
                className={`${v.tonalClass} rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-black/10 dark:bg-white/15 flex items-center justify-center flex-shrink-0 shadow-inner" aria-hidden="true">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                        {v.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/10 dark:bg-white/15">
                        {v.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm opacity-90 leading-relaxed font-normal">
                      {v.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
