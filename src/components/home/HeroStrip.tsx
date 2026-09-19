'use client'

export function HeroStrip() {
  return (
    <div className="w-full bg-bg-secondary border-y border-white/10 py-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 flex flex-wrap items-center justify-around gap-6 text-center">
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-2xl text-orange-DEFAULT">05</span>
          <span className="text-xs font-semibold tracking-widest uppercase text-text-primary font-body">
            CURATED CHALLENGES
          </span>
        </div>

        <div className="hidden md:block w-px h-6 bg-white/10" />

        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-2xl text-orange-DEFAULT">01</span>
          <span className="text-xs font-semibold tracking-widest uppercase text-text-primary font-body">
            OPEN INNOVATION TRACK
          </span>
        </div>

        <div className="hidden md:block w-px h-6 bg-white/10" />

        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-2xl text-orange-DEFAULT">100%</span>
          <span className="text-xs font-semibold tracking-widest uppercase text-text-primary font-body">
            END-TO-END WORKING SYSTEMS
          </span>
        </div>
      </div>
    </div>
  )
}
