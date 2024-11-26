import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance = null;

  function updateButtonStates(swiper) {
    const realIndex = swiper.realIndex;
    const totalSlides = swiper.slides.length;

    const prevButton = document.querySelector('.button-pre');
    const nextButton = document.querySelector('.button-nex');

    if (realIndex === 0) {
      prevButton.classList.add('swiper-button-disabled');
      prevButton.setAttribute('disabled', 'true');
    } else {
      prevButton.classList.remove('swiper-button-disabled');
      prevButton.removeAttribute('disabled');
    }

    if (realIndex === totalSlides - 1) {
      nextButton.classList.add('swiper-button-disabled');
      nextButton.setAttribute('disabled', 'true');
    } else {
      nextButton.classList.remove('swiper-button-disabled');
      nextButton.removeAttribute('disabled');
    }
  }

  function initSwiper() {
    if (window.innerWidth < 1200 && !swiperInstance) {
      swiperInstance = new Swiper('.swiper-box', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
          nextEl: '.button-nex',
          prevEl: '.button-pre',
        },
        loop: true,
        on: {
          slideChange: function () {
            updateButtonStates(this);
          },
        },
      });

      updateButtonStates(swiperInstance);
    } else if (window.innerWidth >= 1200 && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;

      const prevButton = document.querySelector('.button-pre');
      const nextButton = document.querySelector('.button-nex');
      prevButton.classList.remove('swiper-button-disabled');
      nextButton.classList.remove('swiper-button-disabled');
      prevButton.removeAttribute('disabled');
      nextButton.removeAttribute('disabled');
    }
  }

  initSwiper();

  window.addEventListener('resize', initSwiper);
});
