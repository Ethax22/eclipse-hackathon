'use client'

import React from 'react'
import { PillButton } from '@/components/ui/PillButton'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#0B0D1B] relative overflow-hidden text-white border-b border-white/10">
      <div className="absolute inset-0 bg-radial from-[#F89B88]/15 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#F89B88] font-body block mb-4">
          PROJECT: ECLIPSE
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white max-w-3xl mx-auto mb-6">
          Ready to enter the unknown<span className="text-[#F89B88]">?</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Registration is now open. Form your team, select your challenge track, and build next-generation agentic AI systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <PillButton href="/register" variant="peach" size="lg" className="group">
            <span>REGISTER NOW</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </PillButton>

          <PillButton href="/challenges" variant="violet" size="lg">
            VIEW CHALLENGES
          </PillButton>
        </div>
      </div>
    </section>
  )
}
