'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Flag, Zap, Trophy, Rocket } from 'lucide-react'

const roundsTimeline = [
  {
    phase: 'REGISTRATION OPEN',
    dates: 'Sep 20 – Oct 16, 2026',
    status: 'ACTIVE',
    icon: Rocket,
    title: 'Registration & Idea Submission',
    desc: 'Register your team (1-5 members) on Unstop or HACK2SKILL. Choose your challenge track or OPEN-X.',
  },
  {
    phase: 'ROUND 1',
    dates: 'Oct 01 – Oct 16, 2026',
    status: 'UPCOMING',
    icon: Zap,
    title: 'Agentic Core Build',
    desc: 'Construct initial autonomous workflow, tool integrations, and basic verification loop.',
  },
  {
    phase: 'ROUND 2',
    dates: 'Oct 19 – Oct 27, 2026',
    status: 'UPCOMING',
    icon: Flag,
    title: 'Scaling & Edge-Case Handling',
    desc: 'Handle edge cases, multi-step failure recovery, human-in-the-loop escalation, and live trace logs.',
  },
  {
    phase: 'FINALS',
    dates: 'Oct 31, 2026',
    status: 'UPCOMING',
    icon: Trophy,
    title: 'Live Demos & Award Ceremony',
    desc: 'Finalist teams present live agentic execution to the judge panel for final scoring.',
  },
]

export function LinearTimelineSection() {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-[#0B0D1B] relative overflow-hidden border-b border-white/10 text-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F89B88]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#F89B88] font-body block mb-3">
            EVENT TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Hackathon Timeline & Rounds<span className="text-[#F89B88]">.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            Track key milestones across each round from registration to the grand finals.
          </p>
        </div>

        {/* Linear Glowing Timeline Container */}
        <div className="relative">
          {/* Linear Glowing Trail Line */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[5%] right-[5%] h-1 bg-gradient-to-r from-[#F89B88] via-[#3E3661] to-[#F89B88] opacity-70 shadow-[0_0_15px_rgba(248,155,136,0.6)] z-0" />

          {/* 4 Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {roundsTimeline.map((item, idx) => {
              const Icon = item.icon
              const isActive = item.status === 'ACTIVE'
              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`rounded-2xl p-6 flex flex-col justify-start backdrop-blur-md border transition-all duration-300 group hover:-translate-y-1.5 md:min-h-[290px] ${
                    isActive
                      ? 'bg-[#161936]/90 border-[#F89B88]/60 shadow-[0_0_30px_rgba(248,155,136,0.2)]'
                      : 'bg-[#161936]/50 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Glowing Node Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#F89B88]/15 text-[#F89B88] border border-[#F89B88]/30 uppercase">
                      {item.phase}
                    </span>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-[#3E3661]/80 border border-white/20 flex items-center justify-center text-[#F89B88] group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                      {isActive && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F89B88] opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F89B88]" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Date Row - Directly below header */}
                  <div className="text-xs font-mono text-slate-400 mt-4 mb-3 flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#F89B88]" />
                    <span>{item.dates}</span>
                  </div>

                  {/* Title Row */}
                  <h3 className="font-display font-bold text-base md:text-lg text-white mb-2 md:min-h-[2.75rem] flex items-center group-hover:text-[#F89B88] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description Row */}
                  <p className="text-sm md:text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
