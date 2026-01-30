# Designer Guidance: Contact Section Implementation

## Overview
Complete styling and layout specifications for the newly implemented Experiences, Projects, and Contact sections. All HTML structure is in place with CSS classes ready for design implementation.

---

## CONTACT SECTION LAYOUT

### Layout Strategy: Form + Contact Details Side-by-Side

#### Mobile (< 768px)
- **Single column stack**
- Contact form on top
- Contact information below
- Full width (100vw)

#### Tablet (768px - 1023px)
- **Two columns (equal width)**
- Contact form on left
- Contact info on right
- Gap between: 32px (--space-2xl)

#### Desktop (1024px+)
- **Two columns (form slightly wider)**
- Contact form: ~1.2 ratio width
- Contact info: ~1 ratio width
- Total gap: 48px (--space-3xl)
- Vertical alignment: Top (align-items: start)

### CSS Reference
```css
.contact-container {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile: single column */
  gap: var(--space-2xl);
  max-width: 1000px;
  margin: 0 auto;
}

/* Tablet */
@media (min-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3xl);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .contact-container {
    grid-template-columns: 1.2fr 1fr;
    gap: var(--space-3xl);
    align-items: start;
  }
}
```

---

## CONTACT FORM STYLING

### Form Container (`.contact-form`)
- **Background:** White (var(--color-white))
- **Max Width:** Flexible (inherits container)
- **Padding:** 32px (var(--space-lg)) on all sides
- **Border Radius:** 8px (var(--border-radius-md))
- **Optional:** Subtle box-shadow for depth

### Form Title (h3)
- **Color:** Primary Blue (#1e3a8a)
- **Font Size:** 24px (--fs-2xl)
- **Margin Bottom:** 16px (var(--space-sm))
- **Font Weight:** 700

### Form Groups (`.form-group`)
- **Display:** Flex column
- **Gap:** 8px (var(--space-xs))
- **Margin Bottom:** 16px (var(--space-sm)) between groups

### Form Labels
- **Font Weight:** 600
- **Font Size:** 14px (--fs-sm)
- **Color:** Dark (#0f172a)
- **Display:** Block with bottom margin

### Input Fields (input, textarea)
**Default State:**
- **Padding:** 16px (var(--space-sm))
- **Border:** 1px solid var(--color-border) (#e2e8f0)
- **Border Radius:** 8px (var(--border-radius-md))
- **Background:** White (#ffffff)
- **Font:** Inherit from body
- **Font Size:** 16px (var(--fs-base))
- **Transition:** All 250ms ease-in-out
- **Width:** 100%

**Focus State:**
- **Outline:** None (custom)
- **Border Color:** Cyan (#06b6d4)
- **Box Shadow:** 0 0 0 3px rgba(6, 182, 212, 0.1)
- **Transition:** Smooth 250ms

**Textarea Specific:**
- **Min Height:** 120px
- **Resize:** Vertical only
- **Font Family:** Inherit (--font-primary)

### Submit Button (`.btn-submit`)
**Default State:**
- **Padding:** 16px (horizontal) × 16px (vertical)
- **Background:** Linear gradient: #1e3a8a → #06b6d4 (primary → secondary)
- **Color:** White (#ffffff)
- **Border:** None
- **Border Radius:** 8px (var(--border-radius-md))
- **Font Weight:** 600
- **Font Size:** 16px (var(--fs-base))
- **Cursor:** Pointer
- **Width:** 100%
- **Transition:** All 250ms ease-in-out

**Hover State:**
- **Transform:** translateY(-2px) (slight lift)
- **Box Shadow:** 0 10px 15px -3px rgba(0,0,0,0.1) (var(--shadow-lg))

**Active State:**
- **Transform:** translateY(0) (pressed effect)

**Disabled State (suggested):**
- **Opacity:** 0.6
- **Cursor:** Not-allowed
- **No hover effects**

---

## CONTACT INFORMATION PANEL

### Container (`.contact-info`)
- **Display:** Flex column
- **Gap:** 16px (var(--space-md))
- **Flex:** 1 (grows to fill space)

### Section Titles (h3)
- **Color:** Primary Blue (#1e3a8a)
- **Font Size:** 24px (--fs-2xl)
- **Margin Bottom:** 16px (var(--space-sm))
- **Font Weight:** 700

### Contact Details (`.contact-details`)
- **Display:** Flex column
- **Gap:** 16px (var(--space-lg)) between items

### Individual Contact Items (`.contact-item`)
**Card Layout:**
- **Padding:** 16px (var(--space-md))
- **Background:** Light gray (#f1f5f9)
- **Border Radius:** 8px (var(--border-radius-md))
- **Border:** Optional 1px solid var(--color-border)

**Item Title (h5):**
- **Color:** Primary Blue (#1e3a8a)
- **Font Size:** 18px (--fs-lg)
- **Margin Bottom:** 8px (var(--space-xs))
- **Font Weight:** 700

**Item Content (links):**
- **Color:** Cyan (#06b6d4)
- **Font Weight:** 500
- **Word Break:** break-all (handles long emails)
- **Hover:** Lighter cyan (#22d3ee)

---

## SOCIAL LINKS SECTION

### Container (`.contact-social`)
- **Margin Top:** 24px (var(--space-lg))
- **Padding Top:** 24px (var(--space-lg))
- **Border Top:** 1px solid var(--color-border)

### Title (h5)
- **Color:** Primary Blue (#1e3a8a)
- **Margin Bottom:** 16px (var(--space-md))
- **Font Weight:** 700

### Social Links Container (`.social-links`)
- **Display:** Flex
- **Gap:** 16px (var(--space-md))
- **Flex Wrap:** Wrap
- **Justify Content:** Flex-start (mobile), flex-start (tablet+)

### Individual Social Link (`.social-link`)
**Default State:**
- **Display:** Inline-flex (centered content)
- **Width:** 48px
- **Height:** 48px
- **Border Radius:** 50% (perfect circle)
- **Background:** Light gray (#f1f5f9)
- **Align Items:** Center
- **Justify Content:** Center
- **Transition:** All 250ms ease-in-out
- **Font Size:** 12px (--fs-xs)
- **Text Align:** Center

**Inner Text (span):**
- **Color:** Primary Blue (#1e3a8a)
- **Font Weight:** 600
- **Text:** "LinkedIn" or "GitHub"
- **Visibility:** Visible always or hidden on mobile (consider UX)

**Hover State:**
- **Background:** Cyan (#06b6d4)
- **Transform:** translateY(-4px) (lift effect)
- **span color:** White (#ffffff)

**Icon Option (Alternative to Text):**
If adding icons instead of text:
- **Size:** 24px × 24px
- **Color:** Primary Blue (default), White (hover)
- **Icon Library:** Font Awesome, Feather Icons, or SVG

---

## EXPERIENCES SECTION STYLING

### Container (`.experiences-container`)
- **Display:** Grid
- **Columns:** 1 (mobile) → 2 (tablet) → 2 (desktop)
- **Gap:** 24px (var(--space-lg))
- **Max Width:** 800px
- **Centered:** margin: 0 auto

### Experience Cards (`.experience-card`)
**Default State:**
- **Background:** White (#ffffff)
- **Border:** 1px solid var(--color-border)
- **Border Radius:** 8px (var(--border-radius-md))
- **Padding:** 24px (var(--space-lg))
- **Border Left:** 4px solid Cyan (#06b6d4)
- **Transition:** All 250ms ease-in-out
- **Display:** Flex flex-direction column

**Hover State:**
- **Transform:** translateX(4px) (subtle slide right)
- **Box Shadow:** 0 4px 6px -1px rgba(0,0,0,0.1) (var(--shadow-md))
- **Border Color:** Cyan (stays same)

### Experience Header (`.experience-header`)
- **Display:** Flex
- **Justify Content:** Space-between
- **Align Items:** Flex-start
- **Gap:** 16px (var(--space-md))
- **Margin Bottom:** 16px (var(--space-sm))

### Title (experience-card h4)
- **Color:** Primary Blue (#1e3a8a)
- **Margin:** 0
- **Font Size:** 20px (--fs-xl)
- **Font Weight:** 700

### Date Badge (`.experience-date`)
- **Font Size:** 14px (--fs-sm)
- **Color:** Secondary Gray (#64748b)
- **Background:** Light gray (#f1f5f9)
- **Padding:** 8px (horizontal) × 4px (vertical)
- **Border Radius:** 6px (var(--border-radius-sm))
- **White Space:** nowrap
- **Font Weight:** 500

### Company (`.experience-company`)
- **Font Weight:** 600
- **Color:** Cyan (#06b6d4)
- **Margin Bottom:** 16px (var(--space-sm))
- **Font Size:** 16px (--fs-base)

### Description (`.experience-description`)
- **Color:** Secondary Gray (#64748b)
- **Line Height:** 1.7
- **Margin:** 0
- **Font Size:** 16px (--fs-base)

---

## PROJECTS SECTION STYLING

### Container (`.projects-container`)
- **Display:** Grid
- **Columns:** 1 (mobile) → 2 (tablet) → 3 (desktop)
- **Gap:** 24px (var(--space-lg))
- **Max Width:** 900px
- **Centered:** margin: 0 auto

### Project Cards (`.project-card`)
**Default State:**
- **Background:** White (#ffffff)
- **Border:** 1px solid var(--color-border)
- **Border Radius:** 8px (var(--border-radius-md))
- **Padding:** 24px (var(--space-lg))
- **Display:** Flex flex-direction column
- **Gap:** 16px (var(--space-md))
- **Transition:** All 250ms ease-in-out

**Hover State:**
- **Transform:** translateY(-4px) (lift effect)
- **Box Shadow:** 0 10px 15px -3px rgba(0,0,0,0.1) (var(--shadow-lg))
- **Border Color:** Cyan (#06b6d4)

### Project Title (project-card h4)
- **Color:** Primary Blue (#1e3a8a)
- **Margin Bottom:** 16px (var(--space-sm))
- **Font Size:** 20px (--fs-xl)
- **Font Weight:** 700

### Project Description (`.project-description`)
- **Color:** Secondary Gray (#64748b)
- **Line Height:** 1.7
- **Margin:** 0
- **Font Size:** 16px (--fs-base)
- **Flex:** 1 (grows to fill space)

### Tag Container (`.project-tags`)
- **Display:** Flex
- **Flex Wrap:** Wrap
- **Gap:** 8px (var(--space-xs))
- **Margin Top:** 16px (var(--space-sm))

### Individual Tags (`.tag`)
- **Background:** Light gray (#f1f5f9)
- **Color:** Primary Blue (#1e3a8a)
- **Padding:** 4px (vertical) × 12px (horizontal)
- **Border Radius:** 20px (pill shape)
- **Font Size:** 14px (--fs-sm)
- **Font Weight:** 500
- **Transition:** All 250ms

**Hover (optional):**
- **Background:** Cyan (#06b6d4)
- **Color:** White (#ffffff)

### Project Link (`.project-link`)
- **Display:** Inline-flex
- **Align Items:** Center
- **Color:** Cyan (#06b6d4)
- **Font Weight:** 600
- **Transition:** All 250ms
- **Width:** fit-content
- **Font Size:** 16px (--fs-base)

**Hover State:**
- **Color:** Purple (#7c3aed)
- **Text Decoration:** Optional underline
- **Arrow:** "→" grows or animates

---

## ACCESSIBILITY CONSIDERATIONS

### Form Accessibility
1. **Labels:** All form labels are associated with inputs (for/id)
2. **Required Fields:** Mark with asterisk and required attribute
3. **Focus States:** Cyan border + light shadow for keyboard users
4. **Error States:** Consider red/error color for validation feedback
5. **Placeholder:** Use in addition to labels, not instead of

### Color Contrast
- Text on white: Primary Blue (#1e3a8a) on White ✓ (high contrast)
- Links: Cyan (#06b6d4) on white/light backgrounds - check contrast ratio
- Secondary text: Gray (#64748b) on white - verify WCAG AA compliance

### Interactive Elements
- **Button:** Min 44px × 44px touch target (48px used) ✓
- **Links:** Clear underline or color change on hover ✓
- **Focus Indicators:** 2px solid cyan outline ✓

### Keyboard Navigation
- Tab through form fields in logical order
- Submit button is keyboard accessible
- Social links open in new tab without warning (add title attribute)

---

## ANIMATIONS & TRANSITIONS

### Hover Effects
- **Experiences:** Subtle slide right (4px)
- **Projects:** Lift with shadow (4px up)
- **Buttons:** Lift on hover, press on active
- **Social Links:** Lift and color change (4px up)

### Transitions
- **Duration:** 250ms (--transition-base)
- **Timing:** ease-in-out
- **Properties:** transform, box-shadow, color, background-color

### Reduced Motion
Respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled or minimal */
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Device | Layout Changes |
|-----------|--------|-----------------|
| < 768px | Mobile | Single column, bottom nav |
| 768px+ | Tablet | Two columns (experiences/projects), top nav, contact side-by-side |
| 1024px+ | Desktop | Three columns (projects), optimized contact |
| 1440px+ | Large | Increased base font size (18px), larger spacing |

---

## DESIGN TOKENS REFERENCE

### Color Palette
```
Primary:     #1e3a8a (Deep Blue)
Primary Lg:  #3b82f6 (Light Blue)
Secondary:   #06b6d4 (Cyan)
Accent:      #7c3aed (Purple)
Dark:        #0f172a (Main text)
Text Sec:    #64748b (Secondary text)
Light:       #f1f5f9 (Light bg)
White:       #ffffff (Pure white)
Border:      #e2e8f0 (Borders)
```

### Typography
```
Font Primary: System fonts (Apple System, Segoe UI, Roboto, etc.)
Font Mono:    'SF Mono', Monaco, 'Cascadia Code', etc.

Font Sizes:
  --fs-xs:   12px
  --fs-sm:   14px
  --fs-base: 16px
  --fs-lg:   18px
  --fs-xl:   20px
  --fs-2xl:  24px
  --fs-3xl:  30px
```

### Spacing (8px base unit)
```
--space-xs:   8px
--space-sm:   16px
--space-md:   24px
--space-lg:   32px
--space-xl:   48px
--space-2xl:  64px
--space-3xl:  96px
```

### Shadows
```
--shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1)
--shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1)
```

---

## IMPLEMENTATION CHECKLIST

- [ ] Contact section form styling matches spec
- [ ] Contact information cards styled correctly
- [ ] Social links are circular (48px) and interactive
- [ ] Form focus states are clear (cyan border + shadow)
- [ ] Submit button has gradient and hover effects
- [ ] Experience cards have left cyan border
- [ ] Project cards lift on hover with shadow
- [ ] Tag styling with pill-shape border-radius
- [ ] Responsive layouts tested at all breakpoints
- [ ] Accessibility contrast ratios verified
- [ ] Keyboard navigation works
- [ ] Animations respect prefers-reduced-motion
- [ ] Touch targets are minimum 44px

---

## Notes for Designer

1. **Form Submission:** Form styling is complete, but backend/form service setup needed (Developer task)
2. **Email Link:** Email placeholder needs updating with real address
3. **Social Icons:** Current design uses text labels in circles; consider adding icon graphics
4. **Mobile Form:** Consider multi-step form if mobile experience feels crowded
5. **Success Message:** Form needs visual feedback after submission (error/success state)

---

**Contact sections are ready for implementation. All HTML is in place with semantic classes for styling.**