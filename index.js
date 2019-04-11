const burg = document.querySelector("#hamburger");
const menu = document.querySelector("#navlinks");

function animateMenuIcon()
{
   burg.classList.toggle('animate');   
   showNav();
}

function showNav()
{
   menu.classList.toggle('toggle');
   
}

burg.addEventListener('click',animateMenuIcon,false);