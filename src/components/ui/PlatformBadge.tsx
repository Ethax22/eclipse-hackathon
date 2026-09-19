'use client'

import React from 'react'
import { Sparkles, Cpu, Layers, ShieldCheck } from 'lucide-react'

export function PlatformBadges() {
  const badges = [
    { label: 'GENAI TRACK', icon: Sparkles },
    { label: 'AGENTIC AI WORKFLOWS', icon: Cpu },
    { label: 'OPEN-X TRACK', icon: Layers },
    { label: '100% END-TO-END BUILD', icon: ShieldCheck },
  ]

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-medium">
      {badges.map((b) => {
        const Icon = b.icon
        return (
          <div
            key={b.label}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#F89B88]/40 transition-all duration-200"
          >
            <Icon size={13} className="text-[#F89B88]" />
            <span className="tracking-wider text-[11px] font-semibold">{b.label}</span>
          </div>
        )
      })}
    </div>
  )
}
