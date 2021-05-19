window.onscroll = function() {stickyEffect()};

var navbar = document.getElementById("container");
var sticky = navbar.offsetTop;

function stickyEffect() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}