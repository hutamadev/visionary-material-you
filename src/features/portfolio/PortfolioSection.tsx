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
    <section id="portfolio" aria-label="Selected Case Studies" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="tertiary">
          <Layers className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Selected Case Studies</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-(--md-sys-color-on-surface)">
          Proven Engineering at Scale
        </h2>
        <p className="text-base sm:text-lg text-(--md-sys-color-on-surface-variant) max-w-2xl">
          Explore how our Material 3 design and modern reactive architecture solve complex problems for market leaders.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {portfolioProjectsData.map((proj, i) => (
          <motion.div
            key={proj.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
            className="will-change-transform"
          >
            <Card
              as="article"
              aria-label={`Case Study: ${proj.title}`}
              className="m3-card group relative flex flex-col justify-between h-full p-8 border-(--md-sys-color-outline-variant)"
            >
              <div className="space-y-6">
                {/* Header category and arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-(--md-sys-color-primary)">
                    {proj.category}
                  </span>
                  <motion.div
                    className="w-9 h-9 rounded-full bg-(--md-sys-color-surface-container-high) flex items-center justify-center text-(--md-sys-color-primary)"
                    whileHover={{ rotate: 45, scale: 1.15 }}
                    transition={springTransition}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-(--md-sys-color-on-surface) group-hover:text-(--md-sys-color-primary) transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-(--md-sys-color-on-surface-variant) leading-relaxed font-normal">
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
              <div className="pt-6 mt-6 border-t border-(--md-sys-color-outline-variant)">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-(--md-sys-color-surface-container-high) text-(--md-sys-color-on-surface-variant)"
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
