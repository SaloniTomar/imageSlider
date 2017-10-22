var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var image = document.getElementById("image");
    image.innerHTML="<img src='img"+n+".jpg'>";

}

