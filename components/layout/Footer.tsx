import Link from 'next/link'
import { Github, Linkedin, Mail, Shield } from 'lucide-react'
import { personal } from '@/data'

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative z-10 border-t border-[rgba(255,255,255,0.07)] py-10 mt-0"
    >
      <div className="max-w-6xl mx-auto px-7">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <Link
              href="/"
              className="font-display font-black text-[18px] tracking-tight text-white block mb-2"
            >
              SKJ<span className="text-[#22D3EE]">.</span>
            </Link>
            <p className="text-[13px] text-[#475569] max-w-xs leading-relaxed">
              {personal.title} · {personal.currentRole}
            </p>
            <div className="flex items-center gap-1 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse-dot inline-block" />
              <span className="text-[11.5px] font-mono text-[#34D399]">Available for opportunities</span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] text-[#475569] hover:text-[#22D3EE] transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center text-[#475569] hover:text-[#22D3EE] hover:border-[rgba(34,211,238,0.3)] transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center text-[#475569] hover:text-[#22D3EE] hover:border-[rgba(34,211,238,0.3)] transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-8 h-8 border border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center text-[#475569] hover:text-[#22D3EE] hover:border-[rgba(34,211,238,0.3)] transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail size={15} />
            </a>
            <a
              href={personal.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center text-[#475569] hover:text-[#22D3EE] hover:border-[rgba(34,211,238,0.3)] transition-all duration-200"
              aria-label="TryHackMe Profile"
            >
              <Shield size={15} />
            </a>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.05)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#2D3748]">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <p className="font-mono text-[11px] text-[#2D3748]">
            Built with Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
