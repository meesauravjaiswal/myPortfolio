import type { Metadata } from 'next'
import { personal } from '@/data'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: { absolute: `${personal.name} | ${personal.title}` },
  description: `${personal.name} — ${personal.title} and ${personal.currentRole}. Projects in Python, Java and LLM tooling; CEH v13, eJPTv2, PT1 and ICCA certified.`,
  alternates: { canonical: personal.siteUrl },
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <StatsBar />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
