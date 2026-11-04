import type { Metadata } from 'next'
import { personal } from '@/data'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
export const metadata: Metadata = { title: 'Experience', description: 'Technical Consulting Engineer trainee at Cisco CX, Capgemini Exceller Edge Fellow, cybersecurity intern at Gurugram Police (GPCSSI\'25), and Cyber Lead at CyberVault Club, KIIT.', alternates: { canonical: `${personal.siteUrl}/experience` } }
export default function ExperiencePage() {
  return (<><ScrollProgress /><Navbar /><main id="main-content" tabIndex={-1} className="min-h-screen pt-20"><ExperienceSection /></main><Footer /></>)
}
