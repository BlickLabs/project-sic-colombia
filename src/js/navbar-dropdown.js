function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

function myFunctionHamburger() {
  document.getElementById("myDropdownHamburger").classList.toggle("show");
}

function myFunction2Hamburger() {
  document.getElementById("myDropdown2Hamburger").classList.toggle("show");
}

function myFunction3Hamburger() {
  document.getElementById("myDropdown3Hamburger").classList.toggle("show");
}

(function () {
  window.onclick = function(event) {
    if (!event.target.matches('.open-dropdown')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
})();
