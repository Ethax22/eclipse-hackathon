import { Hero } from '@/components/home/Hero'
import { DecorativeGrid } from '@/components/home/DecorativeGrid'
import { HeroStrip } from '@/components/home/HeroStrip'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { ChallengePreview } from '@/components/home/ChallengePreview'
import { LinearTimelineSection } from '@/components/home/LinearTimelineSection'
import { JudgingSection } from '@/components/home/JudgingSection'
import { PrizePoolSection } from '@/components/home/PrizePoolSection'
import { WhySection } from '@/components/home/WhySection'
import { SubmissionStatement } from '@/components/home/SubmissionStatement'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQSection } from '@/components/home/FAQSection'

export default function HomePage() {
  return (
    <div className="relative bg-[#0B0D1B] text-white min-h-screen">
      <DecorativeGrid />
      <Hero />
      <HeroStrip />
      <PhilosophySection />
      <ChallengePreview />
      <LinearTimelineSection />
      <JudgingSection />
      <PrizePoolSection />
      <WhySection />
      <SubmissionStatement />
      <FinalCTA />
      <FAQSection />
    </div>
  )
}
