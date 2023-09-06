import Swiper, { Autoplay, EffectFade, FreeMode, Navigation, Pagination, Scrollbar } from 'swiper'
Swiper.use([Navigation, Pagination, EffectFade, Autoplay, FreeMode, Scrollbar]);

export default function sliders() {
  sliderAbout();
  sliderAlso()
  sliderHistory()
  sliderHome()
}

function sliderAbout() {
  const swiper = new Swiper('.slider-about', {
    slidesPerView: 'auto',
    loop: true,
    effect: 'fade',
    speed: 1500,
    fadeEffect: {
      crossFade: true
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
}

function sliderHistory() {

  const containerHistory = document.querySelector('.pageHistory__slider');

  if (containerHistory) {
    const slider = containerHistory.querySelector('.slider-history');
    const prev = containerHistory.querySelector('.pageHistory__pagination--prev');
    const next = containerHistory.querySelector('.pageHistory__pagination--next');

    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      speed: 1500,
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
            dynamicBullets: false,
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

function sliderHome() {
  const containerHome = document.querySelector('.pageHome__slider');

  if (containerHome) {
    const slider = containerHome.querySelector('.home-slider');
    const prev = containerHome.querySelector('.pageHome__slider--prev');
    const next = containerHome.querySelector('.pageHome__slider--next');


    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      speed: 1500,
      fadeEffect: {
        crossFade: true
      },

      navigation: {
        nextEl: next,
        prevEl: prev,
      },

      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
    });
  }

}

function sliderAlso() {

  const containerAlso = document.querySelector('.pageProduct__also');

  if (containerAlso) {
    const slider = containerAlso.querySelector('.also-slider');

    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 70,
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      breakpoints: {

        768: {
          spaceBetween: 0,
          slidesPerView: 5,
        },

      },



    });

  }
}
