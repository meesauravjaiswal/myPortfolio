import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-7">
        <div className="text-center max-w-lg">
          <div className="font-mono text-[14px] text-[#22D3EE] mb-4">{'// 404'}</div>
          <div className="font-mono text-[80px] font-black text-white leading-none mb-4 tracking-[-4px] opacity-10">
            404
          </div>
          <div className="font-display font-black text-[28px] text-white tracking-tight mb-3">
            Page Not Found
          </div>
          <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-8">
            This route doesn&apos;t exist. The page may have been moved, deleted, or never existed.
          </p>
          <div className="bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl p-4 font-mono text-[12.5px] text-[#94A3B8] mb-8 text-left">
            <span className="text-[#475569]">└─$ </span>
            <span className="text-[#22D3EE]">curl -I https://sauravjaiswal.vercel.app/???</span><br/>
            <span className="text-[#F87171]">HTTP/1.1 404 Not Found</span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#22D3EE] text-black font-semibold text-[14px] px-6 py-3 rounded-xl hover:shadow-[0_8px_28px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 transition-all duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
