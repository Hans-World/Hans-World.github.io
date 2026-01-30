# Portfolio Architecture Summary

## Three-Layer System

```
┌─────────────────────┐
│  Colors (CSS)       │  colors.css
│  - Color tokens     │  - Palette definitions
│  - Semantic colors  │  - Color-specific styles
└─────────────────────┘
          ↓
┌─────────────────────┐
│  Layout (CSS)       │  style.css
│  - Spacing          │  - Responsive design
│  - Typography       │  - Component structure
│  - Positioning      │  - Animations (CSS)
└─────────────────────┘
          ↓
┌─────────────────────┐
│  Motion (JS)        │  scripts/script.js
│  - Interactions     │  - Event handlers
│  - JavaScript anim  │  - DOM manipulation
│  - User behavior    │  - Form validation
└─────────────────────┘
          ↓
┌─────────────────────┐
│  Structure (HTML)   │  index.html
│  - Content          │  - Semantic markup
│  - Accessibility    │  - Form inputs
└─────────────────────┘
```

## File Organization

### CSS Files
- **style.css** - Main stylesheet (layout + typography)
- **colors.css** - Color palette (imported by style.css)

### JavaScript
- **scripts/script.js** - All motion and interactivity

### HTML
- **index.html** - Content and semantic structure

### Documentation
- **DESIGN_GUIDE.md** - How to implement the design
- **APPLE_DESIGN_PALETTES.md** - Available color options
- **ARCHITECTURE_SUMMARY.md** - This file

---

## Key Rules

✅ **DO**
- Use CSS variables for colors
- Keep motion in JavaScript or CSS animations
- Reference variables semantically
- Follow mobile-first responsive design
- Test accessibility (WCAG AAA)

❌ **DON'T**
- Hardcode colors
- Add styling logic to JavaScript
- Mix colors into layout sections
- Skip accessibility checks
- Add more than 4 colors per view

---

## Development Workflow

### Adding a New Section
1. **HTML** - Add semantic structure
2. **CSS Layout** - Add spacing, typography
3. **CSS Colors** - Import color variables
4. **JavaScript** - Add animations/interactivity

### Changing Colors Only
1. Edit `colors.css` variables only
2. No changes to other files
3. Changes apply instantly

### Adding Animations
1. Edit `scripts/script.js` for JS-driven effects
2. Or edit CSS for keyframe animations
3. No color changes needed

---

## Benefits

- **Single Responsibility**: One file, one job
- **Easy Maintenance**: Know where to edit
- **Fast Theme Switching**: Change colors only
- **Scalability**: Add features independently
- **Accessibility**: Consistent color management
- **Performance**: Optimized organization

---

## Responsive Breakpoints

- **Mobile**: < 768px (default)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large**: 1440px+

Navigation moves from fixed bottom (mobile) to top (tablet+).
Grid layouts expand: 1 column → 2 columns → 3 columns

---

## Accessibility Features

- ✅ WCAG AAA color contrast
- ✅ Focus states for keyboard navigation
- ✅ Prefers-reduced-motion support
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Form validation feedback
- ✅ ARIA labels on inputs

---

## Team Responsibilities

| Role | Owns | Can Edit | Cannot Edit |
|------|------|----------|-------------|
| Designer | colors.css | Typography, responsive | JavaScript |
| Developer | script.js | Layout CSS | Design decisions |
| Content Mgr | HTML content | - | CSS/JS |
| QA | Testing | - | Code |

---

## Performance Considerations

- CSS variables only (no preprocessing)
- Minimal animations (reduced-motion aware)
- Mobile-first CSS (smaller initial payload)
- No external dependencies
- Optimized images
- Smooth scroll behavior

---

## Next Enhancement Steps

1. Extract `layout.css` when style.css > 1000 lines
2. Create `animations.css` for complex motion
3. Add component pattern documentation
4. Implement performance monitoring
5. Create style guide library

---

## Questions?

Refer to documentation:
- DESIGN_GUIDE.md - Implementation details
- APPLE_DESIGN_PALETTES.md - Color options
- style.css - Current implementation
- colors.css - Color definitions
