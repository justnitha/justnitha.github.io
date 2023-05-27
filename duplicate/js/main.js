/*let slideIndex = 1;
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
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    let x;
    let slidess = document.getElementsByClassName("mySlides1");
    if (n > slidess.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidess.length}
    for (x = 0; x < slidess.length; x++) {
      slidess[x].style.display = "none";
    }
    slidess[slideIndex-1].style.display = "block";
}*/

/*Script slideshow*/
let slideIndex = [1,1,1];
let slideId = ["mySlides", "mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
/*Script Untuk NAvbar*/
const buttonToogle =document.querySelector('.buttonToogle')
const mobileMenu = document.querySelector('.mobileMenu')

buttonToogle.addEventListener('click', function(){
    mobileMenu.classList.toggle('hidden');
})