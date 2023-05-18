//multi text
var typingEffect = new Typed(".multitext", {
    strings : ["Coder", "Project", "Designer","Student","Portofolio"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})
var typingEffect = new Typed(".multitext2", {
    strings : ["Coder", "Project", "Designer","Student","Portofolio"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})
//scrool
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + 'px';

});