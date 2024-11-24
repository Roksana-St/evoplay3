document.querySelectorAll('.faq-btn').forEach(button => {
  button.addEventListener('click', function () {
    const panel = this.closest('.faq-item').querySelector('.faq-panel');
    const isOpen = panel.classList.contains('open');

    panel.classList.toggle('open', !isOpen);
    this.classList.toggle('open', !isOpen);

    this.setAttribute('aria-expanded', !isOpen);
  });
});
