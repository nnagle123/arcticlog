window.addEventListener('scroll', function(){
const mainNav = document.getElementById("mainnav");

if (window.pageYOffset > 0){
  mainNav.style.height = "40px";
  mainNav.classList.add("bg-black");
  mainNav.classList.add("txt-white");
} else {
  mainNav.style.height = "50px";
  mainNav.classList.remove("bg-black");
  mainNav.classList.remove("txt-white");
}

});











var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 


