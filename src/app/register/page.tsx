import { eventConfig, formatEventDate } from '@/lib/data/event'
import { ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function RegisterPage() {
  const regStartFormatted = formatEventDate(eventConfig.dates.registrationStart)
  const regEndFormatted = formatEventDate(eventConfig.dates.registrationEnd)

  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <span className="text-label text-orange-DEFAULT uppercase tracking-widest block mb-2 font-mono">
            OFFICIAL REGISTRATION
          </span>
          <h1 className="text-h2 font-display text-text-primary mb-4">
            Register Your Team<span className="text-orange-DEFAULT">.</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg">
            Registration is hosted on our official partner platforms. Select your preferred platform below to proceed.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-orange-DEFAULT/10 border border-orange-DEFAULT/30 notch-sm">
            <span className="text-xs font-mono text-orange-bright">
              REGISTRATION WINDOW: {regStartFormatted} — {regEndFormatted}
            </span>
          </div>
        </div>

        {/* Platform Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Unstop */}
          <div className="notch-md bg-bg-card border border-white/10 p-8 flex flex-col justify-between hover:border-orange-DEFAULT/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-orange-DEFAULT font-bold">
                  PLATFORM 01
                </span>
                <span className="text-xs font-mono text-text-muted px-2.5 py-1 bg-white/5 border border-white/10">
                  UNSTOP
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl text-text-primary mb-3 group-hover:text-orange-bright transition-colors">
                Register on Unstop
              </h2>

              <p className="text-xs text-text-secondary leading-relaxed mb-8">
                Complete team registration, challenge track selection, and participant details directly on Unstop.
              </p>
            </div>

            <a
              href={eventConfig.registration.unstopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full notch-sm bg-orange-DEFAULT hover:bg-orange-bright text-white text-xs font-semibold tracking-widest uppercase py-4 px-6 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,106,0,0.3)]"
            >
              <span>CONTINUE TO UNSTOP</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* HACK2SKILL */}
          <div className="notch-md bg-bg-card border border-white/10 p-8 flex flex-col justify-between hover:border-orange-DEFAULT/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-orange-DEFAULT font-bold">
                  PLATFORM 02
                </span>
                <span className="text-xs font-mono text-text-muted px-2.5 py-1 bg-white/5 border border-white/10">
                  HACK2SKILL
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl text-text-primary mb-3 group-hover:text-orange-bright transition-colors">
                Register on HACK2SKILL
              </h2>

              <p className="text-xs text-text-secondary leading-relaxed mb-8">
                Join the hackathon community, form teams, and submit your project on the HACK2SKILL platform.
              </p>
            </div>

            <a
              href={eventConfig.registration.hack2skillUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full notch-sm bg-orange-DEFAULT hover:bg-orange-bright text-white text-xs font-semibold tracking-widest uppercase py-4 px-6 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,106,0,0.3)]"
            >
              <span>CONTINUE TO HACK2SKILL</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Instructions */}
        <div className="max-w-3xl mx-auto notch-sm bg-bg-card border border-white/10 p-8">
          <h3 className="font-display font-bold text-base text-text-primary mb-4 flex items-center gap-2">
            <ShieldCheck size={18} className="text-orange-DEFAULT" />
            REGISTRATION GUIDELINES
          </h3>
          <ul className="flex flex-col gap-3 text-xs text-text-secondary list-none">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-orange-DEFAULT shrink-0 mt-0.5" />
              <span>Ensure all team members register under the same team name on your chosen platform.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-orange-DEFAULT shrink-0 mt-0.5" />
              <span>Select one primary Challenge Track (01-05 or OPEN-X) during registration.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-orange-DEFAULT shrink-0 mt-0.5" />
              <span>Registration deadline is September 30, 2026. Submissions open on October 1, 2026.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
