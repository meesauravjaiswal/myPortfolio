import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { CertificationsSection } from '@/components/sections/CertificationsSection'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Verified cybersecurity certifications — eJPTv2, PT1 (TryHackMe), ICCA (INE). All credentials are publicly verifiable.',
  alternates: { canonical: 'https://meesauravjaiswal.dev/certifications' },
}

export default function CertificationsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-20">
        <CertificationsSection />
      </main>
      <Footer />
    </>
  )
}
