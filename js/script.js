const toggle = document.getElementById("darkModeToggle");
const html = document.documentElement;

const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);

toggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 60;
      const targetPosition = target.offsetTop - offset;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  });
});
