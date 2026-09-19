'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

interface RippleEffect {
  x: number
  y: number
  id: number
}

interface PillButtonProps {
  variant?: 'peach' | 'violet' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export function PillButton({
  variant = 'peach',
  size = 'md',
  href,
  children,
  className,
  onClick,
}: PillButtonProps) {
  const [ripples, setRipples] = useState<RippleEffect[]>([])

  const handlePointerDown = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newRipple = { x, y, id: Date.now() }

    setRipples((prev) => [...prev.slice(-3), newRipple])
    if (onClick) onClick(e)
  }

  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 select-none text-center cursor-pointer shadow-sm'

  const variantStyles = {
    peach:
      'bg-gradient-to-r from-[#F89B88] to-[#F37970] text-slate-950 font-semibold shadow-[0_0_20px_rgba(248,155,136,0.4)] hover:shadow-[0_0_30px_rgba(248,155,136,0.6)]',
    violet:
      'bg-gradient-to-r from-[#3E3661] to-[#2B2446] text-white border border-white/10 hover:border-white/20 shadow-[0_0_15px_rgba(62,54,97,0.4)] hover:shadow-[0_0_25px_rgba(62,54,97,0.7)]',
    outline:
      'bg-white/5 backdrop-blur-md text-white border border-white/20 hover:border-[#F89B88]/60 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(248,155,136,0.3)]',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
  }

  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5 gap-2',
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
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* 21st.dev Click Ripple Wave Layer */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              top: r.y,
              left: r.x,
              width: 100,
              height: 100,
              marginTop: -50,
              marginLeft: -50,
            }}
            className="absolute rounded-full bg-white/40 pointer-events-none z-0"
          />
        ))}
      </AnimatePresence>
    </>
  )

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.93, y: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 17 }}
        className="inline-block"
      >
        <Link href={href} className={combinedClasses} onClick={handlePointerDown}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.93, y: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 17 }}
      className={combinedClasses}
      onClick={handlePointerDown}
    >
      {content}
    </motion.button>
  )
}
