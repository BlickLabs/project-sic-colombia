function typed1() {
  var typed1 = new Typed('.typed1', {
    strings: ["Más de 25 años resolviendo necesidades en Tecnología de Cómputo ^2000"],
    showCursor: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed1.destroy();
    }
  });
}

function typed2() {
  var typed2 = new Typed('.typed2', {
    strings: ["Expertos en reparación de equipos de cómputo ^2000"],
    showCursor: false,
    loop: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed2.destroy();
    }
  });
}

function typed3() {
  var elementt = document.getElementsByClassName('typed3')[1];
  var typed3 = new Typed(elementt, {
    strings: ["Técnicos especializados en diversas áreas de T.I. ^2000"],
    showCursor: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed3.destroy();
    }
  });
}

function typed4() {
  var elementt = document.getElementsByClassName('typed4')[1];
  var typed4 = new Typed(elementt, {
    strings: ['Soluciones a la media de cada cliente ^2000'],
    showCursor: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed4.destroy();
    }
  });
}

function typed5() {
  var elementt = document.getElementsByClassName('typed5')[1];
  var typed5 = new Typed(elementt, {
    strings: ['Amplia cobertura en América Latina ^2000'],
    showCursor: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed5.destroy();
    }
  });
}

//English version

function typed1En() {
  var typed1en = new Typed('.typed1en', {
    strings: ["Over 25 years supporting the technological markets for the leading brands in the industry ^2000"],
    showCursor: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed1en.destroy();
    }
  });
}

function typed2En() {
  var typed2en = new Typed('.typed2en', {
    strings: ["High expertise in computer solutions ^2000"],
    showCursor: false,
    loop: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed2en.destroy();
    }
  });
}

function typed3En() {
  var elementt = document.getElementsByClassName('typed3en')[1];
  var typed3en = new Typed(elementt, {
    strings: ["Certified technicians ^2000"],
    showCursor: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed3en.destroy();
    }
  });
}

function typed4En() {
  var elementt = document.getElementsByClassName('typed4en')[1];
  var typed4en = new Typed(elementt, {
    strings: ['Customised solutions for each customer need ^2000'],
    showCursor: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed4en.destroy();
    }
  });
}

function typed5En() {
  var elementt = document.getElementsByClassName('typed5en')[1];
  var typed5en = new Typed(elementt, {
    strings: ['Wide coverage in Latin America ^2000'],
    showCursor: false,
    typeSpeed: 35,
    startDelay: 700,
    onComplete: function (self) {
      homeCoverCarousel.trigger('next.owl.carousel');
      typed5en.destroy();
    }
  });
}

var homeCoverCarousel = $('.home-cover-carousel');

homeCoverCarousel
.on('changed.owl.carousel', function(event) {
  console.log(event.item.index);
   if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/project-sic-colombia/index.html' || window.location.pathname === '/project-sic-colombia/') {
    if (event.item.index === 0 || event.item.index === 3) {
      typed1();
     } else if (event.item.index === 4) {
      typed2();
     } else if (event.item.index === 5) {
      typed3();
     } else if (event.item.index === 6) {
      typed4();
     } else if (event.item.index === 7) {
      typed5();
     }
   }

   if (window.location.pathname === '/index-en.html' || window.location.pathname === '/project-sic-colombia/index-en.html') {
    if (event.item.index === 0 || event.item.index === 3) {
      typed1En();
     } else if (event.item.index === 4) {
      typed2En();
     } else if (event.item.index === 5) {
      typed3En();
     } else if (event.item.index === 6) {
      typed4En();
     } else if (event.item.index === 7) {
      typed5En();
     }
   }
   
})
.owlCarousel ({
  loop: true,
  nav: false,
  dots: true,
  mouseDrag: false,
  touchDrag: false,
  smartSpeed: 1500,
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
