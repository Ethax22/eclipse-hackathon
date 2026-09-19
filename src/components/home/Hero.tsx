'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarfieldBackground } from '@/components/ui/StarfieldBackground'
import { PillButton } from '@/components/ui/PillButton'
import { PlatformBadges } from '@/components/ui/PlatformBadge'
import { CelestialPlanetVisual } from './CelestialPlanetVisual'
import { eventConfig } from '@/lib/data/event'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center overflow-hidden bg-[#0B0D1B] text-white">
      {/* Dynamic Starfield Particles Canvas */}
      <StarfieldBackground starCount={160} />

      {/* Replicated Full-Section Celestial Planet & Orbit Particle Visual */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden w-full h-full opacity-60 sm:opacity-80 lg:opacity-100">
        <CelestialPlanetVisual />
      </div>

      {/* Phone/tablet scrim: keeps copy readable where the planets sit behind it */}
      <div className="absolute inset-0 z-[1] lg:hidden pointer-events-none bg-gradient-to-b from-[#0B0D1B]/55 via-[#0B0D1B]/55 to-[#0B0D1B]/25" />

      {/* Side Vertical Label */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 writing-vertical text-[10px] tracking-[0.3em] font-mono text-slate-500 uppercase select-none z-10">
        GENAI • AGENTIC AI • AUTONOMOUS WORKFLOWS
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
          {/* Tag / Brand Lockup Header */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-[#F89B88] rounded-full animate-ping" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F89B88] font-body">
              {eventConfig.presents}
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            className="text-[2.5rem] sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-5 sm:mb-6 leading-[1.1] sm:leading-[1.12]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Build AI That{' '}
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Thinks
            </span>
            .{' '}
            <span className="bg-gradient-to-r from-[#F89B88] to-[#F37970] bg-clip-text text-transparent">
              Acts
            </span>
            .{' '}
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Verifies
            </span>
            .
          </motion.h1>

          {/* Subheadline Copy */}
          <motion.p
            className="text-base sm:text-lg text-slate-200 sm:text-slate-300 max-w-xl mb-6 sm:mb-8 leading-relaxed font-normal"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Enter the unknown. <strong className="text-white font-semibold">PROJECT: ECLIPSE</strong> is a technical hackathon challenging developers to construct autonomous agentic systems that execute real workflows, use APIs, verify outcomes, and handle edge cases.
          </motion.p>

          {/* Hackathon Track Badges */}
          <motion.div
            className="mb-8 sm:mb-10 w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <PlatformBadges />
          </motion.div>

          {/* Dual CTA Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <PillButton href="/challenges" variant="violet" size="lg" fullWidthMobile>
              View Challenges
            </PillButton>

            <PillButton href="/register" variant="peach" size="lg" className="group" fullWidthMobile>
              <span>Register Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </PillButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
