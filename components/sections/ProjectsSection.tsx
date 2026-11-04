'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data'
import { ProjectCardBody, projectCardClass } from '@/components/ui/ProjectCard'

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
            Software, AI and security projects — each one backed by code you can read.
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
              className={projectCardClass}
            >
              <ProjectCardBody project={project} />
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
            View all {projects.length} projects
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
