'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Shield, Send, Loader2 } from 'lucide-react'
import { personal } from '@/data'

const contactLinks = [
  { href: `mailto:${personal.email}`, label: 'Email', value: personal.email, Icon: Mail },
  { href: `tel:${personal.phone}`, label: 'Phone', value: personal.phone, Icon: Phone },
  { href: personal.linkedin, label: 'LinkedIn', value: 'linkedin.com/in/meesauravjaiswal', Icon: Linkedin },
  { href: personal.github, label: 'GitHub', value: 'github.com/meesauravjaiswal', Icon: Github },
  { href: personal.tryhackme, label: 'TryHackMe', value: 'tryhackme.com/p/saurav.jaiswal', Icon: Shield },
]

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-label">Contact</div>
          <h2 id="contact-title" className="font-display font-black text-[clamp(26px,3.5vw,42px)] tracking-[-1.5px] text-white mb-3">
            Let&apos;s Connect
          </h2>
          <p className="text-[15.5px] text-[#94A3B8] max-w-[540px] leading-[1.75] mb-14">
            Open to cybersecurity roles, internships, collaborations, and security consultations. I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-2.5"
          >
            {contactLinks.map(({ href, label, value, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-3.5 p-4 bg-[rgba(255,255,255,0.028)] border border-[rgba(255,255,255,0.07)] rounded-xl hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(34,211,238,0.22)] transition-all duration-200"
              >
                <div className="w-9 h-9 bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.22)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#22D3EE]" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-mono text-[10.5px] text-[#475569] mb-0.5 uppercase tracking-wider">{label}</div>
                  <div className="text-[13.5px] text-white font-medium group-hover:text-[#22D3EE] transition-colors">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate aria-label="Contact form">
              {[
                { id: 'name', label: 'YOUR NAME', type: 'text', placeholder: 'John Doe', required: true },
                { id: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'john@company.com', required: true },
                { id: 'subject', label: 'SUBJECT', type: 'text', placeholder: 'Hiring Opportunity / Collaboration', required: true },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-mono text-[10.5px] text-[#475569] mb-2 uppercase tracking-wider">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={e => setForm(prev => ({ ...prev, [field.id]: e.target.value }))}
                    className="w-full bg-[#07070F] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-[#2D3748] focus:outline-none focus:border-[rgba(34,211,238,0.35)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.07)] transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block font-mono text-[10.5px] text-[#475569] mb-2 uppercase tracking-wider">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  value={form.message}
                  onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-[#07070F] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-[#2D3748] focus:outline-none focus:border-[rgba(34,211,238,0.35)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.07)] transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                aria-disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#22D3EE] text-black font-semibold text-[14px] py-3 rounded-xl hover:shadow-[0_8px_28px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200"
              >
                {status === 'loading' ? (
                  <><Loader2 size={15} className="animate-spin" aria-hidden="true" /> Sending...</>
                ) : (
                  <><Send size={15} aria-hidden="true" /> Send Message</>
                )}
              </button>

              {status === 'success' && (
                <p role="status" className="text-center text-[13.5px] text-[#34D399] font-mono">
                  ✓ Message sent! I'll get back to you within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-center text-[13.5px] text-[#F87171] font-mono">
                  ✗ Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
