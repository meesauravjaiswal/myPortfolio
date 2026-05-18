import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
export const metadata: Metadata = { title: 'Experience', description: 'Cybersecurity internship at Gurugram Police (GPCSSI\'25) and Cyber Lead at CyberVault Club, KIIT.' }
export default function ExperiencePage() {
  return (<><ScrollProgress /><Navbar /><main id="main-content" tabIndex={-1} className="min-h-screen pt-20"><ExperienceSection /></main><Footer /></>)
}
