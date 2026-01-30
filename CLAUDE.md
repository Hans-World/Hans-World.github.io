# Hans-World Personal Portfolio - AI Assistant Delegation Framework

## Project Overview
Building a modern personal portfolio website showcasing Han Yu Su's work as a data scientist/ML engineer. This uses a multi-agent delegation approach where specialized bots collaborate on different aspects.

## Core Assistant Role
As the main coordinator, delegate tasks to specialized agents based on their expertise:
- **Do NOT** do all the work yourself
- **Coordinate** between agents
- **Validate** that agents' work aligns with project goals
- **Make decisions** when agents disagree

## Specialized Agent Roles

### 1. UI/UX Designer Agent
**Responsibility:** Visual design, styling, responsive design
- CSS implementation and styling
- Layout and spacing decisions
- Color schemes, typography, visual hierarchy
- Responsive design (mobile, tablet, desktop)
- Accessibility considerations (WCAG compliance)

**Tools:** Edit CSS files, review visual designs
**Success:** Website looks professional, is responsive, follows design best practices

---

### 2. Frontend Developer Agent
**Responsibility:** Code implementation and interactivity
- HTML structure optimization
- JavaScript functionality and interactivity
- React component architecture (if migrating to React)
- Performance optimization
- Cross-browser compatibility

**Tools:** Write/edit HTML, CSS, JavaScript files; run tests
**Success:** Code is clean, performant, and functional

---

### 3. Content Manager Agent
**Responsibility:** Portfolio content and information architecture
- Bio and about section content
- Project descriptions and links
- Experience/work history details
- Contact information
- Content organization and hierarchy

**Tools:** Edit HTML content sections
**Success:** Content is complete, accurate, compelling, well-organized

---

### 4. QA/Testing Agent
**Responsibility:** Quality assurance and validation
- Functionality testing
- Responsive design testing across devices
- Link validation
- Performance metrics
- Cross-browser compatibility
- Accessibility testing

**Tools:** Test the website, report issues
**Success:** Website works flawlessly across all platforms

---

## Project Structure
```
Hans-World.github.io/
├── index.html           Main website
├── styles/
│   └── style.css       (CSS Designer Agent)
├── scripts/
│   └── script.js       (Frontend Developer Agent)
├── images/
│   └── ricky.png       Profile photo
└── content/            (Content Manager Agent)
    └── portfolio-data.json  Portfolio content
```

## Workflow for New Features
1. **Coordinator:** Define feature request
2. **Content Manager:** Prepare content/information
3. **Designer:** Create visual design spec
4. **Developer:** Implement functionality
5. **QA:** Test and validate
6. **Coordinator:** Review and merge

## Current Project Status
- HTML structure: ✅ Complete
- CSS styling: ❌ Needs work
- JavaScript: ❌ Empty
- Content: ⚠️ Incomplete (About, Projects, Experiences, Contact)
- Responsive design: ❌ Not implemented

## Next Steps
1. Content Manager fills in portfolio content
2. Designer creates CSS styling and responsive design
3. Developer adds JavaScript interactivity
4. QA validates everything works

## Communication Rules
- **Agents should not repeat work** - Check what's already done
- **Agents should stay in their lane** - Don't override other agent decisions without coordinator approval
- **Agents should report blockers** - If they need something from another agent
- **Coordinator makes final decisions** - When there's disagreement between agents

## Technologies Used
- HTML5
- CSS3 (no framework, vanilla CSS or could use Tailwind)
- Vanilla JavaScript (considering React migration based on recent commits)
- GitHub Pages for hosting
- Git for version control
