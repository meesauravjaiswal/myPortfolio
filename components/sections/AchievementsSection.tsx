'use client'

import { motion } from 'framer-motion'
import { achievements } from '@/data'

export function AchievementsSection() {
  return (
    <section
      aria-labelledby="achievements-title"
      className="relative z-10 py-20 bg-[rgba(255,255,255,0.012)] border-y border-[rgba(255,255,255,0.07)]"
    >
      <div className="max-w-6xl mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Achievements</div>
          <h2 id="achievements-title" className="font-display font-black text-[clamp(26px,3.5vw,42px)] tracking-[-1.5px] text-white mb-10">
            Highlights
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 flex gap-4 items-start hover:border-[rgba(34,211,238,0.18)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
            >
              <span className="text-[26px] flex-shrink-0 leading-none" aria-hidden="true">{a.icon}</span>
              <div>
                <h3 className="font-display font-bold text-[15px] text-white mb-1.5">{a.title}</h3>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">{a.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
