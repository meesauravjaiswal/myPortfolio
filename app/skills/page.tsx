import type { Metadata } from 'next'
import { personal } from '@/data'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { SkillsSection } from '@/components/sections/SkillsSection'
export const metadata: Metadata = { title: 'Skills', description: 'Technical skills: Python, Java, SQL, FastAPI, React, LLM tool-calling and agentic workflows, Docker, CCNA-level networking, Burp Suite, Nmap, OWASP ZAP and more.', alternates: { canonical: `${personal.siteUrl}/skills` } }
export default function SkillsPage() {
  return (<><ScrollProgress /><Navbar /><main id="main-content" tabIndex={-1} className="min-h-screen pt-20"><SkillsSection /></main><Footer /></>)
}
