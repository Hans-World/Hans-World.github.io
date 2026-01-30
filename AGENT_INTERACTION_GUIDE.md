================================================================================
                    HANS-WORLD PORTFOLIO - AGENT INTERACTION GUIDE
                          Terminal-Optimized Version
================================================================================

SECTION 1: THE FOUR AGENTS
================================================================================

┌─ CONTENT MANAGER ─────────────────────────────────────────────────────────┐
│ Role: Portfolio Content & Information Architecture                        │
│ Produces: Complete portfolio content (bio, projects, experiences)         │
│ Needs: Project briefing, technical requirements from Coordinator         │
│ Files: index.html (content sections), portfolio-data.json                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ UI/UX DESIGNER ──────────────────────────────────────────────────────────┐
│ Role: Visual Design, Styling & Responsive Layout                         │
│ Produces: Complete CSS styling, responsive design, visual specifications  │
│ Needs: Finalized content from Content Manager                            │
│ Files: styles/style.css, design documentation                           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ FRONTEND DEVELOPER ──────────────────────────────────────────────────────┐
│ Role: Code Implementation & Interactivity                                │
│ Produces: Optimized HTML, JavaScript functionality, performance tuning   │
│ Needs: CSS styling from Designer, content structure from Content Mgr     │
│ Files: index.html (structure), scripts/script.js, performance tests      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ QA/TESTING AGENT ────────────────────────────────────────────────────────┐
│ Role: Quality Assurance & Cross-Platform Validation                      │
│ Produces: Test reports, bug documentation, validation sign-off           │
│ Needs: Complete implementation from Frontend Developer                   │
│ Files: Test logs, compatibility reports, accessibility audit             │
└─────────────────────────────────────────────────────────────────────────────┘


SECTION 2: AGENT INTERACTION FLOW
================================================================================

Project Start
    |
    v
┌──────────────────────────────────────────────────────┐
│  PHASE 1: CONTENT CREATION (Weeks 1-2)              │
│  Owner: Content Manager                             │
│  ✓ Write About/Bio section                          │
│  ✓ Document Projects with descriptions              │
│  ✓ Organize Experience/Work history                 │
│  ✓ Set up Contact information                       │
└──────────────────────────────────────────────────────┘
    |
    | [HANDOFF #1: Content Complete]
    | Deliverable: Filled HTML sections + data structure
    |
    v
┌──────────────────────────────────────────────────────┐
│  PHASE 2: VISUAL DESIGN (Weeks 2-3)                 │
│  Owner: UI/UX Designer                              │
│  ✓ Define color scheme & typography                 │
│  ✓ Layout spacing & visual hierarchy                │
│  ✓ Design responsive breakpoints                    │
│  ✓ Implement accessibility (WCAG)                   │
└──────────────────────────────────────────────────────┘
    |
    | [HANDOFF #2: CSS Styling Complete]
    | Deliverable: style.css with all styling rules
    |
    v
┌──────────────────────────────────────────────────────┐
│  PHASE 3: FUNCTIONALITY & OPTIMIZATION (Weeks 3-4)  │
│  Owner: Frontend Developer                          │
│  ✓ Optimize HTML structure                          │
│  ✓ Write JavaScript interactivity                   │
│  ✓ Performance tuning                               │
│  ✓ Cross-browser compatibility fixes                │
└──────────────────────────────────────────────────────┘
    |
    | [HANDOFF #3: Implementation Complete]
    | Deliverable: Fully functional website
    |
    v
┌──────────────────────────────────────────────────────┐
│  PHASE 4: VALIDATION & QA (Week 4)                  │
│  Owner: QA/Testing Agent                            │
│  ✓ Functionality testing                            │
│  ✓ Device/browser compatibility                     │
│  ✓ Link validation                                  │
│  ✓ Accessibility audit                              │
│  ✓ Performance metrics                              │
└──────────────────────────────────────────────────────┘
    |
    | [FINAL SIGN-OFF]
    | All tests pass → Ready to deploy
    |
    v
Project Complete


SECTION 3: WHO TALKS TO WHOM - COMMUNICATION MATRIX
================================================================================

                        Content    Designer   Developer    QA
                        Manager
Content Manager          ---        ✓✓         ✓           ✓
                                  (content   (structure)  (review)
                                   review)

Designer                 ✓✓          ---        ✓✓          ✓
                       (questions) (style     (feedback)
                                   review)

Frontend Developer       ✓          ✓✓          ---         ✓✓
                       (clarify)  (design     (complete
                                  review)      code)

QA Agent                 ✓           ✓          ✓✓          ---
                       (content   (visual    (functional
                        bugs)      bugs)       bugs)


INFORMATION FLOWS BY PHASE:
───────────────────────────

Phase 1 → Phase 2:
  Content Manager → Designer: "Here's the finalized content structure"
  Designer: "What's the tone? Any visual references?"
  Content Manager: "Professional, modern, Data Science focus"

Phase 2 → Phase 3:
  Designer → Developer: "Here's the complete CSS styling"
  Developer: "Any interaction requirements I should know about?"
  Designer: "Smooth scrolling, hover effects on projects"

Phase 3 → Phase 4:
  Developer → QA: "Here's the complete, working website"
  QA: "Testing across devices and browsers..."
  QA → Developer: "Found 3 bugs in mobile view"
  Developer: [Fixes bugs] → QA: "Issues resolved"

QA → All (Feedback Loop):
  If major issues found, QA reports to the agent who owns that area
  Designer gets style/responsive issues
  Developer gets functionality/performance issues
  Content Manager gets content/structure issues


SECTION 4: HANDOFF POINTS - EXACT DELIVERABLES
================================================================================

┌─ HANDOFF #1: Content Manager → UI/UX Designer ────────────────────────────┐
│ Trigger: Content is complete and HTML sections are filled                 │
│ What Gets Handed Off:                                                     │
│  • index.html with all content sections filled                           │
│  • portfolio-data.json with structured data                              │
│  • Content style guide (tone, voice, audience)                           │
│  • Any specific brand guidelines or visual references                    │
│ Designer Validates: "I have everything I need to create the design"      │
│ Success Criteria:                                                         │
│  ✓ No placeholder content remaining                                      │
│  ✓ HTML semantic structure is sound                                      │
│  ✓ All sections are in correct order                                     │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ HANDOFF #2: UI/UX Designer → Frontend Developer ───────────────────────────┐
│ Trigger: CSS styling is complete and tested in browser                    │
│ What Gets Handed Off:                                                     │
│  • Complete styles/style.css with all CSS rules                          │
│  • Design specifications document                                         │
│  • Responsive breakpoints list (mobile: 480px, tablet: 768px, etc)      │
│  • Accessibility checklist (color contrast, focus states, etc)          │
│  • Any custom CSS variables or utility classes                           │
│ Developer Validates: "I understand the design intent and can code it"    │
│ Success Criteria:                                                         │
│  ✓ CSS is complete and compiles without errors                          │
│  ✓ Website is visually complete in browser                              │
│  ✓ Responsive design is implemented                                      │
│  ✓ Accessibility features are coded                                      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ HANDOFF #3: Frontend Developer → QA/Testing Agent ────────────────────────┐
│ Trigger: All functionality is implemented and locally tested              │
│ What Gets Handed Off:                                                     │
│  • Complete, functional website                                          │
│  • scripts/script.js with all interactivity                              │
│  • Updated index.html with any structural optimizations                  │
│  • Implementation notes (what's interactive, performance tips)           │
│  • List of supported browsers and devices                                │
│ QA Validates: "The website works as intended across all platforms"      │
│ Success Criteria:                                                         │
│  ✓ All links work (internal and external)                               │
│  ✓ JavaScript runs without console errors                               │
│  ✓ Forms/interactions work correctly                                     │
│  ✓ Performance meets standards                                           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ HANDOFF #4: QA Agent → Coordinator (Final Sign-Off) ──────────────────────┐
│ Trigger: All testing is complete                                          │
│ What Gets Handed Off:                                                     │
│  • Comprehensive test report                                             │
│  • Device/browser compatibility matrix                                   │
│  • Accessibility audit results                                           │
│  • Performance metrics                                                   │
│  • Any remaining known issues (and priority levels)                      │
│  • Sign-off: "Ready for production" or "Needs fixes"                    │
│ Coordinator Reviews & Decides: Approve for deployment or send back      │
│ Success Criteria:                                                         │
│  ✓ No critical bugs remaining                                           │
│  ✓ Works on all target devices/browsers                                 │
│  ✓ Meets accessibility standards                                        │
│  ✓ Performance is acceptable                                            │
└─────────────────────────────────────────────────────────────────────────────┘


SECTION 5: CRITICAL DEPENDENCIES
================================================================================

DEPENDENCY CHAIN:
─────────────────

1. Content Manager → OTHERS BLOCKED UNTIL: Complete
   ├─ Designer blocked: Cannot design without knowing content length
   ├─ Developer blocked: Cannot optimize without final content
   └─ QA blocked: Cannot test content accuracy without final copy

2. UI/UX Designer → OTHERS BLOCKED UNTIL: Complete
   ├─ Developer blocked: Cannot implement interactivity without CSS
   └─ QA blocked: Cannot validate visual design without CSS

3. Frontend Developer → OTHERS BLOCKED UNTIL: Complete
   └─ QA blocked: Cannot test without functional code

4. QA Agent → COORDINATOR BLOCKED UNTIL: Complete
   └─ Cannot approve deployment without validation


PARALLEL WORK OPPORTUNITIES:
────────────────────────────

✓ Content Manager can work independently (Phase 1)
  - No dependencies on other agents

✓ While Designer is working (Phase 2):
  - Developer can review Designer's CSS
  - Can prepare JavaScript structure
  - Cannot write final JS until CSS is complete

✓ While Developer is working (Phase 3):
  - QA can prepare test scripts
  - Can set up test environments
  - Cannot run functional tests until code is ready


CRITICAL PATH (Minimum Time):
──────────────────────────────

Content → Design → Development → QA
  |         |          |          |
 Week 1   Week 2    Week 3     Week 4

This is a strict linear dependency. Each phase must complete before next starts.
To reduce timeline: Increase agent count, not parallelization (already optimized).


BLOCKER RESOLUTION PROTOCOL:
────────────────────────────

If Agent reports blocker:

   Agent → Coordinator: "I'm blocked on X"

   Coordinator investigates:
   ├─ Is the blocking agent behind schedule?
   ├─ Can work be reordered?
   ├─ Can preliminary deliverables be made available?
   ├─ Does project scope need adjustment?

   Coordinator decides:
   ├─ Wait for deliverable (preferred)
   ├─ Get preliminary version to unblock
   ├─ Reassign work to different agent
   └─ Escalate scope change to Coordinator

Example Blocker:
   Developer: "Can't implement smooth scroll - Designer's CSS is incomplete"
   Coordinator: "Designer - share what you have. Developer - use vanilla JS
                solution; Designer will refine in Phase 4 updates"
   Result: Development continues, QA delays until final CSS


================================================================================
                            COORDINATION RULES
================================================================================

1. SCOPE PROTECTION
   └─ Each agent stays in their lane
   └─ Cross-functional changes require Coordinator approval
   └─ No agent modifies another agent's primary deliverable without permission

2. COMMUNICATION PROTOCOL
   └─ Agents report blockers immediately
   └─ Designer provides specs, not implementation for Developer
   └─ Developer provides technical implementation, not design decisions
   └─ QA reports issues to responsible agent, not Coordinator

3. HANDOFF QUALITY GATES
   Before moving to next phase, confirm:
   └─ Previous agent's deliverables are complete
   └─ Receiving agent understands requirements
   └─ No ambiguity in specifications
   └─ All questions are answered

4. REWORK PREVENTION
   └─ Content must be final before Designer starts
   └─ Design must be approved before Developer implements
   └─ Code must be complete before QA tests
   └─ Coordinate scope changes early, not mid-phase

5. COORDINATOR DECISIONS
   └─ When agents disagree: Coordinator decides
   └─ When priorities conflict: Coordinator prioritizes
   └─ When scope is unclear: Coordinator clarifies
   └─ When timeline is threatened: Coordinator escalates

================================================================================
                        CURRENT PROJECT STATUS
================================================================================

PHASE 1 STATUS: Content Manager
├─ HTML Structure: ✓ Complete
├─ Content Creation: ⚠ INCOMPLETE
│  ├─ About/Bio section: NEEDS WORK
│  ├─ Projects section: NEEDS CONTENT
│  ├─ Experiences section: NEEDS CONTENT
│  └─ Contact section: NEEDS CONTENT
└─ Blocker: Phase 2 cannot start until this is complete

PHASE 2 STATUS: UI/UX Designer
├─ CSS Styling: BLOCKED (waiting for content)
├─ Responsive Design: NOT STARTED
├─ Accessibility: NOT STARTED
└─ Blocker: WAITING FOR PHASE 1 COMPLETION

PHASE 3 STATUS: Frontend Developer
├─ HTML Optimization: NOT STARTED
├─ JavaScript: EMPTY (scripts/script.js)
├─ Performance: NOT STARTED
└─ Blocker: WAITING FOR PHASE 2 COMPLETION

PHASE 4 STATUS: QA Agent
├─ Testing: NOT STARTED
├─ Reports: NOT STARTED
└─ Blocker: WAITING FOR PHASE 3 COMPLETION

NEXT ACTION:
  Content Manager: Complete all portfolio content immediately
  (This unblocks all downstream work)

================================================================================