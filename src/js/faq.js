document.querySelectorAll('.faq-btn').forEach(button => {
  button.addEventListener('click', function () {
    const panel = this.closest('.faq-item').querySelector('.faq-panel');
    const isOpen = panel.classList.contains('open');

    document.querySelectorAll('.faq-panel.open').forEach(openPanel => {
      if (openPanel !== panel) {
        openPanel.classList.remove('open');
        openPanel.previousElementSibling
          .querySelector('.faq-btn')
          .classList.remove('open');
        openPanel.previousElementSibling
          .querySelector('.faq-btn')
          .setAttribute('aria-expanded', 'false');
      }
    });

    panel.classList.toggle('open', !isOpen);
    this.classList.toggle('open', !isOpen);

    this.setAttribute('aria-expanded', !isOpen);
  });
});
