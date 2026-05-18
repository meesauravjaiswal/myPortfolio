import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Saurav Kumar Jaiswal — available for cybersecurity roles, internships, collaborations, and security consultations.',
  alternates: { canonical: 'https://meesauravjaiswal.dev/contact' },
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
