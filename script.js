// =================================
// BASIC DRINK · script.js
// =================================

// Navbar opaca al hacer scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 50) {
    navbar.style.background = 'rgba(5, 5, 5, 0.92)';
  } else {
    navbar.style.background = 'rgba(5, 5, 5, 0.7)';
  }
  lastScroll = current;
});

// Cerrar menú móvil al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navLinks');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
  });
});

// Animación de aparición al hacer scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplicar animación a las cards principales
document.querySelectorAll('.espacio-card, .hub-feature, .precio-card, .equipo-card, .agenda-day, .liga-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.6s ease-out ${i * 0.05}s, transform 0.6s ease-out ${i * 0.05}s`;
  observer.observe(el);
});
