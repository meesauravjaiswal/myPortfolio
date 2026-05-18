import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { FileDown, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Saurav Kumar Jaiswal — Cybersecurity Engineer, KIIT Bhubaneswar, CGPA 8.56. eJPTv2, PT1, ICCA certified.',
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
            My resume is regularly updated. It covers my certifications, projects, internship experience, and technical skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#22D3EE] text-black font-semibold text-[14px] px-6 py-3 rounded-xl hover:shadow-[0_8px_28px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileDown size={15} aria-hidden="true" />
              Download PDF
            </a>
            <a
              href="https://linkedin.com/in/meesauravjaiswal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white border border-[rgba(255,255,255,0.12)] font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200"
            >
              <ExternalLink size={15} aria-hidden="true" />
              View LinkedIn
            </a>
          </div>

          {/* Preview placeholder */}
          <div className="mt-14 bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-10">
            <p className="font-mono text-[13px] text-[#475569]">
              Place your resume PDF at <code className="text-[#22D3EE]">public/resume.pdf</code> to enable direct download.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
