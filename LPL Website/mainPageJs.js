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

function newDoc1(){
	window.location.assign("Student1.html")
}
function newDoc2(){
	window.location.assign("Student2.html")
}
function newDoc3(){
	window.location.assign("Student3.html")
}
function newDoc4(){
	window.location.assign("Student4.html")
}


var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
}







