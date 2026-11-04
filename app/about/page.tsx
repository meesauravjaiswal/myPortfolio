// app/about/page.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { personal, education, skills, achievements } from '@/data'

export const metadata: Metadata = {
  title: 'About',
  description: `About Saurav Kumar Jaiswal — ${personal.title}, ${personal.currentRole}. KIIT CS&CE 2026, CGPA ${personal.cgpa}.`,
  alternates: { canonical: `${personal.siteUrl}/about` },
}

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-7">
          <div className="section-label">About</div>
          <h1 className="font-display font-black text-[clamp(30px,4vw,52px)] tracking-[-2px] text-white mb-6">
            Software Engineer<br/>with a Security Mindset
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-[16px] text-[#94A3B8] leading-[1.8] mb-6">
              I&apos;m Saurav Kumar Jaiswal — a 2026 Computer Science &amp; Communication Engineering graduate from KIIT, now a Technical Consulting Engineer trainee at Cisco CX in Bengaluru. I like building software that is correct first: exact money math, inputs that can&apos;t be weaponised, and tests that prove it.
            </p>
            <p className="text-[16px] text-[#94A3B8] leading-[1.8] mb-6">
              At Cisco I built a multi-currency invoice reconciliation system in Python and trained in CCNA routing &amp; switching and in LLMs, RAG and agentic AI. Before that I was a Capgemini Exceller Edge Fellow, and a cybersecurity intern with Gurugram Police (GPCSSI&apos;25), where I built an automated vulnerability-assessment framework.
            </p>
            <p className="text-[16px] text-[#94A3B8] leading-[1.8] mb-10">
              My current project is ExploitAIzer — a full-stack platform where an LLM agent checks raw scanner findings and reports only the genuine ones. I hold CEH v13, eJPTv2, PT1 and ICCA, and I&apos;m looking for a full-time software engineering or security role where I can ship real systems.
            </p>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.07)] pt-10 mb-10">
            <h2 className="font-display font-bold text-[22px] text-white mb-6 tracking-tight">Education</h2>
            <div className="flex flex-col gap-4">
              {education.map(e => (
                <div key={e.institution} className="bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-5 flex gap-4">
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{e.icon}</span>
                  <div>
                    <div className="font-display font-bold text-[15px] text-white">{e.institution}</div>
                    <div className="text-[13px] text-[#94A3B8] mt-0.5">{e.degree}</div>
                    <div className="font-mono text-[11px] text-[#475569] mt-1">{e.period} · {e.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.07)] pt-10">
            <h2 className="font-display font-bold text-[22px] text-white mb-6 tracking-tight">Achievements</h2>
            <div className="flex flex-col gap-3">
              {achievements.map(a => (
                <div key={a.title} className="bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-5 flex gap-3">
                  <span className="text-xl flex-shrink-0" aria-hidden="true">{a.icon}</span>
                  <div>
                    <div className="font-display font-bold text-[14.5px] text-white">{a.title}</div>
                    <div className="text-[13px] text-[#94A3B8] mt-1">{a.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
