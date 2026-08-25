import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-colors uppercase select-none",
  {
    variants: {
      variant: {
        primary: "bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]",
        secondary: "bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]",
        tertiary: "bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)]",
        mint: "m3-tonal-mint",
        sky: "m3-tonal-sky",
        peach: "m3-tonal-peach",
        rose: "m3-tonal-rose",
        amber: "m3-tonal-amber",
        outline: "border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface-variant)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
