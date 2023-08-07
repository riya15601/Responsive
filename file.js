let burger= document.querySelector('.burger');
let navbar= document.querySelector('.navbar');
let navLeft= document.querySelector('.nav-left');
let navRight= document.querySelector('.nav-right');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    navLeft.classList.toggle('v-class');
    navRight.classList.toggle('v-class');
});