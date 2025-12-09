// --- APP.JS ---

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project Loaded Successfully!");

  const btn = document.getElementById("clickBtn");

  btn.addEventListener("click", () => {
    alert("Button Clicked!");
  });
});
