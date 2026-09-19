import Link from 'next/link'
import { eventConfig } from '@/lib/data/event'
import { ExternalLink, Phone } from 'lucide-react'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const footerNav = {
  Event: [
    { label: 'Home', href: '/' },
    { label: 'Challenges', href: '/challenges' },
    { label: 'Open-X', href: '/open-x' },
    { label: 'Judging', href: '/judging' },
  ],
  Participate: [
    { label: 'Register', href: '/register' },
    { label: 'Submission', href: '/submission' },
    { label: 'FAQ', href: '/faq' },
  ],
  Platforms: [
    { label: 'Unstop', href: eventConfig.registration.unstopUrl, external: true },
    { label: 'HACK2SKILL', href: eventConfig.registration.hack2skillUrl, external: true },
  ],
}

export function Footer() {
  const year = process.env.NEXT_PUBLIC_EVENT_YEAR ?? new Date().getFullYear()

  return (
    <footer className="bg-[#0B0D1B] border-t border-white/10 text-white pt-12 md:pt-16 pb-8 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_auto] gap-10 md:gap-12 pb-10 md:pb-12 border-b border-white/10 mb-8">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="mb-4">
              <span className="block text-[10px] font-bold tracking-[0.25em] uppercase text-[#F89B88] font-body mb-1">
                {eventConfig.presents}
              </span>
              <span className="block text-[20px] font-bold tracking-[0.14em] uppercase font-display text-white">
                PROJECT: <span className="text-[#F89B88]">ECLIPSE</span>
              </span>
              <span className="block text-[11px] tracking-[0.15em] uppercase text-slate-400 font-body mt-1">
                {eventConfig.descriptor}
              </span>
            </div>
            <p className="text-[13px] text-slate-300 leading-relaxed mb-4">
              Build AI systems that reason, use tools, execute workflows, verify outcomes and escalate when humans need to decide.
            </p>
            {eventConfig.contact.email && (
              <a
                href={`mailto:${eventConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-[12px] text-slate-300 hover:text-[#F89B88] transition-colors duration-150 bg-white/5 border border-white/10 px-3 py-2.5 sm:py-1.5 rounded-lg break-all sm:break-normal"
              >
                <span className="text-[#F89B88]">Email:</span> {eventConfig.contact.email}
              </a>
            )}
          </div>

          {/* Links & Coordinators */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-8 sm:gap-10 md:gap-14">
            {Object.entries(footerNav).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F89B88] font-body mb-4">
                  {group}
                </h3>
                <ul className="flex flex-col gap-0 sm:gap-3 list-none">
                  {links.map((link) => (
                    <li key={link.label}>
                      {'external' in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 py-2.5 sm:py-0 text-[13px] text-slate-300 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                          <ExternalLink size={11} className="opacity-60" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="block py-2.5 sm:py-0 text-[13px] text-slate-300 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Coordinators Column */}
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F89B88] font-body mb-4">
                Coordinators
              </h3>
              <ul className="flex flex-col gap-3 list-none">
                {eventConfig.contact.coordinators.map((c) => (
                  <li key={c.name} className="text-[13px]">
                    <span className="text-slate-400 block text-[11px] font-mono">{c.name}</span>
                    <a
                      href={`tel:${c.rawPhone}`}
                      className="text-slate-200 hover:text-[#F89B88] font-mono font-medium transition-colors duration-150 flex items-center gap-1 py-2.5 -my-1 sm:py-0 sm:my-0"
                    >
                      <Phone size={10} className="text-[#F89B88] shrink-0" />
                      {c.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-[11px]">
              © {year} GENIE X HUB. PROJECT: ECLIPSE — All rights reserved.
            </p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-[11px] text-slate-400">
              AI & Automation Hackathon · {eventConfig.tagline}
            </p>
          </div>

          {/* Social Vector Logos at Right End */}
          <div className="flex items-center gap-3">
            <a
              href={eventConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#F89B88] hover:border-[#F89B88]/60 hover:bg-[#F89B88]/10 hover:shadow-[0_0_15px_rgba(248,155,136,0.3)] transition-all duration-300"
            >
              <InstagramIcon size={17} />
            </a>

            <a
              href={eventConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#F89B88] hover:border-[#F89B88]/60 hover:bg-[#F89B88]/10 hover:shadow-[0_0_15px_rgba(248,155,136,0.3)] transition-all duration-300"
            >
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


