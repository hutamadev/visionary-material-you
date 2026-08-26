import { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import { Sparkles, CheckCircle, Send, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ctaEmailSchema } from '@/lib/validations/cta.schema'

export function CtaSection() {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
    if (errorMessage) {
      setErrorMessage(null)
    }
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (isSubmitting) return

    const validationResult = ctaEmailSchema.safeParse({ email })

    if (!validationResult.success) {
      const firstIssue = validationResult.error.issues[0]
      setErrorMessage(firstIssue?.message ?? 'Invalid email address')
      return
    }

    setErrorMessage(null)
    setIsSubmitting(true)

    // Simulate smooth asynchronous frontend submission feedback
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 4000)
    }, 600)
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

          {/* Quick Submit Form with Zod Validation */}
          <form onSubmit={handleSubmit} noValidate className="max-w-md mx-auto space-y-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="cta-email" className="sr-only">
                Work Email Address
              </label>
              <Input
                id="cta-email"
                name="email"
                type="email"
                autoComplete="email"
                aria-label="Work email address"
                aria-invalid={errorMessage !== null}
                aria-describedby={errorMessage ? 'cta-email-error' : undefined}
                placeholder="Enter your work email..."
                value={email}
                onChange={handleInputChange}
                disabled={isSubmitting || submitted}
                required
                className="bg-[var(--md-sys-color-surface)]/80 text-[var(--md-sys-color-on-surface)] border-transparent focus-visible:border-[var(--md-sys-color-primary)] placeholder:text-[var(--md-sys-color-on-surface-variant)] shadow-sm disabled:opacity-60"
              />
              <Button
                type="submit"
                variant="default"
                disabled={isSubmitting || submitted}
                className="whitespace-nowrap gap-2 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-md hover:scale-105 disabled:opacity-75 disabled:hover:scale-100 min-w-[140px] justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Processing...</span>
                  </>
                ) : submitted ? (
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
            </div>

            {errorMessage && (
              <p
                id="cta-email-error"
                role="alert"
                className="text-xs font-semibold text-rose-500 dark:text-rose-300 flex items-center justify-center gap-1.5 pt-1"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{errorMessage}</span>
              </p>
            )}
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
