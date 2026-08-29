import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

/**
 * Programmatically and smoothly scroll to any target selector or element
 * using the global Lenis instance, with automatic fallback to native smooth scroll.
 */
export function scrollToTarget(
  target: string | HTMLElement | number,
  options?: { offset?: number; duration?: number }
): void {
  if (typeof window === 'undefined') return

  const offset = options?.offset ?? 0
  const duration = options?.duration ?? 1.0

  if (target === 'home' || target === '#home' || target === 0) {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { duration })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  if (lenisInstance) {
    const formattedTarget =
      typeof target === 'string' && !target.startsWith('#')
        ? `#${target}`
        : target

    lenisInstance.scrollTo(formattedTarget, {
      offset,
      duration,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    return
  }

  // Native fallback if Lenis is not mounted
  const targetId =
    typeof target === 'string'
      ? target.replace(/^#/, '')
      : target instanceof HTMLElement
        ? target.id
        : ''
  const el =
    typeof target === 'string'
      ? document.getElementById(targetId)
      : target instanceof HTMLElement
        ? target
        : null

  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/**
 * useSmoothScroll - Initializes Lenis for physics-based fluid smooth scrolling
 * across the entire application, adhering to Material You 3 smooth motion standards.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false,
    })

    lenisInstance = lenis

    // Sync Lenis scroll position → framer-motion useScroll
    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      document.documentElement.scrollTop = scroll
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
