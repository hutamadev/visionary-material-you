import { useRef, lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Code2,
  Layers,
  Cpu,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { scrollToTarget } from '@/hooks/useSmoothScroll'

// Lazy-load Three.js 3D Globe to optimize initial bundle and improve Core Web Vitals
const HeroGlobe = lazy(() =>
  import('@/features/hero/HeroGlobe').then((mod) => ({
    default: mod.HeroGlobe,
  }))
)

function HeroGlobeFallback() {
  return (
    <div
      className="pointer-events-none flex h-full w-full items-center justify-center"
      aria-hidden="true"
    >
      <div className="h-72 w-72 animate-pulse rounded-full bg-(--md-sys-color-primary-container)/20 blur-2xl sm:h-96 sm:w-96" />
    </div>
  )
}

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
    scrollToTarget(id)
  }

  return (
    <section
      ref={containerRef}
      id="home"
      aria-label="Hero Introduction"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Dynamic Hardware-Accelerated Parallax Background Glows */}
      <motion.div
        style={{
          y: glowPrimaryY,
          background:
            'radial-gradient(circle, var(--md-sys-color-primary-container) 0%, transparent 70%)',
        }}
        className="pointer-events-none absolute top-1/4 -right-20 -z-10 h-96 w-96 transform-gpu rounded-full opacity-40"
      />
      <motion.div
        style={{
          y: glowTertiaryY,
          background:
            'radial-gradient(circle, var(--md-sys-color-tertiary-container) 0%, transparent 70%)',
        }}
        className="pointer-events-none absolute bottom-10 left-10 -z-10 h-80 w-80 transform-gpu rounded-full opacity-30"
      />

      {/* 3D Three.js Canvas Container with Parallax Elevation */}
      <motion.div
        style={{ y: globeY, scale: globeScale, opacity: globeOpacity }}
        className="pointer-events-auto absolute inset-0 z-0"
      >
        <Suspense fallback={<HeroGlobeFallback />}>
          <HeroGlobe isDark={isDark} />
        </Suspense>
      </motion.div>

      {/* Hero Content with Smooth Spring-based Motion & Parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        <div className="space-y-8 text-left lg:w-7/12">
          {/* Top Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="flex flex-wrap items-center gap-2"
          >
            <Badge variant="primary" className="shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Material You 3 Google</span>
            </Badge>
            <Badge variant="sky" className="hidden sm:inline-flex">
              <Cpu className="h-3.5 w-3.5" />
              <span>Visionary Web Architecture</span>
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="space-y-4"
          >
            <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-(--md-sys-color-on-surface) sm:text-6xl lg:text-7xl">
              Sculpting <br />
              <span className="inline-block text-(--md-sys-color-primary)">
                Modern Digital
              </span>{' '}
              <br />
              Experiences.
            </h1>
            <p className="max-w-xl text-base leading-relaxed font-normal text-(--md-sys-color-on-surface-variant) sm:text-lg lg:text-xl">
              We fuse Google Material You 3 ergonomics with high-performance
              reactive engineering to deliver digital solutions that captivate,
              scale, and endure.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center"
          >
            <Button
              size="lg"
              variant="default"
              onClick={() => scrollTo('contact')}
              className="gap-2.5 shadow-(--md-sys-color-primary)/25 shadow-md hover:shadow-lg"
            >
              <span>Initiate Project</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="surface"
              onClick={() => scrollTo('portfolio')}
              className="gap-2"
            >
              <Layers className="h-4 w-4" />
              <span>Explore Works</span>
            </Button>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="grid grid-cols-3 gap-4 border-t border-(--md-sys-color-outline-variant) pt-8 sm:gap-8"
          >
            <div>
              <div className="text-2xl font-extrabold text-(--md-sys-color-primary) sm:text-3xl">
                12+
              </div>
              <div className="text-xs font-medium text-(--md-sys-color-on-surface-variant) sm:text-sm">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-(--md-sys-color-primary) sm:text-3xl">
                140+
              </div>
              <div className="text-xs font-medium text-(--md-sys-color-on-surface-variant) sm:text-sm">
                Shipped Systems
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-(--md-sys-color-primary) sm:text-3xl">
                99.98%
              </div>
              <div className="text-xs font-medium text-(--md-sys-color-on-surface-variant) sm:text-sm">
                Uptime SLA
              </div>
            </div>
          </motion.div>

          {/* Feature Highlights Ticker */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-(--md-sys-color-on-surface-variant)">
            <div className="flex items-center gap-1.5">
              <Code2 className="h-4 w-4 text-(--md-sys-color-primary)" />
              <span>Type-Safe React 19</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-(--md-sys-color-primary)" />
              <span>ISO & SOC2 Ready</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
