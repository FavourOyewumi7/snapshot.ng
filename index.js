const burg = document.querySelector("#hamburger");
const menu = document.querySelector("#navlinks");

function animateMenu()
{
   burg.classList.toggle('animate');
   menu.classList.toggle('open');   
}

burg.addEventListener('click',animateMenu,false);