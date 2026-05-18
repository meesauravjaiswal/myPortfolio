'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Shield, FileDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TypingAnimation } from '@/components/ui/TypingAnimation'
import { personal } from '@/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.09, duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  }),
}

const socials = [
  { href: personal.github,    label: 'GitHub',      icon: Github  },
  { href: personal.linkedin,  label: 'LinkedIn',    icon: Linkedin },
  { href: personal.tryhackme, label: 'TryHackMe',   icon: Shield  },
  { href: `tel:${personal.phone}`, label: '+91 9939112334', icon: Phone },
]

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center pt-28 pb-20 z-10"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute -top-60 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.055) 0%, transparent 70%)' }}
        />
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-7 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Profile photo + status badge row */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="flex items-center gap-4 mb-7"
            >
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#22D3EE] shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                >
                  <Image
                    src="/saurav.png"
                    alt="Saurav Kumar Jaiswal"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                {/* Online dot */}
                <span
                  className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#34D399] border-2 border-[#02020A]"
                  aria-hidden="true"
                />
              </div>

              {/* Status badge */}
              <div className="inline-flex items-center gap-2 font-mono text-[11.5px] text-[#34D399] bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.22)] rounded-full px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse-dot" aria-hidden="true" />
                Available for Opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-display font-black text-[clamp(38px,5.5vw,66px)] leading-[1.04] tracking-[-2.5px] text-white mb-3.5"
            >
              Saurav Kumar<br />
              <span className="text-[#22D3EE]">Jaiswal</span>
            </motion.h1>

            {/* Typing roles */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="font-display font-semibold text-[clamp(17px,2.2vw,24px)] text-[#94A3B8] mb-5 min-h-[36px]"
            >
              <TypingAnimation words={personal.roles} className="text-[#22D3EE]" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="text-[15.5px] text-[#94A3B8] leading-[1.75] mb-8 max-w-[510px]"
            >
              {personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 bg-[#22D3EE] text-black font-semibold text-[14px] px-5 py-2.5 rounded-xl hover:shadow-[0_8px_28px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <ArrowRight size={15} aria-hidden="true" />
                View Projects
              </Link>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 bg-transparent text-white font-medium text-[14px] px-5 py-2.5 rounded-xl border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={15} aria-hidden="true" />
                Get In Touch
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 bg-transparent text-[#94A3B8] font-medium text-[14px] px-5 py-2.5 rounded-xl border border-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileDown size={15} aria-hidden="true" />
                Resume
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={5}
              className="flex flex-wrap items-center gap-5"
            >
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 font-mono text-[12px] text-[#475569] hover:text-[#22D3EE] transition-colors duration-200"
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Terminal card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div
              className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]"
              style={{ background: '#07070F', boxShadow: '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)' }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.018)]">
                <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
                <span className="ml-auto font-mono text-[11px] text-[#475569]">saurav@kali — zsh</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-[12.5px] leading-[1.9]">
                <div className="mb-4">
                  <div><span className="text-[#475569]">┌──(</span><span className="text-[#22D3EE]">saurav㉿kali</span><span className="text-[#475569]">)-[~]</span></div>
                  <div><span className="text-[#475569]">└─$ </span><span className="text-[#22D3EE]">cat profile.json</span></div>
                  <div className="mt-1 text-[#94A3B8]">{'{'}</div>
                  <div className="pl-3.5"><span className="text-[#818CF8]">"role"</span><span className="text-[#94A3B8]">: </span><span className="text-[#34D399]">"Cybersecurity Engineer"</span><span className="text-[#94A3B8]">,</span></div>
                  <div className="pl-3.5"><span className="text-[#818CF8]">"focus"</span><span className="text-[#94A3B8]">: </span><span className="text-[#34D399]">"VAPT &amp; Sec Automation"</span><span className="text-[#94A3B8]">,</span></div>
                  <div className="pl-3.5"><span className="text-[#818CF8]">"cgpa"</span><span className="text-[#94A3B8]">: </span><span className="text-[#34D399]">8.56</span><span className="text-[#94A3B8]">,</span></div>
                  <div className="pl-3.5"><span className="text-[#818CF8]">"status"</span><span className="text-[#94A3B8]">: </span><span className="text-[#34D399]">"Open to Work 🟢"</span></div>
                  <div className="text-[#94A3B8]">{'}'}</div>
                </div>
                <div className="mb-4">
                  <div><span className="text-[#475569]">└─$ </span><span className="text-[#22D3EE]">certs --verified</span></div>
                  <div><span className="text-[#34D399]">✓</span><span className="text-[#94A3B8]"> eJPTv2&nbsp;&nbsp;&nbsp;</span><span className="text-[#818CF8]">INE</span><span className="text-[#94A3B8]">&nbsp; Jun 2025</span></div>
                  <div><span className="text-[#34D399]">✓</span><span className="text-[#94A3B8]"> PT1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#818CF8]">THM</span><span className="text-[#94A3B8]">&nbsp; Aug 2025</span></div>
                  <div><span className="text-[#34D399]">✓</span><span className="text-[#94A3B8]"> ICCA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#818CF8]">INE</span><span className="text-[#94A3B8]">&nbsp; Jun 2025</span></div>
                </div>
                <div>
                  <div><span className="text-[#475569]">└─$ </span><span className="text-[#22D3EE]">tools --list</span></div>
                  <div className="text-[#94A3B8]">nmap&nbsp;&nbsp;burpsuite&nbsp;&nbsp;metasploit</div>
                  <div className="text-[#94A3B8]">sqlmap&nbsp;&nbsp;wireshark&nbsp;&nbsp;splunk</div>
                  <div className="text-[#94A3B8]">owasp-zap&nbsp;&nbsp;autopsy&nbsp;&nbsp;kali</div>
                  <div className="mt-1">
                    <span className="text-[#475569]">└─$ </span>
                    <span className="animate-blink inline-block w-2 h-3.5 bg-[#22D3EE] align-middle" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
