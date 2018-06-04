var aboutCarousel = $('.about-cards-carousel');

aboutCarousel.owlCarousel ({
  loop: false,
  nav: false,
  dots: true,
  autoWidth: true,
  margin: 38,
  responsive:{
    0:{
      items: 1,
      autoWidth: true,
      center: true,
      loop: true
    },
    1221:{
      items: 3
    }
  }
});

aboutCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='about-navigation-controls'></div>");
});
