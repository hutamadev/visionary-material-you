import { track } from '@vercel/analytics'

/**
 * Type-safe custom analytics event map.
 * Centralized abstraction — swap provider by editing only this file.
 */
interface AnalyticsEventMap {
  cta_form_submit: { email_domain: string }
  cta_form_error: { error_type: string }
  globe_interaction_start: Record<string, never>
  globe_interaction_duration: { duration_seconds: number }
  theme_toggle: { theme: 'light' | 'dark' | 'system' }
  section_view: { section_id: string }
}

/**
 * Track a custom analytics event with type-safe payload.
 * Wraps `@vercel/analytics` `track()` — no-op in development.
 */
export function trackEvent<K extends keyof AnalyticsEventMap>(
  event: K,
  data: AnalyticsEventMap[K]
): void {
  track(event, data)
}
