# Option A: Discover & Series-First + Product Type

## Navigation Structure

**Top-Level Items:** Discover | Series | Shop | [Search] [Account] [Cart]

---

## Desktop Navigation Structure

### Primary Navigation Bar
```
[Logo: 120×32px rectangle]    Discover    Series    Shop    [Search Icon] [Account Icon] [Cart Icon]
```

**Layout:**
- Left-aligned logo
- Center-aligned navigation items
- Right-aligned utility icons
- Height: 64px
- Background: `#FFFFFF`
- Border-bottom: 1px solid `#E0E0E0`

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

**Spacing:**
- Each link: 14px font, 12px line height spacing between items
- Section padding: 32px all sides

### Column 2: Featured (Right)
**Content:**
- Featured image placeholder: 280px × 180px (`#E0E0E0`)
- Image label: "Featured" (centered, 12px, `#999999`)
- Title below: "Spring Collection: Jujutsu Kaisen" (16px, 600 weight)
- Subtitle: "Shop the new collection" (14px, `#666666`)

**Column Divider:**
- 1px solid `#E0E0E0` between columns

**Mega Menu Container:**
- Width: 600px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

---

## Series Mega Menu

**Pattern:** Hover-activated, 3-column layout

### Column 1: Browse (Left)
**Header:** "BROWSE" (12px, uppercase, `#666666`)

**Links:**
- All Series A-Z

### Column 2: Featured Series (Center)
**Header:** "FEATURED SERIES" (12px, uppercase, `#666666`)

**Links:**
- Demon Slayer
- My Hero Academia
- One Piece
- Jujutsu Kaisen
- Chainsaw Man
- Attack on Titan
- Naruto
- Bleach

### Column 3: Featured (Right)
**Content:**
- Featured image placeholder: 280px × 180px (`#E0E0E0`)
- Image label: "Featured" (centered, 12px, `#999999`)
- Title below: "New: Attack on Titan Final Season" (16px, 600 weight)
- CTA: "Shop Collection" button placeholder (outlined, `#333333`)

**Column Dividers:**
- 1px solid `#E0E0E0` between each column

**Mega Menu Container:**
- Width: 900px
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Border-radius: 8px
- Background: `#FFFFFF`

---

## Shop Mega Menu

**Pattern:** Hover-activated, 3-column layout

### Column 1: Apparel (Left)
**Header:** "APPAREL" (12px, uppercase, `#666666`)

**Links:**
- Men's
- Women's
- Exclusives

### Column 2: Collectibles (Center)
**Header:** "COLLECTIBLES" (12px, uppercase, `#666666`)

**Links:**
- Figures
- Blind Boxes
- Model Kits
- Replicas
- Plush

### Column 3: Entertainment (Right)
**Header:** "ENTERTAINMENT" (12px, uppercase, `#666666`)

**Links:**
- Blu-ray & DVD
- Limited Editions
- Steelbooks

**Column Dividers:**
- 1px solid `#E0E0E0` between each column

**Mega Menu Container:**
- Width: 720px
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

**Spacing:** 16px vertical padding per item

---

#### Series Section
**Parent Item:** "Series" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children - Level 1:**
- All Series A-Z (indent 8px)
- Featured (indent 8px, chevron for sub-accordion)

**Expanded Children - Level 2 (under "Featured"):**
- Demon Slayer (indent 16px)
- My Hero Academia (indent 16px)
- One Piece (indent 16px)
- Jujutsu Kaisen (indent 16px)
- Chainsaw Man (indent 16px)

**Maximum Depth:** 2 levels

---

#### Shop Section
**Parent Item:** "Shop" (16px, 600 weight)
- Chevron icon (right-aligned)
- Tap to expand accordion

**Expanded Children - Level 1:**
- Apparel (indent 8px, chevron for sub-accordion)
- Collectibles (indent 8px, chevron for sub-accordion)
- Entertainment (indent 8px, chevron for sub-accordion)

**Expanded Children - Level 2 (under "Apparel"):**
- Men's (indent 16px)
- Women's (indent 16px)
- Exclusives (indent 16px)

**Expanded Children - Level 2 (under "Collectibles"):**
- Figures (indent 16px)
- Blind Boxes (indent 16px)
- Model Kits (indent 16px)
- Replicas (indent 16px)
- Plush (indent 16px)

**Expanded Children - Level 2 (under "Entertainment"):**
- Blu-ray & DVD (indent 16px)
- Limited Editions (indent 16px)
- Steelbooks (indent 16px)

**Maximum Depth:** 2 levels

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
- **Mobile Accordion:** `aria-expanded="true/false"`
- **Hamburger Button:** `aria-label="Open navigation menu"`
- **Close Button:** `aria-label="Close navigation menu"`

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

**Below 1024px (Mobile):**
- Hamburger menu
- Accordion navigation
- Icon-only utilities (no labels)

### Transition Handling
- No layout shift during resize
- Menu closes gracefully when crossing breakpoint
- State resets between desktop/mobile modes
