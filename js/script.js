// Wait for sections to load before initializing
function initializeApp() {
  // Carousel functionality
  function scrollCarousel(direction) {
    const carousel = document.getElementById("screenshotCarousel");
    if (!carousel) return;
    const scrollAmount = 300; // Adjust based on item width + gap
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }

  // Make scrollCarousel globally available for onclick handlers
  window.scrollCarousel = scrollCarousel;

  // Update navigation button states based on scroll position
  const carousel = document.getElementById("screenshotCarousel");
  if (carousel) {
    const prevBtn = document.querySelector(".carousel-nav.prev");
    const nextBtn = document.querySelector(".carousel-nav.next");

    function updateNavButtons() {
      if (!carousel || !prevBtn || !nextBtn) return;
      const isAtStart = carousel.scrollLeft <= 10;
      const isAtEnd =
        carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10;

      prevBtn.disabled = isAtStart;
      nextBtn.disabled = isAtEnd;
    }

    carousel.addEventListener("scroll", updateNavButtons);
    updateNavButtons(); // Initial check
  }

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  document
    .querySelectorAll(".fade-in-up, .fade-in, .slide-in-left, .slide-in-right")
    .forEach((el) => {
      observer.observe(el);
    });

  // Header scroll effect
  const header = document.querySelector("header");
  if (header) {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 50) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
  }
}

// Make initializeApp available globally
window.initializeApp = initializeApp;

// Initialize when DOM is ready and sections are loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    // Wait a bit for sections to load
    setTimeout(initializeApp, 100);
  });
} else {
  // DOM is already ready, but wait for sections
  setTimeout(initializeApp, 100);
}

// Listen for custom event when sections are loaded
document.addEventListener("sectionsLoaded", initializeApp);
