# Hans-World Portfolio - Project Coordination Guide
**A Reference Manual for Agent Collaboration**

---

## SECTION 1: PROJECT OVERVIEW

### What We're Building
A modern, responsive personal portfolio website for Han Yu Su, Data Scientist/ML Engineer pursuing a Master's degree at Johns Hopkins University.

**Key Pages:**
- **Home**: Hero section with name and title
- **About**: Bio, photo, and credential cards
- **Experiences**: Work history and roles
- **Projects**: Portfolio pieces with descriptions and links
- **Contacts**: Contact information and social links
- **Navigation**: Fixed bottom nav (mobile), top nav (tablet+)

### Timeline
| Phase | Owner | Duration | Weeks |
|-------|-------|----------|-------|
| Content Assembly | Content Manager | 1 week | Week 1 |
| Design & Styling | UI/UX Designer | 1 week | Week 1-2 |
| Development | Frontend Developer | 1 week | Week 2-2.5 |
| QA & Testing | QA Agent | .5 week | Week 2.5-3 |
| **Total** | All | **3 weeks** | |

### Success Criteria
- **Content**: All sections filled with accurate, compelling information
- **Design**: Professional, cohesive visual design across all breakpoints
- **Functionality**: Smooth navigation, no broken links, responsive at all sizes
- **Quality**: Zero accessibility issues, passes WCAG standards, cross-browser compatible

### Tech Stack
- HTML5 (structure)
- CSS3 (vanilla, no frameworks)
- Vanilla JavaScript (planned for interactivity)
- GitHub Pages (hosting)

---

## SECTION 2: THE FOUR AGENTS & THEIR JOBS

### 1. CONTENT MANAGER
**Primary Focus:** Information architecture and portfolio content

**What They Own:**
- Writing and organizing portfolio content
- Bio and about section copy
- Project descriptions, skills, and links
- Experience/work history details
- Contact information organization
- Content structure and hierarchy

**What They Create:**
- Filled HTML sections with meaningful content
- Data for experience cards, project cards, credential cards
- Social media links and contact details
- Metadata and SEO information

**When They Work:**
- **Starts**: Week 1 (immediately, in parallel with design)
- **Blocks**: Frontend developer (can't build without content)
- **Dependencies**: None (can work independently)

**Success = What?**
- All portfolio sections contain complete, accurate information
- Content reads professionally and compellingly
- All sections follow consistent voice and style
- Links are accurate and working
- No placeholder text remains

**What They Should NOT Do:**
- Modify CSS or styling
- Write JavaScript code
- Make design decisions (layout, colors, fonts)
- Test the website

---

### 2. UI/UX DESIGNER
**Primary Focus:** Visual design, styling, and responsive layout

**What They Own:**
- CSS styling and design system
- Layout and spacing
- Color schemes and typography
- Responsive design (mobile, tablet, desktop)
- Accessibility compliance (WCAG)
- Visual hierarchy and emphasis
- Animations and transitions

**What They Create:**
- Completed CSS file with all styles
- Responsive breakpoint implementation (mobile-first)
- Design tokens and custom properties
- Hover states and visual feedback
- Accessibility features (focus states, contrast, etc.)

**When They Work:**
- **Starts**: Week 1 (immediately, in parallel with content)
- **Blocks**: QA agent (need styled site for testing)
- **Dependencies**: HTML structure (already exists)

**Success = What?**
- All sections styled professionally and cohesively
- Responsive design works at all breakpoints (320px, 768px, 1024px, 1440px+)
- All accessibility standards met (WCAG AA minimum)
- Hover states provide visual feedback
- Typography hierarchy is clear
- Navigation is intuitive and accessible
- Animations are smooth and don't distract

**What They Should NOT Do:**
- Write HTML content or structure
- Write JavaScript code
- Make content decisions
- Test functionality (beyond visual testing)

---

### 3. FRONTEND DEVELOPER
**Primary Focus:** Code implementation and interactivity

**What They Own:**
- JavaScript functionality
- DOM manipulation
- Smooth scrolling behavior
- Navigation active state tracking
- Form functionality (if needed)
- Performance optimization
- Cross-browser compatibility

**What They Create:**
- JavaScript file with all interactive features
- Smooth page transitions
- Active navigation indicators
- Form validation (if applicable)
- Performance optimizations
- Browser compatibility fixes

**When They Work:**
- **Starts**: Week 2 (after content and design mostly complete)
- **Blocks**: QA agent (need working features for testing)
- **Dependencies**: Content + styling must be mostly done

**Success = What?**
- Navigation links work smoothly and highlight current section
- Smooth scroll behavior functions across browsers
- No JavaScript errors in console
- Interactivity is smooth and responsive
- Performance is optimized (fast load, smooth animations)
- Works in all major browsers (Chrome, Firefox, Safari, Edge)

**What They Should NOT Do:**
- Modify content or HTML structure without discussing with Content Manager
- Change CSS styling without discussing with Designer
- Make design decisions
- Test QA (that's QA's job)

---

### 4. QA/TESTING AGENT
**Primary Focus:** Quality assurance and comprehensive testing

**What They Own:**
- Functional testing (all features work)
- Responsive design testing (all screen sizes)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Accessibility testing (WCAG compliance)
- Link validation
- Performance testing
- User experience testing

**What They Create:**
- Bug reports with reproduction steps
- Test results documentation
- Accessibility audit report
- Performance metrics
- Device compatibility matrix
- Recommendations for improvements

**When They Work:**
- **Starts**: Week 2.5 (after all development complete)
- **Blocks**: Launch and deployment
- **Dependencies**: Content, design, and development all complete

**Success = What?**
- All links work (no 404s)
- Website renders correctly on mobile, tablet, desktop
- Works in all major browsers
- Accessibility: all images have alt text, colors have proper contrast, keyboard navigation works
- Performance: page loads in under 3 seconds, animations are smooth
- No console errors or warnings
- User can complete all intended actions

**What They Should NOT Do:**
- Fix bugs themselves (report them instead)
- Make design or content changes
- Write code
- Build features

---

## SECTION 3: THE WORKFLOW AT A GLANCE

### Phase 1: Content Assembly (Week 1)
**Owner**: Content Manager
- Fill all portfolio sections with actual content
- Write compelling bio and project descriptions
- Organize experience and skill information
- Add contact details and social links
- Review for consistency and accuracy
- **Deliverable**: HTML with all content filled in

### Phase 2: Design & Styling (Week 1-2)
**Owner**: UI/UX Designer
- Review content and HTML structure
- Implement responsive CSS for all sections
- Style typography, spacing, colors
- Add animations and transitions
- Test responsive design across breakpoints
- Ensure accessibility compliance
- **Deliverable**: Complete style.css with all responsive designs

### Phase 3: Development (Week 2-2.5)
**Owner**: Frontend Developer
- Implement JavaScript interactivity
- Add navigation active state tracking
- Smooth scroll behavior
- Form handling (if applicable)
- Performance optimization
- Cross-browser compatibility fixes
- **Deliverable**: Complete script.js with all features working

### Phase 4: QA & Testing (Week 2.5-3)
**Owner**: QA Agent
- Test all features across devices and browsers
- Validate accessibility compliance
- Check all links work
- Test performance and load times
- Document any issues found
- **Deliverable**: Bug reports and QA sign-off

---

## SECTION 4: WHO DOES WHAT - QUICK REFERENCE

| Task | Owner | Receives | Delivers | Days |
|------|-------|----------|----------|------|
| Write About section content | Content Manager | HTML template | Filled bio, credentials | 1 |
| Write Projects section content | Content Manager | HTML template | Filled project descriptions | 1 |
| Write Experiences section content | Content Manager | HTML template | Filled work history | 1 |
| Organize contact information | Content Manager | Project data | Contact details in HTML | 1 |
| Style header/hero section | Designer | Content + HTML | Styled header CSS | 2 |
| Style About section | Designer | Content + HTML | About section CSS | 2 |
| Style Projects section | Designer | Content + HTML | Projects CSS + cards | 2 |
| Style Experiences section | Designer | Content + HTML | Experiences CSS + cards | 2 |
| Responsive design implementation | Designer | All sections | Media queries + mobile-first CSS | 3 |
| Navigation styling | Designer | Content + HTML | Nav CSS at all breakpoints | 1 |
| JavaScript navigation tracking | Developer | Styled nav + content | Active state JS | 1 |
| Smooth scroll functionality | Developer | HTML structure | Scroll JS | 0.5 |
| Form handling (if needed) | Developer | Form HTML | Form validation JS | 0.5 |
| Performance optimization | Developer | Complete code | Optimized CSS/JS | 1 |
| Responsive design testing | QA | Styled website | Test report + issues | 1 |
| Cross-browser testing | QA | Complete website | Compatibility matrix | 1 |
| Accessibility audit | QA | Complete website | WCAG report + issues | 1 |
| Link validation | QA | Complete website | Link status report | 0.5 |

---

## SECTION 5: AGENT COORDINATION RULES

### Golden Rules
1. **Respect Expertise Boundaries**: Content Manager handles content, Designer handles styling, Developer handles JavaScript. Don't cross into someone else's lane.
2. **Communicate Blockers Immediately**: If you need something from another agent, flag it immediately. Don't wait for a weekly check-in.
3. **No Surprise Rewrites**: Before changing another agent's work, discuss it first. Coordination trumps independence.
4. **Document Your Decisions**: Leave comments explaining why you made a choice, especially if it affects other agents.
5. **Deliver What You Promise**: When you commit to a deliverable, produce exactly what was agreed. No scope creep.

### Communication Protocol
**When to Loop In Another Agent:**
- Designer: "I need more specific copy for this project card to know how much space to allocate"
- Developer: "The navigation structure doesn't work with my JavaScript approach, can we discuss?"
- Content Manager: "These credentials are redundant, should I consolidate them?"
- QA: "I found 3 broken links - who should fix these?"

**How to Escalate Blockers:**
1. Post the blocker clearly: "BLOCKER: [What is blocked and why]"
2. Suggest a solution: "Proposed fix: [Option A or B]"
3. Tag the owner: "@Content Manager" or whoever needs to decide
4. Time limit: Expect resolution within 24 hours

**Decision-Making:**
- Coordinator makes final calls on approach and priorities
- Agents should defer to coordinator on conflicts
- Coordinator explains "why" behind decisions so agents understand context

### What Each Agent Should Check Before Starting
**Content Manager:**
- Have I verified all links and references are accurate?
- Is the tone and voice consistent across all sections?
- Are there any placeholder sections I've left incomplete?

**Designer:**
- Are all HTML sections properly labeled with classes/IDs I can style?
- Do the breakpoints match the project's responsive requirements?
- Have I accounted for all accessibility needs (contrast, focus states)?

**Developer:**
- Is the HTML structure stable (will the selectors still work)?
- Are there CSS pseudo-classes I'm competing with in JavaScript?
- Have I tested in the browsers the Designer specified?

**QA Agent:**
- Are all three phases (content, design, dev) complete before I start testing?
- Do I have a clear list of what success looks like?
- Have I tested on the devices and browsers we care about?

---

## SECTION 6: WORKFLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│                   PROJECT START (Week 1)                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
        ┌─────────────────┴─────────────────┐
        ↓                                   ↓
  Content Manager              UI/UX Designer
  Write Content                Style Website
  (Fill HTML sections)         (CSS + Responsive)
  Duration: 1 week             Duration: 1 week
  Deliverable:                 Deliverable:
  ✓ Filled HTML                ✓ Complete CSS
  ✓ All sections               ✓ Responsive design
  ✓ Accurate info              ✓ Accessibility
        ↓                                   ↓
        └─────────────────┬─────────────────┘
                          ↓
                   Frontend Developer
                   Add Interactivity
                   (JavaScript + Features)
                   Duration: 1 week
                   Deliverable:
                   ✓ script.js complete
                   ✓ All features working
                   ✓ Cross-browser compatible
                          ↓
                      QA Agent
                      Test Everything
                      (All devices & browsers)
                      Duration: 0.5 weeks
                      Deliverable:
                      ✓ Test report
                      ✓ Bug fixes verified
                      ✓ Accessibility passed
                          ↓
        ┌─────────────────────────────────┐
        │  LAUNCH (GitHub Pages Live)     │
        │  Portfolio Website Goes Public  │
        └─────────────────────────────────┘
```

---

## SECTION 7: KEY PRINCIPLES FOR SUCCESS

### 1. **Content First, Then Design**
Content informs design. Designer needs to know what text, images, and cards exist before styling them. Content Manager goes first.

### 2. **Design Enables Development**
Developer needs a stable, styled HTML/CSS foundation to add JavaScript. Rushing development before design is done causes rework.

### 3. **Test Everything Before Launch**
QA is the final gate. No feature is done until QA confirms it works across all devices and browsers. QA tests, doesn't fix.

### 4. **Handoffs Are Sacred**
When one agent finishes, they hand off to the next with clear "ready for next phase" signal. No ad-hoc work that skips phases.

### 5. **One Agent, One Lane**
Coordinator decides scope. Agents stay focused on their specialty. Asking someone to do outside their lane slows everyone down.

### 6. **Communicate Async First**
Document decisions in code comments, commit messages, and GitHub issues. Don't rely on Slack conversations as the source of truth.

### 7. **Celebrate Milestones**
When a phase completes, acknowledge it. Phase completions unlock the next agent to start work. Momentum matters.

---

## SECTION 8: CURRENT PROJECT STATUS

### Completed
- ✓ HTML structure (all sections defined)
- ✓ Image assets (profile photo added)
- ✓ CSS design system (tokens, variables, base styles)
- ✓ Responsive framework (media queries defined, breakpoints set)
- ✓ Accessibility setup (focus states, reduced motion, contrast)
- ✓ Navigation styling (fixed bottom on mobile, top on tablet+)
- ✓ Header/hero section design
- ✓ About section styling

### In Progress
- ⚠️ Content filling (About section 50% complete, other sections empty)

### Blocked / Not Started
- ❌ Projects section content
- ❌ Experiences section content
- ❌ Contact section content
- ❌ JavaScript interactivity (script.js is empty)
- ❌ QA testing

### Dependencies
- **Designer waiting on**: Content Manager to finish all content
- **Developer waiting on**: Designer to finalize CSS, Content Manager to finalize content
- **QA waiting on**: Developer to complete all JavaScript

---

## SECTION 9: HOW TO USE THIS GUIDE

### For Coordinators
Use this to:
- Understand who owns what and when they can start
- Identify blockers and who needs to resolve them
- Plan handoffs between phases
- Make decisions when agents disagree

### For Content Manager
Use this to:
- Know you start Week 1 in parallel with Designer
- Understand what sections you need to fill
- See what Designer and Developer will do with your content
- Check the success criteria before declaring content "done"

### For Designer
Use this to:
- Know you start Week 1 in parallel with Content Manager
- See what content will fill your layouts
- Understand your responsive breakpoints and accessibility requirements
- Know what Developer will build with your CSS

### For Developer
Use this to:
- Know you start Week 2 after content and design are mostly complete
- See what features you need to implement
- Understand what QA will test
- Check the success criteria before declaring code "done"

### For QA
Use this to:
- Know you start Week 2.5 after everything else is complete
- Understand the scope of your testing (all devices, all browsers)
- See what success looks like for each section
- Know your job is to find issues, not fix them

---

## QUICK LINKS & RESOURCES

| Resource | Location | Owner |
|----------|----------|-------|
| Main Website | /index.html | All |
| Styles | /styles/style.css | Designer |
| Scripts | /scripts/script.js | Developer |
| Images | /images/ | Content Manager |
| Design System | Lines 1-71 in style.css | Designer |

---

**Version**: 1.0
**Created**: January 30, 2026
**Last Updated**: January 30, 2026
**Document Owner**: Project Coordinator