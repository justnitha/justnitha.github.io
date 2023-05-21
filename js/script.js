//multi text
var typingEffect = new Typed(".multitext", {
    strings : ["Creative Design", "Digital Marketing","Student","My Portofolio","Web Devolepment"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})

//scrool
// let text = document.getElementById('text');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     text.style.marginTop = value * 1.5 + 'px';

// });

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

$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $('i').css({
        "opacity":"1", "pointer-events":"auto"
      });
    }else{
      $('i').css({
        "opacity":"0", "pointer-events":"none"
      });
    }
  });
  $('i').click(function(){
    $('html').animate({scrollTop:0},500)
  });
});

// card
$(document).ready(function() {
    
  var s_round = '.s_round';
  
  $(s_round).hover(function() {
    $('.b_round').toggleClass('b_round_hover');
    return false;
  });
  
  $(s_round).click(function() {
    $('.flip_box').toggleClass('flipped');
    $(this).addClass('s_round_click');
    $('.s_arrow').toggleClass('s_arrow_rotate');
    $('.b_round').toggleClass('b_round_back_hover');
    return false;
  });
  
  $(s_round).on('transitionend', function() {
    $(this).removeClass('s_round_click');
    $(this).addClass('s_round_back');
    return false;
  });
});
$(document).ready(function() {
    
  var s_round2 = '.s_round2';
  
  $(s_round2).hover(function() {
    $('.b_round2').toggleClass('b_round_hover2');
    return false;
  });
  
  $(s_round2).click(function() {
    $('.flip_box2').toggleClass('flipped');
    $(this).addClass('s_round_click2');
    $('.s_arrow2').toggleClass('s_arrow_rotate2');
    $('.b_round2').toggleClass('b_round_back_hover2');
    return false;
  });
  
  $(s_round2).on('transitionend', function() {
    $(this).removeClass('s_round_click2');
    $(this).addClass('s_round_back2');
    return false;
  });
});