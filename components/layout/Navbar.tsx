'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { personal } from '@/data'

const navLinks = [
  { href: '/#hero',           label: 'Home'       },
  { href: '/#experience',     label: 'Experience' },
  { href: '/#projects',       label: 'Projects'   },
  { href: '/#certifications', label: 'Certs'      },
  { href: '/#skills',         label: 'Skills'     },
  { href: '/resume',          label: 'Resume'     },
  { href: '/#contact',        label: 'Contact'    },
]

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (!isHome) return
      const ids = ['contact', 'skills', 'certifications', 'projects', 'experience']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('/#')) return
    if (isHome) {
      e.preventDefault()
      const id = href.slice(2)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileOpen(false)
    }
    // if not on home, let Next.js navigate to /#section naturally
  }

  const isActive = (href: string) => {
    if (href === '/resume') return pathname === '/resume'
    if (href.startsWith('/#')) return isHome && activeSection === href.slice(2)
    return false
  }

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[rgba(2,2,10,0.88)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-7 py-3.5 flex items-center justify-between">
        <Link href="/" className="font-display font-black text-[19px] tracking-tight text-white hover:opacity-80 transition-opacity">
          SKJ<span className="text-[#22D3EE]">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className={cn(
                'text-[13.5px] font-medium px-3 py-1.5 rounded-lg transition-all duration-200',
                isActive(link.href)
                  ? 'text-[#22D3EE] bg-[rgba(34,211,238,0.08)]'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="ml-2 text-[13px] font-semibold bg-[#22D3EE] text-black px-4 py-1.5 rounded-lg hover:shadow-[0_4px_18px_rgba(34,211,238,0.3)] hover:-translate-y-px transition-all duration-200"
          >
            Hire Me ↗
          </a>
        </nav>

        <button
          className="md:hidden border border-[rgba(255,255,255,0.1)] rounded-lg p-2 text-[#94A3B8] hover:text-white transition-colors"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[rgba(2,2,10,0.96)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]"
          >
            <nav className="px-7 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={cn(
                    'text-[14px] font-medium py-2.5 px-3 rounded-lg transition-all duration-200',
                    isActive(link.href)
                      ? 'text-[#22D3EE] bg-[rgba(34,211,238,0.08)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${personal.email}`}
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-[13.5px] font-semibold bg-[#22D3EE] text-black px-4 py-2.5 rounded-lg text-center"
              >
                Hire Me ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
