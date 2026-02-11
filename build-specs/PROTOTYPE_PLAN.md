# Navigation Prototype Plan

## Project Overview
Build interactive navigation prototypes for Options A, B, and D focusing solely on menu behavior and interaction patterns. Single-page comparison tool with pattern toggling.

---

## Technical Approach

### Tech Stack
- **React** (component reusability, state management)
- **Framer Motion** (smooth animations, hover states)
- **Tailwind CSS** (rapid wireframe styling)
- **React Router** (pattern switching without page reload)

### File Structure
```
/src
  /components
    /navigation
      NavWrapper.jsx          (container + pattern toggle)
      OptionA.jsx             (Option A navigation)
      OptionB.jsx             (Option B navigation)
      OptionD.jsx             (Option D navigation)
      MegaMenu.jsx            (reusable mega menu component)
      MobileMenu.jsx          (reusable mobile menu)
    /ui
      Toggle.jsx              (pattern switcher)
      AnimationControls.jsx   (speed/disable controls)
  /hooks
    useMediaQuery.js          (responsive breakpoint detection)
  App.jsx
```

---

## Visual Design System

### Wireframe Specifications

**Color Palette:**
- Background: `#FFFFFF`
- Surface: `#F5F5F5`
- Border: `#E0E0E0`
- Text Primary: `#333333`
- Text Secondary: `#666666`
- Hover State: `#E8E8E8`
- Active State: `#D0D0D0`

**Typography:**
- Font: System sans-serif (`-apple-system, BlinkMacSystemFont, "Segoe UI"`)
- Nav Items: 14px, 600 weight
- Mega Menu Headers: 12px, 700 weight, uppercase, letter-spacing
- Mega Menu Links: 14px, 400 weight

**Spacing Units:**
- Nav height: 64px (desktop), 56px (mobile)
- Menu item padding: 20px horizontal, 24px vertical
- Mega menu padding: 32px
- Grid gap: 24px

**Component Blocks:**
- Logo: 120px × 32px rectangle (`#333333`)
- Nav items: Text only, no backgrounds
- Icon placeholders: 20px × 20px squares
- Featured images: 280px × 180px rectangles (`#E0E0E0` with "Featured" text)
- Mobile menu: Full viewport width

---

## Interaction Specifications

### Desktop Behaviors

**Mega Menu Activation:**
- **Trigger:** Hover over nav item
- **Delay:** 150ms open delay (prevents accidental triggers)
- **Close:** 300ms close delay (allows mouse travel)
- **Animation:** 
  - Fade in: 200ms ease-out
  - Slide down: 8px vertical motion
  - Opacity: 0 → 1

**Mega Menu Structure:**
- Drop shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Column dividers: 1px solid `#E0E0E0`
- Link hover: Background `#F5F5F5`, 200ms transition

**Click Behavior:**
- Top-level nav items: Clickable (show toast: "Would navigate to [Page]")
- Mega menu links: Clickable (show toast: "Would navigate to [Page]")
- Featured images: Clickable (show toast: "Would navigate to [Page]")

### Mobile Behaviors

**Menu Activation:**
- **Trigger:** Tap hamburger icon
- **Animation:**
  - Slide in from left: 300ms ease-out
  - Overlay fade: 200ms
  - Menu transform: translateX(-100%) → translateX(0)

**Accordion Behavior:**
- **Trigger:** Tap parent item
- **Animation:**
  - Chevron rotate: 180deg, 200ms
  - Content expand: height auto, 250ms ease
  - Nested items: 8px left indent per level

**Close Behavior:**
- Tap X button
- Tap overlay backdrop
- Animation: Reverse of open (300ms)

### Responsive Breakpoint
- **Desktop:** ≥ 1024px (mega menus)
- **Mobile:** < 1024px (hamburger menu)
- **Live toggle:** Resize window to see pattern switch

---

## Pattern Toggle Component

### Toggle UI Placement
- **Position:** Fixed top-right corner (outside nav area)
- **Style:** Segmented control / pill selector
- **Labels:** "Option A" | "Option B" | "Option D"
- **Behavior:** Click to switch, 400ms crossfade between patterns

### Animation Controls (Optional Dev Tools)
- **Position:** Fixed bottom-right
- **Controls:**
  - Animation speed: 0.5x | 1x | 2x
  - Disable animations toggle
  - Show hover zones (debug mode)

---

## Prototype States to Demonstrate

### Desktop States (per option)
1. **Default:** All menus closed
2. **Hover State 1:** First nav item mega menu open
3. **Hover State 2:** Second nav item mega menu open
4. **Hover State 3:** Third nav item mega menu open
5. **Search Focus:** Search input expanded (if applicable)

### Mobile States (per option)
1. **Default:** Menu closed
2. **Menu Open:** Hamburger expanded, no accordions open
3. **Accordion Level 1:** First parent expanded
4. **Accordion Level 2:** Nested child expanded (where applicable)
5. **Scroll State:** Menu scrolled halfway (to show scrollability)

---

## Development Phases

### Phase 1: Setup & Infrastructure (2 hours)
- Initialize React project
- Install dependencies (Framer Motion, Tailwind)
- Create base component structure
- Implement media query hook
- Build pattern toggle component

### Phase 2: Shared Components (3 hours)
- `MegaMenu.jsx` with column system
- `MobileMenu.jsx` with accordion logic
- Hover/click state management
- Animation presets (variants)
- Toast notification system

### Phase 3: Option A Implementation (2 hours)
- Desktop navigation structure
- Mega menu content (Discover, Series, Shop)
- Mobile accordion structure
- Featured image placeholders
- All interaction states

### Phase 4: Option B Implementation (2 hours)
- Desktop navigation structure
- Mega menus (Discover, Men's, Women's, Collectibles & Media)
- Mobile accordion (3-level depth)
- Duplicate figures pattern in gendered sections
- All interaction states

### Phase 5: Option D Implementation (2 hours)
- Desktop navigation structure
- Mega menus (Series, New, Shop, Discover)
- Mobile accordion structure
- Timer/countdown placeholder in "New" mega
- All interaction states

### Phase 6: Polish & Documentation (2 hours)
- Smooth transitions between options
- Animation timing refinement
- Add keyboard navigation (tab, escape)
- Accessibility labels
- Create usage documentation overlay

**Total Estimated Time:** 13 hours

---

## Testing Checklist

### Interaction Testing
- [ ] All mega menus open/close smoothly (desktop)
- [ ] Hover delays prevent accidental triggers
- [ ] Mobile menu slides in/out correctly
- [ ] Accordions expand/collapse at correct depths
- [ ] Pattern toggle switches without breaking state
- [ ] Toast notifications display correctly
- [ ] No layout shift during animations

### Responsive Testing
- [ ] Breakpoint switch (1024px) works seamlessly
- [ ] Mobile menu fills viewport correctly
- [ ] Desktop mega menus don't overflow viewport
- [ ] Featured images maintain aspect ratio
- [ ] Text doesn't wrap awkwardly at any width

### Accessibility Testing
- [ ] Keyboard navigation works (Tab, Shift+Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] ARIA labels present on interactive elements
- [ ] Screen reader announces menu state changes
- [ ] Color contrast meets WCAG AA

### Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (desktop + iOS)
- [ ] Samsung Internet (Android)

---

## Deliverables

1. **Live Prototype URL** (deployed via Vercel/Netlify)
2. **Source Code** (GitHub repository)
3. **Documentation Page** including:
   - How to use the toggle
   - Interaction pattern descriptions
   - Key differences between options
   - Known limitations
4. **Screen Recording** (2-3 min) demonstrating:
   - Desktop interactions for all 3 options
   - Mobile interactions for all 3 options
   - Pattern switching
   - Responsive behavior

---

## Success Criteria

Prototype is successful if stakeholders can:
- ✅ Understand menu hierarchy at a glance
- ✅ Experience hover/click timing and feel
- ✅ Compare mobile accordion depths side-by-side
- ✅ Identify friction points in user journeys
- ✅ Make informed decision on which option to build

**This prototype should answer:** "Which navigation pattern FEELS right?" not "What does the site look like?"

---

## Reference Documents

- `OPTION_A_DETAILS.md` - Complete content structure for Option A
- `OPTION_B_DETAILS.md` - Complete content structure for Option B
- `OPTION_D_DETAILS.md` - Complete content structure for Option D
