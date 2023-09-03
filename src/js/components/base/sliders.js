import $ from 'jquery'
import Swiper, { Autoplay, EffectFade, FreeMode, Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination, EffectFade, Autoplay, FreeMode]);

export default function sliders() {
  const slidersAbout = $('.slider-about');


    const swiper = new Swiper('.slider-about', {
    slidesPerView: 'auto',
    loop: true,
    effect: 'fade',
    speed: 1800,
    fadeEffect: {
      crossFade: true
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  const containerHistory = document.querySelector('.pageHistory__slider');

  if (containerHistory) {
    const slider = containerHistory.querySelector('.slider-history');
    const prev = containerHistory.querySelector('.pageHistory__pagination--prev');
    const next = containerHistory.querySelector('.pageHistory__pagination--next');

    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      speed: 1800,
      spaceBetween: 15,
      freeMode: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      breakpoints: {
        // when window width is >= 320px
        768: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },

      },

      navigation: {
        nextEl: next,
        prevEl: prev,
      },

    });
  }
}
