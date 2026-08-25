import { Users, Globe, ExternalLink, Mail } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import type { TeamMember } from '@/types'

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 'm1',
      name: 'Sarah Johnson',
      role: 'CEO & Principal Architect',
      bio: 'Former Google Material Design lead with 14+ years engineering distributed web architectures.',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah&backgroundColor=transparent',
      badgeColor: 'm3-tonal-rose',
      social: { github: '#', linkedin: '#', twitter: '#' },
    },
    {
      id: 'm2',
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'High-performance React & Three.js specialist passionate about WebGL shaders and real-time graphics.',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Michael&backgroundColor=transparent',
      badgeColor: 'm3-tonal-sky',
      social: { github: '#', linkedin: '#', twitter: '#' },
    },
    {
      id: 'm3',
      name: 'Emily Davis',
      role: 'Head of Material Design',
      bio: 'Design systems evangelist creating accessible, expressive token systems and intuitive micro-interactions.',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Emily&backgroundColor=transparent',
      badgeColor: 'm3-tonal-mint',
      social: { github: '#', linkedin: '#', twitter: '#' },
    },
    {
      id: 'm4',
      name: 'David Rodriguez',
      role: 'Staff Platform Engineer',
      bio: 'DevOps & cloud native architect orchestrating resilient Kubernetes pipelines and sub-second edge runtimes.',
      avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=David&backgroundColor=transparent',
      badgeColor: 'm3-tonal-peach',
      social: { github: '#', linkedin: '#', twitter: '#' },
    },
  ]

  return (
    <section id="team" aria-label="Core Team" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="rose">
          <Users className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Core Team</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)]">
          The Minds Behind the Vision
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-2xl">
          A multidisciplinary squad of engineers, designers, and systems architects dedicated to craftsmanship and innovation.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            as="article"
            aria-label={`Team Member: ${member.name}, ${member.role}`}
            className="m3-card text-center p-7 flex flex-col justify-between items-center border-[var(--md-sys-color-outline-variant)]"
          >
            <div className="space-y-4 flex flex-col items-center">
              {/* Avatar with tonal background container */}
              <div className={`w-24 h-24 rounded-full ${member.badgeColor} p-1 shadow-md flex items-center justify-center`} aria-hidden="true">
                <Avatar
                  src={member.avatar}
                  alt={`Portrait of ${member.name}`}
                  className="w-full h-full border-2 border-[var(--md-sys-color-surface)]"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[var(--md-sys-color-on-surface)]">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[var(--md-sys-color-primary)] mt-0.5">
                  {member.role}
                </p>
              </div>

              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
                {member.bio}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-2.5 pt-6 mt-6 border-t border-[var(--md-sys-color-outline-variant)] w-full">
              <a
                href={member.social.github}
                className="w-8 h-8 rounded-full bg-[var(--md-sys-color-surface-container-high)] flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] hover:scale-110 transition-all"
                aria-label={`${member.name}'s GitHub profile`}
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={member.social.linkedin}
                className="w-8 h-8 rounded-full bg-[var(--md-sys-color-surface-container-high)] flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] hover:scale-110 transition-all"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={member.social.twitter}
                className="w-8 h-8 rounded-full bg-[var(--md-sys-color-surface-container-high)] flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] hover:scale-110 transition-all"
                aria-label={`Send direct message to ${member.name}`}
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
