document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('backdrop');

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    backdrop.classList.toggle('is-open');
  });
});

mobileMenu.addEventListener('click', () => {
  const isBurgerMenuOpen = burgerMenu.classList.contains('is-open');
  const isMobileMenuOpen = mobileMenu.classList.contains('is-open');
  const isBackdropOpen = backdrop.classList.contains('is-open');

  if ((isBurgerMenuOpen, isMobileMenuOpen, isBackdropOpen)) {
    burgerMenu.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    backdrop.classList.remove('is-open');
  }
});
