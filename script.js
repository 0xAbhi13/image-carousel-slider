/* Image Carousel / Slider — Veda Technology Internship Day 22 */
(function () {
  'use strict';

  // ---- Configuration ----
  const AUTOPLAY_DELAY = 4500; // ms between automatic advances
  const FALLBACK_IMAGE =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'>" +
        "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
        "<stop offset='0' stop-color='#eef2f8'/><stop offset='1' stop-color='#dbeafe'/>" +
        "</linearGradient></defs>" +
        "<rect width='100%' height='100%' fill='url(#g)'/>" +
        "<text x='50%' y='46%' dominant-baseline='middle' text-anchor='middle' " +
        "font-family='Segoe UI, system-ui, sans-serif' font-size='44' font-weight='700' fill='#2563eb'>Image unavailable</text>" +
        "<text x='50%' y='56%' dominant-baseline='middle' text-anchor='middle' " +
        "font-family='Segoe UI, system-ui, sans-serif' font-size='22' fill='#6b7280'>Please check your connection</text>" +
      '</svg>'
    );

  // ---- DOM references ----
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(document.querySelectorAll('.carousel__slide'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dots = Array.from(document.querySelectorAll('.carousel__dot'));
  const titleEl = document.getElementById('slideTitle');
  const descEl = document.getElementById('slideDescription');
  const counterEl = document.getElementById('slideCounter');

  const totalSlides = slides.length;

  // ---- State ----
  let currentIndex = 0;
  let intervalId = null;
  let isHovering = false;

  // ---- Reduced motion preference ----
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Helpers ----
  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function wrapIndex(index) {
    // Modulo logic that wraps in both directions.
    return ((index % totalSlides) + totalSlides) % totalSlides;
  }

  function showSlide(index) {
    currentIndex = wrapIndex(index);

    // Move the track.
    track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';

    // Update slide visibility for assistive tech.
    slides.forEach(function (slide, i) {
      const isActive = i === currentIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    // Update indicators.
    dots.forEach(function (dot, i) {
      const isActive = i === currentIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });

    // Update counter and text.
    if (counterEl) {
      counterEl.innerHTML =
        pad(currentIndex + 1) + ' <span class="slash">/</span> ' + pad(totalSlides);
    }
    const activeSlide = slides[currentIndex];
    if (titleEl && activeSlide.dataset.title) {
      titleEl.textContent = activeSlide.dataset.title;
    }
    if (descEl && activeSlide.dataset.description) {
      descEl.textContent = activeSlide.dataset.description;
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // ---- Autoplay management ----
  function startAutoplay() {
    // Prevent duplicate intervals.
    if (intervalId !== null) {
      return;
    }
    intervalId = window.setInterval(function () {
      if (isHovering) {
        return; // paused while hovering
      }
      nextSlide();
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  }

  function resetAutoplayTimer() {
    // Reset the timer after any manual navigation.
    stopAutoplay();
    startAutoplay();
  }

  // ---- Image error handling ----
  function handleImageError(img) {
    if (img.dataset.fallbackApplied === 'true') {
      return;
    }
    img.dataset.fallbackApplied = 'true';
    img.src = FALLBACK_IMAGE;
    img.alt = 'Image could not be loaded';
  }

  slides.forEach(function (slide) {
    const img = slide.querySelector('img');
    if (!img) return;
    img.addEventListener('error', function () {
      handleImageError(img);
    });
    // In case the image is already broken/cached.
    if (img.complete && img.naturalWidth === 0) {
      handleImageError(img);
    }
  });

  // ---- Event listeners ----

  // Navigation buttons.
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      prevSlide();
      resetAutoplayTimer();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      nextSlide();
      resetAutoplayTimer();
    });
  }

  // Indicator dots.
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      const index = parseInt(dot.getAttribute('data-index'), 10);
      if (Number.isNaN(index)) return;
      showSlide(index);
      resetAutoplayTimer();
    });
  });

  // Hover pause / resume.
  if (carousel) {
    carousel.addEventListener('mouseenter', function () {
      isHovering = true;
    });
    carousel.addEventListener('mouseleave', function () {
      isHovering = false;
    });
    // Also handle focus for keyboard users pausing.
    carousel.addEventListener('focusin', function () {
      isHovering = true;
    });
    carousel.addEventListener('focusout', function (event) {
      // Only resume if focus leaves the carousel entirely.
      if (!carousel.contains(event.relatedTarget)) {
        isHovering = false;
      }
    });
  }

  // Keyboard navigation.
  document.addEventListener('keydown', function (event) {
    // Ignore when typing in form fields.
    const target = event.target;
    const tag = target && target.tagName ? target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || (target && target.isContentEditable)) {
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prevSlide();
      resetAutoplayTimer();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextSlide();
      resetAutoplayTimer();
    }
  });

  // Pause autoplay when the tab is hidden, resume when visible.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // ---- Initialization ----
  showSlide(0);

  // Start autoplay automatically when the page loads.
  // Transitions are disabled via CSS under prefers-reduced-motion, so motion-sensitive
  // users still get automatic (instant) advances without animated sliding.
  startAutoplay();

  // Expose for debugging (optional).
  window.__carousel = {
    showSlide: showSlide,
    next: nextSlide,
    prev: prevSlide,
    resetTimer: resetAutoplayTimer
  };
})();
