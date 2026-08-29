import { motion } from 'framer-motion'
import { Users, Globe, ExternalLink, Mail } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { teamMembersData } from '@/features/team/team.data'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.09,
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

const avatarSpring = {
  type: 'spring',
  stiffness: 350,
  damping: 18,
} as const

export function TeamSection() {
  return (
    <section id="team" aria-label="Core Team" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="rose">
          <Users className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Core Team</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-(--md-sys-color-on-surface)">
          The Minds Behind the Vision
        </h2>
        <p className="text-base sm:text-lg text-(--md-sys-color-on-surface-variant) max-w-2xl">
          A multidisciplinary squad of engineers, designers, and systems architects dedicated to craftsmanship and innovation.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembersData.map((member, i) => (
          <motion.div
            key={member.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ scale: 1.04, y: -8 }}
            whileTap={{ scale: 0.97 }}
            transition={springTransition}
            className="will-change-transform"
          >
            <Card
              as="article"
              aria-label={`Team Member: ${member.name}, ${member.role}`}
              className="m3-card text-center p-7 flex flex-col justify-between items-center h-full border-(--md-sys-color-outline-variant)"
            >
              <div className="space-y-4 flex flex-col items-center">
                {/* Avatar with tonal background container */}
                <motion.div
                  className={`w-24 h-24 rounded-full ${member.badgeColor} p-1 shadow-md flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={avatarSpring}
                  aria-hidden="true"
                >
                  <Avatar
                    src={member.avatar}
                    alt={`Portrait of ${member.name}`}
                    className="w-full h-full border-2 border-(--md-sys-color-surface)"
                  />
                </motion.div>

                <div>
                  <h3 className="text-lg font-bold text-(--md-sys-color-on-surface)">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-(--md-sys-color-primary) mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-(--md-sys-color-on-surface-variant) leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-2.5 pt-6 mt-6 border-t border-(--md-sys-color-outline-variant) w-full">
                <motion.a
                  href={member.social.github ?? '#'}
                  className="w-8 h-8 rounded-full bg-(--md-sys-color-surface-container-high) flex items-center justify-center text-(--md-sys-color-on-surface-variant)"
                  whileHover={{ scale: 1.2, color: 'var(--md-sys-color-primary)' }}
                  whileTap={{ scale: 0.9 }}
                  transition={avatarSpring}
                  aria-label={`${member.name}'s GitHub profile`}
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href={member.social.linkedin ?? '#'}
                  className="w-8 h-8 rounded-full bg-(--md-sys-color-surface-container-high) flex items-center justify-center text-(--md-sys-color-on-surface-variant)"
                  whileHover={{ scale: 1.2, color: 'var(--md-sys-color-primary)' }}
                  whileTap={{ scale: 0.9 }}
                  transition={avatarSpring}
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href={member.social.twitter ?? '#'}
                  className="w-8 h-8 rounded-full bg-(--md-sys-color-surface-container-high) flex items-center justify-center text-(--md-sys-color-on-surface-variant)"
                  whileHover={{ scale: 1.2, color: 'var(--md-sys-color-primary)' }}
                  whileTap={{ scale: 0.9 }}
                  transition={avatarSpring}
                  aria-label={`Send direct message to ${member.name}`}
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
