import { Star, MessageSquareQuote } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import type { TestimonialItem } from '@/types'

export function TestimonialsSection() {
  const testimonials: TestimonialItem[] = [
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
  ]

  return (
    <section id="testimonials" aria-label="Client Testimonials" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="amber">
          <MessageSquareQuote className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Client Voices</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)]">
          Trusted by Innovative Leaders
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-2xl">
          Hear directly from product leaders who partnered with us to craft their next-generation digital products.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <Card
            key={t.id}
            as="article"
            aria-label={`Testimonial from ${t.name}, ${t.role} at ${t.company}`}
            className="m3-card relative flex flex-col justify-between p-8 border-[var(--md-sys-color-outline-variant)]"
          >
            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className="w-4 h-4 fill-[#fae387] text-[#fae387]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm sm:text-base text-[var(--md-sys-color-on-surface)] leading-relaxed italic font-normal">
                "{t.quote}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[var(--md-sys-color-outline-variant)]">
              <Avatar
                src={t.avatar}
                alt={`Photo of ${t.name}`}
                className="w-12 h-12 border-2 border-[var(--md-sys-color-primary-container)]"
              />
              <div>
                <h3 className="font-bold text-sm text-[var(--md-sys-color-on-surface)]">
                  {t.name}
                </h3>
                <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                  {t.role} · <span className="font-semibold text-[var(--md-sys-color-primary)]">{t.company}</span>
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
