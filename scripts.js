// Set dark mode as default (no need to add class since root variables are dark by default)
const toggle = document.getElementById('theme-toggle');
toggle.textContent = '☀️';  // Sun emoji for dark mode

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');  // Toggle light mode instead of dark mode
  toggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
});

// Scroll animations
const sections = document.querySelectorAll('section');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
  
  lastScroll = currentScroll;
});
