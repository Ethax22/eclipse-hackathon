import Link from 'next/link'
import { ArrowRight, AlertOctagon, CheckCircle2 } from 'lucide-react'

const openXFramework = [
  { step: '01', title: 'Problem', desc: 'Clearly articulate a real-world problem domain and the pain point experienced by users.' },
  { step: '02', title: 'Target Users', desc: 'Identify the specific audience, enterprise role, or industry domain benefiting from the system.' },
  { step: '03', title: 'Existing Gap', desc: 'Explain why existing solutions, manual workflows, or simple LLM prompts fall short.' },
  { step: '04', title: 'Proposed Solution', desc: 'Detail your overall architectural approach and autonomous workflow design.' },
  { step: '05', title: 'AI / Agent Component', desc: 'Define the multi-step reasoning, tool execution, API calls, and decision loops built.' },
  { step: '06', title: 'Demonstration', desc: 'Show a live or recorded end-to-end trace from input trigger to verified execution.' },
  { step: '07', title: 'Impact', desc: 'Quantify potential time saved, error reduction, operational speed, or economic value created.' },
]

export default function OpenXPage() {
  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Hero */}
        <div className="notch-md bg-bg-secondary border border-white/10 p-8 md:p-14 mb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-orange-DEFAULT/20 via-transparent to-transparent opacity-60 pointer-events-none" />

          <span className="text-label text-orange-DEFAULT uppercase tracking-widest block mb-3 font-mono">
            OPEN INNOVATION TRACK
          </span>
          <h1 className="text-h1 font-display text-text-primary mb-4">
            OPEN-X<span className="text-orange-DEFAULT">.</span>
          </h1>
          <h2 className="text-h3 font-display font-semibold text-text-secondary mb-6">
            BUILD BEYOND THE BRIEF
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a unique problem domain outside our 5 curated challenges? OPEN-X allows teams to define their own real-world challenge using GenAI, Agentic AI, or intelligent automation.
          </p>
        </div>

        {/* Not Just An AI Wrapper Rule */}
        <div className="notch-sm bg-orange-DEFAULT/10 border border-orange-DEFAULT/40 p-8 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <AlertOctagon size={28} className="text-orange-DEFAULT shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-lg text-text-primary uppercase tracking-wider mb-2">
                THE &quot;NO WRAPPER&quot; RULE
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-3xl">
                OPEN-X submissions are strictly evaluated on agentic capabilities — tool usage, autonomous multi-step reasoning, external system integration, and fault recovery. A basic UI around an LLM chat endpoint will not qualify.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Step Framework */}
        <div className="mb-16">
          <div className="max-w-2xl mb-12">
            <span className="text-label text-orange-DEFAULT uppercase tracking-widest block mb-2 font-mono">
              SUBMISSION FRAMEWORK
            </span>
            <h2 className="text-h2 font-display text-text-primary mb-4">
              Seven-Step OPEN-X Brief<span className="text-orange-DEFAULT">.</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              Every OPEN-X project submission must explicitly document and address these seven structural components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openXFramework.map((item) => (
              <div key={item.step} className="notch-sm bg-bg-card border border-white/10 p-6 flex flex-col justify-between hover:border-orange-DEFAULT/50 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-extrabold text-2xl text-orange-DEFAULT font-mono">
                      {item.step}
                    </span>
                    <CheckCircle2 size={16} className="text-text-muted" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="notch-md bg-bg-card border border-white/10 p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-h3 font-display text-text-primary mb-4">
            Ready to Submit an OPEN-X Idea?
          </h2>
          <p className="text-text-secondary text-sm mb-8">
            Register your team today and choose OPEN-X as your target track.
          </p>
          <Link
            href="/register"
            className="notch-sm bg-orange-DEFAULT hover:bg-orange-bright text-white text-[13px] font-semibold tracking-widest uppercase px-8 py-4 inline-flex items-center gap-3 transition-all"
          >
            <span>REGISTER FOR OPEN-X</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
