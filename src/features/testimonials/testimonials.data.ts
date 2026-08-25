import type { TestimonialItem } from '@/types'

export const testimonialsData: readonly TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'Visionary transformed our enterprise dashboard into a breathtaking, snappy Material 3 interface. Our user satisfaction metrics increased by 65% in the first quarter alone.',
    name: 'Dr. Elena Rostova',
    role: 'VP of Product',
    company: 'Aura Health System',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Elena&backgroundColor=transparent',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'The Three.js 3D visualization and responsive reactive architecture delivered by the team exceeded all our performance expectations. Fast, stable, and truly visionary.',
    name: 'Marcus Vance',
    role: 'Chief Architect',
    company: 'Hyperion Freight AI',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Marcus&backgroundColor=transparent',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'Their mastery over Google Material You 3 and React 19 is second to none. They delivered our core banking suite two weeks ahead of schedule with zero defect regressions.',
    name: 'Sophia Lindqvist',
    role: 'Head of Engineering',
    company: 'Nexus FinTech Corp',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sophia&backgroundColor=transparent',
    rating: 5,
  },
] as const
