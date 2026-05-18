'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative z-10 py-24 bg-[rgba(255,255,255,0.012)] border-y border-[rgba(255,255,255,0.07)]"
    >
      <div className="max-w-6xl mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-label">Projects</div>
          <h2 id="projects-title" className="font-display font-black text-[clamp(26px,3.5vw,42px)] tracking-[-1.5px] text-white mb-3">
            What I&apos;ve Built
          </h2>
          <p className="text-[15.5px] text-[#94A3B8] max-w-[540px] leading-[1.75] mb-14">
            Security tools and automation frameworks built for real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="group relative bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 flex flex-col gap-5 overflow-hidden hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(34,211,238,0.22)] hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: 'none' }}
            >
              {/* Top gradient line */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#818CF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                project.category === 'cybersecurity'
                  ? 'bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.22)]'
                  : 'bg-[rgba(129,140,248,0.1)] border border-[rgba(129,140,248,0.22)]'
              }`}>
                {project.icon}
              </div>

              <div>
                <h3 className="font-display font-bold text-[20px] text-white tracking-tight">{project.title}</h3>
                <div className="font-mono text-[10.5px] text-[#475569] uppercase tracking-[0.08em] mt-1">
                  {project.subtitle} · {project.year}
                </div>
              </div>

              <p className="text-[14px] text-[#94A3B8] leading-[1.72] flex-1">{project.description}</p>

              <ul className="space-y-1.5" aria-label="Key features">
                {project.features.map(f => (
                  <li key={f} className="text-[13px] text-[#94A3B8] flex items-start gap-2">
                    <span className="text-[#22D3EE] mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.stack.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#22D3EE] hover:opacity-70 transition-opacity"
                  aria-label={`${project.title} GitHub Repository`}
                >
                  <Github size={13} aria-hidden="true" />
                  View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#94A3B8] hover:text-white transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-[#94A3B8] hover:text-[#22D3EE] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(34,211,238,0.3)] px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            View all projects
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
