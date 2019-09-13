const menuButton = document.querySelector(".menu-btn ");
const menuNavigation = document.querySelector(".menu-nav");

menuButton.addEventListener("click", toogleMenu);
function toogleMenu(evt){
    menuButton.classList.toggle('menu-btn_active');
    menuNavigation.classList.toggle('menu-nav_active');
}


  /*const sliderItem = document.querySelector('.slider-item1');
  const sliderItemToo = document.querySelector('.slider-item2');
  const sliderItemtree = document.querySelector('.slider-item3');

    sliderItem.addEventListener('click', numPressedFirst);
    function numPressedFirst(ev) {
        document.querySelector(".header").style.background ="url('../img/slider/1.jpg')";
    }
      sliderItemToo.addEventListener('click', numPressedSecond);
    function numPressedSecond(ev) {
        document.querySelector(".header").style.background ="url('../img/slider/2.jpg')";
    }
      sliderItemtree.addEventListener('click', numPressedTree);
    function numPressedTree(ev) {
        document.querySelector(".header").style.background ="url('../img/slider/3.jpg')";
    }*/

    /*const header = document.querySelector(".header");*/
const items = document.querySelectorAll(".slider-nav  li.slider-item");

items.forEach( li => li.addEventListener("click", itemPressed));

function itemPressed(ev){
    ev.preventDefault();
    if (items[0] === ev.target){
        document.querySelector("header").style.background ="url('../img/slider/1.jpg')";
    }
    else if (items[1] === ev.target){
        document.querySelector("header").style.background ="url('../img/slider/2.jpg')";
}
else
document.querySelector("header").style.background ="url('../img/slider/3.jpg')";
}