import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-(--md-sys-color-primary) focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-(--md-sys-color-primary) text-(--md-sys-color-on-primary) shadow-sm hover:opacity-90 hover:shadow-md',
        tonal:
          'bg-(--md-sys-color-primary-container) text-(--md-sys-color-on-primary-container) hover:brightness-105',
        secondary:
          'bg-(--md-sys-color-secondary-container) text-(--md-sys-color-on-secondary-container) hover:brightness-105',
        outlined:
          'border border-(--md-sys-color-outline) bg-transparent text-(--md-sys-color-primary) hover:bg-(--md-sys-color-surface-container-high)',
        ghost:
          'text-(--md-sys-color-on-surface) hover:bg-(--md-sys-color-surface-container-high)',
        surface:
          'border border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container) text-(--md-sys-color-primary) hover:bg-(--md-sys-color-surface-container-high)',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        default: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
        icon: 'h-10 w-10 rounded-full p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
