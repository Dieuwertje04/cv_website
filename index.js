// CV website

// Sticky header effect
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header_container");
    if (window.scrollY > 50) header.classList.add("sticky");
    else header.classList.remove("sticky");
  });
});

// Section observer for navigation bar
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        const id = entry.target.id;
        document.querySelector(`.navbar a[href="#${id}"]`).classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "-70px 0px -70px 0px"
  }
);

sections.forEach(section => observer.observe(section));
