import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-full border border-[var(--md-sys-color-outline)] bg-[var(--md-sys-color-surface-container)] px-5 py-3 text-sm text-[var(--md-sys-color-on-surface)] transition-all placeholder:text-[var(--md-sys-color-on-surface-variant)] focus-visible:outline-none focus-visible:border-[var(--md-sys-color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-primary-container)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
