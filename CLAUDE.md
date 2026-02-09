# United Flooring NJ — Website

## Project Overview
Website for United Flooring (also known as United Tile & Stone), a flooring and renovation company in West Long Branch, NJ. Serves Monmouth and Ocean County.

## Tech Stack
- **Next.js 16** (App Router, JavaScript — not TypeScript)
- **Tailwind CSS v4** — utility-first, `@theme inline` for custom colors/fonts
- **React** — component-based architecture with `'use client'` for interactive parts
- **next/font/google** — Montserrat (headings), Inter (body)
- **next/image** — optimized image loading
- **Cloudinary** — image and video storage/CDN
- **Upstash Redis** (`@upstash/redis`) — site config + auth code storage
- **jose** — Edge-compatible JWT sessions
- **SMTP2GO** — contact form emails + admin auth codes
- Deployed on **Vercel**

## File Structure
```
├── app/
│   ├── layout.js              # Root layout — fonts, metadata, JSON-LD schema
│   ├── page.js                # Home page — composes all section components
│   ├── globals.css             # Tailwind v4 config, custom theme, animations
│   ├── favicon.ico
│   ├── admin/
│   │   ├── page.js            # Admin dashboard — Gallery/Hero/About tabs
│   │   └── login/
│   │       └── page.js        # Passwordless email login (magic code)
│   ├── api/
│   │   ├── admin/
│   │   │   ├── config/route.js     # GET/POST site config (Redis)
│   │   │   ├── upload/route.js     # Upload images & videos to Cloudinary
│   │   │   ├── delete-image/route.js # Delete assets from Cloudinary
│   │   │   └── seed/route.js       # Initialize Redis with default config
│   │   ├── auth/
│   │   │   ├── send-code/route.js  # Send magic login code via SMTP2GO
│   │   │   ├── verify-code/route.js # Verify code + issue JWT cookie
│   │   │   └── logout/route.js     # Clear auth cookie
│   │   └── contact/
│   │       └── route.js       # Contact form submission via SMTP2GO
│   └── logos/
│       └── page.js            # 24 logo concepts for owner review (noindex)
├── components/
│   ├── Navbar.js              # Fixed nav, scroll effect, mobile hamburger menu
│   ├── Hero.js                # Full-viewport hero with gradient + image/video overlay
│   ├── TrustBar.js            # Trust badges row (licensed, area, quality, estimates)
│   ├── Services.js            # 4-card service grid with icons and hover effects
│   ├── Gallery.js             # Filterable photo/video gallery with lightbox
│   ├── Lightbox.js            # Modal lightbox — images + video playback, keyboard nav
│   ├── About.js               # About section with photos + feature checklist
│   ├── Contact.js             # Contact info + form with fetch()
│   ├── Footer.js              # Footer with links, contact, copyright
│   ├── ScrollReveal.js        # Reusable Intersection Observer scroll animation
│   └── admin/
│       ├── AdminNav.js        # Tab switcher (gallery/hero/about)
│       ├── GalleryManager.js  # Gallery CRUD — add/edit/reorder/delete media
│       ├── HeroManager.js     # Hero background uploader (image or video)
│       ├── AboutManager.js    # About section 3-photo manager
│       └── ImageUploader.js   # Drag-drop upload component (images, videos, or both)
├── lib/
│   ├── cloudinary.js          # Cloudinary SDK — uploadImage, uploadVideo, deleteImage
│   ├── config.js              # getConfig/saveConfig (Redis ↔ defaultConfig fallback)
│   ├── kv.js                  # Upstash Redis singleton client
│   ├── auth.js                # JWT helpers — createToken, verifyToken, isAdminEmail
│   └── defaults.js            # Fallback config data (gallery, categories, hero, about)
├── public/
│   └── photos/                # Project photos (JPGs from job sites)
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json              # Path alias: @/* → ./*
├── eslint.config.mjs
└── CLAUDE.md                  # This file
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
- **Hero** (server): Accepts `heroImage` + `heroType` props — renders `<video>` for video backgrounds or CSS `background-image` for images
- **Gallery** (`'use client'`): `useState` for filter + lightbox state, renders video thumbnails with play icon overlay, passes `items` array to `<Lightbox>`
- **Lightbox** (`'use client'`): `items` prop (object array with `{ src, type, alt }`), renders `<video controls>` for videos or `<Image>` for photos, keyboard nav (Escape, ArrowLeft, ArrowRight)
- **Contact** (`'use client'`): `fetch()` POST to SMTP2GO API route, `useState` for form submission feedback
- **ScrollReveal** (`'use client'`): Intersection Observer via `useRef` + `useEffect`
- **TrustBar, Services, About, Footer**: Server components (no client-side JS)

## Admin Panel (`/admin`)

### Authentication
- Passwordless email login — 6-digit magic code sent via SMTP2GO
- JWT sessions via `jose` (Edge-compatible), stored in `uf_admin_token` cookie (7-day expiry)
- Authorized emails set in `ADMIN_EMAILS` env var (comma-separated)
- Auth codes stored in Redis with 10-minute TTL, max 5 attempts

### Dashboard
- Three tabs: **Gallery**, **Hero**, **About**
- Config stored in Redis key `site:config`, falls back to `lib/defaults.js`
- Save triggers `revalidatePath('/')` for instant public site updates

### Gallery Manager
- Add/edit/reorder/delete photos and videos
- Batch upload with progress bar (max 3 concurrent)
- Edit fields: label, alt text, category, wide toggle
- Replace media via thumbnail hover overlay
- Video items show play icon badge and purple "video" pill
- Count display: "X photos, Y videos"

### Hero Manager
- Upload image or video as hero background
- Preview simulates live site appearance (gradient + 15% opacity)
- Video preview renders with autoplay/loop/muted

### About Manager
- 3 image slots: large, small-left, small-right

## Media Upload System

### Supported Formats
- **Images**: JPG, PNG, WebP — max 10MB each
- **Videos**: MP4, MOV, WebM — max 50MB each

### Upload Flow
1. `ImageUploader` component validates file type/size based on `mode` prop (`"image"`, `"video"`, `"both"`)
2. Files posted to `POST /api/admin/upload` (authenticated, `maxDuration=60`)
3. API route detects image vs video, calls `uploadImage()` or `uploadVideo()` in `lib/cloudinary.js`
4. Cloudinary stores in `united-flooring/` folder with auto-optimization (`f_auto,q_auto`)
5. Video uploads auto-generate thumbnail URL (swap `/video/upload/` → `/image/upload/` + `.jpg`)
6. Returns `{ src, publicId, width, height, type, thumbnail }`

### Data Structures
**Gallery item:**
```javascript
{ id, src, publicId, alt, category, label, wide, type: "image"|"video", thumbnail }
```

**Hero config:**
```javascript
{ src, publicId, type: "image"|"video" }
```

**About image:**
```javascript
{ src, publicId, alt, slot: "large"|"small-left"|"small-right" }
```

Missing `type` field defaults to `"image"` (backward compatible).

### Cloudinary Functions (`lib/cloudinary.js`)
- `uploadImage(fileBuffer, filename)` — uploads image, returns optimized URL
- `uploadVideo(fileBuffer, filename)` — uploads video, returns URL + auto-generated thumbnail
- `deleteImage(publicId, resourceType)` — deletes asset (pass `"video"` for video resources)

## Gallery
- 5 filter categories: all, bathroom, tile, kitchen, outdoor
- Responsive grid: 4 cols → 3 → 2 → 1 on mobile
- `wide: true` items span 2 columns (collapse to 1 on tablet)
- Video items render Cloudinary thumbnail with centered play button overlay
- Click opens lightbox with full video playback controls or image viewer

## Contact Form
- Uses SMTP2GO via `app/api/contact/route.js`
- Fields: name, phone, email, service selection, message

## SEO
- Schema.org LocalBusiness JSON-LD markup in `app/layout.js`
- Next.js `metadata` export for title, description, Open Graph, canonical
- All images have descriptive alt text
- Semantic HTML structure

## Environment Variables
```bash
# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Admin Auth
ADMIN_EMAILS=email1@example.com,email2@example.com
AUTH_SECRET=                    # 32+ char random string for JWT signing

# Redis (Upstash)
KV_REST_API_URL=
KV_REST_API_TOKEN=

# Email (SMTP2GO)
SMTP2GO_API_KEY=
```

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
