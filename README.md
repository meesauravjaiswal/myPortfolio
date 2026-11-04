# Saurav Kumar Jaiswal — Portfolio

> Personal portfolio — software & security engineer. Built with Next.js 14, TypeScript, Tailwind CSS and Framer Motion.

**Live:** [sauravjaiswal.vercel.app](https://sauravjaiswal.vercel.app) · **Built by:** Saurav Kumar Jaiswal

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | Resend API |
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
myPortfolio/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── projects/           # Projects page (with filter)
│   ├── experience/         # Experience page
│   ├── certifications/     # Certifications page
│   ├── skills/             # Skills page
│   ├── blog/               # Blog page (not linked until posts exist)
│   ├── contact/            # Contact page
│   ├── resume/             # Resume download page
│   ├── api/contact/        # Contact form API route
│   ├── layout.tsx          # Root layout (fonts, SEO, JSON-LD)
│   ├── globals.css         # Design tokens + utilities
│   └── not-found.tsx       # Custom 404 page
│
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # ProjectCard, TypingAnimation, ScrollProgress
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
  subtitle: 'Short tagline',
  year: '2026',                       // optional
  status: 'completed',                // or 'in-progress' (shows a badge)
  categories: ['software', 'ai'],     // any of: 'software' | 'ai' | 'cybersecurity'
  icon: '🔐',
  description: '...',
  features: ['Feature 1', 'Feature 2'],
  stack: ['Python', 'FastAPI'],
  github: 'https://github.com/meesauravjaiswal/...',  // or null for labs without a repo
  demo: null,
  featured: true,                     // featured projects appear on the home page
}
```

### Add a certification
```typescript
// data/index.ts → certifications array
{
  id: 'oscp',
  title: 'Offensive Security Certified Professional (OSCP)',
  short: 'OSCP',                      // shown in the hero terminal
  issuer: 'OffSec',
  issuerShort: 'OffSec',
  issued: 'Jan 2027',
  credentialId: 'OS-1234567',
  skills: ['Exploit Development', 'Buffer Overflow', 'Privilege Escalation'],
  verifyUrl: 'https://...',
  badge: '💀',
  type: 'ine',
}
```

### Add a blog post
Add entries to the `posts` array in `app/blog/page.tsx` (or wire up MDX), then add Blog back to the Navbar/Footer links and the sitemap.

---

## Email Setup

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Add your API key to `.env.local`:
   ```
   RESEND_API_KEY=re_...
   TO_EMAIL=saurav.jaiswal.meee@gmail.com
   ```
3. Set the same two variables in the Vercel project settings. The form returns 503 if either is missing.

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

Replace `public/resume.pdf` — the Resume page previews it inline and offers it as `Saurav_Jaiswal_Resume.pdf`.

---

## License

Personal portfolio — not a template. Please don't reuse without modifications.

---

*Software & security engineering portfolio.*
