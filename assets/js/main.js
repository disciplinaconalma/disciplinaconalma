document.addEventListener('DOMContentLoaded', () => {
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');

  // Toggle del menú móvil
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('navbar__menu--active');
      navbarToggle.classList.toggle('navbar__toggle--active');
    });

    // Cerrar menú al hacer clic en un enlace
    navbarMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('navbar__menu--active');
        navbarToggle.classList.remove('navbar__toggle--active');
      });
    });
  }
});