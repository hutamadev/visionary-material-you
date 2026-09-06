import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[ErrorBoundary caught error]:', error, errorInfo)
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  public override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-(--md-sys-color-background) p-6 text-(--md-sys-color-on-background)">
          <div className="w-full max-w-md space-y-6 rounded-3xl border border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container) p-8 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-(--md-sys-color-error-container) text-(--md-sys-color-on-error-container) shadow-md">
              <AlertTriangle className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Something went wrong
              </h2>
              <p className="text-sm leading-relaxed text-(--md-sys-color-on-surface-variant)">
                An unexpected rendering error occurred in the application. Our
                telemetry has captured this event.
              </p>
            </div>

            <button
              onClick={this.handleReset}
              className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-(--md-sys-color-primary) text-sm font-semibold text-(--md-sys-color-on-primary) shadow-md transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-(--md-sys-color-primary) focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
