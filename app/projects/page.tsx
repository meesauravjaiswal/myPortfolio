import type { Metadata } from 'next'
import { personal } from '@/data'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ProjectsPageContent } from './content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects by Saurav Kumar Jaiswal — ExploitAIzer (LLM-assisted VAPT platform), Vendor Invoice Intelligence, KronoX, a Java hotel management system, and security labs.',
  alternates: { canonical: `${personal.siteUrl}/projects` },
}

export default function ProjectsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-24 pb-20">
        <ProjectsPageContent />
      </main>
      <Footer />
    </>
  )
}
