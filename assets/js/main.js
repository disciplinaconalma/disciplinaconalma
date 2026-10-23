/* ============================================
   DISCIPLINA CON ALMA — INTERACCIONES PRINCIPALES
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- 1. AÑO DINÁMICO EN EL FOOTER ----------
  const yearElements = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);

  // ---------- 2. SCROLL SUAVE EN ENLACES INTERNOS ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- 3. ANIMACIÓN DE APARICIÓN AL HACER SCROLL ----------
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animar').forEach(el => observer.observe(el));

  // ---------- 4. MENÚ MÓVIL (TOGGLE) ----------
  const navbar = document.querySelector('.navbar');
  const menu = document.querySelector('.navbar__menu');

  if (navbar && menu && !document.querySelector('.navbar__toggle')) {
    const toggle = document.createElement('button');
    toggle.classList.add('navbar__toggle');
    toggle.setAttribute('aria-label', 'Abrir menú');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    navbar.querySelector('.navbar__contenedor').appendChild(toggle);

    toggle.addEventListener('click', () => {
      menu.classList.toggle('abierto');
      toggle.classList.toggle('activo');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('abierto');
        toggle.classList.remove('activo');
      });
    });
  }

  // ---------- 5. EFECTO NAVBAR AL HACER SCROLL ----------
  const navbarEl = document.querySelector('.navbar');
  if (navbarEl) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbarEl.classList.add('scrolled');
      } else {
        navbarEl.classList.remove('scrolled');
      }
    });
  }

});