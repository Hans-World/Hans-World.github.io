# Three-Layer Architecture: Quick Reference Cheat Sheet

## The Three Layers Visualized

```
┌──────────────────────────────────────────────────────┐
│  LAYER 3: COLORS (style.css)                         │
│  • color, background-color, border-color            │
│  • Shadows (color parts)                            │
│  • CSS variables for colors                         │
├──────────────────────────────────────────────────────┤
│  LAYER 2: LAYOUT (HTML + layout.css)                │
│  • Display, flex, grid, positioning                │
│  • Padding, margin, sizing                         │
│  • Font sizes, line heights                        │
│  • Responsive breakpoints                          │
├──────────────────────────────────────────────────────┤
│  LAYER 1: MOTION (script.js + animations)           │
│  • Smooth scrolling, hover effects                 │
│  • Form interactions, validation                   │
│  • Event listeners, DOM changes                    │
│  • Accessibility features                          │
└──────────────────────────────────────────────────────┘
```

---

## Agent Responsibilities at a Glance

### UI/UX Designer
**Focus:** Colors only
```
✓ DO THIS                          ✗ DON'T DO THIS
─────────────────────────────────────────────────────
Update color variables             Modify padding/margins
Define color palettes              Change font sizes
Check contrast ratios              Touch responsive breakpoints
Style hover colors                 Add layout classes
```

**File:** `/styles/style.css` (lines 14-49, 793-830)

### Frontend Developer
**Focus:** Motion and interactivity
```
✓ DO THIS                          ✗ DON'T DO THIS
─────────────────────────────────────────────────────
Add animations                     Set colors directly in JS
Handle form validation             Modify CSS layout properties
Create event listeners             Change spacing values
Manage DOM interactions            Hardcode hex colors
```

**File:** `/scripts/script.js`

### Content Manager
**Focus:** Portfolio content
```
✓ DO THIS                          ✗ DON'T DO THIS
─────────────────────────────────────────────────────
Update text content                Modify CSS classes
Verify links work                  Change HTML structure
Complete project descriptions      Add styling
Check contact info                 Touch JavaScript
```

**File:** `/index.html` (text only)

### QA Tester
**Focus:** Integration of all layers
```
✓ DO THIS                          ✗ DON'T DO THIS
─────────────────────────────────────────────────────
Test colors appear correctly       Hardcode expected colors
Verify animations are smooth       Ignore layout issues
Check on multiple devices          Only test desktop
Test form validation               Skip accessibility checks
```

**Testing across:** All files working together

---

## File Responsibility Matrix

| Property | File | Agent | Example |
|----------|------|-------|---------|
| `background-color` | `style.css` | Designer | `--color-bg-primary: #0a0e1a;` |
| `padding` | `layout.css` | Layout | `padding: 1.5rem;` |
| `animation` timing | `layout.css` | Developer | `transition: 300ms ease-out;` |
| animation keyframes | `style.css` (colors) | Designer | `box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);` |
| `display: flex` | `layout.css` | Layout | `display: flex; gap: 1rem;` |
| `color` | `style.css` | Designer | `color: var(--color-text-primary);` |
| Event handler | `script.js` | Developer | `element.addEventListener('click', ...)` |
| Form validation | `script.js` | Developer | `formValidation.validateField(field)` |

---

## The Golden Rules

### Rule 1: Separation of Concerns
**One agent, one file type**
- Designer: Only `style.css` color section
- Developer: Only `script.js` and HTML interaction
- Layout person: Only `layout.css` (when separated)

### Rule 2: CSS Variables for Colors
**Always use variables, never hardcode hex in HTML/JS**
```css
/* Good */
--color-primary: #3b82f6;
color: var(--color-primary);

/* Bad */
color: #3b82f6;
```

### Rule 3: Classes for Behavior
**Use classes to trigger style changes, not inline styles**
```javascript
/* Good */
element.classList.add('active');

/* Bad */
element.style.color = '#3b82f6';
```

### Rule 4: Layout CSS First, Colors Second
**In HTML, load layout before colors**
```html
<link rel="stylesheet" href="styles/layout.css">  <!-- First -->
<link rel="stylesheet" href="styles/style.css">   <!-- Second -->
```

### Rule 5: No Color Logic in JavaScript
**JavaScript doesn't decide colors; CSS variables do**
```javascript
/* Good: JS handles behavior only */
if (userClicked) {
  element.classList.add('highlight');
}

/* Bad: JS setting colors */
if (userClicked) {
  element.style.color = '#3b82f6';
}
```

---

## What Goes Where: Property Reference

### style.css (Colors)
```css
color                    ✓
background-color         ✓
background-image         ✓ (color gradients)
border-color             ✓
box-shadow colors        ✓
text-shadow colors       ✓
outline-color            ✓
caret-color              ✓
accent-color             ✓
─────────────────────────
padding                  ✗
margin                   ✗
display                  ✗
flex/grid                ✗
transform                ✗
font-size                ✗
```

### layout.css (Structure)
```css
display                  ✓
flex-direction           ✓
grid-template-columns    ✓
padding                  ✓
margin                   ✓
width                    ✓
height                   ✓
transform                ✓
position                 ✓
font-size                ✓
line-height              ✓
border-radius            ✓
border-width             ✓
@media                   ✓
─────────────────────────
color                    ✗
background-color         ✗
box-shadow colors        ✗
```

### script.js (Motion)
```javascript
addEventListener()       ✓
classList.add()         ✓
classList.remove()      ✓
scrollTo()              ✓
IntersectionObserver    ✓
element.textContent     ✓
─────────────────────────
element.style.color     ✗
setBackgroundColor()    ✗
direct color changes    ✗
```

---

## Common Scenarios: Who Does What?

### Scenario 1: "The button is too big on mobile"
**Problem:** Layout issue
**Who fixes:** Layout person (layout.css)
```css
/* Don't touch colors, just size/padding */
@media (max-width: 640px) {
  button {
    padding: 0.5rem 1rem;  /* Smaller on mobile */
  }
}
```

### Scenario 2: "The button color doesn't match the design"
**Problem:** Color issue
**Who fixes:** Designer (style.css)
```css
button {
  background-color: var(--color-primary);  /* Update variable */
}
```

### Scenario 3: "The button should animate when clicked"
**Problem:** Motion issue
**Who fixes:** Developer (script.js + style.css)
```javascript
button.addEventListener('click', function() {
  this.classList.add('animating');
});
```
```css
/* Designer defines the color during animation */
.animating {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-lg);
}
```

### Scenario 4: "Users don't see the error message"
**Problem:** Visibility issue (text color contrast)
**Who fixes:** Designer (style.css color contrast)
```css
.error-message {
  color: var(--color-error);  /* Make sure this has good contrast */
  background-color: var(--color-bg-primary);
}
```

### Scenario 5: "Error message appears but feels jarring"
**Problem:** Motion issue (no transition)
**Who fixes:** Developer (layout.css animation timing)
```css
.error-message {
  animation: slideDown 0.3s ease-out;
  transition: all 300ms ease-out;
}
```

---

## Quick Decision Tree

### "Should I touch this file?"

```
Is it a COLOR?
├─ YES → style.css (Designer only)
└─ NO
   └─ Is it LAYOUT/SPACING?
      ├─ YES → layout.css (Layout person only)
      └─ NO
         └─ Is it MOTION/INTERACTION?
            ├─ YES → script.js (Developer only)
            └─ NO → Check project requirements
```

---

## CSS Variables You'll Use (Most Common)

### Designer's "Grab Bag"
These are the colors a designer will regularly update:

```css
/* Backgrounds */
--color-bg-primary
--color-bg-secondary
--color-bg-tertiary

/* Text */
--color-text-primary
--color-text-secondary
--color-text-tertiary

/* Actions */
--color-primary
--color-primary-light
--color-primary-dark
--color-secondary
--color-accent

/* Status */
--color-success
--color-error
--color-warning
```

**Developer's note:** Never hardcode these. Always use the variable.

---

## Red Flags: Signs of Bad Architecture

### Red Flag 1: Designer Modifying layout.css
```css
/* WRONG - Designer shouldn't do this */
.card {
  padding: 1rem;           /* Layout */
  margin-bottom: 1rem;     /* Layout */
  display: flex;           /* Layout */
}
```

### Red Flag 2: Developer Setting Colors
```javascript
/* WRONG - Developer shouldn't do this */
element.style.color = '#3b82f6';
element.style.backgroundColor = '#1e293b';
```

### Red Flag 3: HTML with Inline Colors
```html
<!-- WRONG - No inline styles -->
<div style="color: blue; padding: 20px;">

<!-- RIGHT -->
<div class="card">
```

### Red Flag 4: JavaScript Touch Events Without Classes
```javascript
/* WRONG */
element.onmouseover = function() {
  this.style.transform = 'scale(1.1)';  // Animation in JS
}

/* RIGHT */
element.addEventListener('mouseover', function() {
  this.classList.add('hovered');  // Class triggers CSS animation
});
```

### Red Flag 5: Responsive Design Logic in JavaScript
```javascript
/* WRONG - Media queries belong in CSS */
if (window.innerWidth < 768) {
  element.style.width = '100%';
}

/* RIGHT - Use CSS media queries */
@media (max-width: 768px) {
  element { width: 100%; }
}
```

---

## Workflow: Day-to-Day Operations

### Monday: Designer Work
```
1. Review design feedback
2. Update CSS color variables in style.css
3. Test contrast ratios
4. Commit changes: git add styles/style.css
```

### Tuesday: Developer Work
```
1. Implement JavaScript features in script.js
2. Add animation classes (no colors)
3. Test with current colors
4. Commit changes: git add scripts/script.js
```

### Wednesday: QA Work
```
1. Test colors render correctly
2. Test animations work smoothly
3. Test responsiveness
4. Report issues to appropriate agent
```

### Thursday: Integration
```
1. Designer + Developer sync
2. Fix any conflicts (cross-layer issues)
3. Final tweaks
4. Code review
```

### Friday: Testing & Polish
```
1. QA comprehensive testing
2. Minor refinements
3. All commits approved
4. Ready for next sprint
```

---

## Communication Template

### Designer → Developer
> "I've updated the color variables in style.css. Primary color is now `#0071e3`. All components using `--color-primary` will update automatically."

### Developer → Designer
> "I've added a new `.hover-elevated` class that applies a shadow on hover. Update the shadow colors in that class as needed."

### QA → Both
> "Form error states show correctly in color but animation is laggy in Chrome. Designer: colors look good. Developer: smooth the transition timing in the animation."

---

## Checklist: "Is This Task Ready to Assign?"

### For Designer Tasks
- [ ] Task focuses on color/visual design only
- [ ] Designer won't need to modify layout
- [ ] Designer won't need to touch JavaScript
- [ ] Deliverable is updated CSS color properties
- [ ] Design decision aligns with Apple-inspired aesthetic

### For Developer Tasks
- [ ] Task focuses on motion/interaction
- [ ] Developer won't set colors in code
- [ ] Developer won't modify spacing/layout
- [ ] Deliverable is new JavaScript functionality
- [ ] Animation will use CSS classes, not inline styles

### For Layout Tasks
- [ ] Task focuses on structure/spacing/responsive
- [ ] Won't involve color decisions
- [ ] Won't involve JavaScript logic
- [ ] Deliverable is updated CSS layout rules
- [ ] Responsive logic is clearly defined

---

## File Locations Quick Reference

```
hans-world.github.io/
├── index.html                          (Structure)
├── styles/
│   ├── style.css                       (COLORS - Designer)
│   └── (future) layout.css             (LAYOUT - Layout person)
├── scripts/
│   └── script.js                       (MOTION - Developer)
├── ARCHITECTURE.md                     (Full specifications)
└── ARCHITECTURE_IMPLEMENTATION_GUIDE.md (Team guide)
```

---

## "Am I In My Lane?" Self-Check

### Designer Self-Check
```
Did I only modify colors? YES / NO
Did I avoid touching layout? YES / NO
Is the file I edited style.css? YES / NO
Did I use CSS variables? YES / NO
```
✓ All YES = You're in your lane

### Developer Self-Check
```
Did I only add JavaScript/motion? YES / NO
Did I avoid hardcoding colors? YES / NO
Did I use CSS classes, not inline styles? YES / NO
Did I update script.js only? YES / NO
```
✓ All YES = You're in your lane

### Layout Person Self-Check
```
Did I only modify spacing/layout? YES / NO
Did I avoid touching colors? YES / NO
Did I avoid JavaScript logic? YES / NO
Did I update layout.css only? YES / NO
```
✓ All YES = You're in your lane

---

## Emergency Handoff: When Handing Off Work

**Designer → Developer:**
```markdown
Color palette finalized in style.css
CSS variables ready for use:
- --color-primary: #0071e3
- --color-secondary: #06b6d4
- [full list]

All text meets WCAG AA contrast.
Safe to use in JavaScript classes.
```

**Developer → QA:**
```markdown
JavaScript features added to script.js
Form validation: complete
Smooth scrolling: working
Animation classes: ready for styling

CSS classes available for color application:
- .highlight
- .active
- .error
```

**QA → Coordinator:**
```markdown
Testing complete across all layers:
- Colors render correctly
- Animations perform smoothly
- Responsive design works
- Accessibility verified

Ready for release.
```

---

## Remember

> **The three layers exist because:**
> - **Colors** change frequently (design iterations)
> - **Layout** is set once, rarely changes
> - **Motion** is added gradually as features develop
>
> Keeping them separate means changes to one don't break the others.

---

## Quick Links

- **Full Architecture Spec:** `ARCHITECTURE.md`
- **Implementation Guide:** `ARCHITECTURE_IMPLEMENTATION_GUIDE.md`
- **This Cheat Sheet:** `THREE_LAYER_CHEAT_SHEET.md`

**Questions? Reference the full `ARCHITECTURE.md`**