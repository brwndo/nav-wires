# Option B: Gender First + Product Type

## Navigation Structure

**Top-Level Items:** Discover | Men's | Women's | Collectibles & Media | [Search] [Account] [Cart]

---

## Desktop Navigation Structure

### Primary Navigation Bar
```
[Logo: 120×32px]    Discover    Men's    Women's    Collectibles & Media    [Search] [Account] [Cart]
```

**Layout:**
- Left-aligned logo
- Center-aligned navigation items
- Right-aligned utility icons
- Height: 64px
- Background: `#FFFFFF`
- Border-bottom: 1px solid `#E0E0E0`

**Note:** 4 primary nav items (tighter spacing than Option A)

---

## Discover Mega Menu

**Pattern:** Hover-activated, 2-column layout

### Column 1: Content (Left)
**Header:** "CONTENT" (12px, uppercase, `#666666`)

**Links:**
- Coming Soon
- New Arrivals
- Collaborations
- Lookbooks
- Exclusives

### Column 2: Featured (Right)
**Content:**
- Featured image placeholder: 280px × 180px (`#E0E0E0`)
- Image label: "Featured" (centered, 12px, `#999999`)
- Title below: "New Collab: Studio Ghibli x Streetwear" (16px, 600 weight)
- Subtitle: "Explore the collection" (14px, `#666666`)

**Column Divider:**
- 1px solid `#E0E0E0` between columns

**Mega Menu Container:**
- Width: 600px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

---

## Men's Mega Menu

**Pattern:** Hover-activated, 3-column layout

### Column 1: By Type (Left)
**Header:** "BY TYPE" (12px, uppercase, `#666666`)

**Links:**
- T-Shirts
- Hoodies & Sweatshirts
- Jackets
- Pants & Shorts
- Accessories
- Figures

### Column 2: By Series (Center)
**Header:** "BY SERIES" (12px, uppercase, `#666666`)

**Links:**
- Demon Slayer
- One Piece
- Naruto
- Attack on Titan
- Dragon Ball Z
- All Series

### Column 3: Featured (Right)
**Content:**
- Featured image placeholder: 280px × 180px (`#E0E0E0`)
- Image label: "Featured" (centered, 12px, `#999999`)
- Title below: "New: Oversized Graphic Tees" (16px, 600 weight)
- CTA: "Shop Now" button placeholder (outlined, `#333333`)

**Column Dividers:**
- 1px solid `#E0E0E0` between each column

**Mega Menu Container:**
- Width: 900px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

---

## Women's Mega Menu

**Pattern:** Hover-activated, 3-column layout

### Column 1: By Type (Left)
**Header:** "BY TYPE" (12px, uppercase, `#666666`)

**Links:**
- T-Shirts
- Hoodies & Sweatshirts
- Jackets
- Onesies
- Pants & Shorts
- Accessories
- Figures

### Column 2: By Series (Center)
**Header:** "BY SERIES" (12px, uppercase, `#666666`)

**Links:**
- Sailor Moon
- Cardcaptor Sakura
- My Melody
- Fruits Basket
- Studio Ghibli
- All Series

### Column 3: Featured (Right)
**Content:**
- Featured image placeholder: 280px × 180px (`#E0E0E0`)
- Image label: "Featured" (centered, 12px, `#999999`)
- Title below: "Cozy Collection: Kawaii Comfort" (16px, 600 weight)
- CTA: "Shop Collection" button placeholder (outlined, `#333333`)

**Column Dividers:**
- 1px solid `#E0E0E0` between each column

**Mega Menu Container:**
- Width: 900px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

---

## Collectibles & Media Mega Menu

**Pattern:** Hover-activated, 3-column layout

### Column 1: Collectibles (Left)
**Header:** "COLLECTIBLES" (12px, uppercase, `#666666`)

**Links:**
- All Figures
- Model Kits
- Replicas
- Plush

### Column 2: Media (Center)
**Header:** "MEDIA" (12px, uppercase, `#666666`)

**Links:**
- Blu-ray & DVD
- Limited Editions
- Music
- Steelbooks

### Column 3: Browse (Right)
**Header:** "BROWSE" (12px, uppercase, `#666666`)

**Links:**
- By Series
- By Character
- Featured

**Featured Visual:**
- Featured image placeholder: 280px × 140px (`#E0E0E0`)
- Image label: "New Arrival" (centered, 12px, `#999999`)

**Column Dividers:**
- 1px solid `#E0E0E0` between each column

**Mega Menu Container:**
- Width: 900px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

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

#### Discover Section
**Parent Item:** "Discover" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children:**
- Coming Soon (indent 8px)
- New Arrivals (indent 8px)
- Collaborations (indent 8px)
- Lookbooks (indent 8px)
- Exclusives (indent 8px)

---

#### Men's Section
**Parent Item:** "Men's" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children - Level 1:**
- By Type (indent 8px, chevron for sub-accordion)
- By Series (indent 8px, chevron for sub-accordion)

**Expanded Children - Level 2 (under "By Type"):**
- T-Shirts (indent 16px)
- Hoodies & Sweatshirts (indent 16px)
- Jackets (indent 16px)
- Pants & Shorts (indent 16px)
- Accessories (indent 16px)
- Figures (indent 16px)

**Expanded Children - Level 2 (under "By Series"):**
- All Series (indent 16px)
- Featured Series (indent 16px, chevron for sub-accordion)

**Expanded Children - Level 3 (under "Featured Series"):**
- Demon Slayer (indent 24px)
- One Piece (indent 24px)
- Naruto (indent 24px)
- Attack on Titan (indent 24px)
- Dragon Ball Z (indent 24px)

**Maximum Depth:** 3 levels

---

#### Women's Section
**Parent Item:** "Women's" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children - Level 1:**
- By Type (indent 8px, chevron for sub-accordion)
- By Series (indent 8px, chevron for sub-accordion)

**Expanded Children - Level 2 (under "By Type"):**
- T-Shirts (indent 16px)
- Hoodies & Sweatshirts (indent 16px)
- Jackets (indent 16px)
- Onesies (indent 16px)
- Pants & Shorts (indent 16px)
- Accessories (indent 16px)
- Figures (indent 16px)

**Expanded Children - Level 2 (under "By Series"):**
- All Series (indent 16px)
- Featured Series (indent 16px, chevron for sub-accordion)

**Expanded Children - Level 3 (under "Featured Series"):**
- Sailor Moon (indent 24px)
- Cardcaptor Sakura (indent 24px)
- My Melody (indent 24px)
- Fruits Basket (indent 24px)
- Studio Ghibli (indent 24px)

**Maximum Depth:** 3 levels

---

#### Collectibles & Media Section
**Parent Item:** "Collectibles & Media" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children - Level 1:**
- Collectibles (indent 8px, chevron for sub-accordion)
- Media (indent 8px, chevron for sub-accordion)
- By Series (indent 8px)
- By Character (indent 8px)

**Expanded Children - Level 2 (under "Collectibles"):**
- All Figures (indent 16px)
- Model Kits (indent 16px)
- Replicas (indent 16px)
- Plush (indent 16px)

**Expanded Children - Level 2 (under "Media"):**
- Blu-ray & DVD (indent 16px)
- Limited Editions (indent 16px)
- Music (indent 16px)
- Steelbooks (indent 16px)

**Maximum Depth:** 2 levels (but 3 levels in Men's/Women's sections)

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
- **Hover Delay:** 150ms before menu opens
- **Close Delay:** 300ms after mouse leaves

### Mobile Tap States
- **Accordion Parent Tap:** Chevron rotates 180deg, children expand
- **Nested Accordion:** Multiple levels can be open simultaneously
- **Accordion Collapse:** Tap parent again, chevron rotates back, children collapse
- **Link Tap:** 100ms active state (`#E8E8E8` background), then toast notification

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
- **Mobile Accordion:** `aria-expanded="true/false"` at each level
- **Hamburger Button:** `aria-label="Open navigation menu"`
- **Close Button:** `aria-label="Close navigation menu"`

### Keyboard Navigation
- **Tab:** Move through nav items and links
- **Enter/Space:** Activate links or expand accordions
- **Escape:** Close mega menu or mobile menu
- **Arrow Keys:** Navigate within mega menu (optional enhancement)

### Mobile Depth Warning
- 3-level accordion depth may cause cognitive load
- Consider visual indicators (indentation, subtle background changes) to show hierarchy

---

## Responsive Behavior

### Breakpoint: 1024px

**Above 1024px (Desktop):**
- Horizontal navigation bar with 4 items
- Hover-activated mega menus
- Full utility icons with labels

**Below 1024px (Mobile):**
- Hamburger menu
- Accordion navigation with up to 3 levels
- Icon-only utilities (no labels)

### Transition Handling
- No layout shift during resize
- Menu closes gracefully when crossing breakpoint
- State resets between desktop/mobile modes

---

## Design Considerations

### Gender-Specific Curation
- Men's section features action/shonen series
- Women's section features kawaii/shojo series
- Figures appear in both gendered sections AND main Collectibles section (duplication)

### Potential UX Concerns
- 4 top-level items creates horizontal space constraints
- 3-level mobile accordion may cause scroll fatigue
- IP discovery fragmented across Men's, Women's, and Collectibles sections
- Users seeking specific series must check multiple locations
