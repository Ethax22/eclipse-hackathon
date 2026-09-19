'use client'

export function DecorativeGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Fine technical grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Decorative corner crosshairs */}
      <div className="absolute top-24 left-8 w-4 h-4 border-t border-l border-white/20" />
      <div className="absolute top-24 right-8 w-4 h-4 border-t border-r border-white/20" />
      <div className="absolute bottom-12 left-8 w-4 h-4 border-b border-l border-white/20" />
      <div className="absolute bottom-12 right-8 w-4 h-4 border-b border-r border-white/20" />

      {/* Star glyphs */}
      <div className="absolute top-36 right-1/4 text-white/30 text-xs font-mono">✦</div>
      <div className="absolute bottom-40 left-16 text-orange-DEFAULT/40 text-sm font-mono">✦</div>
      <div className="absolute top-1/2 right-12 text-white/20 text-xs font-mono">✦</div>
    </div>
  )
}
