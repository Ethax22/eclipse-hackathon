'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { eventConfig } from '@/lib/data/event'

import { PillButton } from '@/components/ui/PillButton'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/challenges', label: 'Challenges' },
  { href: '/#timeline', label: 'Timeline' },
  { href: '/#judging', label: 'Judging' },
  { href: '/#faq', label: 'FAQ' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'px-6 md:px-12 lg:px-20 py-5',
          'flex items-center justify-between',
          scrolled
            ? 'bg-[#0B0D1B]/90 border-b border-white/10 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
        aria-label="Site navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group" aria-label="PROJECT: ECLIPSE home">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#F89B88] font-body">
            {eventConfig.brand}
          </span>
          <span className="text-[16px] font-bold tracking-[0.14em] uppercase font-display text-white group-hover:text-[#F89B88] transition-colors duration-200">
            PROJECT: <span className="text-[#F89B88]">ECLIPSE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
          <ul className="flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-[14px] font-medium tracking-wide transition-colors duration-150 py-1',
                    pathname === link.href
                      ? 'text-white font-semibold border-b-2 border-[#F89B88]'
                      : 'text-slate-300 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 ml-4">
            <PillButton href="/register" variant="peach" size="sm">
              Register Now
            </PillButton>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2.5 -mr-2.5"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          aria-expanded={drawerOpen}
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Drawer overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black/70 transition-opacity duration-300',
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-[70] h-[100dvh] w-[min(320px,90vw)] bg-bg-secondary border-l border-white/10 overflow-y-auto',
          'flex flex-col p-6 sm:p-8 gap-6 transition-transform duration-300',
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="self-end text-text-secondary hover:text-text-primary p-2.5 -m-2.5"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col">
          <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-orange-DEFAULT font-body">
            {eventConfig.brand}
          </span>
          <span className="text-[16px] font-bold tracking-[0.12em] uppercase font-display">
            PROJECT: <span className="text-orange-DEFAULT">ECLIPSE</span>
          </span>
        </div>

        <hr className="border-white/10" />

        <nav>
          <ul className="flex flex-col gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block py-3 font-display text-[22px] font-bold transition-colors duration-150',
                    pathname === link.href
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/register"
          className="notch-sm bg-orange-DEFAULT hover:bg-orange-bright text-white text-[12px] font-semibold tracking-[0.12em] uppercase px-6 py-4 text-center transition-all duration-200 mt-auto"
        >
          Register Now
        </Link>
      </div>
    </>
  )
}
