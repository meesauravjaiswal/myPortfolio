'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data'

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative z-10 py-24 bg-[rgba(255,255,255,0.012)] border-y border-[rgba(255,255,255,0.07)]"
    >
      <div className="max-w-6xl mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-label">Skills</div>
          <h2 id="skills-title" className="font-display font-black text-[clamp(26px,3.5vw,42px)] tracking-[-1.5px] text-white mb-3">
            Technical Arsenal
          </h2>
          <p className="text-[15.5px] text-[#94A3B8] max-w-[540px] leading-[1.75] mb-14">
            A focused set of cybersecurity and engineering skills built through certifications, projects, and real-world work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-5 hover:border-[rgba(34,211,238,0.18)] transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10.5px] text-[#22D3EE] uppercase tracking-[0.12em]">
                  {group.group}
                </span>
                <span className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" aria-hidden="true" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
