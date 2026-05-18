import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering articles on cybersecurity, penetration testing, VAPT, and security automation by Saurav Kumar Jaiswal.',
}

// Sample blog posts — replace with MDX files or a CMS
const posts = [
  {
    slug: 'building-autovat',
    title: 'Building AutoVAPT: Automating the VAPT Pipeline',
    excerpt: 'How I integrated Nmap, SQLMap, and OWASP ZAP into a single automated security assessment framework — architecture decisions, CVE mapping, and report generation.',
    date: '2025-07-15',
    tags: ['Security', 'Automation', 'Python'],
    readTime: '8 min',
  },
  {
    slug: 'subenum-dns-recon',
    title: 'Fast Subdomain Enumeration with Concurrent DNS Probing',
    excerpt: 'Building SubEnum: the engineering decisions behind concurrent DNS and HTTP probing, wordlist strategies, and integrating output with downstream security tools.',
    date: '2025-06-20',
    tags: ['Recon', 'Python', 'DNS'],
    readTime: '6 min',
  },
  {
    slug: 'ejptv2-notes',
    title: 'My eJPTv2 Journey: Notes, Resources, and Lessons',
    excerpt: 'A practical breakdown of preparing for the INE eJPTv2 exam — what to focus on, what to skip, and how to approach the practical assessment.',
    date: '2025-06-05',
    tags: ['Certification', 'Pentesting'],
    readTime: '5 min',
  },
]

export default function BlogPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-7">
          <div className="section-label">Blog</div>
          <h1 className="font-display font-black text-[clamp(28px,4vw,48px)] tracking-[-2px] text-white mb-3">
            Writing & Research
          </h1>
          <p className="text-[15.5px] text-[#94A3B8] leading-[1.75] mb-14">
            Technical writeups on cybersecurity, penetration testing, and security engineering.
          </p>

          <div className="flex flex-col gap-5">
            {posts.map(post => (
              <article
                key={post.slug}
                className="group bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 hover:border-[rgba(34,211,238,0.22)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  {post.tags.map(t => (
                    <span key={t} className="font-mono text-[10.5px] text-[#22D3EE] bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.22)] rounded-md px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto font-mono text-[11px] text-[#475569]">{post.readTime}</span>
                </div>
                <h2 className="font-display font-bold text-[17px] text-white mb-2 leading-tight group-hover:text-[#22D3EE] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[13.5px] text-[#94A3B8] leading-relaxed mb-4">{post.excerpt}</p>
                <div className="font-mono text-[11px] text-[#475569]">
                  {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[rgba(34,211,238,0.04)] border border-[rgba(34,211,238,0.12)] rounded-xl text-center">
            <p className="font-mono text-[13px] text-[#94A3B8]">
              More posts coming soon. Add MDX files to <code className="text-[#22D3EE]">content/blog/</code> to publish.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
