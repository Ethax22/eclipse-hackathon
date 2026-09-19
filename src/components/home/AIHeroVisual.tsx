'use client'

import { motion } from 'framer-motion'

export function AIHeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[580px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-orange-DEFAULT/25 via-orange-DEFAULT/5 to-transparent blur-3xl opacity-70 animate-pulse-glow" />

      {/* SVG Canvas for AI Futuristic Head & Geometry */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full relative z-10 drop-shadow-[0_0_35px_rgba(255,106,0,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="headGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8A1F" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#801800" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="orangeLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8A1F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="brainCore" cx="70%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#FF8A1F" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FF6A00" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#160A04" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Concentric Tech Rings */}
        <motion.circle
          cx="380"
          cy="280"
          r="230"
          stroke="rgba(255,106,0,0.2)"
          strokeWidth="1.5"
          strokeDasharray="4 8 12 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          cx="380"
          cy="280"
          r="180"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray="16 16"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />

        {/* Brain Core Energy Sphere */}
        <circle cx="410" cy="240" r="90" fill="url(#brainCore)" />

        {/* Wireframe Humanoid Head Silhouette */}
        {/* Face Outline */}
        <path
          d="M 280 140 C 330 100, 440 100, 480 160 C 510 210, 520 280, 480 360 C 450 420, 390 460, 340 480 C 300 460, 270 420, 260 370 C 250 320, 240 240, 280 140 Z"
          stroke="url(#headGlow)"
          strokeWidth="2"
          fill="none"
        />

        {/* Internal Neural Mesh / Triangles */}
        <g stroke="rgba(255, 138, 31, 0.4)" strokeWidth="1" fill="rgba(255,106,0,0.03)">
          {/* Forehead & Cortex Network */}
          <polygon points="340,140 390,160 360,200" />
          <polygon points="390,160 440,150 420,200" />
          <polygon points="440,150 480,180 460,220" />
          <polygon points="360,200 420,200 390,250" fill="rgba(255,106,0,0.2)" />
          <polygon points="420,200 460,220 450,270" fill="rgba(255,255,255,0.15)" />
          <polygon points="390,250 450,270 410,310" />

          {/* Temporal & Cheek Mesh */}
          <polygon points="300,220 360,200 340,270" />
          <polygon points="340,270 390,250 360,330" />
          <polygon points="360,330 410,310 390,380" />
          <polygon points="410,310 470,300 440,360" />

          {/* Jawline Mesh */}
          <polygon points="290,320 340,370 310,420" />
          <polygon points="340,370 390,380 350,440" />
          <polygon points="390,380 440,360 400,450" />
        </g>

        {/* Glowing Nodes / Intersections */}
        {[
          [340, 140], [390, 160], [440, 150], [480, 180],
          [360, 200], [420, 200], [460, 220], [390, 250],
          [450, 270], [410, 310], [360, 330], [470, 300],
          [390, 380], [440, 360], [350, 440], [400, 450]
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.5 : 2} fill={i % 2 === 0 ? '#FFFFFF' : '#FF8A1F'} />
        ))}

        {/* Tech Grid Overlay & Ray Trace Lines */}
        <line x1="100" y1="280" x2="320" y2="280" stroke="url(#orangeLine)" strokeWidth="1" strokeDasharray="6 4" />
        <line x1="140" y1="200" x2="360" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="120" y1="360" x2="340" y2="360" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* Tech Target Crosshairs */}
        <g stroke="#FF6A00" strokeWidth="1">
          <circle cx="160" cy="200" r="10" strokeOpacity="0.5" fill="none" />
          <line x1="160" y1="185" x2="160" y2="215" strokeOpacity="0.5" />
          <line x1="145" y1="200" x2="175" y2="200" strokeOpacity="0.5" />

          <circle cx="120" cy="360" r="6" strokeOpacity="0.4" fill="none" />
        </g>

        {/* Floating Sparkles & Particles */}
        <motion.g animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <circle cx="220" cy="120" r="2" fill="#FF8A1F" />
          <circle cx="180" cy="240" r="1.5" fill="#FFFFFF" />
          <circle cx="500" cy="110" r="2.5" fill="#FF6A00" />
          <circle cx="520" cy="390" r="2" fill="#FF8A1F" />
          <circle cx="250" cy="420" r="1.5" fill="#FFFFFF" />
        </motion.g>

        {/* Decorative Technical Callouts */}
        <text x="80" y="190" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">
          SYS.NEURAL_NET_V2
        </text>
        <text x="80" y="380" fill="#FF6A00" fontSize="10" fontFamily="monospace">
          CORE_AGENT // ACTIVE
        </text>
      </svg>
    </div>
  )
}
