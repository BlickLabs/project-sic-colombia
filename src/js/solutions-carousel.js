var solutionsCarousel = $('.solutions-carousel');
var solutionsCarouselMobile = $('.solutions-carousel-mobile');

solutionsCarousel.owlCarousel ({
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
      items:1
    }
  }
});

solutionsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='solutions-navigation-controls'></div>");
});



solutionsCarouselMobile.owlCarousel ({
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
      items:1
    }
  }
});

solutionsCarouselMobile.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='solutions-navigation-controls'></div>");
});
