// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
const html = document.documentElement;

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);

toggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

// Smooth scroll offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
