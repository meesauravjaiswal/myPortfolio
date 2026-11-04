'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { experiences } from '@/data'

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-label">Experience</div>
          <h2 id="exp-title" className="font-display font-black text-[clamp(26px,3.5vw,42px)] tracking-[-1.5px] text-white mb-3">
            Where I&apos;ve Worked
          </h2>
          <p className="text-[15.5px] text-[#94A3B8] max-w-[540px] leading-[1.75] mb-14">
            Software engineering at Cisco, a Capgemini fellowship, a police cyber-cell internship, and leading a university security club.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-7 border-l border-gradient-to-b from-[#22D3EE] to-[#818CF8]"
          style={{ borderImageSlice: 1, borderImageSource: 'linear-gradient(to bottom, #22D3EE, #818CF8, transparent)' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className={`relative pb-12 ${i === experiences.length - 1 ? 'pb-0' : ''}`}
            >
              {/* Dot */}
              <div className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-[#0C0C18] border-2 border-[#22D3EE] transition-all duration-300 group-hover:bg-[#22D3EE]" aria-hidden="true" />

              <div className="group bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(34,211,238,0.22)] hover:translate-x-1 transition-all duration-300">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-2.5">
                  <h3 className="font-display font-bold text-[16.5px] text-white tracking-tight">{exp.org}</h3>
                  <span className="font-mono text-[11.5px] text-[#475569] bg-[#0C0C18] border border-[rgba(255,255,255,0.07)] rounded-md px-2.5 py-1">
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2 mb-2.5">
                  <span className="text-[13.5px] text-[#22D3EE] font-medium">{exp.role}</span>
                  <span className="font-mono text-[11.5px] text-[#475569]">· {exp.location}</span>
                </div>
                <p className="text-[14px] text-[#94A3B8] leading-[1.72] mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[#22D3EE] hover:opacity-70 transition-opacity mt-4"
                  >
                    <ExternalLink size={11} aria-hidden="true" />
                    {exp.linkLabel ?? 'View'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
