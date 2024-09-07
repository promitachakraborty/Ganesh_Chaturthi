// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  const links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
