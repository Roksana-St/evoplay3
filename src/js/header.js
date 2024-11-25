document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-container');
  const burgerMenu = document.getElementById('burgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('backdrop');
  const body = document.body;
  const menuLinks = document.querySelectorAll('.nav-link');

  burgerMenu.addEventListener('click', () => {
    const isOpen = burgerMenu.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    backdrop.classList.toggle('is-open');

    // if (isOpen) {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // }

    body.style.overflow = isOpen ? 'hidden' : '';
  });

  backdrop.addEventListener('click', () => {
    burgerMenu.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    body.style.overflow = '';
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - header.offsetHeight,
          behavior: 'smooth',
        });
      }

      burgerMenu.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      body.style.overflow = '';
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
