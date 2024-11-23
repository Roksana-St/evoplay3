import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperContainer = document.querySelector('.swiper.swiper-one');
export const BUTTON_NEXT = document.querySelector('.button-next-svg');
export const BUTTON_PREV = document.querySelector('.button-prev');

export const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard, Pagination],
  navigation: {
    nextEl: BUTTON_NEXT,
    prevEl: BUTTON_PREV,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    //TODO can be use for custom pagination
    // renderBullet: (index, className) =>
    //   `<span class="bulletActive"></span><span class="bullet"></span>`,
  },

  direction: 'horizontal',
  autoHeight: false,
  autoWidth: false,
  watchOverflow: false,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});

swiper.update();

const updateButtonState = (button, disabled) => {
  if (disabled) {
    button.style.opacity = '0.5';
    button.style.cursor = 'not-allowed';
  } else {
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
  }
};

const nextObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = BUTTON_NEXT.classList.contains('swiper-button-disabled');
      updateButtonState(BUTTON_NEXT, disabled);
    }
  });
});

nextObserver.observe(BUTTON_NEXT, { attributes: true });

const prevObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = BUTTON_PREV.classList.contains('swiper-button-disabled');
      updateButtonState(BUTTON_PREV, disabled);
    }
  });
});

prevObserver.observe(BUTTON_PREV, { attributes: true });
