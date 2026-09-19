'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { challenges } from '@/lib/data/challenges'
import { ArrowUpRight, Filter } from 'lucide-react'

const categories = [
  { label: 'All', slug: 'all' },
  { label: 'Operations', slug: 'operations' },
  { label: 'Finance', slug: 'finance' },
  { label: 'Legal / Compliance', slug: 'legal-compliance' },
  { label: 'Procurement', slug: 'procurement' },
  { label: 'Software Engineering', slug: 'software-engineering' },
  { label: 'Open Innovation', slug: 'open-innovation' },
]

export default function ChallengesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredChallenges = activeCategory === 'all'
    ? challenges
    : challenges.filter((c) => c.categorySlug === activeCategory)

  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-[#0B0D1B] text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#F89B88] font-body block mb-3">
            PROJECT: ECLIPSE TRACKS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            The Eclipse Challenge Book<span className="text-[#F89B88]">.</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg">
            Five real-world agentic problems. One open frontier. Explore the challenge briefs, mandatory capabilities, and safety guardrails below.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-8 md:mb-12 pb-5 md:pb-6 border-b border-white/10 overflow-x-auto md:overflow-visible md:flex-wrap -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-widest mr-1 md:mr-3 shrink-0">
            <Filter size={14} className="text-[#F89B88]" />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2.5 md:py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.slug
                  ? 'bg-gradient-to-r from-[#F89B88] to-[#F37970] text-slate-950 font-bold shadow-[0_0_20px_rgba(248,155,136,0.4)]'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#F89B88]/40 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChallenges.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl bg-[#161936]/50 backdrop-blur-md border border-white/10 p-5 sm:p-7 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden shadow-lg hover:-translate-y-2.5 hover:border-[#F89B88]/70 hover:shadow-[0_0_40px_rgba(248,155,136,0.3)] hover:bg-[#161936]/90"
            >
              {/* Radial glow background highlights inside card on hover */}
              <div className="absolute -right-16 -top-16 w-52 h-52 bg-[#F89B88]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-52 h-52 bg-[#3E3661]/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-extrabold text-3xl bg-gradient-to-r from-[#F89B88] to-[#F37970] bg-clip-text text-transparent font-mono">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#F89B88]/15 border border-[#F89B88]/30 text-[#F89B88] font-semibold">
                    {item.category}
                  </span>
                </div>

                <h2 className="font-display font-bold text-xl text-white group-hover:text-[#F89B88] transition-colors duration-200 mb-3 leading-snug md:min-h-[3.25rem] flex items-center">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal md:min-h-[3.5rem]">
                  {item.oneLiner}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-2 font-bold tracking-wider">
                    MANDATORY CAPABILITIES ({item.capabilities.length})
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] sm:text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-[#F89B88]/30 group-hover:text-white transition-all duration-200"
                      >
                        {cap}
                      </span>
                    ))}
                    {item.capabilities.length > 3 && (
                      <span className="text-[10px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-white/5">
                        +{item.capabilities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  href={item.isOpenX ? '/open-x' : `/challenges/${item.slug}`}
                  className="w-full rounded-full bg-[#3E3661]/60 hover:bg-gradient-to-r hover:from-[#F89B88] hover:to-[#F37970] text-white hover:text-slate-950 border border-white/15 hover:border-transparent text-xs font-semibold tracking-wider uppercase py-3.5 px-6 flex items-center justify-between transition-all duration-300 shadow-md group/btn"
                >
                  <span className="font-semibold">VIEW BRIEF</span>
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
