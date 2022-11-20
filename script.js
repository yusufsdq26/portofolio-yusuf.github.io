const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const li = document.querySelectorAll('li');



menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});



li.forEach((menu) => {
    menu.addEventListener('click', function(){
   nav.classList.remove('slide');
menuToggle.checked = false;
 })
 });