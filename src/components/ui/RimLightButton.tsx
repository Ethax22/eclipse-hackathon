'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface RimLightButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'peach' | 'violet' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
}

function smoothstep(min: number, max: number, value: number) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)))
  return x * x * (3 - 2 * x)
}

export function RimLightButton({
  variant = 'peach',
  size = 'md',
  href,
  children,
  className,
  ...props
}: RimLightButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Motion refs (no React state per-frame)
  const targetAngleRef = useRef<number>(0)
  const currentAngleRef = useRef<number>(0)
  const targetBrightnessRef = useRef<number>(0.2)
  const currentBrightnessRef = useRef<number>(0.2)
  const lastPointerTimeRef = useRef<number>(0)
  const isPointerOverRef = useRef<boolean>(false)

  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const gl = (canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null
    // Fallback context if WebGL is unavailable
    const ctx2d = !gl ? canvas.getContext('2d') : null

    // Padded canvas dimensions
    const padding = 16
    let width = 0
    let height = 0

    const updateSize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width + padding * 2
      height = rect.height + padding * 2
      canvas.width = width
      canvas.height = height
      if (gl) {
        gl.viewport(0, 0, width, height)
      }
    }

    const observer = new ResizeObserver(() => updateSize())
    observer.observe(container)
    updateSize()

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Pointer move listener on window
    const handlePointerMove = (e: PointerEvent) => {
      if (mediaQuery.matches) return
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const dx = e.clientX - centerX
      const dy = e.clientY - centerY

      // Check if pointer inside button
      const isOver =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

      isPointerOverRef.current = isOver
      lastPointerTimeRef.current = performance.now()

      if (isOver) {
        // Corner diagonal + small offset based on pointer position within button
        const relX = (e.clientX - rect.left) / rect.width - 0.5
        const relY = (e.clientY - rect.top) / rect.height - 0.5
        const cornerAngle = Math.atan2(relY, relX)
        targetAngleRef.current = cornerAngle + relX * 0.4
        targetBrightnessRef.current = 1.0
      } else {
        // Distance to button's edge
        const clampX = Math.max(rect.left, Math.min(e.clientX, rect.right))
        const clampY = Math.max(rect.top, Math.min(e.clientY, rect.bottom))
        const distToEdge = Math.hypot(e.clientX - clampX, e.clientY - clampY)

        targetAngleRef.current = Math.atan2(dy, dx)
        targetBrightnessRef.current = smoothstep(0, 1, 1 - distToEdge / 250)
      }
    }

    window.addEventListener('pointermove', handlePointerMove)

    // Render loop
    let lastTimestamp = performance.now()
    const k = 7.5 // Smoothing factor

    const render = (now: number) => {
      const rawDt = (now - lastTimestamp) / 1000
      const dt = Math.min(rawDt, 0.05) // Clamp dt to 50ms
      lastTimestamp = now

      // Idle sweep if no pointer move recently (over 2 seconds)
      const timeSincePointer = now - lastPointerTimeRef.current
      if (timeSincePointer > 2000 && !isPointerOverRef.current) {
        targetAngleRef.current += dt * 0.8
        targetBrightnessRef.current = 0.35 + Math.sin(now * 0.002) * 0.15
      }

      // 1 - exp(-dt * k) exponential smoothing
      const alpha = 1 - Math.exp(-dt * k)
      currentAngleRef.current += (targetAngleRef.current - currentAngleRef.current) * alpha
      currentBrightnessRef.current +=
        (targetBrightnessRef.current - currentBrightnessRef.current) * alpha

      const angle = currentAngleRef.current
      const brightness = Math.max(0, Math.min(1, currentBrightnessRef.current))

      if (ctx2d) {
        // Render SDF Specular Rim Highlight using Canvas2D Fallback
        ctx2d.clearRect(0, 0, width, height)

        if (!mediaQuery.matches && brightness > 0.01) {
          const btnW = width - padding * 2
          const btnH = height - padding * 2
          const radius = btnH / 2

          ctx2d.save()
          ctx2d.translate(padding, padding)

          // Specular rim stroke arc along target angle
          const lightX = btnW / 2 + (Math.cos(angle) * btnW) / 2
          const lightY = btnH / 2 + (Math.sin(angle) * btnH) / 2

          const grad = ctx2d.createRadialGradient(
            lightX,
            lightY,
            0,
            lightX,
            lightY,
            Math.max(btnW, btnH) * 0.6
          )

          const glowColor =
            variant === 'peach'
              ? `rgba(248, 155, 136, ${brightness})`
              : `rgba(165, 180, 252, ${brightness})`

          grad.addColorStop(0, glowColor)
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)')

          ctx2d.beginPath()
          ctx2d.roundRect(0, 0, btnW, btnH, radius)
          ctx2d.strokeStyle = grad
          ctx2d.lineWidth = 3.5
          ctx2d.shadowBlur = 12 * brightness
          ctx2d.shadowColor = glowColor
          ctx2d.stroke()
          ctx2d.restore()
        }
      }

      animationFrameId.current = requestAnimationFrame(render)
    }

    animationFrameId.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      observer.disconnect()
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      if (gl) {
        const loseContext = gl.getExtension('WEBGL_lose_context')
        if (loseContext) loseContext.loseContext()
      }
    }
  }, [variant])

  const baseStyles =
    'relative z-10 inline-flex items-center justify-center rounded-full font-semibold select-none text-center cursor-pointer transition-all duration-200'

  const variantStyles = {
    peach:
      'bg-gradient-to-r from-[#F89B88] to-[#F37970] text-slate-950 shadow-[0_0_20px_rgba(248,155,136,0.35)]',
    violet:
      'bg-gradient-to-r from-[#3E3661] to-[#2B2446] text-white border border-white/15 shadow-[0_0_20px_rgba(62,54,97,0.4)]',
    outline:
      'bg-white/5 backdrop-blur-md text-white border border-white/20 hover:border-[#F89B88]/60',
  }

  const sizeStyles = {
    sm: 'text-xs px-5 py-2 gap-2',
    md: 'text-sm px-6 py-2.5 gap-2.5',
    lg: 'text-base px-8 py-3.5 gap-3',
  }

  const combinedClasses = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  const content = (
    <div ref={containerRef} className="relative inline-flex items-center justify-center">
      {/* Canvas positioned slightly larger than button */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute -inset-4 z-20 w-[calc(100%+32px)] h-[calc(100%+32px)]"
      />
      {href ? (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      ) : (
        <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
          {children}
        </button>
      )}
    </div>
  )

  return content
}
