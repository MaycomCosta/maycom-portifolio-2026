# Maycom Costa — Zara-Style Portfolio

A premium editorial developer portfolio inspired by high-end fashion brand websites.
Built with React + Vite + Styled Components.

## ✦ Design Philosophy

- **Minimalist** — large whitespace, editorial breathing room
- **Typography-led** — Playfair Display + Cormorant Garamond serif display, Barlow Condensed labels
- **Warm neutral palette** — cream whites, warm grays, ink black, soft gold accent
- **Custom cursor** — smooth ring cursor with hover states
- **Marquee ticker** — scrolling tech stack strip between sections
- **Editorial asymmetric grid** — projects laid out like a fashion magazine spread
- **Dark contact section** — ink background for dramatic contrast

---

## 🚀 Quick Start

```bash
# 1. Install
npm install

# 2. Develop
npm run dev
# → http://localhost:5173

# 3. Build
npm run build

# 4. Preview build
npm run preview
```

---

## 📁 Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar/       # Transparent → frosted glass on scroll
│   │   └── Footer/       # Minimal with social links
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── index.jsx # Full-screen editorial hero
│   │   │   └── Marquee.jsx # Scrolling ticker
│   │   ├── About/        # 3-column: label / text / stats
│   │   ├── Projects/     # Asymmetric 12-col editorial grid
│   │   ├── Skills/       # Table-style skill groups
│   │   └── Contact/      # Dark section with underline form
│   └── ui/
│       ├── Button/       # Outline / Filled / Text variants
│       ├── Cursor/       # Custom ring cursor
│       ├── ProjectCard/  # Image + hover overlay links
│       ├── Tag/          # Minimal tech badge
│       └── SocialIcon/   # Square icon link
├── data/
│   ├── projects.json     # ← YOUR PROJECTS HERE
│   └── translations/
│       ├── en.json
│       ├── pt.json
│       └── es.json
├── hooks/
│   ├── useTranslation.js
│   ├── useProjects.js
│   ├── useCursor.js
│   └── useScrollSpy.js
├── utils/
│   ├── image.js          # Safe src + editorial placeholder
│   └── scroll.js
├── styles/
│   ├── theme.js          # Design tokens
│   └── GlobalStyles.js   # CSS reset + font imports + animations
└── pages/
    └── Home.jsx
```

---

## ➕ Adding Projects

Edit `src/data/projects.json`:

```json
{
  "id": 7,
  "name": "Project Name",
  "description": "Short editorial description",
  "stack": ["React", "Node.js"],
  "category": "Full Stack",
  "image": "/assets/projects/project7.png",
  "live": "https://example.com",
  "github": "https://github.com/MaycomCosta/repo",
  "featured": true,
  "year": "2024"
}
```

Place the image at: `public/assets/projects/project7.png`

Missing images automatically show an editorial warm-toned placeholder.

---

## 🌍 Language Switching

Switch between **EN / PT / ES** via the navbar.

The browser language is auto-detected. Users can override manually.

To add a new language:
1. Create `src/data/translations/fr.json` (copy from `en.json`)
2. Import in `useTranslation.js` and add to `TRANSLATIONS`

---

## 🎨 Customizing the Theme

Edit `src/styles/theme.js`:

| Token | Value | Purpose |
|-------|-------|---------|
| `white` | `#FAFAF8` | Main background |
| `ink` | `#0D0D0D` | Primary text + dark sections |
| `warm` | `#F0EDE8` | Hero right panel |
| `accent` | `#C8A96E` | Gold luxury accent |
| Display font | Playfair Display | Headlines |
| Label font | Barlow Condensed | All caps labels |

---

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Build: `npm run build` → Output: `dist`

`vercel.json` handles SPA routing automatically.

---

## 📦 Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Styled Components | 6 |
| React Icons | 5 |

No heavy dependencies. Fast build. Vercel-ready out of the box.

---

MIT License
