// app/about/page.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { personal, education, skills, achievements } from '@/data'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about Saurav Kumar Jaiswal — Cybersecurity Engineer, KIIT Bhubaneswar, CGPA ${personal.cgpa}. Specializing in VAPT and security automation.`,
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
            Engineering Security,<br/>One Tool at a Time
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-[16px] text-[#94A3B8] leading-[1.8] mb-6">
              I&apos;m Saurav Kumar Jaiswal — a final-year B.Tech CS&CE student at KIIT Bhubaneswar with a deep focus on cybersecurity, penetration testing, and security automation. My approach to security is fundamentally engineering-driven: I build tools that make assessments faster, findings clearer, and defenses stronger.
            </p>
            <p className="text-[16px] text-[#94A3B8] leading-[1.8] mb-6">
              Currently holding eJPTv2, PT1, and ICCA certifications, I&apos;ve developed hands-on expertise in VAPT frameworks, active directory security, MITRE ATT&CK mapping, and cloud security through real internship work with Gurugram Police (GPCSSI&apos;25).
            </p>
            <p className="text-[16px] text-[#94A3B8] leading-[1.8] mb-10">
              My engineering philosophy: security should be automated, measurable, and integrated — not an afterthought. I build tools that scale: AutoVAPT automates the entire VAPT pipeline, SubEnum accelerates recon with concurrent probing, and I&apos;m constantly expanding toward DevSecOps and cloud-native security architectures.
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
