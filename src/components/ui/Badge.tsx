import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide uppercase transition-colors select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-(--md-sys-color-primary-container) text-(--md-sys-color-on-primary-container)',
        secondary:
          'bg-(--md-sys-color-secondary-container) text-(--md-sys-color-on-secondary-container)',
        tertiary:
          'bg-(--md-sys-color-tertiary-container) text-(--md-sys-color-on-tertiary-container)',
        mint: 'm3-tonal-mint',
        sky: 'm3-tonal-sky',
        peach: 'm3-tonal-peach',
        rose: 'm3-tonal-rose',
        amber: 'm3-tonal-amber',
        outline:
          'border border-(--md-sys-color-outline-variant) text-(--md-sys-color-on-surface-variant)',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
