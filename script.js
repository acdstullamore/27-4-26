// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// Simple contact form placeholder submit
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! We’ll contact you soon.');
  form.reset();
});
