'use client'

import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle } from 'lucide-react'
import { certifications } from '@/data'

export function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="certs-title" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-label">Certifications</div>
          <h2 id="certs-title" className="font-display font-black text-[clamp(26px,3.5vw,42px)] tracking-[-1.5px] text-white mb-3">
            Verified Credentials
          </h2>
          <p className="text-[15.5px] text-[#94A3B8] max-w-[540px] leading-[1.75] mb-14">
            Industry-recognized certifications demonstrating practical penetration testing and cloud security expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="group bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 flex flex-col gap-4 hover:border-[rgba(34,211,238,0.22)] hover:bg-[rgba(255,255,255,0.05)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0 ${
                    cert.type === 'ine'
                      ? 'bg-gradient-to-br from-[rgba(34,211,238,0.15)] to-[rgba(129,140,248,0.1)] border border-[rgba(34,211,238,0.22)]'
                      : 'bg-gradient-to-br from-[rgba(248,113,113,0.15)] to-[rgba(251,146,60,0.1)] border border-[rgba(248,113,113,0.22)]'
                  }`}
                  aria-hidden="true"
                >
                  {cert.badge}
                </div>
                <div className="inline-flex items-center gap-1 font-mono text-[10px] text-[#34D399] bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.22)] rounded-md px-2 py-1">
                  <CheckCircle size={10} aria-hidden="true" />
                  Verified
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-display font-bold text-[15.5px] text-white leading-tight tracking-tight">{cert.title}</h3>
                <div className="text-[12.5px] text-[#475569] mt-1">{cert.issuer} · {cert.issued}</div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map(s => (
                  <span key={s} className="font-mono text-[10.5px] text-[#94A3B8] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-md px-2 py-0.5">
                    {s}
                  </span>
                ))}
              </div>

              {/* Credential ID */}
              <div className="font-mono text-[10.5px] text-[#475569] bg-[#0C0C18] border border-[rgba(255,255,255,0.07)] rounded-md px-3 py-2 truncate">
                ID: {cert.credentialId}
              </div>

              {/* Verify Link */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[#22D3EE] hover:opacity-70 transition-opacity mt-auto"
                aria-label={`Verify ${cert.title} credential`}
              >
                <ExternalLink size={11} aria-hidden="true" />
                Verify Credential
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
