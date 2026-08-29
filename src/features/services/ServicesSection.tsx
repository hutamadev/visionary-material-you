import { motion } from 'framer-motion'
import { Palette, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { servicesData } from '@/features/services/services.data'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
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

export function ServicesSection() {
  return (
    <section id="services" aria-label="Core Capabilities" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="sky">
          <Palette className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Core Capabilities</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-(--md-sys-color-on-surface)">
          End-to-End Digital Solutions
        </h2>
        <p className="text-base sm:text-lg text-(--md-sys-color-on-surface-variant) max-w-2xl">
          From architectural design to full-scale deployment, we engineer software products with uncompromising quality and Material You 3 aesthetics.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {servicesData.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.id}
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
                aria-label={service.title}
                className="m3-card group relative flex flex-col justify-between h-full p-8 cursor-pointer overflow-hidden"
              >
                {/* Card Header & Icon */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl ${service.tonalClass} flex items-center justify-center shadow-sm`}
                      whileHover={{ scale: 1.12, rotate: -6 }}
                      transition={springTransition}
                      aria-hidden="true"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-(--md-sys-color-surface-container-high) flex items-center justify-center"
                      initial={{ opacity: 0, x: 6 }}
                      whileHover={{ opacity: 1, x: 0, rotate: 45 }}
                      transition={springTransition}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="w-4 h-4 text-(--md-sys-color-primary)" />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-(--md-sys-color-on-surface) group-hover:text-(--md-sys-color-primary) transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-(--md-sys-color-on-surface-variant) leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-6 mt-6 border-t border-(--md-sys-color-outline-variant)">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-(--md-sys-color-surface-container-high) text-(--md-sys-color-on-surface-variant)"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
