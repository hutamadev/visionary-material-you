import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { MainLayout } from '@/layouts/MainLayout'
import { HeroSection } from '@/features/hero/HeroSection'
import { AboutSection } from '@/features/about/AboutSection'
import { ServicesSection } from '@/features/services/ServicesSection'
import { WorkflowSection } from '@/features/workflow/WorkflowSection'
import { PortfolioSection } from '@/features/portfolio/PortfolioSection'
import { TestimonialsSection } from '@/features/testimonials/TestimonialsSection'
import { TeamSection } from '@/features/team/TeamSection'
import { CtaSection } from '@/features/cta/CtaSection'
import { FooterSection } from '@/features/footer/FooterSection'

const sectionMotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] as const },
  className: 'm3-section-container will-change-transform transform-gpu',
}

export default function App() {
  const { isDark, toggleTheme } = useTheme()
  const { scrollYProgress } = useScroll()

  // Deep spatial ambient glow parallax shifts
  const bgOrb1Y = useTransform(scrollYProgress, [0, 1], ['0px', '400px'])
  const bgOrb2Y = useTransform(scrollYProgress, [0, 1], ['0px', '-300px'])

  return (
    <MainLayout isDark={isDark} onToggleTheme={toggleTheme}>
      {/* Hardware-Accelerated Dynamic Ambient Background Parallax Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 contain-strict">
        <motion.div
          style={{
            y: bgOrb1Y,
            background: 'radial-gradient(circle, var(--md-sys-color-primary-container) 0%, transparent 70%)',
          }}
          className="absolute top-1/3 -left-32 w-[32rem] h-[32rem] rounded-full opacity-35 will-change-transform transform-gpu"
        />
        <motion.div
          style={{
            y: bgOrb2Y,
            background: 'radial-gradient(circle, var(--md-sys-color-tertiary-container) 0%, transparent 70%)',
          }}
          className="absolute top-2/3 -right-32 w-[30rem] h-[30rem] rounded-full opacity-30 will-change-transform transform-gpu"
        />
      </div>

      <HeroSection isDark={isDark} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 space-y-20 sm:space-y-32 relative">
        <motion.div {...sectionMotionProps}>
          <AboutSection />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <ServicesSection />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <WorkflowSection />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <PortfolioSection />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <TestimonialsSection />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <TeamSection />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <CtaSection />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <FooterSection />
        </motion.div>
      </div>
    </MainLayout>
  )
}