/**
 * Om Mulchandani - Data Analyst Portfolio
 * Vanilla JavaScript (No Frameworks / No jQuery)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================
  // 1. INITIALIZE AOS (ANIMATE ON SCROLL)
  // ==========================================
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
  }

  // ==========================================
  // 2. NAVBAR SCROLL EFFECT & STICKY HEADER
  // ==========================================
  const header = document.getElementById('main-header');
  const floatingTopBtn = document.getElementById('floating-top-btn');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Sticky header background
    if (scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Floating back to top button visibility
    if (scrollY > 400) {
      floatingTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      floatingTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      floatingTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      floatingTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger initial check

  // ==========================================
  // 3. MOBILE MENU TOGGLER & INTERACTIONS
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = (forceClose = false) => {
    const isOpen = forceClose ? true : mobileMenu.classList.contains('open');

    if (isOpen) {
      mobileMenu.classList.remove('open');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      mobileToggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.add('open');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close on any mobile link click
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMobileMenu(true);
    });
  });

  // Close when clicking outside menu
  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        toggleMobileMenu(true);
      }
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      toggleMobileMenu(true);
    }
  });

  // ==========================================
  // 4. ACTIVE SECTION NAVIGATION HIGHLIGHTING
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const highlightNavOnScroll = () => {
    const scrollPosition = window.scrollY + 120; // Offset for header

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Desktop Links
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Mobile Links
        mobileLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
  highlightNavOnScroll();

  // ==========================================
  // 5. ANIMATED STATISTICS COUNTERS
  // ==========================================
  const counters = document.querySelectorAll('.counter-number');
  let countersAnimated = false;

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 1500; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutQuad)
        const easeOut = 1 - (1 - progress) * (1 - progress);
        const currentValue = Math.floor(easeOut * target);

        counter.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  // Intersection Observer for Statistics
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated) {
            countersAnimated = true;
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('about');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  } else {
    // Fallback if IntersectionObserver is unsupported
    animateCounters();
  }

  // ==========================================
  // 6. PROJECTS CATEGORY FILTERING
  // ==========================================
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Manage active button class
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategories = card.getAttribute('data-category') || '';
        
        if (filterValue === 'all' || cardCategories.toLowerCase().includes(filterValue.toLowerCase())) {
          card.classList.remove('hidden');
          // Smooth fade in
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================
  // 7. CONTACT FORM VALIDATION & HANDLING
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateField = (input, errorEl, condition, errorMsg) => {
    if (!condition) {
      input.classList.add('invalid');
      input.classList.remove('valid');
      errorEl.textContent = errorMsg;
      errorEl.classList.remove('hidden');
      return false;
    } else {
      input.classList.remove('invalid');
      input.classList.add('valid');
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
      return true;
    }
  };

  // Real-time input clearing
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('invalid');
        const err = input.parentElement.querySelector('.error-feedback');
        if (err) err.classList.add('hidden');
      });
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validate inputs
      const isNameValid = validateField(
        nameInput,
        nameError,
        nameInput.value.trim().length >= 2,
        'Please enter your full name (at least 2 characters).'
      );

      const isEmailValid = validateField(
        emailInput,
        emailError,
        emailRegex.test(emailInput.value.trim()),
        'Please enter a valid email address.'
      );

      const isSubjectValid = validateField(
        subjectInput,
        subjectError,
        subjectInput.value.trim().length >= 3,
        'Please enter a subject (at least 3 characters).'
      );

      const isMessageValid = validateField(
        messageInput,
        messageError,
        messageInput.value.trim().length >= 10,
        'Please write a message with at least 10 characters.'
      );

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        return; // Halt if validation fails
      }

      // Simulate sending state
      submitBtn.disabled = true;
      btnText.textContent = 'Sending Message...';
      btnIcon.classList.add('animate-spin');

      /**
       * BACKEND / FORMSPREE / EMAILJS INTEGRATION NOTE:
       * To connect to Formspree, change the form tag in index.html:
       * <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
       * or use fetch() here to post data directly.
       */
      setTimeout(() => {
        // Success presentation
        submitBtn.disabled = false;
        btnText.textContent = 'Message Sent!';
        btnIcon.classList.remove('animate-spin');

        formStatus.className = 'p-4 rounded-xl text-sm font-medium bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 mt-4 block';
        formStatus.innerHTML = `
          <strong>Thank you, ${nameInput.value.trim()}!</strong> Your message has been prepared successfully. 
          I will review your inquiry and respond to <em>${emailInput.value.trim()}</em> shortly.
        `;

        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach((inp) => {
          inp.classList.remove('valid', 'invalid');
        });

        setTimeout(() => {
          btnText.textContent = 'Send Message';
        }, 4000);
      }, 900);
    });
  }

  // ==========================================
  // 8. SCROLL TO TOP ACTIONS
  // ==========================================
  const backToTopBtn = document.getElementById('back-to-top');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
  }

  if (floatingTopBtn) {
    floatingTopBtn.addEventListener('click', scrollToTop);
  }

  // ==========================================
  // 9. DYNAMIC FOOTER COPYRIGHT YEAR
  // ==========================================
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
