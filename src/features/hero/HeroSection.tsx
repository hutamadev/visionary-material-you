import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { HeroGlobe } from '@/features/hero/HeroGlobe'

interface HeroSectionProps {
  isDark: boolean
}

export function HeroSection({ isDark }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null)

  // Track scroll progress within the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Parallax transformations for layered depth (Material You 3 spatial hierarchy)
  const globeY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const globeOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25])

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2])

  const glowPrimaryY = useTransform(scrollYProgress, [0, 1], ['0px', '180px'])
  const glowTertiaryY = useTransform(scrollYProgress, [0, 1], ['0px', '-120px'])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="home"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Dynamic Hardware-Accelerated Parallax Background Glows */}
      <motion.div
        style={{
          y: glowPrimaryY,
          background: 'radial-gradient(circle, var(--md-sys-color-primary-container) 0%, transparent 70%)',
        }}
        className="absolute top-1/4 -right-20 w-96 h-96 rounded-full opacity-40 pointer-events-none -z-10 will-change-transform transform-gpu"
      />
      <motion.div
        style={{
          y: glowTertiaryY,
          background: 'radial-gradient(circle, var(--md-sys-color-tertiary-container) 0%, transparent 70%)',
        }}
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-30 pointer-events-none -z-10 will-change-transform transform-gpu"
      />

      {/* 3D Three.js Canvas Container with Parallax Elevation */}
      <motion.div
        style={{ y: globeY, scale: globeScale, opacity: globeOpacity }}
        className="absolute inset-0 z-0 pointer-events-auto will-change-transform"
      >
        <HeroGlobe isDark={isDark} />
      </motion.div>

      {/* Hero Content with Smooth Spring-based Motion & Parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 will-change-transform"
      >
        <div className="lg:w-7/12 text-left space-y-8">
          
          {/* Top Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="flex flex-wrap items-center gap-2"
          >
            <Badge variant="primary" className="shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Material You 3 Google</span>
            </Badge>
            <Badge variant="sky" className="hidden sm:inline-flex">
              <Cpu className="w-3.5 h-3.5" />
              <span>Vibecoding Architecture</span>
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)] leading-[1.08]">
              Sculpting <br />
              <span className="text-[var(--md-sys-color-primary)] inline-block">
                Modern Digital
              </span> <br />
              Experiences.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--md-sys-color-on-surface-variant)] max-w-xl leading-relaxed font-normal">
              We fuse Google Material You 3 ergonomics with high-performance reactive engineering to deliver digital solutions that captivate, scale, and endure.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <Button
              size="lg"
              variant="default"
              onClick={() => scrollTo('contact')}
              className="gap-2.5 shadow-md shadow-[var(--md-sys-color-primary)]/25 hover:shadow-lg"
            >
              <span>Initiate Project</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="surface"
              onClick={() => scrollTo('portfolio')}
              className="gap-2"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Works</span>
            </Button>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-[var(--md-sys-color-outline-variant)]"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--md-sys-color-primary)]">
                12+
              </div>
              <div className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] font-medium">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--md-sys-color-primary)]">
                140+
              </div>
              <div className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] font-medium">
                Shipped Systems
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--md-sys-color-primary)]">
                99.98%
              </div>
              <div className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] font-medium">
                Uptime SLA
              </div>
            </div>
          </motion.div>

          {/* Feature Highlights Ticker */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)]">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[var(--md-sys-color-primary)]" />
              <span>Type-Safe React 19</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--md-sys-color-primary)]" />
              <span>ISO & SOC2 Ready</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}
