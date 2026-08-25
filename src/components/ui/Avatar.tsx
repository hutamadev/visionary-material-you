import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
}

export function Avatar({ className, src, alt = "Avatar", fallback, ...props }: AvatarProps) {
  const [hasError, setHasError] = React.useState(false)

  return (
    <div
      className={cn(
        "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[var(--md-sys-color-surface-container-high)] bg-[var(--md-sys-color-secondary-container)]",
        className
      )}
      {...props}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-semibold text-xs text-[var(--md-sys-color-on-secondary-container)]">
          {fallback || alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  )
}
