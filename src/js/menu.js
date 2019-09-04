var last_known_scroll_position = 0;
var ticking = false;

var siteNavbar = document.querySelector('.navbar');
var navSeparator = document.querySelector('.navbar-separator');

//navbar-fixed-top
function doSomething(scroll_pos) {
  if (window.location.pathname === '/index.html' || window.location.pathname === '/index-en.html' || window.location.pathname === '/' || window.location.pathname === '/project-sic/index.html' || window.location.pathname === '/project-sic/index-en.html' || window.location.pathname === '/project-sic/') {
    if (scroll_pos > 30) {
      siteNavbar.classList.add('navbar-scroll');
      $('.navbar-logo').removeClass('show-icon');
      $('.navbar-logo-scroll').addClass('show-icon');
      navSeparator.style.backgroundColor = "#5275a7";
      $('.navbar-sections-title').addClass('navbar-sections-scroll');
      $('.navbar-dropdown-icon-scroll').addClass('show-icon');
      $('.navbar-dropdown-icon').removeClass('show-icon');
      $('.navbar-hamburger-icon-scroll').addClass('show-icon');
      $('.navbar-hamburger-icon').removeClass('show-icon');

    } else {
      siteNavbar.classList.remove('navbar-scroll');
      $('.navbar-logo').addClass('show-icon');
      $('.navbar-logo-scroll').removeClass('show-icon');
      navSeparator.style.backgroundColor = "#ffffff";
      $('.navbar-sections-title').removeClass('navbar-sections-scroll');
      $('.navbar-dropdown-icon-scroll').removeClass('show-icon');
      $('.navbar-dropdown-icon').addClass('show-icon');
      $('.navbar-hamburger-icon-scroll').removeClass('show-icon');
      $('.navbar-hamburger-icon').addClass('show-icon');
    }
  }
}

doSomething();

window.addEventListener('scroll', function(e) {
  if (e.view) {
    last_known_scroll_position = e.view.pageYOffset;
  }
  else {
    last_known_scroll_position = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});

window.addEventListener('scroll', function(e) {
  if (e.view) {
    last_known_scroll_position = e.view.pageYOffset;
  }
  else {
    last_known_scroll_position = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});

function showMenu() {
  document.querySelector('#menuContainer').style.width = '85%';
  document.querySelector('#hamburgerMenu').style.display = 'none';
}

function hideMenu() {
  document.querySelector('#menuContainer').style.width = '0%';
  document.querySelector('#hamburgerMenu').style.display = 'inline';
}

window.addEventListener('click', function(e) {
  if (!e.target.dataset.hasOwnProperty('attribute')) {
    hideMenu();
  }
});

/*Events of touchstart to mobile version*/

var showHamburger = document.querySelector('#hamburgerMenu');

showHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  showMenu();
});

var hideHamburger = document.querySelector('#hideHamburger');

hideHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  hideMenu();
});

/* Events of click to desktop version*/

showHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu();
});

hideHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  hideMenu();
});