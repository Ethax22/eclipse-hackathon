'use client'

import React, { useEffect, useRef } from 'react'

interface Spark {
  x: number
  y: number
  angle: number
  startTime: number
}

interface ClickSparkProps {
  color?: string
  size?: number
  radius?: number
  count?: number
  duration?: number
  children?: React.ReactNode
  className?: string
}

export function ClickSpark({
  color = '#FFFFFF',
  size = 2,
  radius = 15,
  count = 8,
  duration = 400,
  children,
  className = '',
}: ClickSparkProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const sparksRef = useRef<Spark[]>([])
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Debounced ResizeObserver
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!container || !canvas) return
        const rect = container.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
      }, 100)
    }

    const observer = new ResizeObserver(handleResize)
    observer.observe(container)
    handleResize()

    // Reduced Motion Preference Check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Click handler
    const handleClick = (e: MouseEvent) => {
      if (mediaQuery.matches) return
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top
      const now = performance.now()

      const newSparks: Spark[] = []
      for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count
        newSparks.push({
          x: clickX,
          y: clickY,
          angle,
          startTime: now,
        })
      }

      sparksRef.current.push(...newSparks)
    }

    window.addEventListener('click', handleClick)

    // Animation Loop
    const loop = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (!mediaQuery.matches && sparksRef.current.length > 0) {
        sparksRef.current = sparksRef.current.filter((spark) => {
          const elapsed = now - spark.startTime
          if (elapsed >= duration) return false

          const t = Math.min(elapsed / duration, 1)
          const eased = t * (2 - t) // ease-out quadratic

          const startDist = eased * radius
          const lineLength = 10 * (1 - eased)

          const startX = spark.x + Math.cos(spark.angle) * startDist
          const startY = spark.y + Math.sin(spark.angle) * startDist
          const endX = spark.x + Math.cos(spark.angle) * (startDist + lineLength)
          const endY = spark.y + Math.sin(spark.angle) * (startDist + lineLength)

          ctx.save()
          ctx.beginPath()
          ctx.moveTo(startX, startY)
          ctx.lineTo(endX, endY)
          ctx.strokeStyle = color
          ctx.lineWidth = size
          ctx.lineCap = 'round'
          ctx.globalAlpha = 1 - t
          ctx.stroke()
          ctx.restore()

          return true
        })
      }

      animationFrameId.current = requestAnimationFrame(loop)
    }

    animationFrameId.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('click', handleClick)
      observer.disconnect()
      clearTimeout(resizeTimeout)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [color, size, radius, count, duration])

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[9999] w-full h-full"
      />
      {children}
    </div>
  )
}
