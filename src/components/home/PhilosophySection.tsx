'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, AlertTriangle, Workflow, Wrench, Shield, Database } from 'lucide-react'

const philosophySteps = [
  { id: '01', title: 'INPUT', desc: 'Ingest raw data, alerts, or legal contracts', icon: Database },
  { id: '02', title: 'UNDERSTAND', desc: 'Extract context, entities & constraints', icon: Workflow },
  { id: '03', title: 'PLAN', desc: 'Formulate execution strategy & hypotheses', icon: Workflow },
  { id: '04', title: 'USE TOOLS', desc: 'Call APIs, databases & system tools', icon: Wrench },
  { id: '05', title: 'ACT', desc: 'Execute autonomous operational tasks', icon: ArrowRight },
  { id: '06', title: 'VERIFY', desc: 'Confirm state changes & system outcomes', icon: CheckCircle2 },
  { id: '07', title: 'ESCALATE', desc: 'Human-in-the-loop approval for high impact', icon: Shield },
]

export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 bg-bg-primary relative overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F89B88]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-16">
          <span className="text-label text-[#F89B88] uppercase tracking-widest block mb-2 font-mono">
            CORE AGENT PHILOSOPHY
          </span>
          <h2 className="text-h2 font-display text-text-primary mb-4">
            How True AI Agents Work<span className="text-[#F89B88]">.</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            PROJECT: ECLIPSE is designed around agentic execution. Teams must build systems that follow a complete loop from initial input to verified real-world recovery.
          </p>
        </div>

        {/* Visual Flow Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 relative">
          {philosophySteps.map((step, idx) => {
            const Icon = step.icon
            const isLast = idx === philosophySteps.length - 1
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-[#161936]/60 backdrop-blur-md border border-white/10 p-5 flex flex-col justify-between relative group hover:border-[#F89B88]/60 hover:shadow-[0_0_30px_rgba(248,155,136,0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-[#F89B88]/10 text-[#F89B88] border border-[#F89B88]/30 font-bold">
                    {step.id}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-muted group-hover:text-[#F89B88] group-hover:bg-[#F89B88]/10 transition-colors">
                    <Icon size={16} />
                  </div>
                </div>

                {/* Step Info */}
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wider text-text-primary mb-2 group-hover:text-[#F89B88] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-sm md:text-xs text-text-secondary leading-snug">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector for Desktop */}
                {!isLast && (
                  <div className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/20 group-hover:text-[#F89B88] transition-colors">
                    <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Callout Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#161936]/80 via-[#231A38]/80 to-[#161936]/80 border border-[#F89B88]/30 p-6 backdrop-blur-md shadow-[0_0_25px_rgba(248,155,136,0.12)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#F89B88]/10 border border-[#F89B88]/30 text-[#F89B88] shrink-0 mt-0.5">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider mb-1">
                Beyond Generic Chatbots
              </h4>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                Judges look for autonomous execution, tool integration, and failure recovery — not static prompt wrappers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

