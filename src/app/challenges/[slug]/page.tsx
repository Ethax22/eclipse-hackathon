import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getChallengeBySlug, challenges } from '@/lib/data/challenges'
import { ArrowLeft, ArrowRight, ShieldAlert, CheckCircle, Workflow } from 'lucide-react'

export function generateStaticParams() {
  return challenges.map((c) => ({ slug: c.slug }))
}

export default function ChallengeDetailPage({ params }: { params: { slug: string } }) {
  const challenge = getChallengeBySlug(params.slug)

  if (!challenge) {
    notFound()
  }

  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Back Link */}
        <Link
          href="/challenges"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-muted hover:text-orange-DEFAULT transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ALL CHALLENGES</span>
        </Link>

        {/* Hero Banner */}
        <div className="notch-md bg-bg-secondary border border-white/10 p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute right-6 top-6 font-display font-extrabold text-7xl md:text-9xl text-white/5 font-mono select-none">
            {challenge.number}
          </div>

          <div className="relative z-10 max-w-4xl">
            <span className="text-label text-orange-DEFAULT uppercase tracking-widest block mb-3 font-mono">
              CHALLENGE {challenge.number} &bull; {challenge.category}
            </span>
            <h1 className="text-h2 md:text-4xl font-display text-text-primary mb-6 leading-tight">
              {challenge.title}
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              {challenge.oneLiner}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Brief Column */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Problem Context */}
            <div className="notch-sm bg-bg-card border border-white/10 p-8">
              <h2 className="text-h4 font-display text-text-primary mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-DEFAULT" />
                Problem Context
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                {challenge.problemContext}
              </p>
            </div>

            {/* Core Challenge */}
            <div className="notch-sm bg-bg-card border border-white/10 p-8">
              <h2 className="text-h4 font-display text-text-primary mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-DEFAULT" />
                Challenge Requirement
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                {challenge.challenge}
              </p>
            </div>

            {/* Mandatory Capabilities */}
            <div className="notch-sm bg-bg-card border border-white/10 p-8">
              <h2 className="text-h4 font-display text-text-primary mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-DEFAULT" />
                Mandatory Capabilities ({challenge.capabilities.length})
              </h2>

              <div className="flex flex-col gap-3">
                {challenge.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 notch-sm">
                    <span className="font-mono text-xs text-orange-DEFAULT font-bold w-6">
                      0{idx + 1}
                    </span>
                    <span className="text-xs md:text-sm text-text-primary font-medium">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustrative Scenario */}
            <div className="notch-sm bg-bg-card border border-white/10 p-8">
              <h2 className="text-h4 font-display text-text-primary mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-DEFAULT" />
                Illustrative Scenario
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                {challenge.illustrativeScenario}
              </p>
            </div>

            {/* Safety & Governance (if present) */}
            {challenge.safetyGovernance && (
              <div className="notch-sm bg-orange-DEFAULT/10 border border-orange-DEFAULT/30 p-8">
                <h2 className="text-h4 font-display text-orange-bright mb-3 flex items-center gap-3">
                  <ShieldAlert size={20} className="text-orange-DEFAULT" />
                  Safety &amp; Governance Rules
                </h2>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {challenge.safetyGovernance}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Demo Trace */}
            <div className="notch-sm bg-bg-card border border-white/10 p-6">
              <h3 className="font-display font-bold text-sm tracking-wider uppercase text-text-primary mb-4 flex items-center gap-2">
                <Workflow size={16} className="text-orange-DEFAULT" />
                RECOMMENDED EXECUTION TRACE
              </h3>

              <div className="flex flex-col gap-2">
                {challenge.executionTrace.map((step, idx) => (
                  <div key={idx} className="text-xs font-mono p-2.5 bg-white/5 border border-white/5 text-text-secondary flex items-center gap-2">
                    <span className="text-orange-DEFAULT font-bold">▶</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Build Standard */}
            <div className="notch-sm bg-bg-card border border-white/10 p-6">
              <h3 className="font-display font-bold text-sm tracking-wider uppercase text-text-primary mb-3">
                BUILD REQUIREMENT
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                {challenge.whatToDemo}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-orange-bright">
                <CheckCircle size={14} />
                <span>End-to-End System Required</span>
              </div>
            </div>

            {/* Select Challenge CTA */}
            <div className="notch-sm bg-orange-DEFAULT p-6 text-white">
              <h3 className="font-display font-bold text-lg mb-2">
                SELECT THIS TRACK
              </h3>
              <p className="text-xs opacity-90 mb-6">
                Register your team and select Challenge {challenge.number} as your primary track.
              </p>
              <Link
                href="/register"
                className="w-full bg-white text-bg-primary hover:bg-text-primary text-xs font-semibold tracking-widest uppercase py-3.5 px-4 flex items-center justify-center gap-2 transition-colors"
              >
                <span>REGISTER NOW</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
