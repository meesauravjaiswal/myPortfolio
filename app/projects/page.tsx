import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ProjectsPageContent } from './content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Security tools, automation frameworks, and full-stack projects built by Saurav Kumar Jaiswal — AutoVAPT, SubEnum, and more.',
  alternates: { canonical: 'https://meesauravjaiswal.dev/projects' },
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
