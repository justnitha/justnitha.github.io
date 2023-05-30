//script offcanvas navbar
/*Script Untuk NAvbar*/
const buttonToogle =document.querySelector('.buttonToogle')
const mobileMenu = document.querySelector('.mobileMenu')

buttonToogle.addEventListener('click', function(){
    mobileMenu.classList.toggle('hidden');
})
//multi text
var typingEffect = new Typed(".multitext", {
  strings : ["Designer","Devoloper"],
  typeSpeed : 50,
  backSpeed : 80,
  backDelay : 1500,
});
//scrool
$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 200){
      $('#main').css({
        "background":"white","t transition":"0.8s",
      });
    }else{
      $('#main').css({
        "background":"none"
      });
    }
  });
});

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
};

// Script untuk Lastest Project
//getting all required elements
const gallery  = document.querySelectorAll(".iconn"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");
window.onload = ()=>{
  for (let i = 0; i < gallery.length; i++) {
    //meneruskan total panjang img ke variabel totalImg
    let newIndex = i; //pmeneruskan nilai i ke variabel newIndex
    let clickedImgIndex; //creating new variable
      gallery[i].onclick = () =>{
        clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
        function preview(){
         //passing current img index to currentImg varible with adding +1
          let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
            previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
              prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
              nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
              newIndex--; //decrement index
              if(newIndex == 0){
                preview(); 
                prevBtn.style.display = "none"; 
              }else{
                preview();
                nextBtn.style.display = "block";
              } 
            }
            nextBtn.onclick = ()=>{ 
              newIndex++; //increment index
              if(newIndex >= gallery.length - 1){
                  preview(); 
                  nextBtn.style.display = "none";
              }else{
                  preview(); 
                  prevBtn.style.display = "block";
              }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflowY = "scroll";
            }
        }
        
    } 
}
var splides = new Splide( '.splide', {
  perPage: 2,
   rewind : true,
   
} );

splides.mount();