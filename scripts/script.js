/* ========================================
   Han Yu Su - Personal Portfolio
   Frontend JavaScript - Motion & Animation
   ======================================== */

// ========================================
// ACCESSIBILITY: RESPECT PREFERS-REDUCED-MOTION
// ========================================
(function initAccessibility() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0.01ms');
    document.documentElement.style.setProperty('--transition-base', '0.01ms');
    document.documentElement.style.setProperty('--transition-slow', '0.01ms');
    console.log('Reduced motion mode enabled');
  }
})();

// ========================================
// EASING FUNCTIONS FOR SMOOTH ANIMATIONS
// ========================================
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

// ========================================
// PAGE LOAD ANIMATION
// ========================================
(function initPageLoad() {
  window.addEventListener('load', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    if (header && nav) {
      header.style.opacity = '1';
      header.style.animation = 'fadeInDown 0.6s ease-out';
      nav.style.opacity = '1';
      nav.style.animation = 'fadeInUp 0.6s ease-out 0.2s both';
    }
  });
})();

// ========================================
// HOVER ELEVATION EFFECTS
// ========================================
(function initHoverEffects() {
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.about-card, .experience-card, .project-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = 'var(--shadow-lg)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow-md)';
      });
    });
  });
})();

// ========================================
// BUTTON RIPPLE ANIMATION
// ========================================
(function initButtonRipple() {
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.position = 'absolute';
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });
  });
})();

// ========================================
// FORM FIELD INTERACTION ANIMATIONS
// ========================================
(function initFormAnimations() {
  document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('input, textarea');

    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.02)';
      });

      input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });
})();

// ========================================
// FADE-IN ANIMATION ON SCROLL
// ========================================
(function initScrollFadeIn() {
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.about-card, .experience-card, .project-card');
    const allElements = [...sections, ...cards];

    const fadeInOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, fadeInOptions);

    allElements.forEach(el => {
      el.style.opacity = '0';
      fadeInObserver.observe(el);
    });
  });
})();

// ========================================
// 1. SECURITY ENHANCEMENTS
// ========================================
(function initSecurityEnhancements() {
  // Add rel="noopener noreferrer" to all external links
  document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
      if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      } else {
        const currentRel = link.getAttribute('rel');
        if (!currentRel.includes('noopener')) {
          link.setAttribute('rel', `${currentRel} noopener noreferrer`);
        }
      }
    });
  });
})();

// ========================================
// 2. SMOOTH SCROLL NAVIGATION
// ========================================
(function initSmoothScroll() {
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const navHeight = document.querySelector('nav').offsetHeight;
          const targetPosition = targetSection.offsetTop - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });
})();

// ========================================
// 3. ACTIVE NAVIGATION TRACKING
// ========================================
(function initActiveNavigation() {
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, header[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Intersection Observer for better performance
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          // Remove active class from all links
          navLinks.forEach(link => link.classList.remove('active'));

          // Add active class to current link
          const activeLink = document.querySelector(`nav a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => observer.observe(section));
  });
})();

// ========================================
// 4. FORM VALIDATION
// ========================================
const formValidation = {
  // Validation rules
  rules: {
    name: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-Z\s'-]+$/,
      message: 'Please enter a valid name (letters, spaces, hyphens, apostrophes only)'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    subject: {
      required: true,
      minLength: 3,
      message: 'Subject must be at least 3 characters long'
    },
    message: {
      required: true,
      minLength: 10,
      message: 'Message must be at least 10 characters long'
    }
  },

  // Validate single field
  validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const rule = this.rules[fieldName];

    if (!rule) return { valid: true };

    // Check required
    if (rule.required && !fieldValue) {
      return { valid: false, message: `${this.capitalize(fieldName)} is required` };
    }

    // Check min length
    if (rule.minLength && fieldValue.length < rule.minLength) {
      return { valid: false, message: rule.message || `${this.capitalize(fieldName)} must be at least ${rule.minLength} characters` };
    }

    // Check pattern
    if (rule.pattern && !rule.pattern.test(fieldValue)) {
      return { valid: false, message: rule.message || `${this.capitalize(fieldName)} format is invalid` };
    }

    return { valid: true };
  },

  // Validate entire form
  validateForm(form) {
    const fields = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    fields.forEach(field => {
      const result = this.validateField(field);
      if (!result.valid) {
        this.showError(field, result.message);
        isValid = false;
      } else {
        this.clearError(field);
      }
    });

    return isValid;
  },

  // Show error message
  showError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');

    formGroup.classList.add('form-group--error');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.setAttribute('aria-hidden', 'false');
    }

    field.setAttribute('aria-invalid', 'true');
  },

  // Clear error message
  clearError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');

    formGroup.classList.remove('form-group--error');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.setAttribute('aria-hidden', 'true');
    }

    field.removeAttribute('aria-invalid');
  },

  // Utility: Capitalize first letter
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

// ========================================
// 5. FORM SUBMISSION HANDLING
// ========================================
(function initFormSubmission() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (!form) return;

    // Real-time validation on blur
    const fields = form.querySelectorAll('input[required], textarea[required]');
    fields.forEach(field => {
      field.addEventListener('blur', () => {
        formValidation.validateField(field);
      });

      // Clear error on input
      field.addEventListener('input', () => {
        if (field.closest('.form-group').classList.contains('form-group--error')) {
          const result = formValidation.validateField(field);
          if (result.valid) {
            formValidation.clearError(field);
          }
        }
      });
    });

    // Form submission
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Remove any existing messages
      removeMessages();

      // Validate form
      if (!formValidation.validateForm(form)) {
        showGlobalError('Please fix the errors above before submitting.');
        return;
      }

      // Get form data
      const formData = new FormData(form);
      const submitButton = form.querySelector('.btn-submit');

      // Disable submit button
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      try {
        // Submit to Formspree (or your backend)
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showSuccessMessage('Thank you! Your message has been sent successfully.');
          form.reset();

          // Clear all error states
          fields.forEach(field => formValidation.clearError(field));
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        showGlobalError('Sorry, there was an error sending your message. Please try again or email directly.');
        console.error('Form submission error:', error);
      } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      }
    });

    // Show success message
    function showSuccessMessage(message) {
      const successDiv = document.createElement('div');
      successDiv.className = 'form-success';
      successDiv.textContent = message;
      successDiv.setAttribute('role', 'alert');
      form.insertBefore(successDiv, form.firstChild);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        successDiv.style.opacity = '0';
        setTimeout(() => successDiv.remove(), 300);
      }, 5000);
    }

    // Show global error message
    function showGlobalError(message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'form-error-global';
      errorDiv.textContent = message;
      errorDiv.setAttribute('role', 'alert');
      form.insertBefore(errorDiv, form.firstChild);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        errorDiv.style.opacity = '0';
        setTimeout(() => errorDiv.remove(), 300);
      }, 5000);
    }

    // Remove existing messages
    function removeMessages() {
      const existingMessages = form.querySelectorAll('.form-success, .form-error-global');
      existingMessages.forEach(msg => msg.remove());
    }
  });
})();

// ========================================
// 6. KEYBOARD ACCESSIBILITY
// ========================================
(function initKeyboardAccessibility() {
  document.addEventListener('DOMContentLoaded', () => {
    // Allow Enter key to submit form from any input field
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          form.querySelector('.btn-submit').click();
        }
      });
    }

    // Trap focus in navigation when using Tab
    const nav = document.querySelector('nav');
    if (nav) {
      const navLinks = nav.querySelectorAll('a');
      const firstLink = navLinks[0];
      const lastLink = navLinks[navLinks.length - 1];

      nav.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstLink) {
            e.preventDefault();
            lastLink.focus();
          } else if (!e.shiftKey && document.activeElement === lastLink) {
            e.preventDefault();
            firstLink.focus();
          }
        }
      });
    }
  });
})();

// ========================================
// 7. PERFORMANCE MONITORING
// ========================================
(function initPerformanceMonitoring() {
  window.addEventListener('load', () => {
    // Check if Performance API is available
    if ('performance' in window) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

      // Log performance metrics (for development)
      console.log('Performance Metrics:');
      console.log(`Page Load Time: ${pageLoadTime}ms`);
      console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.navigationStart}ms`);
      console.log(`Time to First Byte: ${perfData.responseStart - perfData.navigationStart}ms`);

      // Alert if page load is slow (optional - remove in production)
      if (pageLoadTime > 3000) {
        console.warn('Page load time is slow. Consider optimization.');
      }
    }

    // Monitor long tasks (experimental - for development)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.warn('Long task detected:', entry);
          }
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task API not supported
      }
    }
  });
})();

// ========================================
// 8. UTILITY: DEBOUNCE FUNCTION
// ========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// 9. CONSOLE WELCOME MESSAGE
// ========================================
(function showWelcomeMessage() {
  console.log('%cHan Yu Su Portfolio', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
  console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'font-size: 14px; color: #94a3b8;');
  console.log('%cInterested in working together? Get in touch!', 'font-size: 14px; color: #06b6d4;');
})();
