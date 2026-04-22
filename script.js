// Navbar solidifies on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Dynamic copyright year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${i * 40}ms`;
  observer.observe(el);
});

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const secObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navAnchors.forEach((a) => {
        a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--gold)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach((s) => secObserver.observe(s));
