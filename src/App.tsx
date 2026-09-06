import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { useTrackSectionView } from '@/hooks/useTrackSectionView'
import { MainLayout } from '@/layouts/MainLayout'
import { StarfieldBackground } from '@/components/StarfieldBackground'
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
  className: 'm3-section-container transform-gpu',
}

export default function App() {
  const { isDark } = useTheme()

  // Section view tracking refs
  const aboutRef = useTrackSectionView('about')
  const servicesRef = useTrackSectionView('services')
  const workflowRef = useTrackSectionView('workflow')
  const portfolioRef = useTrackSectionView('portfolio')
  const testimonialsRef = useTrackSectionView('testimonials')
  const teamRef = useTrackSectionView('team')
  const ctaRef = useTrackSectionView('contact-cta')

  return (
    <MainLayout>
      {/* Global Starfield Overlay — fixed on top of everything, pointer-events: none */}
      <StarfieldBackground isDark={isDark} />

      <HeroSection isDark={isDark} />

      <div className="relative mx-auto max-w-6xl space-y-20 px-4 pb-12 sm:space-y-32 sm:px-6">
        <motion.div ref={aboutRef} {...sectionMotionProps}>
          <AboutSection />
        </motion.div>

        <motion.div ref={servicesRef} {...sectionMotionProps}>
          <ServicesSection />
        </motion.div>

        <motion.div ref={workflowRef} {...sectionMotionProps}>
          <WorkflowSection />
        </motion.div>

        <motion.div ref={portfolioRef} {...sectionMotionProps}>
          <PortfolioSection />
        </motion.div>

        <motion.div ref={testimonialsRef} {...sectionMotionProps}>
          <TestimonialsSection />
        </motion.div>

        <motion.div ref={teamRef} {...sectionMotionProps}>
          <TeamSection />
        </motion.div>

        <motion.div ref={ctaRef} {...sectionMotionProps}>
          <CtaSection />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <FooterSection />
        </motion.div>
      </div>
    </MainLayout>
  )
}
