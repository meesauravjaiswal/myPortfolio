import type { Metadata } from 'next'
import { personal } from '@/data'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Saurav Kumar Jaiswal — open to full-time software engineering and security roles. Immediate joiner, open to relocation.',
  alternates: { canonical: `${personal.siteUrl}/contact` },
}

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
