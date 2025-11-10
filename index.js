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
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {threshold: 0.6} // triggers when 60% of a section is visible
);

sections.forEach(section => observer.observe(section));