'use client'

import { judgingCriteria, demoTrace } from '@/lib/data/judging'
import { Award, ShieldCheck } from 'lucide-react'

export default function JudgingPage() {
  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-label text-orange-DEFAULT uppercase tracking-widest block mb-2 font-mono">
            EVALUATION FRAMEWORK
          </span>
          <h1 className="text-h2 font-display text-text-primary mb-4">
            Official Judging System<span className="text-orange-DEFAULT">.</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg">
            PROJECT: ECLIPSE uses a strict 100-point evaluation breakdown focused on autonomous reasoning, tool usage, system reliability, and working execution.
          </p>
        </div>

        {/* 7 Criteria Weight Bars */}
        <div className="notch-md bg-bg-secondary border border-white/10 p-8 md:p-12 mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <h2 className="text-h4 font-display text-text-primary flex items-center gap-3">
              <Award className="text-orange-DEFAULT" size={22} />
              Evaluation Criteria &amp; Weights
            </h2>
            <span className="font-mono text-sm text-orange-DEFAULT font-bold">
              TOTAL: 100%
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {judgingCriteria.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="font-display font-bold text-text-primary">
                    {item.name}
                  </span>
                  <span className="font-mono font-extrabold text-orange-DEFAULT">
                    {item.weight}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-white/5 border border-white/10 notch-sm overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-orange-DEFAULT to-orange-bright transition-all duration-1000 ease-out"
                    style={{ width: `${item.weight * 3.5}%` }}
                  />
                </div>

                <p className="text-xs text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What Judges Should See */}
        <div className="notch-md bg-bg-card border border-white/10 p-8 md:p-12 mb-16">
          <span className="text-label text-orange-DEFAULT uppercase tracking-widest block mb-2 font-mono">
            DEMONSTRATION EXPECTATIONS
          </span>
          <h2 className="text-h3 font-display text-text-primary mb-6">
            What Judges Expect to See
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {demoTrace.map((item, idx) => (
              <div key={idx} className="p-5 bg-white/5 border border-white/5 notch-sm flex items-start gap-4">
                <span className="font-mono text-sm text-orange-DEFAULT font-bold">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider mb-1">
                    {item.step}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reliability & Failure Handling Section */}
        <div className="notch-sm bg-orange-DEFAULT/10 border border-orange-DEFAULT/30 p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
          <ShieldCheck size={32} className="text-orange-DEFAULT shrink-0 mt-1" />
          <div>
            <h3 className="font-display font-bold text-xl text-text-primary mb-2">
              RELIABILITY MATTERS (15%)
            </h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              AI agents operate in unpredictable environments. Submissions will be explicitly tested against edge cases, API rate limits, malformed inputs, and execution failures. Systems that gracefully handle failures and self-correct will earn top marks.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
