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
    Layer_1.style.marginTop = value * 2 + 'px';
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

