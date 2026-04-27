// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Reveal animations
const revealElements = document.querySelectorAll('.fade-up, .fade-in');

function reveal() {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you — we’ll contact you shortly.");
  e.target.reset();
});
