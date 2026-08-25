import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HeroGlobeProps {
  isDark: boolean
}

export function HeroGlobe({ isDark }: HeroGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentMount = mountRef.current
    if (!currentMount) return

    let isVisible = true

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'mediump',
    })

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    // Clamp to 1.5 to prevent GPU bottleneck on 3x/4x retina screens while maintaining crisp visuals
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    currentMount.appendChild(renderer.domElement)

    // Palette based on Material You 3 Theme
    const primaryColor = isDark ? 0xd0bcff : 0x6750a4
    const ringColor1 = isDark ? 0x4f378b : 0xeaddff
    const ringColor2 = isDark ? 0xefb8c8 : 0x7d5260
    const starColor = isDark ? 0xccc2dc : 0x938f99

    // 1. Dotted Globe (Optimized particle count for 60-120fps smooth performance)
    const count = 1200
    const positions = new Float32Array(count * 3)
    const radius = 3.6

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi)
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    const globeGeometry = new THREE.BufferGeometry()
    globeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const globeMaterial = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.055,
      transparent: true,
      opacity: isDark ? 0.95 : 0.8,
    })

    const globe = new THREE.Points(globeGeometry, globeMaterial)
    scene.add(globe)

    // 2. Futuristic Orbital Rings
    const ringsGroup = new THREE.Group()

    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.BufferGeometry()
      const points: THREE.Vector3[] = []
      const r = radius + 0.7 + i * 0.45
      const segments = 64

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2
        points.push(new THREE.Vector3(Math.cos(theta) * r, 0, Math.sin(theta) * r))
      }

      ringGeo.setFromPoints(points)
      const ringMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? ringColor1 : ringColor2,
        linewidth: 1.5,
        transparent: true,
        opacity: isDark ? 0.75 : 0.6,
      })

      const ring = new THREE.Line(ringGeo, ringMat)
      ring.rotation.x = Math.PI / 3.5 + (i * Math.PI) / 5
      ring.rotation.y = (i * Math.PI) / 4
      ringsGroup.add(ring)
    }
    scene.add(ringsGroup)

    // 3. Ambient Star Dust
    const starsCount = 120
    const starPositions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 20
      starPositions[i + 1] = (Math.random() - 0.5) * 15
      starPositions[i + 2] = (Math.random() - 0.5) * 15
    }
    const starsGeo = new THREE.BufferGeometry()
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const starsMat = new THREE.PointsMaterial({
      color: starColor,
      size: 0.035,
      transparent: true,
      opacity: 0.4,
    })
    const stars = new THREE.Points(starsGeo, starsMat)
    scene.add(stars)

    // Responsive Positioning
    const updatePositionByWidth = () => {
      const w = window.innerWidth
      if (w < 768) {
        globe.position.set(0, -0.5, 0)
        ringsGroup.position.set(0, -0.5, 0)
        camera.position.z = 12
      } else if (w < 1024) {
        globe.position.set(2, 0, 0)
        ringsGroup.position.set(2, 0, 0)
        camera.position.z = 10
      } else {
        globe.position.set(3.8, 0, 0)
        ringsGroup.position.set(3.8, 0, 0)
        camera.position.z = 9.5
      }
    }

    updatePositionByWidth()

    // Smooth subtle mouse interaction
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (event: MouseEvent) => {
      if (!isVisible) return
      const halfWidth = window.innerWidth / 2
      const halfHeight = window.innerHeight / 2
      mouseX = (event.clientX - halfWidth) / halfWidth
      mouseY = (event.clientY - halfHeight) / halfHeight
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Viewport Intersection Observer (pause rendering when scrolled out of view!)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    observer.observe(currentMount)

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Only perform heavy WebGL operations when in viewport
      if (!isVisible) return

      const elapsedTime = clock.getElapsedTime()

      targetX += (mouseX * 0.3 - targetX) * 0.05
      targetY += (mouseY * 0.3 - targetY) * 0.05

      // Smooth rotation with spring physics
      globe.rotation.y = elapsedTime * 0.15 + targetX
      globe.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 + targetY

      ringsGroup.rotation.y = -elapsedTime * 0.12 - targetX * 0.5
      ringsGroup.rotation.z = Math.cos(elapsedTime * 0.08) * 0.15 + targetY * 0.5

      stars.rotation.y = elapsedTime * 0.02

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!currentMount) return
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
      updatePositionByWidth()
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)

      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement)
      }

      globeGeometry.dispose()
      globeMaterial.dispose()
      starsGeo.dispose()
      starsMat.dispose()
      ringsGroup.children.forEach((child) => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose()
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose())
          } else {
            child.material.dispose()
          }
        }
      })
      renderer.dispose()
    }
  }, [isDark])

  return <div ref={mountRef} className="w-full h-full will-change-transform" />
}
