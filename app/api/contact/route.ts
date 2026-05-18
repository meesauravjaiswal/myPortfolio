import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name too short').max(80),
  email: z.string().email('Invalid email'),
  subject: z.string().min(3).max(120),
  message: z.string().min(10, 'Message too short').max(2000),
})

// Rate limiting: simple in-memory map (upgrade to Redis/Upstash for production)
const rateMap = new Map<string, number[]>()
const RATE_LIMIT = 3 // max 3 requests per IP
const RATE_WINDOW = 60 * 60 * 1000 // per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const requests = rateMap.get(ip) ?? []
  const recent = requests.filter(t => now - t < RATE_WINDOW)
  rateMap.set(ip, [...recent, now])
  return recent.length >= RATE_LIMIT
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate body
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = parsed.data

    //─── Option A: Resend (recommended) ──────────────────
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY!)
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.TO_EMAIL!,
      reply_To: email,
      subject: `[Portfolio] ${subject}`,
      html: emailTemplate(name, email, subject, message),
    })

    // ─── Option B: Nodemailer (SMTP) ──────────────────────
    // const nodemailer = await import('nodemailer')
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: process.env.TO_EMAIL,
    //   replyTo: email,
    //   subject: `[Portfolio] ${subject}`,
    //   html: emailTemplate(name, email, subject, message),
    // })

    // ─── Fallback: Log (remove when wired up) ────────────
    console.info('[Contact Form]', { name, email, subject, preview: message.slice(0, 50) })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API Error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function emailTemplate(name: string, email: string, subject: string, message: string) {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#02020A;color:#F1F5F9;border-radius:12px;overflow:hidden">
      <div style="background:linear-gradient(135deg,rgba(34,211,238,0.15),rgba(129,140,248,0.08));padding:24px 28px;border-bottom:1px solid rgba(255,255,255,0.07)">
        <h1 style="margin:0;font-size:20px;font-weight:700;color:#22D3EE">New Portfolio Message</h1>
        <p style="margin:4px 0 0;font-size:13px;color:#94A3B8">${subject}</p>
      </div>
      <div style="padding:28px">
        <table style="width:100%;border-collapse:collapse;font-size:13px;color:#94A3B8">
          <tr><td style="padding:6px 0;color:#475569;width:80px">From</td><td><strong style="color:#F1F5F9">${name}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#475569">Email</td><td><a href="mailto:${email}" style="color:#22D3EE">${email}</a></td></tr>
          <tr><td style="padding:6px 0;color:#475569">Subject</td><td style="color:#F1F5F9">${subject}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.04);border-radius:8px;border:1px solid rgba(255,255,255,0.07);font-size:14px;line-height:1.7;color:#94A3B8;white-space:pre-wrap">${message}</div>
      </div>
      <div style="padding:16px 28px;border-top:1px solid rgba(255,255,255,0.07);font-size:11px;color:#2D3748">
        Sent from the portfolio contact form at meesauravjaiswal.dev
      </div>
    </div>
  `
}
