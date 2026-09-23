'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'What is PROJECT: ECLIPSE?',
    a: 'PROJECT: ECLIPSE is an AI & Automation Hackathon presented by GENIE X HUB focusing on building autonomous agents, GenAI workflows, and intelligent system integrations.',
  },
  {
    q: 'Who is eligible to participate?',
    a: 'The hackathon is open to students, developers, researchers, and AI enthusiasts. Teams can consist of 1 to 5 members.',
  },
  {
    q: 'Where do I register?',
    a: 'You can register through our official partner platforms: Unstop or HACK2SKILL. Click the Register Now button at the top of the page.',
  },
  {
    q: 'Can we participate in OPEN-X?',
    a: 'Yes! If your idea does not fit the 5 curated tracks, you can register under OPEN-X (Open Innovation) and submit your own agentic project.',
  },
  {
    q: 'What are the judging criteria?',
    a: 'Projects are evaluated across 7 weighted dimensions totaling 100%: Agentic Reasoning (20%), Autonomous Task Completion (20%), Tool Integration (15%), Reliability & Failure Handling (15%), Problem Relevance (10%), Innovation (10%), and Demonstration (10%).',
  },
  {
    q: 'Are generic LLM wrappers allowed?',
    a: 'No. Submissions must demonstrate actual tool calling, multi-step planning, or external API execution. Simple prompt UI wrappers will receive low scores on agentic criteria.',
  },
  {
    q: 'What are the key dates?',
    a: 'Registration opens September 20, 2026 and closes September 30, 2026. Round 1 runs Oct 1 - Oct 6, Round 2 runs Oct 11 - Oct 23, and Finals take place on October 27, 2026.',
  },
]

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0B0D1B] relative overflow-hidden text-white border-b border-white/10">
      {/* Background ambient glow behind center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#F89B88]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#F89B88] font-body block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Everything You Need to Know<span className="text-[#F89B88]">.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Got questions about PROJECT: ECLIPSE? Find clear answers regarding tracks, registration platforms, guidelines, and evaluation.
          </p>
        </div>

        {/* Centered Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border backdrop-blur-md overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#161936]/90 border-[#F89B88]/70 shadow-[0_0_35px_rgba(248,155,136,0.3)] ring-1 ring-[#F89B88]/40'
                    : 'bg-[#161936]/30 border-white/10 opacity-80 hover:opacity-100 hover:border-[#F89B88]/50 hover:shadow-[0_0_25px_rgba(248,155,136,0.2)] hover:bg-[#161936]/70'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                >
                  <span
                    className={`font-display font-bold text-base md:text-lg flex items-center gap-3 transition-colors duration-200 ${
                      isOpen ? 'text-[#F89B88]' : 'text-white hover:text-[#F89B88]'
                    }`}
                  >
                    <HelpCircle size={20} className={`shrink-0 ${isOpen ? 'text-[#F89B88]' : 'text-slate-400'}`} />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#F89B88] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-3 sm:pt-2 text-slate-300 text-sm leading-relaxed border-t border-white/10 bg-white/5">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
