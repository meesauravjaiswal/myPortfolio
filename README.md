# Saurav Kumar Jaiswal — Portfolio

> Production-ready cybersecurity portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

**Live:** [meesauravjaiswal.dev](https://meesauravjaiswal.dev) · **Built by:** Saurav Kumar Jaiswal

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | Resend API (or SMTP) |
| Deployment | Vercel |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local with your Resend API key and email

# 3. Run locally
npm run dev
# → http://localhost:3000
```

---

## Project Structure

```
portfolio-nextjs/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── projects/           # Projects page (with filter)
│   ├── experience/         # Experience page
│   ├── certifications/     # Certifications page
│   ├── skills/             # Skills page
│   ├── blog/               # Blog page
│   ├── contact/            # Contact page
│   ├── resume/             # Resume download page
│   ├── api/contact/        # Contact form API route
│   ├── layout.tsx          # Root layout (fonts, SEO, JSON-LD)
│   ├── globals.css         # Design tokens + utilities
│   └── not-found.tsx       # Custom 404 page
│
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # TypingAnimation, ScrollProgress
│   └── sections/           # Hero, Experience, Projects, Certs, Skills, Contact
│
├── data/
│   └── index.ts            # ← EDIT THIS to update your content
│
├── lib/
│   └── utils.ts            # cn() + helpers
│
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume.pdf          # ← DROP YOUR RESUME HERE
│
├── .env.example            # Environment variable template
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Updating Content

**All content lives in `data/index.ts`.** You never need to touch UI code.

### Add a new project
```typescript
// data/index.ts → projects array
{
  id: 'my-new-project',
  title: 'My New Project',
  subtitle: 'Security Tool',
  year: '2025',
  status: 'completed',
  category: 'cybersecurity',
  icon: '🔐',
  description: '...',
  features: ['Feature 1', 'Feature 2'],
  stack: ['Python', 'FastAPI'],
  github: 'https://github.com/meesauravjaiswal/...',
  demo: null,
  featured: true,
}
```

### Add a certification
```typescript
// data/index.ts → certifications array
{
  id: 'oscp',
  title: 'Offensive Security Certified Professional (OSCP)',
  issuer: 'Offensive Security',
  issued: 'Jan 2026',
  credentialId: 'OS-1234567',
  skills: ['Exploit Development', 'Buffer Overflow', 'Privilege Escalation'],
  verifyUrl: 'https://...',
  badge: '💀',
  type: 'ine',
}
```

### Add a blog post
Drop an `.mdx` file in `content/blog/` (wire up MDX when ready).

---

## Email Setup

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Add your API key to `.env.local`:
   ```
   RESEND_API_KEY=re_...
   TO_EMAIL=saurav.jaiswal.meee@gmail.com
   ```
3. Uncomment the Resend block in `app/api/contact/route.ts`

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard or:
vercel env add RESEND_API_KEY
vercel env add TO_EMAIL
```

Target Lighthouse scores: **Performance 95+ · SEO 95+ · A11y 95+ · Best Practices 95+**

---

## Resume

Drop your PDF at `public/resume.pdf` — the Resume page will automatically serve it as a download.

---

## License

Personal portfolio — not a template. Please don't reuse without modifications.

---

*Built for top-tier companies. Cybersecurity-first. Engineering-focused.*
