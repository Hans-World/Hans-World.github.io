# Hans-World Portfolio - Quick Reference Card

## AGENT CHEAT SHEET

### CONTENT MANAGER - Week 1
**Your Job**: Fill all portfolio sections with actual content

**You Own**:
- About section bio and credentials
- Projects descriptions and links
- Experiences work history
- Contact information
- Accuracy and consistency of all text

**Deliverable**:
- Filled HTML sections (no placeholders)
- All links working and verified
- Professional, consistent tone

**Don't Do**: CSS, JavaScript, design decisions

**Success**: All content complete, accurate, compelling

---

### UI/UX DESIGNER - Week 1-2
**Your Job**: Style website and make it responsive

**You Own**:
- All CSS styling
- Responsive design (320px, 768px, 1024px, 1440px+)
- Typography, spacing, colors
- Animations and accessibility
- Hover states and visual feedback

**Deliverable**:
- Complete style.css with all responsive styles
- Accessible design (WCAG AA minimum)
- Works at all breakpoints

**Don't Do**: HTML content, JavaScript, testing

**Success**: Professional design across all devices and browsers

---

### FRONTEND DEVELOPER - Week 2-2.5
**Your Job**: Add JavaScript interactivity

**You Own**:
- JavaScript functionality
- Navigation active state tracking
- Smooth scrolling
- Form handling (if needed)
- Performance optimization
- Cross-browser fixes

**Deliverable**:
- Complete script.js with all features
- Smooth, responsive interactions
- No console errors
- Works in all major browsers

**Don't Do**: Change content, modify CSS structure, test for QA

**Success**: All features work smoothly, no JavaScript errors

---

### QA AGENT - Week 2.5-3
**Your Job**: Test everything across all devices and browsers

**You Own**:
- Functional testing (all features work)
- Responsive testing (mobile, tablet, desktop)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Accessibility audit (WCAG compliance)
- Link validation
- Performance testing

**Deliverable**:
- Bug report with reproduction steps
- Test results documentation
- QA sign-off (or list of issues to fix)

**Don't Do**: Fix bugs, write code, make design changes

**Success**: All tests pass, no broken links, accessible, fast loading

---

## WORKFLOW AT A GLANCE

```
Week 1: Content Manager (fill content) + Designer (style)
Week 2: Developer (JavaScript) + Designer (responsive polish)
Week 2.5: QA (test everything)
Week 3: Launch
```

---

## BLOCKER ESCALATION

**When You're Blocked:**
1. Post: "BLOCKER: [What blocks you and why]"
2. Suggest: "Proposed fix: [Option A or B]"
3. Tag: "@Coordinator" or the agent you need
4. Wait: Expect response within 24 hours

**Example**: "BLOCKER: I can't style Projects cards because Content Manager hasn't filled them yet. Proposed fix: Either provide placeholder text or let me build the card styles now and add content later. @Content Manager"

---

## FILES YOU CARE ABOUT

| File | Owner | What |
|------|-------|------|
| index.html | Content Manager | Fill sections with content |
| styles/style.css | Designer | All styling and responsive |
| scripts/script.js | Developer | All interactivity |
| images/ | Content Manager | Store images |

---

## SUCCESS CHECKLIST

### Content Manager
- [ ] About section complete (bio + 3 cards)
- [ ] Projects section complete (at least 2-3 projects)
- [ ] Experiences section complete (at least 2-3 experiences)
- [ ] Contacts section complete (all links valid)
- [ ] All text is accurate and professional
- [ ] No placeholder text remains
- [ ] Consistent voice and tone throughout

### Designer
- [ ] Header/hero styled and responsive
- [ ] About section styled and responsive
- [ ] Projects section styled (cards layout)
- [ ] Experiences section styled (cards or timeline)
- [ ] All content readable at all breakpoints
- [ ] Focus states visible for keyboard navigation
- [ ] Color contrast meets WCAG AA
- [ ] Animations are smooth and purposeful
- [ ] Mobile (320px), tablet (768px), desktop (1024px+) look good

### Developer
- [ ] Navigation links scroll to correct sections
- [ ] Active nav indicator shows current section
- [ ] Smooth scroll behavior works
- [ ] Forms (if any) validate and submit
- [ ] No console errors or warnings
- [ ] Code works in Chrome, Firefox, Safari, Edge
- [ ] Page load time is under 3 seconds
- [ ] Mobile and desktop performance are good

### QA
- [ ] All links tested and working
- [ ] Website responsive on: iPhone (375px), iPad (768px), Desktop (1440px)
- [ ] Browser tested: Chrome, Firefox, Safari, Edge
- [ ] Keyboard navigation works throughout
- [ ] All images have alt text
- [ ] Color contrast is sufficient (WCAG AA)
- [ ] No console errors
- [ ] Page loads fast (< 3 seconds)
- [ ] All features work as intended

---

## KEY RULES

1. **Stay in your lane** - Don't modify another agent's work without asking
2. **Communicate blockers** - Flag problems immediately, don't wait
3. **Document decisions** - Leave comments explaining your choices
4. **Deliver what you promised** - Exact scope, no surprises
5. **Hand off cleanly** - Signal "ready for next phase" explicitly
6. **Test your own work** - Catch obvious issues before handing off
7. **Celebrate completion** - Phase finishes help the next agent start

---

## QUICK CONTACT

**Need coordinator decision?** Post blocker clearly with proposed options
**Have a question?** Check PROJECT_COORDINATION_GUIDE.md (full version)
**Found a bug after handoff?** Report to QA, don't fix it yourself

---

Print this page or bookmark it for quick reference during development.