import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical write-ups by Saurav Kumar Jaiswal — coming soon.',
  robots: { index: false, follow: true },
}

// Add real posts here (or wire up MDX) when they are written.
const posts: { slug: string; title: string; excerpt: string; date: string; tags: string[]; readTime: string }[] = []

export default function BlogPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-7">
          <div className="section-label">Blog</div>
          <h1 className="font-display font-black text-[clamp(28px,4vw,48px)] tracking-[-2px] text-white mb-3">
            Writing &amp; Research
          </h1>
          <p className="text-[15.5px] text-[#94A3B8] leading-[1.75] mb-14">
            Technical write-ups on building ExploitAIzer, LLM agents for security, and lessons from my projects.
          </p>

          {posts.length === 0 ? (
            <div className="p-8 bg-[rgba(34,211,238,0.04)] border border-[rgba(34,211,238,0.12)] rounded-xl text-center">
              <p className="font-mono text-[13px] text-[#94A3B8] mb-5">First posts are in progress.</p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-mono text-[13px] text-[#22D3EE] hover:opacity-70 transition-opacity"
              >
                Meanwhile, see the projects
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {posts.map(post => (
                <article
                  key={post.slug}
                  className="group bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {post.tags.map(t => (
                      <span key={t} className="font-mono text-[10.5px] text-[#22D3EE] bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.22)] rounded-md px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                    <span className="ml-auto font-mono text-[11px] text-[#475569]">{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-[17px] text-white mb-2 leading-tight">{post.title}</h2>
                  <p className="text-[13.5px] text-[#94A3B8] leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="font-mono text-[11px] text-[#475569]">
                    {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
