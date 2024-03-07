let menu = document.querySelector(".header__menu");
let navBar = document.querySelector(".header__navbar");

menu.addEventListener("click", function() {
    navBar.classList.toggle("header__show-list");
});