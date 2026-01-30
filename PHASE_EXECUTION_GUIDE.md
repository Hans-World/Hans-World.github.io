# Phase-by-Phase Execution Guide
**Detailed Breakdown of Each Development Phase**

---

## PHASE 1: CONTENT ASSEMBLY
**Timeline**: Week 1 (Start immediately)
**Owner**: Content Manager
**Parallel Work**: Designer can start styling while Content Manager writes content

### What Happens
Content Manager fills all portfolio sections with actual, meaningful content. This phase runs parallel to design work.

### Step-by-Step Breakdown

#### Step 1.1: About Section (Days 1-2)
**Input**:
- index.html with empty About section
- Profile image (ricky.png)

**Tasks**:
- [ ] Write professional bio (2-3 sentences about Han Yu Su)
- [ ] Fill "Degree" card (already has: "MSE in Data Science, Johns Hopkins University")
- [ ] Add "Skills" card (list key ML/data science skills)
- [ ] Add "Focus Areas" card (specializations or interests)
- [ ] Add professional photo to about-image div
- [ ] Verify image displays correctly

**Deliverable**:
```html
<!-- Example of filled About section -->
<div class="about-content">
  <p>I'm a Data Scientist and Machine Learning Engineer pursuing a Master's in Data Science at Johns Hopkins University. I specialize in building end-to-end ML pipelines, statistical analysis, and data visualization to solve complex business problems.</p>
</div>
<div class="about-cards">
  <article class="about-card">
    <h5>Degree</h5>
    <small>MSE in Data Science<br><i>Johns Hopkins University</i></small>
  </article>
  <article class="about-card">
    <h5>Skills</h5>
    <small>Python, R, SQL, TensorFlow, PyTorch, Scikit-learn, AWS</small>
  </article>
  <article class="about-card">
    <h5>Focus</h5>
    <small>Deep Learning, NLP, Computer Vision, Cloud ML</small>
  </article>
</div>
```

**Success**: About section reads professionally, credentials are accurate, image displays

---

#### Step 1.2: Projects Section (Days 2-3)
**Input**:
- index.html with empty Projects section
- Project URLs/descriptions

**Tasks**:
- [ ] Identify 2-3 key projects (portfolio pieces, GitHub projects, academic work)
- [ ] For each project, write:
  - Project title
  - Brief description (2-3 sentences)
  - Technologies used
  - Link to repository or live demo
  - (Optional) Results/metrics

**Deliverable**:
```html
<!-- Example filled Projects section -->
<section id="projects">
  <h6>Featured Work</h6>
  <h2>Projects</h2>
  <div class="projects-container">
    <article class="project-card">
      <h4>Sentiment Analysis Pipeline</h4>
      <p>Built an end-to-end NLP pipeline using BERT transformers to analyze customer feedback with 92% accuracy. Deployed as REST API on AWS.</p>
      <small>Python, TensorFlow, BERT, AWS</small>
      <a href="#">View Project →</a>
    </article>
    <!-- More project cards... -->
  </div>
</section>
```

**Success**: All projects have titles, descriptions, and links; descriptions are compelling and accurate

---

#### Step 1.3: Experiences Section (Days 3-4)
**Input**:
- index.html with empty Experiences section
- Work history details

**Tasks**:
- [ ] List work experience (jobs, internships, projects)
- [ ] For each experience, write:
  - Company name
  - Job title
  - Duration (start - end or start - present)
  - 2-3 bullet points describing responsibilities/achievements
- [ ] Order by most recent first

**Deliverable**:
```html
<!-- Example filled Experiences section -->
<section id="experiences">
  <h6>Career Path</h6>
  <h2>Experiences</h2>
  <div class="experiences-container">
    <article class="experience-card">
      <h4>Machine Learning Engineer</h4>
      <p class="company">TechCorp Inc. | Jan 2024 - Present</p>
      <ul>
        <li>Developed ML models for customer churn prediction</li>
        <li>Led data pipeline optimization reducing latency by 40%</li>
        <li>Mentored 2 junior engineers on ML best practices</li>
      </ul>
    </article>
    <!-- More experience cards... -->
  </div>
</section>
```

**Success**: All experiences listed chronologically, achievements are specific and measurable

---

#### Step 1.4: Contacts Section (Day 4-5)
**Input**:
- index.html with empty Contacts section
- Social/contact information

**Tasks**:
- [ ] Collect contact information:
  - Email address
  - LinkedIn profile
  - GitHub profile
  - Portfolio/personal website
  - Twitter/other social media (optional)
- [ ] Format with working links
- [ ] Test all links work

**Deliverable**:
```html
<!-- Example filled Contacts section -->
<section id="contacts">
  <h6>Get in Touch</h6>
  <h2>Contact Me</h2>
  <div class="contact-links">
    <a href="mailto:han.yu@example.com">Email</a>
    <a href="https://linkedin.com/in/hanyusu">LinkedIn</a>
    <a href="https://github.com/hanyusu">GitHub</a>
    <a href="https://twitter.com/hanyusu">Twitter</a>
  </div>
</section>
```

**Success**: All contact links are present and working

---

#### Step 1.5: Final Review (Day 5)
**Tasks**:
- [ ] Read all content aloud - does it sound professional?
- [ ] Check for typos and grammar errors
- [ ] Verify all links work
- [ ] Ensure tone is consistent across sections
- [ ] Double-check accuracy of dates, titles, and skills
- [ ] Remove any placeholder or incomplete text
- [ ] Add alt text to all images for accessibility

**Deliverable**:
- Content is 100% complete
- No placeholder text remains
- All links verified
- All information accurate

---

### What NOT to Do in Phase 1
- Don't worry about styling (Designer will handle)
- Don't write JavaScript
- Don't modify CSS
- Don't make decisions about layout or visual hierarchy
- Don't be too brief - write compelling content that sells Han Yu Su's expertise

### Dependencies
- **Waits on**: Nothing (can start immediately)
- **Blocks**: Designer (needs content to know what to style), Developer (needs content for context)

### Success Gate
- [ ] All sections (About, Projects, Experiences, Contacts) have complete, accurate content
- [ ] All external links work
- [ ] No placeholder text remains
- [ ] Content reads professionally

**When Complete**: Post "Content Phase COMPLETE" - Designer can now finalize styling, Developer can start planning JavaScript

---

## PHASE 2: DESIGN & STYLING
**Timeline**: Week 1-2 (Starts Day 1, continues through Week 2)
**Owner**: UI/UX Designer
**Parallel Work**: Starts immediately while Content Manager writes content

### What Happens
Designer implements comprehensive CSS styling for all sections and ensures responsive design works at all breakpoints. Most of the CSS framework is already in place (design tokens, base styles, etc.) - Designer completes remaining sections and ensures responsive implementation.

### Current Status
- ✓ Design system complete (colors, typography, spacing)
- ✓ Base styles defined
- ✓ Responsive framework set up (media queries)
- ✓ Header/hero styled
- ✓ About section styled
- ✓ Navigation styled
- ⚠️ Projects section styling incomplete
- ⚠️ Experiences section styling incomplete
- ⚠️ Contacts section styling incomplete
- ⚠️ Responsive design polish needed

### Step-by-Step Breakdown

#### Step 2.1: Projects Section Design (Days 1-2)
**Input**:
- Content from Content Manager (project titles, descriptions, links)
- Design tokens and existing CSS framework

**Tasks**:
- [ ] Design project card component (container, typography, spacing)
- [ ] Implement responsive grid (1 column mobile, 2-3 columns desktop)
- [ ] Add hover effects (subtle scale, shadow, accent color)
- [ ] Ensure text readability at all breakpoints
- [ ] Add smooth transitions for interactions

**Deliverable**:
```css
/* Example: Projects section styling */
.projects-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  max-width: 900px;
  margin: 0 auto;
}

.project-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  padding: var(--space-lg);
  transition: all var(--transition-base);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-secondary);
}

/* Responsive */
@media (min-width: 768px) {
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Success**: Project cards look professional, responsive at all breakpoints, hover effects are smooth

---

#### Step 2.2: Experiences Section Design (Days 2-3)
**Input**:
- Content from Content Manager (company, title, dates, achievements)
- Design tokens

**Tasks**:
- [ ] Design experience card or timeline component
- [ ] Implement responsive layout (vertical timeline on mobile, side-by-side on desktop)
- [ ] Add hover effects and visual hierarchy
- [ ] Ensure dates are prominent and readable
- [ ] Add accent colors for visual interest

**Deliverable**: Experience cards or timeline styled and responsive

**Success**: Experiences display clearly, chronological order is obvious, responsive at all breakpoints

---

#### Step 2.3: Contacts Section Design (Days 3-4)
**Input**:
- Contact links from Content Manager
- Design tokens

**Tasks**:
- [ ] Design contact section layout (centered or grid)
- [ ] Style contact links with visual hierarchy
- [ ] Add hover effects (color change, icon emphasis)
- [ ] Ensure touch-friendly on mobile (larger tap targets)
- [ ] Optional: Add icons for social links

**Deliverable**: Contact links styled and responsive

**Success**: All links are clickable, hover states are clear, mobile-friendly

---

#### Step 2.4: Responsive Polish (Days 4-5)
**Input**:
- All sections now styled
- Device sizes to test: 320px, 768px, 1024px, 1440px

**Tasks**:
- [ ] Test mobile layout (320px) - no horizontal scroll
- [ ] Test tablet layout (768px) - appropriate scaling
- [ ] Test desktop layout (1024px) - content centered properly
- [ ] Test large desktop (1440px) - doesn't feel cramped
- [ ] Refine spacing and padding at breakpoints
- [ ] Adjust font sizes for readability at all sizes
- [ ] Test images scale properly
- [ ] Verify navigation works at all sizes
- [ ] Check focus states visible at all sizes
- [ ] Test animations don't stutter

**Tasks**:
- [ ] Verify all images have alt text
- [ ] Check color contrast ratios (WCAG AA minimum)
- [ ] Test keyboard navigation throughout
- [ ] Verify focus indicators are visible
- [ ] Test with screen reader (NVDA or JAWS)

**Deliverable**:
- Website looks professional at 320px, 768px, 1024px, 1440px+
- All accessibility standards met
- Smooth, jank-free animations

**Success**: Website is fully responsive, accessible, and pixel-perfect

---

#### Step 2.5: Final CSS Review (Day 5)
**Tasks**:
- [ ] Remove unused CSS
- [ ] Verify all color variables are used
- [ ] Check for duplicate styles
- [ ] Ensure media queries are logical
- [ ] Add comments for complex sections
- [ ] Test on actual devices (if possible)
- [ ] Final visual inspection

**Deliverable**:
- Complete, optimized style.css
- No unused styles
- Well-documented and organized

---

### What NOT to Do in Phase 2
- Don't add JavaScript - that's Developer's job
- Don't modify HTML structure - if structure doesn't work, discuss with Coordinator
- Don't make content decisions - defer to Content Manager
- Don't skip responsive testing - test at all breakpoints

### Dependencies
- **Waits on**: HTML structure exists (it does), Content fills in (Content Manager)
- **Blocks**: Developer (needs stable CSS to add JavaScript without conflicts)

### Success Gate
- [ ] All sections styled professionally
- [ ] Responsive at all breakpoints (320px, 768px, 1024px, 1440px+)
- [ ] Accessible (WCAG AA minimum)
- [ ] All CSS organized and optimized
- [ ] No broken links or missing styles

**When Complete**: Post "Design Phase COMPLETE" - Developer can start adding JavaScript

---

## PHASE 3: DEVELOPMENT
**Timeline**: Week 2-2.5 (Starts after content and design mostly complete)
**Owner**: Frontend Developer

### What Happens
Developer adds JavaScript interactivity to make the website function smoothly. This includes navigation tracking, smooth scrolling, form handling, and performance optimization.

### What JavaScript Will Do
1. Track which section is currently in view
2. Update navigation active indicator
3. Smooth scroll to sections when nav links clicked
4. Handle form submission (if contact form exists)
5. Optimize performance
6. Ensure cross-browser compatibility

### Step-by-Step Breakdown

#### Step 3.1: Navigation Active State (Days 1-2)
**Input**:
- HTML structure with nav links and sections
- Styled CSS from Designer

**Tasks**:
- [ ] Detect current scroll position
- [ ] Identify which section is in view
- [ ] Update active nav indicator to match
- [ ] Smooth the transitions

**Deliverable**:
```javascript
// Example: Track active section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 250) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});
```

**Success**: Navigation indicator updates as you scroll, shows which section is current

---

#### Step 3.2: Smooth Scroll Navigation (Day 2-3)
**Input**:
- Navigation links with href="#section-id"
- CSS already has scroll-behavior: smooth

**Tasks**:
- [ ] Implement smooth scroll on nav link clicks
- [ ] Ensure scroll position accounts for fixed nav
- [ ] Test across browsers

**Deliverable**: Clicking nav links scrolls smoothly to sections

**Success**: Clicking nav links scrolls smoothly, sections don't hide behind fixed nav

---

#### Step 3.3: Form Handling (Days 3-4) - If Contact Form Exists
**Input**:
- Contact form HTML

**Tasks**:
- [ ] Validate form inputs
- [ ] Handle form submission
- [ ] Show success/error messages
- [ ] Prevent default submit if needed

**Deliverable**: Contact form validates and submits (or shows confirmation)

**Success**: Form works, validation provides feedback

---

#### Step 3.4: Performance Optimization (Day 4)
**Input**:
- Complete website with content, CSS, and JavaScript

**Tasks**:
- [ ] Minify JavaScript
- [ ] Remove unused JavaScript
- [ ] Lazy load images if needed
- [ ] Optimize bundle size
- [ ] Test page load time

**Deliverable**: Optimized, fast-loading website

**Success**: Page loads in under 3 seconds, no performance issues

---

#### Step 3.5: Cross-Browser Testing (Day 4-5)
**Input**:
- Complete JavaScript code
- Styled website

**Tasks**:
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Fix any browser-specific issues

**Deliverable**: Code works in all major browsers

**Success**: No JavaScript errors, consistent behavior across browsers

---

#### Step 3.6: Code Review (Day 5)
**Tasks**:
- [ ] Remove console.logs and debug code
- [ ] Add comments for complex functions
- [ ] Follow consistent code style
- [ ] Check for performance issues
- [ ] Verify no unused code

**Deliverable**: Clean, well-documented script.js

**Success**: Code is production-ready

---

### What NOT to Do in Phase 3
- Don't modify CSS styles - if CSS structure doesn't work, discuss with Designer
- Don't change HTML structure - if structure doesn't work, discuss with Coordinator
- Don't make content changes
- Don't start testing - let QA test

### Dependencies
- **Waits on**: Content complete, Design complete
- **Blocks**: QA testing (need working features)

### Success Gate
- [ ] All JavaScript features working
- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Page loads fast (< 3 seconds)
- [ ] Code is clean and documented

**When Complete**: Post "Development Phase COMPLETE" - QA can start testing

---

## PHASE 4: QA & TESTING
**Timeline**: Week 2.5-3 (Starts after development complete)
**Owner**: QA Agent

### What Happens
QA thoroughly tests the website across devices, browsers, and scenarios. Reports any issues found. Does NOT fix issues (that's for other agents to handle).

### Test Scenarios

#### Test 4.1: Functional Testing
- [ ] Navigation links all scroll to correct sections
- [ ] Active nav indicator shows current section
- [ ] All external links work (contact links, GitHub, LinkedIn, etc.)
- [ ] Forms (if any) submit successfully
- [ ] Images display correctly
- [ ] No 404 errors

#### Test 4.2: Responsive Design Testing
**Mobile (375px - iPhone SE)**
- [ ] Layout fits screen without horizontal scroll
- [ ] Navigation is accessible on mobile
- [ ] Text is readable (no tiny fonts)
- [ ] Images scale properly
- [ ] Buttons/links are easy to tap

**Tablet (768px - iPad)**
- [ ] Layout adapts appropriately
- [ ] Navigation appears correctly
- [ ] Content is well-organized
- [ ] Spacing is adequate

**Desktop (1024px - Laptop)**
- [ ] Full layout displays
- [ ] Navigation appears at top
- [ ] Content is centered and readable
- [ ] Hover effects work

**Large Desktop (1440px+)**
- [ ] Layout doesn't feel cramped
- [ ] Max-width constraint works
- [ ] All content remains readable

#### Test 4.3: Cross-Browser Testing
**Chrome (latest)**
- [ ] All features work
- [ ] No console errors
- [ ] Performance is good

**Firefox (latest)**
- [ ] All features work
- [ ] No console errors
- [ ] Styling looks consistent

**Safari (latest)**
- [ ] All features work
- [ ] No console errors
- [ ] CSS prefixes work (if needed)

**Edge (latest)**
- [ ] All features work
- [ ] No console errors
- [ ] Styling consistent

#### Test 4.4: Accessibility Testing
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators are visible
- [ ] Can navigate and interact without mouse
- [ ] Links are clearly understandable
- [ ] Headings follow proper hierarchy (h1 > h2 > h3)

#### Test 4.5: Performance Testing
- [ ] Page loads in under 3 seconds (from cold cache)
- [ ] Animations are smooth (60fps)
- [ ] No jank or stuttering
- [ ] Scrolling is smooth

#### Test 4.6: Link Validation
- [ ] Email link works (mailto:)
- [ ] LinkedIn link goes to correct profile
- [ ] GitHub link goes to correct profile
- [ ] All external links have correct URLs
- [ ] Social media links work

### Reporting Issues
**Report Format**:
```
ISSUE: [What's broken]
BROWSER: [Where it happens]
DEVICE: [Mobile/Tablet/Desktop size]
STEPS TO REPRODUCE:
1. [Step 1]
2. [Step 2]
3. [What goes wrong]
EXPECTED: [What should happen]
ACTUAL: [What actually happens]
SCREENSHOT: [If visual issue]
```

### Success Gate
- [ ] All functional tests pass
- [ ] Responsive design works at all breakpoints
- [ ] Works in all major browsers
- [ ] Accessibility passes WCAG AA
- [ ] All links work
- [ ] Performance is acceptable

**When Complete**: Post "QA Phase COMPLETE - [X issues found]" or "QA Phase COMPLETE - Ready for launch"

---

## HANDOFF PROTOCOL

### When Completing Your Phase

1. **Run Final Tests**
   - Run through checklist above
   - Fix obvious issues
   - Don't hand off known problems

2. **Document Your Work**
   - Add comments explaining complex sections
   - List what you completed
   - Note any assumptions you made

3. **Post Completion Status**
   - Post in shared space: "PHASE [X] COMPLETE - Ready for next phase"
   - List: What you delivered, what's working, any known limitations
   - Answer: What the next agent needs to know

4. **Availability**
   - Be available for quick questions
   - Don't disappear immediately after handoff
   - Be ready to explain your decisions

### Example Handoff Message
```
PHASE 1 COMPLETE - Content Ready for Design

Deliverables:
- About section: Bio + 3 cards filled
- Projects section: 3 projects with descriptions and links
- Experiences section: 2 experiences with details
- Contacts section: All links added and verified

All content verified for accuracy and tone is consistent.

Designer: You can now style the Projects and Experiences sections.
Content is stable and won't change (all links verified).

Issues/Notes: None
```

---

## TIMELINE SUMMARY

| Phase | Days | Owner | Deliverable |
|-------|------|-------|-------------|
| Content | 5 | Content Manager | All sections filled with content |
| Design | 10 | Designer | Complete CSS + responsive design |
| Development | 5 | Developer | JavaScript with all features |
| QA | 3 | QA Agent | Test report + sign-off |
| **Total** | **21 days** | All | **Live Website** |

---

## Troubleshooting

### Content Manager
- **Problem**: Not sure what to write for a section
  - **Solution**: Look at other data scientist portfolios on GitHub, LinkedIn
- **Problem**: Not sure if link is working
  - **Solution**: Copy exact URL, test in new tab to verify

### Designer
- **Problem**: CSS not applying to content
  - **Solution**: Check class/ID names match between HTML and CSS
- **Problem**: Responsive design breaks at certain breakpoint
  - **Solution**: Use browser DevTools to test at exact breakpoint, adjust media query

### Developer
- **Problem**: JavaScript not detecting active section
  - **Solution**: Check section IDs match link hrefs, console.log to debug
- **Problem**: Smooth scroll not working in Safari
  - **Solution**: May need polyfill or different approach

### QA
- **Problem**: Can't reproduce issue in one browser
  - **Solution**: Document which browser works/doesn't work
- **Problem**: Performance is slow
  - **Solution**: Use DevTools to profile, identify bottleneck

---

**This guide should be referenced throughout development to ensure smooth workflow and clear expectations.**