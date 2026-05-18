import { NextRequest, NextResponse } from 'next/server'

const rateMap = new Map<string, number[]>()

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1'
    const now = Date.now()
    const requests = rateMap.get(ip) ?? []
    const recent = requests.filter(t => now - t < 3600000)
    if (recent.length >= 3) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }
    rateMap.set(ip, [...recent, now])

    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY!)
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.TO_EMAIL!,
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `<p><b>From:</b> ${name} (${email})</p><p><b>Message:</b><br/>${message}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
