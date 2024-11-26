import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-box', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.button-nex',
      prevEl: '.button-pre',
    },
    loop: false,
    on: {
      slideChange: function () {
        const realIndex = this.realIndex;
        const totalSlides = this.slides.length;

        document
          .querySelector('.button-pre')
          .classList.toggle('swiper-button-disabled', realIndex === 0);
        document
          .querySelector('.button-nex')
          .classList.toggle(
            'swiper-button-disabled',
            realIndex === totalSlides - 1
          );
      },
    },
  });

  document.querySelector('.button-pre').classList.add('swiper-button-disabled');
});
