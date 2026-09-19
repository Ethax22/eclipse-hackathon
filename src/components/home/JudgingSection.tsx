'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { judgingCriteria } from '@/lib/data/judging'

export function JudgingSection() {
  return (
    <section id="judging" className="py-16 md:py-24 bg-[#0B0D1B] relative overflow-hidden border-b border-white/10 text-white">
      {/* Ambient background blur */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#3E3661]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#F89B88] font-body block mb-3">
            EVALUATION & JUDGING CRITERIA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            How Projects Are Evaluated<span className="text-[#F89B88]">.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            All submissions are scored across 7 weighted dimensions totaling 100%. Judges prioritize genuine tool execution, failure handling, and multi-step reasoning.
          </p>
        </div>

        {/* Tabular Column / Table Format */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#161936]/80 border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl"
        >
          {/* Phones: one card per criterion */}
          <ul className="md:hidden divide-y divide-white/10 list-none">
            {judgingCriteria.map((item, idx) => (
              <li key={item.id} className="p-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono font-bold text-sm text-slate-400 shrink-0">0{idx + 1}</span>
                    <span className="font-display font-bold text-white leading-snug">{item.name}</span>
                  </div>
                  <span className="inline-block shrink-0 px-3 py-1 rounded-full bg-[#F89B88]/15 border border-[#F89B88]/30 text-[#F89B88] font-mono text-xs font-bold">
                    {item.weight}%
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>

          {/* md+: full table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-[#F89B88] font-mono text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold w-20">No.</th>
                  <th className="py-4 px-6 font-bold">Judging Criterion</th>
                  <th className="py-4 px-6 font-bold w-32 text-center">Weight</th>
                  <th className="py-4 px-6 font-bold">Evaluation Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {judgingCriteria.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="hover:bg-white/5 transition-colors duration-150"
                  >
                    <td className="py-4 px-6 font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </td>
                    <td className="py-4 px-6 font-display font-bold text-white">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#F89B88]/15 border border-[#F89B88]/30 text-[#F89B88] font-mono text-xs font-bold">
                        {item.weight}%
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-300 leading-relaxed">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
