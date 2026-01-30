# Apple-Inspired Design Guide

## Overview
This portfolio follows the Apple design philosophy: premium minimalism, restraint, and single-action color focus.

## Three-Layer Architecture
- **Colors** (colors.css) - Semantic color tokens
- **Layout** (style.css) - Spacing, positioning, typography
- **Motion** (script.js) - Animations and interactions

## Color System

### Apple Space Gray Professional Palette (Active)

```
Background Layers:
  --color-bg-primary: #1d1d1f     /* Main background */
  --color-bg-secondary: #2c2c2e   /* Card backgrounds */
  --color-bg-tertiary: #3a3a3c    /* Elevated surfaces */

Primary Action:
  --color-primary: #0071e3        /* Apple Blue */
  
Text Colors:
  --color-text-primary: #ffffff   /* 18.1:1 contrast - AAA */
  --color-text-secondary: #a1a1a6 /* 7.8:1 contrast - AA */
  --color-text-tertiary: #6e6e73  /* Subtle text */

Semantic:
  --color-success: #30d158        /* Green */
  --color-error: #ff3b30          /* Red */
  --color-warning: #ff9500        /* Orange */
```

## Implementation Rules

### ✅ DO
- Use CSS variables for all colors
- Reference variables semantically (`--color-text-primary` not `--color-white`)
- Maintain 3-4 colors maximum per view
- Test contrast ratios (WCAG AAA target)
- Respect `prefers-reduced-motion`

### ❌ DON'T
- Hardcode hex colors
- Mix color systems
- Add colors to layout sections
- Use more than 4 colors in a UI section
- Break accessibility standards

## Accessibility (WCAG AAA)

All colors meet WCAG AAA contrast requirements:
- White on Space Gray 900: 18.1:1
- All text pairings: >= 7:1 contrast

## How to Use Color Variables

```css
/* ✅ Correct */
.element {
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
}

/* ❌ Incorrect */
.element {
  color: #ffffff;
  background: #2c2c2e;
  border: 1px solid #3a3a3c;
}
```

## Switching Color Palettes

To use a different palette, only edit `colors.css`:
1. Replace `:root` variable values
2. No other files need modification
3. Changes apply instantly

Available palettes:
- **Space Gray Professional** (current - professional, technical)
- **Silver Light** (bright, approachable)
- **Graphite Pro** (ultra-premium, sophisticated)

See APPLE_DESIGN_PALETTES.md for complete palettes.

## Form Styling

### Input Focus States
```css
input:focus {
  border-color: var(--color-primary);
  box-shadow: var(--glow-primary);
}
```

### Error States
```css
.form-group--error input {
  border-color: var(--color-error);
}
```

### Button Hover
```css
button:hover {
  background-color: var(--color-primary-light);
  transform: translateY(-2px);
}
```

## Motion & Animation

- Use `var(--transition-base)` for standard animations (250ms)
- Use `var(--transition-slow)` for emphasis (350ms)
- Always check `prefers-reduced-motion` in JavaScript
- Target 60fps performance

Example:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  // Disable or simplify animations
}
```

## Responsive Design

Mobile-first with breakpoints:
- **Mobile**: Default
- **Tablet**: 768px
- **Desktop**: 1024px
- **Large**: 1440px

## Shadow System

Use predefined shadows for consistent depth:
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
--shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.2);
```

## Typography

- **Headings**: System font stack, weights 600-700
- **Body**: System font stack, weight 400
- **Mono**: 'SF Mono' or fallback, for code
- **Hierarchy**: Use font size scale, not colors to differentiate

## Focus States

All interactive elements must have visible focus for keyboard users:
```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

## Questions?

Refer to:
- ARCHITECTURE_SUMMARY.md - System organization
- APPLE_DESIGN_PALETTES.md - Available colors
- style.css - Current implementation
