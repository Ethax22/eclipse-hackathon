'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

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
    a: 'You can register through our official partner platforms: Unstop or HACK2SKILL. Visit our Register page for direct portal links.',
  },
  {
    q: 'Can we participate in OPEN-X?',
    a: 'Yes! If your idea does not fit the 5 curated tracks, you can register under OPEN-X (Open Innovation) and submit your own agentic project following the 7-step framework.',
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
    a: 'Registration opens September 20, 2026 and closes October 16, 2026. Round 1 runs Oct 1 - Oct 16, Round 2 runs Oct 19 - Oct 27, and Finals take place on October 31, 2026.',
  },
]

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-bg-primary min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-label text-orange-DEFAULT uppercase tracking-widest block mb-2 font-mono">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-h2 font-display text-text-primary mb-4">
            Everything You Need to Know<span className="text-orange-DEFAULT">.</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg">
            Got questions about PROJECT: ECLIPSE? Find clear answers regarding tracks, registration platforms, guidelines, and evaluation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="notch-sm bg-bg-card border border-white/10 overflow-hidden transition-colors hover:border-orange-DEFAULT/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base md:text-lg text-text-primary flex items-center gap-3">
                    <HelpCircle size={18} className="text-orange-DEFAULT shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-orange-DEFAULT transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-text-secondary text-sm leading-relaxed border-t border-white/5 bg-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
