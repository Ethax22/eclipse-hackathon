'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Code2, RefreshCw } from 'lucide-react'

const pillars = [
  {
    icon: Cpu,
    title: 'REAL-WORLD COMPLEXITY',
    desc: 'Solve actual enterprise bottlenecks across operations, finance, legal, procurement, and software engineering.',
  },
  {
    icon: Code2,
    title: 'TOOL & API CALLING',
    desc: 'Integrate external services, databases, webhooks, and REST endpoints into autonomous agent workflows.',
  },
  {
    icon: RefreshCw,
    title: 'VERIFICATION & RECOVERY',
    desc: 'Build systems capable of verifying their own actions, analyzing execution failures, and iterating to self-heal.',
  },
  {
    icon: ShieldCheck,
    title: 'GOVERNANCE & ESCALATION',
    desc: 'Implement safety guardrails and human-in-the-loop approval workflows for high-impact operational decisions.',
  },
]

export function WhySection() {
  return (
    <section className="py-24 bg-bg-primary border-b border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#F89B88]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="max-w-2xl mb-16">
          <span className="text-label text-[#F89B88] uppercase tracking-widest block mb-2 font-mono">
            WHY PROJECT: ECLIPSE
          </span>
          <h2 className="text-h2 font-display text-text-primary mb-4">
            Built For Serious Engineers<span className="text-[#F89B88]">.</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            This is not a wrapper hackathon. We evaluate real architecture, autonomous decision loops, system integration, and fault tolerance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl bg-[#161936]/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between hover:border-[#F89B88]/60 hover:shadow-[0_0_35px_rgba(248,155,136,0.2)] transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F89B88]/20 to-[#F37970]/10 border border-[#F89B88]/40 flex items-center justify-center text-[#F89B88] mb-6 group-hover:scale-110 group-hover:border-[#F89B88] transition-all duration-300 shadow-[0_0_15px_rgba(248,155,136,0.2)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-base text-text-primary mb-3 tracking-wider group-hover:text-[#F89B88] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

