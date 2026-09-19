'use client'

import { motion } from 'framer-motion'
import { demoTrace } from '@/lib/data/judging'

export function SubmissionStatement() {
  return (
    <section className="py-24 bg-bg-secondary border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F89B88]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 text-center relative z-10">
        <span className="text-label text-[#F89B88] uppercase tracking-widest block mb-4 font-mono">
          THE SUBMISSION STANDARD
        </span>

        {/* Large Editorial Statement */}
        <h2 className="text-h2 md:text-5xl font-display text-text-primary max-w-4xl mx-auto leading-tight mb-14">
          Don’t just show what your AI <span className="text-[#F89B88]">says</span>. <br className="hidden md:block" />
          Show what your AI <span className="text-[#F89B88] underline decoration-[#F89B88]/40 underline-offset-8">does</span>.
        </h2>

        {/* Execution Trace Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-[#161936]/70 backdrop-blur-xl border border-white/15 p-6 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(248,155,136,0.12)] relative group"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <span className="text-xs font-mono tracking-widest text-[#F89B88] uppercase font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F89B88] animate-pulse" />
              RECOMMENDED DEMONSTRATION TRACE
            </span>
            <span className="text-xs font-mono text-text-muted hidden sm:block">6-STEP VERIFICATION LOOP</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {demoTrace.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
                className="flex flex-col items-center p-4 bg-[#0B0D1B]/80 border border-white/10 rounded-2xl transition-all duration-300 hover:border-[#F89B88]/60 hover:shadow-[0_0_20px_rgba(248,155,136,0.25)] hover:-translate-y-1 group/item"
              >
                <span className="text-[11px] font-mono text-[#F89B88] font-bold px-2 py-0.5 rounded-full bg-[#F89B88]/10 border border-[#F89B88]/30 mb-3">
                  0{idx + 1}
                </span>
                <span className="font-display font-bold text-xs text-text-primary uppercase tracking-wide group-hover/item:text-[#F89B88] transition-colors mb-1">
                  {item.step}
                </span>
                <span className="text-[11px] text-text-secondary leading-snug">
                  {item.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

