let btnOpenMenu = document.querySelector(".fa-bars");
let btnCloseMenu = document.querySelector(".close");
let hamburgerMenu = document.querySelector(".hamburger-menu");

btnOpenMenu.addEventListener("click", function() {
    hamburgerMenu.style = "display: block";
});

btnCloseMenu.addEventListener("click", function () {
    hamburgerMenu.style = "display: none";
});