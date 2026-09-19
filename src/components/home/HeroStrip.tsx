'use client'

export function HeroStrip() {
  return (
    <div className="w-full bg-bg-secondary border-y border-white/10 py-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center md:justify-around gap-4 md:gap-6 md:text-center">
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-2xl text-orange-DEFAULT w-[4.5rem] md:w-auto shrink-0">05</span>
          <span className="text-xs font-semibold tracking-wider md:tracking-widest uppercase text-text-primary font-body text-left md:text-center">
            CURATED CHALLENGES
          </span>
        </div>

        <div className="hidden md:block w-px h-6 bg-white/10" />

        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-2xl text-orange-DEFAULT w-[4.5rem] md:w-auto shrink-0">01</span>
          <span className="text-xs font-semibold tracking-wider md:tracking-widest uppercase text-text-primary font-body text-left md:text-center">
            OPEN INNOVATION TRACK
          </span>
        </div>

        <div className="hidden md:block w-px h-6 bg-white/10" />

        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-2xl text-orange-DEFAULT w-[4.5rem] md:w-auto shrink-0">100%</span>
          <span className="text-xs font-semibold tracking-wider md:tracking-widest uppercase text-text-primary font-body text-left md:text-center">
            END-TO-END WORKING SYSTEMS
          </span>
        </div>
      </div>
    </div>
  )
}
