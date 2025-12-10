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