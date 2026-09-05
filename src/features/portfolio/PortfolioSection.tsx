import { motion } from 'framer-motion'
import { Layers, ArrowUpRight, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { portfolioProjectsData } from '@/features/portfolio/portfolio.data'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.2, 0, 0, 1] as [number, number, number, number],
    },
  }),
}

const springTransition = {
  type: 'spring',
  stiffness: 280,
  damping: 22,
} as const

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-label="Selected Case Studies"
      className="scroll-mt-28 py-12"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center space-y-3 text-center">
        <Badge variant="tertiary">
          <Layers className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Selected Case Studies</span>
        </Badge>
        <h2 className="text-3xl font-extrabold tracking-tight text-(--md-sys-color-on-surface) sm:text-5xl">
          Proven Engineering at Scale
        </h2>
        <p className="max-w-2xl text-base text-(--md-sys-color-on-surface-variant) sm:text-lg">
          Explore how our Material 3 design and modern reactive architecture
          solve complex problems for market leaders.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {portfolioProjectsData.map((proj, i) => (
          <motion.div
            key={proj.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
          >
            <Card
              as="article"
              aria-label={`Case Study: ${proj.title}`}
              className="m3-card group relative flex h-full flex-col justify-between border-(--md-sys-color-outline-variant) p-8"
            >
              <div className="space-y-6">
                {/* Header category and arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-(--md-sys-color-primary) uppercase">
                    {proj.category}
                  </span>
                  <motion.div
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-(--md-sys-color-surface-container-high) text-(--md-sys-color-primary)"
                    whileHover={{ rotate: 45, scale: 1.15 }}
                    transition={springTransition}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-(--md-sys-color-on-surface) transition-colors group-hover:text-(--md-sys-color-primary)">
                    {proj.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-normal text-(--md-sys-color-on-surface-variant)">
                    {proj.description}
                  </p>
                </div>

                {/* Metric Highlight Box */}
                <div
                  className={`${proj.tonalClass} flex items-center justify-between rounded-2xl p-4 shadow-inner`}
                >
                  <div>
                    <div className="text-2xl font-black tracking-tight">
                      {proj.metric}
                    </div>
                    <div className="text-xs font-semibold tracking-wider uppercase opacity-90">
                      {proj.metricLabel}
                    </div>
                  </div>
                  <TrendingUp
                    className="h-6 w-6 opacity-60"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 border-t border-(--md-sys-color-outline-variant) pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-full bg-(--md-sys-color-surface-container-high) px-2.5 py-1 text-xs font-medium text-(--md-sys-color-on-surface-variant)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
