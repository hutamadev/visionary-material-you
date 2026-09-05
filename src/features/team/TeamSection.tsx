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
      <div className="mb-16 flex flex-col items-center space-y-3 text-center">
        <Badge variant="rose">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Core Team</span>
        </Badge>
        <h2 className="text-3xl font-extrabold tracking-tight text-(--md-sys-color-on-surface) sm:text-5xl">
          The Minds Behind the Vision
        </h2>
        <p className="max-w-2xl text-base text-(--md-sys-color-on-surface-variant) sm:text-lg">
          A multidisciplinary squad of engineers, designers, and systems
          architects dedicated to craftsmanship and innovation.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          >
            <Card
              as="article"
              aria-label={`Team Member: ${member.name}, ${member.role}`}
              className="m3-card flex h-full flex-col items-center justify-between border-(--md-sys-color-outline-variant) p-7 text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Avatar with tonal background container */}
                <motion.div
                  className={`h-24 w-24 rounded-full ${member.badgeColor} flex items-center justify-center p-1 shadow-md`}
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={avatarSpring}
                  aria-hidden="true"
                >
                  <Avatar
                    src={member.avatar}
                    alt={`Portrait of ${member.name}`}
                    className="h-full w-full border-2 border-(--md-sys-color-surface)"
                  />
                </motion.div>

                <div>
                  <h3 className="text-lg font-bold text-(--md-sys-color-on-surface)">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-(--md-sys-color-primary)">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs leading-relaxed font-normal text-(--md-sys-color-on-surface-variant)">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex w-full items-center justify-center gap-2.5 border-t border-(--md-sys-color-outline-variant) pt-6">
                <motion.a
                  href={member.social.github ?? '#'}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-(--md-sys-color-surface-container-high) text-(--md-sys-color-on-surface-variant)"
                  whileHover={{
                    scale: 1.2,
                    color: 'var(--md-sys-color-primary)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={avatarSpring}
                  aria-label={`${member.name}'s GitHub profile`}
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href={member.social.linkedin ?? '#'}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-(--md-sys-color-surface-container-high) text-(--md-sys-color-on-surface-variant)"
                  whileHover={{
                    scale: 1.2,
                    color: 'var(--md-sys-color-primary)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={avatarSpring}
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href={member.social.twitter ?? '#'}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-(--md-sys-color-surface-container-high) text-(--md-sys-color-on-surface-variant)"
                  whileHover={{
                    scale: 1.2,
                    color: 'var(--md-sys-color-primary)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={avatarSpring}
                  aria-label={`Send direct message to ${member.name}`}
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </motion.a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
