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
