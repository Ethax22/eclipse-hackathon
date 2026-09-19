'use client'

import React, { useEffect, useRef } from 'react'

interface StarfieldProps {
  className?: string
  starCount?: number
  parallaxFactor?: number
}

export function StarfieldBackground({
  className = '',
  starCount = 140,
  parallaxFactor = 35,
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Motion refs (no React state per-frame)
  const normalizedMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const offsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Pointer move tracking for normalized mouse position (-1 to 1)
    const handlePointerMove = (e: PointerEvent) => {
      if (mediaQuery.matches) return
      const rect = canvas.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1

      normalizedMouseRef.current = { x: normX, y: normY }
    }

    window.addEventListener('pointermove', handlePointerMove)

    // Generate random stars
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: (Math.random() - 0.5) * 0.015,
      color: Math.random() > 0.4 ? '#ffffff' : Math.random() > 0.5 ? '#F89B88' : '#A5B4FC',
      depth: Math.random() * 0.8 + 0.2, // Parallax depth factor
    }))

    let lastTimestamp = performance.now()

    const render = (now: number) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.05)
      lastTimestamp = now

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Ease particle group offset toward -mouse * parallaxFactor
      if (!mediaQuery.matches) {
        const targetX = -normalizedMouseRef.current.x * parallaxFactor
        const targetY = -normalizedMouseRef.current.y * parallaxFactor

        // Smooth easing with 1 - exp(-dt * 6)
        const alpha = 1 - Math.exp(-dt * 6)
        offsetRef.current.x += (targetX - offsetRef.current.x) * alpha
        offsetRef.current.y += (targetY - offsetRef.current.y) * alpha
      } else {
        offsetRef.current = { x: 0, y: 0 }
      }

      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed
        if (star.alpha <= 0.2 || star.alpha >= 0.95) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        // Apply depth-weighted parallax offset
        const drawX = (star.x + offsetRef.current.x * star.depth + canvas.width) % canvas.width
        const drawY = (star.y + offsetRef.current.y * star.depth + canvas.height) % canvas.height

        ctx.save()
        ctx.globalAlpha = star.alpha
        ctx.fillStyle = star.color
        ctx.shadowBlur = star.radius > 1 ? 6 : 0
        ctx.shadowColor = star.color
        ctx.beginPath()
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationFrameId.current = requestAnimationFrame(render)
    }

    animationFrameId.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [starCount, parallaxFactor])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 opacity-80 ${className}`}
    />
  )
}
