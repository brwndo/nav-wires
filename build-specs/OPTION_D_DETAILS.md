# Option D: Hybrid IP + Smart Defaults

## Navigation Structure

**Top-Level Items:** Series | New | Shop | Discover | [Search] [Account] [Cart]

---

## Desktop Navigation Structure

### Primary Navigation Bar
```
[Logo: 120×32px rectangle]    Series    New    Shop    Discover    [Search Icon] [Account Icon] [Cart Icon]
```

**Layout:**
- Left-aligned logo
- Center-aligned navigation items
- Right-aligned utility icons
- Height: 64px
- Background: `#FFFFFF`
- Border-bottom: 1px solid `#E0E0E0`

**Note:** Series in pole position (strongest IP signal)

---

## Series Mega Menu

**Pattern:** Hover-activated, 3-column layout

### Column 1: Browse (Left)
**Header:** "BROWSE" (12px, uppercase, `#666666`)

**Links:**
- All Series A-Z
- All Characters

### Column 2: Popular (Center)
**Header:** "POPULAR" (12px, uppercase, `#666666`)

**Links:**
- Demon Slayer
- One Piece
- Jujutsu Kaisen
- My Hero Academia
- Chainsaw Man
- Attack on Titan
- Naruto
- Bleach

### Column 3: Featured (Right)
**Content:**
- Featured image placeholder: 280px × 180px (`#E0E0E0`)
- Image label: "Featured" (centered, 12px, `#999999`)
- Title below: "Attack on Titan Complete Collection" (16px, 600 weight)
- CTA: "Shop Now" button placeholder (outlined, `#333333`)

**Column Dividers:**
- 1px solid `#E0E0E0` between each column

**Mega Menu Container:**
- Width: 900px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

---

## New Mega Menu

**Pattern:** Hover-activated, 2-column layout (asymmetric)

### Column 1: Latest (Left - Narrow)
**Header:** "LATEST" (12px, uppercase, `#666666`)

**Links:**
- Drops This Week
- New Arrivals (7 days)
- Coming Soon
- Restocks

**Column Width:** 240px

### Column 2: Featured Drop (Right - Wide)
**Content:**
- Large featured image placeholder: 400px × 240px (`#E0E0E0`)
- Drop badge: "DROPPING FRIDAY" (uppercase, 10px, white text on `#333333` background)
- Title: "Evangelion x Streetwear" (20px, 700 weight)
- Countdown timer placeholder: "Drops Friday 3PM EST" (14px, `#666666`)
- Timer visual: "02d 14h 32m" (16px, 600 weight, monospace)
- CTA: "Notify Me" button placeholder (filled, `#333333`)

**Column Divider:**
- 1px solid `#E0E0E0` between columns

**Mega Menu Container:**
- Width: 700px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

**Visual Treatment:**
- Larger featured area emphasizes urgency/FOMO
- Timer creates time-sensitive action

---

## Shop Mega Menu

**Pattern:** Hover-activated, 3-column layout

### Column 1: Apparel (Left)
**Header:** "APPAREL" (12px, uppercase, `#666666`)

**Links:**
- All Apparel
- Men's
- Women's
- Exclusives

### Column 2: Collectibles (Center)
**Header:** "COLLECTIBLES" (12px, uppercase, `#666666`)

**Links:**
- All Figures
- Blind Boxes
- Model Kits
- Replicas
- Plush

### Column 3: Entertainment (Right)
**Header:** "ENTERTAINMENT" (12px, uppercase, `#666666`)

**Links:**
- All Media
- Blu-ray & DVD
- Limited Editions
- Steelbooks

**Quick Access Section (Below Entertainment):**
**Header:** "QUICK ACCESS" (12px, uppercase, `#666666`)

**Links:**
- Best Sellers
- Exclusives

**Column Dividers:**
- 1px solid `#E0E0E0` between each column

**Mega Menu Container:**
- Width: 840px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

---

## Discover Mega Menu

**Pattern:** Hover-activated, simple list menu (minimal)

### Single Column Layout
**No header** (simplified approach)

**Links:**
- Collaborations
- Lookbooks
- Stories
- Behind the Design

**Spacing:**
- Compact vertical spacing (8px between items)
- Minimal padding: 20px all sides

**Mega Menu Container:**
- Width: 240px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

**Note:** Simplified presentation signals optional/exploratory content

---

## Mobile Navigation Structure

### Mobile Header Bar
```
[☰ Hamburger]    [Logo: 100×26px]    [Search Icon] [Cart Icon]
```

**Layout:**
- Height: 56px
- Fixed position
- Background: `#FFFFFF`
- Border-bottom: 1px solid `#E0E0E0`

---

## Mobile Menu (Hamburger Expanded)

**Pattern:** Slide-in from left, full-height overlay

### Menu Container
- Width: 85vw (max 320px)
- Height: 100vh
- Background: `#FFFFFF`
- Slide animation: translateX(-100%) → translateX(0), 300ms ease-out

### Menu Header
- Close button (X icon, top-right, 24×24px)
- Height: 56px
- Border-bottom: 1px solid `#E0E0E0`

### Menu Content (Scrollable)

#### Series Section
**Parent Item:** "Series" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children - Level 1:**
- All Series A-Z (indent 8px)
- All Characters (indent 8px)
- Popular (indent 8px, chevron for sub-accordion)

**Expanded Children - Level 2 (under "Popular"):**
- Demon Slayer (indent 16px)
- One Piece (indent 16px)
- Jujutsu Kaisen (indent 16px)
- My Hero Academia (indent 16px)
- Chainsaw Man (indent 16px)
- Attack on Titan (indent 16px)

**Maximum Depth:** 2 levels

---

#### New Section
**Parent Item:** "New" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children:**
- Drops This Week (indent 8px)
- New Arrivals (7 days) (indent 8px)
- Coming Soon (indent 8px)
- Restocks (indent 8px)

**Featured Drop Callout (within accordion):**
- Visual separator (thin line)
- Badge: "DROPPING FRIDAY" (uppercase, 10px)
- "Evangelion x Streetwear" (14px, 600 weight)
- "Notify Me" button (compact)
- Timer: "02d 14h 32m"

**Maximum Depth:** 1 level (with featured callout)

---

#### Shop Section
**Parent Item:** "Shop" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children - Level 1:**
- Best Sellers (indent 8px)
- Apparel (indent 8px, chevron for sub-accordion)
- Collectibles (indent 8px, chevron for sub-accordion)
- Entertainment (indent 8px, chevron for sub-accordion)

**Expanded Children - Level 2 (under "Apparel"):**
- All Apparel (indent 16px)
- Men's (indent 16px)
- Women's (indent 16px)
- Exclusives (indent 16px)

**Expanded Children - Level 2 (under "Collectibles"):**
- All Figures (indent 16px)
- Blind Boxes (indent 16px)
- Model Kits (indent 16px)
- Replicas (indent 16px)
- Plush (indent 16px)

**Expanded Children - Level 2 (under "Entertainment"):**
- All Media (indent 16px)
- Blu-ray & DVD (indent 16px)
- Limited Editions (indent 16px)
- Steelbooks (indent 16px)

**Maximum Depth:** 2 levels

---

#### Discover Section
**Parent Item:** "Discover" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children:**
- Collaborations (indent 8px)
- Lookbooks (indent 8px)
- Stories (indent 8px)
- Behind the Design (indent 8px)

**Maximum Depth:** 1 level

---

### Menu Footer
- Account link
- Help link
- Padding: 24px
- Border-top: 1px solid `#E0E0E0`

---

## Interaction States

### Desktop Hover States
- **Nav Item Hover:** Text color changes to `#000000`
- **Mega Menu Link Hover:** Background `#F5F5F5`, 200ms transition
- **Featured Image Hover:** Slight scale (1.02), 300ms transition
- **Timer in "New" Menu:** Live countdown (updates every second)
- **Hover Delay:** 150ms before menu opens
- **Close Delay:** 300ms after mouse leaves

### Mobile Tap States
- **Accordion Parent Tap:** Chevron rotates 180deg, children expand
- **Accordion Collapse:** Tap parent again, chevron rotates back, children collapse
- **Link Tap:** 100ms active state (`#E8E8E8` background), then toast notification
- **Timer in "New" Section:** Static display (not live on mobile to save performance)

### Toast Notifications
- Position: Top-center, fixed
- Content: "Would navigate to [Link Name]"
- Duration: 2000ms auto-dismiss
- Background: `#333333`, white text
- Border-radius: 4px
- Slide down animation: 200ms

---

## Accessibility Considerations

### ARIA Labels
- **Mega Menu:** `aria-expanded="true/false"`
- **Mobile Accordion:** `aria-expanded="true/false"`
- **Hamburger Button:** `aria-label="Open navigation menu"`
- **Close Button:** `aria-label="Close navigation menu"`
- **Timer:** `aria-live="polite"` for countdown updates
- **Notify Me Button:** `aria-label="Get notified when Evangelion x Streetwear drops"`

### Keyboard Navigation
- **Tab:** Move through nav items and links
- **Enter/Space:** Activate links or expand accordions
- **Escape:** Close mega menu or mobile menu
- **Arrow Keys:** Navigate within mega menu (optional enhancement)

---

## Responsive Behavior

### Breakpoint: 1024px

**Above 1024px (Desktop):**
- Horizontal navigation bar
- Hover-activated mega menus
- Full utility icons with labels
- Live countdown timer in "New" mega menu

**Below 1024px (Mobile):**
- Hamburger menu
- Accordion navigation
- Icon-only utilities (no labels)
- Static timer display in "New" section

### Transition Handling
- No layout shift during resize
- Menu closes gracefully when crossing breakpoint
- State resets between desktop/mobile modes
- Timer pauses/resumes appropriately

---

## Design Rationale

### Series-First Philosophy
- Leading position establishes brand identity (anime/IP focus)
- Fans expect this primacy in fandom merchandise sites
- "All Characters" addition accommodates character-first shoppers

### Elevated "New" Section
- Dedicated top-level validates drop/FOMO strategy
- Timer creates urgency without being buried
- Larger featured area in mega menu emphasizes importance

### Simplified "Discover"
- Trailing position + minimal menu signals optional exploration
- Doesn't compete with shopping intent
- Still accessible for content-focused users

### "Shop" as Catch-All
- Smart defaults ("All Apparel", "All Figures") reduce click depth
- "Best Sellers" elevation leverages social proof
- Clean category structure absorbs product expansion

---

## Unique Features

### Timer in "New" Menu
- Desktop: Live countdown (updates every second)
- Mobile: Static display to conserve battery
- Visual urgency driver for drop-focused strategy

### Asymmetric "New" Layout
- Narrow links column + wide featured area
- Breaks traditional mega menu grid
- Emphasizes visual over navigation hierarchy

### "All [Category]" Links
- Provides escape hatch for browsers
- Reduces paradox of choice
- Maintains discoverability without overwhelming users
