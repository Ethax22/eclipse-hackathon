'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClickBurst {
  id: number
  x: number
  y: number
}

export function SpacePointerEffect() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [bursts, setBursts] = useState<ClickBurst[]>([])

  useEffect(() => {
    // Only run on desktop/devices with fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })

      // Check if hovering interactive elements
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handlePointerDown = (e: MouseEvent) => {
      const newBurst = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      }
      setBursts((prev) => [...prev.slice(-5), newBurst])
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Primary Floating Glowing Cursor Orb */}
      <motion.div
        className="fixed rounded-full bg-gradient-to-r from-[#F89B88] to-[#F37970] shadow-[0_0_20px_rgba(248,155,136,0.8)] border border-white/80"
        style={{
          width: isHovered ? 36 : 18,
          height: isHovered ? 36 : 18,
          left: pos.x,
          top: pos.y,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 28 }}
      />

      {/* Trailing Outer Soft Glow Circle */}
      <motion.div
        className="fixed rounded-full border border-[#F89B88]/40 bg-[#F89B88]/10 backdrop-blur-[1px]"
        style={{
          width: 44,
          height: 44,
          left: pos.x,
          top: pos.y,
          x: '-50%',
          y: '-50%',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />

      {/* 21st.dev Click Burst / Radial Ring Shockwave */}
      <AnimatePresence>
        {bursts.map((b) => (
          <React.Fragment key={b.id}>
            {/* Expanding Shockwave Ring */}
            <motion.span
              initial={{ scale: 0.2, opacity: 0.9 }}
              animate={{ scale: 3.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              style={{
                left: b.x,
                top: b.y,
                x: '-50%',
                y: '-50%',
              }}
              className="absolute w-12 h-12 rounded-full border-2 border-[#F89B88] shadow-[0_0_25px_rgba(248,155,136,0.8)]"
            />

            {/* 4 Sparkle Particles Flying Outward */}
            {[0, 90, 180, 270].map((deg, i) => {
              const rad = (deg * Math.PI) / 180
              const dist = 32
              const dx = Math.cos(rad) * dist
              const dy = Math.sin(rad) * dist

              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                  animate={{ x: dx, y: dy, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    left: b.x,
                    top: b.y,
                  }}
                  className="absolute w-2 h-2 rounded-full bg-[#F89B88] shadow-[0_0_10px_#F89B88]"
                />
              )
            })}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  )
}
