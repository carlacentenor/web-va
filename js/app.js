const hamburger = document.querySelector(".hamburger");
const menuOpen = document.querySelector(".open-menu-js");
const menuClose = document.querySelector(".close-menu-js")
const expandMenu = document.querySelector(".expand-js");
const menuItem = document.querySelector('.menu-item');



// Open Menu

menuOpen.addEventListener("click", () => {
    expandMenu.classList.add('menu-section-expand');
    expandMenu.classList.remove('hide');
    viewOption();

});

menuClose.addEventListener("click", () => {
    expandMenu.classList.remove('menu-section-expand');
    expandMenu.classList.add('hide');

})


function viewOption() {
    setTimeout(function() { menuItem.classList.remove('hide'); }, 1000);
}

function hideOption() {
    setTimeout(function() { menuItem.classList.add('hide'); }, 500);
}