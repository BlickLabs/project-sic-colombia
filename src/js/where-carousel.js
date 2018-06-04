var whereWeAreCarousel = $('.where-carousel');
var whereWeAreCarouselMobile = $('.where-carousel-mobile');
var wherePinsCarouselMobile = $('.where-pins-carousel-mobile');

whereWeAreCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />', '<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],
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
      items: 1
    }
  }
});

whereWeAreCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='where-carousel-navigation'></div>");
});



whereWeAreCarouselMobile.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />', '<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],
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
    1301:{
      items: 1
    }
  }
});

whereWeAreCarouselMobile.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='where-carousel-navigation'></div>");
});

wherePinsCarouselMobile.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />', '<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],
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
    1301:{
      items: 1
    }
  }
});

wherePinsCarouselMobile.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='where-pins-carousel-navigation-mobile'></div>");
});
