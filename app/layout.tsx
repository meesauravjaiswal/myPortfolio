import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://meesauravjaiswal.dev'),
  title: {
    default: 'Saurav Kumar Jaiswal | Cybersecurity Engineer',
    template: '%s | Saurav Kumar Jaiswal',
  },
  description:
    'Saurav Kumar Jaiswal — Cybersecurity Engineer, Penetration Tester & Security Automation Specialist. eJPTv2, PT1, ICCA certified. KIIT Bhubaneswar, 2026.',
  keywords: [
    'Saurav Kumar Jaiswal', 'Cybersecurity Engineer', 'Penetration Tester',
    'VAPT', 'eJPTv2', 'PT1', 'ICCA', 'KIIT', 'Security Engineer',
    'AutoVAPT', 'SubEnum', 'Security Automation', 'DevSecOps', 'Ethical Hacker',
  ],
  authors: [{ name: 'Saurav Kumar Jaiswal', url: 'https://meesauravjaiswal.dev' }],
  creator: 'Saurav Kumar Jaiswal',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://meesauravjaiswal.dev',
    title: 'Saurav Kumar Jaiswal | Cybersecurity Engineer',
    description: 'Penetration Tester · VAPT Specialist · Security Automation Engineer',
    siteName: 'Saurav Kumar Jaiswal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurav Kumar Jaiswal | Cybersecurity Engineer',
    description: 'Penetration Tester · VAPT Specialist · Security Engineer',
    creator: '@meesauravjaiswal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_KEY',
  },
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
              name: 'Saurav Kumar Jaiswal',
              jobTitle: 'Cybersecurity Engineer',
              email: 'saurav.jaiswal.meee@gmail.com',
              telephone: '+919939112334',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bhagalpur',
                addressRegion: 'Bihar',
                addressCountry: 'IN',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Kalinga Institute of Industrial Technology',
              },
              url: 'https://meesauravjaiswal.dev',
              sameAs: [
                'https://github.com/meesauravjaiswal',
                'https://linkedin.com/in/meesauravjaiswal',
                'https://tryhackme.com/p/saurav.jaiswal',
              ],
              knowsAbout: ['Penetration Testing', 'VAPT', 'Cybersecurity', 'Python', 'Kali Linux'],
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
