document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.features-list li');

  const $_border_ocean_color = '#89caba';
  const $_border_yellow_color = '#fff788';
  const $_border_green_color = '#a9c562';
  const $_border_orang_color = '#fdc898';
  const $_border_pink_color = '#f2a7c0';

  const colors = [
    $_border_ocean_color,
    $_border_yellow_color,
    $_border_green_color,
    $_border_orang_color,
    $_border_pink_color,
  ];

  listItems.forEach((item, index) => {
    item.style.border = `2px solid ${colors[index]}`;
    item.style.borderRadius = '8px';

    const icon = item.querySelector('.features-icons');
    if (icon) {
      icon.style.backgroundColor = colors[index];
      icon.style.padding = '4px';
      icon.style.borderRadius = '50%';
    }
  });
});
