import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

/**
 * Tracks when a section enters the viewport (once per session).
 * Uses IntersectionObserver with 30% threshold.
 */
export function useTrackSectionView(sectionId: string) {
  const ref = useRef<HTMLDivElement>(null)
  const hasFired = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true
          trackEvent('section_view', { section_id: sectionId })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [sectionId])

  return ref
}
