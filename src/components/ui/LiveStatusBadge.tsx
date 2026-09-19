'use client'

import React from 'react'

interface LiveStatusBadgeProps {
  label?: string
  className?: string
}

export function LiveStatusBadge({ label = 'Live', className = '' }: LiveStatusBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#F89B88]/50 hover:bg-white/10 ${className}`}
    >
      <span>{label}</span>
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F89B88] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F89B88]" />
      </span>
    </div>
  )
}
