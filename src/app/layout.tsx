import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ClickSpark } from '@/components/ui/ClickSpark'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PROJECT: ECLIPSE | AI & Automation Hackathon',
  description:
    'PROJECT: ECLIPSE — an AI & Automation Hackathon presented by GENIE X HUB where teams build GenAI, Agentic AI and intelligent automation systems through five curated real-world challenges or the OPEN-X innovation track.',
  keywords: ['hackathon', 'AI', 'automation', 'agentic AI', 'GenAI', 'GENIE X HUB', 'PROJECT ECLIPSE'],
  openGraph: {
    title: 'PROJECT: ECLIPSE | AI & Automation Hackathon',
    description: 'Enter the unknown. Build AI that thinks, acts and verifies.',
    type: 'website',
    siteName: 'PROJECT: ECLIPSE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PROJECT: ECLIPSE | AI & Automation Hackathon',
    description: 'Enter the unknown. Build AI that thinks, acts and verifies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-[#0B0D1B] text-white antialiased">
        <ClickSpark color="#F89B88" size={2.5} radius={18} count={8} duration={400}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClickSpark>
      </body>
    </html>
  )
}
