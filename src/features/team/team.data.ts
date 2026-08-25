import type { TeamMember } from '@/types'

export const teamMembersData: readonly TeamMember[] = [
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
] as const
