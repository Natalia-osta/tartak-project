const menuButton = document.querySelector(".menu-btn ");
const menuNavigation = document.querySelector(".menu-nav");

menuButton.addEventListener("click", toogleMenu);
function toogleMenu(evt){
    menuButton.classList.toggle('menu-btn_active');
    menuNavigation.classList.toggle('menu-nav_active');
}