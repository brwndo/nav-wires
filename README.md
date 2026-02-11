# Navigation Wireframe Prototype

Interactive prototype to compare **Option A**, **Option B**, and **Option D** navigation patterns. Single-page comparison with pattern toggle; no real routing or backend.

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown (e.g. http://localhost:5173). Use the **toggle (top-right)** to switch between Option A, Option B, and Option D.

## How to use

- **Pattern toggle:** Top-right segmented control — click "Option A", "Option B", or "Option D" to switch. URL hash updates (`#option-a`, `#option-b`, `#option-d`) for sharing.
- **Desktop (≥1024px):** Hover over nav items to open mega menus (150ms open delay, 300ms close delay). Click any link or placeholder to see a toast: "Would navigate to [Page]".
- **Mobile (<1024px):** Tap the hamburger (☰) to open the slide-in menu. Tap a section to expand/collapse the accordion. Tap links for toast.
- **Search:** Click the search icon to expand the in-bar search input; blur or Escape to collapse. Submit shows a toast.
- **Escape:** Closes the open mega menu or mobile menu.

## Options at a glance

| Option | Top-level items | Desktop megas | Mobile accordion depth |
|--------|-----------------|---------------|-------------------------|
| **A**  | Discover, Series, Shop | Discover (2-col), Series (3-col), Shop (3-col) | Max 2 levels |
| **B**  | Discover, Men's, Women's, Collectibles & Media | 4 megas (Discover, Men's, Women's, Collectibles & Media) | Max 3 levels (Men's / Women's) |
| **D**  | Series, New, Shop, Discover | Series (3-col), New (asymmetric + 24h countdown), Shop (4-col), Discover (minimal list) | Max 2 levels; New has static timer callout |

## Option D timer

- **Desktop:** Simulated 24-hour countdown in the "New" mega menu; updates every minute (no live/real drop data).
- **Mobile:** Static display "02d 14h 32m" in the New section callout.

## Tech stack

- React (Vite)
- Framer Motion (animations)
- Tailwind CSS v4 (wireframe styling)
- React Router (hash for pattern deep-linking)

## Known limitations

- No real navigation or API; all links show toasts only.
- Animation speed and “show hover zones” dev tools are out of scope.
- Countdown is simulated (24h from load, minute granularity).

## Build & deploy

```bash
npm run build
npm run preview   # local preview of production build
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.
