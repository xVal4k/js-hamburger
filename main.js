// Complete exercise by touching the display 

/*
let btnOpenMenu = document.querySelector(".fa-bars");
let btnCloseMenu = document.querySelector(".close");
let hamburgerMenu = document.querySelector(".hamburger-menu");

btnOpenMenu.addEventListener("click", function() {
    hamburgerMenu.style = "display: block";
});

btnCloseMenu.addEventListener("click", function () {
    hamburgerMenu.style = "display: none";
});
*/


// Complete exercise by adding & removing a class

let btnOpenMenu = document.querySelector (".fa-bars");
let btnCloseMenu = document.querySelector(".close");
let hamburgerMenu = document.querySelector(".hamburger-menu");

btnOpenMenu.addEventListener("click", function(){
    hamburgerMenu.classList.add("active")
});

btnCloseMenu.addEventListener("click", function(){
    hamburgerMenu.classList.remove("active")
});