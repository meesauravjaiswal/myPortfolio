import type { Metadata } from 'next'
import { personal } from '@/data'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { CertificationsSection } from '@/components/sections/CertificationsSection'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Verified certifications — CEH v13 (EC-Council), eJPTv2 (INE), PT1 (TryHackMe) and ICCA (INE). Every credential is publicly verifiable.',
  alternates: { canonical: `${personal.siteUrl}/certifications` },
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
