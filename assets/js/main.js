document.addEventListener('DOMContentLoaded', () => {
  // --- LÓGICA DEL MENÚ HAMBURGUESA ---
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navbarMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
      });
    });
  }

  // --- AÑO DINÁMICO EN EL FOOTER ---
  const yearElements = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);
});