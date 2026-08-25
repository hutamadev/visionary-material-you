import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    variant?: 'filled' | 'elevated' | 'outlined'
    as?: 'div' | 'article' | 'section' | 'li'
  }
>(({ className, variant = 'filled', as = 'div', ...props }, ref) => {
  const variantStyles = {
    filled: "bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)]",
    elevated: "bg-[var(--md-sys-color-surface-container-high)] shadow-lg shadow-[var(--md-sys-color-shadow)] border border-transparent",
    outlined: "bg-transparent border border-[var(--md-sys-color-outline-variant)]",
  }

  const Component = as as 'div'

  return (
    <Component
      ref={ref as any}
      className={cn(
        "rounded-3xl p-6 sm:p-8 transition-all duration-300 text-[var(--md-sys-color-on-surface)]",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 mb-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-bold tracking-tight text-[var(--md-sys-color-on-surface)]",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
