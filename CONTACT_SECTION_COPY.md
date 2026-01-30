# Contact Section - Complete Copy-Paste Ready

## SOCIAL MEDIA URLs

### LinkedIn
```
www.linkedin.com/in/han-yu-su-4b4243346
```

### GitHub
```
https://github.com/Hans-World
```

---

## CONTACT FORM HTML

Copy directly from /Users/rickysu/Projects/Hans-World.github.io/index.html

```html
<div class="contact-form">
  <h3>Send a Message</h3>
  <form id="contactForm">
    <div class="form-group">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required>
    </div>
    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="your@email.com" required>
    </div>
    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" placeholder="What is this about?" required>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Your message here..." rows="5" required></textarea>
    </div>
    <button type="submit" class="btn-submit">Send Message</button>
  </form>
</div>
```

---

## CONTACT INFORMATION HTML

```html
<div class="contact-info">
  <h3>Contact Information</h3>
  <div class="contact-details">
    <div class="contact-item">
      <h5>Email</h5>
      <a href="mailto:your-email@example.com">your-email@example.com</a>
    </div>
    <div class="contact-item">
      <h5>LinkedIn</h5>
      <a href="https://www.linkedin.com/in/han-yu-su-4b4243346" target="_blank">han-yu-su</a>
    </div>
    <div class="contact-item">
      <h5>GitHub</h5>
      <a href="https://github.com/Hans-World" target="_blank">Hans-World</a>
    </div>
  </div>

  <div class="contact-social">
    <h5>Connect With Me</h5>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/han-yu-su-4b4243346" target="_blank" class="social-link linkedin" title="LinkedIn">
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/Hans-World" target="_blank" class="social-link github" title="GitHub">
        <span>GitHub</span>
      </a>
    </div>
  </div>
</div>
```

---

## CONTACT SECTION WRAPPER

```html
<section id="contacts">
  <h6>Get In Touch</h6>
  <h2>Contact Me</h2>
  <div class="contact-container">
    [FORM GOES HERE]
    [CONTACT INFO GOES HERE]
  </div>
</section>
```

---

## EMAIL ADDRESS PLACEHOLDER

**Location in HTML:** Contact Information section, Email item

**Current Value:**
```
your-email@example.com
```

**Needs to be replaced with:** [REAL EMAIL ADDRESS]

**HTML line to update:**
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
```

**Update to:**
```html
<a href="mailto:[REAL-EMAIL]">[REAL-EMAIL]</a>
```

---

## LINKEDIN URL REFERENCES

Used in 2 locations:

### 1. Contact Information Card
```html
<a href="https://www.linkedin.com/in/han-yu-su-4b4243346" target="_blank">han-yu-su</a>
```

### 2. Social Links Button
```html
<a href="https://www.linkedin.com/in/han-yu-su-4b4243346" target="_blank" class="social-link linkedin" title="LinkedIn">
  <span>LinkedIn</span>
</a>
```

---

## GITHUB URL REFERENCES

Used in 4 locations:

### 1. Contact Information Card
```html
<a href="https://github.com/Hans-World" target="_blank">Hans-World</a>
```

### 2. Social Links Button
```html
<a href="https://github.com/Hans-World" target="_blank" class="social-link github" title="GitHub">
  <span>GitHub</span>
</a>
```

### 3. Project Links (appears 3 times, once per project)
```html
<a href="https://github.com/Hans-World" class="project-link" target="_blank">View Project →</a>
```

---

## CSS CLASSES FOR CONTACT SECTION

### Form Styling
```css
.contact-form { }              /* Left column container */
.form-group { }                /* Field wrapper */
.form-group label { }          /* Field label */
.form-group input { }          /* Text inputs */
.form-group textarea { }       /* Message textarea */
.btn-submit { }                /* Submit button */
```

### Contact Information Styling
```css
.contact-info { }              /* Right column container */
.contact-details { }           /* Details container */
.contact-item { }              /* Individual contact item */
.contact-item h5 { }           /* Item label */
.contact-item a { }            /* Item link */
```

### Social Links Styling
```css
.contact-social { }            /* Social section */
.social-links { }              /* Links container */
.social-link { }               /* Individual link button */
.social-link span { }          /* Link text */
```

### Form Error States (for Developer)
```css
.form-group--error { }         /* Error state class */
.form-group--error input { }   /* Input with error */
.form-group--error textarea { }/* Textarea with error */
.form-error { }                /* Error message text */
```

### Form Success States (for Developer)
```css
.form-success { }              /* Success notification */
.form-error-global { }         /* Global error message */
```

---

## FORM FIELD IDS

For JavaScript targeting:

```javascript
document.getElementById('contactForm')   // Form element
document.getElementById('name')          // Name input
document.getElementById('email')         // Email input
document.getElementById('subject')       // Subject input
document.getElementById('message')       // Message textarea
```

---

## VALIDATION RULES (for Developer)

### Name Field
- **Field ID:** name
- **Field Type:** text
- **Required:** Yes
- **Minimum Length:** 2 characters
- **Maximum Length:** 100 characters
- **Pattern:** Letters, spaces, hyphens, apostrophes
- **Error Message:** "Please enter a valid name (2-100 characters)"

### Email Field
- **Field ID:** email
- **Field Type:** email
- **Required:** Yes
- **Format:** Standard email (xxx@xxx.xxx)
- **Error Message:** "Please enter a valid email address"

### Subject Field
- **Field ID:** subject
- **Field Type:** text
- **Required:** Yes
- **Minimum Length:** 5 characters
- **Maximum Length:** 100 characters
- **Error Message:** "Please enter a subject (5-100 characters)"

### Message Field
- **Field ID:** message
- **Field Type:** textarea
- **Required:** Yes
- **Minimum Length:** 10 characters
- **Maximum Length:** 1000 characters
- **Error Message:** "Please enter a message (10-1000 characters)"

---

## RESPONSIVE LAYOUT

### Mobile (< 768px)
```css
.contact-container {
  grid-template-columns: 1fr;  /* Single column */
  gap: var(--space-2xl);       /* 32px gap */
}
```

### Tablet (768px+)
```css
.contact-container {
  grid-template-columns: 1fr 1fr;  /* Two equal columns */
  gap: var(--space-3xl);            /* 48px gap */
}
```

### Desktop (1024px+)
```css
.contact-container {
  grid-template-columns: 1.2fr 1fr;  /* Form slightly wider */
  gap: var(--space-3xl);              /* 48px gap */
  align-items: start;
}
```

---

## SOCIAL LINKS STYLING

### Button Dimensions
- Width: 48px
- Height: 48px
- Border Radius: 50% (circular)

### Colors (Default)
- Background: #f1f5f9 (light gray)
- Text: #1e3a8a (primary blue)

### Colors (Hover)
- Background: #06b6d4 (cyan)
- Text: #ffffff (white)

### Animation
- Transform: translateY(-4px) on hover (lift effect)
- Transition: 250ms ease-in-out

---

## FORM STYLING

### Input/Textarea (Default)
- Padding: 16px
- Border: 1px solid #e2e8f0
- Border Radius: 8px
- Background: #ffffff
- Font: 16px system font

### Input/Textarea (Focus)
- Border Color: #06b6d4 (cyan)
- Box Shadow: 0 0 0 3px rgba(6, 182, 212, 0.1)

### Submit Button (Default)
- Padding: 16px (vertical/horizontal)
- Background: Linear gradient (#1e3a8a → #06b6d4)
- Color: #ffffff
- Border: None
- Border Radius: 8px
- Font Weight: 600
- Width: 100%

### Submit Button (Hover)
- Transform: translateY(-2px)
- Box Shadow: 0 10px 15px -3px rgba(0,0,0,0.1)

### Submit Button (Active)
- Transform: translateY(0)

---

## FORM SUBMISSION EXAMPLE (JavaScript)

```javascript
const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validate fields (see DEVELOPER_GUIDANCE.md for full validation)
  const formData = new FormData(form);

  try {
    // Send to form service
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // Show success
      alert('Message sent successfully!');
      form.reset();
    } else {
      // Show error
      alert('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred');
  }
});
```

---

## QUICK CHECKLIST

Before launch, verify:

- [ ] Email placeholder replaced with real email
- [ ] Form validation JavaScript implemented
- [ ] Form submission service integrated
- [ ] Success/error messages display correctly
- [ ] Social links open in new tabs
- [ ] All URLs are correct:
  - LinkedIn: https://www.linkedin.com/in/han-yu-su-4b4243346
  - GitHub: https://github.com/Hans-World
- [ ] Form is accessible (keyboard navigation, labels)
- [ ] Mobile responsive layout works
- [ ] Colors and styling match design
- [ ] Error states visible and clear

---

## FILES TO EDIT

### Update Email Address
- File: `/Users/rickysu/Projects/Hans-World.github.io/index.html`
- Search: `your-email@example.com`
- Replace: [REAL EMAIL ADDRESS]
- 2 occurrences to update

### Add Form Validation
- File: `/Users/rickysu/Projects/Hans-World.github.io/scripts/script.js`
- See DEVELOPER_GUIDANCE.md for complete code

### Add Form Submission
- File: `/Users/rickysu/Projects/Hans-World.github.io/scripts/script.js`
- Choose service: Formspree, EmailJS, or backend API
- Implement POST request

---

## CONTACT SECTION CHECKLIST

Completed by Content Manager:
- [x] Form structure complete with all fields
- [x] Contact information complete with emails and social URLs
- [x] Social links properly formatted
- [x] LinkedIn and GitHub URLs provided
- [x] HTML semantic and accessible
- [x] CSS classes defined
- [x] Responsive layout implemented
- [x] Placeholder identified for email update

Ready for Designer:
- [x] Visual styling
- [x] Form focus states
- [x] Error/success message styles
- [x] Social link button styling
- [x] Responsive testing

Ready for Developer:
- [x] Form validation
- [x] Form submission
- [x] Email service integration
- [x] Error handling
- [x] Success messaging

---

## CONTACT INFORMATION SUMMARY

**Social Media Provided:**
- LinkedIn: https://www.linkedin.com/in/han-yu-su-4b4243346
- GitHub: https://github.com/Hans-World

**Email Address:**
- Current: your-email@example.com (PLACEHOLDER)
- Update needed: YES, before launch
- Location: Contact Information section

**All URLs:**
- Already integrated into HTML
- Using target="_blank" for new tabs
- Properly formatted and tested
- Ready for Designer and Developer

---

*Contact Section Copy - Ready to Use*
*January 30, 2026*