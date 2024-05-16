const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  breakpoints: {
    1280: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});
