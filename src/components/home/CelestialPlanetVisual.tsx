'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function CelestialPlanetVisual() {
  return (
    <div className="relative w-full h-full min-h-screen select-none pointer-events-none overflow-hidden">
      {/* 1. Deep Space Misty Atmosphere Nebulae (Soft Background Haze) */}
      <div className="absolute top-4 right-10 w-80 h-80 bg-[#F89B88]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-4 right-10 w-96 h-96 bg-[#3E3661]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-[#5C6EA8]/15 rounded-full blur-[90px] pointer-events-none" />

      {/* 2. Curved Dotted Orbit Lines (Fine & Elegant Swooping Paths matching Image 2) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Main Orbit Swoop: starts near center, loops under Saturn, wraps around top-right planet */}
        <path
          d="M 300 240 C 520 380, 850 350, 1080 170 C 1200 70, 1360 100, 1440 130"
          stroke="#F89B88"
          strokeWidth="1.5"
          strokeDasharray="5 8"
        />
        {/* Secondary Orbit Loop under bottom center planets */}
        <path
          d="M 450 720 Q 750 620, 1200 700"
          stroke="#A5B4FC"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
      </svg>

      {/* 3. Star Dust Clusters Along Orbit Paths */}
      <div className="absolute top-[26%] right-[40%] flex gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A5B4FC] shadow-[0_0_8px_#A5B4FC] animate-pulse" />
        <span className="w-1 h-1 rounded-full bg-[#F89B88]" />
      </div>
      <div className="absolute top-[22%] right-[22%] flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
        <span className="w-1 h-1 rounded-full bg-[#F89B88]" />
      </div>
      <div className="absolute bottom-[20%] left-[44%] flex gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFE5D9] shadow-[0_0_8px_#FFE5D9]" />
        <span className="w-1 h-1 rounded-full bg-[#F89B88]" />
      </div>

      {/* 4. TOP CENTER-RIGHT: Small Purple Orb (Image 2 top left of giant planet) */}
      <motion.div
        className="absolute top-[5%] left-[34%] w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-[0_0_18px_rgba(140,123,174,0.5)] z-10"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #B0A0D4 0%, #4D4175 100%)',
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 5. TOP RIGHT: Giant Layered Peach Planet (Proportional size matching Image 2) */}
      <motion.div
        className="absolute top-[6%] right-[3%] sm:right-[5%] w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full shadow-[0_0_60px_rgba(248,155,136,0.4)] z-10"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, #FFE0D7 0%, #F89B88 35%, #E5685B 70%, #5E232E 100%)',
        }}
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Layered Organic Wave SVG Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 rounded-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M 0 30 Q 30 15 60 35 T 100 25 L 100 100 L 0 100 Z"
            fill="#E5685B"
            fillOpacity="0.45"
          />
          <path
            d="M 0 55 Q 40 40 70 60 L 100 50 L 100 100 L 0 100 Z"
            fill="#5E232E"
            fillOpacity="0.55"
          />
          <path
            d="M 0 75 Q 50 65 80 80 L 100 70 L 100 100 L 0 100 Z"
            fill="#3B1219"
            fillOpacity="0.6"
          />
        </svg>
        {/* Highlight Arc */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
      </motion.div>

      {/* 6. MID RIGHT: Peach Saturn Planet with Ring (Scaled to match Image 2) */}
      <motion.div
        className="absolute top-[40%] right-[22%] sm:right-[24%] z-20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
          {/* Misty Light Glow */}
          <div className="absolute -inset-3 bg-[#F89B88]/25 rounded-full blur-lg" />

          {/* Saturn Body */}
          <div
            className="w-full h-full rounded-full shadow-[0_0_30px_rgba(248,155,136,0.45)] relative z-10"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, #FFE0D7 0%, #F89B88 55%, #4D2132 100%)',
            }}
          />

          {/* Glowing Saturn Ring */}
          <svg
            className="absolute -inset-x-8 -top-3 w-[165%] h-[135%] z-20 pointer-events-none drop-shadow-[0_0_12px_rgba(248,155,136,0.8)]"
            viewBox="0 0 160 100"
            fill="none"
          >
            <ellipse
              cx="80"
              cy="50"
              rx="72"
              ry="20"
              stroke="#FFE0D7"
              strokeWidth="3"
              strokeOpacity="0.9"
              transform="rotate(-18 80 50)"
            />
            <ellipse
              cx="80"
              cy="50"
              rx="64"
              ry="17"
              stroke="#F89B88"
              strokeWidth="1.8"
              strokeOpacity="0.7"
              transform="rotate(-18 80 50)"
            />
          </svg>
        </div>
      </motion.div>

      {/* 7. MID-LEFT: Small Pink Orb (Image 2 center pink dot) */}
      <motion.div
        className="absolute top-[26%] right-[46%] w-7 h-7 sm:w-9 sm:h-9 rounded-full shadow-[0_0_18px_rgba(248,155,136,0.6)] z-10"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #FFC1B3 0%, #F89B88 100%)',
        }}
        animate={{ scale: [1, 1.08, 1], y: [0, -4, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 8. BOTTOM RIGHT: Giant Cosmic Violet Planet (Scaled to match Image 2) */}
      <motion.div
        className="absolute -bottom-8 right-[2%] sm:right-[4%] w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full shadow-[0_0_60px_rgba(62,54,97,0.5)] z-10"
        style={{
          background:
            'radial-gradient(circle at 30% 25%, #7665AA 0%, #3B325B 45%, #181433 85%, #0B0D1B 100%)',
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        {/* Crater Details */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 rounded-full bg-black/25 blur-[1px]" />
        <div className="absolute top-1/2 left-1/4 w-11 h-11 rounded-full bg-black/20 blur-[1px]" />
        <div className="absolute bottom-1/3 right-1/3 w-7 h-7 rounded-full bg-black/30 blur-[1px]" />
      </motion.div>

      {/* 9. SMALL BLUE MOON OVERLAPPING VIOLET PLANET (Image 2 moon) */}
      <motion.div
        className="absolute bottom-[16%] right-[22%] sm:right-[24%] w-11 h-11 sm:w-14 sm:h-14 rounded-full shadow-[0_0_20px_rgba(162,178,238,0.7)] z-20"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #D4DCFA 0%, #5C6EA8 60%, #1F2749 100%)',
        }}
        animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* 10. BOTTOM CENTER-RIGHT: Soft Peach/Violet Medium Planet (Scaled to match Image 2) */}
      <motion.div
        className="absolute bottom-[18%] right-[36%] sm:right-[38%] w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full shadow-[0_0_35px_rgba(248,155,136,0.4)] z-10"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, #FFC1B3 0%, #F89B88 40%, #5C6EA8 85%)',
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      {/* 11. BOTTOM CENTER (LOWEST): Bright Glowing Orange/Peach Planet (Scaled to match Image 2) */}
      <motion.div
        className="absolute -bottom-8 left-[30%] sm:left-[34%] w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full shadow-[0_0_45px_rgba(248,155,136,0.45)] z-20"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, #FFE5D9 0%, #F89B88 45%, #D85B4E 90%)',
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        {/* Highlight arc */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/40" />
      </motion.div>

      {/* 12. BOTTOM CENTER-LEFT: Small Bronze Moon */}
      <motion.div
        className="absolute bottom-[12%] left-[46%] w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-[0_0_12px_rgba(229,152,102,0.5)] z-10"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #E59866 0%, #873600 100%)',
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
