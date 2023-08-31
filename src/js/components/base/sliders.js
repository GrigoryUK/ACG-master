import $ from 'jquery'
import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

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
}
