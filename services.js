// Services
const SwiperService = new Swiper(".service", {
  slidesPerView: 1.15,
  spaceBetween: 20,
  centeredSlides: true,

  // 3D Coverflow
  effect: "coverflow",

  coverflowEffect: {
    rotate: 150,       // Rotation of side cards
    stretch: 0,      // Space between cards
    depth: 150,      // 3D depth
    modifier: 1.5,   // Effect strength
    scale: 0.95,     // Scale of side cards
    slideShadows: false,
  },

  breakpoints: {
    800: {
      slidesPerView: 2.2,
    },

    1000: {
      slidesPerView: 3,
    },

    1600: {
      slidesPerView: 3.2,
    },
  },

  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerGroup: 1,

  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
});