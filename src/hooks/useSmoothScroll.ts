import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * useSmoothScroll - Initializes Lenis for physics-based fluid smooth scrolling
 * across the entire application, adhering to Material You 3 smooth motion standards.
 *
 * Fix 4a: Dispatches a native 'scroll' event on window every Lenis frame so that
 * framer-motion's `useScroll` reads the correct interpolated scroll position
 * (Lenis intercepts native scroll, which would otherwise break useScroll progress).
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false,
    })

    // Sync Lenis scroll position → framer-motion useScroll
    // By updating document.documentElement.scrollTop each Lenis tick,
    // framer-motion's scroll tracker reads the smooth (interpolated) value.
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
    }
  }, [])
}
