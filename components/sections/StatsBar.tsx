'use client'

import { motion } from 'framer-motion'

const stats = [
  { num: '3', suffix: '+', label: 'Certifications' },
  { num: '2', suffix: '+', label: 'Projects Built' },
  { num: '8.56', suffix: '', label: 'CGPA at KIIT' },
  { num: '1', suffix: '+', label: 'Internship' },
]

export function StatsBar() {
  return (
    <div
      aria-label="Key statistics"
      className="relative z-10 border-y border-[rgba(255,255,255,0.07)] py-8 bg-[rgba(255,255,255,0.012)]"
    >
      <div className="max-w-6xl mx-auto px-7 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center py-2"
          >
            <div className="font-display font-black text-[38px] leading-none tracking-[-2px] text-white mb-1.5">
              {s.num.includes('.') ? (
                <>
                  <span className="text-[#22D3EE]">{s.num.split('.')[0]}.</span>
                  {s.num.split('.')[1]}
                </>
              ) : (
                <>
                  {s.num}
                  <span className="text-[#22D3EE]">{s.suffix}</span>
                </>
              )}
            </div>
            <div className="text-[12.5px] text-[#475569]">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
