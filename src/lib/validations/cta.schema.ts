import { z } from 'zod'

export const ctaEmailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid work email address' })
    .max(255, { message: 'Email address is too long' }),
})

export type CtaEmailFormValues = z.infer<typeof ctaEmailSchema>
