// unutk bergerak
let Layer_1 = document.getElementById('Layer_1');
let Layer_2 = document.getElementById('Layer_2');
let awan1 = document.getElementById('awan1');
let awan2 = document.getElementById('awan2');
let awan3 = document.getElementById('awan3');
let awan4 = document.getElementById('awan4');
let rumput1 = document.getElementById('rumput1');
let rumput2 = document.getElementById('rumput2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    Layer_1.style.marginTop = value * 2.5 + 'px';
    awan1.style.left = value * -1 + 'px';
    awan2.style.left = value * -1 + 'px';
    awan3.style.left = value * 1 + 'px';
    awan4.style.left = value * 1 + 'px';
    rumput1.style.left = value * -1 + 'px';
    rumput2.style.left = value * 1 + 'px';
    Layer_2.style.marginTop = value * 1 + 'px';
    
});
// Scroll
//desktop
$(window).scroll(function() {
    if ($(this).scrollTop() >= 260) {
        $('#text1').css("display","none");
    } else {
        $('#text1').css("display","block");
    }
});
// Mobile
$(window).scroll(function() {
    if ($(this).scrollTop() >= 260) {
        $('#text2').css("display","none");
    } else {
        $('#text2').css("display","block");
    }
});

// image page chalenge 1
let circle = document.querySelector(".color-option");

circle.addEventListener("click", (e)=>{
  let target = e.target;
  if(target.classList.contains("circle")){
    circle.querySelector(".active").classList.remove("active");
    target.classList.add("active");
    document.querySelector(".main-images .active").classList.remove("active");
    document.querySelector(`.main-images .${target.id}`).classList.add("active");
  }
});
// image chalenge 2
let circle2 = document.querySelector(".color-option2");

circle2.addEventListener("click", (e)=>{
  let target = e.target;
  if(target.classList.contains("circle2")){
    circle2.querySelector(".active2").classList.remove("active2");
    target.classList.add("active2");
    document.querySelector(".main-images2 .active2").classList.remove("active2");
    document.querySelector(`.main-images2 .${target.id}`).classList.add("active2");
  }
});



