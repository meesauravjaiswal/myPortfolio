'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data'

const filters = ['All', 'cybersecurity', 'ai', 'cloud', 'automation']

export function ProjectsPageContent() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <div className="max-w-6xl mx-auto px-7">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-14"
      >
        <div className="section-label">Projects</div>
        <h1 className="font-display font-black text-[clamp(30px,4vw,52px)] tracking-[-2px] text-white mb-3">
          What I&apos;ve Built
        </h1>
        <p className="text-[15.5px] text-[#94A3B8] max-w-[540px] leading-[1.75]">
          Security tools, automation frameworks, and full-stack applications. Each project represents a real engineering challenge solved.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Project category filter">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`font-mono text-[12px] px-4 py-2 rounded-lg border transition-all duration-200 ${
              active === f
                ? 'text-[#22D3EE] border-[rgba(34,211,238,0.35)] bg-[rgba(34,211,238,0.08)]'
                : 'text-[#475569] border-[rgba(255,255,255,0.07)] hover:text-white hover:border-[rgba(255,255,255,0.15)]'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group relative bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 flex flex-col gap-5 overflow-hidden hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(34,211,238,0.22)] hover:-translate-y-1 transition-all duration-300"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#818CF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                project.category === 'cybersecurity'
                  ? 'bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.22)]'
                  : 'bg-[rgba(129,140,248,0.1)] border border-[rgba(129,140,248,0.22)]'
              }`} aria-hidden="true">
                {project.icon}
              </div>
              <div>
                <h2 className="font-display font-bold text-[20px] text-white tracking-tight">{project.title}</h2>
                <div className="font-mono text-[10.5px] text-[#475569] uppercase tracking-[0.08em] mt-1">
                  {project.subtitle} · {project.year}
                </div>
              </div>
              <p className="text-[14px] text-[#94A3B8] leading-[1.72] flex-1">{project.description}</p>
              <ul className="space-y-1.5" aria-label="Features">
                {project.features.map(f => (
                  <li key={f} className="text-[13px] text-[#94A3B8] flex items-start gap-2">
                    <span className="text-[#22D3EE] flex-shrink-0 mt-0.5" aria-hidden="true">→</span>
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
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#22D3EE] hover:opacity-70 transition-opacity"
                  aria-label={`${project.title} GitHub`}>
                  <Github size={13} aria-hidden="true" /> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#94A3B8] hover:text-white transition-colors">
                    <ExternalLink size={13} aria-hidden="true" /> Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#475569] font-mono text-[14px] py-16">No projects in this category yet.</p>
      )}
    </div>
  )
}
