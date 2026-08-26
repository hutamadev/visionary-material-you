import { Star, MessageSquareQuote } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { testimonialsData } from '@/features/testimonials/testimonials.data'

export function TestimonialsSection() {
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
        {testimonialsData.map((t) => (
          <Card
            key={t.id}
            as="article"
            aria-label={`Testimonial from ${t.name}, ${t.role} at ${t.company}`}
            className="m3-card relative flex flex-col justify-between p-8 border-[var(--md-sys-color-outline-variant)]"
          >
            <div className="space-y-4">
              {/* Star Rating */}
              <div
                role="img"
                aria-label={`${t.rating} out of 5 stars`}
                className="flex items-center gap-1"
              >
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
