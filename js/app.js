// --- APP.JS ---

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project Loaded Successfully!");

  const btn = document.getElementById("clickBtn");

  btn.addEventListener("click", () => {
    alert("Button Clicked!");
  });
});

function animateCount(el, target, duration = 1400) {
  const start = 0;
  const startTime = performance.now();
  const end = parseFloat(target);

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * eased);
    el.textContent = end % 1 !== 0 ? (end * progress).toFixed(1) : current;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target; // ensure exact final value
  }
  requestAnimationFrame(tick);
}

// Observe when counters enter viewport
const counters = document.querySelectorAll(".counter .num");
const options = { threshold: 0.5 };

const obs = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const numEl = entry.target;
    const parent = numEl.closest(".counter");
    // add float class to some cards for variety
    parent.classList.add("float");
    if (!numEl.dataset.animated) {
      const target = numEl.dataset.target || numEl.textContent;
      animateCount(numEl, target);
      numEl.dataset.animated = "true";
    }
    // stop observing that element
    observer.unobserve(numEl);
  });
}, options);

counters.forEach((c) => obs.observe(c));

const menuToggle = document.getElementById("menu-toggle");
const menuLabel = document.querySelector(".menu-label");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

// Toggle menu open/close
menuToggle.addEventListener("change", () => {
  const open = menuToggle.checked;

  menuLabel.setAttribute("aria-expanded", open);
  mobileMenu.style.display = open ? "block" : "none";
});

// Close menu when any mobile link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // close the menu
    menuToggle.checked = false;
    menuLabel.setAttribute("aria-expanded", "false");
    mobileMenu.style.display = "none";
  });
});

window.addEventListener("DOMContentLoaded", function () {
  (function () {
    /* --- paste your entire existing IIFE contents here, unchanged --- */
  })();
});

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

storyData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("story-card", "fade-up");
  card.innerHTML = `
      <div class="story-number">${item.number}</div>
      <div class="story-title">${item.title}</div>
      <div class="story-line"></div>
      <p class="story-text">${item.text}</p>
    `;
  container.appendChild(card);
});

summaryBox.innerText = summaryText;

/* Scroll Reveal Animation */
const revealElements = document.querySelectorAll(".fade-up");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => revealObserver.observe(el));

const header = document.querySelector(".site-header");
const firstSection = document.querySelector("main > section:nth-of-type(1)");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // First page visible → show header
        header.style.opacity = "1";
        header.style.pointerEvents = "auto";
      } else {
        // Scrolled away → hide header
        header.style.opacity = "0";
        header.style.pointerEvents = "none";
      }
    });
  },
  { threshold: 0.12 } // 40% of first section must be visible
);

observer.observe(firstSection);

(function () {
  // ---------- kept arrays ----------
  const images = [
    "./assets/images/Fragrances/1.png",
    "./assets/images/Fragrances/2.png",
    "./ChatGPT Image Dec 8, 2025, 09_52_25 PM.png",
    "./assets/images/Fragrances/4.png",
    "./assets/images/Fragrances/5.png",
    "./assets/images/Fragrances/6.png",
    "./assets/images/Fragrances/7.png",
    "./assets/images/Fragrances/8.png",
  ];
  const bgGradients = [
    "radial-gradient(circle,rgba(255,255,255,1) 0%, rgba(8,150,0,1) 82%)",
    "radial-gradient(circle,rgba(255, 255, 255, 1) 30%, rgba(255, 213, 0, 1) 82%)",
    "radial-gradient(circle,rgba(255,255,255,1) 0%, rgba(83,0,191,1) 82%)",
    "radial-gradient(circle,rgba(255,255,255,1) 20%, rgba(45,158,0,1) 82%)",
    "radial-gradient(circle,rgba(255, 255, 255, 1) 30%, rgba(189, 0, 79, 1) 82%)",
    "radial-gradient(circle,rgba(255,255,255,1) 30%, rgba(158,66,0,1) 100%)",
    "radial-gradient(circle,rgba(255,255,255,1) 30%, rgba(158,124,0,1) 100%)",
    "radial-gradient(circle,rgba(255,255,255,1) 30%, rgba(60,80,200,1) 100%)",
  ];

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
    desc: `A rich devotional aroma reflecting Tamil Nadu’s aromatic heritage. Deep and traditional, it helps you connect with cultural roots and adds a meaningful spiritual touch.`,
  },
];


  // ---------- elements ----------
  const viewer = document.getElementById("viewer");
  const imgEl = document.getElementById("viewerImg");
  const captionEl = document.getElementById("viewerCaption");
  const prevBtn = document.getElementById("viewerPrev");
  const nextBtn = document.getElementById("viewerNext");
  const page3 = document.getElementById("page3");
  const titleEl = document.getElementById("flavorTitle");
  const shortEl = document.getElementById("flavorShort");
  const descEl = document.getElementById("flavorDesc");

  let index = 0;
  let isAnimating = false;
  let idleTween = null;
  let autoSlideInterval = null;
  let currentDirection = "next"; // Track current direction for auto-slide
  let isAutoSliding = true; // Control auto-slide state

  // preload
  images.forEach((s) => {
    const i = new Image();
    i.src = s;
  });

  function norm(i) {
    if (i < 0) return images.length - 1;
    if (i >= images.length) return 0;
    return i;
  }
  function renderInfo(i) {
    const p = profiles[i] || {};
    titleEl.textContent = p.title || "";
    shortEl.textContent = p.short || "";
    descEl.innerHTML = p.desc || "";
  }

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // small idle movement
  function stopIdle() {
    if (idleTween) {
      try {
        idleTween.kill();
      } catch (e) {}
      idleTween = null;
      if (typeof gsap !== "undefined") gsap.set(imgEl, { clearProps: "all" });
    }
  }
  function startIdle() {
    stopIdle();
    if (prefersReduced || typeof gsap === "undefined") return;
    idleTween = gsap.to(imgEl, {
      y: "random(-3,3)",
      x: "random(-2,2)",
      rotation: "random(-0.5,0.5)",
      duration: 4.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      repeatRefresh: true,
    });
  }

  // utility: create a positioned clone of current image for the outgoing travel
  function createOutgoingClone(src) {
    const clone = imgEl.cloneNode(true);
    clone.src = src;
    clone.style.position = "absolute";
    clone.style.left = "50%";
    clone.style.top = "50%";
    clone.style.transform = "translate(-50%,-50%)";
    clone.style.width = "100%";
    clone.style.height = "100%";
    clone.style.objectFit = "contain";
    clone.style.zIndex = 50;
    clone.style.pointerEvents = "none";
    viewer.appendChild(clone);
    return clone;
  }

  // ensure perspective
  if (page3) page3.style.perspective = page3.style.perspective || "1100px";

  // MAIN: accepts direction "next" or "prev" to mirror animations
  function goTo(newIndex, direction = "next") {
    if (isAnimating) return;
    newIndex = norm(newIndex);

    if (prefersReduced || typeof gsap === "undefined") {
      index = newIndex;
      imgEl.src = images[index];
      imgEl.alt = "Gallery image " + (index + 1);
      captionEl.textContent = `Image ${index + 1} of ${images.length}`;
      if (page3) page3.style.background = bgGradients[index];
      renderInfo(index);
      return;
    }

    isAnimating = true;
    stopIdle();

    const isNext = direction === "next";
    const oldSrc = imgEl.src;
    const outgoing = createOutgoingClone(oldSrc);

    // prepare real image for incoming - set new src immediately but keep it offscreen & small on the correct side
    index = newIndex;
    if (page3) page3.style.background = bgGradients[index];
    imgEl.src = images[index];
    imgEl.alt = "Gallery image " + (index + 1);
    captionEl.textContent = `Image ${index + 1} of ${images.length}`;

    // starting X for incoming depends on direction
    const incomingStartX = isNext ? "120%" : "-120%";
    const outgoingFirstMoveX = isNext ? "40%" : "-40%";
    const outgoingSweepX = isNext ? "-120%" : "120%";
    const outgoingRotationStart = isNext ? 2 : -2;
    const outgoingRotationEnd = isNext ? -8 : 8;
    const incomingRotationStart = isNext ? 6 : -6;

    // set incoming initial state
    gsap.set(imgEl, {
      x: incomingStartX,
      y: 0,
      scale: 0.72,
      rotation: incomingRotationStart,
      opacity: 0,
    });

    // text prepare
    gsap.set([titleEl, shortEl, descEl], { y: 14, opacity: 0 });
    renderInfo(index);

    // timeline choreography
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        try {
          outgoing.remove();
        } catch (e) {}
        isAnimating = false;
        startIdle();
      },
    });

    // hide old text quickly (desc -> small -> title)
    tl.to(descEl, { y: -14, opacity: 0, duration: 0.14 }, 0);
    tl.to(shortEl, { y: -12, opacity: 0, duration: 0.12 }, 0.02);
    tl.to(titleEl, { y: -10, opacity: 0, duration: 0.12 }, 0.04);

    // OUTGOING clone: quick move to first side (right for next, left for prev)
    tl.to(
      outgoing,
      {
        x: outgoingFirstMoveX,
        duration: 0.18,
        rotation: outgoingRotationStart,
        scale: 1.02,
        ease: "power3.out",
      },
      0
    );

    // then sweep it across to the opposite side off-screen while shrinking and fading
    tl.to(
      outgoing,
      {
        x: outgoingSweepX,
        y: "-6%",
        scale: 0.6,
        opacity: 0,
        rotation: outgoingRotationEnd,
        duration: 0.34,
        ease: "power3.in",
      },
      "+=0.06"
    );

    // INCOMING: move real image from start side into center while scaling up
    tl.to(
      imgEl,
      {
        x: "0%",
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.44,
        ease: "expo.out",
      },
      "-=0.18"
    );

    // text entry order: title -> small -> desc (fast)
    tl.to(
      titleEl,
      { y: 0, opacity: 1, duration: 0.16, ease: "power3.out" },
      "-=0.12"
    );
    tl.to(
      shortEl,
      { y: 0, opacity: 1, duration: 0.14, ease: "power3.out" },
      "-=0.06"
    );
    tl.to(
      descEl,
      { y: 0, opacity: 1, duration: 0.16, ease: "power3.out" },
      "+=0.02"
    );
  }

  // Auto-slide function
  function autoSlide() {
    if (isAnimating) return;
    
    // Check if we're at the edges and need to reverse direction
    if (currentDirection === "next" && index === images.length - 1) {
      // Reached last image, reverse direction
      currentDirection = "prev";
      goTo(index - 1, currentDirection);
    } else if (currentDirection === "prev" && index === 0) {
      // Reached first image, reverse direction
      currentDirection = "next";
      goTo(index + 1, currentDirection);
    } else {
      // Continue in current direction
      if (currentDirection === "next") {
        goTo(index + 1, currentDirection);
      } else {
        goTo(index - 1, currentDirection);
      }
    }
  }

  // Start auto-slide
  function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000); // Every 2 seconds
    isAutoSliding = true;
  }

  // Stop auto-slide
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
    isAutoSliding = false;
  }

  // Toggle auto-slide
  function toggleAutoSlide() {
    if (isAutoSliding) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  }

  // Manual controls (pass direction and pause auto-slide temporarily)
  const prev = () => {
    currentDirection = "prev";
    goTo(index - 1, currentDirection);
    // Restart auto-slide with new direction
    stopAutoSlide();
    startAutoSlide();
  };
  
  const next = () => {
    currentDirection = "next";
    goTo(index + 1, currentDirection);
    // Restart auto-slide with new direction
    stopAutoSlide();
    startAutoSlide();
  };

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  // Pause auto-slide on hover
  viewer.addEventListener("mouseenter", stopAutoSlide);
  viewer.addEventListener("mouseleave", () => {
    if (isAutoSliding) startAutoSlide();
  });

  // Touch events for mobile
  viewer.addEventListener("touchstart", stopAutoSlide);
  viewer.addEventListener("touchend", () => {
    if (isAutoSliding) {
      // Wait 1 second before restarting auto-slide on touch devices
      setTimeout(startAutoSlide, 1000);
    }
  });

  // keyboard
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prev();
    }
    if (e.key === "ArrowRight") {
      next();
    }
    if (e.key === " " || e.key === "Spacebar") {
      // Space to toggle auto-slide
      toggleAutoSlide();
    }
  });

  // swipe
  let startX = null;
  const threshold = 40;
  imgEl.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    stopAutoSlide();
  }, {
    passive: true,
  });
  imgEl.addEventListener(
    "touchend",
    (e) => {
      if (startX === null) return;
      const endX = e.changedTouches[0].clientX;
      const dx = endX - startX;
      if (dx > threshold) {
        prev();
      } else if (dx < -threshold) {
        next();
      }
      startX = null;
      // Restart auto-slide after swipe
      if (isAutoSliding) {
        setTimeout(startAutoSlide, 1000);
      }
    },
    { passive: true }
  );

  // init
  if (prefersReduced || typeof gsap === "undefined") {
    index = 0;
    imgEl.src = images[0];
    if (page3) page3.style.background = bgGradients[0];
    renderInfo(0);
    startAutoSlide(); // Start auto-slide even without animations
  } else {
    gsap.set(imgEl, { opacity: 0, x: 0, scale: 1 });
    gsap.set([titleEl, shortEl, descEl], { opacity: 0, y: 12 });
    index = 0;
    imgEl.src = images[0];
    if (page3) page3.style.background = bgGradients[0];
    renderInfo(0);
    const intro = gsap.timeline({
      onComplete: () => {
        startAutoSlide(); // Start auto-slide after intro animation
      }
    });
    intro.to(imgEl, { opacity: 1, duration: 0.5, ease: "power3.out" }, 0);
    intro.to(titleEl, { y: 0, opacity: 1, duration: 0.18 }, "-=0.32");
    intro.to(shortEl, { y: 0, opacity: 1, duration: 0.14 }, "-=0.12");
    intro.to(descEl, { y: 0, opacity: 1, duration: 0.16 }, "+=0.03");
    intro.call(startIdle, null, "+=0.12");
  }
})();


document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-section");

  // Add scroll animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(aboutSection);

  // Stagger animation for point cards
  const pointCards = document.querySelectorAll(".point-card");
  pointCards.forEach((card, index) => {
    card.style.animationDelay = `${0.3 + index * 0.1}s`;
  });

  // Highlight cards animation
  const highlightCards = document.querySelectorAll(".highlight-card");
  highlightCards.forEach((card, index) => {
    card.style.animationDelay = `${0.5 + index * 0.1}s`;
  });
});

// Scroll to contact function
function scrollToContact() {
  const contactSection =
    document.getElementById("contact") || document.querySelector("footer");
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    // Fallback to alert with better UX
    const alertDiv = document.createElement("div");
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-1);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
      `;
    alertDiv.innerHTML = "Contact section coming soon!";
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.style.animation = "slideOut 0.3s ease-out forwards";
      setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
  }
}

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    .about-section .point-card,
    .about-section .highlight-card {
      opacity: 0;
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `;
document.head.appendChild(style);
