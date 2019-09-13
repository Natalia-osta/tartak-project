const menuButton = document.querySelector(".menu-btn ");
const menuNavigation = document.querySelector(".menu-nav");

menuButton.addEventListener("click", toogleMenu);
function toogleMenu(evt){
    menuButton.classList.toggle('menu-btn_active');
    menuNavigation.classList.toggle('menu-nav_active');
}



const header = document.querySelector("header");
const items = document.querySelectorAll(".slider-nav  li.slider-item");

items.forEach( li => li.addEventListener("click", itemPressed));

function itemPressed(ev){
    if (items[0] === ev.target){
        header.style.background ="url('../img/slider/1.jpg')";
        header.style.transition=".5s linear";
}
    else if (items[1] === ev.target){
        header.style.background ="url('../img/slider/2.jpg')";
        header.style.backgroundSize ="cover";
        header.style.transition=".5s linear";
        this.classList.toggle('item-bg-off');
}
    else
        header.style.background ="url('../img/slider/3.jpg')";
        header.style.backgroundSize ="cover";
        header.style.transition=".5s linear";
}