import { useEffect, useRef } from 'react'

interface StarfieldBackgroundProps {
  isDark: boolean
}

/**
 * StarfieldBackground — Lightweight Canvas 2D starfield for the global background.
 * Embedded as `position: absolute` inside the fixed background container in App.tsx.
 *
 * Fixes vs previous version:
 * - Uses `window.innerHeight` (not scrollHeight) — canvas is viewport-sized
 * - `absolute` (not `fixed`) — z-index inherited from parent fixed container
 * - Twinkle + slow drift per particle, Material You 3 color palette
 */
export function StarfieldBackground({ isDark }: StarfieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let isRunning = true

    const isMobile = window.innerWidth < 768
    const STAR_COUNT = isMobile ? 70 : 150

    interface Star {
      x: number
      y: number
      radius: number
      opacity: number
      speed: number
      angle: number
      twinkleSpeed: number
      twinklePhase: number
    }

    // Material You 3 palette-matched star colors
    const darkStarColors = [
      '#ccc2dc',
      '#d0bcff',
      '#efb8c8',
      '#938f99',
      '#e6e1e5',
    ]
    // Light theme: stronger mid-tone colors for visibility against #fdf8fd
    const lightStarColors = [
      '#7b5ea7',
      '#9678c2',
      '#b06a80',
      '#6e6490',
      '#8a72b5',
    ]

    const resize = () => {
      // Fixed/absolute canvas only needs viewport dimensions
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = (): Star[] =>
      Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + (isDark ? 0.4 : 0.7),
        opacity: Math.random() * 0.6 + (isDark ? 0.2 : 0.35),
        speed: Math.random() * 0.06 + 0.01,
        angle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.01 + 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
      }))

    resize()
    let stars = createStars()

    const handleResize = () => {
      resize()
      // Re-scatter stars to new viewport dimensions
      stars = createStars()
    }

    window.addEventListener('resize', handleResize, { passive: true })

    const colors = isDark ? darkStarColors : lightStarColors

    let frame = 0
    const render = () => {
      if (!isRunning || document.hidden) {
        animationId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      for (const star of stars) {
        // Twinkle via sine wave
        const twinkle =
          star.opacity +
          Math.sin(frame * star.twinkleSpeed + star.twinklePhase) *
            (star.opacity * 0.45)

        // Slow ambient drift
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        // Wrap around viewport edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        const colorIdx = Math.floor(star.x % colors.length)
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = colors[colorIdx]
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkle))
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      isRunning = false
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      style={{ opacity: isDark ? 0.5 : 0.55 }}
    />
  )
}
