'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { challenges } from '@/lib/data/challenges'
import { ArrowUpRight } from 'lucide-react'

export function ChallengePreview() {
  return (
    <section className="py-16 md:py-24 bg-[#0B0D1B] relative overflow-hidden border-b border-white/10 text-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#3E3661]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#F89B88]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#F89B88] font-body block mb-3">
              CURATED & OPEN TRACKS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
              The Challenges<span className="text-[#F89B88]">.</span>
            </h2>
          </div>
          <Link
            href="/challenges"
            className="text-xs font-bold tracking-widest uppercase text-[#F89B88] hover:text-[#F37970] flex items-center gap-2 group transition-colors py-3 px-4 self-start rounded-full bg-[#F89B88]/10 border border-[#F89B88]/30"
          >
            <span>VIEW ALL TRACKS</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 6 Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl bg-[#161936]/50 backdrop-blur-md border border-white/10 p-7 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden shadow-lg hover:-translate-y-2.5 hover:border-[#F89B88]/70 hover:shadow-[0_0_40px_rgba(248,155,136,0.3)] hover:bg-[#161936]/90"
            >
              {/* Radial glow background highlights inside card on hover */}
              <div className="absolute -right-16 -top-16 w-52 h-52 bg-[#F89B88]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-52 h-52 bg-[#3E3661]/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card Top Section */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-extrabold text-3xl bg-gradient-to-r from-[#F89B88] to-[#F37970] bg-clip-text text-transparent font-mono">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#F89B88]/15 border border-[#F89B88]/30 text-[#F89B88] font-semibold">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#F89B88] transition-colors duration-200 mb-3 leading-snug md:min-h-[3.25rem] flex items-center">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal line-clamp-3 md:min-h-[3.5rem]">
                  {item.oneLiner}
                </p>
              </div>

              {/* Card Bottom Section */}
              <div className="relative z-10 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.capabilities.slice(0, 3).map((cap, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[11px] sm:text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-[#F89B88]/30 group-hover:text-white transition-all duration-200"
                    >
                      {cap}
                    </span>
                  ))}
                  {item.capabilities.length > 3 && (
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-1 rounded-full bg-white/5">
                      +{item.capabilities.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/challenges/${item.slug}`}
                  className="w-full rounded-full bg-[#3E3661]/60 hover:bg-gradient-to-r hover:from-[#F89B88] hover:to-[#F37970] text-white hover:text-slate-950 border border-white/15 hover:border-transparent text-xs font-semibold tracking-wider uppercase py-3.5 px-6 flex items-center justify-between transition-all duration-300 shadow-md group/btn"
                >
                  <span className="font-semibold">EXPLORE TRACK</span>
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
