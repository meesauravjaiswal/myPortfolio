import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { FileDown, ExternalLink } from 'lucide-react'
import { personal } from '@/data'

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume of Saurav Kumar Jaiswal — ${personal.title}, ${personal.currentRole}. KIIT CS&CE 2026, CGPA ${personal.cgpa}.`,
  alternates: { canonical: `${personal.siteUrl}/resume` },
}

export default function ResumePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-7 text-center">
          <div className="section-label justify-center">Resume</div>
          <h1 className="font-display font-black text-[clamp(28px,4vw,48px)] tracking-[-2px] text-white mb-4">
            Download My Resume
          </h1>
          <p className="text-[15.5px] text-[#94A3B8] leading-[1.75] mb-10 max-w-lg mx-auto">
            Two pages covering my experience at Cisco and Capgemini, every project, certifications and technical skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              download="Saurav_Jaiswal_Resume.pdf"
              className="inline-flex items-center gap-2 bg-[#22D3EE] text-black font-semibold text-[14px] px-6 py-3 rounded-xl hover:shadow-[0_8px_28px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileDown size={15} aria-hidden="true" />
              Download PDF
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white border border-[rgba(255,255,255,0.12)] font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200"
            >
              <ExternalLink size={15} aria-hidden="true" />
              View LinkedIn
            </a>
          </div>

          {/* Inline preview */}
          <div className="mt-14 bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden">
            <object data="/resume.pdf#view=FitH" type="application/pdf" className="w-full h-[80vh] min-h-[520px]" aria-label="Resume preview">
              <p className="p-10 font-mono text-[13px] text-[#94A3B8]">
                Your browser can&apos;t show PDFs inline —{' '}
                <a href="/resume.pdf" className="text-[#22D3EE] hover:opacity-70">open the resume</a>.
              </p>
            </object>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
