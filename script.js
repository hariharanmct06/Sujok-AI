/* ==========================================
   SUJOK AI - INTERACTIVE CODE & CHAT ENGINE
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Sticky Navigation & Scroll Effects
  // ==========================================
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    // Header styling
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollPos > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // Active navigation links highlighting
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Scroll to Top action
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==========================================
  // 2. Mobile Responsive Nav Drawer
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');

  const toggleMobileMenu = () => {
    menuToggle.classList.toggle('open');
    mobileDrawer.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  };

  menuToggle.addEventListener('click', toggleMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      mobileDrawer.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });

  // Close mobile drawer on resize to desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileDrawer.classList.contains('open')) {
      menuToggle.classList.remove('open');
      mobileDrawer.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  });


  // ==========================================
  // 3. FAQ Accordion Functionality
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close all open items first for a clean accordion effect
      faqItems.forEach(otherItem => {
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        const otherContent = otherItem.querySelector('.faq-content');
        otherTrigger.setAttribute('aria-expanded', 'false');
        otherContent.style.maxHeight = null;
      });

      // Toggle current item
      if (!isExpanded) {
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      }
    });
  });


  // ==========================================
  // 4. Contact Form Submission & Modal
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Perform simple validation check
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (name && email && message) {
        // Show success modal
        successModal.classList.add('show');
        document.body.classList.add('no-scroll');
        contactForm.reset();
      }
    });
  }

  const closeModal = () => {
    successModal.classList.remove('show');
    document.body.classList.remove('no-scroll');
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Close modal when clicking on the background backdrop
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      closeModal();
    }
  });


  // ==========================================
  // 5. Floating WhatsApp Widget Toggles
  // ==========================================
  const whatsappTrigger = document.getElementById('whatsappTrigger');
  const whatsappPopup = document.getElementById('whatsappPopup');
  const popupClose = document.getElementById('popupClose');

  if (whatsappTrigger) {
    whatsappTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappPopup.classList.toggle('show');
    });
  }

  if (popupClose) {
    popupClose.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappPopup.classList.remove('show');
    });
  }

  // Close popup if clicked anywhere else on the document
  document.addEventListener('click', (e) => {
    if (whatsappPopup.classList.contains('show') && !whatsappPopup.contains(e.target) && e.target !== whatsappTrigger) {
      whatsappPopup.classList.remove('show');
    }
  });

});
