var homeCoverCarousel = $('.home-cover-carousel');

homeCoverCarousel.owlCarousel ({
  loop: false,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 700,
  responsive:{
    0:{
      items:1
    },
    700:{
      items: 1
    },
    880: {
      items: 1
    },
    1000:{
      items:1
    }
  }
});

homeCoverCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-navigation-controls'></div>");
});
