import * as React from 'react'
import { cn } from '@/lib/utils'

export type CardVariant = 'filled' | 'elevated' | 'outlined'
export type CardTag = 'div' | 'article' | 'section' | 'li'

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  readonly variant?: CardVariant
  readonly as?: CardTag
}

export const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ className, variant = 'filled', as = 'div', ...props }, ref) => {
    const variantStyles: Record<CardVariant, string> = {
      filled:
        'bg-(--md-sys-color-surface-container) border border-(--md-sys-color-outline-variant)',
      elevated:
        'bg-(--md-sys-color-surface-container-high) shadow-lg shadow-(--md-sys-color-shadow) border border-transparent',
      outlined: 'bg-transparent border border-(--md-sys-color-outline-variant)',
    }

    const Tag = as

    return React.createElement(Tag, {
      ref,
      className: cn(
        'rounded-3xl p-6 text-(--md-sys-color-on-surface) transition-all duration-300 sm:p-8',
        variantStyles[variant],
        className
      ),
      ...props,
    })
  }
)
Card.displayName = 'Card'

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-4 flex flex-col space-y-2', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-xl font-bold tracking-tight text-(--md-sys-color-on-surface)',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-sm leading-relaxed text-(--md-sys-color-on-surface-variant)',
      className
    )}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-4', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'
