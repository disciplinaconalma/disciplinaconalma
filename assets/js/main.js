document.addEventListener('DOMContentLoaded', () => {
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');
  const navbar = document.querySelector('.navbar');

  // 1. Lógica del Menú Móvil
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });

    navbarMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
      });
    });
  }

  // 2. Efecto de scroll para el Navbar (se queda fijo y cambia de fondo)
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 3. Actualizar el año en el footer
  const yearElements = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);
});