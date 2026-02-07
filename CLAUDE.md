# United Flooring NJ — Website

## Project Overview
Website for United Flooring (also known as United Tile & Stone), a flooring and renovation company in West Long Branch, NJ. Serves Monmouth and Ocean County.

## Tech Stack
- **Next.js 16** (App Router, JavaScript)
- **Tailwind CSS v4** — utility-first, `@theme inline` for custom colors/fonts
- **React** — component-based architecture with `'use client'` for interactive parts
- **next/font/google** — Montserrat (headings), Inter (body)
- **next/image** — optimized image loading
- **Formspree** — contact form backend (replace `YOUR_FORM_ID` in Contact.js)
- Deployed on **Vercel**

## File Structure
```
├── app/
│   ├── layout.js         # Root layout — fonts, metadata, JSON-LD schema
│   ├── page.js           # Home page — composes all section components
│   ├── globals.css        # Tailwind v4 config, custom theme, animations
│   ├── favicon.ico
│   └── logos/
│       └── page.js        # 24 logo concepts for owner review (noindex)
├── components/
│   ├── Navbar.js          # Fixed nav, scroll effect, mobile hamburger menu
│   ├── Hero.js            # Full-viewport hero with gradient + photo overlay
│   ├── TrustBar.js        # Trust badges row (licensed, area, quality, estimates)
│   ├── Services.js        # 4-card service grid with icons and hover effects
│   ├── Gallery.js         # Filterable photo gallery with lightbox
│   ├── Lightbox.js        # Modal lightbox with keyboard nav
│   ├── About.js           # About section with photos + feature checklist
│   ├── Contact.js         # Contact info + Formspree form with fetch()
│   ├── Footer.js          # Footer with links, contact, copyright
│   └── ScrollReveal.js    # Reusable Intersection Observer scroll animation
├── public/
│   └── photos/            # Project photos (JPGs from job sites)
├── photos/                # Original photos (can be removed after verifying public/)
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json          # Path alias: @/* → ./*
├── eslint.config.mjs
└── CLAUDE.md              # This file
```

## Custom Theme (defined in globals.css @theme inline)
| Token           | Value     | Usage                |
|----------------|-----------|----------------------|
| color-navy      | #1B3A5C   | Primary brand color  |
| color-navy-dark | #122840   | Dark backgrounds     |
| color-blue      | #2A5F8F   | Buttons, accents     |
| color-blue-light| #4A90C4   | Hover states, links  |
| color-beige     | #F5F0E8   | Section backgrounds  |
| color-beige-warm| #E8DFD0   | Subtle accents       |
| color-charcoal  | #2C2C2C   | Body text            |

## Company Info (for content edits)
- **Business Name**: United Flooring / United Tile & Stone
- **Phone**: 908-907-2998
- **Email**: junior@unitedflooringnj.com
- **Address**: 36 Victor Ave, West Long Branch, NJ 07764
- **Service Area**: Monmouth & Ocean County, NJ
- **Status**: Licensed & Insured

## Services
1. Tile & Stone Installation (tile, porcelain, marble, granite, stone)
2. Kitchen & Bathroom Renovations
3. Hardwood Floor Installation, Sanding & Finishing
4. Concrete & Pavers

## Key Components
- **Navbar** (`'use client'`): `useState` for mobile menu, `useEffect` for scroll listener
- **Gallery** (`'use client'`): `useState` for filter + lightbox state, uses `<Lightbox>` sub-component
- **Contact** (`'use client'`): `fetch()` POST to Formspree, `useState` for form submission feedback
- **ScrollReveal** (`'use client'`): Intersection Observer via `useRef` + `useEffect`
- **Hero, TrustBar, Services, About, Footer**: Server components (no client-side JS)

## Adding New Gallery Photos
1. Place JPG in `public/photos/` folder
2. Add entry to `galleryItems` array in `components/Gallery.js`
3. Set `category` to one of: `bathroom`, `tile`, `kitchen`, `outdoor`
4. Add descriptive `alt` text for SEO
5. Set `wide: true` for landscape/panoramic images

## Contact Form (Formspree)
1. Sign up at formspree.io and create a form
2. Replace `YOUR_FORM_ID` in `components/Contact.js` with your actual form ID
3. The form handles: name, phone, email, service selection, message

## SEO
- Schema.org LocalBusiness JSON-LD markup in `app/layout.js`
- Next.js `metadata` export for title, description, Open Graph, canonical
- All images have descriptive alt text
- Semantic HTML structure

## Development
```bash
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Responsive Breakpoints (Tailwind)
- `max-lg` (1024px) — tablet: 2-col services, 3-col gallery
- `max-md` (768px) — mobile: stacked layout, mobile nav, 2-col gallery
- `max-sm` (480px) — small mobile: single-col gallery
