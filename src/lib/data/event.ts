// lib/data/event.ts
// All event metadata is sourced from environment variables.
// Never hard-code dates, prizes, eligibility or registration URLs.

export const eventConfig = {
  name: 'PROJECT: ECLIPSE',
  brand: 'GENIE X HUB',
  presents: 'GENIE X HUB PRESENTS',
  descriptor: 'AI & AUTOMATION HACKATHON',
  tagline: 'Enter the unknown.',

  registration: {
    unstopUrl: process.env.NEXT_PUBLIC_UNSTOP_URL ?? '#',
    hack2skillUrl: process.env.NEXT_PUBLIC_HACK2SKILL_URL ?? '#',
  },

  dates: {
    registrationStart: process.env.NEXT_PUBLIC_REGISTRATION_START ?? 'TBA',
    registrationEnd: process.env.NEXT_PUBLIC_REGISTRATION_END ?? 'TBA',
    round1Start: process.env.NEXT_PUBLIC_ROUND1_START ?? 'TBA',
    round1End: process.env.NEXT_PUBLIC_ROUND1_END ?? 'TBA',
    round1Announce: process.env.NEXT_PUBLIC_ROUND1_ANNOUNCE ?? 'TBA',
    round2Start: process.env.NEXT_PUBLIC_ROUND2_START ?? 'TBA',
    round2End: process.env.NEXT_PUBLIC_ROUND2_END ?? 'TBA',
    round2Announce: process.env.NEXT_PUBLIC_ROUND2_ANNOUNCE ?? 'TBA',
    finalsDate: process.env.NEXT_PUBLIC_FINALS_DATE ?? 'TBA',
  },

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'support@geniehive.in',
    coordinators: [
      { name: 'Preetha', phone: '+91 89391 11219', rawPhone: '+918939111219' },
      { name: 'Anas', phone: '+91 90800 41025', rawPhone: '+919080041025' },
      { name: 'Ramya', phone: '+91 73389 69423', rawPhone: '+917338969423' },
    ],
  },

  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/genie_hive?stkn=eDJveHdkcjZieTF4',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/genie-hive/',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? '',
  },
}

export type EventConfig = typeof eventConfig

export function formatEventDate(isoDate: string): string {
  if (isoDate === 'TBA') return 'TBA'
  try {
    return new Date(isoDate).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return isoDate
  }
}

export const timeline = [
  {
    phase: 'Registration Opens',
    date: 'registrationStart' as const,
    description: 'Sign up on Unstop or HACK2SKILL',
  },
  {
    phase: 'Registration Closes',
    date: 'registrationEnd' as const,
    description: 'Last day to register your team',
  },
  {
    phase: 'Round 1 Begins',
    date: 'round1Start' as const,
    description: 'Build your agentic solution',
  },
  {
    phase: 'Round 1 Submission',
    date: 'round1End' as const,
    description: 'Submit your Round 1 project',
  },
  {
    phase: 'Round 1 Results',
    date: 'round1Announce' as const,
    description: 'Shortlisted teams announced',
  },
  {
    phase: 'Round 2 Begins',
    date: 'round2Start' as const,
    description: 'Finalists continue building',
  },
  {
    phase: 'Round 2 Submission',
    date: 'round2End' as const,
    description: 'Final submission deadline',
  },
  {
    phase: 'Round 2 Results',
    date: 'round2Announce' as const,
    description: 'Final shortlist announced',
  },
  {
    phase: 'Grand Finals',
    date: 'finalsDate' as const,
    description: 'Live demos & award ceremony',
  },
]
