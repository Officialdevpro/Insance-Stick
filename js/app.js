// --- app.js (cleaned & optimized) ---
/* eslint-disable no-unused-vars */
document.addEventListener("DOMContentLoaded", () => {
  // ---------- Cached selectors ----------
  const log = (...args) => console.log(...args);
  log("Project Loaded Successfully!");

  

  const clickBtn = document.getElementById("clickBtn");
  if (clickBtn) {
    clickBtn.addEventListener("click", () => alert("Button Clicked!"));
  }

  const menuToggle = document.getElementById("menu-toggle");
  const menuLabel = document.querySelector(".menu-label");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  // ---------- Utility: animate counter ----------
  function animateCount(el, target, duration = 1400) {
    const start = 0;
    const end = parseFloat(target);
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.floor(start + (end - start) * eased);

      // keep decimal if target has fraction
      el.textContent = end % 1 !== 0 ? (end * progress).toFixed(1) : current;

      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target; // ensure exact final value
    }
    requestAnimationFrame(tick);
  }

  // ---------- Counters observer ----------
  (function initCounters() {
    const counters = document.querySelectorAll(".counter .num");
    if (!counters.length || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const numEl = entry.target;
          const parent = numEl.closest(".counter");
          if (parent) parent.classList.add("float");

          if (!numEl.dataset.animated) {
            const target = numEl.dataset.target || numEl.textContent;
            animateCount(numEl, target);
            numEl.dataset.animated = "true";
          }
          observer.unobserve(numEl);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => obs.observe(c));
  })();

  // ---------- Mobile menu toggle ----------
  if (menuToggle && menuLabel && mobileMenu) {
    const setMenuState = (isOpen) => {
      menuLabel.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.style.display = isOpen ? "block" : "none";
    };

    // reflect initial state
    setMenuState(Boolean(menuToggle.checked));

    menuToggle.addEventListener("change", () =>
      setMenuState(menuToggle.checked)
    );
    mobileLinks.forEach((link) =>
      link.addEventListener("click", () => {
        menuToggle.checked = false;
        setMenuState(false);
      })
    );
  }

  // ---------- Story cards & summary ----------
  const storyData = [
    {
      number: "01",
      title: "Offered at South Indian Temples",
      text: "Devotees and priests offer fresh flowers—rose, jasmine, champa, sambrani—during archana and festivals. These sacred blooms fill temples with divine fragrance and devotion.",
    },
    {
      number: "02",
      title: "Respectfully Collected",
      text: "Before flowers are discarded, our team collects them from partnered temples with reverence, ensuring spiritual sanctity is preserved while preventing floral waste.",
    },
    {
      number: "03",
      title: "Gently Dried & Hand-Processed",
      text: "Flowers are dried under controlled conditions and blended with sandalwood, rose, jasmine, and natural aromatics. No synthetic chemicals. No charcoal binding.",
    },
    {
      number: "04",
      title: "Rolled into 'Shri' Agarbathi",
      text: "Skilled artisans hand-roll each 9-inch stick. The final agarbathi retains temple purity and gives 45 minutes of continuous divine fragrance.",
    },
  ];

  const summaryText =
    "Carbon-free, temple-flower based, and crafted for daily puja, meditation, celebrations, and spiritual gatherings.";

  const container = document.getElementById("storyContainer");
  const summaryBox = document.getElementById("summaryBox");
  if (container) {
    // create all cards in a document fragment
    const frag = document.createDocumentFragment();
    storyData.forEach((item) => {
      const card = document.createElement("div");
      card.className = "story-card fade-up";
      card.innerHTML = `
        <div class="story-number">${item.number}</div>
        <div class="story-title">${item.title}</div>
        <div class="story-line"></div>
        <p class="story-text">${item.text}</p>
      `;
      frag.appendChild(card);
    });
    container.appendChild(frag);
  }
  if (summaryBox) summaryBox.innerText = summaryText;

  // ---------- Reveal / fade-up observer ----------
  (function initReveal() {
    const revealElements = document.querySelectorAll(".fade-up");
    if (!revealElements.length || typeof IntersectionObserver === "undefined")
      return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  })();

  // ---------- Header visibility based on hero ----------
  (function initHeaderObserver() {
    const header = document.querySelector(".site-header");
    const firstSection = document.querySelector(
      "main > section:nth-of-type(1)"
    );
    if (!header || !firstSection || typeof IntersectionObserver === "undefined")
      return;

    const headerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header.style.opacity = "1";
            header.style.pointerEvents = "auto";
          } else {
            header.style.opacity = "1";
            // header.style.pointerEvents = "none";
          }
        });
      },
      { threshold: 0.12 }
    );
    headerObs.observe(firstSection);
  })();

  // ---------- Gallery / viewer (large self-contained IIFE) ----------
  (function initGallery() {
    const images = [
      "./assets/images/Fragrances/jasmine.png",
      "./assets/images/Fragrances/2.png",
      "./assets/images/Fragrances/3.png",
      "./assets/images/Fragrances/4.png",
      "./assets/images/Fragrances/5.png",
      "./assets/images/Fragrances/6.png",
      "./assets/images/Fragrances/sambrani.png",
      "./assets/images/Fragrances/8.png",
    ];

    // const bgGradients = [
    //   "radial-gradient(circle,rgba(255,255,255,1) 0%, rgba(8,150,0,1) 82%)",
    //   "radial-gradient(circle,rgba(255, 255, 255, 1) 30%, rgba(255, 213, 0, 1) 82%)",
    //   "radial-gradient(circle,rgba(255,255,255,1) 0%, rgba(83,0,191,1) 82%)",
    //   "radial-gradient(circle,rgba(255,255,255,1) 20%, rgba(45,158,0,1) 82%)",
    //   "radial-gradient(circle,rgba(255, 255, 255, 1) 30%, rgba(189, 0, 79, 1) 82%)",
    //   "radial-gradient(circle,rgba(255,255,255,1) 30%, rgba(158,66,0,1) 100%)",
    //   "radial-gradient(circle,rgba(255,255,255,1) 30%, rgba(158,124,0,1) 100%)",
    //   "radial-gradient(circle,rgba(255,255,255,1) 30%, rgba(60,80,200,1) 100%)",
    // ];

    const profiles = [
      {
        title: "Jasmine",
        short: "Fresh, floral jasmine aroma",
        desc: `A fresh, floral jasmine aroma inspired by the garlands of Tamil temples. It fills the space with festive and spiritual warmth, perfect for celebrations, rituals, and family gatherings.`,
      },
      {
        title: "Champa",
        short: "Traditional temple floral scent",
        desc: `A traditional temple fragrance carrying the essence of South Indian shrines. Its nostalgic floral notes reflect ancient Tamil heritage, making it ideal for puja and festive home ambience.`,
      },
      {
        title: "Lavender",
        short: "Calming and soothing aromatic notes",
        desc: `A calming, soothing scent crafted to bring peace and clarity. Perfect for meditation, yoga spaces, and bedtime rituals, blending herbal purity with gentle lavender notes.`,
      },
      {
        title: "Screw Pine",
        short: "Delicate, unique floral aroma",
        desc: `A delicate, unique floral fragrance inspired by sacred screw pine blossoms. Its culturally rooted aroma offers a true temple-like experience for traditional scent lovers.`,
      },
      {
        title: "Rose",
        short: "Soft, devotional floral fragrance",
        desc: `A soft devotional aroma reminiscent of divine rose garlands. Ideal for daily puja, meditation, and feminine spiritual spaces, creating a serene and soothing ambience.`,
      },
      {
        title: "Sandal",
        short: "Classic woody, sacred aroma",
        desc: `A classic sacred woody fragrance revered in Vedic rituals. Its pure sandal aroma enhances focus and clarity, perfect for homams, poojas, and deep spiritual practice.`,
      },
      {
        title: "Sacred Resin",
        short: "Resinous temple-style fragrance",
        desc: `A rich temple-style resin fragrance known for its purifying qualities. It creates a sacred ceremonial aura, perfect for rituals, archana, and cleansing the spiritual environment.`,
      },
      {
        title: "Javathu",
        short: "Rich, distinctive devotional fragrance",
        desc: `A rich devotional aroma reflecting Tamil Nadu's aromatic heritage. Deep and traditional, it helps you connect with cultural roots and adds a meaningful spiritual touch.`,
      },
    ];

    // elements
    const viewer = document.getElementById("viewer");
    const imgEl = document.getElementById("viewerImg");
    const captionEl = document.getElementById("viewerCaption");
    const prevBtn = document.getElementById("viewerPrev");
    const nextBtn = document.getElementById("viewerNext");
    const page3 = viewer;
    const titleEl = document.getElementById("flavorTitle");
    const shortEl = document.getElementById("flavorShort");
    const descEl = document.getElementById("flavorDesc");

    if (!imgEl || !captionEl) return;

    // preload images
    images.forEach((s) => {
      const i = new Image();
      i.src = s;
    });

    // helpers & state
    let index = 0;
    let currentDirection = "next";
    let autoSlideInterval = null;
    let isAutoSliding = true;
    let isAnimating = false;

    function norm(i) {
      if (i < 0) return images.length - 1;
      if (i >= images.length) return 0;
      return i;
    }

    function renderInfo(i) {
      const p = profiles[i] || {};
      if (titleEl) titleEl.textContent = p.title || "";
      if (shortEl) shortEl.textContent = p.short || "";
      if (descEl) descEl.innerHTML = p.desc || "";
    }

    // Add CSS for smooth transitions
    function addSliderStyles() {
      const style = document.createElement("style");
      style.textContent = `
        #viewerImg {
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                     transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        #flavorTitle, #flavorShort, #flavorDesc {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        #viewer {
          transition: background 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `;
      document.head.appendChild(style);
    }

    // Simple smooth slide animation
    async function goTo(newIndex, direction = "next") {
      if (isAnimating) return;
      isAnimating = true;

      newIndex = norm(newIndex);
      const isNext = direction === "next";

      // Set initial transform for slide effect
      imgEl.style.opacity = "0.7";
      imgEl.style.transform = isNext
        ? "translateX(20px) scale(0.98)"
        : "translateX(-20px) scale(0.98)";

      // Fade out text
      if (titleEl) titleEl.style.opacity = "0";
      if (shortEl) shortEl.style.opacity = "0";
      if (descEl) descEl.style.opacity = "0";

      // Update background gradient
      // if (page3) page3.style.background = bgGradients[newIndex];

      // Wait for fade out
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Update content
      index = newIndex;
      imgEl.src = images[index];
      imgEl.alt = "Gallery image " + (index + 1);
      captionEl.textContent = `Image ${index + 1} of ${images.length}`;
      renderInfo(index);

      // Prepare for fade in with opposite direction
      imgEl.style.transform = isNext
        ? "translateX(-20px) scale(0.98)"
        : "translateX(20px) scale(0.98)";

      // Wait a tiny bit for image to start loading
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Animate in
      imgEl.style.opacity = "1";
      imgEl.style.transform = "translateX(0) scale(1)";

      // Fade in text with slight delay
      setTimeout(() => {
        if (titleEl) {
          titleEl.style.opacity = "1";
          titleEl.style.transform = "translateY(0)";
        }
      }, 100);

      setTimeout(() => {
        if (shortEl) {
          shortEl.style.opacity = "1";
          shortEl.style.transform = "translateY(0)";
        }
      }, 200);

      setTimeout(() => {
        if (descEl) {
          descEl.style.opacity = "1";
          descEl.style.transform = "translateY(0)";
        }
      }, 300);

      // Reset animation state
      setTimeout(() => {
        isAnimating = false;
      }, 600);
    }

    // auto-slide logic
    function autoSlide() {
      if (isAnimating) return;

      if (currentDirection === "next" && index === images.length - 1) {
        currentDirection = "prev";
        goTo(index - 1, currentDirection);
      } else if (currentDirection === "prev" && index === 0) {
        currentDirection = "next";
        goTo(index + 1, currentDirection);
      } else {
        if (currentDirection === "next") goTo(index + 1, currentDirection);
        else goTo(index - 1, currentDirection);
      }
    }

    function startAutoSlide() {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(autoSlide, 3000);
      isAutoSliding = true;
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
      isAutoSliding = false;
    }

    function toggleAutoSlide() {
      if (isAutoSliding) stopAutoSlide();
      else startAutoSlide();
    }

    // Manual controls
    const prev = () => {
      if (isAnimating) return;
      currentDirection = "prev";
      goTo(index - 1, currentDirection);
      stopAutoSlide();
      startAutoSlide();
    };

    const next = () => {
      if (isAnimating) return;
      currentDirection = "next";
      goTo(index + 1, currentDirection);
      stopAutoSlide();
      startAutoSlide();
    };

    if (prevBtn) prevBtn.addEventListener("click", prev);
    if (nextBtn) nextBtn.addEventListener("click", next);

    // pause on hover
    if (viewer) {
      viewer.addEventListener("mouseenter", stopAutoSlide);
      viewer.addEventListener("mouseleave", () => {
        if (isAutoSliding) startAutoSlide();
      });
      viewer.addEventListener("touchstart", stopAutoSlide, { passive: true });
    }

    // keyboard control
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === " " || e.key === "Spacebar") toggleAutoSlide();
    });

    // swipe handling
    let startX = null;
    const threshold = 40;
    if (imgEl) {
      imgEl.addEventListener(
        "touchstart",
        (e) => {
          startX = e.touches[0].clientX;
          stopAutoSlide();
        },
        { passive: true }
      );

      imgEl.addEventListener(
        "touchend",
        (e) => {
          if (startX === null || isAnimating) return;
          const endX = e.changedTouches[0].clientX;
          const dx = endX - startX;
          if (dx > threshold) prev();
          else if (dx < -threshold) next();
          startX = null;
          if (isAutoSliding) setTimeout(startAutoSlide, 1000);
        },
        { passive: true }
      );
    }

    // Initialize the gallery
    function initializeGallery() {
      // Add CSS styles
      addSliderStyles();

      // Set initial state
      index = 0;
      imgEl.src = images[0];
      imgEl.alt = "Gallery image 1";
      captionEl.textContent = `Image 1 of ${images.length}`;

      // Set initial styles for smooth entrance
      imgEl.style.opacity = "0";
      imgEl.style.transform = "translateY(20px) scale(0.95)";

      // if (page3) {
      //   page3.style.background = bgGradients[0];
      //   page3.style.opacity = "0";
      // }

      if (titleEl) titleEl.style.opacity = "0";
      if (shortEl) shortEl.style.opacity = "0";
      if (descEl) descEl.style.opacity = "0";

      renderInfo(0);

      // Animate in
      setTimeout(() => {
        imgEl.style.opacity = "1";
        imgEl.style.transform = "translateY(2) scale(2)";

        if (page3) page3.style.opacity = "1";
      }, 100);

      setTimeout(() => {
        if (titleEl) titleEl.style.opacity = "1";
      }, 300);

      setTimeout(() => {
        if (shortEl) shortEl.style.opacity = "1";
      }, 400);

      setTimeout(() => {
        if (descEl) descEl.style.opacity = "1";

        // Start auto-slide
        setTimeout(() => {
          startAutoSlide();
        }, 500);
      }, 500);
    }

    // Start the gallery
    initializeGallery();
  })();

  // ---------- About section animations & stagger ----------
  (function initAboutAnimations() {
    const aboutSection = document.querySelector(".about-section");
    if (!aboutSection || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animated");
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(aboutSection);

    // stagger delays
    const pointCards = document.querySelectorAll(".point-card");
    pointCards.forEach(
      (card, i) => (card.style.animationDelay = `${0.3 + i * 0.1}s`)
    );

    const highlightCards = document.querySelectorAll(".highlight-card");
    highlightCards.forEach(
      (card, i) => (card.style.animationDelay = `${0.5 + i * 0.1}s`)
    );
  })();

  // ---------- scrollToContact helper ----------
  window.scrollToContact = function scrollToContact() {
    const contactSection =
      document.getElementById("contact") || document.querySelector("footer");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // fallback toast
    const alertDiv = document.createElement("div");
    alertDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg,#7c3aed 0%, #06b6d4 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
    `;
    alertDiv.innerHTML = "Contact section coming soon!";
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.style.animation = "slideOut 0.3s ease-out forwards";
      setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
  };

  // ---------- Inject slideIn/slideOut styles (kept) ----------
  (function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideIn { from { transform: translateX(100%); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
      @keyframes slideOut { from { transform: translateX(0); opacity: 1 } to { transform: translateX(100%); opacity: 0 } }
      .about-section .point-card, .about-section .highlight-card { opacity: 0; animation: fadeInUp 0.6s ease-out forwards; }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
    `;
    document.head.appendChild(style);
  })();
}); // end DOMContentLoaded
