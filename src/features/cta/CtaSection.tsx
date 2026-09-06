import { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, CheckCircle, Send, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ctaEmailSchema } from '@/lib/validations/cta.schema'
import { trackEvent } from '@/lib/analytics'

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
      const errorType = firstIssue?.message ?? 'validation_failed'
      setErrorMessage(errorType)
      trackEvent('cta_form_error', { error_type: errorType })
      return
    }

    setErrorMessage(null)
    setIsSubmitting(true)
    trackEvent('cta_form_submit', {
      email_domain: email.split('@')[1] ?? 'unknown',
    })

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
      <div className="relative overflow-hidden rounded-[2.5rem] border border-(--md-sys-color-outline-variant)/40 bg-(--md-sys-color-primary-container) p-8 text-(--md-sys-color-on-primary-container) shadow-xl sm:p-14 lg:p-20">
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute top-0 right-0 z-0 h-96 w-96 rounded-full bg-(--md-sys-color-secondary-container) opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-80 w-80 rounded-full bg-(--md-sys-color-tertiary-container) opacity-30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--md-sys-color-surface)/20 px-4 py-1.5 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Ready for Next-Level Web?</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
              Let’s Engineer Something Extraordinary Together.
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed opacity-90 sm:text-lg">
              Partner with our team to elevate your digital products with Google
              Material You 3 aesthetics and reactive performance.
            </p>
          </div>

          {/* Quick Submit Form with Zod Validation */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto max-w-md space-y-2"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
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
                className="border-transparent bg-(--md-sys-color-surface)/80 text-(--md-sys-color-on-surface) shadow-sm placeholder:text-(--md-sys-color-on-surface-variant) focus-visible:border-(--md-sys-color-primary) disabled:opacity-60"
              />
              <Button
                type="submit"
                variant="default"
                disabled={isSubmitting || submitted}
                className="min-w-35 justify-center gap-2 bg-(--md-sys-color-primary) whitespace-nowrap text-(--md-sys-color-on-primary) shadow-md hover:scale-105 disabled:opacity-75 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    <span>Processing...</span>
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Received!</span>
                  </>
                ) : (
                  <>
                    <span>Consult Now</span>
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>

            {errorMessage && (
              <p
                id="cta-email-error"
                role="alert"
                aria-live="assertive"
                className="flex items-center justify-center gap-1.5 pt-1 text-xs font-semibold text-rose-500 dark:text-rose-300"
              >
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{errorMessage}</span>
              </p>
            )}

            {/* Screen Reader Live Region for Form Status */}
            <div role="status" aria-live="polite" className="sr-only">
              {submitted ? 'Thank you. Your consultation request has been received. Our engineering team will contact you within 24 hours.' : ''}
            </div>

            {/* Visual Success Confirmation Banner */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-(--md-sys-color-outline-variant)/40 bg-(--md-sys-color-surface)/90 px-5 py-2.5 text-xs font-semibold text-(--md-sys-color-on-surface) shadow-sm backdrop-blur-md"
              >
                <CheckCircle className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <span>Inquiry received! We'll reply within 24 hours.</span>
              </motion.div>
            )}
          </form>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium opacity-85">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              <span>Complimentary Architecture Audit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              <span>24-Hour Sprint Kickoff</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              <span>Zero Vendor Lock-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
