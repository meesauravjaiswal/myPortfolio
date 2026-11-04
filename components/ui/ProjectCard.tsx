import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/data'

type Props = {
  project: Project
  headingLevel?: 'h2' | 'h3'
}

export function ProjectCardBody({ project, headingLevel = 'h3' }: Props) {
  const Heading = headingLevel
  const isSecurity = project.categories.includes('cybersecurity')
  const meta = [project.subtitle, project.year].filter(Boolean).join(' · ')

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22D3EE] to-[#818CF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="flex items-start justify-between gap-3">
        <div
          aria-hidden="true"
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
            isSecurity
              ? 'bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.22)]'
              : 'bg-[rgba(129,140,248,0.1)] border border-[rgba(129,140,248,0.22)]'
          }`}
        >
          {project.icon}
        </div>
        {project.status === 'in-progress' && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] text-[#FBBF24] bg-[rgba(251,191,36,0.08)] border border-[rgba(251,191,36,0.25)] rounded-md px-2 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse-dot" aria-hidden="true" />
            In development
          </span>
        )}
      </div>

      <div>
        <Heading className="font-display font-bold text-[20px] text-white tracking-tight">{project.title}</Heading>
        <div className="font-mono text-[10.5px] text-[#475569] uppercase tracking-[0.08em] mt-1">{meta}</div>
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

      <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)] min-h-[37px]">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#22D3EE] hover:opacity-70 transition-opacity"
            aria-label={`${project.title} GitHub repository`}
          >
            <Github size={13} aria-hidden="true" />
            View on GitHub
          </a>
        ) : (
          <span className="font-mono text-[12px] text-[#475569]">Home lab · walkthrough on request</span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[#94A3B8] hover:text-white transition-colors"
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink size={13} aria-hidden="true" />
            Live Demo
          </a>
        )}
      </div>
    </>
  )
}

export const projectCardClass =
  'group relative bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 flex flex-col gap-5 overflow-hidden hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(34,211,238,0.22)] hover:-translate-y-1 transition-all duration-300'
