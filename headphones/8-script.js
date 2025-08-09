const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu').querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && e.target !== menuToggle) {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  }
});

