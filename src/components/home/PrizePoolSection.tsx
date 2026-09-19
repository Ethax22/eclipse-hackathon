'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, Sparkles, Medal } from 'lucide-react'

export function PrizePoolSection() {
  return (
    <section id="prizes" className="py-24 bg-[#0B0D1B] relative overflow-hidden border-b border-white/10 text-white">
      {/* Background radial ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FFD700]/10 via-[#F89B88]/15 to-[#3E3661]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FFD700] font-body block mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[#FFD700]" />
            PRIZE POOL & REWARDS
            <Sparkles size={14} className="text-[#FFD700]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Compete & Win Big<span className="text-[#FFD700]">.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Recognizing top agentic AI innovations. Claim your spot on the podium and win cash prizes, certificates, and mentorship.
          </p>
        </div>

        {/* Podium Layout */}
        <div className="max-w-4xl mx-auto flex items-end justify-center gap-4 sm:gap-8 pt-10 pb-6 px-4">
          {/* 2ND PLACE PODIUM BAR (SILVER - LEFT) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 max-w-[220px] flex flex-col items-center group"
          >
            {/* Glowing Silver Trophy Cup */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-4 flex flex-col items-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 p-0.5 shadow-[0_0_30px_rgba(226,232,240,0.5)]">
                <div className="w-full h-full rounded-full bg-[#121529] flex items-center justify-center border border-white/20">
                  <Medal className="w-9 h-9 sm:w-11 sm:h-11 text-slate-200 drop-shadow-[0_0_12px_rgba(226,232,240,0.8)]" />
                </div>
              </div>
              <span className="mt-2 text-[11px] font-mono font-bold tracking-widest text-slate-300 uppercase px-3 py-0.5 rounded-full bg-slate-400/15 border border-slate-400/30">
                2ND PLACE
              </span>
            </motion.div>

            {/* Silver Podium Pillar */}
            <div className="w-full h-48 sm:h-56 rounded-t-2xl bg-gradient-to-b from-[#1C2142] to-[#121529] border-t-2 border-x border-slate-300/40 p-6 flex flex-col justify-between items-center text-center shadow-[0_0_25px_rgba(148,163,184,0.15)] group-hover:border-slate-300 transition-colors">
              <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">SILVER</span>
              <div className="my-auto">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight block">
                  6K
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mt-1">
                  Cash Prize
                </span>
              </div>
              <div className="w-full pt-3 border-t border-slate-400/20 text-[10px] font-mono text-slate-400">
                RUNNER UP
              </div>
            </div>
          </motion.div>

          {/* 1ST PLACE PODIUM BAR (GOLDEN - CENTER & TALLEST) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-[260px] flex flex-col items-center group -mt-10"
          >
            {/* Glowing Golden Trophy Cup */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-4 flex flex-col items-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#FFE57F] via-[#FFD700] to-[#B8860B] p-0.5 shadow-[0_0_40px_rgba(255,215,0,0.7)]">
                <div className="w-full h-full rounded-full bg-[#161936] flex items-center justify-center border border-[#FFD700]/50">
                  <Trophy className="w-11 h-11 sm:w-14 sm:h-14 text-[#FFD700] drop-shadow-[0_0_18px_rgba(255,215,0,0.9)]" />
                </div>
              </div>
              <span className="mt-2 text-xs font-mono font-extrabold tracking-widest text-[#FFD700] uppercase px-4 py-1 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                1ST PLACE • WINNER
              </span>
            </motion.div>

            {/* Golden Podium Pillar (Tallest) */}
            <div className="w-full h-64 sm:h-72 rounded-t-2xl bg-gradient-to-b from-[#2A244D] via-[#1C1A38] to-[#121529] border-t-2 border-x border-[#FFD700]/60 p-6 flex flex-col justify-between items-center text-center shadow-[0_0_35px_rgba(255,215,0,0.25)] group-hover:border-[#FFD700] transition-colors relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
              <span className="text-xs font-mono font-bold text-[#FFD700] tracking-wider">CHAMPION</span>
              <div className="my-auto">
                <span className="text-4xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5C0] via-[#FFD700] to-[#FFA500] tracking-tight block drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                  10K
                </span>
                <span className="text-xs font-mono text-amber-200/80 uppercase tracking-widest block mt-1 font-semibold">
                  Grand Cash Prize
                </span>
              </div>
              <div className="w-full pt-3 border-t border-[#FFD700]/20 text-[11px] font-mono text-[#FFD700] font-bold tracking-wider">
                GOLDEN TROPHY + CERTIFICATE
              </div>
            </div>
          </motion.div>

          {/* 3RD PLACE PODIUM BAR (BRONZE - RIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-[220px] flex flex-col items-center group"
          >
            {/* Glowing Bronze Trophy Cup */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-4 flex flex-col items-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#E59866] to-[#A04000] p-0.5 shadow-[0_0_30px_rgba(205,127,50,0.5)]">
                <div className="w-full h-full rounded-full bg-[#121529] flex items-center justify-center border border-[#E59866]/40">
                  <Award className="w-9 h-9 sm:w-11 sm:h-11 text-[#E59866] drop-shadow-[0_0_12px_rgba(229,152,102,0.8)]" />
                </div>
              </div>
              <span className="mt-2 text-[11px] font-mono font-bold tracking-widest text-[#E59866] uppercase px-3 py-0.5 rounded-full bg-[#E59866]/15 border border-[#E59866]/30">
                3RD PLACE
              </span>
            </motion.div>

            {/* Bronze Podium Pillar (Shortest) */}
            <div className="w-full h-36 sm:h-44 rounded-t-2xl bg-gradient-to-b from-[#251A24] to-[#121529] border-t-2 border-x border-[#E59866]/40 p-5 flex flex-col justify-between items-center text-center shadow-[0_0_20px_rgba(205,127,50,0.15)] group-hover:border-[#E59866] transition-colors">
              <span className="text-xs font-mono font-bold text-[#E59866] tracking-wider">BRONZE</span>
              <div className="my-auto">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight block">
                  4K
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mt-1">
                  Cash Prize
                </span>
              </div>
              <div className="w-full pt-2 border-t border-[#E59866]/20 text-[10px] font-mono text-slate-400">
                2ND RUNNER UP
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
