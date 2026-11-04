'use client'

import { motion } from 'framer-motion'
import { education } from '@/data'

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="edu-title" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-label">Education</div>
          <h2 id="edu-title" className="font-display font-black text-[clamp(26px,3.5vw,42px)] tracking-[-1.5px] text-white mb-3">
            Academic Background
          </h2>
          <p className="text-[15.5px] text-[#94A3B8] max-w-[540px] leading-[1.75] mb-14">
            B.Tech in Computer Science & Communication Engineering from KIIT, graduated 2026.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <motion.article
              key={edu.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 flex gap-5 hover:border-[rgba(34,211,238,0.18)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.22)] rounded-xl flex items-center justify-center text-xl" aria-hidden="true">
                {edu.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-[15.5px] text-white mb-1">{edu.institution}</h3>
                <div className="text-[13px] text-[#94A3B8] mb-2 leading-relaxed">{edu.degree}</div>
                <div className="font-mono text-[11px] text-[#475569] mb-2">{edu.period} · {edu.location}</div>
                <div className="inline-flex items-center font-mono text-[11.5px] text-[#22D3EE] bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.22)] rounded-md px-2.5 py-1">
                  {edu.score}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
