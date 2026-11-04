import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Best-effort, per-instance rate limit: 3 messages per IP per hour.
const rateMap = new Map<string, number[]>()
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 3

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(5000),
})

// Visitor input goes into an HTML email, so it must be escaped.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  try {
    // x-forwarded-for can be a list ("client, proxy1, proxy2"); the client is first.
    const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim()
    const now = Date.now()
    const recent = (rateMap.get(ip) ?? []).filter(t => now - t < WINDOW_MS)
    if (recent.length >= MAX_PER_WINDOW) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const parsed = schema.safeParse(await req.json().catch(() => null))
    if (!parsed.success) {
      return NextResponse.json({ error: 'Please fill in every field with a valid email.' }, { status: 400 })
    }
    const { name, email, subject, message } = parsed.data

    if (!process.env.RESEND_API_KEY || !process.env.TO_EMAIL) {
      console.error('Contact form is not configured: set RESEND_API_KEY and TO_EMAIL.')
      return NextResponse.json({ error: 'Contact form unavailable' }, { status: 503 })
    }

    rateMap.set(ip, [...recent, now])

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.TO_EMAIL,
      reply_to: email,
      subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, ' ')}`,
      html: `<p><b>From:</b> ${escapeHtml(name)} (${escapeHtml(email)})</p><p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
    })
    if (error) {
      console.error(error)
      return NextResponse.json({ error: 'Email could not be sent' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
