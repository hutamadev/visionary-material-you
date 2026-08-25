import { useState, type FormEvent } from 'react'
import { Sparkles, CheckCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function CtaSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section id="contact-cta" aria-label="Call to Action" className="py-12">
      <div className="relative rounded-[2.5rem] bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] p-8 sm:p-14 lg:p-20 overflow-hidden shadow-xl border border-[var(--md-sys-color-outline-variant)]/40">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--md-sys-color-secondary-container)] rounded-full blur-3xl opacity-40 pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--md-sys-color-tertiary-container)] rounded-full blur-3xl opacity-30 pointer-events-none -z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--md-sys-color-surface)]/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Ready for Next-Level Web?</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Let’s Engineer Something Extraordinary Together.
            </h2>
            <p className="text-base sm:text-lg opacity-90 max-w-xl mx-auto leading-relaxed">
              Partner with our team to elevate your digital products with Google Material You 3 aesthetics and reactive performance.
            </p>
          </div>

          {/* Quick Submit Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <label htmlFor="cta-email" className="sr-only">
              Work Email Address
            </label>
            <Input
              id="cta-email"
              name="email"
              type="email"
              autoComplete="email"
              aria-label="Work email address"
              placeholder="Enter your work email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[var(--md-sys-color-surface)]/80 text-[var(--md-sys-color-on-surface)] border-transparent focus-visible:border-[var(--md-sys-color-primary)] placeholder:text-[var(--md-sys-color-on-surface-variant)] shadow-sm"
            />
            <Button
              type="submit"
              variant="default"
              className="whitespace-nowrap gap-2 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-md hover:scale-105"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Received!</span>
                </>
              ) : (
                <>
                  <span>Consult Now</span>
                  <Send className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </Button>
          </form>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs opacity-85 font-medium pt-4">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              <span>Complimentary Architecture Audit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              <span>24-Hour Sprint Kickoff</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              <span>Zero Vendor Lock-in</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
