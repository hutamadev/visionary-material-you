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
    <section
      id="services"
      aria-label="Core Capabilities"
      className="scroll-mt-28 py-12"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center space-y-3 text-center">
        <Badge variant="sky">
          <Palette className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Core Capabilities</span>
        </Badge>
        <h2 className="text-3xl font-extrabold tracking-tight text-(--md-sys-color-on-surface) sm:text-5xl">
          End-to-End Digital Solutions
        </h2>
        <p className="max-w-2xl text-base text-(--md-sys-color-on-surface-variant) sm:text-lg">
          From architectural design to full-scale deployment, we engineer
          software products with uncompromising quality and Material You 3
          aesthetics.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={springTransition}
            >
              <Card
                as="article"
                aria-label={service.title}
                className="m3-card group relative flex h-full cursor-pointer flex-col justify-between p-8"
              >
                {/* Card Header & Icon */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className={`h-14 w-14 rounded-2xl ${service.tonalClass} flex items-center justify-center shadow-sm`}
                      whileHover={{ scale: 1.12, rotate: -6 }}
                      transition={springTransition}
                      aria-hidden="true"
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <motion.div
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-(--md-sys-color-surface-container-high)"
                      initial={{ opacity: 0, x: 6 }}
                      whileHover={{ opacity: 1, x: 0, rotate: 45 }}
                      transition={springTransition}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="h-4 w-4 text-(--md-sys-color-primary)" />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-(--md-sys-color-on-surface) transition-colors group-hover:text-(--md-sys-color-primary)">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-normal text-(--md-sys-color-on-surface-variant)">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mt-6 border-t border-(--md-sys-color-outline-variant) pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="rounded-full bg-(--md-sys-color-surface-container-high) px-2.5 py-1 text-[11px] font-medium text-(--md-sys-color-on-surface-variant)"
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
