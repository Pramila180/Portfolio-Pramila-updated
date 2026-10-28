# Pramila J — Personal Portfolio

> A futuristic, multi-page portfolio built as a **Personal Digital Universe / Developer OS** — not a standard template.

**Live:** [portfolio-pramilaj.vercel.app](https://portfolio-pramilaj.vercel.app)

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Forms | React Hook Form |
| Themes | next-themes |
| Deployment | Vercel |

---

## Pages & Routes

| Route | Codename | Description |
|---|---|---|
| `/` | The Portal | Animated identity, hero, featured work |
| `/about` | Origin File | Background, journey, areas of interest |
| `/projects` | Build Lab | Searchable + filterable project universe |
| `/projects/[slug]` | Project Dossier | Individual project deep-dive |
| `/skills` | Tech DNA | Interactive skill constellation |
| `/experience` | Mission Log | Internship timeline |
| `/education` | Learning Matrix | Academic journey |
| `/achievements` | Milestone Vault | Awards, certifications, hackathons |
| `/resume` | Identity Blueprint | Resume preview, download, print |
| `/contact` | Open Channel | Validated contact form + links |

---

## Features

- **⌘K Command Palette** — instant search across all pages and projects
- **Custom cursor** — smooth dot + trailing ring (desktop only)
- **Animated route transitions** — Framer Motion page animations
- **Dark theme** — obsidian/violet/cyan sci-fi OS aesthetic
- **Orbital hero animation** — rotating tech rings + terminal boot sequence
- **Project search + filter** — real-time search and category filter
- **Skill bars** — animated proficiency bars per category
- **Mission timeline** — vertical internship log
- **Contact form** — fully validated with react-hook-form
- **Mobile responsive** — slide-in drawer navigation
- **SEO** — per-page metadata, OG tags, robots
- **Static params** — project slugs pre-generated at build time
- **Custom 404 + Error pages**

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 3. Run dev server
npm run dev
# Open http://localhost:3000

# 4. Build for production
npm run build

# 5. Type check
npm run type-check

# 6. Lint
npm run lint
```

---

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Navbar, Footer, providers)
│   ├── page.tsx            # / — The Portal
│   ├── about/page.tsx      # /about — Origin File
│   ├── projects/
│   │   ├── page.tsx        # /projects — Build Lab
│   │   └── [slug]/page.tsx # /projects/[slug] — Project Dossier
│   ├── skills/page.tsx     # /skills — Tech DNA
│   ├── experience/page.tsx # /experience — Mission Log
│   ├── education/page.tsx  # /education — Learning Matrix
│   ├── achievements/page.tsx # /achievements — Milestone Vault
│   ├── resume/page.tsx     # /resume — Identity Blueprint
│   ├── contact/page.tsx    # /contact — Open Channel
│   ├── not-found.tsx       # Custom 404
│   ├── error.tsx           # Error boundary
│   └── loading.tsx         # Loading state
├── components/
│   ├── home/               # Homepage-specific components
│   ├── about/              # About page components
│   ├── projects/           # Projects page components
│   ├── skills/             # Skills page components
│   ├── experience/         # Experience components
│   ├── education/          # Education components
│   ├── achievements/       # Achievements components
│   ├── resume/             # Resume components
│   ├── contact/            # Contact components
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Shared UI (GlowCard, CommandPalette, etc.)
├── data/                   # Structured TypeScript data from resume
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── achievements.ts
│   └── navigation.ts
├── lib/
│   └── utils.ts            # cn() utility
├── public/                 # Static assets
├── .env.example            # Environment variable template
└── tailwind.config.ts
```

---

## Deployment on Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy — Vercel auto-detects Next.js

```bash
# Or deploy via CLI
npx vercel --prod
```

---

## Customisation

All personal content lives in `/data/*.ts` — edit those files to update any section without touching component code.

---

## Contact Form Setup

The contact form currently logs to console. To enable real email delivery:

**Option A — Formspree (no backend needed):**
1. Create form at [formspree.io](https://formspree.io)
2. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local`
3. Update `onSubmit` in `components/contact/OpenChannel.tsx` to `fetch(endpoint, { method: 'POST', body: JSON.stringify(data) })`

**Option B — Resend (server-side):**
1. Create API route at `app/api/contact/route.ts`
2. Use `resend.emails.send(...)` with `RESEND_API_KEY`

---

*Built with Next.js · Deployed on Vercel · © 2026 Pramila J*
