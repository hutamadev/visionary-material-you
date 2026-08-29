import { Star, MessageSquareQuote } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { testimonialsData } from '@/features/testimonials/testimonials.data'

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="scroll-mt-28 py-12"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center space-y-3 text-center">
        <Badge variant="amber">
          <MessageSquareQuote className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Client Voices</span>
        </Badge>
        <h2 className="text-3xl font-extrabold tracking-tight text-(--md-sys-color-on-surface) sm:text-5xl">
          Trusted by Innovative Leaders
        </h2>
        <p className="max-w-2xl text-base text-(--md-sys-color-on-surface-variant) sm:text-lg">
          Hear directly from product leaders who partnered with us to craft
          their next-generation digital products.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonialsData.map((t) => (
          <Card
            key={t.id}
            as="article"
            aria-label={`Testimonial from ${t.name}, ${t.role} at ${t.company}`}
            className="m3-card relative flex flex-col justify-between border-(--md-sys-color-outline-variant) p-8"
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
                    className="h-4 w-4 fill-[#fae387] text-[#fae387]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed font-normal text-(--md-sys-color-on-surface) italic sm:text-base">
                "{t.quote}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="mt-6 flex items-center gap-4 border-t border-(--md-sys-color-outline-variant) pt-6">
              <Avatar
                src={t.avatar}
                alt={`Photo of ${t.name}`}
                className="h-12 w-12 border-2 border-(--md-sys-color-primary-container)"
              />
              <div>
                <h3 className="text-sm font-bold text-(--md-sys-color-on-surface)">
                  {t.name}
                </h3>
                <p className="text-xs text-(--md-sys-color-on-surface-variant)">
                  {t.role} ·{' '}
                  <span className="font-semibold text-(--md-sys-color-primary)">
                    {t.company}
                  </span>
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
