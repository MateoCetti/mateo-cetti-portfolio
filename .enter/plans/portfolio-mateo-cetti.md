# Mateo Cetti — Personal Portfolio Website

## Context

The user wants a production-quality, visually impressive personal portfolio that presents them (Mateo Cetti, GitHub: `MateoCetti`) as a passionate software developer, with their GitHub projects and technical experience as the central focus.

All content is derived from their actual GitHub profile (fetched and verified during planning):

- **Profile**: Mateo Cetti — Systems Engineering student at Universidad Católica de Córdoba (Argentina), based in Córdoba. Account active since 2017, **1,318 contributions in the last year**, 15 public repos, 21 followers, hireable. Achievements: Pull Shark x3, Pair Extraordinaire x2, YOLO, Arctic Code Vault Contributor.
- **Verified repo tech stacks** (via package.json / requirements / README of each repo):
  - `vargas` — Next.js 14 (App Router) + Tailwind CSS + TypeScript, production marketing site for a real family business (Vargas, produce wholesaler, Córdoba). Live: https://vargas-nu.vercel.app
  - `ws-chat` — Next.js 16 + Socket.IO + custom Node server, real-time chat (most recent, Aug 2026)
  - `bugster-challenge` — Next.js + Supabase auth + shadcn/Radix UI. Technical-challenge webapp. Live: https://bugster-challenge.vercel.app
  - `xionico-front` (Angular 19 + RxJS + Google Maps), `xionico-back` (Python) — full-stack challenge
  - `ing-soft-3-tif-front` (React 18/CRA + Jest + Testing Library), `ing-soft-3-tif-back` (Express + MongoDB + Jest), plus integration-tests and pipeline-scripts (CI) — Software Engineering III final project
  - `ucc_notas` — LaTeX/Markdown study notes for the degree (8 stars, 1 fork — most-starred repo)
  - Also present: Java/Spring Boot (`isw-3-spring-boot`), Dart/Flutter (`Bicheros-FrontMobile`)

**User decisions (confirmed):**
- Content: **Bilingual English + Spanish** with the existing language switcher (i18n already configured in the template — swap `zh-CN` → `es`)
- Contact: social links + clickable email **mateocetti2000@gmail.com**
- Visual direction: **Terminal / code-editor aesthetic**, dark-first

No backend needed — the site is static, and the contact CTA is a `mailto:` link.

## Design Direction — "The Portfolio as a Terminal"

A dark-first developer aesthetic inspired by a modern code editor, executed with restraint and precision (not cliché "green-on-black" — a refined take):

- **Palette**: deep blue-black backgrounds (near `#0a0e14`), elevated card surfaces, subtle borders. Single dominant accent (emerald/green for terminal/status motifs) + cyan secondary for links, used sparingly.
- **Typography** (via Google Fonts in `index.html`): **Bricolage Grotesque** for display/headings, **Instrument Sans** for body, **JetBrains Mono** for code-style meta labels (section numbers `01.`, `// comment` lines, `~$` prompt, stats). Avoids generic Inter/Space Grotesk.
- **Atmosphere**: fixed background grid (graph-paper style) + radial glow + subtle noise; terminal decorations — `// hello, i'm` mono eyebrow lines, blinking cursor `▍` animation, a fake terminal-status card in the hero, terminal-window project cards (traffic-light dots + title bar).
- **Motion** (framer-motion, already installed): staggered hero load, `whileInView` scroll reveals (once), card hover lift + accent border glow, smooth scrolling with `scroll-margin-top` for the fixed navbar. Respect `prefers-reduced-motion`.

## Content Plan (evidence-based, no inventions)

**Sections (single page on `/`):** Navbar → Hero → About → Skills → Featured Projects → GitHub → Contact → Footer

1. **Navbar** — fixed, blur backdrop, mono logo `mateo@cetti ~$`, links to sections, existing `LanguageSwitcher`, mobile hamburger menu.
2. **Hero** — mono `// hello, i'm` label, name, role ("Software Developer"), 1–2 sentence intro, CTAs "View Projects" (→ #projects) and "GitHub" (external). Terminal-style status card: `$ whoami` → Systems Engineering student @ UCC · Córdoba, Argentina · Open to work.
3. **About** — concise, sourced bio: Systems Engineering student at UCC; full-stack web developer (TypeScript, React/Next.js, Angular, Node.js); built a production site for a real Córdoba business; completed technical challenges; 1,300+ contributions in the past year; documents in LaTeX.
4. **Skills** — grouped badges: **Languages** (TypeScript, JavaScript, Python, Java, Dart, HTML & CSS, LaTeX) · **Frameworks & Libraries** (React, Next.js, Angular, Node.js, Express, Socket.IO, Tailwind CSS, Flutter, Spring Boot, MongoDB, Jest) · **Tools & Platforms** (Git & GitHub, Supabase, GitHub Actions, Vercel, npm/pnpm, Google Maps API).
5. **Featured Projects** — 6 cards (top-signal repos):
   | Repo | Blurb | Links |
   |---|---|---|
   | vargas | Production Next.js marketing site for a family-run produce wholesaler in Córdoba | GitHub + live demo |
   | ws-chat | Real-time chat: Next.js 16 + Socket.IO on a single custom Node server | GitHub |
   | bugster-challenge | Challenge webapp classifying ideas as "million-dollar" or "pyramid scheme", Supabase auth | GitHub + live demo |
   | ucc_notas | LaTeX/Markdown study notes for the Systems Engineering degree (8★) | GitHub |
   | xionico | Full-stack challenge: Angular 19 + Google Maps frontend, Python backend | GitHub |
   | ing-soft-3-tif | Software Eng. III final project: React + Express/MongoDB + Jest + CI scripts | GitHub |
   Each card: terminal title bar, description, tech badges, stars/forks where relevant, GitHub + live-demo links.
6. **GitHub** — profile link + stat tiles (1,318 contributions last year · 15 public repos · 21 followers) + achievements (Pull Shark x3, Pair Extraordinaire x2, Arctic Code Vault Contributor).
7. **Contact** — "Let's build something together" CTA: email button (`mailto:mateocetti2000@gmail.com`) + GitHub button.
8. **Footer** — mono one-liner, `© 2026 Mateo Cetti`, GitHub link.

## Files

### New — `src/components/portfolio/`
- `Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `ProjectCard.tsx`, `GithubStats.tsx`, `Contact.tsx`, `Footer.tsx`, `Section.tsx` (shared mono-label section header), `Reveal.tsx` (framer-motion scroll-reveal wrapper)
- `src/data/portfolio.ts` — typed static data: profile, skills groups, projects, stats, achievements (descriptions referenced via i18n keys)

### Modified
- `src/pages/Index.tsx` — rewrite: compose the 8 sections (reuse `LanguageSwitcher` from `src/components/language-switcher.tsx` inside Navbar)
- `src/index.css` — terminal dark palette tokens (`:root` dark-first + identical `.dark`), fonts (`--font-sans/display/mono`), accent/gradient/glow tokens, grid-bg utility, keyframes (blink, fade-up, float), `scroll-behavior: smooth`, `scroll-margin-top` on sections, selection color
- `tailwind.config.ts` — add `fontFamily` (sans/display/mono), new color/glow/gradient tokens, new keyframes/animations
- `index.html` — title/meta for "Mateo Cetti — Software Developer", Google Fonts `<link>` (Bricolage Grotesque, Instrument Sans, JetBrains Mono)
- `src/pages/NotFound.tsx` — restyle to match dark theme (replace hardcoded `bg-gray-100`/`text-gray-600`)
- `i18n.config.json` — replace `zh-CN` language entry with `es` (`label: "Español"`, `detect: ["es"]`, `dir: "ltr"`)
- `public/locales/en.json` — full flat-dotted key set (fallback / structural source of truth)
- `public/locales/zh-CN.json` → rename to `public/locales/es.json` via `rename_file`, then fill with Spanish mirror of every key

### i18n rules (per enter_i18n skill)
- Flat dotted keys only; every component uses `const { t } = useTranslation();` with static string-literal keys
- Add keys to `en.json` first, mirror all keys in `es.json`; `es.json` must have the exact same key set
- Interpolation vars (`{{year}}`) aligned across both files
- Project descriptions use keys like `projects.xxx.desc`; tech lists stay language-neutral in `portfolio.ts`
- Mandatory before handoff: `node /workspace/.agents/skills/enter_i18n/assets/scripts/check-i18n.mjs` and `scan-i18n.mjs` (last shell command)

## Implementation checklist

- [ ] Update `i18n.config.json` to languages `en` (fallback) + `es`
- [ ] Replace `public/locales/zh-CN.json` with `public/locales/es.json` containing Spanish values
- [ ] Author full flat-dotted key set in `public/locales/en.json` (nav, hero, about, skills, projects ×6, github, contact, footer) and mirror in `es.json`
- [ ] `index.html`: new title/description + Google Fonts links (Bricolage Grotesque, Instrument Sans, JetBrains Mono)
- [ ] `src/index.css`: dark-first terminal palette, font tokens, grid/glow utilities, blink/fade-up keyframes, smooth scroll
- [ ] `tailwind.config.ts`: fontFamily + new tokens/animation entries wired to CSS variables
- [ ] `src/data/portfolio.ts`: profile, skills groups, 6 projects (links, tech, stats), GitHub stats, achievements, email
- [ ] `Reveal.tsx` + `Section.tsx` shared components (framer-motion reveal, mono-label header)
- [ ] `Navbar.tsx`: fixed/blur, section links, `LanguageSwitcher`, mobile menu
- [ ] `Hero.tsx`: name/role/intro, CTAs, terminal status card, background grid + glow
- [ ] `About.tsx`: evidence-based bio + quick facts
- [ ] `Skills.tsx`: 3 grouped categories with badges (reuse `Badge` from `@/components/ui/badge`)
- [ ] `Projects.tsx` + `ProjectCard.tsx`: terminal-window cards, stars/forks, GitHub + live-demo links
- [ ] `GithubStats.tsx`: profile CTA + stat tiles + achievements
- [ ] `Contact.tsx`: email (`mailto:mateocetti2000@gmail.com`) + GitHub CTAs
- [ ] `Footer.tsx` + restyle `NotFound.tsx` to theme
- [ ] Rewrite `src/pages/Index.tsx` composing all sections
- [ ] All user-facing strings via `t()`; no hardcoded English/Spanish literals in components
- [ ] Run `check-i18n.mjs` and `scan-i18n.mjs` (contract validation, run last)

## Verification checklist

- [ ] `pnpm run check` (eslint + tsc) passes with no errors
- [ ] `pnpm run build` succeeds
- [ ] `check-i18n.mjs` prints "i18n check passed" and `scan-i18n.mjs` writes reports with no missing keys
- [ ] Positive: `/` renders hero with name "Mateo Cetti" + all 8 sections; all 6 project cards show name, description, tech badges, and repo links; vargas and bugster cards include live-demo links
- [ ] Navigation: each navbar link smooth-scrolls to its section; anchor targets not overlapped by fixed navbar; mobile hamburger opens/closes the menu
- [ ] Language: switcher toggles EN ↔ ES, all section text and project descriptions translate, and the choice persists on reload
- [ ] Contact: email CTA opens `mailto:mateocetti2000@gmail.com`; GitHub links open `https://github.com/MateoCetti` (profile + repos) in a new tab
- [ ] Visual/responsive: `website_screenshot` at `desktop_1280` and `mobile_390` — no overflow, readable contrast, cards stack correctly, terminal aesthetic renders (grid, glow, mono labels, cursor animation)
- [ ] Reduced-motion: animations degrade gracefully under `prefers-reduced-motion`
