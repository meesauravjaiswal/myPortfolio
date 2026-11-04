'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type ProjectCategory } from '@/data'
import { ProjectCardBody, projectCardClass } from '@/components/ui/ProjectCard'

const filters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'software', label: 'Software' },
  { id: 'ai', label: 'AI / LLM' },
  { id: 'cybersecurity', label: 'Security' },
]

export function ProjectsPageContent() {
  const [active, setActive] = useState<'all' | ProjectCategory>('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.categories.includes(active))

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
          Applications, AI tooling and security labs. Code is on GitHub wherever it exists; home labs are documented on request.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Project category filter">
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className={`font-mono text-[12px] px-4 py-2 rounded-lg border transition-all duration-200 ${
              active === f.id
                ? 'text-[#22D3EE] border-[rgba(34,211,238,0.35)] bg-[rgba(34,211,238,0.08)]'
                : 'text-[#475569] border-[rgba(255,255,255,0.07)] hover:text-white hover:border-[rgba(255,255,255,0.15)]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

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
              className={projectCardClass}
            >
              <ProjectCardBody project={project} headingLevel="h2" />
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
