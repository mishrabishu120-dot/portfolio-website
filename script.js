/**
 * =============================================
 * PORTFOLIO WEBSITE – script.js
 * Author: Saumy Mishra
 *
 * This file handles:
 *  1. Mobile Navigation Menu Toggle
 *  2. Navbar Scroll Behaviour
 *  3. Active Nav-Link Highlighting (Scroll Spy)
 *  4. Scroll Reveal Animation (IntersectionObserver)
 *  5. Back-to-Top Button
 *  6. Contact Form Validation
 * =============================================
 */

"use strict"; // Enable strict mode for cleaner, safer JS

/* =============================================
   WAIT FOR THE DOM TO FULLY LOAD
   All our code runs only after HTML is parsed.
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  // ─────────────────────────────────────────────
  // 1. ELEMENT REFERENCES
  // Grab references to the elements we'll need.
  // ─────────────────────────────────────────────
  const navbar       = document.getElementById("navbar");
  const hamburger    = document.getElementById("hamburger");
  const navLinks     = document.getElementById("navLinks");
  const allNavLinks  = document.querySelectorAll(".nav-link");
  const backToTopBtn = document.getElementById("backToTop");
  const contactForm  = document.getElementById("contactForm");
  const formSuccess  = document.getElementById("formSuccess");
  const sections     = document.querySelectorAll("section[id]"); // All named sections

  /* =============================================
     2. MOBILE MENU TOGGLE
     Hamburger button shows / hides the nav menu
     on small screens. We toggle CSS classes and
     update aria-expanded for accessibility.
     ============================================= */
  hamburger.addEventListener("click", () => {
    // Toggle CSS classes to animate the icon and show/hide the menu
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");

    // Keep aria-expanded in sync (screen readers use this)
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  /**
   * Close the mobile menu whenever the user clicks a nav link.
   * This prevents the menu from staying open after navigation.
   */
  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /**
   * Close the mobile menu when clicking outside of it
   * (anywhere else on the page body).
   */
  document.addEventListener("click", (e) => {
    const clickedInsideNav = navbar.contains(e.target);
    if (!clickedInsideNav && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  /* =============================================
     3. NAVBAR SCROLL BEHAVIOUR
     Add a "scrolled" class when the page scrolls
     down so we can apply a stronger background
     and shadow via CSS.
     ============================================= */
  function handleNavbarScroll() {
    // If scrolled more than 20px, add the scrolled class
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // Also check state on page load (e.g., if user refreshes mid-page)
  handleNavbarScroll();

  /* =============================================
     4. BACK-TO-TOP BUTTON
     The button becomes visible after the user
     scrolls down 400px, and smoothly scrolls
     the page back to the top when clicked.
     ============================================= */
  function handleBackToTop() {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /* =============================================
     5. SCROLL SPY – ACTIVE NAV LINK
     Determine which section is currently in view
     and highlight the matching nav link.

     Strategy: We compare the scroll position
     to each section's offsetTop. The section
     whose top is closest above the viewport
     mid-point is considered "active".
     ============================================= */
  function updateActiveLink() {
    // navHeight offsets the fixed navbar so sections aren't hidden underneath
    const navHeight = navbar.offsetHeight;
    const scrollPos = window.scrollY + navHeight + 60; // +60px buffer

    let currentSection = "";

    // Loop through all sections and find which one we're inside
    sections.forEach((section) => {
      const sectionTop    = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // Remove 'active' from all links, then add it to the matching one
    allNavLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === currentSection) {
        link.classList.add("active");
      }
    });
  }

  /* =============================================
     6. UNIFIED SCROLL HANDLER
     Combining all scroll listeners into one for
     performance (avoids multiple scroll events).
     ============================================= */
  function onScroll() {
    handleNavbarScroll();
    handleBackToTop();
    updateActiveLink();
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  /* =============================================
     7. SCROLL REVEAL ANIMATION
     Uses the IntersectionObserver API to detect
     when elements enter the viewport and applies
     the "visible" CSS class to animate them in.

     This is more performant than listening to
     scroll events for each element individually.
     ============================================= */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view – add 'visible' to trigger the CSS transition
          entry.target.classList.add("visible");

          // Once revealed, stop observing to save resources
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,  // Trigger when 12% of element is visible
      rootMargin: "0px 0px -50px 0px", // Offset – starts animation slightly before
    }
  );

  // Observe every element with the "reveal" class
  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  /* =============================================
     8. CONTACT FORM VALIDATION & SUBMISSION
     We validate all fields before "submitting"
     (no real backend – just a demo simulation).
     ============================================= */

  /** Helper: show an error message below a field */
  function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add("error");    // Red border
    error.textContent = message;     // Show message
  }

  /** Helper: clear error state from a field */
  function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove("error");
    error.textContent = "";
  }

  /**
   * Validate a single input field on the fly as the user types.
   * This gives instant feedback without waiting for form submit.
   */
  function setupLiveValidation(inputId, errorId, validator) {
    const input = document.getElementById(inputId);
    input.addEventListener("input", () => {
      const msg = validator(input.value.trim());
      if (msg) {
        showError(inputId, errorId, msg);
      } else {
        clearError(inputId, errorId);
      }
    });
  }

  // ── Validation rules (return error message string, or "" if valid) ──

  const validateName = (value) => {
    if (!value)          return "Please enter your name.";
    if (value.length < 2) return "Name must be at least 2 characters.";
    return "";
  };

  const validateEmail = (value) => {
    if (!value) return "Please enter your email address.";
    // Basic email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address.";
    return "";
  };

  const validateMessage = (value) => {
    if (!value)           return "Please enter a message.";
    if (value.length < 10) return "Message must be at least 10 characters.";
    return "";
  };

  // Attach live validation to each field
  setupLiveValidation("name",    "nameError",    validateName);
  setupLiveValidation("email",   "emailError",   validateEmail);
  setupLiveValidation("message", "messageError", validateMessage);

  /**
   * Handle form submission.
   * Runs full validation, shows errors if any,
   * or simulates a successful send.
   */
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent real form submission

    // Grab current values
    const nameVal    = document.getElementById("name").value.trim();
    const emailVal   = document.getElementById("email").value.trim();
    const messageVal = document.getElementById("message").value.trim();

    // Run all validators
    const nameErr    = validateName(nameVal);
    const emailErr   = validateEmail(emailVal);
    const messageErr = validateMessage(messageVal);

    let hasError = false;

    // Show errors if validation fails
    if (nameErr) {
      showError("name", "nameError", nameErr);
      hasError = true;
    } else {
      clearError("name", "nameError");
    }

    if (emailErr) {
      showError("email", "emailError", emailErr);
      hasError = true;
    } else {
      clearError("email", "emailError");
    }

    if (messageErr) {
      showError("message", "messageError", messageErr);
      hasError = true;
    } else {
      clearError("message", "messageError");
    }

    // Stop here if there are validation errors
    if (hasError) return;

    // ── Send real form submission via Web3Forms ──
    const submitBtn = document.getElementById("submitBtn");

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending... ⏳";

    const formData = new FormData(contactForm);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
    .then(async (response) => {
      if (response.status == 200) {
        // Success
        contactForm.reset();
        formSuccess.textContent = "✅ Thank you! Your message has been sent successfully.";
        formSuccess.style.color = "#16a34a";
        formSuccess.style.background = "#dcfce7";
      } else {
        // Error
        const json = await response.json();
        formSuccess.textContent = json.message || "❌ Something went wrong. Please try again later.";
        formSuccess.style.color = "#ef4444";
        formSuccess.style.background = "#fee2e2";
      }
      
      // Restore button text
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message ✉️";
      
      // Show confirmation banner
      formSuccess.classList.add("show");
      setTimeout(() => {
        formSuccess.classList.remove("show");
      }, 5000);
    })
    .catch((error) => {
      console.error(error);
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message ✉️";
      formSuccess.textContent = "❌ Something went wrong. Please check your network.";
      formSuccess.style.color = "#ef4444";
      formSuccess.style.background = "#fee2e2";
      formSuccess.classList.add("show");
      setTimeout(() => {
        formSuccess.classList.remove("show");
      }, 5000);
    });
  });

  /* =============================================
     9. INITIAL STATE SETUP
     Run functions once on load to set correct
     initial state (e.g., if page is reloaded
     while scrolled down).
     ============================================= */
  updateActiveLink(); // Highlight the correct nav link on load
  handleBackToTop();  // Show back-to-top if already scrolled

}); // End of DOMContentLoaded
