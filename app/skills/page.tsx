import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { SkillsSection } from '@/components/sections/SkillsSection'
export const metadata: Metadata = { title: 'Skills', description: 'Technical skills: Python, Nmap, Burp Suite, Metasploit, OWASP ZAP, Splunk, VAPT, Active Directory, MITRE ATT&CK and more.' }
export default function SkillsPage() {
  return (<><ScrollProgress /><Navbar /><main id="main-content" tabIndex={-1} className="min-h-screen pt-20"><SkillsSection /></main><Footer /></>)
}
