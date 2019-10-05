var logosHomeCarousel = $('.home-clients-carousel');

logosHomeCarousel.owlCarousel({
  loop: true,
  center: false,
  autoplay: true,
  autoplayTimeout:3000,
  autoWidth: true,
  margin: 0,
  nav: false,
  dots: false,
  navText: ['<img class="navigation-icon" src="img/icons/arrow-blue-left.png" />', '<img class="navigation-icon" src="img/icons/arrow-blue-right.png" />'],
})