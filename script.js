// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fade-in on scroll
const revealElements = document.querySelectorAll('.fade-up, .fade-in');

function reveal() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 120) {
      el.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Simple form action
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you — we will be in touch shortly.");
  e.target.reset();
});
