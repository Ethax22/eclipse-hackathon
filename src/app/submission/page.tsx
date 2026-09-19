import { eventConfig, formatEventDate, timeline } from '@/lib/data/event'
import { CheckSquare, Calendar, FileText, Code2, Video, ShieldAlert } from 'lucide-react'

const checklistItems = [
  { icon: Code2, title: 'Working Prototype', desc: 'Demonstrable, executable system code (not mock UI screens).' },
  { icon: FileText, title: 'Problem & Solution Summary', desc: 'Concise explanation of target problem and architectural approach.' },
  { icon: FileText, title: 'Architecture / Workflow Diagram', desc: 'Visual diagram showing agent loops, tools, databases, and APIs used.' },
  { icon: Code2, title: 'GitHub / Code Repository', desc: 'Clean repository with setup instructions and environment configs.' },
  { icon: Video, title: 'Demo Video / Live Demo', desc: '3-5 minute video showcasing input -> understand -> plan -> act -> verify.' },
  { icon: ShieldAlert, title: 'Limitations & Safety Controls', desc: 'Explicit documentation of known edge cases and human-in-the-loop guardrails.' },
]

export default function SubmissionPage() {
  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-bg-primary min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-label text-orange-DEFAULT uppercase tracking-widest block mb-2 font-mono">
            SUBMISSION REQUIREMENTS
          </span>
          <h1 className="text-h2 font-display text-text-primary mb-4">
            Deliverables & Timeline<span className="text-orange-DEFAULT">.</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg">
            Review the mandatory submission checklist and key milestone dates for PROJECT: ECLIPSE.
          </p>
        </div>

        {/* Submission Checklist Grid */}
        <div className="notch-md bg-bg-secondary border border-white/10 p-5 sm:p-8 md:p-12 mb-10 md:mb-16">
          <h2 className="text-h3 font-display text-text-primary mb-8 flex items-center gap-3">
            <CheckSquare className="text-orange-DEFAULT" size={24} />
            Mandatory Submission Checklist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklistItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="notch-sm bg-bg-card border border-white/10 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 bg-orange-DEFAULT/10 border border-orange-DEFAULT/30 flex items-center justify-center text-orange-DEFAULT mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-base text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-xs text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Official Timeline Section */}
        <div className="notch-md bg-bg-card border border-white/10 p-5 sm:p-8 md:p-12">
          <h2 className="text-h3 font-display text-text-primary mb-8 flex items-center gap-3">
            <Calendar className="text-orange-DEFAULT" size={24} />
            Official Event Timeline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, idx) => {
              const rawDate = eventConfig.dates[item.date]
              const formattedDate = formatEventDate(rawDate)
              return (
                <div key={idx} className="p-5 bg-white/5 border border-white/10 notch-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-xs text-orange-DEFAULT font-bold">
                        PHASE 0{idx + 1}
                      </span>
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-orange-DEFAULT/10 border border-orange-DEFAULT/30 text-orange-bright">
                        {formattedDate}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-text-primary mb-1">
                      {item.phase}
                    </h3>
                    <p className="text-sm md:text-xs text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
