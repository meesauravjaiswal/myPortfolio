import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { certifications, personal } from '@/data'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

const siteTitle = `${personal.name} | ${personal.title}`
const siteDescription = `${personal.name} — ${personal.title}. ${personal.currentRole}. Builds in Python and Java; ${certifications.map(c => c.short).join(', ')} certified. KIIT CS&CE 2026.`
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${personal.name}`,
  },
  description: siteDescription,
  keywords: [
    personal.name, 'Software Engineer', 'Security Engineer', 'Python', 'Java', 'FastAPI',
    'LLM', 'Agentic AI', 'Penetration Tester', 'VAPT', 'CEH v13', 'eJPTv2', 'PT1', 'ICCA',
    'Cisco', 'KIIT', 'ExploitAIzer', 'KronoX',
  ],
  authors: [{ name: personal.name, url: personal.siteUrl }],
  creator: personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: personal.siteUrl,
    title: siteTitle,
    description: 'Software Engineer · Security Engineer · AI / LLM Builder',
    siteName: personal.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: 'Software Engineer · Security Engineer · AI / LLM Builder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  ...(googleVerification && !googleVerification.startsWith('your-')
    ? { verification: { google: googleVerification } }
    : {}),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: personal.name,
              jobTitle: personal.title,
              worksFor: { '@type': 'Organization', name: 'Cisco' },
              email: `mailto:${personal.email}`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                addressCountry: 'IN',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Kalinga Institute of Industrial Technology',
              },
              url: personal.siteUrl,
              sameAs: [personal.github, personal.linkedin, personal.tryhackme],
              knowsAbout: ['Software Engineering', 'Python', 'Java', 'LLM Agents', 'Penetration Testing', 'VAPT'],
            }),
          }}
        />
      </head>
      <body className="bg-[#02020A] text-[#F1F5F9] font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
