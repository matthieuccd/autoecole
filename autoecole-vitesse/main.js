// Header scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .why-item, .review-card, .step').forEach(el => {
  observer.observe(el);
});

// Contact form
function handleForm(e) {
  e.preventDefault();
  document.querySelector('.contact-form').style.display = 'none';
  const success = document.getElementById('formSuccess');
  if (success) { success.classList.add('show'); }
}

// Stagger animation delay for grids
document.querySelectorAll('.cards-grid .card, .reviews-grid .review-card, .all-reviews-grid .review-card, .why-grid .why-item').forEach((el, i) => {
  el.style.animationDelay = `${i * 0.08}s`;
});
